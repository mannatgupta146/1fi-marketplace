"use client";

import { Sparkles } from "lucide-react";
import { EmiPlan } from "./ProductCard";

interface EmiPlanCardProps {
  plan: EmiPlan;
  isSelected: boolean;
  onSelect: (plan: EmiPlan) => void;
  productPrice: number;
}

export default function EmiPlanCard({
  plan,
  isSelected,
  onSelect,
}: EmiPlanCardProps) {
  return (
    <div
      onClick={() => onSelect(plan)}
      className={`cursor-pointer rounded-xl p-2.5 sm:p-3.5 transition-all duration-200 border space-y-1 ${
        isSelected
          ? "bg-purple-50/70 border-purple-600 ring-2 ring-purple-600/20 shadow-2xs"
          : "bg-white border-slate-200/90 hover:border-slate-300"
      }`}
    >
      {/* Row 1: Radio + Amount + Tenure + Interest Badge */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0">
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              isSelected
                ? "border-purple-600 bg-purple-600"
                : "border-slate-300 bg-white"
            }`}
          >
            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>

          <div className="flex items-baseline space-x-1 sm:space-x-1.5 whitespace-nowrap min-w-0">
            <span className="font-extrabold text-sm sm:text-base text-slate-900">
              ₹{plan.monthlyAmount.toLocaleString("en-IN")}
            </span>
            <span className="text-slate-500 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
              × {plan.tenureMonths} mon
            </span>
          </div>
        </div>

        <span
          className={`text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
            plan.interestRate === 0
              ? "bg-purple-700 text-white shadow-2xs"
              : "bg-slate-100 text-slate-700 border border-slate-200"
          }`}
        >
          {plan.interestRate === 0 ? "0% Interest" : `${plan.interestRate}% Int`}
        </span>
      </div>

      {/* Row 2: Instant Cashback Note */}
      {plan.cashbackAmount > 0 && (
        <div className="pl-6 text-[10px] sm:text-xs text-emerald-600 font-semibold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 flex-shrink-0" />
          <span>₹{plan.cashbackAmount.toLocaleString("en-IN")} Instant Cashback</span>
        </div>
      )}
    </div>
  );
}
