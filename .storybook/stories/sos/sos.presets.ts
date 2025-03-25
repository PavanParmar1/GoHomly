import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font14,
  Font15,
  Font16,
  Font18,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  marginTop: isTablet() ? getWidthTab(20) : getWidth(20),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  
};

export const IMAGE: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 20,
  height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 20,
  marginVertical: isTablet() ? '2%' : '4%',
  marginStart: isTablet() ? '5%' : '5%',
};

export const HEADER: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font12 : Font16,
  color: 'black',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginVertical: isTablet() ? '4%' : '5%',
  marginHorizontal: isTablet() ? '5%' : '5%',
};

export const BUTTON_TEXT: TextStyle = {
  textAlignVertical: 'center',
  marginHorizontal: isTablet() ? '2%' : '3%',
  fontSize: isTablet() ? Font10 : Font15,
  color: 'black',
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
};
