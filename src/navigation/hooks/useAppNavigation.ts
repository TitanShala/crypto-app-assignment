import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

export function useAppNavigation() {
  return useNavigation<NavigationProp<RootStackParamList>>();
}
