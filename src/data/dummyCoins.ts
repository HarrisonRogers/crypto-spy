import type { Coin } from './types';

const dummyCoins: Partial<Coin>[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image:
      'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 104744,
    price_change_percentage_24h: 10,
    ath: 111814,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    current_price: 100000,
    price_change_percentage_24h: 10,
    ath: 100000,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    current_price: 100000,
    price_change_percentage_24h: 10,
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    current_price: 100000,
    price_change_percentage_24h: 10,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    current_price: 100000,
    price_change_percentage_24h: 10,
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    current_price: 100000,
  },
  {
    id: 'ripple',
    name: 'Ripple',
    symbol: 'XRP',
    current_price: 100000,
    price_change_percentage_24h: 10,
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    symbol: 'LTC',
    current_price: 100000,
  },
  {
    id: 'binancecoin',
    name: 'Binance Coin',
    symbol: 'BNB',
    current_price: 100000,
    price_change_percentage_24h: 10,
  },
];

export default dummyCoins;
