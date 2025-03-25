import React from 'react';
import {View} from 'react-native';
import NewBookingDetails from './new-booking-details';

const bookingDeatail = {
  checkInDate: '22/02/2022',
  checkOutDate: '24/02/2022',
  GuestCount: 'John + 2 Person',
  bookedBy: 'John',
  ageOfLeadPerson: 'Age - 30',
  bookingId: '2232323',
};

const NewBookingDetailsMeta = {
  title: 'NewBookingDetails',
  component: NewBookingDetails,
  decorators: [
    Story => (
      <>
        <View>
          <Story />
        </View>
      </>
    ),
  ],
};

export default NewBookingDetailsMeta;

export const plain = {
  args: {
    checkInDate: bookingDeatail.checkInDate,
    checkOutDate: bookingDeatail.checkOutDate,
    GuestCount: bookingDeatail.GuestCount,
    bookedBy: bookingDeatail.bookedBy,
    ageOfLeadPerson: bookingDeatail.ageOfLeadPerson,
    bookingId: bookingDeatail.bookingId,
  },
};
