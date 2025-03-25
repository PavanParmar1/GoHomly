import * as React from 'react';
import {View} from 'react-native';
import PropertyFacilities from './property-facilities';

const facilities = [
  {
    id: 1,
    label: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    label: 'Wifi',
    isSelected: false,
  },
  {
    id: 3,
    label: 'Self Check-in',
    isSelected: false,
  },
  {
    id: 4,
    label: 'Kitchen',
    isSelected: false,
  },
  {
    id: 5,
    label: 'Security',
    isSelected: false,
  },
  {
    id: 6,
    label: 'Free Parking',
    isSelected: false,
  },
  {
    id: 7,
    label: 'Camera',
    isSelected: false,
  },
];
const PropertyFacilitiesMeta = {
  title: 'PropertyFacilities',
  component: PropertyFacilities,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PropertyFacilitiesMeta;

export const Plain = {
  args: {
    options: facilities,
  },
};
