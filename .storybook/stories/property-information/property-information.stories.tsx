import React from 'react';
import {View} from 'react-native';
import PropertyInformation from './property-information';

const PropertyInformationItem = {
  title: '139 North West Street',
  subTitle: 'Machester Main Road',
  beds: '1',
  bath: '1',
  area: '1000',
  houseType: 'Appartment -',
  houseTypeDetail: 'Double Room (1)',
  hasRating: true,
};

const PropertyInformationItem2 = {
  title: '139 North West Street',
  subTitle: 'Machester Main Road',
  beds: '1',
  bath: '1',
  area: '1000',
  houseType: 'Appartment -',
  houseTypeDetail: 'Double Room (1)',
  hasRating: false,
};

const PropertyInformationMeta = {
  title: 'PropertyInformation',
  component: PropertyInformation,
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

export default PropertyInformationMeta;

export const Default = {
  args: {
    data: PropertyInformationItem,
    isLoading: false,
  },
};

export const NoRating = {
  args: {
    data: PropertyInformationItem2,
    isLoading: false,
  },
};

export const NoItem = {
  args: {
    isLoading: false,
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};
