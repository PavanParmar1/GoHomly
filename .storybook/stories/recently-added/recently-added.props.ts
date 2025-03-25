import {RecentlyAddedItem} from './RecentlyAddedItem';
export interface RecentlyAddedItemProps {
  titleLabel?: string;
  subTitleLabel?: string;
  data?: [RecentlyAddedItem];
  isLoading?: boolean;
  onPressItem: () => void;
  seeAllPress: () => void;
}
