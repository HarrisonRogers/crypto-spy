import { Skeleton } from '../ui/skeleton';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useChromeExtension } from '@/hooks/useChromeExtension';

function CoinsSkeleton() {
  const isExtension = useChromeExtension();
  const skeletonRowNumbers = isExtension ? 6 : 30;
  const skeletonRows = Array.from({ length: skeletonRowNumbers });

  return (
    <Table>
      <TableBody>
        {skeletonRows.map((_, index) => (
          <TableRow key={index}>
            {/* Rank number skeleton - small width */}
            <TableCell>
              <Skeleton className="h-4 w-6" />
            </TableCell>

            {/* Name cell with avatar, name, and symbol skeleton */}
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                {/* Circular avatar skeleton */}
                <Skeleton className="w-7 h-7 rounded-full" />

                <div className="flex flex-col gap-1">
                  {/* Coin name skeleton - medium width */}
                  <Skeleton className="h-4 w-20" />
                  {/* Symbol skeleton - small width */}
                  <Skeleton className="h-3 w-8" />
                </div>
              </div>
            </TableCell>

            {/* Price skeleton - medium width */}
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>

            {/* 1h percentage change skeleton with icon space */}
            <TableCell>
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-1" />
                <Skeleton className="h-4 w-12" />
              </div>
            </TableCell>

            {/* 24h percentage change skeleton with icon space */}
            <TableCell>
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-1" /> {/* Icon skeleton */}
                <Skeleton className="h-4 w-12" />
              </div>
            </TableCell>

            {/* 7d percentage change skeleton with icon space */}
            <TableCell>
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-1" /> {/* Icon skeleton */}
                <Skeleton className="h-4 w-12" />
              </div>
            </TableCell>

            {/* Market cap skeleton - larger width for big numbers */}
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>

            {/* ATH skeleton - medium width */}
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CoinsSkeleton;
