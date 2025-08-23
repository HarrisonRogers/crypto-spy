import { useQuery } from '@tanstack/react-query';
import fetchMostActiveStocks from '../queries/getMostActiveStocks';

/**
 * Custom hook that provides coin data using React Query
 * @returns useQuery result with coin data, loading state, and error handling
 */
const useCoins = () => {
  return useQuery({
    queryKey: ['stocks'], // Unique identifier for this query
    queryFn: fetchMostActiveStocks, // Function that fetches the data
    staleTime: 60 * 60 * 1000, // Data considered fresh for 1 hour
    gcTime: 60 * 60 * 1000, // Keep in cache for 1 hour (was cacheTime in older versions)
    retry: 3, // Retry failed requests 3 times
  });
};

export default useCoins;
