import React from 'react';
import {View} from 'react-native';
import Sos from './sos';

const SosMeta = {
  title: 'Sos',
  component: Sos,
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

export default SosMeta;

export const plain = {
  args: {
    title: '999 (Police)',
    onPress: () => {
      console.log('Emergency');
    },
  },
};
