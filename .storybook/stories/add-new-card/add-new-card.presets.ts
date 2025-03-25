import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font12,
  Font14,
  Font16,
  Font18,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

const Width = windowWidth / 375;
const Height = windowWidth / 375;

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  marginTop: isTablet() ? getWidthTab(30) : getWidth(20),
};
export const INNER_CONTAINER: ViewStyle = {
  backgroundColor: '#FBFBFB',
  marginHorizontal: isTablet() ? getWidthTab(30) : '4.2%',
  marginVertical: isTablet() ? getWidthTab(40) : '5.86%',
  paddingHorizontal: '5.33%',
  paddingVertical: isTablet() ? getWidthTab(35) : '6.66%',
  borderRadius: 4,
};

export const DIVIDER: ViewStyle = {
  width: isTablet() ? '10%' : '12.8%',
  alignSelf: 'center',
};
export const CARD: ImageStyle = {
  width: isTablet() ? getWidthTab(33) : Width * 30,
  height: isTablet() ? getWidthTab(33) : Height * 30,
};
export const ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(30) : Width * 20,
  height: isTablet() ? getWidthTab(30) : Width * 20,
  marginLeft: '2.5%',
};
export const HEADER: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '600',
  color: colors.textPrimary,
  marginLeft: isTablet() ? '4%' : '5%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DATE_HEADER: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '600',
  color: colors.textPrimary,
  marginTop: isTablet() ? getWidthTab(30) : Width * 24,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const HEADER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginLeft: '2%',
  alignItems: 'center',
};
export const INPUT_FIELD_LARGE: ViewStyle = {
  backgroundColor: 'transparent',
  marginHorizontal: 0,
  width: '100%',
  start: 0,
  marginTop: isTablet() ? getWidthTab(-40) : Width * -18,
};
export const INPUT_FIELD_INNER_CONTAINER: ViewStyle = {
  backgroundColor: colors.white,
  height: isTablet() ? getWidthTab(70) : Width * 56,
};
export const INPUT_FIELD_SMALL: ViewStyle = {
  backgroundColor: 'transparent',
  marginHorizontal: 0,
  // width: isTablet() ? getWidthTab(310) : Width * 140,
  width: isTablet() ? '49%' : '47.8%',
  marginTop: Width * -24,
};
export const DATE_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: isTablet() ? getWidthTab(30) : Width * 16,
};
export const MONTH: ViewStyle = {
  // marginLeft: isTablet() ? getWidthTab(-20) : getWidth(-10),
  flex: 1,
  marginRight: 10,
};
export const YEAR: ViewStyle = {
  // marginLeft: isTablet() ? getWidthTab(-20) : getWidth(-20),
  flex: 1,
  marginLeft: 10,
};
export const CVV_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: isTablet() ? getWidthTab(30) : Width * 16,
};
export const BUTTON_STYLE: ViewStyle = {
  // alignItems: 'center',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  width: isTablet() ? getWidthTab(780) : getWidth(303),
  justifyContent: 'center',
  marginHorizontal: isTablet() ? 0 : getWidth(25),
  marginTop: isTablet() ? getWidthTab(5) : getWidth(5),
  // marginBottom: isTablet() ? getWidthTab(0) : getWidth(40),
  alignSelf: 'center',
};
export const DATE_BUTTON_STYLE: ViewStyle = {
  height: isTablet() ? getWidthTab(70) : Width * 56,
  width: isTablet() ? getWidthTab(295) : Width * 135,
  borderRadius: isTablet() ? getWidthTab(10) : Width * 8,
  opacity: 0.6,
  paddingHorizontal: '4%',
};
export const INPUT: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: colors.textSecondary,
  marginLeft: isTablet() ? '0%' : '1%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DATE_BUTTON_TITLE: TextStyle = {
  ...INPUT,
  alignSelf: 'flex-start',
  fontFamily: Fonts.SFProRounded.Light,
  color: colors.textSecondary,
  fontWeight: '400',
};

export const BUTTON_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '600',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
