import { useQuery } from '@tanstack/react-query';
import searchDex from '../queries/searchDex';

/**
 * Custom hook that provides dex search results using React Query
 * @param inputValue - The search query (token name, symbol, pair address, etc.)
 * @returns useQuery result with dex search results, loading state, and error handling
 */
const useDexSearch = (inputValue: string) => {
  return useQuery({
    queryKey: ['dex-search', inputValue], // Unique identifier for this query
    queryFn: () => searchDex(inputValue), // Function that fetches the data
    enabled: !!inputValue, // Only run the query if inputValue is provided
  });
};

export default useDexSearch;
