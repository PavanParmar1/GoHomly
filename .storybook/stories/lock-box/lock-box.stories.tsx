import React, { useState } from 'react';
import LockBox from './lock-box';


const onPress = () => {
  console.log('clicked, open full screen img');
};

const LockBoxMeta = {
  title: 'LockBox',
  component: LockBox,
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

export default LockBoxMeta;

export const Plain = {
  args: {
    title: 'Lock Box',
    subTitle:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    onPress: onPress,
  },
};
