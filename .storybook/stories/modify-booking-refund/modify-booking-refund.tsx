import React from 'react';
import {Divider} from '@rneui/themed-edge';
import {Text, View} from 'react-native';
import {ModifyBookingRefundProps} from './modify-booking-refund.props';
import {
  OUTER_CONTAINER,
  TITLE_CONTAINER,
  TITLE,
  CONTAINER,
  INNER_CONTAINER,
  FEE,
  TOTAL,
  REFUND,
  DIVIDER,
} from './modify-booking-refund.presets';
export default function ModifyBookingRefund(props: ModifyBookingRefundProps) {
  const refund: number =
    props.previousBookingAmount - props.updatedBookingAmount;
  return (
    <>
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE}>Payment Details</Text>
      </View>
      <View style={OUTER_CONTAINER}>
        <View style={CONTAINER}>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Previous Booking Amount</Text>
            <Text style={FEE}>£ {props.previousBookingAmount}</Text>
          </View>
          <View style={INNER_CONTAINER}>
            <Text style={FEE}>Current Booking Amount</Text>
            <Text style={FEE}>£ {props.updatedBookingAmount}</Text>
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
