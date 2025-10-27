import type { CoinsResponse } from '../types';

/**
 * Fetches cryptocurrency market data from CoinGecko API
 * @returns Promise that resolves to an array of coin data
 */
const fetchCoins = async (): Promise<CoinsResponse> => {
  const fetchUrl = import.meta.env.VITE_COINS_API;

  try {
    // Make the API request
    const response = await fetch(fetchUrl);

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
      `${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

export default fetchCoins;
