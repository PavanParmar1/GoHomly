import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font18,
  Fonts,
  windowWidth,
  getWidth,
  Font11,
  Font12,
  Font16,
  getWidthTab,
  Font10,
  Font14,
  Font28,
  Font15,
  Font20,
  Font24,
} from '../../utils/common';

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
  position: 'absolute',
};
export const navbarContainer: ViewStyle = {
  marginHorizontal: isTablet() ? getWidthTab(60) : '3.5%',
  marginTop: isTablet() ? getWidthTab(50) : getWidth(26),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '7%',
};
export const navbarContainerImage = {
  width: isTablet() ? getWidthTab(30) : getWidth(24),
  height: isTablet() ? getWidthTab(30) : getWidth(24),
};
export const navbarContainerImageRight = {
  width: isTablet() ? getWidthTab(24) : getWidth(20),
  height: isTablet() ? getWidthTab(24) : getWidth(20),
  margin: '10%',
};
export const navbarContainerOfRightSideImages: ViewStyle = {
  flexDirection: 'row',
  marginLeft: isTablet() ? getWidthTab(630) : getWidth(290),
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
  // height: isTablet() ? getWidthTab(92) : getWidth(48),
  // backgroundColor: 'black',
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
  // height: isTablet() ? '70%' : '50%',
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
  fontFamily: Fonts.SFProRounded.Bold,
  height: isTablet() ? getWidthTab(40) : getWidth(30),
  fontSize: isTablet() ? Font11 : Font16,
  top: isTablet() ? getWidthTab(10) : getWidth(20),
  width: '50%',
  textAlign: 'center',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const filterModalTextStyle = {
  fontFamily: isTablet() ? Fonts.SFProRounded.Bold : Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font11 : Font16,
  color: colors.textPrimary,
  paddingHorizontal: 5,
  bottom: 8,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SortingBack = {
  flexDirection: 'row',
  marginHorizontal: isTablet() ? getWidthTab(59) : getWidth(20),
  paddingLeft: isTablet() ? getWidthTab(35) : getWidth(22),
  paddingRight: isTablet() ? getWidthTab(35) : getWidth(17),
  alignItems: 'center',
  height: isTablet() ? getWidthTab(80) : getWidth(50),
  borderRadius: isTablet() ? getWidthTab(12) : getWidth(8),
  justifyContent: 'space-between',
};

export const SortingText = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font10 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SortingImage = {
  height: isTablet() ? getWidthTab(45) : getWidth(28),
  width: isTablet() ? getWidthTab(45) : getWidth(28),
};

export const Suggestion: TextStyle = {
  fontSize: isTablet() ? Font12 : Font15,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.white,
  marginTop: 3,
  includeFontPadding: false,
};

export const TextSearched: TextStyle = {
  fontSize: isTablet() ? Font14 : Font20,
  fontFamily: Fonts.SFProRounded.SemiBold,
  color: colors.white,
  height: isTablet() ? getWidthTab(130) : getWidth(100),
  includeFontPadding: false,
};

export const Something: TextStyle = {
  fontSize: isTablet() ? Font12 : Font16,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.white,
  includeFontPadding: false,
};

export const Listening: TextStyle = {
  fontSize: isTablet() ? Font24 : Font28,
  fontFamily: Fonts.SFProRounded.SemiBold,
  color: colors.white,
  marginBottom: isTablet() ? getWidthTab(35) : getWidth(35),
  includeFontPadding: false,
};

export const SearchCircle: TextStyle = {
  height: isTablet() ? getWidthTab(170) : getWidth(100),
  width: isTablet() ? getWidthTab(170) : getWidth(100),
  borderRadius: isTablet() ? getWidthTab(85) : getWidth(50),
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#FFFFFF70',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowRadius: 20,
  shadowOpacity: 1.0,
  marginBottom: isTablet() ? getWidthTab(250) : getWidth(180),
  marginTop: isTablet() ? getWidthTab(160) : getWidth(110),
  alignSelf: 'center',
};

export const CancelButton: ImageStyle = {
  tintColor: colors.white,
  height: isTablet() ? getWidthTab(55) : getWidth(35),
  width: isTablet() ? getWidthTab(55) : getWidth(35),
  alignSelf: 'center',
};

export const SearchDialog: ImageStyle = {
  flex: 1,
  backgroundColor: '#00000099',
  justifyContent: 'center',
};

export const GIFImage: ImageStyle = {
  height: isTablet() ? getWidthTab(100) : getWidth(60),
  width: isTablet() ? getWidthTab(100) : getWidth(60),
};

export const VisibleView: ImageStyle = {
  height: isTablet() ? getWidthTab(130) : getWidth(100),
};
