import * as React from 'react';
import {View} from 'react-native';
import RangeSlider from './range-slider';

const RangeSliderMeta = {
  title: 'RangeSlider',
  component: RangeSlider,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default RangeSliderMeta;

export const Plain = {
  args: {},
};
