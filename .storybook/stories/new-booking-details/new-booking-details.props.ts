export interface NewBookingDetailProps {
  checkInDate?: Date | string;
  checkOutDate?: Date | string;
  GuestCount?: string;
  bookedBy?: string;
  ageOfLeadPerson?: string | number;
  bookingId?: string | number;
}
