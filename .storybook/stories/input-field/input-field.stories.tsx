import React from 'react';
import {View, Text} from 'react-native';
import inputField from './input-field';

const MyButtonMeta = {
  title: 'InputField',
  component: inputField,

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

export default MyButtonMeta;

export const LargeInputFieldIcon = {
  args: {
    type: 'border',
    viewMode: 'large',
    label: 'Type SomeThing',
    leftIcon: {},
    placeholder: 'enter something',
    rightIcon: {
      type: 'antdesign',
      name: 'user',
    },
  },
};

export const LargeInputField = {
  args: {
    type: 'border',
    viewMode: 'large',
    label: 'Type SomeThing',
    leftIcon: {},
    placeholder: 'enter something',
  },
};

export const PlainInputFieldIcon = {
  args: {
    type: 'plain',
    viewMode: 'large',
    label: 'Type SomeThing',
    placeholder: 'enter something',
    leftIcon: {},
    rightIcon: {
      type: 'antdesign',
      name: 'eye',
    },
  },
};

export const PlainInputField = {
  args: {
    type: 'plain',
    viewMode: 'large',
    label: 'Type SomeThing',
    placeholder: 'enter something',
    leftIcon: {},
  },
};
