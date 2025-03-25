import React, {useState} from 'react';
import {Text, View} from 'react-native';
// import {
//   CONTAINER,
//   INNER_CONTAINER,
//   SUBTITLE,
//   HEADER,
// } from './guest-booking.presets';
import {GuestBookingProps} from './guest-booking.props';
import guestBookingStyle from './guest-booking.presets2';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export default function GuestBooking(props: GuestBookingProps) {
  const {dimensions, orientation} = useOrientation();
  const {
    Font12,
    Font16,
    Font8,
    Font14,
    Font9,
    Font7,
    getWidthTab,
    getWidth,
    Font18,
    Font11,
    Font6,
  } = useSize();

  const styles = guestBookingStyle(
    Font11,
    Font12,
    Font14,
    Font16,
    Font18,
    Font8,
    Font9,
    Font7,
    getWidth,
    getWidthTab,
    orientation,
    dimensions.screen.width,
    dimensions.window.width,
    Font6,
  );

  return (
    <>
      <View style={styles.CONTAINER}>
        {/* <Text style={TITLE}>{props.title}</Text> */}
        <View style={styles.INNER_CONTAINER}>
          <Text style={styles.HEADER}>No Properties Booked Yet!</Text>
          <Text style={styles.SUBTITLE}>{props.subTitle}</Text>
        </View>
      </View>
    </>
  );
}
