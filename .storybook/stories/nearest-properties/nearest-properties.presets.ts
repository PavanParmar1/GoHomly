import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { colors } from '../../../app/theme';
import {
  Fonts,
  Font12,
  Font14,
  Font15,
  Font18,
  windowWidth,
  getWidth,
  getWidthTab,
  Font10,
  Font9,
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
  // height: isTablet() ? getWidthTab(70) : getWidth(70),
  // marginTop: isTablet() ? getWidthTab(10) : getWidth(30),
  marginTop: isTablet() ? getWidthTab(40) : getWidth(30),
  width: '100%',
  flexDirection: 'row',
  // backgroundColor: 'gray',
};

export const HEADER_SUB_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(60) : getWidth(60),
  flex: 1,
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  // marginTop: isTablet() ? getWidthTab(30) : getWidth(16),
  // backgroundColor: 'green',
};

export const HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  // lineHeight: 24,
  paddingTop: 0,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
  // backgroundColor: 'green',
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
  width: isTablet() ? (256 * windowWidth) / 834 : (210 * windowWidth) / 375,
  height: isTablet() ? (198 * windowWidth) / 834 : (163 * windowWidth) / 375,
  // backgroundColor: 'red',
  // borderColor: colors.line,
  // borderWidth: 1,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  marginVertical: isTablet() ? getWidthTab(20) : getWidth(16),
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
  width: isTablet() ? (256 * windowWidth) / 834 : (210 * windowWidth) / 375,
  height: isTablet() ? (198 * windowWidth) / 834 : (163 * windowWidth) / 375,
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
export const SEE_ALL_BUTTON_TITLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font12,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Light,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ITEM_OVERLAY_CONTAINER: ImageStyle = {
  width: isTablet() ? (256 * windowWidth) / 834 : (210 * windowWidth) / 375,
  height: isTablet() ? (198 * windowWidth) / 834 : (163 * windowWidth) / 375,
  position: 'absolute',
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  // height: getWidth(80),
  width: isTablet() ? (256 * windowWidth) / 834 : (210 * windowWidth) / 375,
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_SUB_CONTAINER: ViewStyle = {
  margin: isTablet() ? getWidthTab(16) : getWidth(16),
  // height: isTablet() ? getWidthTab(64) : getWidth(64),
  // backgroundColor: 'red',
};

export const ITEM_INFORMATION_SUB_HEADER_STYLE: TextStyle = {
  color: 'white',
  fontWeight: '600',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  paddingTop: isTablet() ? getWidthTab(4) : getWidth(5),
  paddingLeft: isTablet() ? getWidthTab(4) : getWidth(4),
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_CITY_STYLE: TextStyle = {
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  paddingTop: isTablet() ? getWidthTab(4) : getWidth(5),
  paddingLeft: isTablet() ? getWidthTab(4) : getWidth(4),
  // lineHeight: 18,
  // height: 20,
  textAlign: 'left',
  opacity: 80,
  width: '70%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const RATING_TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Light,
  fontSize: isTablet() ? Font9 : Font12,
  color: '#FFFFFF',
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
  width: (343 * windowWidth) / 375,
  height: (194 * windowWidth) / 375,
};

export const SHIMMER_EFFECT_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  height: 16,
  width: '100%',
};
