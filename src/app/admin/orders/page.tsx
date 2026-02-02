"use client";

import { useState } from "react";
import { useOrdersState } from "@/lib/store";
import { formatDate } from "@/lib/format";
import { Order, OrderStatus } from "@/types";
import { Price } from "@/components/Price";

const statuses: { value: OrderStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "packed", label: "Packed" },
  { value: "out_for_delivery", label: "Out for delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" }
];

export default function AdminOrdersPage() {
  const { orders, setStatus } = useOrdersState();
  const [active, setActive] = useState<Order | null>(null);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin</p>
        <h1 className="text-3xl font-semibold text-slate-900">Orders</h1>
        <p className="text-sm text-slate-500">Demo-only access. Status updates persist locally.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-4">
          {orders.length === 0 ? (
            <div className="rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm">
              No orders yet. Place an order to see it here.
            </div>
          ) : (
            orders.map((order) => (
              <button
                key={order.id}
                type="button"
                className="flex w-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm transition hover:shadow-soft"
                onClick={() => setActive(order)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">#{order.id}</span>
                  <span className="text-xs text-slate-400">{formatDate(order.createdAt)}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                  <div>
                    <p className="text-slate-400">Customer</p>
                    <p className="font-medium text-slate-800">{order.customer.name}</p>
                    <p className="text-xs text-slate-400">{order.customer.phone}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Total</p>
                    <Price amount={order.total} className="font-medium text-slate-800" />
                  </div>
                  <div>
                    <p className="text-slate-400">Payment</p>
                    <p className="text-sm font-medium text-slate-800">{order.payment.status}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Status</p>
                    <p className="text-sm font-medium text-slate-800">{order.status}</p>
                  </div>
                </div>
              </button>
            ))
          )}
        </section>

        <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          {active ? (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Order #{active.id}</h2>
                <p className="text-sm text-slate-500">{formatDate(active.createdAt)}</p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-800">Items</p>
                {active.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span>
                      {item.product.name} × {item.qty}
                    </span>
                    <Price amount={item.product.price * item.qty} />
                  </div>
                ))}
                <div className="flex justify-between border-t border-slate-100 pt-3 text-base">
                  <span className="font-semibold text-slate-900">Total</span>
                  <Price amount={active.total} className="font-semibold" />
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-800">Update status</p>
                <select
                  className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  value={active.status}
                  onChange={(event) => {
                    const status = event.target.value as OrderStatus;
                    setStatus(active.id, status);
                    setActive({ ...active, status });
                  }}
                >
                  {statuses.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-500">
                Delivery: {active.delivery.method === "pickup" ? "Pickup" : "Delivery"}
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Select an order to view details.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
