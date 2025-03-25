import React from 'react';
import {Divider} from '@rneui/themed-edge';
import {Text, View} from 'react-native';
import {
  OUTER_CONTAINER,
  CONTAINER,
  INNER_CONTAINER,
  CHARGE_CONTAINER,
  FEE,
  TOTAL,
  REFUND,
  DASH,
  DIVIDER,
  TITLE_CONTAINER,
  TITLE,
} from './payment-refund-details.presets';

import {PaymentRefundDetailsProps} from './payment-refund-details.props';
export default function PaymentRefundDetails(props: PaymentRefundDetailsProps) {
  const charge: number = props.bookingFee - props.Breakfast - props.cleaningFee;
  const refund = charge - props.cancellationFee;
  return (
    <>
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE}>Payment Details</Text>
      </View>
      <View style={OUTER_CONTAINER}>
        <View style={CONTAINER}>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Booking Charges</Text>
            <Text style={FEE}>£ {props.bookingFee}</Text>
          </View>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Cleaning</Text>
            <Text style={FEE}>£ {props.cleaningFee}</Text>
          </View>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Breakfast</Text>
            <Text style={FEE}>£ {props.Breakfast}</Text>
          </View>

          <Text ellipsizeMode="clip" numberOfLines={1} style={DASH}>
            ........................................................................................................................................................................................................
            .........................................................................................
          </Text>
          <View style={CHARGE_CONTAINER}>
            <Text style={TOTAL}>Charge</Text>
            <Text style={TOTAL}> £ {charge}</Text>
          </View>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Cancellation Charges</Text>
            <Text style={FEE}>£ {props.cancellationFee}</Text>
          </View>
          <Divider color="#121212" width={0.6} style={DIVIDER} />
          <View style={INNER_CONTAINER}>
            <Text style={TOTAL}>Refund Amount</Text>
            <Text style={REFUND}>£ {refund}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
