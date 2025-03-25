import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from './button';
import {windowWidth} from '../../../app/utils/common';

const MyButtonMeta = {
  title: 'Button',
  component: Button,
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

export default MyButtonMeta;

export const SolidEnable = {
  args: {
    title: 'Solid Enable',
    text: 'Solid Enable',
  },
};

export const SolidEnableLoading = {
  args: {
    title: 'Solid Enable',
    text: 'Solid Enable',
    loading: true,
  },
};

export const SolidRoundedCaps = {
  args: {
    title: 'Solid Rounded Caps',
    text: 'Solid Rounded Caps',
    buttonStyle: {
      borderRadius: 32,
      height: 56,
    },
    titleStyle: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
  },
};

export const SolidDisable = {
  args: {
    title: 'Solid Disable',
    text: 'Solid Disable',
    disabled: true,
  },
};

export const Login = {
  args: {
    title: 'Login',
    text: 'Login',
    onPress: () => Alert.alert('pressed'),
    buttonStyle: {width: windowWidth / 2.659},
  },
};

export const Save = {
  args: {
    title: 'Save',
    text: 'Save',
    onPress: () => Alert.alert('pressed'),
    buttonStyle: {
      height: 45,
      width: 150,
      borderRadius: 26,
    },
  },
};
