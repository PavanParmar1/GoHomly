import React from 'react';
import {View, Text, Alert} from 'react-native';
import GuestBook from './guest-book';

const questionAnswers = [
  {
    id: 1,
    question: 'How to use machine?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
    isExpanded: false,
  },
  {
    id: 2,
    question: 'What is the Wi-Fi password?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
    isExpanded: false,
  },
  {
    id: 3,
    question: 'How to change A/C temperature?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
    isExpanded: false,
  },
  {
    id: 4,
    question: 'How to operate dishwasher?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
    isExpanded: false,
  },
];

const GuestBookMeta = {
  title: 'GuestBook',
  component: GuestBook,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    // text: 'Default Title',
    // type: 'outline',
  },
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

export default GuestBookMeta;

export const Plain = {
  args: {
    title: 'Guest Book',
    subTitle: 'Find all your answers related to this property.',
    query: questionAnswers,
  },
};
