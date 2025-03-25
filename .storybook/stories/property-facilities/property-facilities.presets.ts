import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font14,
  getWidth,
  Font10,
  getWidthTab,
} from '../../../app/utils/common';
export const ITEM_STYLE: ViewStyle = {
  backgroundColor: '#F6F6F6',
  marginHorizontal: isTablet() ? getWidthTab(10) : 0,
  marginVertical: isTablet() ? getWidthTab(5) : 0,
  paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(24),
  paddingVertical: isTablet() ? getWidthTab(16) : getWidth(10),
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(10),
  borderColor: 'transparent',
};
export const ITEM_STYLE_SELECTED: ViewStyle = {
  ...ITEM_STYLE,
  backgroundColor: colors.secondary,
};
export const LABEL_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LABEL_STYLE_SELECTED: TextStyle = {
  ...LABEL_STYLE,
  color: colors.background,
};
