import * as React from 'react';
import ModifyBooking from './modify-booking';
import {View} from 'react-native';

const ModifyBookingMeta = {
  title: 'ModifyBooking',
  component: ModifyBooking,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default ModifyBookingMeta;

export const plain = {
  args: {},
};
