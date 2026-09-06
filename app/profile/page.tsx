"use client";

import Link from "next/link";
import {
  User as UserIcon,
  Package,
  PiggyBank,
  UserPlus,
  HelpCircle,
  Shield,
  FileText,
  LogOut,
  ChevronRight
} from "lucide-react";

export default function ProfilePage() {
  const quickActions = [
    {
      title: "Profile details",
      subtitle: "Name, contact and KYC info",
      icon: UserIcon,
      href: "/profile/details",
      badge: null
    },
    {
      title: "Purchases",
      subtitle: "Orders, invoices and loan status",
      icon: Package,
      href: "/orders",
      badge: null
    },
    {
      title: "Pledge history",
      subtitle: "Funds you pledged or released",
      icon: PiggyBank,
      href: "/pledge-history",
      badge: null
    },
    {
      title: "Invite friends",
      subtitle: "Share the app, earn rewards",
      icon: UserPlus,
      href: "/refer",
      badge: "EARN ₹500"
    },
    {
      title: "Support & FAQs",
      subtitle: "Find answers or contact us",
      icon: HelpCircle,
      href: "/support",
      badge: null
    },
    {
      title: "Privacy policy",
      subtitle: "How we handle your data",
      icon: Shield,
      href: "/privacy",
      badge: null
    },
    {
      title: "Terms & conditions",
      subtitle: "Rules governing your use",
      icon: FileText,
      href: "/terms",
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 pt-8 px-4">
      <div className="max-w-xl mx-auto space-y-6">

        {/* Page Header */}
        <div className="space-y-1 text-left">
          <h1 className="text-2xl font-black text-slate-900">Profile</h1>
          <p className="text-xs text-slate-500 font-medium">
            Manage your account settings and personal preferences.
          </p>
        </div>

        {/* User Info (No Card Container - Direct Elements) */}
        <div className="flex items-center space-x-3.5 py-1">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-purple-100/80 text-purple-700 font-bold text-xl flex items-center justify-center flex-shrink-0">
            U
          </div>
          <div>
            <h2 className="font-extrabold text-base text-slate-900">User</h2>
            <p className="text-xs text-slate-500 font-medium">
              +91 9541343049
            </p>
          </div>
        </div>

        {/* Quick Actions List (Separate Rounded Cards) */}
        <div className="space-y-3 pt-1">
          <h3 className="font-extrabold text-[11px] text-slate-400 tracking-widest uppercase">
            QUICK ACTIONS
          </h3>

          <div className="space-y-3">
            {quickActions.map((action, idx) => {
              const IconComp = action.icon;
              return (
                <Link
                  key={idx}
                  href={action.href}
                  className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-4.5 flex items-center justify-between shadow-2xs hover:shadow-md hover:border-purple-200 transition-all group"
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-purple-700 transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {action.badge && (
                      <span className="text-[10px] font-black bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full tracking-wider">
                        {action.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4.5 h-4.5 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Log Out & Footer */}
        <div className="pt-2 space-y-5 flex flex-col items-center">
          <button className="w-full bg-white border border-slate-200/80 hover:bg-slate-50 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-2xs text-red-600 inline-flex items-center justify-center space-x-2 transition-all active:scale-[0.98]">
            <LogOut className="w-4 h-4 stroke-[2.2] text-red-500" />
            <span>Log out</span>
          </button>

          <p className="text-[11px] text-slate-400 font-medium">
            Made with 💜 by 1Fi
          </p>
        </div>

      </div>
    </div>
  );
}

