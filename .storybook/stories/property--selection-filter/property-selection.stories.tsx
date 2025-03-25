import * as React from 'react';
import {View} from 'react-native';
import { PropertySelection } from './property-selection';

const PropertySelectionMeta = {
  title: 'PropertySelection',
  component: PropertySelection,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PropertySelectionMeta;

export const Plain = {
  args: {},
};
