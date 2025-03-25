import * as React from 'react';
import {View} from 'react-native';
import { PersonSelector } from './person-selector';

const PersonSelectorMeta = {
  title: 'PersonSelector',
  component: PersonSelector,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PersonSelectorMeta;

export const Plain = {
  args: {},
};
