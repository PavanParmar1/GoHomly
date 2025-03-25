export interface BookingFooterProps {
  checkIn?: Date | string;
  checkOut?: Date | string;
  rate?: number | string;
  numberOfDays?: number | string;
  isCheckout?: boolean;
  onPress?: () => void;
  onPress1?: () => void;
}
