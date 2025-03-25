import {ImageStyle, ViewStyle} from 'react-native';

export interface CompanyCardProps {
  cardInfo?: any;
  cardHolder?: string;
  cardNumber?: string | number;
  cvv?: string | number;
  container?: ViewStyle;
  innerContainer?: ViewStyle;
  leftIcon?: ImageStyle;
  isSelected?: boolean;
  index?: number;
  update?: (position: number) => void;
  delete?: (position: number) => void;
  onPressItem?: () => void;
  onPressDelete?: (data: any) => void;
}
