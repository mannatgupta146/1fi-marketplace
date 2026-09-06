import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initialProducts } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        variants: true,
        emiPlans: {
          orderBy: {
            tenureMonths: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (products && products.length > 0) {
      return NextResponse.json({
        success: true,
        data: products,
      });
    }
  } catch (error: any) {
    console.error("SQLite/Prisma serverless connection notice, serving catalog data:", error?.message);
  }

  // Guaranteed 200 OK fallback catalog response for serverless deployments
  return NextResponse.json({
    success: true,
    data: initialProducts,
  });
}
