import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';
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
  Font8,
  Font10,
  Font15,
  getHeight,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
const imageWidth = (windowWidth / 375) * 70;
const imageWidthTab = (windowWidth / 834) * 90;
const iconWidth = (windowWidth / 375) * 30;
const iconWidthTab = (windowWidth / 834) * 42;
export const CONTAINER_STYLE: ViewStyle = {
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'flex-start',
  // backgroundColor: 'red',
  // marginBottom: isTablet() ? getWidthTab(43) : getWidth(60),
};

/**
 * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
 */
export const HEADER_CONTAINER_STYLE: ViewStyle = {
  // height: isTablet() ? getWidthTab(70) : getWidth(70),
  marginTop: isTablet() ? getWidthTab(43) : getWidth(20),
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

export const ITEM_ADDRESS_HEADER_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font10 : Font16,
  // lineHeight: 24,
  marginTop: isTablet()
    ? getWidthTab(5)
    : Platform.OS === 'ios'
      ? getWidth(12)
      : getWidth(12),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
/**
 * InnerContainer - Row Inner View - View (OuterView, Like Margin Top, etc)
 */
export const ITEM_CONTAINER_SOLID: ViewStyle = {
  alignItems: 'center',
  // overflow: 'hidden',
  width: isTablet() ? (774 * windowWidth) / 834 : (343 * windowWidth) / 375,
  // height: isTablet() ? (590 * windowWidth) / 834 : (460 * windowWidth) / 375,
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  marginBottom: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: getWidth(3),
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(16.016) : getWidth(16.016), // Border radius
  shadowColor: 'gray', // Shadow color
  shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
  shadowOpacity: 0.4,
  shadowRadius: isTablet() ? getWidthTab(5) : getWidth(5), // Shadow radius
  elevation: 5, // Required for Android
  // marginTop: 8,
};

export const ITEM_IMAGE_CONTAINER: ImageStyle = {
  width: '100%',
  height: isTablet() ? (287 * windowWidth) / 834 : (190 * windowWidth) / 375,
};

export const ITEM_IMAGE_CONTAINER_TYPE1: ImageStyle = {
  width: '100%',
  borderTopLeftRadius: 10,
  height: isTablet() ? (287 * windowWidth) / 834 : (190 * windowWidth) / 375,
};

export const ITEM_IMAGE_CONTAINER_TYPE2: ImageStyle = {
  width: '100%',
  height: '100%',
};

export const ITEM_IMAGE_CONTAINER_TYPE3: ImageStyle = {
  width: '100%',
  height: '100%',
};

export const ITEM_OVERLAY_CONTAINER: ImageStyle = {
  width: isTablet() ? (788 * windowWidth) / 834 : (343 * windowWidth) / 375,
  height: isTablet() ? (287 * windowWidth) / 834 : (190 * windowWidth) / 375,
  position: 'absolute',
};

export const ITEM_OVERLAY_CONTAINER_TYPE2: ImageStyle = {
  width: '110%',
  height: '100%',
  position: 'absolute',
};

export const ITEM_INFORMATION_CONTAINER: ViewStyle = {
  // height: isTablet() ? getWidthTab(322) : getWidth(268),
  width: isTablet() ? getWidthTab(774) : (343 * windowWidth) / 375,
};

export const ITEM_INFORMATION_SUB_CONTAINER: ViewStyle = {
  // margin: isTablet() ? getWidthTab(10) : getWidth(16),
  // height: isTablet() ? getWidthTab(300) : getWidth(200),
  // top: isTablet() ? getWidthTab(4) : getWidth(0),
  padding: isTablet() ? getWidthTab(10) : getWidth(10),
  // paddingVertical: isTablet() ? getWidthTab(15) : getWidth(15),
};

export const ITEM_TRAVEL_DATE_HEADER_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_TRAVEL_DATE_STYLE: TextStyle = {
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  marginTop: isTablet() ? getWidthTab(6) : getWidth(5),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  // lineHeight: 20,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font9 : Font14,
  // lineHeight: isTablet() ? 42 : 21,
  marginTop: isTablet()
    ? getWidthTab(0)
    : Platform.OS === 'ios'
      ? getWidth(3)
      : getWidth(2),
  // lineHeight: getWidth(18),
  paddingLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  // height: isTablet() ? getWidthTab(30) : getWidth(30),
  // width: '40%',
  // backgroundColor: 'blue',
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const ITEM_INFORMATION_MAIN_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
};

export const ITEM_INFORMATION_TITLE_CONTAINER: ViewStyle = {
  width: '85%',
};

export const ITEM_INFORMATION_TOP_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginTop: isTablet() ? getWidthTab(0) : getWidth(-10),
  width: '100%',

  alignItems: 'flex-start',
};

export const GUEST_INFORMATION_TOP_CONTAINER: ViewStyle = {
  // flexDirection: 'row',
  top: -12,
  // backgroundColor:"pink",
};

export const GUEST_INFORMATION_MAIN_CONTAINER: ViewStyle = {
  width: isTablet() ? '50%' : '0',
  marginVertical: isTablet() ? '2%' : '4%',
};

export const GUEST_INFORMATION_TITLE_CONTAINER: ViewStyle = {
  width: '50%',
};

