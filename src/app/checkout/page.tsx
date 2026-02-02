"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Price } from "@/components/Price";
import { useCartState, createOrder } from "@/lib/store";
import { Order } from "@/types";

const branches = ["Westlands", "Two Rivers", "Kilimani", "Karen"];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clear } = useCartState();
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery">("pickup");
  const [paymentMethod, setPaymentMethod] = useState<"mobile_money" | "card">("mobile_money");
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });
  const [branch, setBranch] = useState(branches[0]);
  const [address, setAddress] = useState({ line1: "", line2: "", city: "", notes: "" });

  const canSubmit = useMemo(() => {
    if (!customer.name || !customer.phone) return false;
    if (deliveryMethod === "delivery") {
      return Boolean(address.line1 && address.city);
    }
    return true;
  }, [customer, deliveryMethod, address]);

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-sm text-slate-500">Add items before checking out.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Shop Sapphire
        </Link>
      </div>
    );
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!canSubmit) {
      setError("Please complete the required fields.");
      return;
    }

    const id = typeof crypto !== "undefined" ? crypto.randomUUID() : `order-${Date.now()}`;
    const order: Order = {
      id,
      createdAt: new Date().toISOString(),
      items,
      customer: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email || undefined
      },
      delivery:
        deliveryMethod === "pickup"
          ? { method: "pickup", branch }
          : {
              method: "delivery",
              address: {
                line1: address.line1,
                line2: address.line2 || undefined,
                city: address.city,
                notes: address.notes || undefined
              }
            },
      payment: {
        method: paymentMethod,
        status: simulateFailure ? "failed" : "paid"
      },
      status: simulateFailure ? "cancelled" : "new",
      total
    };

    if (simulateFailure) {
      createOrder(order);
      setError("Payment failed. Please try again or switch method.");
      return;
    }

    createOrder(order);
    clear();
    router.push(`/order/${order.id}`);
  };

  return (
    <form className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" onSubmit={handleSubmit}>
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">Checkout</h1>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Customer
          </h2>
          <label className="flex flex-col gap-2 text-sm text-slate-600">
            Full name
            <input
              className="rounded-xl border border-slate-200 px-3 py-2"
              value={customer.name}
              onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-600">
            Phone number
            <input
              className="rounded-xl border border-slate-200 px-3 py-2"
              value={customer.phone}
              onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-600">
            Email (optional)
            <input
              className="rounded-xl border border-slate-200 px-3 py-2"
              value={customer.email}
              onChange={(event) => setCustomer({ ...customer, email: event.target.value })}
              type="email"
            />
          </label>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Delivery
          </h2>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="radio"
                name="delivery"
                checked={deliveryMethod === "pickup"}
                onChange={() => setDeliveryMethod("pickup")}
              />
              Pickup
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="radio"
                name="delivery"
                checked={deliveryMethod === "delivery"}
                onChange={() => setDeliveryMethod("delivery")}
              />
              Delivery
            </label>
          </div>

          {deliveryMethod === "pickup" ? (
            <label className="flex flex-col gap-2 text-sm text-slate-600">
              Select branch
              <select
                className="rounded-xl border border-slate-200 px-3 py-2"
                value={branch}
                onChange={(event) => setBranch(event.target.value)}
              >
                {branches.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <div className="grid gap-3">
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                Address line 1
                <input
                  className="rounded-xl border border-slate-200 px-3 py-2"
                  value={address.line1}
                  onChange={(event) => setAddress({ ...address, line1: event.target.value })}
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                Address line 2
                <input
                  className="rounded-xl border border-slate-200 px-3 py-2"
                  value={address.line2}
                  onChange={(event) => setAddress({ ...address, line2: event.target.value })}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                City
                <input
                  className="rounded-xl border border-slate-200 px-3 py-2"
                  value={address.city}
                  onChange={(event) => setAddress({ ...address, city: event.target.value })}
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                Delivery notes
                <input
                  className="rounded-xl border border-slate-200 px-3 py-2"
                  value={address.notes}
                  onChange={(event) => setAddress({ ...address, notes: event.target.value })}
                />
              </label>
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Payment
          </h2>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "mobile_money"}
                onChange={() => setPaymentMethod("mobile_money")}
              />
              Mobile Money
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Card
            </label>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-500">
            <input
              type="checkbox"
              checked={simulateFailure}
              onChange={(event) => setSimulateFailure(event.target.checked)}
            />
            Simulate payment failure
          </label>
        </div>
      </section>

      <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between">
              <span>
                {item.product.name} × {item.qty}
              </span>
              <Price amount={item.product.price * item.qty} className="font-medium" />
            </div>
          ))}
          <div className="flex justify-between border-t border-slate-100 pt-3 text-base">
            <span className="font-semibold text-slate-900">Total</span>
            <Price amount={total} className="font-semibold text-slate-900" />
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-rose-500">{error}</p>}

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          Place order
        </button>
      </aside>
    </form>
  );
}
