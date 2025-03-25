import {Platform, TextStyle, ViewStyle} from 'react-native';

import {
  Font18,
  Fonts,
  windowWidth,
  Font13,
  Font12,
  Font10,
  getWidthTab,
  getWidth,
  Font9,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {isTablet} from 'react-native-device-info';
const imageWidth = (40 * windowWidth) / 375;
const imageHeight = (40 * windowWidth) / 375;
const imageWidthTab = (70 * windowWidth) / 834;
const imageHeightTab = (70 * windowWidth) / 834;
export const OUTER_CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(60) : '3.5%',
  width: isTablet() ? getWidthTab(714) : '93%',
  paddingVertical: isTablet() ? '3%' : '5%',
  // paddingHorizontal: '2%',
  backgroundColor: colors.background,
  shadowOpacity: 1,
  shadowColor: '#00000009',
  marginBottom: '3%',
  shadowOffset: {height: 5, width: 5},
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  elevation: 2,
  borderColor: '#DADADA',
  borderWidth: Platform.OS === 'android' ? (isTablet() ? 0.56 : 0.5) : 0.2,
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  paddingVertical: isTablet() ? '6%' : '9%',
  paddingHorizontal: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: isTablet() ? '4%' : '3%',
  // paddingBottom: '1%',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  height: isTablet() ? getWidthTab(70) : (windowWidth / 100) * 13.5,
};
export const TEXT_CONTAINER: ViewStyle = {
  flexDirection: 'column',
  marginLeft: isTablet() ? '2%' : '3%',
  width: isTablet() ? '78%' : '70%',
  height: isTablet() ? getWidthTab(60) : (windowWidth / 100) * 11,
  paddingVertical: 0,
  // backgroundColor: 'pink',
  justifyContent: 'center',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TITLE_STYLE: TextStyle = {
  ...TEXT,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  marginHorizontal: '4%',
  marginBottom: isTablet() ? '1%' : '3%',
};
export const PRIMARY_TEXT_STYLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font10 : Font13,
  fontWeight: '500',
  color: colors.textPrimary,
  // backgroundColor: 'pink'
};
export const SECONDARY_TEXT_STYLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font9 : Font13,
  fontWeight: '400',
  color: 'rgba(119, 119, 119, 0.7)',
  // backgroundColor: 'red'
};
export const LEFT_ICON_STYLE: ViewStyle = {
  width: isTablet() ? imageWidthTab : imageWidth,
  height: isTablet() ? imageHeightTab : imageHeight,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.secondaryLight,
  marginRight: isTablet() ? '1%' : '2%',
  marginLeft: isTablet() ? '1%' : '1%',
  borderRadius: isTablet() ? imageWidthTab / 2 : imageWidth / 2,
};
export const ICON_LEFT = {
  width: isTablet() ? imageWidthTab / 2 : imageWidth / 2,
  height: isTablet() ? imageHeightTab / 2 : imageHeight / 2,
  tintColor: colors.secondary,
};
export const RIGHT_ICON_STYLE: ViewStyle = {
  width: isTablet() ? imageWidthTab : imageWidth,
  height: isTablet() ? imageHeightTab : imageHeight,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: isTablet() ? imageWidthTab / 2 : imageWidth / 2,
};
export const ICON_RIGHT = {
  width: isTablet() ? imageWidthTab / 2 : imageWidth / 2,
  height: isTablet() ? imageHeightTab / 2 : imageHeight / 2,
  tintColor: colors.secondary,
};
