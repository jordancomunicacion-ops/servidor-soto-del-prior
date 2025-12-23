const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "file:./dev.db"
        }
    }
});

async function main() {
    console.log('Seeding Shop Products...');

    const products = [
        {
            name: 'Menú Degustación',
            description: 'Experiencia gastronómica inolvidable. 6 Pases.',
            price: 70.00,
            image: '/web/assets/img_restaurante.png', // Reusing restaurant image as placeholder/actual
            category: 'PACK'
        },
        {
            name: 'Pack Artesanal',
            description: 'Chorizo, salchichón y cecina de buey de bellota.',
            price: 50.00,
            image: '/web/assets/bread.png', // Reusing bread image
            category: 'PACK'
        },
        {
            name: 'Visita a la Granja',
            description: 'Experiencia guiada. Conoce el origen.',
            price: 20.00,
            image: '/web/assets/hero_landscape_clean.png', // Landscape for visit
            category: 'VISIT'
        }
    ];

    for (const p of products) {
        const exists = await prisma.shopProduct.findFirst({
            where: { name: p.name }
        });

        if (!exists) {
            await prisma.shopProduct.create({
                data: p
            });
            console.log(`Created: ${p.name}`);
        } else {
            console.log(`Skipped (Exists): ${p.name}`);
        }
    }

    console.log('Shop seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
