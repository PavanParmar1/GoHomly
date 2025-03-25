import * as React from 'react';
import {View} from 'react-native';
import BookingDetails from './booking-details';

const RoomSelctionMeta = {
  title: 'RoomSelction',
  component: BookingDetails,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default RoomSelctionMeta;

export const Plain = {
  args: {},
};
