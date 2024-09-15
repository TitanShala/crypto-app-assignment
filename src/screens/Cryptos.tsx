import React from 'react';
import { View, Text } from 'react-native';

import ListCryptos from '../features/cryptos/list';
import { useAppSelector } from '../store';

export default function Cryptos() {
  const { cryptos, loading, error } = useAppSelector(state => state.crypto);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (cryptos === null) {
    return <Text>No data</Text>;
  }

  return (
    <View>
      <ListCryptos data={cryptos} />
    </View>
  );
}
