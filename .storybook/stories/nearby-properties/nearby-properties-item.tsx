import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ratings from '../ratings/ratings';
import {getWidth, windowWidth} from '../../../app/utils/common';
import styles from './styles';
import {isTablet} from 'react-native-device-info';
const iconSize = (16 * windowWidth) / 375;
const iconSizeTab = (21 * windowWidth) / 834;

const I = require('../../../assets/images/search/home_icon.png');
export default function NearbyPropertiesItem({item, containerStyle}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity activeOpacity={0.75}>
        <View style={styles.dataContainer}>
          <Image style={styles.imageForReservation} source={item.imagePath} />
          {!isTablet() && (
            <View style={styles.textContainer}>
              <Text style={styles.headerText} numberOfLines={2}>
                {item.address}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: getWidth(5),
                }}>
                <Image
                  style={styles.homeIcon}
                  source={I}
                  resizeMode={'contain'}
                />

                <Text style={styles.textWithIcon} numberOfLines={1}>
                  {item.apartmentType}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: getWidth(5)}}>
                <Ratings
                  // type="custom"
                  // ratingImage={I}
                  // ratingColor="#672398"
                  ratingCount={1}
                  readonly={true}
                  showRating={false}
                  imageSize={iconSize}
                  // style={styles.ratingStyle}
                  style={{marginRight: getWidth(3)}}
                />
                <Text style={styles.textWithIcon} numberOfLines={1}>
                  {item.owner}
                </Text>
              </View>
              <Text style={styles.text} numberOfLines={1}>
                {item.description}
              </Text>
            </View>
          )}
          {isTablet() && (
            <View style={styles.textContainerReservation}>
              <Text style={styles.headerText} numberOfLines={2}>
                {item.address}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: isTablet() ? '2%' : '3%',
                }}>
                <View
                  style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                  <Image
                    style={styles.homeIcon}
                    source={I}
                    resizeMode={'contain'}
                  />
                  <Text
                    style={styles.textWithIconReservation}
                    numberOfLines={1}>
                    {item.apartmentType}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                  <Ratings
                    // type="custom"
                    // ratingImage={I}
                    ratingCount={1}
                    readonly={true}
                    showRating={false}
                    imageSize={iconSizeTab}
                    style={styles.ratingStyle}
                  />
                  <Text style={styles.textWithIconTablet} numberOfLines={1}>
                    {item.owner}
                  </Text>
                </View>
              </View>
              <Text style={styles.text} numberOfLines={1}>
                {item.description}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
