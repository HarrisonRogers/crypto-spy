import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TableSkeleton from '../tableSkeleton';
import ErrorMessage from '../ui/errorMessage';
import useDexSearch from '@/data/hooks/useDexSearch';
import { formatNumberWithCommas } from '@/lib/formatData';
import PriceChangeTableCell from '../coins/priceChangeTableCell';
import { Search } from 'lucide-react';
import UsdTag from '../ui/usdTag';

/**
 * SearchPairs component allows users to search for cryptocurrency trading pairs
 * using the DexScreener API. It includes a debounced search input to prevent
 * excessive API calls while the user is typing.
 */
function SearchPairs() {
  // State to store the actual search value that gets passed to the API
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  // State to store the input value that updates immediately as user types
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Set up a timer that will update the debounced value after 1 second
    const timer = setTimeout(() => {
      setDebouncedSearchValue(inputValue);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // Use our custom hook to fetch dex search results
  const { data, isLoading, error } = useDexSearch(debouncedSearchValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="space-y-4">
      {/* Search Input Section */}
      <div className="flex relative gap-2">
        <Search
          className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => searchInputRef.current?.focus()}
        />
        <Input
          id="search-input"
          type="text"
          ref={searchInputRef}
          placeholder="Search pairs by token name, symbol, or address"
          value={inputValue}
          onChange={handleInputChange}
          className="pl-8"
        />
      </div>

      {/* Results Section */}
      {isLoading && <TableSkeleton />}

      {error && <ErrorMessage message={error.message} />}

      {/* Show results when we have data */}
      {data && data.pairs && data.pairs.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pair</TableHead>
              <TableHead>DEX</TableHead>
              <TableHead>Chain</TableHead>
              <TableHead>
                Price <UsdTag />
              </TableHead>
              <TableHead>5m</TableHead>
              <TableHead>1h</TableHead>
              <TableHead>24h</TableHead>
              <TableHead>
                Market Cap <UsdTag />
              </TableHead>
              <TableHead>
                Liquidity <UsdTag />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.pairs.map((pair) => (
              <TableRow key={pair.pairAddress}>
                {/* Pair Name and Symbol Column */}
                <TableCell className="font-medium">
                  <a
                    href={pair.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <Avatar className="w-7 h-7">
                      <AvatarImage
                        src={pair.info?.imageUrl}
                        alt={pair.baseToken.name}
                      />
                      <AvatarFallback>
                        {pair.baseToken.symbol.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="group-hover:underline underline-offset-2">
                        {pair.baseToken.symbol}/{pair.quoteToken.symbol}
                      </span>
                      <small className="text-xs text-gray-400">
                        {pair.baseToken.name}
                      </small>
                    </div>
                  </a>
                </TableCell>

                {/* DEX Name Column */}
                <TableCell className="text-xs uppercase">
                  {pair.dexId}
                </TableCell>

                {/* Chain ID Column */}
                <TableCell className="text-xs uppercase">
                  {pair.chainId}
                </TableCell>

                {/* Price Column */}
                <TableCell>
                  ${formatNumberWithCommas(parseFloat(pair.priceUsd || '0'))}
                </TableCell>

                {/* Price Change 5 minutes */}
                <PriceChangeTableCell priceChange={pair.priceChange.m5 || 0} />

                {/* Price Change 1 hour */}
                <PriceChangeTableCell priceChange={pair.priceChange.h1 || 0} />

                {/* Price Change 24 hours */}
                <PriceChangeTableCell priceChange={pair.priceChange.h24 || 0} />

                {/* Market Cap Column */}
                <TableCell>
                  ${formatNumberWithCommas(pair.marketCap || 0)}
                </TableCell>

                {/* Liquidity Column */}
                <TableCell>
                  ${formatNumberWithCommas(pair.liquidity?.usd || 0)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Show message when search returns no results */}
      {data && data.pairs.length === 0 && debouncedSearchValue && (
        <div className="text-center py-8 text-gray-400">
          No trading pairs found for "{debouncedSearchValue}"
        </div>
      )}
    </div>
  );
}

export default SearchPairs;
