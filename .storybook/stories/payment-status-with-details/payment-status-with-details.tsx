import React from 'react';
import {Text, View} from 'react-native';
import {
  CONTAINER,
  INNER_CONTAINER,
  INFO,
  TITLE,
  SUBTITLE,
} from './payment-status-with-details.presets';
import {PaymentStatusWithDetailsProps} from './payment-status-with-details.props';
export default function PaymentStatusWithDetails(
  props: PaymentStatusWithDetailsProps,
) {
  return (
    <View style={CONTAINER}>
      <View>
        <Text style={TITLE}>Your Booking Details</Text>
      </View>
      <View style={INNER_CONTAINER}>
        <Text style={SUBTITLE}>Reservation Number</Text>
        <Text style={INFO}>{props.reservationNumber}</Text>
      </View>
      <View style={INNER_CONTAINER}>
        <Text style={SUBTITLE}>Transaction Number</Text>
        <Text style={INFO}>{props.transactionNumber}</Text>
      </View>
    </View>
  );
}
