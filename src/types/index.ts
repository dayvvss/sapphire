export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  warrantyMonths: number;
  images: string[];
  highlights: string[];
  specs: Record<string, string>;
};

export type CartItem = {
  product: Product;
  qty: number;
};

export type OrderStatus =
  | "new"
  | "packed"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export type Order = {
  id: string;
  createdAt: string;
  items: CartItem[];
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  delivery: {
    method: "pickup" | "delivery";
    branch?: string;
    address?: {
      line1: string;
      line2?: string;
      city: string;
      notes?: string;
    };
  };
  payment: {
    method: "mobile_money" | "card";
    status: "paid" | "failed";
  };
  status: OrderStatus;
  total: number;
};
