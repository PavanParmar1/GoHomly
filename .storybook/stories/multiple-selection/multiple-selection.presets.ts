import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font14,
  getWidth,
  getWidthTab,
  Font10,
} from '../../../app/utils/common';
export const CONTAINER: ViewStyle = {
  backgroundColor: '#F6F6F6',
  marginTop: isTablet() ? getWidthTab(20) : getWidth(15),
  marginRight: isTablet() ? getWidthTab(40) : getWidth(20),
  paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(24),
  paddingVertical: isTablet() ? getWidthTab(16) : getWidth(10),
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(10),
};
export const SELECTED_CONTAINER: ViewStyle = {
  ...CONTAINER,
  backgroundColor: colors.secondary,
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SELECTED_TEXT: TextStyle = {
  ...TEXT,
  color: colors.background,
};
