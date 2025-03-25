import React from 'react';
import {View} from 'react-native';
import bookProperty from './book-property';


const priceList = [
  {charge: 'Base Price', amount: ' £ 15'},
  {charge: 'Cleaning Fees', amount: ' £ 15'},
  {charge: 'Breakfast', amount: ' £ 25'},
  {charge: 'Add On Facilities Charges', amount: ' £ 20'},
  {charge: 'Online food Charges', amount: ' £ 50'},
  {charge: 'Tax', amount: ' £ 50'},
];

const bookPropertyMeta = {
  title: 'bookProperty Component',
  component: bookProperty,
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

export default bookPropertyMeta;

export const plain = {
  args: {
    priceList:priceList
  },
};

