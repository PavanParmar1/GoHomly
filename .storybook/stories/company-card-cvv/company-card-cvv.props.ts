import {ImageStyle, ViewStyle} from 'react-native';

export interface CompanyCardCvvProps {
  cardHolder?: string;
  cardNumber?: string | number;
  cvv?: string | number;
  container?: ViewStyle;
  innerContainer?: ViewStyle;
  leftIcon?: ImageStyle;
  image?: ImageStyle;
}
