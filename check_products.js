const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.shopProduct.count();
    console.log(`Total Shop Products found in DB: ${count}`);

    if (count > 0) {
        const products = await prisma.shopProduct.findMany();
        console.log('Products:', JSON.stringify(products, null, 2));
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
