
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@sotodelprior.com';
    const password = 'admin'; // Contraseña temporal
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                name: 'Administrador',
                role: 'ADMIN'
            },
            create: {
                email,
                password: hashedPassword,
                name: 'Administrador',
                role: 'ADMIN'
            },
        });
        console.log(`Usuario configurado: ${user.email} con contraseña: ${password}`);
    } catch (e) {
        console.error('Error creating user:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
