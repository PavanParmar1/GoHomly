import React, {useState} from 'react';
import GuestBooking from './guest-booking';

const GuestBookingMeta = {
  title: 'GuestBooking',
  component: GuestBooking,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
  decorators: [
    Story => (
      <>
        <Story />
      </>
    ),
  ],
};

export default GuestBookingMeta;

export const Plain = {
  args: {
    onPress: () => {
      console.log('click');
    },
  },
};
