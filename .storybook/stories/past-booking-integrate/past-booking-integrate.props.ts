import {ViewStyle, ImageStyle} from 'react-native';
export interface pastBookingIntegrateProps {
  container?: ViewStyle;
  image?: ImageStyle;
  bedroomCount?: number | string;
  bathroomCount?: number | string;
  area?: number | string;
  perNightCost?: number | string;
  address?: string;
  icon?: ImageStyle;
  onFavPress?: () => void;
  onPress?: () => void;
}
