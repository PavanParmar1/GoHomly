import {Divider} from '@rneui/base-edge';
import React from 'react';
import {Image, Text, View} from 'react-native';
// import {Button} from '@rn-community/button';
import {
  CONTAINER,
  INNER_CONTAINER,
  TITLE,
  BUTTON,
  SUBTITLE,
  DATEANDTIME,
  ICON,
} from './booking-details.presets';
import {BookingDetailsProps} from './booking-details.props';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';

export default function BookingDetails(props: BookingDetailsProps) {
  const {checkIn, checkOut} = props;
  // const checkIn = '15/06/2022 16:00';
  // const checkOut = '16/06/2022 16:00';
  return (
    <View style={[CONTAINER, props.containerStyle]}>
      <View style={INNER_CONTAINER}>
        <Text style={TITLE}>Booking Details</Text>
        <Button
          title="Edit"
          type={'clear'}
          titleStyle={BUTTON}
          onPress={() => props.onPress(props)}
        />
      </View>
      <View style={[INNER_CONTAINER]}>
        <View style={INNER_CONTAINER}>
          <Image
            source={require('../../../assets/images/CheckIn.png')}
            style={ICON}
          />
          <View>
            <Text style={SUBTITLE}>Check-In after</Text>
            <Text style={DATEANDTIME} numberOfLines={1}>
              {checkIn}
            </Text>
          </View>
        </View>
        <View style={INNER_CONTAINER}>
          <Image
            source={require('../../../assets/images/CheckOut.png')}
            style={ICON}
          />
          <View>
            <Text style={SUBTITLE}>Check-OUT before</Text>
            <Text style={DATEANDTIME} numberOfLines={1}>
              {checkOut}
            </Text>
          </View>
        </View>
      </View>
      <Divider
        style={{marginTop: isTablet() ? '7%' : '10%'}}
        color={'#777777'}
      />
    </View>
  );
}
