import MultipleSelection from './multiple-selection';
import * as React from 'react';
import {View} from 'react-native';

const propertyType = [
  {
    id: 1,
    option: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    option: 'Studio',
    isSelected: false,
  },
  {
    id: 3,
    option: 'House',
    isSelected: false,
  },
  {
    id: 4,
    option: 'Motel',
    isSelected: false,
  },
  {
    id: 5,
    option: 'Apartment',
    isSelected: false,
  },
];

const MultipleSelectionMeta = {
  title: 'MultipleSelection',
  component: MultipleSelection,

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

export default MultipleSelectionMeta;

export const plain = {
  args: {
    options:propertyType,
  },
};
