import React from 'react';
import {View} from 'react-native';
// import {Button} from '@rn-community/button';
import {
  CONTAINER,
  INNER_CONTAINER1,
  BUTTON_CONTAINER1,
  BUTTON_STYLE1,
  BUTTON_STYLE,
  BUTTON_TITLE_STYLE,
} from './booking-footer.presets';
import {BookingFooterProps} from './booking-footer.props';
import {Button} from '../button/button';

export default function BookingFooter1(props: BookingFooterProps) {
  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER1}>
        {/* <View style={TEXT_CONTAINER}>
          <Text style={TEXT}>
            <Text style={PRICE_TEXT}>{props.rate} / </Text>
            {props.numberOfDays}
          </Text>
          <Text style={TEXT}>
            {props.checkIn} - {props.checkOut}
          </Text>
        </View> */}
        <View style={BUTTON_CONTAINER1}>
          <Button
            title={'Cancel Booking'}
            onPress={() => props.onPress1()}
            buttonStyle={BUTTON_STYLE1}
            titleStyle={BUTTON_TITLE_STYLE}
            containerStyle={[BUTTON_STYLE1, {alignItems: 'center'}]}
          />
        </View>
        <View style={BUTTON_CONTAINER1}>
          <Button
            title={'Modify Booking'}
            onPress={() => props.onPress()}
            buttonStyle={BUTTON_STYLE}
            titleStyle={BUTTON_TITLE_STYLE}
            containerStyle={[BUTTON_STYLE1, {alignItems: 'center'}]}
          />
        </View>
      </View>
    </View>
  );
}
