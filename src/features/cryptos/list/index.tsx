import React from 'react';
import { FlatList } from 'react-native';
import { CryptoWithUsdValue } from '../../../api/crypto/types';

import Item from '../item';

interface Props {
  data: CryptoWithUsdValue[];
}

export default function ListCryptos({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.symbol}
      renderItem={({ item }) => <Item data={item} />}
    />
  );
}
