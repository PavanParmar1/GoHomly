import {NearByItem} from './NearByItem';
export interface NearByProps {
  // used to Provide Header title text
  titleLabel?: string;
  // used to Provide Near by items
  data: [NearByItem];
  // used to show Shimmer Efferct if isLoading true
  isLoading?: boolean;
  onPressItem?: (item: any, index: number) => void;
}
