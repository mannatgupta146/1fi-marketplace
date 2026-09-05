"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Star,
  ChevronLeft,
  Flame,
  ChevronDown,
  Loader2,
  AlertCircle,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  Check,
  Cpu,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import ProductCard, { Product, ProductVariant, EmiPlan } from "@/components/ProductCard";
import EmiPlanCard from "@/components/EmiPlanCard";
import CheckoutModal from "@/components/CheckoutModal";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<EmiPlan | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    async function fetchProductDetail() {
      setLoading(true);
      try {
        const res = await fetch(`/api/products/${slug}`);
        const data = await res.json();
        if (data.success && data.data) {
          const prod: Product = data.data;
          setProduct(prod);

          if (prod.variants && prod.variants.length > 0) {
            const initial = prod.variants[0];
            setSelectedVariant(initial);
            setSelectedColor(initial.colorName);
            setSelectedStorage(initial.storage);
            setSelectedImageIndex(0);
          }

          if (prod.emiPlans && prod.emiPlans.length > 0) {
            const popular = prod.emiPlans.find((p) => p.isPopular) || prod.emiPlans[0];
            setSelectedPlan(popular);
          }
        } else {
          setError(data.error || "Product not found");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetail();
  }, [slug]);

  const handleVariantChange = (color: string, storage: string) => {
    if (!product) return;

    let matched = product.variants.find(
      (v) => v.colorName === color && v.storage === storage
    );

    if (!matched) {
      matched =
        product.variants.find((v) => v.colorName === color) ||
        product.variants.find((v) => v.storage === storage) ||
        product.variants[0];
    }

    setSelectedColor(matched.colorName);
    setSelectedStorage(matched.storage);
    setSelectedVariant(matched);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-3">
        <Loader2 className="w-10 h-10 text-purple-700 animate-spin" />
        <span className="text-sm font-semibold text-slate-500">Loading Product & EMI Plans...</span>
      </div>
    );
  }

  if (error || !product || !selectedVariant) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-sm text-slate-500">{error || "Invalid product."}</p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-purple-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Return to Marketplace</span>
        </Link>
      </div>
    );
  }

  const allColors = Array.from(
    new Map(product.variants.map((v) => [v.colorName, v])).values()
  );
  const availableStorages = Array.from(
    new Set(product.variants.map((v) => v.storage))
  );

  const activeColorVariant =
    allColors.find((c) => c.colorName === selectedColor) || selectedVariant;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-10">
      {/* Breadcrumb Header */}
      <div className="border-b border-slate-200 bg-white shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-500 flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/" className="hover:text-purple-600 font-semibold transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0">
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-slate-400" />
            <span>Shop on EMI</span>
          </Link>
          <span className="text-slate-300 flex-shrink-0">/</span>
          <span className="whitespace-nowrap flex-shrink-0">{product.category}</span>
          <span className="text-slate-300 flex-shrink-0">/</span>
          <span className="whitespace-nowrap flex-shrink-0">{product.brand}</span>
          <span className="text-slate-300 flex-shrink-0">/</span>
          <span className="font-bold text-slate-900 truncate min-w-0">
            {product.name} ({selectedVariant.colorName}, {selectedVariant.storage})
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Product Gallery & Variant Selectors (Sticky on Desktop) */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-24 self-start">
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
              {/* Color Variant Selector Thumbnails */}
              <div className="flex flex-row sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-2.5 overflow-x-auto sm:overflow-y-auto max-h-none sm:max-h-[440px] p-1.5 no-scrollbar justify-start">
                {allColors.map((col) => {
                  const isSelected = selectedColor === col.colorName;
                  return (
                    <button
                      key={col.colorName}
                      onClick={() => handleVariantChange(col.colorName, selectedStorage)}
                      title={`${col.colorName}`}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-1 bg-white transition-all duration-200 flex-shrink-0 flex items-center justify-center border-2 ${
                        isSelected
                          ? "border-purple-600 shadow-md bg-purple-50/30 scale-105"
                          : "border-slate-200/90 hover:border-slate-300 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-slate-50/40">
                        <img
                          src={col.imageUrl}
                          alt={col.colorName}
                          className="w-full h-full object-contain p-0.5 transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Main Showcase Image */}
              <div className="w-full sm:flex-1 relative h-[320px] min-h-[320px] sm:h-[440px] bg-gradient-to-b from-slate-50/80 via-white to-slate-100/30 rounded-2xl border border-slate-200/90 p-4 flex items-center justify-center shadow-xs overflow-hidden group">
                <Image
                  src={selectedVariant.imageUrl || product.imageUrl}
                  alt={product.name}
                  fill
                  priority
                  unoptimized
                  className="object-contain p-4 sm:p-6 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-emerald-50/90 backdrop-blur-md border border-emerald-200/80 shadow-2xs px-2.5 py-1 rounded-full text-emerald-800 text-[10px] sm:text-[11px] font-bold flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>In Stock ({selectedVariant.stock || 15} left)</span>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs px-2.5 py-1 rounded-full text-slate-800 text-xs font-semibold flex items-center gap-1 z-10">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Visual Color & Storage Variant Selectors */}
            <div className="space-y-4 pt-1">
              {/* Color Swatch Selectors */}
              <div>
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                  Select Color: <span className="text-slate-900 font-bold">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {allColors.map((col) => {
                    const isSelected = selectedColor === col.colorName;
                    return (
                      <button
                        key={col.colorName}
                        onClick={() => handleVariantChange(col.colorName, selectedStorage)}
                        title={col.colorName}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? "border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-600/20 shadow-2xs"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs"
                          style={{ backgroundColor: col.colorHex }}
                        />
                        <span>{col.colorName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Storage Variant Selectors */}
              <div>
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                  Select Storage: <span className="text-slate-900 font-bold">{selectedStorage}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableStorages.map((st) => {
                    const isSelected = selectedStorage === st;
                    const isAvailableInColor = product.variants.some(
                      (v) => v.storage === st && v.colorName === selectedColor
                    );

                    return (
                      <button
                        key={st}
                        onClick={() => handleVariantChange(selectedColor, st)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border ${
                          isSelected
                            ? "border-purple-600 bg-purple-600 text-white shadow-xs"
                            : isAvailableInColor
                            ? "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                            : "border-slate-200/60 bg-slate-100/60 text-slate-500 opacity-60 border-dashed"
                        }`}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Product Details & EMI Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="text-xs text-orange-600 font-semibold flex items-center gap-1 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  70+ sold on 1Fi
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-2 flex items-baseline space-x-3">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">
                  ₹{selectedVariant.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm sm:text-base text-slate-400 line-through font-medium">
                  ₹{selectedVariant.mrp.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Key Specifications & Highlights (Clean Text Chips, No Icons) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 leading-tight">100% Genuine</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">1-Yr Official Warranty</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 leading-tight">Express Shipping</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">Delivered in 24-48 Hours</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 leading-tight">Zero Down Payment</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">No upfront cash required</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-900 leading-tight">7-Day Replacement</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">Hassle-free return policy</div>
              </div>
            </div>

            {/* Credit Limit Highlight Banner */}
            <div className="bg-gradient-to-r from-purple-50/90 via-slate-50 to-purple-50/60 border border-purple-200/90 rounded-2xl p-3 sm:p-4 space-y-1.5 shadow-2xs overflow-hidden">
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-600/10 border border-purple-200 flex items-center justify-center flex-shrink-0 text-purple-700">
                    <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-700" />
                  </div>
                  <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 whitespace-nowrap">
                    Higher Credit Limit
                  </span>
                </div>
                <span className="text-[9px] sm:text-xs font-extrabold bg-slate-900 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs whitespace-nowrap flex-shrink-0">
                  Instant Approval
                </span>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-medium pl-7 sm:pl-9 leading-snug">
                Pledge Mutual Funds for up to <span className="text-purple-700 font-bold whitespace-nowrap">₹3,50,000 Limit</span>
              </div>
            </div>

            {/* Extended Product Specifications & Box Details */}
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-2xs overflow-hidden">
              {/* Card Header (Full Width Divider) */}
              <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">Product Specifications</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Technical specifications & highlights</p>
                </div>
                <span className="text-[10px] sm:text-xs font-extrabold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200/80 whitespace-nowrap flex-shrink-0">
                  100% Genuine
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Clean Divide Specs Table */}
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-500 whitespace-nowrap flex-shrink-0">Model Name</span>
                    <span className="font-bold text-slate-900 text-right truncate">
                      {product.name.startsWith(product.brand) ? product.name : `${product.brand} ${product.name}`}
                    </span>
                  </div>
                  <div className="py-2 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-500 whitespace-nowrap flex-shrink-0">Variant</span>
                    <span className="font-bold text-slate-900 text-right">{selectedVariant.colorName} ({selectedVariant.storage})</span>
                  </div>
                  <div className="py-2 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-500 whitespace-nowrap flex-shrink-0">Category</span>
                    <span className="font-bold text-slate-900 text-right">{product.category}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-500 whitespace-nowrap flex-shrink-0">Availability</span>
                    <span className="font-bold text-emerald-700 text-right">{selectedVariant.stock || 15} Units Left</span>
                  </div>
                  <div className="py-2 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-500 whitespace-nowrap flex-shrink-0">Warranty</span>
                    <span className="font-bold text-slate-900 text-right">1-Year Official Warranty</span>
                  </div>
                </div>

                {/* In The Box */}
                <div className="bg-purple-50/60 border border-purple-100/80 p-3 sm:p-3.5 rounded-xl space-y-1">
                  <div className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-purple-800">In The Box</div>
                  <p className="text-[11px] sm:text-sm text-slate-600 font-medium leading-relaxed">
                    1× {product.name} ({selectedVariant.colorName}), USB-C Power Cable, User Manual, 1Fi Protection Card.
                  </p>
                </div>
              </div>
            </div>

            {/* EMI Section */}
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-2xs overflow-hidden">
              {/* Card Header (Full Width Divider) */}
              <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">Select EMI Plan</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Zero cost flexible monthly options</p>
                </div>
                <span className="text-[10px] sm:text-xs font-bold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200 whitespace-nowrap flex-shrink-0">
                  No Hidden Fees
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="space-y-2.5">
                  {product.emiPlans.map((plan) => (
                    <EmiPlanCard
                      key={plan.id}
                      plan={plan}
                      isSelected={selectedPlan?.id === plan.id}
                      onSelect={(p) => setSelectedPlan(p)}
                      productPrice={selectedVariant.price}
                    />
                  ))}
                </div>

                {selectedPlan && (
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-purple-600/20 flex items-center justify-center space-x-2 transition-all mt-4 cursor-pointer"
                  >
                    <span>Buy on {selectedPlan.tenureMonths} months EMI</span>
                  </button>
                )}
              </div>
            </div>

            {/* Merchant Details */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-200/80">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                <span className="leading-snug">Sold By: <strong className="text-slate-800 font-bold">1Fi Partner Reseller</strong></span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-700 font-semibold whitespace-nowrap bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Verified Seller</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {selectedPlan && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          product={product}
          selectedVariant={selectedVariant}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  );
}
