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

function CoinTable({ coins }: { coins: PartialCoin[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Current Price</TableHead>
          <TableHead className="">24h Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => (
          <TableRow key={coin.id}>
            <TableCell className="font-medium">{coin.name}</TableCell>
            <TableCell>{coin.symbol}</TableCell>
            <TableCell>{coin.current_price}</TableCell>
            <TableCell>{coin.price_change_percentage_24h}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CoinTable;
