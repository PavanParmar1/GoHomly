import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Font10, Font14, Font8, Font9, Fonts, getWidth, getWidthTab} from '../../../app/utils/common';

export const INNER_CONTAINER: ViewStyle = {
  alignItems: 'center',
};
export const TEXT_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginTop: isTablet() ? getWidthTab(20) : getWidth(10),
  justifyContent: 'space-between',
};
export const MARKER: ViewStyle = {
  width: isTablet() ? getWidthTab(32) : getWidth(32),
  height: isTablet() ? getWidthTab(32) : getWidth(32),
  borderColor: colors.textSecondary,
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(16),
  borderWidth: isTablet() ? getWidthTab(2) : getWidth(2),
  backgroundColor: colors.background,
};
export const TRACK_STYLE: ViewStyle = {
  height: isTablet() ? getWidthTab(5) : getWidth(5),
};
export const TRACK_SELECTED: ViewStyle = {
  backgroundColor: colors.textSecondary,
};
export const TRACK_UNSELECTED: ViewStyle = {
  backgroundColor: '#77777730',
};
export const TEXT: TextStyle = {
  fontSize: isTablet() ? Font8 : Font14,
  fontFamily:Fonts.SFProRounded.Bold,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TEXT1: TextStyle = {
  fontSize: isTablet() ? Font8 : Font14,
  fontFamily:Fonts.SFProRounded.Regular,
  color: '#98A2B3',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const textContainer: ViewStyle = {
  borderWidth: 0.5,
  borderColor: 'black',
  borderRadius: 5,
  paddingHorizontal: 20,
  alignItems: 'center',
  paddingVertical: 5,
};
