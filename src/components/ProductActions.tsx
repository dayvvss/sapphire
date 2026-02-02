"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/types";
import { addToCart } from "@/lib/store";

type ProductActionsProps = {
  product: Product;
};

export const ProductActions = ({ product }: ProductActionsProps) => {
  const router = useRouter();

  const handleAdd = () => {
    addToCart(product, 1);
    router.push("/cart");
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        onClick={handleAdd}
      >
        Add to cart
      </button>
      <button
        type="button"
        className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
        onClick={handleBuyNow}
      >
        Buy now
      </button>
    </div>
  );
};
