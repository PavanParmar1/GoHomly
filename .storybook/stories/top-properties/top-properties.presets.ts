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
  Font17,
  Font10,
  Font8,
  getHeight,
  Font13,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const imageWidth = isTablet()
  ? (30 * windowWidth) / 834
  : (28 * windowWidth) / 375;
const imageHeight = isTablet()
  ? (30 * windowWidth) / 834
  : (28 * windowWidth) / 375;

const heart_icon_width = isTablet()
  ? (45 * windowWidth) / 834
  : (42 * windowWidth) / 375;
const heart_icon_height = isTablet()
  ? (45 * windowWidth) / 834
  : (42 * windowWidth) / 375;

export const ICON = {
  width: isTablet() ? getWidthTab(30) : getWidth(20),
  height: isTablet() ? getWidthTab(30) : getHeight(20),
  tintColor: colors.secondary,
};

export const HEART_ICON_STYLE: ImageStyle = {
  width: heart_icon_width,
  height: heart_icon_height,
};

export const CONTAINER_STYLE: ViewStyle = {
  // backgroundColor: 'green'
  // shadowColor: '#EFEFEF', // Shadow color
  // shadowOffset: {width: 5.339, height: 2.339}, // Shadow offset
  // shadowOpacity: 1,
  // shadowRadius: isTablet() ? getWidthTab(21.354) : getWidth(21.354), // Shadow radius
};

export const HEADER_CONTAINER_STYLE: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(43) : getWidth(30),
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(17),
};

export const HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font18,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_CONTAINER_SOLID: ViewStyle = {
  overflow: 'hidden',
  width: isTablet() ? (774 * windowWidth) / 834 : (343 * windowWidth) / 375,
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(16),
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  marginVertical: isTablet() ? getWidthTab(15) : getWidth(16),
  backgroundColor: 'white',
  elevation: 5,
  shadowColor: 'gray', // Shadow color
  shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
  shadowOpacity: 1,
  shadowRadius: isTablet() ? getWidthTab(21.354) : getWidth(21.354), // Shadow radius
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
  height: isTablet() ? (287 * windowWidth) / 834 : (176 * windowWidth) / 375,
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  width: isTablet() ? getWidthTab(774) : (343 * windowWidth) / 375,
  paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
  paddingTop: isTablet() ? getWidthTab(10) : getWidth(10),
  paddingBottom: isTablet() ? getWidthTab(20) : getWidth(18),
};

export const ITEM_INFORMATION_INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  // backgroundColor:"pink"
};

export const ITEM_INFORMATION_RATING_CONTAINER: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
};

export const ITEM_INFORMATION_SUB_HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font10 : Font17,
  includeFontPadding: false,
  width: '75%',
};
export const RATE_STYLE: TextStyle = {
  color: '#6A6A6A',
  includeFontPadding: false,
  fontFamily: Fonts.SFProRounded.SemiBold,
  textAlignVertical: 'center',
  fontSize: isTablet() ? Font9 : Font14,
  marginLeft: isTablet() ? getWidthTab(7) : getWidth(5),
};

export const ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: TextStyle = {
  color: '#636363',
  marginTop: isTablet() ? getWidthTab(5) : getWidth(2),
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font9 : Font14,
  includeFontPadding: false,
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(6) : getWidth(10),
  height: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 10,
  marginTop: getWidth(13),
  width: isTablet() ? '30%' : '50%',
  // alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:'0%'
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font14,
  fontFamily: Fonts.SFProRounded.Regular,
  includeFontPadding: false,
  color: colors.background,
  textAlignVertical: 'center',
};

export const SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '88%' : '82%',
};
export const SHIMMER_EFFECT_HEADER_TEXT_CONTAINER1: ViewStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '10%' : '15%',
};

export const SHIMMER_EFFECT_IMAGE_CONTAINER: ViewStyle = {
  width: '100%',
  height: isTablet() ? (287 * windowWidth) / 834 : (176 * windowWidth) / 375,
};

export const SHIMMER_EFFECT_TEXT_CONTAINER: ViewStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '88%' : '82%',
  marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
};

export const SHIMMER_EFFECT_TAG_CONTAINER: ViewStyle = {
  borderRadius: 15,
  height: isTablet() ? getWidthTab(40) : getWidth(19),
  width: '22%',
};
export const SHIMMER_EFFECT_BUTTON: ViewStyle = {
  borderRadius: isTablet() ? getWidth(6) : getWidth(10),
  height: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 10,
  marginTop: getWidth(13),
  width: isTablet() ? '30%' : '50%',
};

export const SEE_ALL_BUTTON_TITLE: TextStyle = {
  fontSize: isTablet() ? Font8 : Font14,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Light,
  includeFontPadding: false,
  fontWeight: '400',
  // backgroundColor:"green",
};

export const IMAGE_STYLE: ImageStyle = {
  height: isTablet() ? getWidthTab(25) : getWidth(15),
  width: isTablet() ? getWidthTab(25) : getWidth(15),
  tintColor: 'black',
};

// export const IMAGE_STYLE: ImageStyle = {
//   height: isTablet() ? getWidthTab(25) : getWidth(17),
//   width: isTablet() ? getWidthTab(25) : getWidth(17),
//   tintColor: 'black',
// };

export const TEXT_STYLE: TextStyle = {
  marginStart: isTablet() ? getWidthTab(15) : getWidth(4),
  color: '#777777',
  fontSize: isTablet() ? Font10 : Font13,
  fontFamily: Fonts.SFProRounded.Regular,
  includeFontPadding: false,
};
