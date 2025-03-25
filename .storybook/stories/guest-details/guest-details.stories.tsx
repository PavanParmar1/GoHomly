import React from 'react';
import {View} from 'react-native';
import GuestDetails from './guest-details';

const name = 'John Williamson';
const email = 'kenzi.lawson@example.com';
const phone = '4852 7852 85';

const GuestDetailsMeta = {
  title: 'GuestDetails Component',
  component: GuestDetails,
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

export default GuestDetailsMeta;

export const DefaultContactUs = {
  args: {
    name: name,
    email: email,
    phoneNumber: phone,
  },
};
