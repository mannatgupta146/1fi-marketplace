"use client";

import { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Wallet, ArrowRight, Loader2, Sparkles, Copy, Check } from "lucide-react";
import { Product, ProductVariant, EmiPlan } from "./ProductCard";
import { saveOrder } from "@/lib/orders";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  selectedVariant: ProductVariant;
  selectedPlan: EmiPlan;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  product,
  selectedVariant,
  selectedPlan,
}: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyRefId = () => {
    if (orderResult?.orderId) {
      navigator.clipboard.writeText(orderResult.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          variantId: selectedVariant.id,
          emiPlanId: selectedPlan.id,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setOrderResult(resData.data);
        saveOrder({
          orderId: resData.data.orderId,
          productId: product.id,
          productName: product.name,
          brand: product.brand,
          imageUrl: selectedVariant.imageUrl || product.imageUrl,
          colorName: selectedVariant.colorName,
          storage: selectedVariant.storage,
          monthlyAmount: selectedPlan.monthlyAmount,
          tenureMonths: selectedPlan.tenureMonths,
          interestRate: selectedPlan.interestRate,
          cashbackAmount: selectedPlan.cashbackAmount,
          mfYieldSavings: selectedPlan.mfYieldSavings,
        });
      }
    } catch (err) {
      console.error("Checkout failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1Fi Plan Activation</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!orderResult ? (
          <div className="mt-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center space-x-4">
              <img
                src={selectedVariant.imageUrl || product.imageUrl}
                alt={product.name}
                className="w-16 h-16 object-contain rounded-xl bg-white p-1 border border-slate-200"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base">{product.name}</h4>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center space-x-2">
                  <span>Color: {selectedVariant.colorName}</span>
                  <span>•</span>
                  <span>{selectedVariant.storage}</span>
                </div>
                <div className="text-sm font-black text-purple-700 mt-1">
                  ₹{selectedVariant.price.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            <div className="bg-purple-50/60 rounded-2xl p-4 border border-purple-200 space-y-3">
              <div className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                Selected EMI Plan
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-purple-950">
                    ₹{selectedPlan.monthlyAmount.toLocaleString("en-IN")}<span className="text-xs font-normal text-purple-700">/mo</span>
                  </div>
                  <div className="text-xs text-purple-700 font-medium">
                    Tenure: {selectedPlan.tenureMonths} Months ({selectedPlan.interestRate}% Interest)
                  </div>
                </div>
                <span className="bg-purple-700 text-white font-bold text-xs px-3 py-1 rounded-full uppercase">
                  {selectedPlan.interestRate === 0 ? "0% No-Cost EMI" : "Standard EMI"}
                </span>
              </div>

              {selectedPlan.cashbackAmount > 0 && (
                <div className="flex items-center justify-between text-xs pt-2 border-t border-purple-200/80">
                  <span className="text-purple-800 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    Instant Cashback
                  </span>
                  <span className="font-bold text-emerald-700">
                    - ₹{selectedPlan.cashbackAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-slate-700">
              <Wallet className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-900 block mb-0.5">1Fi Mutual Fund Guarantee</span>
                Your Mutual Funds continue earning market returns while backing this EMI. Zero credit card or down payment needed.
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={onClose}
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 rounded-xl transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="w-2/3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-purple-600/20 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Confirm & Activate</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">EMI Plan Activated!</h4>
              <div className="flex items-center justify-center space-x-1.5 mt-2">
                <span className="text-xs text-slate-500 font-medium">Ref ID:</span>
                <span className="text-xs text-purple-700 font-mono font-extrabold bg-purple-50 border border-purple-200/80 px-2 py-0.5 rounded-lg select-all">
                  {orderResult.orderId}
                </span>
                <button
                  onClick={handleCopyRefId}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-purple-700 transition-colors flex items-center space-x-1 text-[11px] font-bold"
                  title="Copy Reference ID"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Product:</span>
                <span className="font-semibold text-slate-900">{orderResult.productName}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Monthly Installment:</span>
                <span className="font-black text-purple-700">₹{orderResult.monthlyAmount.toLocaleString("en-IN")} / mo</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tenure:</span>
                <span className="font-semibold text-slate-900">{orderResult.tenureMonths} Months</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm py-3 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
