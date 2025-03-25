import {TextStyle, ViewStyle} from 'react-native';
import {CarouselItem} from './CarouselItem';
export interface CarouselItemProps {
  data: any;
  dotColor?: string;
  isLoading: boolean;
  counterViewStyle?: ViewStyle;
  counterTextStyle?: TextStyle;
  onBackPress: () => void;
}
