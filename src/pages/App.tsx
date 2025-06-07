import useCoins from '@/data/hooks/useCoins';
import CoinTable from '@/components/coins/coinTable';
import CoinsSkeleton from '@/components/coins/coinsSkeleton';
import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';

function App() {
  const { data, isLoading, error } = useCoins();
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
        {isLoading && <CoinsSkeleton />}
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </div>
      {!isLoading && !error && <CoinTable coins={data || []} />}
    </>
  );
}

export default App;
