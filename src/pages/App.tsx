import CoinTable from '@/components/coins/coinTable';
import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function App() {
  const isExtension = useChromeExtension();
  return (
    <>
      <div className={cn('mb-2 md:mb-6', isExtension && 'w-full')}>
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
        <Tabs defaultValue="coins">
          <TabsList className="self-center max-w-[600px] w-full mb-4">
            <TabsTrigger value="coins" className="cursor-pointer">
              Coins
            </TabsTrigger>
            <TabsTrigger value="dex" className="cursor-pointer">
              Pairs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="coins">
            <CoinTable />
          </TabsContent>
          <TabsContent value="dex">
            <h1>Search Pairs</h1>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default App;
