import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, variantId, emiPlanId } = body;

    if (!productId || !emiPlanId) {
      return NextResponse.json(
        {
          success: false,
          error: "Product ID and EMI Plan ID are required",
        },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    const emiPlan = await prisma.emiPlan.findUnique({
      where: { id: emiPlanId },
    });

    if (!product || !emiPlan) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid Product or EMI Plan",
        },
        { status: 404 }
      );
    }

    // Generate simulated order confirmation with 1Fi mutual fund collateral allocation
    const orderId = `1FI-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        productName: product.name,
        monthlyAmount: emiPlan.monthlyAmount,
        tenureMonths: emiPlan.tenureMonths,
        cashbackAmount: emiPlan.cashbackAmount,
        mutualFundBacked: emiPlan.mutualFundBacked,
        mfYieldSavings: emiPlan.mfYieldSavings,
        status: "APPROVED",
        message: "Your 1Fi Mutual Fund Backed EMI plan has been confirmed!",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process checkout",
      },
      { status: 500 }
    );
  }
}
