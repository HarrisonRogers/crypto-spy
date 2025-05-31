import { Button } from '@/components/ui/button';
import useCoins from '@/data/hooks/useCoins';

function App() {
  const { data } = useCoins();

  console.log(data);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

export default App;
