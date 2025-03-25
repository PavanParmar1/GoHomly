import {ViewStyle, TextStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font12,
  Font17,
  Fonts,
  getWidthTab,
  getWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: '#FBFBFB',
  borderWidth: 1,
  borderColor: '#77777730',
  borderRadius: 8,
  paddingTop: isTablet() ? '3.5%' : '5%',
  paddingHorizontal: isTablet() ? '4%' : '5%',
  paddingBottom: isTablet() ? '3%' : '3%',
};
export const HEADING_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const HEADING: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font17,
  fontWeight: '700',
  color: colors.textPrimary,
  marginTop: isTablet() ? 0 : '1%',
  marginBottom: '2%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON = {
  width: isTablet() ? getWidthTab(30) : getWidth(25),
  height: isTablet() ? getWidthTab(30) : getWidth(25),
};
export const BUTTON_CONTAINER: ViewStyle = {
  width: isTablet() ? getWidthTab(30) : getWidth(25),
  height: isTablet() ? getWidthTab(30) : getWidth(25),
  justifyContent: 'center',
  alignItems: 'center',
};
