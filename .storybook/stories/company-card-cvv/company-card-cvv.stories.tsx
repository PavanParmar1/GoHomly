import React from 'react';
import {View} from 'react-native';
import CompanyCardCvv from './company-card-cvv';

const cardHolder = 'Savannah Nguyen';
const cardNumber = '**** **** **** 7548';

const CompanyCardCvvMeta = {
  title: 'CompanyCardCvv',
  component: CompanyCardCvv,

  decorators: [
    Story => (
      <>
        <Story />
      </>
    ),
  ],
};

export default CompanyCardCvvMeta;

export const plain = {
  args: {
    cardHolder: cardHolder,
    cardNumber: cardNumber,
  },
};
