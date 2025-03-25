import {TextStyle, ViewStyle} from 'react-native';
import {
  Font10,
  Font12,
  Font13,
  Font14,
  Font18,
  Font9,
  Fonts,
  windowWidth,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {isTablet} from 'react-native-device-info';

const imageWidth = isTablet()
  ? (30 * windowWidth) / 834
  : (24 * windowWidth) / 375;
const imageHeight = isTablet()
  ? (30 * windowWidth) / 834
  : (24 * windowWidth) / 375;
export const CONTAINER: ViewStyle = {
  // marginHorizontal: '3.5%',
  marginTop: isTablet() ? '3%' : '1%',
  marginBottom: isTablet() ? '1%' : '3%',
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: isTablet() ? '1%' : '1%',
};
export const INNER_CONTAINERT: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const DATE_CONTAINER: ViewStyle = {
  flexDirection: isTablet() ? 'row' : 'column',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
};
export const TITLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font12 : Font18,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUBTITLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font9 : Font13,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DATEANDTIME: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font9 : Font13,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ICON = {
  width: imageWidth,
  height: imageHeight,
  marginRight: isTablet() ? '1%' : '3%',
  marginBottom: isTablet() ? '8%' : '5%',
};
export const DIVIDER: ViewStyle = {
  marginTop: '7%',
};
