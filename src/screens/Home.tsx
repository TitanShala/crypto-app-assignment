import React, { useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useAppDispatch } from '../store';
import { fetchCryptosThunk } from '../store/slices/cryptoSlices';
import { useAppNavigation } from '../navigation';
import { ScreenName } from '../navigation/types';

const Home = () => {
  const navigation = useAppNavigation(); // Get navigation from hook
  const dispatch = useAppDispatch();

  // Fetch data in home screen for better user experience
  useEffect(() => {
    dispatch(fetchCryptosThunk());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Crypto Tracker</Text>
      <Text style={styles.subtitle}>
        Explore the latest trends and updates in the cryptocurrency world.
      </Text>
      <Text style={styles.description}>
        This app provides you with real-time information on various
        cryptocurrencies. You can view a comprehensive list of all available
        cryptocurrencies and their detailed information including current rates,
        historical data, and more.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ScreenName.Cryptos)}>
        <Text style={styles.buttonText}>View Cryptocurrencies</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
