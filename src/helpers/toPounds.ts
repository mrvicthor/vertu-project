export const convertCurrency = (value: number) => {
  const toPounds = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumSignificantDigits: 4,
  });
  return toPounds.format(value);
};
