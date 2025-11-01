import { ChevronDown, ChevronUp } from 'lucide-react';
import { TableCell } from '../ui/table';
import { formatPercentage } from '@/lib/formatData';
import { cn } from '@/lib/utils';

function PriceChangeTableCell({ priceChange }: { priceChange: number }) {
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
}

export default PriceChangeTableCell;
