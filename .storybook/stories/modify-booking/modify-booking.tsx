import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from '@rn-community/button';
import {Button} from '../button/button';

import {
  CONTAINER,
  TITLE_CONTAINER,
  TITLE,
  TEXT,
  TEXT_CONTAINER,
  BUTTON,
  BUTTON_CONTAINER,
  YES_TITLE,
  NO_TITLE,
} from './modify-booking.presets';
import {ModifyBookingProps} from './modify-booking.props';

export default function ModifyBooking(props: ModifyBookingProps) {
  return (
    <View style={CONTAINER}>
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE}>Modify Booking?</Text>
      </View>
      <View style={TEXT_CONTAINER}>
        <Text style={TEXT}>
          Are you sure you want to modify your booking details ? Velit officia
          consequat duis enim velit mollit.
        </Text>
      </View>
      <View style={BUTTON_CONTAINER}>
        <Button title="Yes" titleStyle={YES_TITLE} onPress={props.onPress} />
        <Button
          title={'No'}
          titleStyle={NO_TITLE}
          type={'outline'}
          onPress={props.onPress}
          containerStyle={BUTTON}
        />
      </View>
    </View>
  );
}
