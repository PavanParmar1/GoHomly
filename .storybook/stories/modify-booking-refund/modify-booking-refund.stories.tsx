import * as React from 'react';
import ModifyBookingRefund from './modify-booking-refund';
import {View} from 'react-native';

const ModifyBookingRefundMeta = {
  title: 'ModifyBookingRefund',
  component: ModifyBookingRefund,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default ModifyBookingRefundMeta;

export const plain = {
  args: {
    updatedBookingAmount: 2134,
    previousBookingAmount: 5000,
  },
};
