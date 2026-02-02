import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Price } from "@/components/Price";
import { ProductActions } from "@/components/ProductActions";

const placeholder = "/products/placeholder.svg";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const image = product.images[0] ?? placeholder;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
        <div className="relative h-[320px] w-full md:h-[420px]">
          <Image src={image} alt={product.name} fill className="object-contain" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {product.brand} · {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <Price amount={product.price} className="text-2xl font-semibold text-slate-900" />
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                <Price amount={product.oldPrice} />
              </span>
            )}
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                product.inStock
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {product.inStock ? "In stock" : "Out of stock"}
            </span>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Highlights
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Specifications
          </h2>
          <div className="grid gap-2 text-sm text-slate-600">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-500">{key}</span>
                <span className="font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-600">
            Warranty: {product.warrantyMonths} months. Serial/IMEI capture is supported in our
            full build for service registration.
          </p>
        </div>

        <ProductActions product={product} />

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            What&apos;s in the box
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Device, USB-C cable, quick start guide</li>
            <li>Premium Sapphire care card</li>
            <li>Eco-friendly packaging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
