export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  ath: number;
  ath_change_percentage: number;
};

export type PartialCoin = Partial<Coin>;

export type CoinsResponse = Coin[];
