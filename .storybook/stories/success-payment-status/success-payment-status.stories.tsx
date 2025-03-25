import * as React from 'react';
import {View} from 'react-native';
import SuccessPaymentStatus from './success-payment-status';

const SuccessPaymentStatusMeta = {
  title: 'SuccessPaymentStatus',
  component: SuccessPaymentStatus,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default SuccessPaymentStatusMeta;

export const Default = {
  args: {},
};
