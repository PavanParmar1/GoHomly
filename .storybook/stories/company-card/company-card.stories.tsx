import React from 'react';
import {View} from 'react-native';
import CompanyCard from './company-card';

const cardHolder = 'Jacob Jones';
const cardNumber = '****7001';

const CompanyCardMeta = {
  title: 'AddNewCard Component',
  component: CompanyCard,
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

export default CompanyCardMeta;
export const plain = {
  args: {
    cardHolder: cardHolder,
    cardNumber: cardNumber,
  },
};
