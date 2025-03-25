import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  CONTAINER,
  INNER_CONTAINER,
  DATA_CONTAINER,
  IMAGE,
  NAME,
  EMAIL,
} from './invite-friend.persets';
import {InviteFriendProps} from './invite-friend.props';
import {App as AppImage} from '../../../assets/images/map';

const avatar = {
  uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/avatar1.png',
};
export default function InviteFriend(props: InviteFriendProps) {
  const name = props.name || 'Robert Downy Junior';
  const emailId = props.emailId || 'imironman@marvels.com';
  const profilePic = props.profileImage || avatar;
  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <View style={DATA_CONTAINER}>
          {/* <FastImage
            source={avatar}
            style={IMAGE}
            defaultSource={AppImage.LoadingImageWithBGPlaceholder}
          /> */}
          <View style={{flex: 1}}>
            <Text style={NAME} numberOfLines={1}>
              {name}
            </Text>
            <Text style={EMAIL} numberOfLines={1}>
              {emailId}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
