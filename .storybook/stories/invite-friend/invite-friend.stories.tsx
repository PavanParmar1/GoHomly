import * as React from 'react';
import InviteFriend from './invite-friend';
import {View} from 'react-native';

const name = 'Devi Jones';
const email = 'devijones@heart.com';
const image = require('../../../assets/images/invite_friend.png');

const InviteFriendMeta = {
  title: 'InviteFriend',
  component: InviteFriend,

  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};

export default InviteFriendMeta;

export const defaultInviteFriend = {
  args: {
    name:name,
    emailId: email,
    profileImage: image,
  },
};

