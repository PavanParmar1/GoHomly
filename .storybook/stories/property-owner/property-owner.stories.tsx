import React from 'react';
import {View, Text, Alert} from 'react-native';
import PropertyOwner from './property-owner';

const PropertyMeta = {
  title: 'PropertyOwner',
  component: PropertyOwner,
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

export default PropertyMeta;

export const Default = {
  args: {},
};
