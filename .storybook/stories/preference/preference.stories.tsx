import * as React from 'react';
import {View} from 'react-native';
import Preference from './preference';

const prefernce = 'Distance';
const measurementFirst = 'Miles';
const measurementSecond = 'Sq.Mt';

const PreferenceMeta = {
  title: 'Preference',
  component: Preference,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PreferenceMeta;

export const Plain = {
  args: {
    preferedOption: prefernce,
    unitFirst: measurementFirst,
    unitSecond: measurementSecond,
  },
};

export const Default = {
  args: {},
};
