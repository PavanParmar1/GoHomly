import {ViewStyle} from 'react-native';

export interface PaymentStatusWithDetailsProps {
  container?: ViewStyle;
  innerContainer?: ViewStyle;
  title?: string;
  reservationNumber?: number | string;
  transactionNumber?: number | string;
}
