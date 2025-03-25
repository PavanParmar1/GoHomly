import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font12,
  Font16,
  Font17,
  Font19,
  Font7,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.white,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
  paddingTop: isTablet() ? getWidthTab(20) : getWidth(24),
  paddingBottom: isTablet() ? getWidthTab(10) : getWidth(9),
  paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(17),
};
export const TITLE_CONTAINER: ViewStyle = {
  // marginBottom: isTablet() ? getWidthTab(20) : getWidth(20),
};

export const GENERALDATACONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginVertical: isTablet() ? getWidthTab(20) : getWidth(24),
};

export const DATACONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const DATACONTAINER1: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(16),

};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font19,
  fontWeight: '800',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUB_HEADING: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font16,
  fontWeight: '600',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SMALL_DESCRIPTION: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font7 : Font12,
  fontWeight: '600',
  marginVertical: isTablet() ? getWidthTab(6) : getWidth(6),
  color: colors.gray,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font17,
  fontWeight: '700',
  color: 'black',
  marginLeft: '3%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const DIVIDER: ViewStyle = {
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(13),
  marginTop: isTablet() ? getWidthTab(6) : getWidth(3),
};
