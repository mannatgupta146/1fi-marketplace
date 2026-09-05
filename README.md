# 1Fi Marketplace - Mutual Fund Backed No-Cost EMI Platform

A full-stack web application built for the **1Fi SDE1 Assignment** that presents the **1Fi Marketplace**, allowing users to explore flagship electronics (smartphones, laptops) and purchase them on flexible EMI plans backed by their Mutual Fund portfolio.

![1Fi Marketplace](https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop)

---

## 🚀 Live Demo & Key Links

- **Shop Page**: `/`
- **Product Page Example**: `/products/iphone-17-pro`
- **Alternative Products**: `/products/samsung-s24-ultra`, `/products/macbook-pro-m3`

---

## ✨ Features

- **Shop Navigation with 3 Tabs**:
  1. **Top Brands** (*Blank placeholder state as per assignment requirement*)
  2. **Nearby Stores** (*Blank placeholder state as per assignment requirement*)
  3. **1Fi Marketplace** (*Fully designed & dynamic store implementation*)
- **Dynamic Product Detail Page**: Unique URL routes (`/products/:slug`) for each product.
- **Interactive Variant Selection**: Switch colors and storage options dynamically, updating prices, savings, MRP, stock count, and high-resolution product imagery live.
- **Mutual Fund Backed EMI Engine**:
  - Displays monthly installment, tenure (months), interest rate (0% or standard), and cashback rewards.
  - Highlights Mutual Fund yield savings offset.
- **Proceed with Selected Plan**: Interactive modal flow simulating order confirmation, wallet cashback deposit, and mutual fund collateral pledge.
- **Dynamic API & Database**: 100% database-driven product catalog served via RESTful Node/Next APIs.

---

## 🛠 Tech Stack

- **Frontend**: Next.js 14+ (App Router), React 18, Tailwind CSS, Lucide Icons, Framer Motion
- **Backend**: Node.js (Next.js Serverless API Routes)
- **Database & ORM**: SQLite / PostgreSQL with Prisma ORM
- **Styling**: 1Fi Dark Obsidian & Emerald `#00E676` Glassmorphism Design System

---

## 📋 Database Schema

Defined in `prisma/schema.prisma`:

### `Product`
| Field | Type | Description |
|---|---|---|
| `id` | String (UUID) | Primary key |
| `slug` | String (Unique) | URL parameter (e.g. `iphone-17-pro`) |
| `name` | String | Product name |
| `brand` | String | Brand name (e.g. `Apple`, `Samsung`) |
| `category` | String | Product category |
| `description` | String | Product overview |
| `rating` | Float | Average review rating |
| `reviewCount` | Int | Total review count |
| `basePrice` | Float | Base starting price |
| `baseMrp` | Float | Original MRP |
| `imageUrl` | String | High-res image URL |

### `ProductVariant`
| Field | Type | Description |
|---|---|---|
| `id` | String (UUID) | Primary key |
| `productId` | String | Foreign key referencing `Product` |
| `colorName` | String | Color name (e.g. `Deep Titanium`) |
| `colorHex` | String | Color hex code for UI swatch |
| `storage` | String | Storage capacity (e.g. `256 GB`) |
| `price` | Float | Selling price for variant |
| `mrp` | Float | MRP for variant |
| `imageUrl` | String | Variant image |
| `stock` | Int | Available units |

### `EmiPlan`
| Field | Type | Description |
|---|---|---|
| `id` | String (UUID) | Primary key |
| `productId` | String | Foreign key referencing `Product` |
| `tenureMonths` | Int | Plan tenure in months |
| `monthlyAmount` | Float | Calculated monthly installment |
| `interestRate` | Float | Interest rate % (e.g. `0` for 0% No Cost) |
| `cashbackAmount` | Float | Instant 1Fi wallet cashback |
| `mutualFundBacked` | Boolean | Whether backed by MF portfolio collateral |
| `mfYieldSavings` | Float | Estimated fund return offset |
| `badgeLabel` | String | Badge tag (e.g. `0% Interest`, `1Fi Recommended`) |
| `isPopular` | Boolean | Flag for popular choice highlight |

---

## 🔌 API Endpoints & Example Responses

### 1. Get All Products
`GET /api/products`

**Response (`200 OK`)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "c1f7a01a-8291-4501-9a74-00123abcdef",
      "slug": "iphone-17-pro",
      "name": "Apple iPhone 17 Pro",
      "brand": "Apple",
      "category": "Smartphones",
      "description": "Forged in Grade 5 Titanium with Next-Gen A19 Pro Bionic Chip.",
      "rating": 4.9,
      "reviewCount": 328,
      "basePrice": 129900,
      "baseMrp": 134900,
      "imageUrl": "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
      "variants": [
        {
          "id": "var-1",
          "colorName": "Deep Titanium",
          "colorHex": "#3A3B3C",
          "storage": "256 GB",
          "price": 129900,
          "mrp": 134900,
          "stock": 20
        }
      ],
      "emiPlans": [
        {
          "id": "emi-1",
          "tenureMonths": 6,
          "monthlyAmount": 21650,
          "interestRate": 0,
          "cashbackAmount": 3500,
          "mutualFundBacked": true,
          "badgeLabel": "1Fi Recommended",
          "isPopular": true
        }
      ]
    }
  ]
}
```

### 2. Get Single Product Details
`GET /api/products/:slug`

**Response (`200 OK`)**:
```json
{
  "success": true,
  "data": {
    "id": "c1f7a01a-8291-4501-9a74-00123abcdef",
    "slug": "iphone-17-pro",
    "name": "Apple iPhone 17 Pro",
    "brand": "Apple",
    "basePrice": 129900,
    "variants": [...],
    "emiPlans": [...]
  }
}
```

### 3. Process Checkout / Activate Plan
`POST /api/checkout`

**Request Body**:
```json
{
  "productId": "c1f7a01a-8291-4501-9a74-00123abcdef",
  "variantId": "var-1",
  "emiPlanId": "emi-1"
}
```

**Response (`200 OK`)**:
```json
{
  "success": true,
  "data": {
    "orderId": "1FI-89AB2X",
    "productName": "Apple iPhone 17 Pro",
    "monthlyAmount": 21650,
    "tenureMonths": 6,
    "cashbackAmount": 3500,
    "mutualFundBacked": true,
    "status": "APPROVED",
    "message": "Your 1Fi Mutual Fund Backed EMI plan has been confirmed!"
  }
}
```

---

## ⚙️ Setup and Local Run Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-link>
   cd 1fi-marketplace
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Initialize Database & Seed Data**:
   ```bash
   npx prisma db push
   npm run seed
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📑 Submission Checklist

- [x] Full-stack web application built with React, Next.js, Tailwind CSS & Prisma SQLite.
- [x] Shop page with 3 options: Top Brands (blank), Nearby Stores (blank), and 1Fi Marketplace (fully functional).
- [x] At least 3 flagship products (iPhone 17 Pro, Samsung S24 Ultra, MacBook Pro M3) with 2+ variants each.
- [x] Dynamic API endpoints (`/api/products`, `/api/products/:slug`, `/api/checkout`).
- [x] Selectable EMI plans displaying Monthly Payment, Tenure, Interest Rate, and Cashback.
- [x] "Proceed with Selected Plan" interactive checkout flow.
- [x] Seed data script and complete README instructions.
