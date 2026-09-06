import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// In production serverless environments (like Vercel), point SQLite to writable /tmp directory if needed
const databaseUrl =
  process.env.NODE_ENV === "production" && process.env.VERCEL
    ? "file:/tmp/dev.db"
    : process.env.DATABASE_URL || "file:./dev.db";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

