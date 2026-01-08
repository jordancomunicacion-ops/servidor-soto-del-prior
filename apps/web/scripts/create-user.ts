
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'gerencia@sotodelprior.com';
    const password = '123456';
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
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
        console.error('Error configurando usuario:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
