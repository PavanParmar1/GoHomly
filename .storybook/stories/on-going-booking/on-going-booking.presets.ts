import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font12,
  Font14,
  Font16,
  Font18,
  windowWidth,
  getWidth,
  getWidthTab,
  Font9,
  Font11,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

export const CONTAINER_STYLE: ViewStyle = {
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'flex-start',
  marginBottom: 20,
  // backgroundColor: 'green',
  // backgroundColor: 'red',
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */
export const HEADER_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(70) : getWidth(70),
  marginTop: isTablet() ? getWidthTab(43) : getWidth(30),
  // marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
  width: '100%',
  flexDirection: 'row',
  // backgroundColor: 'red',
};

export const HEADER_SUB_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(60) : getWidth(60),
  // backgroundColor: 'green',
  flex: 1,
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
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
  // backgroundColor:'blue',
};

export const SUB_HEADER_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  marginTop: isTablet() ? getWidthTab(5) : getWidth(5),
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
  fontSize: isTablet() ? Font9 : Font14,
  marginTop: isTablet() ? getWidthTab(5) : getWidth(5),
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
  width: isTablet() ? (774 * windowWidth) / 834 : (343 * windowWidth) / 375,
  height: isTablet() ? (375 * windowWidth) / 834 : (288 * windowWidth) / 375,
  borderColor: colors.line,
  borderWidth: 1,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: isTablet() ? getWidthTab(30) : getWidth(16),
  marginBottom: getWidth(3),
  // marginTop: 8,
};

export const ITEM_TITLE_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  marginTop: getWidth(5),
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_IMAGE_CONTAINER: ImageStyle = {
  width: '100%',
  height: isTablet() ? (287 * windowWidth) / 834 : (190 * windowWidth) / 375,
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
  width: isTablet() ? (788 * windowWidth) / 834 : (343 * windowWidth) / 375,
  height: isTablet() ? (287 * windowWidth) / 834 : (190 * windowWidth) / 375,
  position: 'absolute',
  // backgroundColor: 'green',
};

export const ITEM_OVERLAY_CONTAINER_TYPE2: ImageStyle = {
  width: '110%',
  height: '100%',
  position: 'absolute',
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  height: isTablet() ? getWidthTab(96) : getWidth(96),
  width: isTablet() ? getWidthTab(774) : (343 * windowWidth) / 375,
  // backgroundColor: 'green',
};

export const ITEM_INFORMATION_SUB_CONTAINER: ViewStyle = {
  margin: isTablet() ? getWidthTab(8) : getWidth(16),
  height: isTablet() ? getWidthTab(75) : getWidth(64),
  // backgroundColor: 'red',
};

export const ITEM_INFORMATION_SUB_HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '600',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  marginTop: isTablet() ? getWidthTab(5) : getWidth(5),
  marginLeft: isTablet() ? getWidthTab(5) : getWidth(4),
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  marginTop: isTablet() ? getWidthTab(1) : getWidth(10),
  // lineHeight: getWidth(18),
  paddingLeft: isTablet() ? getWidthTab(4) : getWidth(4),
  height: isTablet() ? getWidthTab(30) : getWidth(30),
  // width: '40%',
  // backgroundColor: 'blue',
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const LEFT_BUTTON_STYLE: ImageStyle = {
  height: isTablet() ? getWidthTab(60) : getWidth(40),
  width: isTablet() ? getWidthTab(60) : getWidth(40),
  backgroundColor: 'white',
  position: 'absolute',
  borderTopRightRadius: isTablet() ? getWidthTab(30) : getWidth(20),
  borderBottomRightRadius: isTablet() ? getWidthTab(30) : getWidth(20),
  alignSelf: 'flex-start',
  left: -10,
  justifyContent: 'center',
  // marginVertical: (288 * windowWidth) / 375 / 2 + 16,
  marginTop: isTablet() ? getWidthTab(250) : getWidth(170),
};

export const RIGHT_BUTTON_STYLE: ImageStyle = {
  height: isTablet() ? getWidthTab(60) : getWidth(40),
  width: isTablet() ? getWidthTab(60) : getWidth(40),
  backgroundColor: 'white',
  position: 'absolute',
  borderTopLeftRadius: isTablet() ? getWidthTab(30) : getWidth(20),
  borderBottomLeftRadius: isTablet() ? getWidthTab(30) : getWidth(20),
  alignSelf: 'flex-end',
  right: -10,
  justifyContent: 'center',
  // marginVertical: (288 * windowWidth) / 375 / 2 + 16,
  marginVertical: isTablet() ? getWidthTab(250) : getWidth(170),
};
export const CAROUSEL_MOVEMENT_ICON: ImageStyle = {
  alignSelf: 'center',
  height: isTablet() ? getWidthTab(24) : getWidth(14),
  width: isTablet() ? getWidthTab(12) : getWidth(7),
};
export const RATING_CONTAINER: ViewStyle = {
  backgroundColor: 'transparent',
  marginLeft: isTablet() ? getWidthTab(30) : 0,
  width: isTablet() ? getWidthTab(200) : getWidth(200),
};
export const RATING_TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Light,
  fontSize: isTablet() ? Font9 : Font12,
  color: '#777777',
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

export const SEE_ALL_BUTTON_TITLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font12,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Light,
  fontWeight: '400',
};
