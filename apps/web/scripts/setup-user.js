
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const email = 'gerencia@sotodelprior.com';
    const password = '123456';
    console.log('Iniciando script...');

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Contraseña hasheada.');

        const user = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                name: 'Gerencia',
                role: 'ADMIN'
            },
            create: {
                email,
                password: hashedPassword,
                name: 'Gerencia',
                role: 'ADMIN'
            },
        });
        console.log(`Usuario configurado correctamente: ${user.email}`);
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
