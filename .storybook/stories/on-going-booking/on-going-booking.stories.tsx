import React from 'react';
import {View} from 'react-native';
import OnGoingBooking from './on-going-booking';
import { OnGoingBookingItemImages } from './OnGoingBookingItem';

let subItem1: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
};
let subItem2: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_2.png'),
};

let subItem3: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_3.png'),
};

const OnGoingBookingItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
    address: '29 Main street, London',
    description: 'Joe +2 person',
    images: [subItem1, subItem2, subItem3],
  },
];

const ONGoingBookingMeta = {
  title: 'OnGoingBooking',
  component: OnGoingBooking,
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

export default ONGoingBookingMeta;

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
    titleLabel: 'Ongoing Booking',
    subTitleLabel:'4 Bookings Completed',
    data: OnGoingBookingItem,
    isLoading: false,
  },
};

