import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { fetchCryptosThunk } from '../store/slices/cryptoSlices';
import { useAppDispatch, useAppSelector } from '../store';

export default function Home() {
  const dispatch = useAppDispatch();
  const { cryptos, loading, error } = useAppSelector(state => state.crypto);

  useEffect(() => {
    // dispatch(fetchCryptosThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {
        //TODO: Display cryptos
      }
    </View>
  );
}
