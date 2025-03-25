import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Fonts,
  getWidth,
  Font12,
  getWidthTab,
  Font14,
  windowWidth,
  Font18,
  windowHeight,
  Font10,
  Font16,
  Font9,
} from '../../utils/common';

export const mainContainer: ViewStyle = {
  backgroundColor: colors.background,
  flex: 1,
};

export const scrollview: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
};

export const scrollableModal2: ViewStyle = {
  height: (windowHeight * 30) / 110,
  backgroundColor: colors.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const modal2: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
};

export const INNER_CONTAINER_STYLE: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
  borderWidth: 1,
  paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(15),
  borderColor: 'rgba(119, 119, 119, 0.3)',
};
const serach_icon_width = isTablet()
  ? (25 * windowWidth) / 834
  : (16 * windowWidth) / 375;
const serach_icon_height = isTablet()
  ? (25 * windowWidth) / 834
  : (16 * windowWidth) / 375;

export const SEARCH_ICON: ImageStyle = {
  width: serach_icon_width,
  height: serach_icon_height,
  tintColor: '#777777',
};

export const OUTER_CONTAINER_STYLE: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(20) : getWidth(16),
};

export const HEADER_TEXT_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font18,
  color: colors.textPrimary,
};

export const DIVIDER1: ViewStyle = {
  width: '100%',
  // marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
};

export const DIVIDER: ViewStyle = {
  width: isTablet() ? getWidthTab(80) : getWidth(48),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(13),
  alignSelf: 'center',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
};

export const serviceItemContainer: ViewStyle = {
  paddingVertical: isTablet()
    ? (8 * windowWidth) / 834
    : (6 * windowWidth) / 375,
  width: '100%',
};

export const devider: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(8) : getWidth(6),
};

export const lableStyle: TextStyle = {
  flex: 1,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
  // backgroundColor:"pink",
  lineHeight: isTablet() ? getWidthTab(20) : getWidth(18),
};

export const lableStyle1: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  includeFontPadding: false,
  // backgroundColor:"yellow",
  textAlignVertical: 'center',
  lineHeight: isTablet() ? getWidthTab(28) : getWidth(21),
};

export const CONTAINER: ViewStyle = {
  // marginHorizontal: isTablet() ? '5%' : '3.5%',
  width: '100%',
  paddingTop: '1%',
  paddingHorizontal: isTablet() ? '1%' : '1%',
  // marginTop: isTablet() ? '1.5%' : '2.5%',
  paddingBottom: '1%',
};
export const INPUT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  color: 'rgba(119, 119, 119, 1)',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const BUTTONsTYLE: ViewStyle = {
  marginHorizontal: '0%',
  width: '100%',
  // height: isTablet() ? getWidthTab(56) : getWidth(45),
  height: (windowWidth / 100) * 13,
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  paddingHorizontal: '0%',
  paddingLeft: isTablet() ? getWidthTab(20) : getWidth(14),
  paddingRight: isTablet() ? getWidthTab(20) : getWidth(14),
};

export const modal: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
};

export const scrollableModal: ViewStyle = {
  height: (windowHeight * 80) / 110,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const MODALDIVIDER: ViewStyle = {
  width: '12%',
  marginTop: '5.5%',
  marginBottom: '2%',
  alignSelf: 'center',
};

export const RENDERCONTAINER: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const DROPDOWN_CONTAINER: ViewStyle = {
  marginEnd: isTablet() ? getWidthTab(20) : getWidth(10),
  marginVertical: isTablet() ? getWidthTab(15) : getWidth(5),
  paddingHorizontal: 10,
  width: isTablet() ? '50%' : '80%',
  paddingVertical: 7,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0.7,
  borderColor: 'lightgray',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
};

export const DROPDOWN_BTN_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
};

export const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  // paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
  marginBottom: isTablet() ? getWidthTab(60) : '8.8%',
  paddingTop: isTablet() ? '5%' : '7%',
  backgroundColor: colors.background,
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(12) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  marginHorizontal: '0%',
};

export const BUTTON_DISABLED_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(12) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  marginHorizontal: '0%',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font16,
  fontFamily: Fonts.SFProRounded.Bold,
  includeFontPadding: false,
  color: colors.background,
  textAlignVertical: 'center',
  marginEnd: '5%',
};
