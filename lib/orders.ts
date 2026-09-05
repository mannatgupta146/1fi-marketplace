export interface ActiveOrder {
  orderId: string;
  productId: string;
  productName: string;
  brand: string;
  imageUrl: string;
  colorName: string;
  storage: string;
  monthlyAmount: number;
  tenureMonths: number;
  interestRate: number;
  cashbackAmount: number;
  mfYieldSavings: number;
  paidMonths: number;
  createdAt: string;
  nextDueDate: string;
  status: "ACTIVE" | "COMPLETED";
}

const STORAGE_KEY = "1fi_active_orders";

export function getOrders(): ActiveOrder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse active orders", e);
    return [];
  }
}

export function saveOrder(order: Partial<ActiveOrder>): ActiveOrder {
  const existing = getOrders();
  
  const nextDueDate = new Date();
  nextDueDate.setMonth(nextDueDate.getMonth() + 1);

  const newOrder: ActiveOrder = {
    orderId: order.orderId || `1FI-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    productId: order.productId || "",
    productName: order.productName || "1Fi Backed Device",
    brand: order.brand || "Brand",
    imageUrl: order.imageUrl || "",
    colorName: order.colorName || "",
    storage: order.storage || "",
    monthlyAmount: order.monthlyAmount || 0,
    tenureMonths: order.tenureMonths || 6,
    interestRate: order.interestRate || 0,
    cashbackAmount: order.cashbackAmount || 0,
    mfYieldSavings: order.mfYieldSavings || 0,
    paidMonths: 0,
    createdAt: new Date().toISOString(),
    nextDueDate: nextDueDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    status: "ACTIVE",
  };

  const updated = [newOrder, ...existing];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newOrder;
}

export function payOrderDue(orderId: string): ActiveOrder[] {
  const existing = getOrders();
  const updated: ActiveOrder[] = existing.map((ord) => {
    if (ord.orderId === orderId && ord.status === "ACTIVE") {
      const nextPaid = ord.paidMonths + 1;
      const isCompleted = nextPaid >= ord.tenureMonths;
      const nextDue = new Date();
      nextDue.setMonth(nextDue.getMonth() + 1);

      const status: "ACTIVE" | "COMPLETED" = isCompleted ? "COMPLETED" : "ACTIVE";

      return {
        ...ord,
        paidMonths: nextPaid,
        status,
        nextDueDate: isCompleted
          ? "All Paid"
          : nextDue.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      };
    }
    return ord;
  });

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}
