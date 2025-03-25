import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font14,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  flexDirection: 'row',
  borderColor: '#77777730',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderWidth: 1,
  paddingVertical: isTablet() ? '2.5%' : '4%',
  paddingHorizontal: isTablet() ? '4%' : '3%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: isTablet() ? '2%' : '2%',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: 'rgba(0.14, 0.15, 0.18, 1.0)',
  alignSelf: 'center',
  marginLeft: isTablet() ? '2.5%' : '1%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(48) : getWidth(33),
  height: isTablet() ? getWidthTab(30) : getWidth(20),
  alignSelf: 'center',
};
export const DELETEICON: ImageStyle = {
  width: isTablet() ? getWidthTab(25) : getWidth(13),
  height: isTablet() ? getWidthTab(30) : getWidth(17),
  marginRight: isTablet() ? getWidthTab(10) : getWidth(9),
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
};

export const INNER_CONTAINER_TOP: ViewStyle = {
  flexDirection: 'row',
};
export const INNER_CONTAINER_MEDIUM: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: isTablet() ? '3%' : '3%',
};
export const INPUT_OUTER_CONTAINER: ViewStyle = {
  marginLeft: 0,
  width: '30%',
  marginTop: '1.6%',
  marginBottom: isTablet() ? '2%' : '0%',
};
export const INPUT_INNER_CONTAINER: ViewStyle = {
  width: isTablet() ? (windowWidth / 834) * 225 : (windowWidth / 375) * 87,
  height: isTablet() ? (windowWidth / 834) * 60 : (windowWidth / 375) * 27,
  borderRadius: isTablet() ? getWidthTab(8) : getWidth(5),
};
export const CARD_HOLDER: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: 'rgba(0.14, 0.15, 0.18, 1.0)',
  alignSelf: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const IMAGE: ImageStyle = {
  width: isTablet() ? getWidthTab(32) : getWidth(17),
  height: isTablet() ? getWidthTab(32) : getWidth(17),
  marginRight: isTablet() ? getWidthTab(8) : getWidth(5),
};
export const CVV_INPUT: TextStyle = {
  fontSize: isTablet() ? Font10 : Font10,
  fontWeight: '400',
  color: '#777777',
  marginLeft: isTablet() ? '15%' : '15%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LABEL: TextStyle = {
  height: 0,
};
