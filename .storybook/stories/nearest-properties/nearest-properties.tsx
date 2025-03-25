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
  ITEM_INFORMATION_SUB_HEADER_STYLE,
  ITEM_INFORMATION_SUB_CITY_STYLE,
  SHIMMER_EFFECT_IMAGE_CONTAINER,
  SHIMMER_EFFECT_HEADER_TEXT_CONTAINER,
  SHIMMER_EFFECT_TEXT_CONTAINER,
  ITEM_IMAGE_CONTAINER,
  ITEM_OVERLAY_CONTAINER,
  RATING_TEXT,
  SEE_ALL_BUTTON_TITLE,
} from './nearest-properties.presets';
import {NearestPropertiesProps} from './nearest-properties.props';
import Ratings from '../ratings/ratings';
import ImageButton from '../image-button/imagebutton';
const starImage = require('../../../assets/images/startpsd.png');

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getWidthTab, getWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import FastImage from 'react-native-fast-image';
import {App as AppImage} from '../../../assets/images/map';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
const heartFill = require('../../../assets/images/heartFill.png');
const heart = require('../../../assets/images/heart.png');

function NearestProperties(props: NearestPropertiesProps) {
  let dataArray = props.data;
  const [data, setData] = useState(dataArray);

  const Item = ({onPress, item}: {item: any; onPress: () => void}) => (
    <View
      style={[
        ITEM_CONTAINER_SOLID,
        {
          marginRight:
            item.address === 'London E16 2PX '
              ? isTablet()
                ? getWidthTab(20)
                : getWidth(20)
              : 0,
        },
      ]}>
      <View style={{flex: 1}}>
        <ImageButton
          source={item.liked ? heart : heartFill}
          onPress={onPress}
          style={{
            width: 25,
            height: 25,
          }}
          containerStyle={{
            position: 'absolute',
            right: 8,
            zIndex: 100,
            // backgroundColor: 'red',
          }}
        />
        <FastImage 
          style={ITEM_IMAGE_CONTAINER} 
          source={item.image} 
          defaultSource={AppImage.LoadingImageWithBGPlaceholder}
          />
        <Image style={ITEM_OVERLAY_CONTAINER} source={item.overlay} />
      </View>

      <View style={ITEM_INFORMATION_CONTAINER}>
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <Text style={ITEM_INFORMATION_SUB_HEADER_STYLE}>{item.address}</Text>
          <View
            style={{
              width: '100%',
              // height: 24,
              // backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={ITEM_INFORMATION_SUB_CITY_STYLE}>
              {item.description}
            </Text>

            <Ratings
              type="custom"
              name="complete"
              containerStyle={{
                backgroundColor: 'transparent',
                width: '20%',
              }}
              ratingImage={starImage}
              ratingCount={1}
              ratingColor="#FFA91C"
              // startingValue={4}
              readonly={true}
              tintColor="#000"
              showReadOnlyText={false}
              showRating={false}
              // style={{margin: '10%', padding: '2%'}}
              ratingBackgroundColor="#FBFBFB"
              rightText={'4.5'}
              rightTextStyle={RATING_TEXT}
              // leftText="4.5"
              imageSize={isTablet() ? getWidthTab(21) : getWidth(12)}
            />
          </View>
          {/* <Text style={ITEM_INFORMATION_SUB_CITY_STYLE}>{city}</Text> */}
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
  const PressHandler = i => {
    let newArray = data.map(el =>
      el.title === i.title ? {...el, liked: !i.liked} : el,
    );
    setData(newArray);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={props.onPressItem} activeOpacity={0.75}>
      <Item item={item} onPress={() => PressHandler(item)} />
    </TouchableOpacity>
  );

  const noItemList = () => (
    <NoItem title={''} image={''} overlay={''} address={''} description={''} />
  );
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
      {/* <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 20,
          alignSelf: 'flex-start',
          left: -10,
          justifyContent: 'center',
          marginVertical: (288 * windowWidth) / 375 / 2 + 10,
        }}
      />
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 20,
          alignSelf: 'flex-end',
          right: -10,
          justifyContent: 'center',
          marginVertical: (288 * windowWidth) / 375 / 2 + 10,
        }}
      /> */}
    </View>
  );
}
export default NearestProperties;
