import React from 'react';
import {View} from 'react-native';
import ExtraServices from './extra-services';

const ExtraServicesMeta = {
  title: 'ExtraServices',
  component: ExtraServices,
  decorators: [
    Story => (
      <>
        <View>
          <Story />
        </View>
      </>
    ),
  ],
};

export default ExtraServicesMeta;

export const plain = {
  args: {
    onPress: () => {
      console.log('Click');
    },
    title: `Booking Detail (£${10})`,
  },
};
