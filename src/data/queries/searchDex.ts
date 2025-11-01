import type { DexResults } from '../types';

/**
 * Searches the Dex Screener API for trading pairs that match the input value.
 * @param inputValue - The search query (token name, symbol, pair address, etc.)
 * @returns Promise resolving to DexResults containing matched pairs and metadata.
 */

const searchDex = async (inputValue: string): Promise<DexResults> => {
  const fetchUrl = `https://api.dexscreener.com/latest/dex/search?q=${inputValue}`;

  try {
    // Make the API request
    const response = await fetch(fetchUrl);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data: DexResults = await response.json();
    return data;
  } catch (error) {
    // Re-throw the error so useQuery can handle it
    throw new Error(
      `${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

export default searchDex;
