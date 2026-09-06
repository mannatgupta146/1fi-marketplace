"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Percent, Scan, Zap, Lock, ShoppingBag, ChevronDown } from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const topBrands = [
    { name: "Air India", text: "AIR INDIA", textColor: "text-red-600 font-extrabold text-[10px]" },
    { name: "Goibibo", text: "goibibo", textColor: "text-orange-600 font-black text-xs" },
    { name: "Wakefit", text: "wakefit", textColor: "text-indigo-950 font-black text-xs" },
    { name: "EaseMyTrip", text: "EaseMyTrip", textColor: "text-sky-600 font-extrabold text-[9px]" },
    { name: "Yatra", text: "yatra", textColor: "text-red-600 font-black text-xs" },
    { name: "Taj", text: "TAJ", textColor: "text-amber-800 font-serif font-black text-xs" },
    { name: "Apple", text: " Apple", textColor: "text-slate-900 font-bold text-xs" },
  ];

  const faqs = [
    {
      question: "What is 1Fi?",
      answer: "1Fi is a platform that lets you shop on 0% interest EMIs backed by your mutual fund portfolio without redeeming your investments."
    },
    {
      question: "Is 1Fi safe and legit?",
      answer: "Yes, 1Fi works with RBI-regulated lending partners and bank-grade security to ensure your data and investments are 100% secure."
    },
    {
      question: "Who is the RBI approved lending partner?",
      answer: "We partner with leading RBI-regulated NBFCs and banks to grant credit limits against pledged mutual fund units."
    },
    {
      question: "What documents are needed to take a loan?",
      answer: "No physical documents are required! All you need is PAN verification and quick digital OTP authorization for your portfolio."
    },
    {
      question: "Are there any hidden fees?",
      answer: "Zero hidden fees! You pay 0% interest and 0 processing charges on eligible transactions."
    },
    {
      question: "What if markets fall?",
      answer: "Your limit is calculated dynamically with safety buffers so normal market fluctuations do not affect your active EMIs."
    },
    {
      question: "Are there any charges if I pay early to release my pledged mutual fund units?",
      answer: "No, there are zero foreclosure charges or prepayment penalties. You can prepay anytime and unpledge your mutual funds instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 pt-6 px-4">
      <div className="max-w-xl mx-auto space-y-7">

        {/* 1. TOP BANNER: GET STARTED */}
        <div className="relative bg-gradient-to-br from-[#3b08b5] via-[#4d0cd5] to-[#32069b] text-white rounded-3xl p-6 sm:p-7 shadow-xl overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-12 gap-4 items-center relative z-10">
            {/* Left Column Content */}
            <div className="col-span-7 sm:col-span-7 space-y-3">
              <span className="text-[10px] sm:text-[11px] font-extrabold text-purple-200 tracking-widest uppercase block">
                GET STARTED
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                Shop on <span className="text-amber-300">no-cost EMI</span>
              </h2>

              <p className="text-[11px] sm:text-xs text-purple-100 font-medium leading-relaxed">
                Backed by your mutual funds, No credit pull, No charges, & quick approval.
              </p>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 bg-white text-slate-950 hover:bg-purple-50 font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md transition-all group"
                >
                  <span>Check eligibility</span>
                  <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3D 0% INTEREST Graphic */}
            <div className="col-span-5 sm:col-span-5 flex justify-end relative">
              <div className="relative transform rotate-6 scale-105 select-none text-center">
                <div className="drop-shadow-2xl">
                  <div className="text-4xl sm:text-5xl font-black tracking-tighter text-amber-300 drop-shadow-md">
                    0%
                  </div>
                  <div className="text-xs sm:text-sm font-black tracking-widest text-white uppercase -mt-1 drop-shadow-sm">
                    INTEREST
                  </div>
                </div>
                {/* Floating Gold Streamer Ribbons */}
                <div className="absolute -top-3 -right-2 text-amber-300 text-xl font-bold animate-bounce">
                  ✨
                </div>
                <div className="absolute -bottom-2 -left-3 text-amber-400 text-lg font-bold">
                  🎗️
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. OFFERS SECTION (Full Width Scrollable Slide) */}
        <div className="space-y-3.5">
          <div className="flex items-center space-x-2 border-l-4 border-purple-600 pl-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-purple-900 tracking-wider uppercase">
              OFFERS
            </h3>
          </div>

          {/* Full Width Scrollable Offer Slides */}
          <div className="overflow-x-auto flex space-x-4 no-scrollbar snap-x snap-mandatory py-1">

            {/* Slide 1: MakeMyTrip European Escape */}
            <div className="w-full flex-shrink-0 snap-center bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden h-52 sm:h-60 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
                alt="Euro-phoric Escape"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />

              <div className="relative z-20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-black text-amber-300 uppercase tracking-widest block">
                    HOLIDAY VOUCHER DEAL
                  </span>
                  <span className="font-black text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-md uppercase tracking-tight">
                    make my trip
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight pt-1">
                  Book Your Euro-phoric<br />Escape with 1Fi
                </h4>
              </div>

              <div className="relative z-20 pt-2">
                <div className="inline-flex items-center space-x-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white border border-white/25">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span>Starts at ₹2,481/mo</span>
                </div>
              </div>
            </div>

            {/* Slide 2: Adventure Ride Deal */}
            <div className="w-full flex-shrink-0 snap-center bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden h-52 sm:h-60 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop"
                alt="Adventure Ride Deal"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />

              <div className="relative z-20 space-y-1">
                <span className="text-[10px] sm:text-[11px] font-black text-amber-300 uppercase tracking-widest block">
                  ADVENTURE RIDE DEAL
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight pt-1">
                  Upgrade to Your next<br />Adventerous Ride
                </h4>
              </div>

              <div className="relative z-20 pt-2">
                <div className="inline-flex items-center space-x-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white border border-white/25">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span>Adventure on 60m EMIs</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center space-x-1.5 pt-1">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-6 h-2 rounded-full bg-purple-600" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* 3. SHOP USING 1FI AT TOP BRANDS (Single Row Marquee Loop) */}
        <div className="space-y-3.5">
          <div className="flex items-center space-x-2 border-l-4 border-purple-600 pl-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-purple-900 tracking-wider uppercase">
              SHOP USING 1FI AT TOP BRANDS
            </h3>
          </div>

          <div className="relative overflow-hidden w-full py-1">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex space-x-4">
              {[...topBrands, ...topBrands, ...topBrands].map((brand, idx) => (
                <Link
                  key={idx}
                  href="/"
                  className="flex flex-col items-center space-y-1.5 group flex-shrink-0 w-20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center p-2 group-hover:shadow-md group-hover:border-purple-300 transition-all overflow-hidden">
                    <span className={`${brand.textColor} line-clamp-1 text-center`}>{brand.text}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 truncate max-w-full text-center">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 4. WHY PAY WITH 1FI (Top Left-to-Right & Bottom Right-to-Left Infinite Marquee Loops) */}
        <div className="space-y-3.5 pt-2">
          <div className="flex items-center space-x-2 border-l-4 border-purple-600 pl-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-purple-900 tracking-wider uppercase">
              WHY PAY WITH 1FI
            </h3>
          </div>

          <div className="relative overflow-hidden w-full py-1 space-y-3">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Top Row: Left to Right Loop */}
            <div className="animate-marquee-reverse flex space-x-3.5">
              {[1, 2, 3].flatMap(() => [
                { title: "Keep growing", desc: "No tax, no exit load.", icon: TrendingUp, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                { title: "0% interest", desc: "Repay only what you spend.", icon: Percent, bg: "bg-purple-50 text-purple-600 border-purple-100" },
              ]).map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={`top-${idx}`} className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-2xs flex items-center space-x-3.5 hover:shadow-md transition-shadow w-64 sm:w-72 flex-shrink-0">
                    <div className={`w-11 h-11 rounded-2xl ${card.bg} border flex items-center justify-center flex-shrink-0`}>
                      <IconComp className="w-5.5 h-5.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">{card.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row: Right to Left Loop */}
            <div className="animate-marquee flex space-x-3.5">
              {[1, 2, 3].flatMap(() => [
                { title: "Quickest approvals", desc: "Instant eligibility check.", icon: Scan, bg: "bg-sky-50 text-sky-600 border-sky-100" },
                { title: "Zero charges", desc: "No fees, nothing hidden.", icon: Zap, bg: "bg-amber-50 text-amber-600 border-amber-100" },
              ]).map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={`bot-${idx}`} className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-2xs flex items-center space-x-3.5 hover:shadow-md transition-shadow w-64 sm:w-72 flex-shrink-0">
                    <div className={`w-11 h-11 rounded-2xl ${card.bg} border flex items-center justify-center flex-shrink-0`}>
                      <IconComp className="w-5.5 h-5.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">{card.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5. HOW 1FI WORKS */}
        <div className="space-y-3.5 pt-2">
          <div className="flex items-center space-x-2 border-l-4 border-purple-600 pl-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-purple-900 tracking-wider uppercase">
              HOW 1FI WORKS
            </h3>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
            <div className="grid grid-cols-3 gap-2 relative">
              {/* Dashed Connecting Line */}
              <div className="absolute top-6 left-1/6 right-1/6 h-[2px] border-t-2 border-dashed border-slate-300 z-0 pointer-events-none" />

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-3">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30">
                    <Scan className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center border-2 border-white">
                    1
                  </span>
                </div>
                <h4 className="font-extrabold text-[11px] sm:text-xs text-slate-700 uppercase tracking-tight leading-tight">
                  CONNECT<br />YOUR<br />PORTFOLIO
                </h4>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-3">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30">
                    <Lock className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center border-2 border-white">
                    2
                  </span>
                </div>
                <h4 className="font-extrabold text-[11px] sm:text-xs text-slate-700 uppercase tracking-tight leading-tight">
                  UNLOCK<br />YOUR<br />LIMIT
                </h4>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-3">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30">
                    <ShoppingBag className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center border-2 border-white">
                    3
                  </span>
                </div>
                <h4 className="font-extrabold text-[11px] sm:text-xs text-slate-700 uppercase tracking-tight leading-tight">
                  SHOP &<br />PAY<br />LATER
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* 6. REFER AND EARN BANNER */}
        <div className="relative bg-gradient-to-br from-[#4c0edb] via-[#3b08b5] to-[#2b0580] text-white rounded-3xl p-6 sm:p-7 shadow-xl overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-12 gap-3 items-center relative z-10">
            {/* Left Content */}
            <div className="col-span-7 space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-emerald-500/90 text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                <span>INVITE</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                Get <span className="font-black text-amber-300">upto ₹1000</span> for every friend.
              </h3>
              <p className="text-[11px] text-purple-200 font-medium">
                Plus they&apos;ll also get rewards.
              </p>
            </div>

            {/* Right 3D REFER AND EARN Text Banner */}
            <div className="col-span-5 flex justify-end">
              <div className="transform rotate-3 select-none text-right">
                <span className="block text-xl sm:text-2xl font-black text-white tracking-tighter drop-shadow-md leading-tight uppercase">
                  REFER
                </span>
                <span className="block text-sm sm:text-base font-black text-amber-300 tracking-wider drop-shadow-md leading-tight uppercase">
                  AND
                </span>
                <span className="block text-2xl sm:text-3xl font-black text-white tracking-tighter drop-shadow-md leading-tight uppercase">
                  EARN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-3.5 pt-2">
          <div className="flex items-center space-x-2 border-l-4 border-purple-600 pl-2">
            <h3 className="font-extrabold text-xs sm:text-sm text-purple-900 tracking-wider uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 divide-y divide-slate-100 shadow-xs overflow-hidden">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-purple-700 transition-colors pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pt-3 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* View All FAQs Button */}
          <div className="pt-2">
            <button
              onClick={() => setOpenFaq(openFaq === null ? 0 : null)}
              className="w-full flex items-center justify-center space-x-2 bg-[#f8f5ff] border border-purple-100 hover:bg-purple-100/60 text-purple-700 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-2xs transition-all group"
            >
              <span>View all FAQs</span>
              <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}


