import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font12,
  Font13,
  Font14,
  Font16,
  Font18,
  Font20,
  Font8,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  // backgroundColor: colors.white,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  // marginVertical: isTablet() ? '5%' : '5%',
};
export const INNER_CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? '2%' : '2%',
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(20),
  padding: isTablet() ? '5%' : '6%',
  backgroundColor: colors.white,
};

export const BUTTON_STYLE: ViewStyle = {
  marginHorizontal: '0%',
  marginTop: isTablet() ? '4%' : '5%',
  borderRadius: isTablet() ? getWidthTab(12) : getWidth(12),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
};

export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font14,
  fontWeight: '400',
  color: colors.background,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const TITLE: TextStyle = {
  marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  marginTop: isTablet() ? '2%' : '3%',
  color: colors.textPrimary,
  fontWeight: '700',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  // lineHeight: 24,
  paddingTop: 0,
  // height: 24,
  textAlign: 'left',
  includeFontPadding: false,
  textAlignVertical: 'center',
  // backgroundColor:'blue',
};

export const HEADER: TextStyle = {
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '600',
  fontFamily: Fonts.SFProRounded.Medium,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginTop: isTablet() ? '1%' : '1%',
};
export const SUBTITLE: TextStyle = {
  fontSize: isTablet() ? Font8 : Font11,
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Regular,
  marginTop: isTablet() ? '2%' : '2%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
