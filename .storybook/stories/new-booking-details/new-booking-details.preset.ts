import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font13,
  Font14,
  Font15,
  Font16,
  Font17,
  Font18,
  Font20,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
  padding: isTablet() ? getWidthTab(40) : getWidth(25),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: '#F4F4F4',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  padding: isTablet() ? getWidthTab(15) : getWidth(15),
};

export const SUB_INNER_CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? '2%' : '4%',
};

export const TITLE_CONTAINER: ViewStyle = {
  marginBottom: isTablet() ? getWidthTab(20) : getWidth(16),
};

export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const IMAGE: ImageStyle = {
  width: isTablet() ? (40 * windowWidth) / 834 : (25 * windowWidth) / 375,
  height: isTablet() ? (40 * windowWidth) / 834 : (25 * windowWidth) / 375,
  tintColor: 'black',
};

export const SUB_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: '#F4F4F4',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  padding: isTablet() ? getWidthTab(15) : getWidth(15),
  marginHorizontal: '0%',
  flex: 1,
  marginEnd: isTablet() ? '3%' : '3%',
};

export const Row_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginTop: isTablet() ? '5%' : '5%',
};

export const SUB_CONTAINER2: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: '#F4F4F4',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  padding: isTablet() ? getWidthTab(15) : getWidth(15),
  marginHorizontal: '0%',
  flex: 1,
  marginStart: isTablet() ? '3%' : '3%',
};
export const HEADER_TEXT: TextStyle = {
  color: '#7A7A7A',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font13 : Font16,
  fontWeight: '500',
};

export const VALUE_TEXT: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font13 : Font15,
  marginTop: isTablet() ? '4%' : '5%',
  fontWeight: '800',
};

export const SUB_HEADER_TEXT: TextStyle = {
  color: '#7A7A7A',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font14,
  fontWeight: '500',
};

export const SUB_VALUE_TEXT: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font14,
  marginTop: isTablet() ? '4%' : '5%',
  fontWeight: '800',
};
