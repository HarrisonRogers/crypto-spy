import type { CoinsResponse } from '../types';

/**
 * Fetches cryptocurrency market data from CoinGecko API
 * @returns Promise that resolves to an array of coin data
 */
const fetchCoins = async (): Promise<CoinsResponse> => {
  const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

  // Validate that the API key exists
  if (!apiKey) {
    throw new Error('VITE_COIN_GECKO_API_KEY environment variable is not set');
  }

  const fetchUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': apiKey,
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
    const data: CoinsResponse = await response.json();
    return data;
  } catch (error) {
    // Re-throw the error so useQuery can handle it
    throw new Error(
      `Failed to fetch coins: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    );
  }
};

export default fetchCoins;
