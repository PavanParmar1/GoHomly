import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import React from 'react';
import {
  BUTTON_CONTAINER,
  BUTTON_FONT_STYLE,
  BUTTON_FONT_STYLE1,
  BUTTON_STYLE,
  BUTTON_STYLE1,
  CONTAINER_STYLE,
  ICON,
  INNER_CONTAINER_STYLE,
  SEARCH_ICON,
  SUB_TEXT_STYLE,
  TEXT_STYLE,
} from './search-bottom-sheet.preset';
import {searchBottomSheetProps} from './search-bottom-sheet.props';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';

const SerachBoottomSheet = (props: searchBottomSheetProps) => {
  return (
    <View style={CONTAINER_STYLE}>
      <Pressable style={INNER_CONTAINER_STYLE} onPress={props.onPressItem}>
        <Text style={TEXT_STYLE}>Where</Text>
        <Text style={SUB_TEXT_STYLE}>I’m Flexible</Text>
      </Pressable>

      <Pressable
        style={[
          INNER_CONTAINER_STYLE,
          {marginTop: isTablet() ? getWidthTab(20) : getWidth(10)},
        ]}
        onPress={props.onPressItem}>
        <Text style={TEXT_STYLE}>When</Text>
        <Text style={SUB_TEXT_STYLE}>Any Week</Text>
      </Pressable>

      <Pressable
        style={[
          INNER_CONTAINER_STYLE,
          {marginTop: isTablet() ? getWidthTab(20) : getWidth(10)},
        ]}
        onPress={props.onPressItem}>
        <Text style={TEXT_STYLE}>Who</Text>
        <Text style={SUB_TEXT_STYLE}>Any Week</Text>
      </Pressable>

      <View style={BUTTON_CONTAINER}>
        <TouchableOpacity onPress={props.onPressItem} style={BUTTON_STYLE1}>
          <Text style={BUTTON_FONT_STYLE1}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressItem} style={BUTTON_STYLE}>
          <Text style={BUTTON_FONT_STYLE}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SerachBoottomSheet;
