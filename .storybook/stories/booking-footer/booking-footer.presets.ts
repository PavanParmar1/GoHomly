import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font12,
  Font14,
  Font16,
  Font9,
  Fonts,
  getWidth,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  height: isTablet() ? (windowWidth / 834) * 160 : (windowWidth / 375) * 110,
  backgroundColor: 'black',
  justifyContent: 'center',
  borderBottomLeftRadius: getWidth(20),
  borderBottomRightRadius: getWidth(20),
  paddingHorizontal: isTablet() ? 10 : 5,
  // marginBottom: isTablet() ? getWidthTab(65) : 0,
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  //   backgroundColor: colors.textSecondary,
};
export const INNER_CONTAINER1: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 10,
  //   backgroundColor: colors.textSecondary,
};
export const TEXT_CONTAINER: ViewStyle = {
  marginLeft: isTablet() ? '7%' : '7%',
  justifyContent: 'center',
  //   backgroundColor: 'pink',
  alignItems: 'flex-start',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.background,
  fontSize: isTablet() ? Font9 : Font12,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const PRICE_TEXT: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font11 : Font16,
};
export const BUTTON_CONTAINER: ViewStyle = {
  //   backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: isTablet() ? '7%' : '7%',
};
export const BUTTON_CONTAINER1: ViewStyle = {
  // backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};
export const BUTTON_STYLE: ViewStyle = {
  borderRadius: isTablet()
    ? (windowWidth / 834) * 30
    : (windowWidth / 375) * 26,
  height: isTablet() ? (windowWidth / 834) * 65 : (windowWidth / 375) * 45,
  width: isTablet() ? (windowWidth / 834) * 240 : (windowWidth / 375) * 150,
};
export const BUTTON_STYLE1: ViewStyle = {
  borderRadius: isTablet()
    ? (windowWidth / 834) * 30
    : (windowWidth / 375) * 26,
  height: isTablet() ? (windowWidth / 834) * 60 : (windowWidth / 375) * 45,
  width: isTablet() ? (windowWidth / 834) * 240 : (windowWidth / 375) * 150,
  backgroundColor: '#777777',
};
export const BUTTON_TITLE_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontFamily: Fonts.SFProRounded.Bold,
};
