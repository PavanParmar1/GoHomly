import React from 'react';
import {View, Text, Alert} from 'react-native';
import BookingDetails from './booking-details';

const checkIn = '15/06/2022 16:00';
const checkOut = '16/06/2022 16:00';

const BookingDetailsMeta = {
  title: 'BookingDetails',
  component: BookingDetails,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
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

export default BookingDetailsMeta;

export const Plain = {
  args: {
    checkIn: checkIn,
    checkOut: checkOut,
  },
};
