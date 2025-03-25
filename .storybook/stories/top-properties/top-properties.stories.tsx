import React from 'react';
import {View} from 'react-native';
import TopProperties from './top-properties';

const TopPropertyItem = [
  {
    id: 1,
    apartmentType: 'Guest house',
    address: 'Greater London, United Kingdom',
    images: require('../../../assets/images/property1.png'),
    rate: '5.0',
    liked: false,
  },
];

const TopPropertiesMeta = {
  title: 'TopProperties',
  component: TopProperties,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  decorators: [
    Story => (
      <>
        <Story />
      </>
    ),
  ],
};

export default TopPropertiesMeta;

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
    titleLabel: 'Top Properties',
    // subTitleLabel:'4 Bookings Completed',
    data: TopPropertyItem,
    isLoading: true,

    onPressItem: () => {
      console.log('item click');
    },
    rate: '5.0',
  },
};

export const Default = {
  args: {
    titleLabel: 'Top Properties',
    // subTitleLabel:'4 Bookings Completed',
    data: TopPropertyItem,
    isLoading: false,

    onPressItem: () => {
      console.log('item click');
    },
    rate: '5.0',
  },
};
