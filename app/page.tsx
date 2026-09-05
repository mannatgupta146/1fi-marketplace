"use client";

import { useEffect, useState } from "react";
import ShopTabs from "@/components/ShopTabs";
import ProductCard, { Product } from "@/components/ProductCard";
import { Search, ShoppingBag, AlertCircle, RefreshCw, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<"top-brands" | "nearby-stores" | "marketplace">("marketplace");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      } else {
        setError(data.error || "Failed to load products");
      }
    } catch (err: any) {
      setError(err.message || "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const topBrands = [
    { name: "Air India", text: "No-cost EMIs upto 18 months", logoText: "AIR INDIA", bg: "bg-red-600", textColor: "text-white" },
    { name: "Apple Premium Reseller", text: "No-cost EMIs upto 24 months", logoText: " Reseller", bg: "bg-slate-950", textColor: "text-white" },
    { name: "CaratLane", text: "No-cost EMIs upto 6 months", logoText: "CARATLANE", bg: "bg-purple-700", textColor: "text-white" },
    { name: "CGH Earth", text: "No-cost EMIs upto 24 months", logoText: "cgh earth", bg: "bg-stone-100 border border-stone-300", textColor: "text-stone-700" },
    { name: "Croma", text: "No-cost EMIs upto 6 months", logoText: "cromā", bg: "bg-teal-600", textColor: "text-white" },
    { name: "EaseMyTrip Holiday", text: "No-cost EMIs upto 24 months", logoText: "EaseMyTrip", bg: "bg-sky-600", textColor: "text-white" },
    { name: "EaseMyTrip Hotel", text: "No-cost EMIs upto 24 months", logoText: "EaseMyTrip", bg: "bg-sky-700", textColor: "text-white" },
    { name: "Giva", text: "No-cost EMIs upto 36 months", logoText: "GIVA", bg: "bg-pink-100 border border-pink-200", textColor: "text-pink-600" },
    { name: "Giva Gold Voucher", text: "No-cost EMIs upto 12 months", logoText: "GIVA GOLD", bg: "bg-amber-100 border border-amber-200", textColor: "text-amber-700" },
  ];

  const nearbyStores = [
    { name: "Pacholi Suzuki...", distance: "527 KM", address: "64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana...", brand: "SUZUKI", brandColor: "text-red-600" },
    { name: "Pacholi Suzuki...", distance: "529 KM", address: "RAKBA 12, KANAL 11, MARLA 0, Hayatpur, SARSAI, Gurugram, Haryana, 122001", brand: "SUZUKI", brandColor: "text-red-600" },
    { name: "Pacholi Suzuki...", distance: "529 KM", address: "6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001", brand: "SUZUKI", brandColor: "text-red-600" },
    { name: "Malwa Honda...", distance: "529 KM", address: "60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001", brand: "HONDA", brandColor: "text-red-500" },
    { name: "Atelier Forbid...", distance: "530 KM", address: "Sector 40, Gurugram, Haryana, 122001", brand: "ATELIER", brandColor: "text-amber-600" },
    { name: "Ashoka Suzuki", distance: "531 KM", address: "Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001", brand: "SUZUKI", brandColor: "text-red-600" },
    { name: "Charger On Wheel...", distance: "532 KM", address: "Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101", brand: "CHARGER", brandColor: "text-emerald-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <ShopTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "top-brands"
                ? "Search online stores..."
                : activeTab === "nearby-stores"
                ? "Search stores..."
                : "Search smartphones, laptops on EMI..."
            }
            className="w-full bg-white text-slate-800 placeholder:text-slate-400 text-sm font-medium rounded-full pl-11 pr-4 py-3.5 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
        </div>

        {activeTab === "top-brands" && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900">Top Brands</h2>

            <div className="space-y-3">
              {topBrands
                .filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((brand, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
                    <div className={`w-16 h-16 rounded-2xl ${brand.bg} flex items-center justify-center ${brand.textColor} font-extrabold text-[10px] leading-tight p-1.5 text-center flex-shrink-0 overflow-hidden tracking-tighter shadow-xs`}>
                      <span className="max-w-full break-words line-clamp-2 uppercase">{brand.logoText}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{brand.name}</h3>
                      <p className="text-xs text-slate-500 font-medium">{brand.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === "nearby-stores" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900">Nearby Stores</h2>
              <button className="flex items-center space-x-1 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full">
                <span>Udhampur</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {nearbyStores
                .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.address.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((store, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex items-center space-x-3.5 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-slate-200/80 flex items-center justify-center p-2 flex-shrink-0 bg-slate-50 overflow-hidden text-center">
                      <span className={`font-black ${store.brandColor} text-[10px] sm:text-[11px] tracking-tight truncate max-w-full uppercase`}>{store.brand}</span>
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 truncate">{store.name}</h3>
                        <span className="text-[9px] sm:text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase flex-shrink-0">
                          {store.distance}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                        {store.address}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === "marketplace" && (
          <div className="space-y-6">
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="space-y-0.5">
                <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700 flex-shrink-0" />
                  <span className="truncate">1Fi Marketplace</span>
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1">
                  Backed by Mutual Funds
                </p>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-purple-700 bg-purple-100/90 px-2.5 py-1 rounded-full border border-purple-200/80 flex-shrink-0">
                {filteredProducts.length} Products
              </span>
            </div>

            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 border border-slate-200/90 animate-pulse flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Image Skeleton */}
                      <div className="w-full h-52 bg-slate-100 rounded-xl mb-4" />

                      {/* Content Skeleton */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-16 bg-slate-200 rounded" />
                          <div className="h-3 w-12 bg-slate-100 rounded" />
                        </div>
                        <div className="h-5 w-3/4 bg-slate-200 rounded" />
                        <div className="h-3.5 w-full bg-slate-100 rounded" />
                        <div className="h-3.5 w-2/3 bg-slate-100 rounded" />
                      </div>

                      {/* Price & EMI Skeleton */}
                      <div className="pt-3 space-y-2">
                        <div className="h-6 w-28 bg-slate-200 rounded" />
                        <div className="h-12 w-full bg-purple-50/50 rounded-xl" />
                      </div>
                    </div>

                    {/* Button Skeleton */}
                    <div className="pt-2">
                      <div className="h-10 w-full bg-slate-200 rounded-xl" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="bg-white rounded-2xl p-6 text-center border border-red-200 space-y-3">
                <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
                <p className="text-sm font-semibold text-slate-800">{error}</p>
                <button
                  onClick={fetchProducts}
                  className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1 mx-auto"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
