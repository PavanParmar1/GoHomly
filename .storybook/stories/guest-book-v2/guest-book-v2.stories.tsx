import React from 'react';
import GuestBook2 from './guest-book-v2';

const onPress = ()=>{
  console.log('clicked, open guest book')
}

const GuestBookV2Meta = {
  title: 'GuestBookV2',
  component: GuestBook2,
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
          <Story />
      </>
    ),
  ],
};

export default GuestBookV2Meta;

export const Plain = {
  args: {
    title: 'Guest Book',
    subTitle: 'Find all your answers related to this property.',
    onPress: onPress,
  },
};
