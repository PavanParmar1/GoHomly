import React from 'react';
import {View} from 'react-native';
import MyBooking from './my-booking';
import {MyBookingItemImages} from './MyBookingItem';

let subItem1: MyBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
};
let subItem2: MyBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_2.png'),
};

let subItem3: MyBookingItemImages = {
  image: require('../../../assets/images/home/ongoing-booking/ic_booking_3.png'),
};

const MyBookingItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
    address: 'Guest House, London',
    description: 'Greater London, United Kingdom',
    images: [subItem1, subItem2, subItem3],
    guestDetail: '2 Adults, 2 Childern, 1 Infants, 1 Pet',
    travelDate: '22 Dec - 24 Dec',
    bookingId: '125436',
  },
];

const MyBookingMeta = {
  title: 'MyBooking',
  component: MyBooking,
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

export default MyBookingMeta;

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
    titleLabel: 'My Booking',
    subTitleLabel: '4 Bookings',
    data: MyBookingItem,
    isLoading: false,
    guestDetail: '2 Adults, 2 Childern, 1 Infants, 1 Pet',
    travelDate: '22 Dec - 24 Dec',
    bookingId: '125436',
  },
};
