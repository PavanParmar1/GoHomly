import React from 'react';
import {View} from 'react-native';
import PropertyDetails from './property-details';

const PropertyDetailMeta = {
  title: 'Property Details',
  component: PropertyDetails,
  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PropertyDetailMeta;

export const plain = {
  args: {},
};
