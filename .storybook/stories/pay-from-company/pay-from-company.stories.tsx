import * as React from 'react';
import {Alert, ImageStyle, View} from 'react-native';
import PayFromCompany from './pay-from-company';

const cardHolders = [
  {cardHolder: 'Jacob Jones', cardNumber: '****7001'},
  {cardHolder: 'Jacob Jones', cardNumber: '****7001'},
  {cardHolder: 'Albert Flores', cardNumber: '****8934'},
  {cardHolder: 'Dianne Russell', cardNumber: '****7584'},
];

const PayFromCompanyMeta = {
  title: 'PayFromCompany',
  component: PayFromCompany,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PayFromCompanyMeta;

export const Plain = {
  args: {
    cardHolders: cardHolders,
  },
};
