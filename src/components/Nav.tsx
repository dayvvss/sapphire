"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/store";

export const Nav = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const items = getCart();
    setCount(items.reduce((sum, item) => sum + item.qty, 0));
  }, []);

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Sapphire
        </Link>
        <div className="flex w-full max-w-md items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
          <span className="mr-2 text-slate-400">Search</span>
          <input
            aria-label="Search products"
            placeholder="Phones, laptops, tablets"
            className="w-full bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <Link href="/shop" className="hidden md:inline">
            Shop
          </Link>
          <Link href="/cart" className="relative font-medium text-slate-900">
            Cart
            {count > 0 && (
              <span className="ml-2 rounded-full bg-slate-900 px-2 py-0.5 text-xs text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
