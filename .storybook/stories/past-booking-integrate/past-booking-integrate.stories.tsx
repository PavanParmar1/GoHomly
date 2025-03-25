import React from 'react';
import {Alert, ImageStyle, View} from 'react-native';
import PastBookingIntegrate from './past-booking-integrate';

const pastBookingImg = {
  uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/pastBooking.png',
};
const pastBooking = {
  id: 1,
  propertyImage: pastBookingImg,
  bedroomCount: 2,
  bathroomCount: 3,
  area: 1000,
  cost: '£1578',
  address: '2118 Thornridge Cir. Syracua, AB4 7LE',
};

const PastBookingIntegrateMeta = {
  title: 'PastBookingIntegrate',
  component: PastBookingIntegrate,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
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

export default PastBookingIntegrateMeta;

export const plain = {
  args: {
    image: pastBooking.propertyImage as ImageStyle,
    bedroomCount: pastBooking.bedroomCount,
    bathroomCount: pastBooking.bathroomCount,
    area: pastBooking.area,
    perNightCost: pastBooking.cost,
    address: pastBooking.address,
    onPress: () => {
      Alert.alert('pressed');
    },
  },
};
