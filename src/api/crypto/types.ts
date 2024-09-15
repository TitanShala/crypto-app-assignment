// Represents the price data for a cryptocurrency
export interface CryptoPriceData {
  rate: number; // Current price of the cryptocurrency in USD
  ask: number; // The price at which you can buy the cryptocurrency
  bid: number; // The price at which you can sell the cryptocurrency
  diff24h: number; // The change in price over the last 24 hours
  diff24hPercentage?: number; // The change in price over the last 24 hours in percentage
}

// Represents the price data in usd for a cryptocurrency with its symbol
export interface CryptoWithUsdValue {
  symbol: string;
  usdValue: CryptoPriceData;
}

// Represents a collection of trading pairs for a specific cryptocurrency
export interface CryptocurrencyPairs {
  [pair: string]: CryptoPriceData; // Each trading pair (e.g., BTC, ETH) maps to its price data
}

// Represents the structure of the `data` field in the API response
export interface CryptoDataMap {
  [symbol: string]: CryptocurrencyPairs; // Each symbol (e.g., BTC, ETH) maps to its pairs
}

// Represents the API response structure for cryptocurrency rates
export interface CryptoRatesApiResponse extends CryptoDataMap {}
