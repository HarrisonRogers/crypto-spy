import { useQuery } from '@tanstack/react-query';
import fetchCoins from '../queries/getCoins';

/**
 * Custom hook that provides coin data using React Query
 * @returns useQuery result with coin data, loading state, and error handling
 */
const useCoins = () => {
  return useQuery({
    queryKey: ['coins'], // Unique identifier for this query
    queryFn: fetchCoins, // Function that fetches the data
    staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    gcTime: 2 * 60 * 1000, // Keep in cache for 2 minutes (was cacheTime in older versions)
    retry: 3, // Retry failed requests 3 times
  });
};

export default useCoins;
