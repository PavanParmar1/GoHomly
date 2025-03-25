import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../../app/theme';
import {
  Fonts,
  Font12,
  Font14,
  Font15,
  Font18,
  windowWidth,
  Font10,
  getWidth,
  getWidthTab,
  Font9,
} from '../../../app/utils/common';
import { isTablet } from 'react-native-device-info';

export const CONTAINER_STYLE: ViewStyle = {
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'flex-start',
  // backgroundColor: 'pink',
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */
export const HEADER_CONTAINER_STYLE: ViewStyle = {
  // height: 70,
  width: '100%',
  flexDirection: 'row',
  marginTop: isTablet() ? getWidthTab(30) : getWidth(20),
  // backgroundColor: 'red',
};

export const HEADER_SUB_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(60) : getWidth(60),
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  // marginTop: isTablet() ? getWidthTab(20) : getWidth(16),
  flex: 1,
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
  paddingTop: isTablet() ? getWidthTab(4) : getWidth(5),
  // lineHeight: 18,
  // height: 30,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SEE_ALL_BUTTON_TITLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font12,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Light,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUB_HEADER_STYLE_2: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  paddingTop: isTablet() ? getWidthTab(4) : getWidth(5),
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
  width: isTablet() ? (223.08 * windowWidth) / 834 : (132 * windowWidth) / 375,
  // height: (102 * windowWidth) / 375,
  // backgroundColor: 'orange',
  // borderColor: colors.line,
  // borderWidth: 1,
  // borderRadius: 10,
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(16),

  // marginTop: 8,
};

export const ITEM_CONTAINER_SOLID2: ViewStyle = {
  alignItems: 'center',
  overflow: 'hidden',
  width: isTablet() ? (223.08 * windowWidth) / 834 : (132 * windowWidth) / 375,
  height: isTablet() ? (171.05 * windowWidth) / 834 : (102 * windowWidth) / 375,
  // backgroundColor: 'red',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
};

export const ITEM_TITLE_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  paddingTop: isTablet() ? getWidthTab(4) : getWidth(5),
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_IMAGE_CONTAINER: ImageStyle = {
  width: isTablet() ? (223.08 * windowWidth) / 834 : (132 * windowWidth) / 375,
  height: isTablet() ? (171.05 * windowWidth) / 834 : (102 * windowWidth) / 375,
  // backgroundColor: 'green',
  // margin: 5,
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
  width: isTablet() ? (223.08 * windowWidth) / 834 : (132 * windowWidth) / 375,
  height: isTablet() ? (171.05 * windowWidth) / 834 : (102 * windowWidth) / 375,
  position: 'absolute',
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  // height: 50,
  width: '100%',
  // width: (116 * windowWidth) / 375,
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_SUB_CONTAINER: ViewStyle = {
  // height: 50,
};

export const ITEM_INFORMATION_SUB_HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '600',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  marginTop: isTablet() ? getWidthTab(4) : getWidth(10),
  // paddingLeft: 4,
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_CITY_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  // paddingTop: 5,
  // lineHeight: 18,
  // paddingLeft: 4,
  // height: 20,
  textAlign: 'left',
  opacity: 80,
  width: '70%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LIKE_HEART_ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(23) : getWidth(21),
  height: isTablet() ? getWidthTab(23) : getWidth(21),
};
export const RATING_STYLE: ViewStyle = {
  backgroundColor: 'transparent',
  width: '20%',
  marginRight: '5%',
  paddingRight: '2%',
};
export const RATING_TEXT: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
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
  width: (132 * windowWidth) / 375,
  height: (102 * windowWidth) / 375,
  borderRadius: 10,
  marginBottom: 10,
};

export const SHIMMER_EFFECT_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  height: 16,
  width: '100%',
};
