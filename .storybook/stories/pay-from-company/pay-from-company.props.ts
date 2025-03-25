import {ViewStyle} from 'react-native';

export interface PayFromCompanyProps {
  cardHolders?: Array<object>;
  container?: ViewStyle;
  heading?: string;
  addPress?: () => void;
}
