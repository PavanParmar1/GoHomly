import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Fonts,
  getWidth,
  Font12,
  getWidthTab,
  Font14,
  windowWidth,
  Font18,
  Font10,
  Font16,
  Font9,
  Font11,
  Font13,
  Font7,
} from '../../utils/common';

export const mainContainer: ViewStyle = {
  backgroundColor: colors.background,
  flex: 1,
};

export const scrollview: ViewStyle = {
  backgroundColor: colors.background,
  paddingBottom: isTablet() ? getWidthTab(66) : getWidth(66),
};

export const INNER_CONTAINER_STYLE: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(20) : getWidth(16),
  paddingHorizontal: isTablet() ? '4%' : getWidth(16),
};

export const FLATLIST_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(20) : getWidth(8),
};
export const HEADER_TEXT_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font18,
  color: colors.textPrimary,
};

export const SERVICES_TOTAL_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font11 : Font16,
  color: colors.textPrimary,
  includeFontPadding: false,
};

export const SERVICES_TEXT_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  color: '#777777',
  includeFontPadding: false,
};

export const HEADER_DES_TEXT_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font13,
  color: colors.textPrimary,
  includeFontPadding: false,
  // marginTop: isTablet() ? getWidthTab(20) : getWidth(7),
};

export const totalInnerConatiner: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: isTablet() ? getWidthTab(15) : getWidth(12),
  backgroundColor: '#faeded',
  paddingHorizontal: isTablet() ? '4%' : getWidth(16),
};

export const rowContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: getWidth(4),
};

export const lableStyle: TextStyle = {
  flex: 1,
  color: colors.textPrimary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const BUTTON_CONTAINER: ViewStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  marginHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(20),
  backgroundColor: colors.background,
};

export const BUTTON_STYLE: ImageStyle = {
  width: '100%',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(12) : getWidth(10),
  // height: isTablet() ? getWidth(25) : getWidth(46),
  height: (windowWidth / 100) * 13,
  marginHorizontal: '0%',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font16,
  fontFamily: Fonts.SFProRounded.Bold,
  includeFontPadding: false,
  color: colors.background,
  textAlignVertical: 'center',
  marginEnd: '5%',
};

export const SERVICE_ITEM_CONTAINER: ViewStyle = {
  paddingVertical: isTablet()
    ? (8 * windowWidth) / 834
    : (9 * windowWidth) / 375,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const SERVICE_ITEM_SUB_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  width: '80%',
};

export const SERVICE_TEXT_STYLE: TextStyle = {
  color: '#777777',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const PRICE_TEXT_STYLE: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TOTAL_PRICE_TEXT_STYLE: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font11 : Font16,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const REMOVE_BTN_TEXT_STYLE: TextStyle = {
  color: colors.secondary,
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font7 : Font9,
  includeFontPadding: false,
  textAlignVertical: 'center',
  textDecorationLine: 'underline',
};
