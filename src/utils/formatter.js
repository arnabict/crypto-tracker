export const formatPrice = (price) => {
  const decimals = price < 0.01 ? 8 : 2;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price);
};
