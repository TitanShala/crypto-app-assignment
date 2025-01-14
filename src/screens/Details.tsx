import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CryptoWithUsdValue } from '../api/crypto/types';

interface Props {
  route: {
    params: {
      data: CryptoWithUsdValue;
    };
  };
}

export default function Details({ route }: Props) {
  const { data } = route.params;
  const { ask, bid, diff24h, rate, diff24hPercentage } = data.usdValue;

  // Format values for display
  const formattedDiff =
    diff24h > 0 ? `+${diff24hPercentage}` : diff24hPercentage;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f5d']} // Gradient colors for the header
        style={styles.header}>
        <Text style={styles.symbol}>{data.symbol}</Text>
        <Text style={styles.rate}>Rate: ${rate}</Text>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Ask Price:</Text>
          <Text style={styles.detailValue}>${ask}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Bid Price:</Text>
          <Text style={styles.detailValue}>${bid}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>24h Change %:</Text>
          <Text
            style={[
              styles.detailValue,
              diff24h >= 0 ? styles.positive : styles.negative,
            ]}>
            {formattedDiff}%
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>24h Change $:</Text>
          <Text
            style={[
              styles.detailValue,
              diff24h >= 0 ? styles.positive : styles.negative,
            ]}>
            ${diff24h}
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
