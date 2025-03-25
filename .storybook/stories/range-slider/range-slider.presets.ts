import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Font10, Font14, getWidth, getWidthTab} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(90) : getWidth(30),
};
export const INNER_CONTAINER: ViewStyle = {alignItems: 'center'};
export const TEXT_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginHorizontal: isTablet() ? getWidthTab(20) : getWidth(40),
  justifyContent: 'space-between',
};
export const MARKER: ViewStyle = {
  width: isTablet() ? getWidthTab(32) : getWidth(30),
  height: isTablet() ? getWidthTab(32) : getWidth(30),
  borderColor: colors.textSecondary,
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(15),
  borderWidth: isTablet() ? getWidthTab(4) : getWidth(4),
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
export const IMAGE_STYLE: ImageStyle = {
  width: isTablet() ? getWidthTab(657) : getWidth(239),
  height: isTablet() ? getWidthTab(120) : getWidth(51),
  position: 'absolute',
  bottom: '60%',
};
export const TEXT: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
