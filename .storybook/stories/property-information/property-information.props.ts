import {AddressComponentItem} from './AddressComponentItem';
export interface AddressCompoenentProps {
  // used to Provide Header title text
  titleLabel?: string;
  // used to Provide Near by items
  data?: AddressComponentItem;
  // used to show Shimmer Efferct if isLoading true
  isLoading?: boolean;
  navigation?: any;
  onPressReview?: () => void;
  onPressMap?: () => void;
}
