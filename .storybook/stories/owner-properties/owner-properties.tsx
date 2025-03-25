import React, {ReactElement} from 'react';
import OwnersPropertyStyle from './owner-properties-presets';

import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {App as AppImage} from '../../../assets/images/map';
import {Rating} from 'react-native-ratings';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

interface OwnerPropertyItemProps {
  ownerName?: string;
  ViewAllPress: () => void;
  onModalPress: (Id: any) => void;
  isLoading: boolean;
  data: any;
  listEmptyComponent?: ReactElement<any, any>;
  onFetch: () => void;
}

const OwnerPropertyItem = (props: OwnerPropertyItemProps) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    getWidthTab,
    getWidth,
    getHeight,
    Font12,
    Font14,
    Font18,
    Font9,
    Font11,
    Font10,
    Font8,
    Font13,
    Font15,
    Font7,
    Font4,
    Font5,
    Font6,
  } = useSize();
  const styles = OwnersPropertyStyle(
    windowWidth,
    getWidthTab,
    getWidth,
    getHeight,
    Font12,
    Font14,
    Font18,
    Font9,
    Font11,
    Font10,
    Font8,
    Font13,
    Font15,
    Font7,
    Font4,
    Font5,
    Font6,
    orientation,
    screenWidth,
  );

  const starImage = require('../../../assets/images/startpsd.png');

  const Item = ({
    Id,
    PropertyName,
    address,
    image,
    rate,
    liked,
    propertyObject,
  }: {
    Id: any;
    PropertyName: any;
    address: any;
    image: any;
    rate: any;
    liked: any;
    propertyObject: any;
  }) => (
    <TouchableOpacity
      onPress={() => {
        props.onModalPress(propertyObject.Id);
      }}
      accessible={true}
      accessibilityLabel={`Rating Summary ${propertyObject.PropertyName}`}
      activeOpacity={0.6}
      style={styles.ITEM_CONTAINER_SOLID}>
      <FastImage
        resizeMode="cover"
        style={styles.ITEM_IMAGE_CONTAINER}
        source={{
          uri: propertyObject.CoverPhotoUrl,
          priority: FastImage.priority.normal,
        }}
        defaultSource={AppImage.LoadingImageWithBGPlaceholder}></FastImage>

      <View style={styles.ITEM_INFORMATION_CONTAINER}>
        <View style={styles.ITEM_INFORMATION_INNER_CONTAINER}>
          <Text
            numberOfLines={
              orientation === 'landscape' && windowWidth === screenWidth ? 1 : 2
            }
            style={styles.ITEM_INFORMATION_SUB_HEADER_STYLE}>
            {propertyObject.PropertyName}
          </Text>

          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              fractions={1}
              startingValue={propertyObject?.PropertyRating}
              readonly
              ratingImage={starImage}
              // imageSize={40}
              ratingColor={colors.secondary}
              ratingBackgroundColor="#c8c7c8"
              // onFinishRating={ratingCompleted}

              imageSize={
                orientation === 'landscape' && windowWidth === screenWidth
                  ? 16
                  : isTablet()
                    ? 15
                    : 12
              }
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          shadowColor: '#EFEFEF', // Shadow color
          shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
          shadowOpacity: 1,
          shadowRadius: isTablet() ? getWidthTab(21.354) : getWidth(21.354),
        }}>
        <Item
          id={item.Id}
          image={item.CoverPhotoUrl}
          overlay={item.overlay}
          address={item.Address}
          apartmentType={item.apartmentType}
          images={item.images}
          rate={item.rate}
          liked={item.liked}
          propertyObject={item}
          onPress={() => item}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop: '2.5%',
        paddingBottom: '5%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // width: '90%',
          // marginBottom: '3%',
          alignItems: 'center',
          // backgroundColor: 'orange',
          marginHorizontal: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'red',
          }}>
          <Text style={styles.TITLE}>Other Properties By Owner</Text>

          {/* <Text numberOfLines={1} style={OWNERTITLE}>
            ({props.ownerName})
          </Text> */}
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            // backgroundColor: 'pink',
            justifyContent: 'center',
            height: isTablet() ? getWidthTab(48) : getWidth(48),
          }}
          onPress={() => props.ViewAllPress()}>
          <Text style={styles.SUB_TITLE}>View All</Text>
        </TouchableOpacity>
        {/* <Button
          title={'See All'}
          titleStyle={SEE_ALL_BUTTON_TITLE}
          type={'clear'}
          onPress={() => console.log('first')}
          containerStyle={SEE_ALL_CONTAINER_STYLE}
        /> */}
      </View>
      {!props.isLoading && (
        <FlatList
          horizontal={true}
          data={props.data}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={props?.listEmptyComponent}
          scrollEnabled={true}
          renderItem={renderItem}
          onEndReached={props.onFetch}
        />
      )}
    </View>
  );
};

export default OwnerPropertyItem;
