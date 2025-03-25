import React from 'react';
import {View} from 'react-native';
import {
  CONTAINER,
  INNER_CONTAINER,
  TEXT_CONTAINER,
  IMAGE,
  TITLE_SHIMMER,
  INFO_SHIMMER,
  IMAGE_SHIMMER,
} from './recent-notification.presets';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export default function RecentNotificationShimmer() {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <View>
          <ShimmerPlaceHolder style={IMAGE_SHIMMER} />
        </View>

        <View style={TEXT_CONTAINER}>
          <ShimmerPlaceHolder style={TITLE_SHIMMER} />

          <ShimmerPlaceHolder style={INFO_SHIMMER} />
        </View>
      </View>
    </View>
  );
}
