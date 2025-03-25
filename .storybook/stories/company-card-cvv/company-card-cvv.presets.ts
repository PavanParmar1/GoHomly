import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font14,
  Fonts,
  getWidthTab,
  getWidth,
  windowWidth,
  Font11,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  borderColor: '#77777740',
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(10),
  borderWidth: 1,
  paddingTop: isTablet() ? '5%' : '4%',
  paddingBottom: isTablet() ? '3%' : '3%',
  paddingHorizontal: isTablet() ? '5%' : '3%',
  marginVertical: isTablet() ? '2.5%' : '2.5%',
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
  height: isTablet() ? (windowWidth / 834) * 65 : (windowWidth / 375) * 35,
  borderRadius: isTablet() ? getWidthTab(8) : getWidth(5),
  borderColor: '#77777730',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  color: 'rgba(0.14, 0.15, 0.18, 1.0)',
  alignSelf: 'center',
  marginLeft: '2.5%',
};
export const CARD_HOLDER: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '500',
  color: 'rgba(0.14, 0.15, 0.18, 1.0)',
  alignSelf: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ICON: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 48 : (windowWidth / 375) * 33,
  height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 20,
  alignSelf: 'center',
};
export const IMAGE: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 32 : (windowWidth / 375) * 20,
  height: isTablet() ? (windowWidth / 834) * 32 : (windowWidth / 375) * 20,
  marginRight: isTablet() ? '0.5%' : '2%',
};
export const CVV_INPUT: TextStyle = {
  fontSize: isTablet() ? Font11 : Font11,
  fontWeight: '400',
  color: '#777777',
  // marginLeft: isTablet() ? '15%' : '15%',
  justifyContent: 'center',
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LABEL: TextStyle = {
  height: 0,
};
