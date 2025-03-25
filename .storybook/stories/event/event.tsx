import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EventProps} from './event.props';
import {
  CONTAINER,
  INNER_CONTAINER,
  DATA_CONTAINER,
  EVENT_IMAGE,
  DATE,
  DESCRIPTION,
} from './event.presets';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

export default function Event(props: EventProps) {
  const placeAddress = props.placeAddress || 'A virtual evening of smooth jazz';
  const placeName = props.placeName || '20th May- Sat -2:00 PM';
  const placeImage =
    {uri: props.placeImage} ||
    require('../../../assets/images/search/nearby/place_empty.png');
  return (
    <View>
      <View style={CONTAINER}>
        <View style={INNER_CONTAINER}>
          <FastImage
            resizeMode="cover"
            source={placeImage}
            style={EVENT_IMAGE}
            defaultSource={require('../../../assets/images/search/nearby/place_empty.png')}
          />
          <View style={DATA_CONTAINER}>
            <Text style={DATE}>{placeName}</Text>
            <Text style={DESCRIPTION} numberOfLines={2}>
              {placeAddress}
            </Text>
          </View>
          <TouchableOpacity
            onPress={props.onPressItem}
            accessible={true}
            accessibilityLabel={placeAddress}>
            <Icon
              name={'arrow-forward-outline'}
              size={isTablet() ? 30 : 20}
              style={{marginStart: '2%'}}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
