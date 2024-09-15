import React from 'react';
import { FlatList } from 'react-native';
import { CryptoDataMap, CryptoWithUsdValue } from '../../../api/crypto/types';
import transformDataToCryptoItems from '../item/helpers/transformDataToList';
import Item from '../item';

interface Props {
  data: CryptoDataMap;
}

export default function ListCryptos({ data }: Props) {
  const transformedData: CryptoWithUsdValue[] =
    transformDataToCryptoItems(data);

  return (
    <FlatList
      data={transformedData}
      keyExtractor={item => item.symbol}
      renderItem={({ item }) => <Item data={item} />}
    />
  );
}
