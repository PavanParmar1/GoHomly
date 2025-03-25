import React, {useState} from 'react';
import {
  HEADER_STYLE,
  ITEM_CONTAINER_SOLID,
  HEADER_CONTAINER_STYLE,
  CONTAINER_STYLE,
  HEADER_SUB_CONTAINER_STYLE,
  SUB_HEADER_STYLE,
  ITEM_INFORMATION_CONTAINER,
  ITEM_INFORMATION_SUB_CONTAINER,
  ITEM_INFORMATION_SUB_DISTANCE_STYLE,
  ITEM_INFORMATION_SUB_ADDRESS_STYLE,
  SHIMMER_EFFECT_IMAGE_CONTAINER,
  SHIMMER_EFFECT_HEADER_TEXT_CONTAINER,
  SHIMMER_EFFECT_TEXT_CONTAINER,
  ITEM_IMAGE_CONTAINER,
  ITEM_OVERLAY_CONTAINER,
  ITEM_LOCATION_IMAGE_CONTAINER,
  ITEM_RATING_CONTAINER,
  RATING_STYLE,
  RATING_TEXT,
  LIKE_HEART_ICON,
  SEE_ALL_BUTTON_TITLE,
} from './highest-rated.presets';
import {HighestRatedItemProps} from './highest-rated.props';

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import ImageButton from '../image-button/imagebutton';
import Ratings from '../ratings/ratings';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';
import {Button} from '../button/button';
import FastImage from 'react-native-fast-image';
const starImage = require('../../../assets/images/startpsd.png');
import {App as AppImage} from '../../../assets/images/map';
import { colors } from '../../../app/theme';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function HighestRated(props: HighestRatedItemProps) {
  const [data, setData] = useState(props.data);
  const heartFill = require('../../../assets/images/heart.png');
  const heart = require('../../../assets/images/heartFill.png');

  const Item = ({item, favOnPress}: {item: any; favOnPress: () => void}) => (
    <View
      style={[
        ITEM_CONTAINER_SOLID,
        {
          marginRight:
            item.distance === '2.5km away'
              ? isTablet()
                ? getWidthTab(20)
                : getWidth(20)
              : 0,
        },
      ]}>
      <View style={{flex: 1}}>
        <FastImage 
          style={ITEM_IMAGE_CONTAINER} 
          source={item.image} 
          defaultSource={AppImage.LoadingImageWithBGPlaceholder}
        />
        <Image style={ITEM_OVERLAY_CONTAINER} source={item.overlay} />

        <ImageButton
          source={item.isLiked ? heartFill : heart}
          onPress={favOnPress}
          style={LIKE_HEART_ICON}
          containerStyle={{
            position: 'absolute',
            top: 16,
            right: 20,
            zIndex: 100,
            // backgroundColor: 'red',
          }}
        />
      </View>

      <View style={ITEM_INFORMATION_CONTAINER}>
        {/* <View style={{height: 36}}> */}
        <View style={ITEM_RATING_CONTAINER}>
          <Ratings
            type="custom"
            name="badge"
            containerStyle={RATING_STYLE}
            ratingImage={starImage}
            ratingCount={1}
            // startingValue={4.5}
            readonly={true}
            tintColor={colors.secondary}
            ratingColor="#FFFFFF"
            showReadOnlyText={false}
            showRating={false}
            ratingBackgroundColor={colors.secondary}
            rightText={'4.5'}
            rightTextStyle={RATING_TEXT}
            // leftText="4.5"
            imageSize={isTablet() ? getWidthTab(20) : getWidth(10)}
            // zIndex={100}
          />
        </View>
        {/* </View> */}
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <View style={{}}>
            <Image
              style={ITEM_LOCATION_IMAGE_CONTAINER}
              source={require('../../../assets/images/home/ic_location.png')}
            />
            <Text style={ITEM_INFORMATION_SUB_DISTANCE_STYLE}>
              {item.distance}
            </Text>
          </View>

          <Text style={ITEM_INFORMATION_SUB_ADDRESS_STYLE}>{item.address}</Text>
        </View>
      </View>
    </View>
  );

  const NoItem = ({}: {title: any; image: any}) => (
    <View style={ITEM_CONTAINER_SOLID}>
      {/* <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
      <View style={{height: 10}} />
      <ShimmerPlaceHolder style={{borderRadius: 20, width: 70, height: 15}} /> */}

      <View>
        <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
      </View>

      <View style={ITEM_INFORMATION_CONTAINER}>
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
          <View style={{height: 10}} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
        </View>
      </View>
    </View>
  );

  const noItemList = () => (
    <NoItem title={''} image={''} overlay={''} address={''} description={''} />
  );

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={props.onPressItem} activeOpacity={0.75}>
      <Item item={item} favOnPress={() => favorites(item)} />
    </TouchableOpacity>
  );

  function favorites(element: any) {
    let newArray = data.map(el =>
      el.title === element.title ? {...el, isLiked: !element.isLiked} : el,
    );
    // console.log(newArray);
    setData(newArray);
  }

  return (
    <View style={CONTAINER_STYLE}>
      {props.isLoading && (
        <View style={HEADER_CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <View style={HEADER_CONTAINER_STYLE}>
          <View style={HEADER_SUB_CONTAINER_STYLE}>
            <Text style={HEADER_STYLE}>{props.titleLabel}</Text>
            <Text style={SUB_HEADER_STYLE}>{props.subTitleLabel}</Text>
          </View>
          <Button
            title={'See All'}
            titleStyle={SEE_ALL_BUTTON_TITLE}
            type={'clear'}
            onPress={props.seeAllPress}
            containerStyle={{
              alignSelf: 'center',
              marginRight: getWidth(10),
              marginTop: getWidth(10),
            }}
          />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <FlatList
          style={{width: '100%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data || []}
          renderItem={renderItem}
        />
      )}
      {props.isLoading && (
        <FlatList
          style={{width: '100%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1]}
          renderItem={noItemList}
        />
      )}
    </View>
  );
}
export default HighestRated;
