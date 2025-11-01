import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { cn } from '@/lib/utils';

import TabComponent from './components/ui/tabComponent';

function App() {
  const isExtension = useChromeExtension();
  return (
    <>
      <div className={cn('mb-2 md:mb-6', isExtension && 'min-w-[600px]')}>
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
        <TabComponent />
      </div>
    </>
  );
}

export default App;
