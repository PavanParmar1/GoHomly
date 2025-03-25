import {ImageStyle, ViewStyle} from 'react-native';

export interface SuccessPaymentStatusProps {
  outerContainer?: ViewStyle;
  innerContainer?: ViewStyle;
  image?: ImageStyle;
  Title?: string;
  message?: string;
  type?: number;
}
