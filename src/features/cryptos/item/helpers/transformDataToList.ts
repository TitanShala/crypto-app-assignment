import {
  CryptoDataMap,
  CryptoWithUsdValue,
} from '../../../../api/crypto/types';

function transformDataToCryptoItems(data: CryptoDataMap): CryptoWithUsdValue[] {
  // Create an array of CryptoItem from the data
  return Object.entries(data)
    .map(([symbol, pairs]) => {
      // Find the USD pair within the pairs object
      const usdPair = pairs.usd; // Assumes 'usd' is the key for the USD pair

      // If usdPair exists, create a CryptoWithUsdValue with symbol and USD pair
      if (usdPair) {
        return {
          symbol,
          usdValue: usdPair, // Using 'rate' as the USD value
        };
      }

      // Return null if no USD pair exists for this symbol
      return null;
    })
    .filter((item): item is CryptoWithUsdValue => item !== null); // Filter out any null values
}

export default transformDataToCryptoItems;
