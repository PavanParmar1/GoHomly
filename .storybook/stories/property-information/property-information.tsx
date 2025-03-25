import React from 'react';
import {
  CONTAINER_STYLE,
  HEADER_CONTAINER_STYLE,
  HEADER_TEXT_STYLE,
  LOCATION_AND_RATING_CONTAINER_STYLE,
  LOCATION_SUB_CONTAINER_STYLE,
  LOCATION_IMAGE_CONTAINER_STYLE,
  SUB_HEADER_TEXT_STYLE,
  ASSETS_MAIN_CONTAINER_STYLE,
  ASSETS_CONTAINER_STYLE,
  ASSET_VALUE_TEXT_STYLE,
  ASSET_NAME_TEXT_STYLE,
  ASSETS_VERTICAL_LINE_CONTAINER_STYLE,
  ASSETS_TYPE_CONTAINER_STYLE,
  DIVIDER,
  SHIMMER_EFFECT_HEADER_TEXT_CONTAINER,
  SHIMMER_EFFECT_SUB_CONTAINER,
  SHIMMER_EFFECT_ASSET_CONTAINER,
  LOCATION_IMAGE_CONTAINER_STYLE1,
} from './property-information.presets';

import {PropertyInformationProps} from './property-information.props';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
// import Ratings from '../ratings/ratings';
import {Divider} from '@rneui/base-edge';
import {getWidth, getWidthTab} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

// const starImage = require('../../../assets/images/startpsd.png');

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function PropertyInformation(props: PropertyInformationProps) {
  // const handleItemClick = item => {
  //   openPropertyDetailScreen();
  //   console.log('item clicked');
  // };
  // const Item = ({title, image}: {title: any; image: any}) => (
  //   <View style={ITEM_CONTAINER_SOLID}>
  //     <Image style={ITEM_IMAGE_CONTAINER} source={image} />
  //     <Text style={ITEM_TITLE_STYLE}>{title}</Text>
  //   </View>
  // );

  // const NoItem = ({}: {title: any; image: any}) => (
  //   <View style={ITEM_CONTAINER_SOLID}>
  //     <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
  //     <View style={{height: 10}} />
  //     <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
  //   </View>
  // );

  // const renderItem = ({item}) => (
  //   <TouchableOpacity onPress={() => handleItemClick(item)}>
  //     <Item title={item.title} image={item.image} />
  //   </TouchableOpacity>
  // );
  // const noItemList = () => <NoItem title={''} image={''} />;
  return (
    <View style={[CONTAINER_STYLE, props.containerStyle]}>
      {props.isLoading && (
        <View style={HEADER_CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_SUB_CONTAINER} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_SUB_CONTAINER} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_ASSET_CONTAINER} />
        </View>
      )}
      {props.data && (
        <View style={CONTAINER_STYLE}>
          <View style={HEADER_CONTAINER_STYLE}>
            <Text style={HEADER_TEXT_STYLE}>{props.data.title || ''}</Text>
          </View>
          <View style={LOCATION_AND_RATING_CONTAINER_STYLE}>
            <View style={LOCATION_SUB_CONTAINER_STYLE}>
              <TouchableOpacity onPress={props.onPressMap}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={LOCATION_IMAGE_CONTAINER_STYLE}
                    source={require('../../../assets/images/home/property-detail/ic_location.png')}
                  />
                  <Text style={SUB_HEADER_TEXT_STYLE} numberOfLines={1}>
                    {props.data.subTitle || ''}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {props.data.hasRating && (
              <View
                style={[
                  LOCATION_SUB_CONTAINER_STYLE,
                  {
                    marginLeft: isTablet()
                      ? Platform.OS === 'android'
                        ? -30
                        : -30
                      : 0,
                  },
                ]}>
                <TouchableOpacity onPress={props.onPressReview}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      style={LOCATION_IMAGE_CONTAINER_STYLE1}
                      source={require('../../../assets/images/star_big.png')}
                    />
                    <Text
                      style={[
                        SUB_HEADER_TEXT_STYLE,
                        {
                          paddingLeft: isTablet()
                            ? getWidthTab(24)
                            : getWidth(12),
                        },
                      ]}
                      numberOfLines={1}>
                      {` 4.5 (10 reviews)`}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
          {!isTablet() && (
            <>
              <View style={ASSETS_MAIN_CONTAINER_STYLE}>
                <View style={{marginLeft: -14}}>
                  <View style={ASSETS_CONTAINER_STYLE}>
                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.beds || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Bed`}</Text>
                    <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE} />

                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.bath || ' '}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Bath`}</Text>
                    <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE} />

                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.area || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Sqft`}</Text>
                    {/* <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE}></View> */}
                  </View>
                </View>
              </View>
              <View style={{marginLeft: -14}}>
                <View style={ASSETS_TYPE_CONTAINER_STYLE}>
                  <View style={ASSETS_CONTAINER_STYLE}>
                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.houseType || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>
                      {props.data.houseTypeDetail || ''}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
          {isTablet() && (
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginLeft: isTablet()
                    ? Platform.OS === 'android'
                      ? -10
                      : -16
                    : 0,
                }}>
                <View style={ASSETS_TYPE_CONTAINER_STYLE}>
                  <View style={ASSETS_CONTAINER_STYLE}>
                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.houseType || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>
                      {props.data.houseTypeDetail || ''}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={ASSETS_MAIN_CONTAINER_STYLE}>
                <View
                  style={{
                    marginLeft: isTablet()
                      ? Platform.OS === 'android'
                        ? -30
                        : -45
                      : 0,
                  }}>
                  <View style={ASSETS_CONTAINER_STYLE}>
                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.beds || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Bed`}</Text>
                    <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE} />

                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.bath || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Bath`}</Text>
                    <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE} />

                    <Text style={ASSET_VALUE_TEXT_STYLE}>
                      {props.data.area || ''}
                    </Text>
                    <Text style={ASSET_NAME_TEXT_STYLE}>{` Sqft`}</Text>
                    {/* <View style={ASSETS_VERTICAL_LINE_CONTAINER_STYLE}></View> */}
                  </View>
                </View>
              </View>
            </View>
          )}
          <Divider style={DIVIDER} color={'#777777'} />
        </View>
      )}
    </View>
  );
}
export default PropertyInformation;
