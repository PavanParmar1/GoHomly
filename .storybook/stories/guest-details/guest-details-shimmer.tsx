import React from 'react';
import {View} from 'react-native';
import {
  HEADER_CONTAINER,
  INFO,
  INFO_CONTAINER,
  INNER_CONTAINER,
  IMAGE_BUTTON_CONTAINER,
  NAME,
  TAG_STYLE,
  TAG_TEX_STYLE,
  SHIMMER_NAME,
  SHIMMER_IMAGE_BUTTON_CONTAINER,
  SHIMMER_INFO,
  SHIMMER_TAG_STYLE,
} from './guest-details.presets';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export default function GuestDetailsShimmer() {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={INNER_CONTAINER}>
      <View style={HEADER_CONTAINER}>
        <ShimmerPlaceHolder style={[SHIMMER_NAME]} />

        <ShimmerPlaceHolder style={[SHIMMER_IMAGE_BUTTON_CONTAINER]} />

        <ShimmerPlaceHolder style={[SHIMMER_IMAGE_BUTTON_CONTAINER]} />
      </View>
      <View style={INFO_CONTAINER}>
        <ShimmerPlaceHolder style={SHIMMER_INFO} />
        <ShimmerPlaceHolder style={SHIMMER_INFO} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '4%',
          }}>
          <ShimmerPlaceHolder style={SHIMMER_TAG_STYLE} />
        </View>
      </View>
    </View>
  );
}
