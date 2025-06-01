import useCoins from '@/data/hooks/useCoins';
import CoinTable from '@/components/coins/coinTable';
import CoinsSkeleton from '@/components/coins/coinsSkeleton';

function App() {
  const { data, isLoading, error } = useCoins();
  return (
    <div>
      <div>
        <div className="text-center mb-5 md:mb-6">
          <div className="flex items-center justify-center gap-2 mb-5">
            <img
              src="/crypto-spy.png"
              alt="Crypto Spy"
              className="w-16 h-16 translate-y-2"
            />
            <h1 className="font-bold text-4xl">Crypto Spy</h1>
          </div>
          {isLoading && <CoinsSkeleton />}
          {error && <div className="text-red-500">Error: {error.message}</div>}
        </div>
        {!isLoading && !error && <CoinTable coins={data || []} />}
      </div>
    </div>
  );
}

export default App;
