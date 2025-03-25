import * as React from 'react';
import RangeSliderV2 from './range-slider-v2';

const RangeSliderMeta = {
  title: 'RangeSliderV2',
  component: RangeSliderV2,

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
