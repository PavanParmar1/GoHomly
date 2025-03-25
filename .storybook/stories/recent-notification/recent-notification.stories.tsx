import * as React from 'react';
import {View} from 'react-native';
import RecentNotification from './recent-notification';

const img = require('../../../assets/images/notification.png');
const title = 'There are good deals';
const desc = 'Lots of great deals around new york that you should check out';
const notification = true;

const RecentNotificationMeta = {
  title: 'RecentNotification',
  component: RecentNotification,

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

export default RecentNotificationMeta;

export const Plain = {
  args: {
    icon: img,
    title: title,
    Description: desc,
    notification: notification,
  },
};

export const Default = {
  args: {},
};
