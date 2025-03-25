import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../../app/theme';
import {
  Fonts,
  Font8,
  Font12,
  Font18,
  windowWidth,
  windowHeight,
  getWidthTab,
  getWidth,
} from '../../../app/utils/common';
import { isTablet } from 'react-native-device-info';

export const CONTAINER_STYLE: ViewStyle = {
  justifyContent: 'flex-start',
  width: '100%',
  marginTop: isTablet() ? '3.5%' : '4.5%',
  alignItems: 'flex-start',
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */
export const HEADER_CONTAINER_STYLE: ViewStyle = {
  // height: 40,
  marginBottom: isTablet() ? '1.25%' : '5%',
};

export const HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  paddingLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  paddingTop: 6,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

/**
 * InnerContainer - Row Inner View - View (OuterView, Like Margin Top, etc)
 */
export const ITEM_CONTAINER_SOLID: ViewStyle = {
  alignItems: 'center',
  overflow: 'hidden',

  width: isTablet() ? (120 * windowWidth) / 834 : (76 * windowWidth) / 375,
  height: isTablet() ? (145 * windowWidth) / 834 : (100 * windowWidth) / 375,
  marginLeft: isTablet() ? getWidthTab(15) : getWidth(15),
};

export const ITEM_TITLE_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font12,
  width: '115%',
  // lineHeight: 16,
  // position: 'absolute',
  fontWeight: '400',
  paddingTop: isTablet() ? getWidthTab(10) : getWidth(5),
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_IMAGE_CONTAINER: ImageStyle = {
  height: isTablet() ? (97 * windowWidth) / 834 : (66 * windowWidth) / 375,
  width: isTablet() ? (97 * windowWidth) / 834 : (66 * windowWidth) / 375,
  margin: isTablet() ? getWidthTab(5) : getWidth(5),
};

export const SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: ViewStyle = {
  borderRadius: windowHeight / 2,
  height: 20,
  margin: 16,
};

export const SHIMMER_EFFECT_IMAGE_CONTAINER: ViewStyle = {
  borderRadius: 20,
  width: 70,
  height: 70,
};

export const SHIMMER_EFFECT_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  width: 70,
  height: 15,
};
