import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListCryptos from '../features/cryptos/list';
import { useAppSelector } from '../store';
import useFilteringAndSorting from '../features/cryptos/item/hooks/useFilteringAndSorting';
import { Picker } from '@react-native-picker/picker';

export default function Cryptos() {
  const { loading, error } = useAppSelector(state => state.crypto);
  const { data, filterOption, setFilterOption, sortOption, setSortOption } =
    useFilteringAndSorting();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Oops! Something went wrong. Please try again later.
        </Text>
      </View>
    );
  }

  if (!data.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>
          No data available. Please check back later.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Filter by:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={filterOption}
            style={styles.picker}
            onValueChange={itemValue => setFilterOption(itemValue)}>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Gainers" value="gainers" />
            <Picker.Item label="Losers" value="losers" />
          </Picker>
        </View>

        <Text style={styles.sortLabel}>Sort by:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sortOption}
            style={styles.picker}
            onValueChange={itemValue => setSortOption(itemValue)}>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Ascending Diff" value="ascendingDiff" />
            <Picker.Item label="Descending Diff" value="descendingDiff" />
            <Picker.Item label="Ascending Rate" value="ascendingRate" />
            <Picker.Item label="Descending Rate" value="descendingRate" />
          </Picker>
        </View>
      </View>

      <ListCryptos data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  filtersContainer: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sortLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#007BFF', // Blue border color
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden', // Ensure border radius is applied to picker
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333', // Text color inside picker
  },
});
