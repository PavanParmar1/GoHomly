import * as React from 'react';
import GuestDetailsForm from './guest-details-form';
import {ScrollView, View} from 'react-native';

const GuestDetailsFormMeta = {
  title: 'GuestDetailsForm Component',
  component: GuestDetailsForm,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ScrollView>
            <Story />
          </ScrollView>
        </View>
      </>
    ),
  ],
};

export default GuestDetailsFormMeta;

export const DefaultContactUs = {
  args: {},
};
