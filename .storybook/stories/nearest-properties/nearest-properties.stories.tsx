import React from 'react';
import {View} from 'react-native';
import NearestProperties from './nearest-properties';

const NearestPropetyItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
    address: '29 Main street, London',
    description: 'Joe +2 person',
    city: 'London',
  },
];

const NearestPropertiesMeta = {
  title: 'NearestProperties',
  component: NearestProperties,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
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

export default NearestPropertiesMeta;

export const NoItem = {
  args: {
    // titleLabel: 'Ongoing Booking',
    // subTitleLabel:'4 Bookings Completed',
    // data: OnGoingBookingItem,
    isLoading: false,
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};

export const Default = {
  args: {
    titleLabel: 'Owners Properties',
    subTitleLabel: '10 Properties',
    data: NearestPropetyItem,
    isLoading: false,
  },
};
