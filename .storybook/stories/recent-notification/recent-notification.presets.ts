import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font14,
  Font16,
  Fonts,
  windowWidth,
  getWidth,
  Font11,
  Font10,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(15),
  marginBottom: isTablet() ? getWidthTab(30) : getWidth(10),
  // height: isTablet() ? getWidthTab(48) : getWidth(48),
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
};
export const TEXT_CONTAINER: ViewStyle = {
  marginHorizontal: '3%',
  flex: 1,
  justifyContent: 'space-between',
};
export const BADGE_CONTAINER: ViewStyle = {
  marginLeft: 0,
  marginTop: isTablet() ? 5 : 3,
};
export const BADGE_INNER_CONTAINER: ViewStyle = {
  marginTop: '1%',
};
export const TITLE: TextStyle = {
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '600',
  // marginTop: '1.5%',
  flex: 1,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TITLE_SHIMMER: TextStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(15),
  width: isTablet() ? '20%' : '35%',
};
export const INFO: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  marginTop: '2%',
  // width:'100%',
  // flex: 1,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const INFO_SHIMMER: TextStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(15),
  width: isTablet() ? '20%' : '100%',
  marginTop: '2%',
};
export const IMAGE: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 50 : (windowWidth / 375) * 32,
  height: isTablet() ? (windowWidth / 834) * 50 : (windowWidth / 375) * 32,
  resizeMode: 'contain',
  borderRadius: isTablet()
    ? (windowWidth / 834) * 50
    : (windowWidth / 375) * 32,
  marginTop: isTablet() ? 5 : 3,
};
export const IMAGE_SHIMMER: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 50 : (windowWidth / 375) * 32,
  height: isTablet() ? (windowWidth / 834) * 50 : (windowWidth / 375) * 32,
  resizeMode: 'contain',
  borderRadius: isTablet()
    ? (windowWidth / 834) * 50
    : (windowWidth / 375) * 32,
};
