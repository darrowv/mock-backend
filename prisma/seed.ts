// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.post.upsert({
    where: { text: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      text: 'Prisma Adds Support for MongoDB',
      author: 'Jack',
    },
  });

  const post2 = await prisma.post.upsert({
    where: { text: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      text: "What's new in Prisma? (Q1/22)",
      author: 'John',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
