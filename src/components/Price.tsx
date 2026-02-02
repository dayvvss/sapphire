import { formatPrice } from "@/lib/format";

type PriceProps = {
  amount: number;
  className?: string;
};

export const Price = ({ amount, className }: PriceProps) => {
  return <span className={className}>{formatPrice(amount)}</span>;
};
