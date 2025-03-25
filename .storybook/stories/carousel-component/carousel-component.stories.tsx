import React from 'react';
import {View, Text, Alert} from 'react-native';
import CarouselComponent from './carousel-component';
import {CarouselItem} from './CarouselItem';

const data: [CarouselItem] = [
  {
    title: 'Entertainment',
    imgUrl: require('../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
  },
  {
    title: 'Entertainment',
    imgUrl: require('../../../assets/images/home/ongoing-booking/ic_booking_2.png'),
  },
  {
    title: 'Entertainment',
    imgUrl: require('../../../assets/images/home/ongoing-booking/ic_booking_3.png'),
  },
];

const CarouselComponentMeta = {
  title: 'Carousel Component',
  component: CarouselComponent,
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

export default CarouselComponentMeta;

export const NoItem = {
  args: {
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
    titleLabel: 'Default',
    data: data,
    isLoading: false,
    dotColor: 'black',
  },
};
