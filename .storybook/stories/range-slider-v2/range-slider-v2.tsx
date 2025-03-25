import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  INNER_CONTAINER,
  TEXT_CONTAINER,
  MARKER,
  TRACK_STYLE,
  TRACK_SELECTED,
  TRACK_UNSELECTED,
  TEXT,
  textContainer,
  TEXT1,
} from './range-slider-v2.presets';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';
export default function RangeSliderV2() {
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    useState([100, 1000]);

  const nonCollidingMultiSliderValuesChange = (values: any) => {
    setNonCollidingMultiSliderValue(values);
  };

  return (
    <View>
      <View style={INNER_CONTAINER}>
        <MultiSlider
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          sliderLength={isTablet() ? getWidthTab(728) : getWidth(310)}
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
        <View style={textContainer}>
          <Text style={TEXT1}>Minimum</Text>
          <Text style={TEXT}>£ {nonCollidingMultiSliderValue[0]} </Text>
        </View>
        <View style={textContainer}>
          <Text style={TEXT1}>Maximum</Text>
          <Text style={TEXT}>£ {nonCollidingMultiSliderValue[1]}</Text>
        </View>
      </View>
    </View>
  );
}
