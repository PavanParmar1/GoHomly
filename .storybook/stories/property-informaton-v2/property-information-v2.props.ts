export interface PropertyInformationProps {
  CheckInTime: any;
  CheckOutTime: any;
  titleLabel?: string;
  subTitle?: string;
  checkIn: string;
  checkOut: string;
  price?: number;
  rate?: number;
  isLoading?: boolean;
  navigation?: any;
  isChildAllowed?: boolean;
  isPetAllowed?: boolean;
  isSomkingAllowed: boolean;
  onPressReview?: () => void;
  onPressMap?: () => void;
  onModalPress?: () => void;
}
