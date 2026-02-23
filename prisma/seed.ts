import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env['DATABASE_URL'] as string),
});

async function main() {
  await Promise.all(
    Array.from({ length: 15 }).map((_, i) => {
      // Upsert comes here
      return new Promise((resolve) => {
        resolve({});
      });
    }),
  );
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
