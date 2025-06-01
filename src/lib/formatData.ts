export function formatNumberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatPercentage(num: number) {
  return num.toFixed(2);
}
