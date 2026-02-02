"use client";

import { useMemo, useState } from "react";
import { products, categories, brands } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" }
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let items = products;
    if (category !== "all") {
      items = items.filter((product) => product.category === category);
    }
    if (brand !== "all") {
      items = items.filter((product) => product.brand === brand);
    }
    if (sort === "price_low") {
      items = [...items].sort((a, b) => a.price - b.price);
    }
    if (sort === "price_high") {
      items = [...items].sort((a, b) => b.price - a.price);
    }
    return items;
  }, [category, brand, sort]);

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-slate-900">Shop Sapphire</h1>
        <p className="text-sm text-slate-500">Curated devices with premium service.</p>
      </section>

      <section className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm text-slate-600">
          Category
          <select
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-600">
          Brand
          <select
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="all">All brands</option>
            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-600">
          Sort
          <select
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            {sortOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
