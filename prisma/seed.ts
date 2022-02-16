import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`, prisma.user.findUnique({ where: { id: 1 } }));
  // const user = await prisma.user.create({
  //   data: {
  //     id: 1,
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // });
  // console.log(`Created user with id: ${user.id}`);
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
