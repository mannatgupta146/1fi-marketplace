"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

export interface ProductVariant {
  id: string;
  colorName: string;
  colorHex: string;
  storage: string;
  price: number;
  mrp: number;
  imageUrl: string;
  stock?: number;
}

export interface EmiPlan {
  id: string;
  tenureMonths: number;
  monthlyAmount: number;
  interestRate: number;
  cashbackAmount: number;
  mutualFundBacked: boolean;
  mfYieldSavings: number;
  badgeLabel?: string | null;
  description?: string | null;
  isPopular: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  basePrice: number;
  baseMrp: number;
  imageUrl: string;
  variants: ProductVariant[];
  emiPlans: EmiPlan[];
}

export default function ProductCard({ product }: { product: Product }) {
  const zeroCostEmi = product.emiPlans?.find((p) => p.interestRate === 0 || p.isPopular);
  const featuredEmi = zeroCostEmi || (product.emiPlans && product.emiPlans.length > 0
    ? [...product.emiPlans].sort((a, b) => a.monthlyAmount - b.monthlyAmount)[0]
    : null);

  const discountPercent = Math.round(
    ((product.baseMrp - product.basePrice) / product.baseMrp) * 100
  );

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Animated Purple Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent overflow-hidden">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-0 group-hover:opacity-100 animate-purple-loop transition-opacity duration-300" />
      </div>

      <div>
        {/* Image Container */}
        <div className="relative w-full h-44 sm:h-48 bg-white rounded-xl p-2.5 flex items-center justify-center overflow-hidden mb-3 border border-slate-100 group-hover:bg-purple-50/10 transition-colors">
          
          {/* Top Left: No-Cost EMI Badge */}
          {featuredEmi && (
            <div className="absolute top-2 left-2 z-10 bg-purple-700 text-white px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight shadow-xs">
              0% Interest EMI
            </div>
          )}

          {/* Top Right: Rating */}
          <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-slate-200/70 text-slate-800 text-[10px] font-bold flex items-center gap-0.5 shadow-2xs">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>

          <div className="relative w-full h-36 sm:h-40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              unoptimized
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
            <span className="font-extrabold text-purple-700 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-slate-400 font-medium">
              {product.variants.length} {product.variants.length === 1 ? "option" : "options"}
            </span>
          </div>

          <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & EMI info */}
        <div className="pt-2.5 space-y-1">
          <div className="flex items-baseline space-x-1.5 flex-wrap gap-y-0.5">
            <span className="text-lg sm:text-xl font-black text-slate-900">
              ₹{product.basePrice.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-slate-400 line-through font-medium">
              ₹{product.baseMrp.toLocaleString("en-IN")}
            </span>
            {discountPercent > 0 && (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/50">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {featuredEmi && (
            <div className="text-xs font-semibold text-slate-700 flex items-center space-x-1 pt-0.5">
              <span className="text-purple-700 font-extrabold">EMI:</span>
              <span className="font-bold text-slate-900">₹{featuredEmi.monthlyAmount.toLocaleString("en-IN")}/mo</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-100">No-Cost</span>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="pt-3">
        <div className="w-full bg-purple-600 group-hover:bg-purple-700 text-white font-bold text-xs py-2.5 px-3.5 rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-sm shadow-purple-600/20">
          <span>Explore EMI Plans</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

