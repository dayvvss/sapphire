import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { Price } from "@/components/Price";

const placeholder = "/products/placeholder.svg";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const image = product.images[0] ?? placeholder;
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative h-48 w-full bg-slate-50">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-contain p-6 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">{product.brand}</p>
          <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
          <p className="text-sm text-slate-500">{product.category}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <Price amount={product.price} className="text-lg font-semibold text-slate-900" />
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
    </Link>
  );
};
