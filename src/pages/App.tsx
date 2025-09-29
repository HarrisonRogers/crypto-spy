import CoinTable from '@/components/coins/coinTable';
import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StocksTable from '@/components/stocks/stocksTable';
import { cn } from '@/lib/utils';

function App() {
  const isExtension = useChromeExtension();
  return (
    <>
      <div
        className={cn(
          'text-center mb-2 md:mb-6',
          isExtension && 'min-w-[650px]'
        )}
      >
        <div className="relative flex items-center justify-center gap-2 mb-5">
          <img
            src="/crypto-spy.png"
            alt="Crypto Spy"
            className="w-16 h-16 translate-y-2"
          />
          <h1 className="font-bold text-4xl">Crypto Spy</h1>
          {!isExtension && (
            <Button
              asChild
              variant="link"
              className="right-0 top-5 absolute hidden md:flex"
            >
              <a href="https://chromewebstore.google.com/detail/crypto-spy/coimplobgcaanmehcjcholcjclgacnhm">
                <ArrowDownToLine />
                chrome extension
              </a>
            </Button>
          )}
        </div>
        <Tabs defaultValue="coins" className="text-start">
          <TabsList
            className={cn(
              'self-center md:w-[50%] w-[90%] mb-6',
              isExtension && 'mb-2'
            )}
          >
            <TabsTrigger value="coins">Crypto</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
          </TabsList>
          <TabsContent value="coins">
            <CoinTable />
          </TabsContent>
          <TabsContent value="stocks">
            <StocksTable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default App;
