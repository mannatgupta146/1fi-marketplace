"use client";

import Link from "next/link";
import { Lock } from "lucide-react";

export default function LimitPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4 pb-16 pt-8 text-center">
      <div className="max-w-xl mx-auto w-full flex flex-col items-center space-y-7">
        
        {/* Floating 3D Purple Lock Graphic with subtle floating animation & sparkles */}
        <div className="relative flex items-center justify-center my-2">
          {/* Radial ambient glow behind lock */}
          <div className="absolute w-44 h-44 bg-purple-200/50 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Floating Lock Graphic Container */}
          <div className="relative animate-gentle-float">
            {/* Soft outer glow ring */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-tr from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] rounded-[2rem] shadow-xl shadow-purple-500/20 flex items-center justify-center border border-purple-300/40 relative">
              <Lock className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[2.5] drop-shadow-md" />

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-[2rem]" />
            </div>

            {/* Floating Sparkle Accents */}
            <span className="absolute -top-3 -right-3 text-purple-400 text-lg animate-ping">✨</span>
            <span className="absolute -bottom-2 -left-4 text-amber-300 text-base">✦</span>
            <span className="absolute top-1/2 -left-6 text-purple-300 text-xs">✦</span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <span className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase block">
            CHECK ELIGIBILITY
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed max-w-xs mx-auto">
            Shop on 0% interest backed by your Mutual Funds
          </h2>
        </div>

        {/* Action Button */}
        <div className="w-full pt-1 max-w-xs">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Fetch my portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}

