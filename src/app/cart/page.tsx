"use client";

import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/Price";
import { QuantityStepper } from "@/components/QuantityStepper";
import { useCartState } from "@/lib/store";

const placeholder = "/products/placeholder.svg";

export default function CartPage() {
  const { items, total, updateQty, remove } = useCartState();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-sm text-slate-500">Browse Sapphire to add premium devices.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Shop Sapphire
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:flex-row md:items-center"
            >
              <div className="relative h-28 w-28 rounded-2xl bg-slate-50">
                <Image
                  src={item.product.images[0] ?? placeholder}
                  alt={item.product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {item.product.brand}
                </p>
                <h2 className="text-lg font-semibold text-slate-900">{item.product.name}</h2>
                <p className="text-sm text-slate-500">{item.product.category}</p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <Price amount={item.product.price} className="text-lg font-semibold" />
                <QuantityStepper
                  value={item.qty}
                  onChange={(value) => updateQty(item.product.id, value)}
                />
                <button
                  type="button"
                  className="text-xs uppercase tracking-widest text-slate-400 hover:text-slate-600"
                  onClick={() => remove(item.product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <Price amount={total} className="font-medium text-slate-900" />
          </div>
          <div className="flex justify-between">
            <span>Delivery estimate</span>
            <span className="text-slate-400">Calculated at checkout</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-slate-100 pt-4 text-base">
            <span className="font-semibold text-slate-900">Total</span>
            <Price amount={total} className="font-semibold text-slate-900" />
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Checkout
        </Link>
      </aside>
    </div>
  );
}
