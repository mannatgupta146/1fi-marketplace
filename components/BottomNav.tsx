"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Receipt, PieChart, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isShop = pathname === "/" || pathname?.startsWith("/products");
  const isDues = pathname === "/dues";

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-full px-4 py-2 flex items-center justify-between">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center space-y-0.5 transition-colors px-2 relative ${
            pathname === "/" ? "text-purple-700 font-bold" : "text-slate-400 hover:text-purple-600 font-semibold"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link
          href="/"
          className={`flex flex-col items-center justify-center space-y-0.5 transition-colors px-2 relative ${
            isShop ? "text-purple-700 font-bold" : "text-slate-400 hover:text-purple-600 font-semibold"
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px]">Shop</span>
          {isShop && <span className="w-4 h-0.5 bg-purple-700 rounded-full absolute -bottom-1" />}
        </Link>

        <Link
          href="/dues"
          className={`flex flex-col items-center justify-center space-y-0.5 transition-colors px-2 relative ${
            isDues ? "text-purple-700 font-bold" : "text-slate-400 hover:text-purple-600 font-semibold"
          }`}
        >
          <Receipt className="w-5 h-5" />
          <span className="text-[10px]">EMI Dues</span>
          {isDues && <span className="w-4 h-0.5 bg-purple-700 rounded-full absolute -bottom-1" />}
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center space-y-0.5 text-slate-400 hover:text-purple-600 transition-colors px-2"
        >
          <PieChart className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Limit</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center justify-center space-y-0.5 text-slate-400 hover:text-purple-600 transition-colors px-2"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Profile</span>
        </Link>
      </div>
    </div>
  );
}
