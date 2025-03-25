import {ViewStyle, TextStyle, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font13,
  Font14,
  Font18,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  paddingTop: '3%',
  paddingBottom: '12%',
  alignItems: 'center',
  justifyContent: 'center',
};
export const TITLE: TextStyle = {
  fontFamily:isTablet()?Fonts.SFProRounded.Bold: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font13 : Font18,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlign: 'center',
  // backgroundColor: 'red',
  marginHorizontal: '7%',
};
export const TITLE_CONTAINER: ViewStyle = {
  alignItems: 'center',
  marginTop: isTablet() ? '3.5%' : '9%',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
};
export const TEXT_CONTAINER: ViewStyle = {
  marginVertical: isTablet() ? '4%' : '6%',
  marginHorizontal: '7%',
};
export const BUTTON_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? '4%' : '1%',
  // backgroundColor: 'red',
  width: '100%',
};
export const BUTTON_YES: TextStyle = {
  // alignItems: 'center',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  justifyContent: 'center',
  // marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(25),
};
export const NO_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font12 : Font18,
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const YES_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font12 : Font18,
  color: colors.background,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON: ViewStyle = {
  marginTop: isTablet() ? '4%' : '4%',
  backgroundColor: colors.white,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  justifyContent: 'center',
  // marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(25),
};
export const DIVIDER: ViewStyle = {
  width: isTablet() ? '8%' : '12.8%',
  alignSelf: 'center',
  marginTop: '2%',
};
