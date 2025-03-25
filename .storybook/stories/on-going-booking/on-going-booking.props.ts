import {OnGoingBookingItemImages} from './OnGoingBookingItem';
import {OnGoingBookingItem} from './OnGoingBookingItem';

export interface OnGoingBookingProps {
  titleLabel?: string;
  subTitleLabel?: string;
  data?: [OnGoingBookingItem];
  isLoading?: boolean;
  images?: [OnGoingBookingItemImages];
  onPressItem?: () => void;
  seeAllPress: () => void;
}
