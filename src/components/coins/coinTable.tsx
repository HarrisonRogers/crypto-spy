import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { PartialCoin } from '@/data/types';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { formatNumberWithCommas, formatPercentage } from '@/lib/formatData';

const PriceChangeTableCell = ({ priceChange }: { priceChange: number }) => {
  return (
    <TableCell
      className={cn(priceChange > 0 ? 'text-green-500' : 'text-red-500')}
    >
      <div className="flex items-center gap-1">
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

function CoinTable({ coins }: { coins: PartialCoin[] }) {
  return (
    <Table>
      <TableCaption>List is the top 50 coins by market cap</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Current Price</TableHead>
          <TableHead>1h Change</TableHead>
          <TableHead>24h Change</TableHead>
          <TableHead>7d Change</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>ATH</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => (
          <TableRow key={coin.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                {coin.image && (
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                {coin.name}
                <span className="text-xs text-gray-500">{coin.symbol}</span>
              </div>
            </TableCell>
            <TableCell>
              {formatNumberWithCommas(coin.current_price || 0)}
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
              {formatNumberWithCommas(coin.market_cap || 0)}
            </TableCell>
            <TableCell>
              {formatNumberWithCommas(coin.ath || 0)}{' '}
              {coin.ath_change_percentage && (
                <span className="text-xs text-red-500">
                  {formatPercentage(coin.ath_change_percentage || 0)}%
                </span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CoinTable;
