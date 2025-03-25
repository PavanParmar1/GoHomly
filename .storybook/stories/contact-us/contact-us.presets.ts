import {ViewStyle, TextStyle, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font16,
  Font12,
  Font18,
  Font11,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginBottom: '5%',
};
export const INPUT_CONTAINER: ViewStyle = {
  marginHorizontal: 0,
  width: '100%',
  marginTop: isTablet() ? '2%' : '3%',
};
export const INPUT_CONTAINER_TAB: ViewStyle = {
  paddingHorizontal: isTablet() ? '3%' : '3%',
  width: isTablet()
    ? getWidthTab(700)
    : Platform.OS === 'ios'
      ? getWidth(338)
      : getWidth(338),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
};
export const INPUT_FIELD: ViewStyle = {
  height: isTablet() ? (windowWidth / 834) * 153 : (windowWidth / 375) * 107,
  width: isTablet()
    ? getWidthTab(700)
    : Platform.OS === 'ios'
      ? getWidth(338)
      : getWidth(338),
};
export const INPUT_STYLE: TextStyle = {
  marginVertical: 0,
  alignSelf: 'flex-start',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON_STYLE: ViewStyle = {
  borderStyle: 'dashed',
  width: isTablet()
    ? getWidthTab(700)
    : Platform.OS === 'ios'
      ? getWidth(338)
      : getWidth(338),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  marginHorizontal: isTablet() ? '1%' : '1%',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
};
export const ICON_STYLE: ViewStyle = {
  marginLeft: isTablet()
    ? getWidthTab(465)
    : Platform.OS === 'ios'
      ? getWidth(185)
      : getWidth(200),
  marginRight: 5,
  // alignSelf: 'flex-end',
};
export const SUBMIT_BUTTON_STYLE: ViewStyle = {
  marginTop: isTablet() ? '8%' : '8%',
  marginBottom: isTablet() ? '20%' : '30%',
  marginHorizontal: isTablet() ? '1%' : 0,
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  marginLeft: isTablet() ? '1%' : '1%',
  marginBottom: isTablet() ? '1%' : '3%',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  color: '#77777760',
  marginLeft: isTablet() ? 0 : '1%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LABEL_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUBMIT_BUTTON_CONTAINER: ViewStyle = {
  alignItems: 'center',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  width: isTablet() ? getWidthTab(700) : getWidth(303),
  justifyContent: 'center',
  marginHorizontal: isTablet() ? getWidthTab(0) : getWidth(25),
  // marginTop: isTablet() ? getWidthTab(60) : getWidth(40),
  marginBottom: isTablet() ? getWidthTab(0) : getWidth(40),
};

export const SUBMIT_BUTTON_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '600',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
