import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { formatNumberWithCommas, formatDate } from '@/lib/formatData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useChromeExtension } from '@/hooks/useChromeExtension';
import useCoins from '@/data/hooks/useCoins';
import TableSkeleton from '../tableSkeleton';
import PriceChangeTableCell from './priceChangeTableCell';
import ErrorMessage from '../ui/errorMessage';
import UsdTag from '../ui/usdTag';

function CoinTable() {
  const { data: coins, isLoading, error } = useCoins();
  const isExtension = useChromeExtension();

  if (isLoading) return <TableSkeleton />;

  if (error || !coins)
    return <ErrorMessage message={error?.message || 'Unknown error'} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>
            Price <UsdTag />
          </TableHead>
          <TableHead>1h</TableHead>
          <TableHead>24h</TableHead>
          <TableHead>7d</TableHead>
          <TableHead>
            MCap <UsdTag />
          </TableHead>
          <TableHead>
            ATH <UsdTag />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => (
          <TableRow key={coin.id}>
            <TableCell>{coin.market_cap_rank}</TableCell>
            <TableCell
              className={cn(
                'font-medium max-w-48 md:max-w-60 group',
                isExtension && 'max-w-48'
              )}
            >
              <a
                href={`https://www.coingecko.com/en/coins/${coin.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Avatar className="w-7 h-7">
                  <AvatarImage src={coin.image} alt={coin.name} />
                  <AvatarFallback>{coin.symbol.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="truncate group-hover:underline underline-offset-2">
                  {coin.name}
                </span>
                <span className="text-xs text-gray-400">
                  {coin.symbol.toUpperCase()}
                </span>
              </a>
            </TableCell>
            <TableCell>
              ${formatNumberWithCommas(coin.current_price || 0)}
            </TableCell>

            <PriceChangeTableCell
              priceChange={coin.price_change_percentage_1h_in_currency || 2}
            />
            <PriceChangeTableCell
              priceChange={coin.price_change_percentage_24h || 0}
            />
            <PriceChangeTableCell
              priceChange={coin.price_change_percentage_7d_in_currency || -3}
            />

            <TableCell>
              ${formatNumberWithCommas(coin.market_cap || 0, isExtension)}
            </TableCell>
            <TableCell>
              ${formatNumberWithCommas(coin.ath || 0, isExtension)}{' '}
              <small className="text-gray-400">
                ({formatDate(coin.ath_date)})
              </small>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CoinTable;
