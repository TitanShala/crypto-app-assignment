import React from 'react';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, ScreenName } from './types';

import Home from '../screens/Home';
import Cryptos from '../screens/Cryptos';
import Details from '../screens/Details';

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenName.Home} component={Home} />
        <Stack.Screen name={ScreenName.Cryptos} component={Cryptos} />
        <Stack.Screen name={ScreenName.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function useAppNavigation() {
  return useNavigation<NavigationProp<RootStackParamList>>();
}
