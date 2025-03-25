import React from 'react';
import NearByV2Style from './near-by-v2.presets';
import {NearByProps} from './near-by-v2.props';

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function NearByV2(props: NearByProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font12,
    Font8,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = NearByV2Style(
    windowWidth,
    getWidthTab,
    getWidth,
    Font12,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    screenWidth,
    orientation,
  );
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
        styles.ITEM_CONTAINER_SOLID,
        {
          marginRight:
            props?.data?.length === index + 1
              ? isTablet()
                ? getWidthTab(10)
                : getWidth(15)
              : 0,
        },
      ]}>
      <View style={styles.ITEM_IMAGE_CONTAINER}>
        <Image
          resizeMode="contain"
          style={styles.ICON}
          source={image}
          accessible={true}
          accessibilityLabel="NearBy Icon"
        />
      </View>
      <Text style={styles.ITEM_TITLE_STYLE}>{title}</Text>
    </View>
  );

  const NoItem = ({}: {title: any; image: any}) => (
    <View style={styles.ITEM_CONTAINER_SOLID}>
      <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_IMAGE_CONTAINER} />
      <View style={{height: 10}} />
      <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TEXT_CONTAINER} />
    </View>
  );

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={item.title}
      onPress={() => props.onPressItem(item)}
      activeOpacity={0.75}>
      <Item title={item.title} image={item.image} index={index} />
    </TouchableOpacity>
  );
  const noItemList = () => <NoItem title={''} image={''} />;
  console.log(props?.data?.length);

  return (
    <View style={styles.CONTAINER_STYLE}>
      {props.isLoading && (
        <View style={styles.HEADER_CONTAINER_STYLE}>
          <ShimmerPlaceHolder
            style={styles.SHIMMER_EFFECT_HEADER_TEXT_CONTAINER}
          />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <View style={styles.HEADER_CONTAINER_STYLE}>
          <Text style={styles.HEADER_STYLE}>{props.titleLabel}</Text>
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
          data={isTablet() ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6]}
          renderItem={noItemList}
        />
      )}
    </View>
  );
}
export default NearByV2;
