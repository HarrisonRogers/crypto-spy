export function formatNumberWithCommas(num: number) {
  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (num > 1) {
    return formatted;
  }
  return parseFloat(formatted).toFixed(num > 1 ? 2 : 3);
}

export function formatPercentage(num: number): string {
  // Check if the number has more than 2 decimal places
  // by comparing it with its rounded version
  const roundedToTwo = parseFloat(num.toFixed(2));

  // If they're different, the original had more than 2 decimal places
  if (num !== roundedToTwo) {
    return num.toFixed(2);
  }

  // Otherwise, return the number as a string without unnecessary formatting
  return num.toString();
}

// Turn date into DD/MM/YY
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  });
};
