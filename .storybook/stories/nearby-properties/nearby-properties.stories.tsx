import NearbyProperties from './nearby-properties';
import * as React from 'react';
import {View} from 'react-native';

const defaultProps = [
  {
    id: 1,
    imagePath: require('../../../assets/images/property.png'),
    address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
    apartmentType: 'Entire Studio Apartment',
    owner: 'Mercedes Vito',
    description: '1 bedroom | 2 bathroom',
  },
  {
    id: 2,
    imagePath: require('../../../assets/images/property.png'),
    address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
    apartmentType: 'Flat Apartment',
    owner: 'Mercedes c200',
    description: '2 bedroom | 2 bathroom',
  },
  {
    id: 3,
    imagePath: require('../../../assets/images/property.png'),
    address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
    apartmentType: 'Bunglow Apartment',
    owner: 'Mercedes benze',
    description: '3 bedroom | 2 bathroom',
  },
];

const NearbyPropertiesMeta = {
  title: 'NearbyProperties',
  component: NearbyProperties,

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

export default NearbyPropertiesMeta;

export const Default = {
  args: {
    Data:defaultProps,
  },
};

export const No_Data = {
  args: {
  },
};

export const Loading = {
  args: {
  },
};

