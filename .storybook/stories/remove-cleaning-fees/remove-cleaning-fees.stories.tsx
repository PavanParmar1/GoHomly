import React from 'react';
import {View} from 'react-native';
import RemoveCleaningFees from './remove-cleaning-fees';

const RemoveCleaningFeesMeta = {
  title: 'RemoveCleaningFees',
  component: RemoveCleaningFees,
  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default RemoveCleaningFeesMeta;

export const plain = {
  args: {},
};
