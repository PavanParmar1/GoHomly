import React, {useState} from 'react';
import {PreferenceProps} from './preference.props';
import {
  CONTAINER,
  INNER_CONTAINER,
  SEGMENT_STYLE,
  NAME,
  SEGMENT_FONT,
  SEGMENT_FONT_ACTIVE,
} from './preference.presets';
import {Text, View} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function Preference(props: PreferenceProps) {
  const preferedOption = props.preferedOption || 'Distance';
  const measurementFirst = props.unitFirst || 'Miles';
  const measurementSecond = props.unitSecond || 'KiloMeters';
  const [segmentIndex, setSegmentIndex] = useState(0);
  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <Text style={NAME}> {preferedOption} </Text>
        <SegmentedControl
          values={[measurementFirst, measurementSecond]}
          style={SEGMENT_STYLE}
          fontStyle={SEGMENT_FONT}
          activeFontStyle={SEGMENT_FONT_ACTIVE}
          selectedIndex={segmentIndex}
          onChange={event => {
            setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          appearance={'light'}
        />
      </View>
    </View>
  );
}
