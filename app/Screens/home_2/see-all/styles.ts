import {ViewStyle, TextStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme';
import {
  Font18,
  Fonts,
  windowWidth,
  getWidth,
  Font11,
  Font12,
  Font16,
  getWidthTab,
  Font17,
} from '../../../utils/common';

const iconSize = (569 * windowWidth) / 375;
export const OUTER_CONTAINER: ViewStyle = {
  marginHorizontal: '3.5%',
  width: '93%',
  paddingVertical: '5%',
  paddingHorizontal: '2%',
  backgroundColor: colors.background,
  shadowOpacity: 1,
  shadowColor: '#CFCFCF',
  marginBottom: 0,
  borderRadius: 8,
};
export const wrapper: ViewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
};
export const screenTitle: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font18,
  color: colors.background,
  alignSelf: 'center',
  marginLeft: '40%',
  position: 'absolute',
};
export const navbarContainer: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(60) : '3.5%',
  marginTop: isTablet() ? '3%' : '10%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '7%',
};

export const navbarHeader: TextStyle = {
  marginLeft: 5,
  height: 44,
  width: 44,
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const navbarImage: ViewStyle = {width: 19, height: 19};

export const navbarTitle: TextStyle = {
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font12 : Font17,
  color: colors.textPrimary,
};

export const navbarContainerImage = {
  width: isTablet() ? getWidthTab(30) : (windowWidth / 100) * 8,
  height: isTablet() ? getWidthTab(30) : (windowWidth / 100) * 8,
};
export const navbarContainerImageRight = {
  width: isTablet() ? getWidthTab(24) : getWidth(20),
  height: isTablet() ? getWidthTab(24) : getWidth(20),
  margin: '2%',
};
export const navbarContainerOfRightSideImages: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const searchBar = {
  marginTop: '2.5%',
  marginBottom: isTablet() ? getWidthTab(30) : '9%',
};
export const nearbyProperty = {
  flex: 1,
  // marginVertical: '8.5%',
};
export const bgImage: ViewStyle = {
  top: isTablet() ? -150 : 0,
  height: isTablet() ? iconSize - 20 : iconSize - 20,
  width: '100%',
  position: 'absolute',
  backgroundColor: '#9e99c0',
};
export const flatlistView = {
  // paddingBottom: isTablet() ? getWidthTab(30) : 0,
  backgroundColor: 'white',
  borderBottomRightRadius: getWidth(20),
  borderBottomLeftRadius: getWidth(20),
};
export const modalView: ViewStyle = {
  marginHorizontal: 0,
  justifyContent: 'flex-end',
  marginVertical: 0,
};
export const modalTextDivider = {
  width: '50%',
  borderRadius: isTablet() ? 3 : 1.5,
  top: isTablet() ? 20 : 20,
};
export const modalCheckBoxStyle = {
  width: '100%',
  height: isTablet() ? getWidthTab(92) : getWidth(48),
};
export const listWraperStyle: ViewStyle = {
  paddingVertical: isTablet() ? '2%' : '1%',
  paddingLeft: '2%',
  paddingRight: isTablet() ? '2%' : '5%',
  justifyContent: 'space-between',
  height: isTablet() ? getWidthTab(60) : getWidth(32),
};
export const modalContainer = {
  backgroundColor: 'white',
  width: '100%',
  height: isTablet() ? '60%' : '50%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};
export const filterModalContainer = {
  backgroundColor: 'white',
  width: '100%',
  height: '90%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};
export const modalTopDivider: ViewStyle = {
  width: isTablet() ? 90 : 50,
  top: isTablet() ? getWidthTab(20) : getWidth(16),
  alignSelf: 'center',
  borderRadius: isTablet() ? 5 : 2.5,
};
export const modalTextContainer = {
  paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(32),
  height: isTablet() ? getWidthTab(90) : getWidth(60),
  top: isTablet() ? 0 : -16,
};
export const modalTextStyle: TextStyle = {
  height: isTablet() ? getWidthTab(40) : getWidth(30),
  fontSize: isTablet() ? Font11 : Font16,
  fontFamily: isTablet() ? Fonts.SFProRounded.Bold : Fonts.SFProRounded.Regular,
  top: isTablet() ? getWidthTab(10) : getWidth(20),
  width: '50%',
  textAlign: 'center',
};

export const filterModalTextStyle = {
  fontSize: isTablet() ? Font11 : Font16,
  fontFamily: isTablet() ? Fonts.SFProRounded.Bold : Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  paddingHorizontal: 5,
  bottom: 8,
};
export const outerContainer = {
  backgroundColor: 'black',
  flex: 1,
};
export const container = {
  backgroundColor: colors.background,
  alignItems: 'center',
  paddingTop: isTablet() ? getWidthTab(18) : getWidth(35),
  borderBottomLeftRadius: getWidth(20),
  borderBottomRightRadius: getWidth(20),
  flex: 1,
};
