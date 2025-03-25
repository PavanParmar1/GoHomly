import React from 'react';
import {
  HEADER_STYLE,
  ITEM_CONTAINER_SOLID,
  ITEM_IMAGE_CONTAINER,
  ITEM_TITLE_STYLE,
  HEADER_CONTAINER_STYLE,
  CONTAINER_STYLE,
  SHIMMER_EFFECT_HEADER_TEXT_CONTAINER,
  SHIMMER_EFFECT_IMAGE_CONTAINER,
  SHIMMER_EFFECT_TEXT_CONTAINER,
} from './near-by.presets';
import {NearByProps} from './near-by.props';

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {isTablet} from 'react-native-device-info';
import {getWidthTab, getWidth} from '../../../app/utils/common';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function NearBy(props: NearByProps) {
  const Item = ({
    title,
    image,
    index,
  }: {
    title: any;
    image: any;
    index: number;
  }) => (
    <View
      style={[
        ITEM_CONTAINER_SOLID,
        {
          marginRight:
            props?.data?.length === index + 1
              ? isTablet()
                ? getWidthTab(10)
                : getWidth(15)
              : 0,
        },
      ]}>
      <Image style={ITEM_IMAGE_CONTAINER} source={image} />
      <Text style={ITEM_TITLE_STYLE}>{title}</Text>
    </View>
  );

  const NoItem = ({}: {title: any; image: any}) => (
    <View style={ITEM_CONTAINER_SOLID}>
      <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
      <View style={{height: 10}} />
      <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
    </View>
  );

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => props.onPressItem(item)}
      activeOpacity={0.75}>
      <Item title={item.title} image={item.image} index={index} />
    </TouchableOpacity>
  );
  const noItemList = () => <NoItem title={''} image={''} />;
  console.log(props?.data?.length);

  return (
    <View style={CONTAINER_STYLE}>
      {props.isLoading && (
        <View style={HEADER_CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <View style={HEADER_CONTAINER_STYLE}>
          <Text style={HEADER_STYLE}>{props.titleLabel}</Text>
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <FlatList
          style={{width: '100%', marginTop: isTablet() ? getWidthTab(8) : 0}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={props.data || []}
          renderItem={renderItem}
        />
      )}
      {props.isLoading && (
        <FlatList
          style={{width: '100%', marginTop: isTablet() ? getWidthTab(8) : 0}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={noItemList}
        />
      )}
    </View>
  );
}
export default NearBy;
