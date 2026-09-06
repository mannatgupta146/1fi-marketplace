import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initialProducts } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const product = await prisma.product.findFirst({
      where: {
        OR: [{ slug: slug }, { id: slug }],
      },
      include: {
        variants: true,
        emiPlans: {
          orderBy: {
            tenureMonths: "asc",
          },
        },
      },
    });

    if (product) {
      return NextResponse.json({
        success: true,
        data: product,
      });
    }
  } catch (error: any) {
    console.error("Prisma serverless slug query notice, checking catalog data:", error?.message);
  }

  const fallbackProduct = initialProducts.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (fallbackProduct) {
    return NextResponse.json({
      success: true,
      data: fallbackProduct,
    });
  }

  return NextResponse.json(
    {
      success: false,
      error: "Product not found",
    },
    { status: 404 }
  );
}
