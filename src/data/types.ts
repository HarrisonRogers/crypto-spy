// Coin Gecko Crypto types
export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  ath_date: string;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  ath: number;
};

export type PartialCoin = Partial<Coin>;

export type CoinsResponse = Coin[];

// Dex screener search results
export type DexResults = {
  schemaVersion: string;
  pairs: Pair[];
};

export interface Pair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels: string[];
  baseToken: EToken;
  quoteToken: EToken;
  priceNative: string;
  priceUsd: string;
  txns: Txns;
  volume: PriceChange;
  priceChange: PriceChange;
  liquidity: Liquidity;
  fdv: number;
  marketCap: number;
  pairCreatedAt: number;
  info: Info;
  boosts: Boosts;
}

export interface EToken {
  address: string;
  name: string;
  symbol: string;
}

export interface Boosts {
  active: number;
}

export interface Info {
  imageUrl: string;
  websites: Website[];
  socials: Social[];
}

export interface Social {
  platform: string;
  handle: string;
}

export interface Website {
  url: string;
}

export interface Liquidity {
  usd: number;
  base: number;
  quote: number;
}

export interface PriceChange {
  h1: number;
  h6: number;
  h24: number;
  m5: number;
}

export interface Txns {
  ANY_ADDITIONAL_PROPERTY: AnyAdditionalProperty;
}

export interface AnyAdditionalProperty {
  buys: number;
  sells: number;
}
