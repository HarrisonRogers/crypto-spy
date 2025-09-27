import type { Stock } from '../types';

/**
 * Fetches cryptocurrency market data from CoinGecko API
 * @returns Promise that resolves to an array of coin data
 */
const fetchMostActiveStocks = async (): Promise<Stock[]> => {
  const apiKey = import.meta.env.VITE_STOCK_API_KEY;

  // Validate that the API key exists
  if (!apiKey) {
    throw new Error('Environment variable is not set');
  }

  const fetchUrl = `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&sort=market_cap&order=desc&limit=100&apiKey=${apiKey}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  try {
    // Make the API request
    const response = await fetch(fetchUrl, options);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data: Stock[] = await response.json();
    return data;
  } catch (error) {
    // Re-throw the error so useQuery can handle it
    throw new Error(
      `Failed to fetch stocks: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    );
  }
};

export default fetchMostActiveStocks;
