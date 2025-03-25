// import {OnGoingBookingItemImages} from './OnGoingBookingItem';
import {HighestRatedItem} from './HighestRatedItem';
export interface HighestRatedItemProps {
  titleLabel?: string;
  subTitleLabel?: string;
  data?: [HighestRatedItem] | undefined;
  isLoading?: boolean;
  onPressItem: () => void;
  seeAllPress: () => void;
}
