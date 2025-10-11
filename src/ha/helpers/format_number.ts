export function formatNumber(
  value: number,
  locale: any,
  options?: Intl.NumberFormatOptions
): string {
  try {
    return new Intl.NumberFormat(locale?.language || "en", options).format(value);
  } catch (error) {
    return value.toString();
  }
}