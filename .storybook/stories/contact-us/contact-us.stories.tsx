import React from 'react';
import {View} from 'react-native';
import ContactUs from './contact-us';

const ContactUsMeta = {
  title: 'ContactUs Component',
  component: ContactUs,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
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

export default ContactUsMeta;

export const DefaultContactUs = {
  args: {},
};
