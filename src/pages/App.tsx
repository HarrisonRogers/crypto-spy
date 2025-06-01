import useCoins from '@/data/hooks/useCoins';
// import dummyCoins from '@/data/dummyCoins';
import CoinTable from '@/components/coins/coinTable';

function App() {
  const { data, isLoading, error } = useCoins();
  return (
    <div>
      <div>
        <div className="text-center mb-5 md:mb-10">
          <h1 className="font-bold text-4xl mb-5 md:mb-10">Crypto Spy</h1>
          {isLoading && <div>Loading...</div>}
          {error && <div className="text-red-500">Error: {error.message}</div>}
        </div>
        {!isLoading && !error && <CoinTable coins={data || []} />}
      </div>
    </div>
  );
}

export default App;
