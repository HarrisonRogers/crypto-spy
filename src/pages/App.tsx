import CoinTable from '@/components/coins/coinTable';
import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StocksTable from '@/components/stocks/stocksTable';

function App() {
  const isExtension = useChromeExtension();
  return (
    <>
      <div className="text-center mb-2 md:mb-6">
        <div className="relative flex items-center justify-center gap-2 mb-5">
          <img
            src="/crypto-spy.png"
            alt="Crypto Spy"
            className="w-16 h-16 translate-y-2"
          />
          <h1 className="font-bold text-4xl">Crypto Spy</h1>
          {!isExtension && (
            <Button asChild variant="link" className="absolute right-0 top-5">
              <a href="https://chromewebstore.google.com/detail/crypto-spy/coimplobgcaanmehcjcholcjclgacnhm">
                <ArrowDownToLine />
                chrome extension
              </a>
            </Button>
          )}
        </div>
        <Tabs defaultValue="coins" className="text-start">
          <TabsList className="self-center w-[50%] mb-6">
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
