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
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  paddingTop: isTablet() ? '5%' : '7%',
  paddingBottom: isTablet() ? '5%' : '7%',
  paddingHorizontal: isTablet() ? '5%' : '5%',
  borderRadius: isTablet() ? getWidthTab(8) : getWidth(4),
  //   backgroundColor: 'green',
  backgroundColor: '#FBFBFB',
};
export const INNER_CONTAINER: ViewStyle = {
  backgroundColor: colors.white,
  marginTop: isTablet() ? '5%' : '5%',
  paddingVertical: isTablet() ? '2%' : '3.5%',
  paddingHorizontal: isTablet() ? '4%' : '4%',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderWidth: 1,
  borderColor: '#77777730',
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '600',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUBTITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const INFO: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
