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
import {color} from '@rneui/base';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  // marginTop: isTablet() ? getWidthTab(20) : getWidth(20),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  paddingBottom: '10%',
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
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font12 : Font16,
  color: 'black',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginVertical: isTablet() ? '4%' : '3%',
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

export const TAG_STYLE: ViewStyle = {
  paddingHorizontal: isTablet() ? getWidthTab(15) : getWidth(10),
  borderWidth: isTablet() ? getWidthTab(0.5) : getWidth(0.5),
  borderRadius: isTablet() ? getWidthTab(1.5) : getWidth(4),
};

export const TAG_TEX_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font9 : Font12,
  color: 'white',
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(6) : getWidth(10),
  height: isTablet() ? (windowWidth / 90) * 6 : (windowWidth / 90) * 10,
  marginTop: getWidth(5),
  width: isTablet() ? '30%' : '50%',
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_STYLE2: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(6) : getWidth(5),
  height: isTablet() ? (windowWidth / 120) * 6 : (windowWidth / 130) * 10,
  marginTop: getWidth(13),
  width: isTablet() ? '30%' : '45%',
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font14,
  fontFamily: Fonts.SFProRounded.Regular,
  includeFontPadding: false,
  color: colors.background,
  textAlignVertical: 'center',
};

export const ratingContainer: ViewStyle = {
  alignItems: 'flex-start',
  height: isTablet() ? getWidthTab(20) : getWidth(14),
  marginTop:'1%'
};
