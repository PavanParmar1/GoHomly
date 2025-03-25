import React from 'react';
import {View} from 'react-native';
import PropertyFeatures from './property-feature';

const PropertyFeaturesMeta = {
  title: 'Property Features',
  component: PropertyFeatures,
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

export default PropertyFeaturesMeta;

export const plain = {
  args: {},
};
