import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sapphire</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Premium electronics, refined for everyday life.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Discover handpicked devices with trusted warranties and local support in Kenya.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
