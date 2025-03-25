import React from 'react';
import {View} from 'react-native';
import RecentlyAdded from './recently-added';

const RecentlyAddedItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
    address: '29 Main street, London',
    description: 'Joe +2 person',
    city: 'London',
  },
];

const RecentlyAddedMeta = {
  title: 'RecentlyAdded',
  component: RecentlyAdded,
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

export default RecentlyAddedMeta;

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
    titleLabel: 'Recently Added',
    subTitleLabel: '10 Properties',
    data: RecentlyAddedItem,
    isLoading: false,
  },
};
