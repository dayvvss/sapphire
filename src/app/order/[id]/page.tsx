"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getOrders } from "@/lib/store";
import { formatDate } from "@/lib/format";
import { Order } from "@/types";
import { Price } from "@/components/Price";

export default function OrderConfirmationPage() {
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders = getOrders();
    const selected = orders.find((item) => item.id === params.id);
    setOrder(selected ?? null);
  }, [params.id]);

  if (!order) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Order not found</h1>
        <p className="mt-2 text-sm text-slate-500">Please check your confirmation link.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Order confirmed</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Thank you for shopping Sapphire</h1>
        <p className="mt-3 text-sm text-slate-600">
          Order #{order.id} · {formatDate(order.createdAt)}
        </p>
        <div className="mt-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
          Payment {order.payment.status === "paid" ? "received" : "pending"}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Items</h2>
          <div className="space-y-3 text-sm text-slate-600">
            {order.items.map((item) => (
              <div key={item.product.id} className="flex justify-between">
                <span>
                  {item.product.name} × {item.qty}
                </span>
                <Price amount={item.product.price * item.qty} className="font-medium" />
              </div>
            ))}
            <div className="flex justify-between border-t border-slate-100 pt-3 text-base">
              <span className="font-semibold text-slate-900">Total</span>
              <Price amount={order.total} className="font-semibold text-slate-900" />
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
          <ol className="space-y-3 text-sm text-slate-600">
            <li>We&apos;ll send SMS and WhatsApp updates as your order is packed.</li>
            <li>Our team confirms delivery or pickup details within 2 hours.</li>
            <li>You&apos;ll receive warranty activation instructions in your inbox.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
