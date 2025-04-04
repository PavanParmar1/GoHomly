import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font14,
  Font18,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  // marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
  // borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  // paddingVertical: isTablet() ? getWidthTab(30) : getWidth(20),
  paddingHorizontal: isTablet() ? getWidthTab(5) : getWidth(5),
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: isTablet() ? getWidthTab(5) : getWidth(6),
};

export const TEXT_BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '95%',
  marginBottom: isTablet() ? 0 : '2%',
  marginHorizontal: isTablet() ? '2%' : '3%',
};

export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  alignSelf: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SEE_ALL_BUTTON: TextStyle = {
  color: colors.textSecondary,
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Regular,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const BUTTON_TEXT: TextStyle = {
  textAlignVertical: 'center',
  marginHorizontal: isTablet() ? '1%' : '1.5%',
  fontSize: isTablet() ? Font9 : Font14,
  color: 'black',
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
};
