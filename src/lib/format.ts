export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(value);
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
};
