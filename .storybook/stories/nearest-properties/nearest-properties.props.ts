// import {OnGoingBookingItemImages} from './OnGoingBookingItem';
import {NearestPropetyItem} from './NearestPropertyItem';
export interface NearestPropertiesProps {
  titleLabel?: string;
  subTitleLabel?: string;
  data?: [NearestPropetyItem];
  isLoading?: boolean;
  onPressItem: () => void;
  seeAllPress: () => void;
}
