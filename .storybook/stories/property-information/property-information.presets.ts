import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font14,
  Font22,
  windowHeight,
  getWidthTab,
  getWidth,
  Font13,
  Font10,
} from '../../../app/utils/common';

/**
 * Main Header Container - Main View - View (OuterView, Like Margin Top, etc)
 */
export const CONTAINER_STYLE: ViewStyle = {
  width: '100%',
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */

export const HEADER_CONTAINER_STYLE: ViewStyle = {
  width: '100%',
  marginBottom: isTablet() ? getWidthTab(10) : getWidth(7),
  // marginStart:
  //   Platform.OS === 'android' ? (isTablet() ? getWidthTab(-5) : 0) : 0,
};

/**
 * Top Header Text Style - Header View - Text (Color, Font Family, Font Size, etc)
 */

export const HEADER_TEXT_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '500',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font13 : Font22,
  marginTop: isTablet() ? getWidthTab(0) : getWidth(6),
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

/**
 * Location Container - Location View - View (OuterView, Like Margin Top, etc)
 */
export const LOCATION_AND_RATING_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(30) : getWidth(30),
  // paddingLeft: 16,
  flexDirection: 'row',
  alignItems: 'center',
};

export const LOCATION_SUB_CONTAINER_STYLE: ViewStyle = {
  width: '50%',
  // marginStart:
  //   Platform.OS === 'android' ? (isTablet() ? getWidthTab(-5) : 0) : 0,
};

/**
 * Rating Container - Rating View - View (OuterView, Like Margin Top, etc)
 */
export const RATING_CONTAINER_STYLE: ViewStyle = {
  width: '50%',
  // height: '50%'
  justifyContent: 'flex-start',
};
export const RATING: ViewStyle = {
  backgroundColor: 'transparent',
  marginLeft: isTablet() ? getWidthTab(-40) : getWidth(10),
};
export const LOCATION_IMAGE_CONTAINER_STYLE: ImageStyle = {
  width: isTablet() ? getWidthTab(26) : getWidth(11),
  height: isTablet() ? getWidthTab(26) : getWidth(15),
};

export const LOCATION_IMAGE_CONTAINER_STYLE1: ImageStyle = {
  width: isTablet() ? getWidthTab(24) : getWidth(10),
  height: isTablet() ? getWidthTab(28) : getWidth(15),
};

export const SUB_HEADER_TEXT_STYLE: TextStyle = {
  position: 'absolute',
  paddingLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginLeft: 2,
  marginTop: -1,
};

/**
 * Asset Container - Asset View - View (OuterView, Like Margin Top, etc)
 */
export const ASSETS_MAIN_CONTAINER_STYLE: ViewStyle = {
  // height: 30,
  paddingLeft: 0,
  width: '100%',
  marginTop: isTablet() ? getWidthTab(10) : getWidth(7),
};

export const ASSETS_CONTAINER_STYLE: ViewStyle = {
  flexDirection: 'row',
  // backgroundColor:'yellow'
};

export const ASSET_VALUE_TEXT_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // marginTop: -2,
  marginRight: isTablet() ? getWidthTab(4) : getWidth(5),
  paddingLeft: isTablet() ? getWidthTab(20) : getWidth(16),
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ASSET_NAME_TEXT_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // marginTop: -2,
  marginRight: isTablet() ? getWidthTab(20) : getWidth(10),
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const RATING_TEXT_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  marginTop: -2,
  marginLeft: isTablet() ? getWidthTab(0) : getWidth(0),
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ASSETS_VERTICAL_LINE_CONTAINER_STYLE: ViewStyle = {
  height: '80%',
  width: 1,
  backgroundColor: colors.textSecondary,
  alignSelf: 'center',
};

export const ASSETS_TYPE_CONTAINER_STYLE: ViewStyle = {
  // height: 30,
  // paddingLeft: 0,
  marginRight: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: isTablet() ? getWidthTab(10) : getWidth(7),
  // width: '50%',
};
export const DIVIDER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(32) : getWidth(23),
};
/**
 * Shimmer Effect Container - Shimmer Effect View - View (OuterView, Like Margin Top, etc)
 */
export const SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: ViewStyle = {
  borderRadius: windowHeight / 2,
  height: 20,
  margin: 16,
};

export const SHIMMER_EFFECT_SUB_CONTAINER: ViewStyle = {
  borderRadius: windowHeight / 2,
  width: '90%',
  height: 10,
  marginBottom: 16,
  marginLeft: 16,
};

export const SHIMMER_EFFECT_ASSET_CONTAINER: ViewStyle = {
  borderRadius: windowHeight / 2,
  width: '30%',
  height: 10,
  marginBottom: 16,
  marginLeft: 16,
};
