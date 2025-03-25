import React from 'react';
import {View} from 'react-native';
import ExtraServicesViewMode from './extra-services-view-mode';

const ExtraServicesViewModeMeta = {
  title: 'ExtraServicesViewMode',
  component: ExtraServicesViewMode,
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

export default ExtraServicesViewModeMeta;

export const plain = {
  args: {
    title: `Booking Detail (£${10})`,
  },
};
