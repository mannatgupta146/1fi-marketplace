"use client";

import { Flame, Store, ShoppingBag } from "lucide-react";

interface ShopTabsProps {
  activeTab: "top-brands" | "nearby-stores" | "marketplace";
  setActiveTab: (tab: "top-brands" | "nearby-stores" | "marketplace") => void;
}

export default function ShopTabs({ activeTab, setActiveTab }: ShopTabsProps) {
  const tabs = [
    {
      id: "top-brands" as const,
      label: "Top Brands",
      icon: Flame,
    },
    {
      id: "nearby-stores" as const,
      label: "Nearby Stores",
      icon: Store,
    },
    {
      id: "marketplace" as const,
      label: "Marketplace",
      icon: ShoppingBag,
      isNew: true,
    },
  ];

  return (
    <div className="w-full flex justify-center -mt-6 relative z-30 px-2 sm:px-4">
      <div className="bg-white/95 backdrop-blur-md p-1 sm:p-1.5 rounded-full shadow-lg border border-purple-100 flex items-center space-x-0.5 sm:space-x-1 max-w-xl w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 px-1.5 sm:px-3 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center space-x-1 whitespace-nowrap relative ${
                isActive
                  ? "bg-white text-purple-700 shadow-md ring-1 ring-purple-500/20"
                  : "text-slate-500 hover:text-purple-600 hover:bg-purple-50/50"
              }`}
            >
              <span className="whitespace-nowrap truncate">{tab.label}</span>
              {tab.isNew && (
                <span className="text-[8px] sm:text-[9px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded-full uppercase tracking-tight flex-shrink-0">
                  NEW
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0.5 w-4 h-0.5 bg-purple-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
