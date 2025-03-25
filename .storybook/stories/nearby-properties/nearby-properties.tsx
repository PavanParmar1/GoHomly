import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import Ratings from '../ratings/ratings';
import {windowWidth} from '../../../app/utils/common';
import styles from './styles';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
const iconSize = isTablet()
  ? (20 * windowWidth) / 834
  : (14 * windowWidth) / 375;
const numberOfColumn = isTablet() ? 2 : 1;
const I = require('../../../assets/images/search/home_icon.png');

// const propertyData = [
//   {
//     id: 1,
//     imagePath: require('../../../assets/images/property.png'),
//     address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
//     apartmentType: 'Entire Studio Apartment',
//     owner: 'Mercedes Vito',
//     description: '1 bedroom | 2 bathroom',
//   },
//   {
//     id: 2,
//     imagePath: require('../../../assets/images/property.png'),
//     address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
//     apartmentType: 'Entire Studio Apartment',
//     owner: 'Mercedes Vito',
//     description: '1 bedroom | 2 bathroom',
//   },
//   {
//     id: 3,
//     imagePath: require('../../../assets/images/property.png'),
//     address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
//     apartmentType: 'Entire Studio Apartment',
//     owner: 'Mercedes Vito',
//     description: '1 bedroom | 2 bathroom',
//   },
// ];

export default function NearbyProperties({
  Data,
  containerStyle,
  onPress,
  seeMorePress,
}) {
  function propertyRenderer({item}) {
    // console.log(item.id);
    // console.log(item.imagePath);
    // const {id, imagePath, address, apartmentType, owner, description} = item;
    // const imagePath = '../../../assets/images/property.png';
    // const address = '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE';
    // const apartmentType = 'Entire Studio Apartment';
    // const owner = 'Mercedes Vito';
    // const description = '1 bedroom | 1 bathroom';
    // console.log(id);
    return (
      <>
        {!isTablet() && (
          <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
              onPress={() => onPress(item)}
              activeOpacity={0.75}>
              <View style={styles.dataContainer}>
                <Image
                  style={styles.image}
                  source={item.imagePath}
                  resizeMode="cover"
                />
                <View style={styles.textContainer}>
                  <Text style={styles.headerText} numberOfLines={2}>
                    {item.address}
                  </Text>
                  <View style={styles.textWithIconContainer}>
                    <View style={styles.textWithIcon}>
                      <Image
                        style={styles.homeIcon}
                        source={I}
                        resizeMode={'contain'}
                      />
                      <Text>{item.apartmentType}</Text>
                    </View>
                    <View style={styles.textWithIcon}>
                      <Ratings
                        // type="custom"
                        // ratingImage={I}
                        // ratingColor="#672398"
                        ratingCount={1}
                        readonly={true}
                        showRating={false}
                        imageSize={iconSize}
                        style={styles.ratingStyle}
                      />
                      <Text style={{marginLeft: '2%'}}>{item.owner}</Text>
                    </View>
                  </View>
                  <Text style={styles.text} numberOfLines={1}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {isTablet() && (
          <TouchableOpacity
            style={styles.containerTablet}
            onPress={() => onPress(item)}
            activeOpacity={0.75}>
            <Image style={styles.image} source={item.imagePath} />

            <View style={styles.textContainer}>
              <Text style={styles.headerText} numberOfLines={1}>
                {item.address}
              </Text>
              <View style={styles.textWithIconContainer}>
                <View style={styles.textWithIcon}>
                  <Image
                    style={styles.homeIcon}
                    source={I}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.textstyle} numberOfLines={1}>
                    {item.apartmentType}
                  </Text>
                </View>
                <View style={styles.textWithIcon}>
                  <Ratings
                    // type="custom"
                    // ratingImage={I}
                    // ratingColor="#672398"
                    ratingCount={1}
                    readonly={true}
                    showRating={false}
                    imageSize={iconSize}
                    style={styles.ratingStyle}
                  />
                  <Text style={styles.textstyle} numberOfLines={1}>
                    {item.owner}
                  </Text>
                </View>
              </View>
              <Text style={styles.text} numberOfLines={1}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.textAndButtonContainer}>
        <Text style={styles.titleStyle}>Nearby Properties </Text>
        <Button
          title={'See All'}
          type={'clear'}
          titleStyle={styles.seeAllButtonTitle}
          onPress={seeMorePress}
        />
      </View>

      <FlatList
        data={Data}
        numColumns={numberOfColumn}
        renderItem={propertyRenderer}
        scrollEnabled={false}
      />
    </View>
  );
}
