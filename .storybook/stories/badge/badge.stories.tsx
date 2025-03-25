import React from 'react';
import {View, Text, Alert} from 'react-native';
import BadgeComponent from './badge';

export const defaultProps = {
  status: 'error',
  value: '',
};

const BadgeComponentMeta = {
  title: 'BadgeComponent',
  component: BadgeComponent,
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

export default BadgeComponentMeta;

export const DefaultBadge = {
  args: {
    status: 'primary',
    containerStyle: {
      backgroundColor: '#d1111130',
      width: 15,
      height: 15,
      justifyContent: 'center',
    },
  },
};

export const WithText = {
  args: {
    value: '12',
    status: 'primary',
    containerStyle: {
      backgroundColor: '#d1ee1180',
      width: 30,
      height: 30,
      justifyContent: 'center',
    },
  },
};
