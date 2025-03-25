import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font12,
  Font14,
  Font16,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: 'white',
  borderRadius: isTablet() ? getWidthTab(16) : getWidth(16),
  borderColor: '#77777730',
  borderWidth: Platform.OS === 'android' ? 0.5 : 0.3,
  shadowRadius: 2,
  shadowColor: Platform.OS === 'android' ? '#5A5A5A99' : '#5A5A5A',
  shadowOpacity: 0.1,
  marginTop: Platform.OS === 'android' ? 2 : 0,
  marginLeft: isTablet() ? getWidthTab(13) : getWidth(20),
  marginRight: isTablet() ? getWidthTab(13) : getWidth(20),
  shadowOffset: {width: 0, height: 2},
  marginBottom: isTablet() ? getWidthTab(15) : getWidth(15),
  elevation: 2,
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginHorizontal: isTablet() ? getWidthTab(16) : getWidth(19),
  marginVertical: isTablet() ? getWidthTab(16) : getWidth(16),
  // justifyContent: 'space-between',
  alignItems: 'center',
};
export const DATA_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
};
export const NAME: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  flex: 1,
  paddingTop: getWidth(8),
  includeFontPadding: false,

  textAlignVertical: 'center',
};
export const EMAIL: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textSecondary,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
  flex: 1,
};
export const IMAGE: ImageStyle = {
  width: isTablet() ? getWidthTab(102) : getWidth(64),
  height: isTablet() ? getWidthTab(102) : getWidth(64),
  resizeMode: 'contain',
  marginRight: isTablet() ? getWidthTab(30) : getWidth(16),
  backgroundColor: 'lightgrey',
  borderRadius: 100,
};
export const BUTTON_STYLE: ViewStyle = {
  height: isTablet() ? getWidthTab(57) : getWidth(33),
  width: isTablet() ? getWidthTab(102) : getWidth(60),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderColor: colors.secondary,
  paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
  paddingVertical: isTablet() ? getWidthTab(10) : getWidth(6),
};
export const BUTTON_TITLE: TextStyle = {
  color: colors.secondary,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '600',
  alignSelf: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON_CONTAINER: ViewStyle = {
  width: isTablet() ? getWidthTab(110) : getWidth(65),
};
export const INVITE_BUTTON: ImageStyle = {
  width: isTablet() ? getWidthTab(50) : getWidth(30),
  height: isTablet() ? getWidthTab(50) : getWidth(30),
};
