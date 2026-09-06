export const initialProducts = [
  {
    id: "iphone-17-pro-id",
    slug: "iphone-17-pro",
    name: "Apple iPhone 17 Pro",
    brand: "Apple",
    category: "Smartphones",
    description: "Forged in Grade 5 Titanium with Next-Gen A19 Pro Bionic Chip. Features revolutionary Mutual Fund Backed No-Cost EMI options on 1Fi.",
    rating: 4.9,
    reviewCount: 328,
    basePrice: 129900,
    baseMrp: 134900,
    imageUrl: "/products/iphone/cosmic-orange/orangeiphone1.png",
    variants: [
      {
        id: "v1-1",
        colorName: "Cosmic Orange",
        colorHex: "#E05A30",
        storage: "256 GB",
        price: 129900,
        mrp: 134900,
        imageUrl: "/products/iphone/cosmic-orange/orangeiphone1.png",
        stock: 20
      },
      {
        id: "v1-2",
        colorName: "White Titanium",
        colorHex: "#F2F1EC",
        storage: "256 GB",
        price: 129900,
        mrp: 134900,
        imageUrl: "/products/iphone/white-titanium/whiteiphone1.png",
        stock: 15
      },
      {
        id: "v1-3",
        colorName: "Blue Titanium",
        colorHex: "#3D4C5A",
        storage: "256 GB",
        price: 129900,
        mrp: 134900,
        imageUrl: "/products/iphone/blue-titanium/blueiphone1.png",
        stock: 12
      },
      {
        id: "v1-4",
        colorName: "Cosmic Orange",
        colorHex: "#E05A30",
        storage: "512 GB",
        price: 149900,
        mrp: 154900,
        imageUrl: "/products/iphone/cosmic-orange/orangeiphone1.png",
        stock: 10
      },
      {
        id: "v1-5",
        colorName: "White Titanium",
        colorHex: "#F2F1EC",
        storage: "512 GB",
        price: 149900,
        mrp: 154900,
        imageUrl: "/products/iphone/white-titanium/whiteiphone1.png",
        stock: 10
      },
      {
        id: "v1-6",
        colorName: "Blue Titanium",
        colorHex: "#3D4C5A",
        storage: "1 TB",
        price: 169900,
        mrp: 174900,
        imageUrl: "/products/iphone/blue-titanium/blueiphone1.png",
        stock: 8
      }
    ],
    emiPlans: [
      {
        id: "e1-1",
        tenureMonths: 3,
        monthlyAmount: 43300,
        interestRate: 0,
        cashbackAmount: 2000,
        mutualFundBacked: true,
        mfYieldSavings: 1500,
        downpayment: 0,
        badgeLabel: "0% Interest",
        isPopular: false,
        description: "Zero interest plan with 1Fi Instant CashBack"
      },
      {
        id: "e1-2",
        tenureMonths: 6,
        monthlyAmount: 21650,
        interestRate: 0,
        cashbackAmount: 3500,
        mutualFundBacked: true,
        mfYieldSavings: 2800,
        downpayment: 0,
        badgeLabel: "1Fi Recommended",
        isPopular: true,
        description: "Most popular plan! Guaranteed zero interest with maximum MF growth"
      },
      {
        id: "e1-3",
        tenureMonths: 9,
        monthlyAmount: 14433,
        interestRate: 0,
        cashbackAmount: 2500,
        mutualFundBacked: true,
        mfYieldSavings: 4200,
        downpayment: 0,
        badgeLabel: "Low Monthly EMI",
        isPopular: false,
        description: "Flexible tenure for comfortable monthly budgeting"
      },
      {
        id: "e1-4",
        tenureMonths: 12,
        monthlyAmount: 10825,
        interestRate: 0,
        cashbackAmount: 1500,
        mutualFundBacked: true,
        mfYieldSavings: 5600,
        downpayment: 0,
        badgeLabel: "Zero Downpayment",
        isPopular: false,
        description: "12-Month No-Cost EMI plan backed by mutual funds"
      },
      {
        id: "e1-5",
        tenureMonths: 24,
        monthlyAmount: 5412,
        interestRate: 0,
        cashbackAmount: 1000,
        mutualFundBacked: true,
        mfYieldSavings: 9800,
        downpayment: 0,
        badgeLabel: "Max Savings",
        isPopular: false,
        description: "Longest tenure with maximum compounding returns on your MF portfolio"
      }
    ]
  },
  {
    id: "samsung-s24-ultra-id",
    slug: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "Smartphones",
    description: "Galaxy AI is here. Epic Titanium Shield, 200MP Quad Telephoto Camera with ProVisual Engine. Backed by 1Fi Mutual Funds.",
    rating: 4.8,
    reviewCount: 245,
    basePrice: 124999,
    baseMrp: 139999,
    imageUrl: "/products/s24/titanium-violet/violet1.png",
    variants: [
      {
        id: "v2-1",
        colorName: "Titanium Violet",
        colorHex: "#5B556E",
        storage: "256 GB",
        price: 124999,
        mrp: 139999,
        imageUrl: "/products/s24/titanium-violet/violet1.png",
        stock: 18
      },
      {
        id: "v2-2",
        colorName: "Titanium Gray",
        colorHex: "#777777",
        storage: "256 GB",
        price: 124999,
        mrp: 139999,
        imageUrl: "/products/s24/titanium-gray/gray1.png",
        stock: 14
      },
      {
        id: "v2-3",
        colorName: "Titanium Black",
        colorHex: "#2B2B2B",
        storage: "256 GB",
        price: 124999,
        mrp: 139999,
        imageUrl: "/products/s24/titanium-black/black1.png",
        stock: 22
      },
      {
        id: "v2-4",
        colorName: "Titanium Violet",
        colorHex: "#5B556E",
        storage: "512 GB",
        price: 139999,
        mrp: 154999,
        imageUrl: "/products/s24/titanium-violet/violet1.png",
        stock: 9
      }
    ],
    emiPlans: [
      {
        id: "e2-1",
        tenureMonths: 3,
        monthlyAmount: 41666,
        interestRate: 0,
        cashbackAmount: 2500,
        mutualFundBacked: true,
        mfYieldSavings: 1400,
        downpayment: 0,
        badgeLabel: "0% Interest",
        isPopular: false,
        description: "Zero interest plan with instant Galaxy Cashback"
      },
      {
        id: "e2-2",
        tenureMonths: 6,
        monthlyAmount: 20833,
        interestRate: 0,
        cashbackAmount: 4000,
        mutualFundBacked: true,
        mfYieldSavings: 2700,
        downpayment: 0,
        badgeLabel: "Best Value",
        isPopular: true,
        description: "Highest cashback offer with zero interest"
      },
      {
        id: "e2-3",
        tenureMonths: 12,
        monthlyAmount: 10416,
        interestRate: 0,
        cashbackAmount: 2000,
        mutualFundBacked: true,
        mfYieldSavings: 5300,
        downpayment: 0,
        badgeLabel: "Zero Downpayment",
        isPopular: false,
        description: "Easy 12-month installment backed by MF units"
      }
    ]
  },
  {
    id: "macbook-pro-m5-id",
    slug: "macbook-pro-m5",
    name: "Apple MacBook Pro M5",
    brand: "Apple",
    category: "Laptops",
    description: "Mind-blowing M5 chip performance with 16-core CPU and 40-core GPU. Liquid Retina XDR display with up to 22 hours of battery life.",
    rating: 5.0,
    reviewCount: 189,
    basePrice: 229900,
    baseMrp: 249900,
    imageUrl: "/products/macbook/space-black/blackmacbook1.png",
    variants: [
      {
        id: "v3-1",
        colorName: "Space Black",
        colorHex: "#222325",
        storage: "512 GB",
        price: 229900,
        mrp: 249900,
        imageUrl: "/products/macbook/space-black/blackmacbook1.png",
        stock: 10
      },
      {
        id: "v3-2",
        colorName: "Silver",
        colorHex: "#E3E4E5",
        storage: "512 GB",
        price: 229900,
        mrp: 249900,
        imageUrl: "/products/macbook/silver/silvermacbook1.png",
        stock: 8
      },
      {
        id: "v3-3",
        colorName: "Space Black",
        colorHex: "#222325",
        storage: "1 TB",
        price: 269900,
        mrp: 289900,
        imageUrl: "/products/macbook/space-black/blackmacbook1.png",
        stock: 5
      }
    ],
    emiPlans: [
      {
        id: "e3-1",
        tenureMonths: 6,
        monthlyAmount: 38316,
        interestRate: 0,
        cashbackAmount: 5000,
        mutualFundBacked: true,
        mfYieldSavings: 4800,
        downpayment: 0,
        badgeLabel: "0% Interest",
        isPopular: false,
        description: "6-Month Pro plan with zero interest"
      },
      {
        id: "e3-2",
        tenureMonths: 12,
        monthlyAmount: 19158,
        interestRate: 0,
        cashbackAmount: 7500,
        mutualFundBacked: true,
        mfYieldSavings: 9600,
        downpayment: 0,
        badgeLabel: "1Fi Recommended",
        isPopular: true,
        description: "Pro favorite! Maximize cashback and MF wealth retention"
      },
      {
        id: "e3-3",
        tenureMonths: 24,
        monthlyAmount: 9579,
        interestRate: 0,
        cashbackAmount: 3000,
        mutualFundBacked: true,
        mfYieldSavings: 18200,
        downpayment: 0,
        badgeLabel: "Lowest Monthly",
        isPopular: false,
        description: "Ultra-low monthly installment for creator pros"
      }
    ]
  }
];
