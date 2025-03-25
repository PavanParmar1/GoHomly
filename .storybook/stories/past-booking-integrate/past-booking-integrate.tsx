import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {pastBookingIntegrateProps} from './past-booking-integrate.props';
import {
  CONTAINER,
  TAB_CONTAINER,
  IMAGE_CONTAINER_TAB,
  INNER_CONTAINER,
  ROW_CONTAINER,
  IMAGE_STYLE,
  ICON_STYLE,
  TEXT,
  COUNT,
  COST,
  ADDRESS,
  COST_TEXT,
} from './past-booking-integrate.presets';
import {isTablet} from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import {App as AppImage} from '../../../assets/images/map';

export default function PastBookingIntegrate(props: pastBookingIntegrateProps) {
  // const pastBooking = require('../../../assets/images/booking1.png');
  const heartFill = require('../../../assets/images/heart.png');
  const heart = require('../../../assets/images/heartFill.png');
  return (
    <>
      {!isTablet() && (
        <TouchableOpacity
          onPress={() => props.onPress(props.item)}
          activeOpacity={0.75}>
          <View style={CONTAINER}>
            <View style={INNER_CONTAINER}>
              <View>
                <FastImage
                  source={props.item.propertyImage}
                  style={IMAGE_STYLE}
                  defaultSource={AppImage.LoadingImageWithBGPlaceholder}
                />
              </View>
              <View style={ROW_CONTAINER}>
                <Text style={TEXT}>
                  <Text style={COUNT}>{props.item.bedroomCount}</Text> Bed |
                  {'  '}
                  <Text style={COUNT}>{props.item.bathroomCount}</Text> Bath |
                  {'  '}
                  <Text style={COUNT}>{props.item.area}</Text> Sq. Feet{'  '}
                </Text>
                <TouchableOpacity onPress={props.onFavPress}>
                  <Image
                    source={props.item.isLiked ? heartFill : heart}
                    style={ICON_STYLE}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={COST_TEXT}>
                  <Text style={COST}>{props.item.perNightCost}</Text>/Night
                </Text>
              </View>
              <View>
                <Text style={ADDRESS}>{props.item.address}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {isTablet() && (
        <View style={TAB_CONTAINER}>
          <TouchableOpacity
            onPress={() => props.onPress(props.item)}
            activeOpacity={0.75}>
            <View style={IMAGE_CONTAINER_TAB}>
              <FastImage
                source={props.item.propertyImage}
                style={IMAGE_STYLE}
                defaultSource={AppImage.LoadingImageWithBGPlaceholder}
              />
            </View>
            <View style={ROW_CONTAINER}>
              <Text style={TEXT}>
                <Text style={COUNT}>{props.item.bedroomCount}</Text> Bed |{'  '}
                <Text style={COUNT}>{props.item.bathroomCount}</Text> Bath
              </Text>
              <TouchableOpacity onPress={props.onFavPress}>
                <Image
                  source={props.item.isLiked ? heartFill : heart}
                  style={ICON_STYLE}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={ADDRESS} numberOfLines={1}>
                {props.item.address}
              </Text>
            </View>
            <View>
              <Text style={COST_TEXT}>
                <Text style={COST}>{props.item.perNightCost}</Text>/Night
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
