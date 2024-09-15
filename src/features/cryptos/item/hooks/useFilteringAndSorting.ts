/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store';
import { CryptoWithUsdValue } from '../../../../api/crypto/types';

export enum FilterOption {
  All = 'all',
  Gainers = 'gainers',
  Losers = 'losers',
}

export enum SortOption {
  AscendingDiff = 'ascendingDiff',
  DescendingDiff = 'descendingDiff',
  AscendingRate = 'ascendingRate',
  DescendingRate = 'descendingRate',
  None = 'none',
}

export default function useFilteringAndSorting() {
  const [filterOption, setFilterOption] = useState<FilterOption>(
    FilterOption.All,
  );
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.None);
  const [data, setData] = useState<CryptoWithUsdValue[]>([]);

  const { cryptos } = useAppSelector(state => state.crypto);

  useEffect(() => {
    let filteredData: CryptoWithUsdValue[] = cryptos || [];

    if (filterOption === FilterOption.Gainers) {
      filteredData = filteredData.filter(
        crypto => (crypto.usdValue.diff24hPercentage ?? 0) > 0,
      );
    }

    if (filterOption === FilterOption.Losers) {
      filteredData = filteredData.filter(
        crypto => (crypto.usdValue.diff24hPercentage ?? 0) < 0,
      );
    }

    // Sort data after filtering
    if (sortOption !== SortOption.None) {
      filteredData = [...filteredData].sort((a, b) => {
        switch (sortOption) {
          case SortOption.AscendingDiff:
            return (
              (a.usdValue.diff24hPercentage ?? 0) -
              (b.usdValue.diff24hPercentage ?? 0)
            );
          case SortOption.DescendingDiff:
            return (
              (b.usdValue.diff24hPercentage ?? 0) -
              (a.usdValue.diff24hPercentage ?? 0)
            );
          case SortOption.AscendingRate:
            return (a.usdValue.rate ?? 0) - (b.usdValue.rate ?? 0);
          case SortOption.DescendingRate:
            return (b.usdValue.rate ?? 0) - (a.usdValue.rate ?? 0);
          default:
            return 0;
        }
      });
    }

    setData(filteredData);
  }, [cryptos, filterOption, sortOption]);

  return {
    filterOption,
    setFilterOption,
    sortOption,
    setSortOption,
    data,
  };
}
