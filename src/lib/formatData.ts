export function formatNumberWithCommas(num: number, isExtension?: boolean) {
  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (isExtension) {
    if (num >= 1000000000000) {
      return (num / 1000000000000).toFixed(2) + 'tril';
    }
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + 'bil';
    }
  }

  if (num > 1) {
    return formatted;
  }

  return parseFloat(formatted).toFixed(num < 1 ? 3 : 2);
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
