import {TextStyle, ViewStyle} from 'react-native';

export interface BookingDetailsProps {
  CONTAINER?: ViewStyle;
  INNER_CONTAINERT?: ViewStyle;
  title?: string;
  checkIn?: Date | string;
  checkOut?: Date | string;
  BUTTON?: TextStyle;

  SUBTITLE?: TextStyle;
  DATEANDTIME?: TextStyle;
  ICON?: any;

  containerStyle?: ViewStyle;
  onPress?: (arg: any) => void;
}
