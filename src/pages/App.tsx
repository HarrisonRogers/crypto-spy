import useCoins from '@/data/hooks/useCoins';
// import dummyCoins from '@/data/dummyCoins';
import CoinTable from '@/components/coins/coinTable';

function App() {
  const { data, isLoading, error } = useCoins();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Crypto Price Tracker</h1>
      <div className="">
        <CoinTable coins={data || []} />
      </div>
    </div>
  );
}

export default App;