export const TRAVEL_INFORMATION_MAIN_CONTAINER: ViewStyle = {
  // height: 60,
  top: isTablet() ? getWidthTab(2) : getWidth(2),
  width: isTablet() ? '100%' : '100%',
  // marginVertical: isTablet()?'1%':'0%',
};

export const TRAVEL_INFORMATION_TOP_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  // width: '100%',
};

export const TRAVEL_INFORMATION_TITLE_CONTAINER: ViewStyle = {
  width: isTablet() ? '50%' : '50%',
};

export const ITEM_RATING_CONTAINER_STYLE: ViewStyle = {
  flexDirection: 'row',
  marginTop: isTablet() ? getWidthTab(5) : getWidth(12),
  // height: isTablet() ? 26 : 20,
  width: '15%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: isTablet() ? getWidthTab(16) : getWidth(0),
};
export const ITEM_RATING_IMGE_STYLE: ImageStyle = {
  paddingLeft: isTablet() ? getWidthTab(15) : getWidth(0),
  width: isTablet() ? getWidthTab(35) : getWidth(20),
  height: isTablet() ? getWidthTab(35) : getHeight(20),
  tintColor: colors.secondary,
};
export const ITEM_RATING_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font10 : Font14,
  // lineHeight: getWidth(18),
  paddingLeft: isTablet() ? getWidthTab(5) : getWidth(5),
  // width: '40%',
  // backgroundColor: 'blue',
  textAlign: 'left',
  justifyContent: 'center',
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

export const SEE_ALL_CONTAINER_STYLE: ViewStyle = {
  marginRight: getWidth(10),
  marginTop: isTablet() ? getWidthTab(-6) : getWidth(-6),
};

export const DIVIDER: ViewStyle = {
  // marginVertical: isTablet() ? '2.0%' : '2%',
  backgroundColor: '#7777771A',
  marginHorizontal: isTablet() ? getWidthTab(17) : getWidth(4),
};

export const DIVIDER_GUEST_STYLE: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(15) : getWidth(12),
};

export const VERTICAL_DIVIDER: ViewStyle = {
  marginHorizontal: isTablet() ? '1%' : '2%',
  backgroundColor: '#7777771A',
  height: '75%',
  marginTop: isTablet() ? getWidthTab(18) : getWidth(8),
  width: 1,
};

export const CHECKOUT_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font15,
  fontWeight: '400',
  color: colors.background,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const CHECKOUT_BUTTON: ViewStyle = {
  marginTop: '4%',
};
export const CHECKOUT_BUTTON_STYLE: ViewStyle = {
  width: isTablet() ? '100%' : '100%',
  height: isTablet() ? getWidthTab(60) : getWidth(40),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  alignSelf: 'center',
};

export const ICONS_TOP_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  width: isTablet() ? '90%' : '90%',
  // backgroundColor: '#FFF',
};
export const ICONS_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: isTablet() ? 'flex-start' : 'flex-start',
  flex: 1,
  // marginHorizontal: isTablet() ? 0 : -20,
  // backgroundColor: 'orange',
};
export const ICON: ImageStyle = {
  width: isTablet() ? iconWidthTab : iconWidth,
  height: isTablet() ? iconWidthTab : iconWidth,
};

export const BUTTON_MAIN_CONTAINER: ViewStyle = {
  width: '100%',
  // flexDirection: 'column',
  flexDirection: 'row',
};

export const CHECKOUT_BTN_CONTAINER: ViewStyle = {
  // width: '100%',
  flexDirection: 'row',
  marginTop: isTablet() ? '2%' : '5%',
  justifyContent: isTablet() ? 'space-between' : 'flex-start',
  marginBottom: isTablet() ? '3%' : '4%',
  width: '100%',
  // backgroundColor: 'pink',
};

export const CHECKOUT_BTN: ViewStyle = {
  width: isTablet() ? '49%' : '50%',
  marginLeft: isTablet() ? getWidthTab(15) : getWidth(4),
  top: isTablet() ? getWidthTab(0) : getWidth(0),
  justifyContent:"center",
};

export const RIGHT_BUTTON_CONTAINER: ViewStyle = {
  // backgroundColor: 'yellow',
  width: isTablet() ? '50%' : '50%',
  alignItems: 'center',
  justifyContent: 'center',
  // right: isTablet() ? getWidthTab(0) : getWidth(0),
};
export const LIKE_HEART_ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(54) : getWidth(40),
  height: isTablet() ? getWidthTab(54) : getWidth(40),
};

export const LIKE_HEART_ICON_CONTAINER: ImageStyle = {
  position: 'absolute',
  top: isTablet() ? getWidthTab(16) : getWidth(12),
  right: isTablet() ? getWidthTab(16) : getWidth(12),
  zIndex: 100,
  width: isTablet() ? getWidthTab(54) : getWidth(48),
  height: isTablet() ? getWidthTab(54) : getWidth(48),
};

export const LINE_DIVIER_VIEW: ViewStyle = {
  height: isTablet() ? getWidthTab(2) : getWidth(2),
  top: isTablet() ? getWidthTab(-8) : getWidth(-8),
  backgroundColor: 'blue',
};
