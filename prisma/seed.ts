import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding 1Fi Marketplace database...");

  // Clear existing records
  await prisma.emiPlan.deleteMany({});
  await prisma.productVariant.deleteMany({});
  await prisma.product.deleteMany({});

  // 1. iPhone 17 Pro
  const iphone = await prisma.product.create({
    data: {
      slug: "iphone-17-pro",
      name: "Apple iPhone 17 Pro",
      brand: "Apple",
      category: "Smartphones",
      description:
        "Forged in Grade 5 Titanium with Next-Gen A19 Pro Bionic Chip. Features revolutionary Mutual Fund Backed No-Cost EMI options on 1Fi.",
      rating: 4.9,
      reviewCount: 328,
      basePrice: 129900,
      baseMrp: 134900,
      imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
      variants: {
        create: [
          {
            colorName: "Deep Titanium",
            colorHex: "#3A3B3C",
            storage: "256 GB",
            price: 129900,
            mrp: 134900,
            imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            stock: 20,
          },
          {
            colorName: "Silver",
            colorHex: "#E2E2E2",
            storage: "256 GB",
            price: 129900,
            mrp: 134900,
            imageUrl: "https://images.unsplash.com/photo-1695048065056-10b1297a626d?q=80&w=1000&auto=format&fit=crop",
            stock: 15,
          },
          {
            colorName: "Cosmic Violet",
            colorHex: "#5B4278",
            storage: "256 GB",
            price: 129900,
            mrp: 134900,
            imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            stock: 12,
          },
          {
            colorName: "Deep Titanium",
            colorHex: "#3A3B3C",
            storage: "512 GB",
            price: 149900,
            mrp: 154900,
            imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            stock: 10,
          },
          {
            colorName: "Cosmic Violet",
            colorHex: "#5B4278",
            storage: "512 GB",
            price: 149900,
            mrp: 154900,
            imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            stock: 10,
          },
          {
            colorName: "Deep Titanium",
            colorHex: "#3A3B3C",
            storage: "1 TB",
            price: 169900,
            mrp: 174900,
            imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
            stock: 8,
          },
        ],
      },
      emiPlans: {
        create: [
          {
            tenureMonths: 3,
            monthlyAmount: 43300,
            interestRate: 0,
            cashbackAmount: 2000,
            mutualFundBacked: true,
            mfYieldSavings: 1500,
            downpayment: 0,
            badgeLabel: "0% Interest",
            isPopular: false,
            description: "Zero interest plan with 1Fi Instant CashBack",
          },
          {
            tenureMonths: 6,
            monthlyAmount: 21650,
            interestRate: 0,
            cashbackAmount: 3500,
            mutualFundBacked: true,
            mfYieldSavings: 3200,
            downpayment: 0,
            badgeLabel: "1Fi Recommended",
            isPopular: true,
            description: "No-Cost EMI backed by liquid Mutual Fund collateral",
          },
          {
            tenureMonths: 9,
            monthlyAmount: 14433,
            interestRate: 0,
            cashbackAmount: 4800,
            mutualFundBacked: true,
            mfYieldSavings: 4500,
            downpayment: 0,
            badgeLabel: "Max Savings",
            isPopular: false,
            description: "Highest Cashback yields over 9-month flexible tenure",
          },
          {
            tenureMonths: 12,
            monthlyAmount: 11540,
            interestRate: 5.5,
            cashbackAmount: 6500,
            mutualFundBacked: true,
            mfYieldSavings: 6000,
            downpayment: 0,
            badgeLabel: "Low Monthly Payment",
            isPopular: false,
            description: "Lowest monthly outlay with active MF portfolio returns offset",
          },
        ],
      },
    },
  });

  // 2. Samsung Galaxy S24 Ultra
  const samsung = await prisma.product.create({
    data: {
      slug: "samsung-s24-ultra",
      name: "Samsung Galaxy S24 Ultra 5G",
      brand: "Samsung",
      category: "Smartphones",
      description:
        "Galaxy AI is here. Epic Titanium Shield, 200MP Quad Telephoto Camera system, built-in S-Pen, and 1Fi Mutual Fund Backed Zero Down Payment EMI.",
      rating: 4.8,
      reviewCount: 215,
      basePrice: 124999,
      baseMrp: 139999,
      imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
      variants: {
        create: [
          {
            colorName: "Titanium Black",
            colorHex: "#2B2B2B",
            storage: "256 GB",
            price: 124999,
            mrp: 139999,
            imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
            stock: 18,
          },
          {
            colorName: "Titanium Yellow",
            colorHex: "#F3E6C8",
            storage: "256 GB",
            price: 124999,
            mrp: 139999,
            imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
            stock: 12,
          },
          {
            colorName: "Titanium Gray",
            colorHex: "#7B7B7B",
            storage: "256 GB",
            price: 124999,
            mrp: 139999,
            imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
            stock: 15,
          },
          {
            colorName: "Titanium Gray",
            colorHex: "#7B7B7B",
            storage: "512 GB",
            price: 139999,
            mrp: 154999,
            imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
            stock: 14,
          },
        ],
      },
      emiPlans: {
        create: [
          {
            tenureMonths: 3,
            monthlyAmount: 41666,
            interestRate: 0,
            cashbackAmount: 2500,
            mutualFundBacked: true,
            mfYieldSavings: 1800,
            downpayment: 0,
            badgeLabel: "0% Interest",
            isPopular: false,
            description: "Zero interest short term tenure",
          },
          {
            tenureMonths: 6,
            monthlyAmount: 20833,
            interestRate: 0,
            cashbackAmount: 4000,
            mutualFundBacked: true,
            mfYieldSavings: 3500,
            downpayment: 0,
            badgeLabel: "Most Popular",
            isPopular: true,
            description: "No-Cost EMI with ₹4,000 MF yield cashback bonus",
          },
          {
            tenureMonths: 12,
            monthlyAmount: 11100,
            interestRate: 6.0,
            cashbackAmount: 7200,
            mutualFundBacked: true,
            mfYieldSavings: 6800,
            downpayment: 0,
            badgeLabel: "Best Value",
            isPopular: false,
            description: "Maximum tenure with monthly fund yield returns",
          },
        ],
      },
    },
  });

  // 3. MacBook Pro M3 Max
  const macbook = await prisma.product.create({
    data: {
      slug: "macbook-pro-m3",
      name: "Apple MacBook Pro M3 Max",
      brand: "Apple",
      category: "Laptops",
      description:
        "Mind-blowing M3 Max chip performance with 16-core CPU and 40-core GPU. Liquid Retina XDR display with up to 22 hours of battery life.",
      rating: 5.0,
      reviewCount: 94,
      basePrice: 229900,
      baseMrp: 249900,
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
      variants: {
        create: [
          {
            colorName: "Space Black",
            colorHex: "#1C1D21",
            storage: "512 GB",
            price: 229900,
            mrp: 249900,
            imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
            stock: 9,
          },
          {
            colorName: "Silver",
            colorHex: "#E3E4E6",
            storage: "1 TB",
            price: 269900,
            mrp: 289900,
            imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
            stock: 6,
          },
        ],
      },
      emiPlans: {
        create: [
          {
            tenureMonths: 6,
            monthlyAmount: 38316,
            interestRate: 0,
            cashbackAmount: 5000,
            mutualFundBacked: true,
            mfYieldSavings: 4500,
            downpayment: 0,
            badgeLabel: "0% No-Cost EMI",
            isPopular: false,
            description: "High-yield zero cost plan for creators",
          },
          {
            tenureMonths: 12,
            monthlyAmount: 19158,
            interestRate: 0,
            cashbackAmount: 8500,
            mutualFundBacked: true,
            mfYieldSavings: 8000,
            downpayment: 0,
            badgeLabel: "Pro Choice",
            isPopular: true,
            description: "12-Month Zero Cost EMI backed by mutual fund returns",
          },
          {
            tenureMonths: 18,
            monthlyAmount: 13650,
            interestRate: 7.5,
            cashbackAmount: 12000,
            mutualFundBacked: true,
            mfYieldSavings: 11000,
            downpayment: 0,
            badgeLabel: "Extended Tenure",
            isPopular: false,
            description: "Lowest monthly commitment with maximum MF yield offset",
          },
        ],
      },
    },
  });

  console.log(`Database seeded successfully! Seeded ${iphone.name}, ${samsung.name}, ${macbook.name}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
