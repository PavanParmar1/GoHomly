import React from 'react';
import {View} from 'react-native';
import AddNewCard from './add-new-card';


const AddNewCardMeta = {
  title: 'AddNewCard Component',
  component: AddNewCard,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default AddNewCardMeta;

export const plain = {
  args: {
  },
};

