"use client";

import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white relative overflow-hidden pt-6 pb-12 px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-4">
        <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center space-x-1.5 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>NO-COST EMIs</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Shop today,<br />
              <span className="italic font-normal">Pay later using</span> Mutual funds.
            </h1>

            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-medium">
              No credit score required. No interest. Backed by your investments.
            </p>
          </div>

          <div className="hidden md:flex relative w-48 h-36 items-center justify-center">
            <div className="w-36 h-36 bg-gradient-to-tr from-purple-500/30 to-amber-400/30 rounded-full blur-xl absolute" />
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop"
              alt="1Fi Tech Marketplace"
              className="w-32 h-32 object-contain drop-shadow-2xl relative z-10 transform rotate-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
