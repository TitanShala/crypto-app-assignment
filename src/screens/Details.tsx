import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CryptoWithUsdValue } from '../api/crypto/types';
import formatUsdValue from '../features/cryptos/item/helpers/formatUsdValue';
import calculatePercentageDifference from '../features/cryptos/item/helpers/calculatePercentageDiff';

interface Props {
  route: {
    params: {
      data: CryptoWithUsdValue;
    };
  };
}

export default function Details({ route }: Props) {
  const { data } = route.params;
  const { ask, bid, diff24h, rate } = data.usdValue;

  // Format values for display
  const formattedAsk = formatUsdValue(ask);
  const formattedBid = formatUsdValue(bid);
  const formattedRate = formatUsdValue(rate);
  const percentageDiff = calculatePercentageDifference(rate - diff24h, rate);
  const formattedDiff =
    percentageDiff > 0 ? `+${percentageDiff}` : percentageDiff;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f5d']} // Gradient colors for the header
        style={styles.header}>
        <Text style={styles.symbol}>{data.symbol}</Text>
        <Text style={styles.rate}>Rate: ${formattedRate}</Text>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Ask Price:</Text>
          <Text style={styles.detailValue}>${formattedAsk}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Bid Price:</Text>
          <Text style={styles.detailValue}>${formattedBid}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>24h Change:</Text>
          <Text
            style={[
              styles.detailValue,
              diff24h >= 0 ? styles.positive : styles.negative,
            ]}>
            {formattedDiff}%
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
  },
  symbol: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  rate: {
    fontSize: 24,
    color: '#fff',
  },
  detailsContainer: {
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});
