
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

// Try the one in root/prisma which had 122KB
const dbPath = path.resolve('../../prisma/dev.db');
// And verify if it exists
if (!fs.existsSync(dbPath)) {
    log('DB not found at ' + dbPath);
    // Try root
    dbPath = path.resolve('../../dev.db');
}
log('Opening DB at: ' + dbPath);

const logFile = path.resolve('scripts/db_op_log.txt');

function log(msg) {
    console.log(msg);
    try { fs.appendFileSync(logFile, msg + '\n'); } catch (e) { }
}

async function run() {
    // Clear log
    try { fs.writeFileSync(logFile, ''); } catch (e) { }

    try {
        const db = new Database(dbPath);
        const email = 'gerencia@sotodelprior.com';
        const pass = '123456';
        log('Hashing...');
        const hash = await bcrypt.hash(pass, 10);

        const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
        log('Tables found: ' + JSON.stringify(tables.map(t => t.name)));

        const userTable = tables.find(t => t.name.toLowerCase() === 'user');

        if (!userTable) {
            log('ERROR: User table not found!');
            return;
        }
        const tableName = userTable.name;
        log('Using table: ' + tableName);

        const row = db.prepare(`SELECT * FROM "${tableName}" WHERE email = ?`).get(email);
        const now = new Date().toISOString();

        if (row) {
            log('User exists. Updating...');
            db.prepare(`UPDATE "${tableName}" SET password = ?, role = 'ADMIN', name = 'Gerencia', updatedAt = ? WHERE email = ?`).run(hash, now, email);
            log('SUCCESS: User updated.');
        } else {
            log('User does not exist. Creating...');
            const id = 'manual_' + Date.now().toString(36);
            // Ensure columns match schema
            db.prepare(`INSERT INTO "${tableName}" (id, email, password, role, name, createdAt, updatedAt) VALUES (?, ?, ?, 'ADMIN', 'Gerencia', ?, ?)`).run(id, email, hash, now, now);
            log('SUCCESS: User created.');
        }
    } catch (e) {
        log('EXCEPTION: ' + e.message);
        log(e.stack);
    }
}

run();
