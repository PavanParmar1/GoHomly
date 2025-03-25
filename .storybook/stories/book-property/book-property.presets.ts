import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font18,
  Font16,
  Font14,
  Font8,
  getWidth,
  Font12,
  Font11,
  Font10,
  getWidthTab,
  Font13,
} from '../../../app/utils/common';

export const WRAPPER: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16),
};
export const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2.5%',
};
export const HEADER_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? '1%' : '3%',
  marginBottom: isTablet() ? '2%' : '2%',
  alignItems: 'center',
  flexDirection: 'row',
};
export const FOOTER_CONTAINER: ViewStyle = {
  marginVertical: isTablet() ? '3%' : '5%',
};
export const FOOTER_DATA_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: '5%',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: '#777777',
  fontSize: isTablet() ? Font11 : Font16,
  alignSelf: 'center',
  fontWeight: '600',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '800',
  includeFontPadding: false,
  flex: 1,
  textAlignVertical: 'center',
};

export const SUB_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font10 : Font14,
  marginBottom: isTablet() ? '2%' : '3%',
  fontWeight: '400',
  includeFontPadding: false,
  flex: 1,
  textAlignVertical: 'center',
};

export const CHARGES: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: '#777777',
  alignSelf: 'center',
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const AMOUNT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON: TextStyle = {
  fontSize: isTablet() ? 15 : Font8,
  textDecorationLine: 'underline',
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontWeight: '800',
};
export const CHARGE_CONTAINER: TextStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
};
export const BUTTON_CONTAINER: TextStyle = {
  marginVertical: isTablet() ? '4%' : '6%',
  // alignItems: 'center',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  width: isTablet() ? getWidthTab(714) : '100%',
  justifyContent: 'center',
  marginHorizontal: isTablet() ? 0 : getWidth(0),
  marginBottom: isTablet() ? '5%' : '10%',
};
export const BUTTON_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DIVIDER: ViewStyle = {
  width: isTablet() ? '8%' : '12.8%',
  alignSelf: 'center',
  marginVertical: getWidth(20),
};
export const MODAL_STYLE: ViewStyle = {
  marginHorizontal: 0,
  justifyContent: 'flex-end',
  marginBottom: 0,
};
