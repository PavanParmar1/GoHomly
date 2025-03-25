import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font15,
  Font17,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const OUTER_CONTAINER: ViewStyle = {
  backgroundColor: '#FBFBFB',
};
export const CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(60) : (windowWidth / 375) * 20,
  marginBottom: isTablet() ? getWidthTab(30) : (windowWidth / 375) * 36,
  marginTop: 0,
};
export const TITLE_CONTAINER: ViewStyle = {
  marginBottom: isTablet() ? getWidthTab(30) : getWidth(25),
  backgroundColor: colors.background,
  marginTop: isTablet() ? getWidthTab(30) : getWidth(25),
  paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(20),
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font17,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: isTablet() ? getWidthTab(20) : (windowWidth / 375) * 20,
};
export const CHARGE_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: isTablet() ? getWidthTab(20) : (windowWidth / 375) * 13,
};
export const FEE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '400',
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TOTAL: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '600',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const REFUND: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '600',
  color: '#34C759',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DIVIDER: ViewStyle = {
  marginTop: isTablet() ? '2%' : '4%',
};
export const DASH: TextStyle = {
  color: colors.textSecondary,
};
