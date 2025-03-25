import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from '@rn-community/button';
import {
  CONTAINER,
  INNER_CONTAINER,
  TEXT,
  PRICE_TEXT,
  TEXT_CONTAINER,
  BUTTON_CONTAINER,
  BUTTON_STYLE,
  BUTTON_TITLE_STYLE,
} from './booking-footer.presets';
import {BookingFooterProps} from './booking-footer.props';
import {changeSuccessFlag} from '../../../app/utils/common';
import {Button} from '../button/button';

export default function BookingFooter(props: BookingFooterProps) {
  const {isCheckout = false} = props;
  const pressHandler = () => {
    props.onPress();
    changeSuccessFlag();
  };
  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <View style={TEXT_CONTAINER}>
          <Text style={TEXT}>
            <Text style={PRICE_TEXT}>{props.rate} / </Text>
            {props.numberOfDays}
          </Text>
          <Text style={TEXT}>
            {props.checkIn} - {props.checkOut}
          </Text>
        </View>
        <View style={BUTTON_CONTAINER}>
          <Button
            title={isCheckout ? 'Checkout' : 'Check Availability'}
            onPress={pressHandler}
            buttonStyle={BUTTON_STYLE}
            titleStyle={BUTTON_TITLE_STYLE}
            containerStyle={[BUTTON_STYLE, {alignItems: 'center'}]}
          />
        </View>
      </View>
    </View>
  );
}
