import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "1Fi Marketplace - Shop Today, Pay Later using Mutual Funds",
  description: "Shop smartphones & electronics on 0% No-Cost EMI backed by your Mutual Funds portfolio on 1Fi Marketplace.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col pb-16 antialiased">
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
