import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font11,
  Font12,
  Font13,
  Font16,
  Font18,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
  windowHeight,
  windowWidth,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  marginHorizontal: isTablet() ? '5%' : '3.5%',
  width: isTablet() ? '90%' : '93%',
  paddingTop: '1%',
  paddingHorizontal: isTablet() ? '1%' : '1%',
  marginTop: isTablet() ? '1.5%' : '2.5%',
  paddingBottom: '1%',
};
export const CONTAINER_BIRTH: ViewStyle = {
  marginHorizontal: '3.5%',
  width: '93%',
  height: 50,
  alignSelf: 'center',
  bottom: 0,
  paddingTop: '1%',
  paddingHorizontal: '1%',
  // backgroundColor: 'green',
  marginTop: '2.5%',
  paddingBottom: '1%',
  position: 'absolute',
};
export const INNER_CONTAINER: ViewStyle = {
  // height: isTablet() ? getWidthTab(56) : getWidth(49),
  height: isTablet() ? (windowWidth / 100) * 8 : (windowWidth / 100) * 13,
  paddingLeft: isTablet() ? getWidthTab(20) : getWidth(10),
};
export const INNER_DASHED_CONTAINER: ViewStyle = {
  height: isTablet() ? getWidthTab(56) : getWidth(45),
  borderStyle: 'dashed',
  //   backgroundColor: 'indigo',
};
export const HEADER_CONTAINER: ViewStyle = {
  ...CONTAINER,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font18,
  color: '#1A1E25',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LABEL: TextStyle = {
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font11 : Font16,
};
export const INPUT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  // color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontWeight: '400',
};
export const INPUTCONDITION: TextStyle = {
  position: 'absolute',
  color: 'red',
  top: isTablet() ? getWidthTab(30) : getWidth(15),
  left: isTablet() ? '37.5%' : '50%',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  includeFontPadding: false,
};
export const ADD_ICON: ImageStyle = {
  width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
  height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
};
export const BUTTON_CONTAINER: ViewStyle = {
  alignItems: 'center',
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
  height: isTablet() ? getWidthTab(60) : getWidth(45),
  width: isTablet() ? getWidthTab(734) : getWidth(313),
  justifyContent: 'center',
  marginHorizontal: isTablet() ? getWidthTab(50) : getWidth(30),
  // marginTop: '6%',
};
export const BUTTON_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font12 : Font18,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const buttonContainer: ViewStyle = {
  flexDirection: 'row',
  flex: 2,
  alignItems: 'center',
  marginVertical: '8%',
  marginHorizontal: isTablet() ? '6%' : '5%',
};
export const buttonInnerContainer: ViewStyle = {
  flex: 1,
  paddingEnd: isTablet() ? '1%' : '3%',
};
export const buttonInnerContainer2: ViewStyle = {
  flex: 1,
  paddingStart: '3%',
};
export const btnTextTablet: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: Font12,
  color: colors.white,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const btnText: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: Font18,
  color: colors.white,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const sButton: ViewStyle = {
  backgroundColor: colors.secondary,
  borderRadius: getWidth(10),
  height: (windowWidth / 100) * 13,
  marginHorizontal: '0%',
  width: '100%',
};
export const sButtonTablet: ViewStyle = {
  backgroundColor: colors.secondary,
  borderRadius: getWidth(5),
  height: (windowWidth / 100) * 7,
  justifyContent: 'center',
  marginHorizontal: '0%',
  width: '100%',
};

export const Button: ViewStyle = {
  backgroundColor: colors.secondary,
  borderRadius: getWidth(10),
  height: (windowWidth / 100) * 12,
  marginHorizontal: '0%',
  marginTop: '6%',
  width: '100%',
};
export const ButtonTablet: ViewStyle = {
  backgroundColor: colors.secondary,
  borderRadius: getWidth(5),
  height: (windowWidth / 100) * 8,
  justifyContent: 'center',
  marginHorizontal: '0%',
  marginTop: '4%',
  marginBottom: '2%',
  width: '100%',
};

export const sButtonTitle: TextStyle = {
  fontSize: isTablet() ? Font9 : Font13,
};

export const modal: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
};

export const scrollableModal: ViewStyle = {
  height: isTablet() ? (windowHeight * 60) / 110 : (windowHeight * 70) / 110,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const DIVIDER: ViewStyle = {
  width: '12%',
  marginTop: '5.5%',
  marginBottom: '2%',
  alignSelf: 'center',
};
