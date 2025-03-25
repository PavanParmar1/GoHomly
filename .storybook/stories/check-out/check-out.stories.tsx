import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { View } from 'react-native';
import PropertyDialog from './property-dialog';
import UserComments from './user-comment';
import UsersReview from './user-review';
import EmojiList from './emoji-qa-list';

const CheckOutMeta = {
  title: 'CheckOut Components',
  component: PropertyDialog, // This might need to be adjusted based on your actual usage
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </View>
      </>
    ),
  ],
};

const UserCommentsMeta = {
  title: 'CheckOut Components',
  component: UserComments, 
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </View>
      </>
    ),
  ],
};

const UsersReviewMeta = {
  title: 'CheckOut Components',
  component: UsersReview, 
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </View>
      </>
    ),
  ],
};

const EmojiListMeta = {
  title: 'CheckOut Components',
  component: EmojiList, 
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </View>
      </>
    ),
  ],
};


storiesOf('CheckOut Components', module)
  .addDecorator(withKnobs)
  .add('PropertyDialog', () => (
    <CheckOutMeta.component {...CheckOutMeta.args} onPress={CheckOutMeta.argTypes.onPress.action} />
  ))
  .add('UserComments', () => (
    <UserCommentsMeta.component {...CheckOutMeta.args} />
  ))
  .add('EmojiList', () => (
    <EmojiListMeta.component {...CheckOutMeta.args} />
  ))
  .add('UsersReview', () => (
    <UsersReviewMeta.component {...CheckOutMeta.args}  />
  ));
