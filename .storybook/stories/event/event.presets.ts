import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font11,
  Font12,
  Font16,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(16),
  borderColor: '#FFFFFF',
  borderWidth: 1,
  shadowRadius: 0,
  shadowColor: '#000000',
  shadowOpacity: 1,
  shadowOffset: {width: 0, height: 0.2},
  marginBottom: isTablet() ? getWidthTab(30) : getWidth(15),
  // width: isTablet() ? getWidthTab(743) : getWidth(344),
  height: isTablet() ? getWidthTab(120) : getWidth(120),
  marginHorizontal: '4%',
  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center',
};
export const CONTAINER1: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(16),
  borderColor: '#FFFFFF',
  borderWidth: 1,
  shadowRadius: 0,
  shadowColor: '#00000050',
  shadowOpacity: 1,
  shadowOffset: {width: 0, height: 1},
  width: isTablet() ? getWidth(270) : getWidth(310),
  marginVertical: isTablet() ? getWidth(3) : getWidth(8),
  marginLeft: getWidth(25),
  height: isTablet() ? getWidthTab(120) : getWidth(112),
  elevation: 3,
  alignItems: 'center',
  justifyContent: 'center',
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  margin: isTablet() ? getWidthTab(8) : getWidth(10),
};
export const DATA_CONTAINER: ViewStyle = {
  flex: 1,
};

export const EVENT_IMAGE: ImageStyle = {
  width: isTablet() ? getWidthTab(83.11) : getWidth(83.11),
  height: isTablet() ? getWidthTab(92) : getWidth(92),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  marginRight: isTablet() ? getWidthTab(25) : getWidth(19.37),
  marginLeft: isTablet() ? getWidthTab(8) : getWidth(2),
};
export const HEART_IMAGE: ImageStyle = {
  width: isTablet() ? getWidthTab(32) : getWidth(17.6),
  height: isTablet() ? getWidthTab(28) : getWidth(15.4),
  marginRight: isTablet() ? getWidthTab(16) : getWidth(5),
  marginTop: isTablet() ? getWidthTab(16) : getWidth(5),
};

export const DATE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  color: colors.textPrimary,
  marginTop: isTablet() ? getWidthTab(6) : getWidth(3),
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DESCRIPTION: TextStyle = {
  marginTop: isTablet() ? getWidthTab(7) : getWidth(7),
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
  color: colors.textSecondary,
};
