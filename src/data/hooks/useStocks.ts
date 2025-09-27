import { useQuery } from '@tanstack/react-query';
import fetchMostActiveStocks from '../queries/getStocks';

/**
 * Custom hook that provides stock data using React Query
 * @returns useQuery result with stock data, loading state, and error handling
 */
const useStocks = () => {
  return useQuery({
    queryKey: ['stocks'], // Unique identifier for this query
    queryFn: fetchMostActiveStocks, // Function that fetches the data
    staleTime: 24 * 60 * 60 * 1000, // Data considered fresh for 1 day (24 hours)
    gcTime: 24 * 60 * 60 * 1000, // Keep in cache for 1 day (was cacheTime in older versions)
    retry: 3, // Retry failed requests 3 times
  });
};

export default useStocks;
