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
    <div className="text-center text-gray-400 text-sm mt-6 md:mt-0">
      Made by{' '}
      <a
        href="https://github.com/HarrisonRogers"
        className="underline underline-offset-2 hover:no-underline"
        target="_blank"
      >
        @HarrisonRogers
      </a>
      <div
        className="flex gap-2 items-center justify-center cursor-pointer outline py-2 px-3 rounded-md w-fit mx-auto mt-1"
        onClick={handleClick}
      >
        ETH: 0x574707E7004659b009BEC9b40f116b7403a92eb9
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
