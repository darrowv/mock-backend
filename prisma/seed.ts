import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      password: 'alicealice',
      role: 'user',
      name: 'Alice',
      Post: {
        create: {
          title: 'Check out Prisma with Next.js',
          body: 'https://www.prisma.io/nextjs',
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: 'BobBob',
      role: 'user',
      Post: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            body: 'https://twitter.com/prisma',
          },
          {
            title: 'Follow Nexus on Twitter',
            body: 'https://twitter.com/nexusgql',
          },
        ],
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
