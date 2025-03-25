import { FC } from 'react';
import {MyBookingItemImages} from './MyBookingItem';
import {MyBookingItem} from './MyBookingItem';

export interface MyBookingProps {
  titleLabel?: string;
  subTitleLabel?: string;
  data?: [MyBookingItem];
  isLoading?: boolean;
  images?: [MyBookingItemImages];
  onPressItem?: () => void;
  seeAllPress: () => void;
  checkOutPress: () => void;
  phonePress: (value: any) => void;
  chatPress: () => void;
  guestDetail?: string;
  travelDate?: string;
  bookingId?: string;
  listEmptyComponent: FC
}
