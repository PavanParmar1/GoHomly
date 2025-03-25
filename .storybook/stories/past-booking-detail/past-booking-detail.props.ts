export interface PastBookingDetailProps {
  checkInDate?: Date | string;
  checkOutDate?: Date | string;
  GuestCount?: string;
  bookedBy?: string;
  ageOfLeadPerson?: string | number;
  bookingId?: string | number;
}
