import * as React from 'react';
import {View} from 'react-native';
import RecentSearches from './recent-searches';

const defaultProps = [
  {
    id: 1,
    location: '23street',
    city: 'london',
  },
];
export const defaultProps2 = [
  {
    id: 1,
    location: '23street',
    city: 'london',
  },
  {
    id: 2,
    location: 'Gladstone Street',
    city: 'Liverpool',
  },
];
export const defaultProps3 = [
  {
    id: 1,
    location: '23street',
    city: 'london',
  },
  {
    id: 2,
    location: 'Gladstone Street',
    city: 'Liverpool',
  },
  {
    id: 3,
    location: 'Gladstone Street',
    city: 'Brussel',
  },
];

const defaultProps4 = [
  // {
  //   id: 1,
  //   location: '23street',
  //   city: 'London',
  // },
  // {
  //   id: 2,
  //   location: 'Gladstone Street',
  //   city: 'Liverpool',
  // },
  // {
  //   id: 3,
  //   location: 'Gladstone Street',
  //   city: 'Brussel',
  // },
  // {
  //   id: 4,
  //   location: 'Gladstone Street',
  //   city: 'Wells',
  // },
];

const RecentSearchesMeta = {
  title: 'RecentSearches',
  component: RecentSearches,

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

export default RecentSearchesMeta;

export const Default = {
  arg: {
    Data: defaultProps,
  },
};

export const Default2 = {
  args: {
    Data: defaultProps2,
  },
};

export const Default3 = {
  args: {
    Data: defaultProps3,
  },
};

export const Default4 = {
  args: {
    Data: defaultProps4,
  },
};

export const NoData = {
  args: {},
};
