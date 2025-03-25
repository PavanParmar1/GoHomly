import * as React from 'react';
import {View} from 'react-native';
import PersonalInfo from './personal-info';

const PersonalInfoMeta = {
  title: 'PersonalInfo',
  component: PersonalInfo,

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

export default PersonalInfoMeta;

export const Default = {
  args: {},
};
