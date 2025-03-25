import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font11,
  Font14,
  Font16,
  Font24,
  Fonts,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginTop: isTablet() ? '3%' : '5%',
};
export const INNER_CONTAINER: ViewStyle = {
  paddingBottom: '10%',
  paddingHorizontal: '5%',
  borderRadius: 4,
  backgroundColor: '#FBFBFB',
};
export const IMAGE: ImageStyle = {
  width: isTablet() ? getWidthTab(233) : (windowWidth / 375) * 80,
  height: isTablet() ? getWidthTab(233) : (windowWidth / 375) * 80,
  alignSelf: 'center',
  marginTop: '-15%',
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontWeight: '700',
  fontSize: isTablet() ? Font14 : Font24,
  color: colors.textPrimary,
  alignSelf: 'center',
  marginTop: isTablet() ? '4%' : '5%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const MESSAGE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontWeight: '400',
  fontSize: isTablet() ? Font11 : Font16,
  color: colors.textPrimary,
  alignSelf: 'center',
  marginTop: isTablet() ? '3%' : '3%',
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
};
