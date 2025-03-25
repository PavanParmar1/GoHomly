import * as React from 'react';
import {View} from 'react-native';
import PaymentRefundDetails from './payment-refund-details';

const bookingFee = '5000.00';
const cleaning = '50.00';
const breakfast = '50.00';
const cancellationFee = '100.00';

const PaymentRefundDetailsMeta = {
  title: 'PaymentRefundDetails',
  component: PaymentRefundDetails,

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

export default PaymentRefundDetailsMeta;

export const Plain = {
  args: {
    bookingFee: bookingFee,
    cleaningFee: cleaning,
    Breakfast: breakfast,
    cancellationFee: cancellationFee,
  },
};
