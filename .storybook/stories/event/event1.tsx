import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {EventProps} from './event.props';
import {
  CONTAINER1,
  INNER_CONTAINER,
  DATA_CONTAINER,
  EVENT_IMAGE,
  DATE,
  DESCRIPTION,
  HEART_IMAGE,
} from './event.presets';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const event = {
  uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/event.png',
};
export default function Event1(props: EventProps) {
  const placeAddress = props.placeAddress || 'A virtual evening of smooth jazz';
  const placeName = props.placeName || '20th May- Sat -2:00 PM';
  const placeImage =
    {uri: props.placeImage} ||
    require('../../../assets/images/search/nearby/place_empty.png');
  return (
    <TouchableOpacity
      onPress={props.favOnPress}
      activeOpacity={1}
      accessible={true}
      accessibilityLabel={`${placeName}`}>
      <View style={CONTAINER1}>
        <View style={INNER_CONTAINER}>
          <FastImage
            resizeMode="cover"
            source={placeImage}
            style={EVENT_IMAGE}
            defaultSource={require('../../../assets/images/search/nearby/place_empty.png')}
          />
          <View style={DATA_CONTAINER}>
            <Text style={DATE} numberOfLines={2}>
              {placeName}
            </Text>
            <Text style={DESCRIPTION} numberOfLines={2}>
              {placeAddress}
            </Text>
          </View>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={placeAddress}
            onPress={props.onPressItem}>
            <Icon
              name={'arrow-forward-outline'}
              size={isTablet() ? 30 : 20}
              style={{marginStart: '2%'}}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
