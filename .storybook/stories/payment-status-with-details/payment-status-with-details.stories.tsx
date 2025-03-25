import * as React from 'react';
import {View} from 'react-native';
import PaymentStatusWithDetails from './payment-status-with-details';

const reservationNumber = '0000 8888 4578 ';
const transactionNumber = '7854269245';

const PaymentStatusWithDetailsMeta = {
  title: 'PaymentStatusWithDetails',
  component: PaymentStatusWithDetails,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PaymentStatusWithDetailsMeta;

export const Plain = {
  args: {
    reservationNumber: reservationNumber,
    transactionNumber: transactionNumber,
  },
};
