import React from 'react';
import {View, Text, Alert} from 'react-native';
import NearBy from './near-by';

const NearByItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/near-by/ic_entertainment.png'),
  },
  {
    title: 'Event',
    image: require('../../../assets/images/home/near-by/ic_event.png'),
  },
  {
    title: 'Shopping',
    image: require('../../../assets/images/home/near-by/ic_shopping.png'),
  },
  {
    title: 'Food',
    image: require('../../../assets/images/home/near-by/ic_food.png'),
  },
  {
    title: 'Attraction',
    image: require('../../../assets/images/home/near-by/ic_attraction.png'),
  },
  {
    title: 'Spa',
    image: require('../../../assets/images/home/near-by/ic_spa.png'),
  },
];

const SingleNearByItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/near-by/ic_entertainment.png'),
  },
];

const TwoNearByItem = [
  {
    title: 'Entertainment',
    image: require('../../../assets/images/home/near-by/ic_entertainment.png'),
  },
  {
    title: 'Event',
    image: require('../../../assets/images/home/near-by/ic_event.png'),
  },
];

const NearByMeta = {
  title: 'NearBy',
  component: NearBy,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    // text: 'Default Title',
    // type: 'outline',
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

export default NearByMeta;

export const NoItem = {
  args: {
    titleLabel: 'NoItem',
    // isLoadingData={NearByItem}
    isLoading: false,
  },
};

export const Loading = {
  args: {
    titleLabel: 'Loading',
    isLoading: true,
  },
};

export const Default = {
  args: {
    titleLabel: 'Default',
    data: NearByItem,
    isLoading: false,
  },
};

export const SingleItem = {
  args: {
    titleLabel: 'Single Item',
    data: SingleNearByItem,
    isLoading: false,
  },
};

export const TwoItem = {
  args: {
    titleLabel: 'Two Item',
    data: TwoNearByItem,
    isLoading: false,
  },
};
