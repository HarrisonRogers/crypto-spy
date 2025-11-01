import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    window.navigator.clipboard.writeText(
      '0x574707E7004659b009BEC9b40f116b7403a92eb9'
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <div className="bottom-10 left-0 right-0 text-center text-gray-400 text-sm mt-6 pb-4 md:mt-0 px-6">
      Made by{' '}
      <a
        href="https://github.com/HarrisonRogers"
        className="underline underline-offset-2 hover:no-underline"
        target="_blank"
      >
        @HarrisonRogers
      </a>
      <div
        className="flex gap-2 items-center justify-center cursor-pointer outline md:w-fit py-2 px-3 rounded-md mx-auto mt-1"
        onClick={handleClick}
      >
        ETH:{' '}
        <span className="truncate max-w-[400px]">
          0x574707E7004659b009BEC9b40f116b7403a92eb9
        </span>
        {isCopied ? (
          <Check className="w-4 h-4 inline-block text-green-500" />
        ) : (
          <Copy className="w-4 h-4 inline-block" />
        )}
      </div>
    </div>
  );
}

export default Footer;
