import {ReactElement} from 'react';
import {searchProperty} from '../../../app/Screens/search_v2/searchType';

export interface topPropertiesProps {
  titleLabel?: string;
  data?: any;
  isLoading?: boolean;
  // onPressItem?: () => void;
  // seeAllPress: () => void;
  onModalPress: (Id: any) => void;
  onLayoutPress: (id: any) => void;
  onRefresh: () => void;
  onFetch: () => void;
  refreshing: any;
  listEmptyComponent?: ReactElement<any, any>;
  // onFavPress: (propertyId: any) => void;
  OnCheckAvailabilityPress: (Id: any) => void;
  totalCount: number;
  horizontal: boolean;
  loadingState:any
}
