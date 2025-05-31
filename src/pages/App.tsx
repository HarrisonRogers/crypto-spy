import { Button } from '@/components/ui/button';
import useCoins from '@/data/hooks/useCoins';

function App() {
  const { data, error } = useCoins();
  console.log('data', data);
  console.log('error', error);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

export default App;
