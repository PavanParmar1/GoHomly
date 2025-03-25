import {
  StyleSheet,
  Platform,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme';
import {
  Fonts,
  Font14,
  Font15,
  Font16,
  Font28,
  windowWidth,
  getWidth,
  Font11,
  Font10,
  getWidthTab,
  Font9,
  Font18,
  Font32,
  Font8,
} from '../../../utils/common';
const Width = isTablet() ? windowWidth / 834 : windowWidth / 375;

export const styles = StyleSheet.create({
  priceRangeContainer: {
    height: isTablet() ? getWidthTab(160) : getWidth(100),
    paddingTop: isTablet() ? getWidthTab(20) : getWidth(16),
    paddingBottom: isTablet() ? getWidthTab(30) : getWidth(16),
  },

  priceRangeSlider: {
    marginTop: isTablet() ? getWidthTab(20) : getWidth(11),
  },

  propertyTypeContainer: {
    paddingHorizontal: isTablet() ? getWidthTab(35) : getWidth(16),
  },
  filterModalContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingRight: isTablet() ? getWidthTab(10) : 0,
    paddingTop: isTablet() ? getWidthTab(35) : getWidth(20),
  },

  filterModalTextStyle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font11 : Font18,

    color: colors.textPrimary,
  },
  priceRangeWrapper: {
    paddingHorizontal: isTablet() ? getWidthTab(35) : getWidth(16),
    marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
  },
  roomsAndBedsTextStyle: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font11 : Font18,
    color: colors.textPrimary,
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
    marginBottom: isTablet() ? getWidthTab(18) : getWidth(12),
  },

  textStyle: {
    fontSize: isTablet() ? Font8 : Font14,
    lineHeight: 22,
    color: '#777777',
    textAlignVertical: 'center',
    fontFamily: Fonts.SFProRounded.Regular,
  },
  acoordianTitleTextStyle: {
    fontSize: isTablet() ? Font9 : Font16,
    lineHeight: 22,
    color: '#121212',
    textAlignVertical: 'center',
    fontFamily: Fonts.SFProRounded.SemiBold,
  },
  devider: {marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16)},

  modalTextDivider: {
    width: '50%',
    borderRadius: 1.5,
    top: 20,
  },
  modalCheckBoxStyle: {
    width: '100%',
    height: 48,
  },
  modalView: {
    marginHorizontal: 0,
    justifyContent: 'flex-end',
    marginVertical: 0,
  },
  listViewStyle: {
    paddingHorizontal: 16,
    height: '90%',
    paddingTop: 8,
  },
  listWraperStyle: {
    paddingVertical: '1%',
    paddingLeft: '2%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    height: 32,
  },
  bookProperty: {
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: colors.background,
  },
  inputFieldLarge: {
    backgroundColor: 'transparent',
    marginHorizontal: 0,
    width: '100%',
    marginTop: isTablet() ? Width : Width,
  },
  inputFieldInnerContainer: {
    backgroundColor: colors.white,
    height: isTablet() ? getWidthTab(60) : Width * 45,
  },
  inputFieldText: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font14,
  },
  randerContent: {
    paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
    paddingVertical: isTablet() ? getWidth(6) : getWidth(5.5),
  },
  randerHeader: {
    paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
    paddingVertical: isTablet() ? getWidthTab(8) : getWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingStyle: {
    // borderRadius: getWidth(35),
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: isTablet() ? getWidthTab(60) : getWidth(43),
    flexDirection: 'row',
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },

  ratingText: {
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font15 : Platform.OS === 'ios' ? Font28 : Font32,
    marginRight: isTablet() ? getWidthTab(10) : getWidth(15),
  },
});

const icon_width = isTablet()
  ? (25 * windowWidth) / 834
  : (15 * windowWidth) / 375;
const icon_height = isTablet()
  ? (25 * windowWidth) / 834
  : (15 * windowWidth) / 375;

export const ICON: ImageStyle = {
  width: icon_width,
  height: icon_height,
  tintColor: '#777777',
};

export const modalView: ViewStyle = {
  marginHorizontal: 0,
  justifyContent: 'flex-end',
  marginTop: isTablet() ? getWidthTab(50) : getWidth(80),
  marginBottom: 0,
};

export const filterModalContainer: ViewStyle = {
  width: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: colors.background,
};

export const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
  marginBottom: isTablet() ? getWidthTab(50) : getWidth(50),
  marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidth(50) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_STYLE1: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(50) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  marginRight: isTablet() ? getWidth(6) : getWidth(5),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.secondary,
  textAlignVertical: 'center',
};

export const BUTTON_FONT_STYLE1: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.background,
  textAlignVertical: 'center',
};

export const INNER_CONTAINER: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: isTablet() ? getWidth(6) : getWidth(3),
};

export const BUTTON_TEXT: TextStyle = {
  textAlignVertical: 'center',
  fontSize: isTablet() ? Font9 : Font14,
  color: 'black',
  fontFamily: Fonts.SFProRounded.Bold,
};
