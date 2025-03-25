import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { colors } from '../../../app/theme';
import {
  Fonts,
  Font12,
  Font14,
  Font18,
  windowWidth,
  getWidthTab,
  getWidth,
  Font10,
  Font9,
  Font8,
  Font17,
} from '../../../app/utils/common';

export const CONTAINER_STYLE: ViewStyle = {
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'flex-start',
  // backgroundColor: 'red',
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */
export const HEADER_CONTAINER_STYLE: ViewStyle = {
  // height: 70,
  width: '100%',
  marginTop: isTablet() ? getWidthTab(50) : getWidth(40),
  flexDirection: 'row',
  // backgroundColor: 'yellow',
};

export const HEADER_SUB_CONTAINER_STYLE: ViewStyle = {
  // height: 60,
  flex: 1,
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  // backgroundColor: 'green',
};

export const HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  // lineHeight: 24,
  // paddingTop: 0,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SUB_HEADER_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // paddingTop: 5,
  // lineHeight: 18,
  // height: 30,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SUB_HEADER_STYLE_2: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // paddingTop: 5,
  // lineHeight: 18,
  // height: 30,
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
  width: isTablet() ? (305.54 * windowWidth) / 834 : (230 * windowWidth) / 375,
  height: isTablet() ? (331 * windowWidth) / 834 : (250 * windowWidth) / 375,
  borderRadius: isTablet() ? getWidthTab(30) : getWidth(30),
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(16),
  marginBottom: isTablet() ? getWidthTab(40) : getWidth(30),

  // marginTop: 8,
};

export const ITEM_TITLE_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  // paddingTop: 5,
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_IMAGE_CONTAINER: ImageStyle = {
  width: isTablet() ? (305.54 * windowWidth) / 834 : (230 * windowWidth) / 375,
  height: isTablet() ? (331 * windowWidth) / 834 : (250 * windowWidth) / 375,
  // backgroundColor: 'green',
  // margin: 5,
};

export const ITEM_LOCATION_IMAGE_CONTAINER: ImageStyle = {
  width: isTablet() ? getWidthTab(16) : getWidth(13),
  height: isTablet() ? getWidthTab(19) : getWidth(16),
  marginTop: isTablet() ? getWidthTab(5) : getWidth(0),
};
export const SEE_ALL_BUTTON_TITLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font12,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Light,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ITEM_IMAGE_CONTAINER_TYPE1: ImageStyle = {
  width: '100%',
  height: '100%',
  // backgroundColor: 'green',
};

export const ITEM_IMAGE_CONTAINER_TYPE2: ImageStyle = {
  width: '100%',
  height: '100%',
  // backgroundColor: 'red',
};

export const ITEM_IMAGE_CONTAINER_TYPE3: ImageStyle = {
  width: '100%',
  height: '100%',
  // backgroundColor: 'red',
};

export const ITEM_OVERLAY_CONTAINER: ImageStyle = {
  width: isTablet() ? (305.54 * windowWidth) / 834 : (230 * windowWidth) / 375,
  height: isTablet() ? (331 * windowWidth) / 834 : (250 * windowWidth) / 375,
  position: 'absolute',
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  height: isTablet() ? getWidthTab(150) : getWidth(120),
  width: isTablet() ? (290 * windowWidth) / 834 : (218 * windowWidth) / 375,
};

export const ITEM_RATING_CONTAINER: ViewStyle = {
  width: isTablet() ? getWidthTab(62) : getWidth(52),
  // borderRadius: 10,
  // backgroundColor: colors.secondary,
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  marginBottom: isTablet() ? getWidthTab(10) : getWidth(14),
  // marginTop: 2,
};
export const RATING_STYLE: ViewStyle = {
  width: isTablet() ? (windowWidth / 100) * 10 : (windowWidth / 100) * 13.5,
  height: isTablet() ? (windowWidth / 100) * 5 : (windowWidth / 100) * 8,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(7),
  alignSelf: 'center',
  justifyContent: 'center',
  // paddingTop: 5,
  // paddingBottom: 5,
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(0),
  // paddingRight: '11%',
};
export const RATING_TEXT: TextStyle = {
  color: 'white',
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Light,
  fontSize: isTablet() ? Font8 : Font12,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  paddingTop: isTablet() ? getWidthTab(8) : getWidth(8),
  height: isTablet() ? getWidthTab(150) : getWidth(120),
  // paddingLeft: 10,
};

export const ITEM_INFORMATION_SUB_ADDRESS_STYLE: TextStyle = {
  color: 'white',
  fontWeight: '600',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font17,
  marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
  // paddingLeft: 4,
  // lineHeight: 20,
  // height: 30,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_DISTANCE_STYLE: TextStyle = {
  color: 'white',
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // paddingBottom: 0,
  // lineHeight: 18,
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(20),
  // height: 24,
  textAlign: 'left',
  // opacity: 80,
  position: 'absolute',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LIKE_HEART_ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(25) : getWidth(25),
  height: isTablet() ? getWidthTab(25) : getWidth(25),
};

export const SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  marginLeft: 16,
  marginTop: 8,
  height: 16,
  width: '50%',
};

export const SHIMMER_EFFECT_SUB_HEADER_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  width: 70,
  height: 15,
};

export const SHIMMER_EFFECT_IMAGE_CONTAINER: ViewStyle = {
  width: isTablet() ? (305.54 * windowWidth) / 834 : (230 * windowWidth) / 375,
  height: isTablet() ? (331 * windowWidth) / 834 : (250 * windowWidth) / 375,
};

export const SHIMMER_EFFECT_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  height: 16,
  width: '100%',
};
