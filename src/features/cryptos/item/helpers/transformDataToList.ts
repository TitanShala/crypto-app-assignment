import {
  CryptoDataMap,
  CryptoWithUsdValue,
} from '../../../../api/crypto/types';
import calculatePercentageDifference from './calculatePercentageDiff';

function transformDataToCryptoItems(data: CryptoDataMap): CryptoWithUsdValue[] {
  // Create an array of CryptoWithUsdValue from the data
  return Object.entries(data)
    .map(([symbol, pairs]) => {
      // Find the USD pair within the pairs object
      const usdPair = pairs.usd; // Assumes 'usd' is the key for the USD pair

      // If usdPair exists, create a CryptoWithUsdValue with symbol and USD pair
      if (usdPair) {
        return {
          symbol,
          usdValue: {
            ...usdPair,
            diff24hPercentage: calculatePercentageDifference(
              usdPair.rate - usdPair.diff24h,
              usdPair.rate,
            ),
          },
        } as CryptoWithUsdValue; // Cast to CryptoWithUsdValue
      }

      // If no USD pair exists, exclude this entry
      return null;
    })
    .filter((item): item is CryptoWithUsdValue => item !== null); // Type guard to filter out null values
}

export default transformDataToCryptoItems;
