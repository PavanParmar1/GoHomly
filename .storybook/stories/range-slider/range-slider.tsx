import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  CONTAINER,
  INNER_CONTAINER,
  TEXT_CONTAINER,
  IMAGE_STYLE,
  MARKER,
  TRACK_STYLE,
  TRACK_SELECTED,
  TRACK_UNSELECTED,
  TEXT,
} from './range-slider.presets';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';
export default function RangeSlider() {
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    useState([100, 1000]);

  const nonCollidingMultiSliderValuesChange = values => {
    setNonCollidingMultiSliderValue(values);
  };

  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <Image
          source={require('../../../assets/images/slider_bar.png')}
          style={IMAGE_STYLE}
        />
        <MultiSlider
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          sliderLength={isTablet() ? getWidthTab(660) : getWidth(239)}
          min={100}
          max={1000}
          step={50}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={10}
          // customMarker={CustomMarker}
          markerStyle={MARKER}
          trackStyle={TRACK_STYLE}
          selectedStyle={TRACK_SELECTED}
          unselectedStyle={TRACK_UNSELECTED}
        />
      </View>
      <View style={TEXT_CONTAINER}>
        <Text style={TEXT}>£ {nonCollidingMultiSliderValue[0]} </Text>
        <Text style={TEXT}>£ {nonCollidingMultiSliderValue[1]}</Text>
      </View>
    </View>
  );
}
