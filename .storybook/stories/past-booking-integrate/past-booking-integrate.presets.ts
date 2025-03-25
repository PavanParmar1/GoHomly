import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font15,
  Font16,
  Font18,
  Font8,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  // width: (windowWidth / 375) * 344,

  width: isTablet() ? getWidthTab(390) : '100%',
  marginBottom: isTablet() ? getWidthTab(20) : (windowWidth / 375) * 30,
  marginHorizontal: isTablet() ? getWidthTab(10) : 0,
  backgroundColor: colors.background,
  borderColor: '#EAECEE',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderWidth: 1,
  shadowOffset: {width: 0, height: 0.5},
  shadowOpacity: 0,
  shadowRadius: 0.9,
  elevation: 1,
};
export const TAB_CONTAINER: ViewStyle = {
  // width: (windowWidth / 375) * 344,

  width: getWidthTab(346),
  height: getWidthTab(310),
  marginBottom: getWidthTab(30),
  marginHorizontal: getWidthTab(10),
  backgroundColor: colors.background,
};
export const INNER_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(0) : (windowWidth / 375) * 22.8,
  marginHorizontal: isTablet() ? getWidthTab(0) : (windowWidth / 375) * 20,
  marginBottom: isTablet() ? '3%' : '6%',
};
export const IMAGE_CONTAINER_TAB: ViewStyle = {
  width: getWidthTab(346),
  height: getWidthTab(208),
  // padding: getWidthTab(14),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.background,
  borderColor: '#EAECEE',
  borderRadius: getWidthTab(10),
  borderWidth: 1,
  shadowOffset: {width: 0, height: 0.5},
  shadowOpacity: 0,
  shadowRadius: 0.9,
};
export const IMAGE_STYLE: ImageStyle = {
  // height: isTablet() ? getWidthTab(30) : getWidth(60),
  //   width: '100%',
  width: isTablet() ? getWidthTab(334) : (windowWidth / 375) * 298,
  height: isTablet() ? getWidthTab(179) : (windowWidth / 375) * 150,
  // resizeMode: 'contain',
  // backgroundColor: '#C4C4C4',
  // borderRadius: isTablet() ? getWidth(5) : getWidth(10),
};
export const ICON_STYLE: ImageStyle = {
  width: isTablet() ? getWidthTab(20) : (windowWidth / 375) * 26,
  height: isTablet() ? getWidthTab(20) : (windowWidth / 375) * 23,
  backgroundColor: '#fff',
  top: isTablet() ? '1%' : '0%',
  resizeMode: 'contain',
  // right: isTablet() ? '40%' : '0%',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font15,
  fontWeight: '400',
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const COUNT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font16,
  fontWeight: '400',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const COST_TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font18,
  fontWeight: '300',
  color: colors.textPrimary,
  marginTop: isTablet() ? '3%' : '5%',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginLeft: '2.5%',
  marginRight: '2.5%',
};
export const COST: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font18,
  fontWeight: '600',
  color: colors.textPrimary,
};
export const ADDRESS: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font15,
  fontWeight: '400',
  color: colors.textPrimary,
  marginTop: isTablet() ? '3%' : '3%',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginLeft: '2.5%',
  marginRight: '2.5%',
};
export const ROW_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: isTablet() ? '4%' : '7%',
  marginLeft: '2.5%',
  marginRight: '2.5%',
  // width: '100%'
};

export const LIKE_HEART_ICON: ImageStyle = {
  width: isTablet() ? getWidthTab(22) : getWidth(21),
  height: isTablet() ? getWidthTab(22) : getWidth(21),
};
