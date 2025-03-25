import {TextStyle, ViewStyle} from 'react-native';

export interface bookPropertyProps {
  priceList?: any;
  container?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  onPress?: () => void;
  payment?: () => void;
}
