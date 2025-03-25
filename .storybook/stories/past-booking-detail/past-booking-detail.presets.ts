import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font15,
  Font18,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
};
export const INNER_CONTAINER: ViewStyle = {
  backgroundColor: '#FBFBFB',
  paddingLeft: isTablet() ? getWidthTab(30) : getWidth(20),
  paddingTop: isTablet() ? getWidthTab(20) : getWidth(25),
  paddingBottom: isTablet() ? getWidthTab(10) : getWidth(9),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderColor: '#77777730',
  borderWidth: 0.5,
};
export const TITLE_CONTAINER: ViewStyle = {
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(16),
};

export const DATACONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(16),
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUB_HEADING: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '600',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '400',
  color: colors.textSecondary,
  marginLeft: '3%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
