import { useChromeExtension } from '@/hooks/useChromeExtension';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { cn } from '@/lib/utils';

import TabComponent from './components/ui/tabComponent';
import Footer from './components/footer';

function App() {
  const isExtension = useChromeExtension();
  return (
    <div
      className={cn(
        'max-w-[1400px] mx-auto mt-5 md:mt-10 h-[calc(100vh-40px)] flex flex-col justify-between',
        isExtension && 'w-[600px]'
      )}
    >
      <div className="mb-2 md:mb-6">
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
      <Footer />
    </div>
  );
}

export default App;
