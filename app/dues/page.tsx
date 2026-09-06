"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Receipt,
  Copy,
  Check,
  ChevronLeft,
  CheckCircle2,
  CreditCard,
} from "lucide-react";
import { getOrders, payOrderDue, ActiveOrder } from "@/lib/orders";

export default function EmiDuesPage() {
  const [orders, setOrders] = useState<ActiveOrder[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const handleCopy = (orderId: string) => {
    navigator.clipboard.writeText(orderId);
    setCopiedId(orderId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePayDue = (orderId: string) => {
    const updated = payOrderDue(orderId);
    setOrders(updated);
  };

  const activeOrders = orders.filter((o) => o.status === "ACTIVE");
  const totalMonthlyDues = activeOrders.reduce((sum, o) => sum + o.monthlyAmount, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                EMI Dues & Loans
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                Track active 1Fi credit lines & monthly payments
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-5 space-y-4">
        {/* Page Title & Total Dues Header */}
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-1.5">
              <Receipt className="w-5 h-5 text-purple-700" />
              <span>My EMI Dues</span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Active device installment plans
            </p>
          </div>

          {activeOrders.length > 0 && (
            <div className="text-right">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                Total Dues
              </span>
              <span className="text-base sm:text-lg font-black text-purple-700">
                ₹{totalMonthlyDues.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-400">/mo</span>
              </span>
            </div>
          )}
        </div>

        {/* Empty State */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 text-center space-y-3 my-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-full flex items-center justify-center mx-auto border border-purple-100">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No Active Dues</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              You don&apos;t have any active EMI plans. Explore devices on 1Fi Marketplace.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-2xs transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Explore Marketplace</span>
            </Link>
          </div>
        ) : (
          /* Orders List */
          <div className="space-y-4">
            {orders.map((ord) => {
              const isPaidFull = ord.paidMonths >= ord.tenureMonths || ord.status === "COMPLETED";
              const progressPct = Math.min(100, Math.round((ord.paidMonths / ord.tenureMonths) * 100));

              return (
                <div
                  key={ord.orderId}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs space-y-3.5 transition-all hover:border-slate-300"
                >
                  {/* Card Top: Image, Device Title & Status Pill */}
                  <div className="flex items-center space-x-3.5">
                    <div className="relative w-14 h-14 bg-slate-50 rounded-2xl border border-slate-100 p-1 flex-shrink-0 flex items-center justify-center">
                      {ord.imageUrl ? (
                        <Image
                          src={ord.imageUrl}
                          alt={ord.productName}
                          fill
                          className="object-contain p-1"
                        />
                      ) : (
                        <span className="text-purple-700 font-bold text-xs">1Fi</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-700">
                          {ord.brand}
                        </span>
                        <span
                          className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 ${
                            isPaidFull
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                              : "bg-purple-50 text-purple-700 border border-purple-200/60"
                          }`}
                        >
                          {isPaidFull ? "Paid" : "Active"}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-sm sm:text-base text-slate-900 truncate">
                        {ord.productName}
                      </h3>

                      <p className="text-xs text-slate-500 font-medium truncate">
                        {ord.colorName} • {ord.storage}
                      </p>
                    </div>
                  </div>

                  {/* Ref ID Bar */}
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 bg-slate-50/70 border border-slate-100 p-2 rounded-xl">
                    <span className="text-slate-400 font-medium">Ref ID:</span>
                    <span className="font-mono font-bold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded-md text-[11px] break-all">
                      {ord.orderId}
                    </span>
                    <button
                      onClick={() => handleCopy(ord.orderId)}
                      className="p-1 text-slate-400 hover:text-purple-700 transition-colors ml-auto flex items-center gap-1 text-[11px] font-bold"
                      title="Copy Reference ID"
                    >
                      {copiedId === ord.orderId ? (
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

                  {/* Middle Payment Card Box */}
                  <div className="bg-purple-50/40 rounded-2xl p-3.5 sm:p-4 border border-purple-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-purple-700 uppercase tracking-wider block">
                        Monthly Installment
                      </span>
                      <div className="flex items-baseline space-x-1 mt-0.5">
                        <span className="text-xl font-black text-slate-900">
                          ₹{ord.monthlyAmount.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-slate-500 font-normal">/month</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        Next Due: <strong className="text-slate-800">{ord.nextDueDate}</strong>
                      </span>
                    </div>

                    {isPaidFull ? (
                      <div className="flex items-center space-x-1.5 text-emerald-700 bg-emerald-100/80 px-4 py-2.5 rounded-xl font-extrabold text-xs justify-center sm:justify-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Paid</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handlePayDue(ord.orderId)}
                        className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-2xs transition-all flex items-center justify-center space-x-2"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Pay Monthly Due</span>
                      </button>
                    )}
                  </div>

                  {/* Tenure Progress Bar */}
                  <div className="space-y-1.5 pt-0.5">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500">
                      <span>Tenure Progress</span>
                      <span>
                        {ord.paidMonths} of {ord.tenureMonths} Months Paid ({progressPct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50">
                      <div
                        className="bg-purple-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
