import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import from expo-linear-gradient
import { CryptoWithUsdValue } from '../../../api/crypto/types';
import formatUsdValue from './helpers/formatUsdValue';
import { useAppNavigation } from '../../../navigation';
import { ScreenName } from '../../../navigation/types';

interface Props {
  data: CryptoWithUsdValue;
}

const Item: React.FC<Props> = ({ data }) => {
  const navigation = useAppNavigation(); // Get navigation from hook
  const { symbol, usdValue } = data;
  const { rate, diff24h, diff24hPercentage } = usdValue;

  const formattedRate = formatUsdValue(rate);

  const navigateToDetails = () => {
    navigation.navigate(ScreenName.Details, { data: data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <LinearGradient
        colors={['#f5f5f5', '#e0e0e0']} // Gradient colors
        style={styles.gradientBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Rate: ${formattedRate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              diff24h >= 0 ? styles.positive : styles.negative,
            ]}>
            24h: {diff24hPercentage}%
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  gradientBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  symbol: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  text: {
    textAlign: 'left',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});

export default Item;
