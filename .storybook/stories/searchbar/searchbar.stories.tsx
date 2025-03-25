import * as React from 'react';
import {View} from 'react-native';

import SearchBarEnabled from './searchbar-enabled';
import SearchBarDisabled from './searchbar-disabled';
import SearchBarBorder from './searchbar-border';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

const SearchBarEnabledMeta = {
  title: 'SearchBarEnabled',
  component: SearchBarEnabled,
  argTypes: {
    onChangesText: (text: string) => {
      console.log('Storybook component text : ', text);
    },
  },
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

const SearchBarDisabledMeta = {
  title: 'SearchBarDisabled',
  component: SearchBarDisabled,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
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

const SearchBarBorderMeta = {
  title: 'SearchBarBorder',
  component: SearchBarBorder,
  argTypes: {
    onPress: () => console.log('hello'),
  },
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

storiesOf('SearchBar Components', module)
  .addDecorator(withKnobs)
  .add('SearchBarEnabled', () => <SearchBarEnabledMeta.component />)
  .add('SearchBarDisabled', () => (
    <SearchBarDisabledMeta.component
      onPress={SearchBarDisabledMeta.argTypes.onPress.action}
    />
  ))
  .add('SearchBarBorder', () => <SearchBarBorderMeta.component />);
