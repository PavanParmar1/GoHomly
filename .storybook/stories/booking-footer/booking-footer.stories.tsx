import React from 'react';
import {View} from 'react-native';
import BookingFooter from './booking-footer';

const checkIn = '14 March 2024';
const checkOut = 'March 17';
const rate = '£100';
const numberOfDays = '2 Days';

const BookingFooterMeta = {
  title: 'BookingFooter',
  component: BookingFooter,
  decorators: [
    Story => (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Story />
        </View>
      </>
    ),
  ],
};

export default BookingFooterMeta;

export const plain = {
  args: {
    checkIn: checkIn,
    checkOut: checkOut,
    rate: rate,
    numberOfDays: numberOfDays,
  },
};
