import React from 'react';
import {View} from 'react-native';
import PricingDetails from './pricing';

const pricingDetails = {
  general: '3 Days,1 Room,3 Guest',
  total: '165,56',
  tax: '20',
  extraServices: '50',
  totalPrice: '235,56',
};

const PricingDetailsMeta = {
  title: 'PricingDetails',
  component: PricingDetails,
  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default PricingDetailsMeta;

export const plain = {
  args: {
    general: pricingDetails.general,
    total: pricingDetails.total,
    tax: pricingDetails.tax,
    extraServices: pricingDetails.extraServices,
    totalPrice: pricingDetails.totalPrice,
  },
};
