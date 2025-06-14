import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CoinsResponse } from '@/data/types';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {
  formatNumberWithCommas,
  formatPercentage,
  formatDate,
} from '@/lib/formatData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useChromeExtension } from '@/hooks/useChromeExtension';

const PriceChangeTableCell = ({ priceChange }: { priceChange: number }) => {
  return (
    <TableCell
      className={cn(priceChange > 0 ? 'text-green-500' : 'text-red-500')}
    >
      <div className="flex items-center">
        {priceChange > 0 ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        {formatPercentage(priceChange || 0)}%
      </div>
    </TableCell>
  );
};

function CoinTable({ coins }: { coins: CoinsResponse }) {
  const isExtension = useChromeExtension();
  const usdTag = <small className="text-gray-400">(USD)</small>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price {usdTag}</TableHead>
          <TableHead>1h</TableHead>
          <TableHead>24h</TableHead>
          <TableHead>7d</TableHead>
          <TableHead>MCap {usdTag}</TableHead>
          <TableHead>ATH {usdTag}</TableHead>
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
              ${formatNumberWithCommas(coin.market_cap || 0)}
            </TableCell>
            <TableCell>
              ${formatNumberWithCommas(coin.ath || 0)}{' '}
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
