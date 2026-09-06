# 1Fi Marketplace — Mutual Fund Backed No-Cost EMI Platform

> **1Fi SDE Intern Assignment Submission**  
> A Next.js 14 web application built to implement the **1Fi Marketplace** inside the 1Fi Shop experience. It allows users to explore flagship electronics (smartphones and laptops) and purchase them using 0% No-Cost EMI plans backed by their Mutual Fund portfolio.

### 🌐 Live Links & Deployment
- **Live Demo**: [https://1fi-marketplace-nu.vercel.app](https://1fi-marketplace-nu.vercel.app)
- **Production Database**: Neon PostgreSQL (Serverless cloud database connected via Prisma ORM)
- **API Status**: Dynamic endpoints at `/api/products` and `/api/checkout`

---

## 🧭 Application Showcase & Navigation

| 🛒 Marketplace (`/`) | 📱 Product Detail (`/products/:slug`) | 🏠 Home Dashboard (`/home`) |
| :---: | :---: | :---: |
| Top Brands, Nearby Stores & 1Fi Marketplace Grid | Multi-angle Gallery, Variants & Live EMI Engine | 1Fi Offers, Dual Marquee Loops & FAQs |

| 💳 Limit Eligibility (`/limit`) | 👤 Profile View (`/profile`) | 🧾 EMI Dues (`/dues`) |
| :---: | :---: | :---: |
| 3D Floating Lock & Portfolio Check | Account Settings & Quick Action Cards | Active Loans & Monthly EMI Tracker |

---

## ⚡ Key Features & What Was Built

### 1. 1Fi Marketplace (Shop Page - `/`)
- **3-Option Navigation**: Switch between Top Brands, Nearby Stores, and **1Fi Marketplace**.
- **Real-Time Product Search**: Filter products by name, brand, or category instantly.
- **Product Cards**: Clear displays showing ratings, discount tags, prices, and 0% EMI badges.

### 2. Dynamic Product & Variant Engine (`/products/:slug`)
- **Variant Selector**: Interactive color swatches and storage selectors (e.g. 256GB, 512GB, 1TB) that instantly update images, pricing, MRP, and stock counts.
- **Mutual Fund EMI Engine**: Dynamic tenure selector (3, 6, 9, 12, 18 months) showing monthly installment amounts, 0% interest rates, instant wallet cashback, and estimated Mutual Fund yield savings.
- **Order Checkout Modal**: Simulates order placement, cashback deposit, and Mutual Fund collateral pledging.

### 3. Full 1Fi Ecosystem (Bonus Context Pages)
- To ensure the Marketplace fits perfectly into the existing 1Fi app, I also built the **Home Dashboard**, **Limit Check**, **EMI Dues**, and **Profile** screens with an authentic floating bottom navigation bar.

---

## 💻 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling & UI** | Tailwind CSS, Lucide Icons, Glassmorphism & Custom Keyframe Animations |
| **Database & ORM** | Neon Serverless PostgreSQL with Prisma ORM |
| **API Architecture** | Node.js Serverless API Routes (`/api/products`, `/api/checkout`) |
| **Deployment** | Vercel (Auto-deploys from GitHub `main` branch) |

---

## 🗄️ Database Schema

Defined in [`prisma/schema.prisma`](prisma/schema.prisma):

```mermaid
erDiagram
    PRODUCT ||--|{ PRODUCT_VARIANT : "has variants"
    PRODUCT ||--|{ EMI_PLAN : "offers plans"

    PRODUCT {
        string id PK
        string slug UK
        string name
        string brand
        string category
        string description
        float rating
        int reviewCount
        float basePrice
        float baseMrp
        string imageUrl
    }

    PRODUCT_VARIANT {
        string id PK
        string productId FK
        string colorName
        string colorHex
        string storage
        float price
        float mrp
        string imageUrl
        int stock
    }

    EMI_PLAN {
        string id PK
        string productId FK
        int tenureMonths
        float monthlyAmount
        float interestRate
        float cashbackAmount
        boolean mutualFundBacked
        float mfYieldSavings
        string badgeLabel
        boolean isPopular
    }
```

### Models Overview
- **`Product`**: Basic product info (name, brand, category, description, rating, base price, MRP, base image).
- **`ProductVariant`**: Variant options (color name, color hex, storage, price, MRP, image URL, stock).
- **`EmiPlan`**: EMI options (tenure months, monthly amount, interest rate, cashback amount, mutual fund yield savings, badges).

---

## 🔗 API Endpoints

1. **Fetch All Products**: `GET /api/products` (Returns catalog with variants and EMI plans)
2. **Fetch Single Product**: `GET /api/products/:slug` (Returns single product details by slug)
3. **Checkout Order**: `POST /api/checkout` (Processes order and returns order confirmation details)

---

## 📦 Setup & Local Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mannatgupta146/1fi-marketplace.git
   cd 1fi-marketplace
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set environment variable**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://neondb_owner:npg_6ErLYTN5nkWj@ep-quiet-cell-au2j0yo5-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"
   ```

4. **Push database schema & seed catalog**:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

---

## 🤖 Engineering Process & AI Collaboration

During this project, I collaborated with AI development tools (Antigravity AI / DeepMind Pair Programming) as an active pair programmer to accelerate implementation, make technical choices, and maintain high engineering quality.

### 🧠 How AI Was Used & Technical Decisions Made:
1. **Database & Architecture Choices**:
   - **Decision**: Transitioned from initial SQLite to **Neon Serverless PostgreSQL** via **Prisma ORM**.
   - **Reason & AI Impact**: SQLite suffered from file locking limitations on Vercel AWS Lambda serverless functions. AI identified the issue from Vercel logs and guided the migration to serverless PostgreSQL.
2. **Zero-Downtime Fallback Architecture**:
   - **Decision**: Implemented an automated fallback layer (`lib/fallback-data.ts`).
   - **Reason & AI Impact**: Guaranteed 100% API availability (HTTP 200 OK) for `/api/products` even during cold starts or transient database connections on serverless platforms.
3. **UI Fidelity & Design Token Matching**:
   - **Decision**: Extracted exact CSS variables, glassmorphism cards, and infinite keyframe marquee loops from official 1Fi reference designs (`app.1fi.in`).
   - **Reason & AI Impact**: AI assisted in crafting responsive Tailwind components and CSS animations matching 1Fi's `#6d28d9` brand palette.
4. **Automated Quality Checks**:
   - **Decision**: Automated TypeScript type-checking (`tsc --noEmit`) and database seed scripts (`prisma/seed.ts`).
   - **Reason & AI Impact**: Eliminated runtime type errors and ensured synchronized product assets across variants.

---

<div align="center">
  <p><b>1Fi SDE Intern Assignment Submission</b></p>
  <p><i>Building the future of Mutual Fund backed zero-cost consumer financing.</i></p>
</div>
