import {StyleSheet, Platform} from 'react-native';
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
  Font24,
  Font11,
  Font10,
  getWidthTab,
  Font9,
} from '../../../utils/common';
const Width = isTablet() ? windowWidth / 834 : windowWidth / 375;

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  navbarFilterImage: {marginHorizontal: 0, width: 18, height: 18},

  dateContainer: {
    marginTop: isTablet() ? getWidthTab(60) : getWidth(16),
    height: isTablet() ? getWidthTab(130) : getWidth(100),
    paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },
  priceRangeContainer: {
    height: isTablet() ? getWidthTab(160) : getWidth(100),
    paddingTop: isTablet() ? getWidthTab(20) : getWidth(16),
    paddingBottom: isTablet() ? getWidthTab(30) : getWidth(16),
  },

  propertyTypeContainer: {
    height: isTablet() ? getWidthTab(130) : getWidth(100),
    paddingHorizontal: isTablet() ? getWidthTab(35) : getWidth(16),
    paddingTop: isTablet() ? getWidthTab(35) : getWidth(16),
  },
  filterModalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingRight: isTablet() ? getWidthTab(10) : 0,
  },
  modalTopDivider: {
    width: isTablet() ? getWidthTab(90) : getWidth(50),
    top: isTablet() ? getWidthTab(20) : getWidth(16),
    alignSelf: 'center',
    borderRadius: isTablet() ? getWidthTab(5) : getWidth(2.5),
  },
  modalTextContainer: {
    paddingHorizontal: 32,
    height: 60,
    top: -16,
  },
  modalTextStyle: {
    height: 30,
    font: isTablet() ? Font11 : Font16,
    top: 20,
    width: '50%',
    textAlign: 'center',
  },

  filterModalTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font16,
    fontWeight: isTablet() ? '500' : '500',
    color: colors.textPrimary,
    // paddingHorizontal: 5,
    bottom: isTablet() ? getWidthTab(0) : getWidth(8),
  },
  priceRangeWrapper: {
    height: isTablet() ? getWidthTab(390) : getWidth(260),
    paddingHorizontal: isTablet() ? getWidthTab(35) : getWidth(16),
    paddingTop: isTablet() ? getWidthTab(20) : getWidth(24),
    paddingBottom: isTablet() ? getWidthTab(30) : getWidth(16),
    marginTop: isTablet() ? getWidthTab(30) : 0,
    marginBottom: isTablet() ? getWidthTab(20) : 0,
  },
  roomsAndBedsTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font16,
    fontWeight: isTablet() ? '500' : '500',
    color: colors.textPrimary,
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },

  filterPriceTextStyle: {
    marginTop: '1%',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font15,
    fontWeight: '400',
    color: colors.textSecondary,
    paddingTop: isTablet() ? getWidthTab(30) : getWidth(16),
    bottom: isTablet() ? getWidthTab(30) : getWidth(16),
  },

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
    fontWeight: '400',
  },
  facilities: {
    paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
    marginVertical: isTablet() ? getWidthTab(20) : getWidth(24),
  },
  ratingStyle: {
    borderRadius: getWidth(35),
    width: isTablet() ? '94%' : '92%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: isTablet() ? getWidthTab(60) : getWidth(65),
    flexDirection: 'row',
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },

  ratingText: {
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Platform.OS === 'ios' ? Font28 : Font24,
    marginTop: isTablet() ? getWidthTab(4) : getWidth(3),
    width: isTablet()
      ? getWidthTab(30)
      : Platform.OS === 'ios'
        ? 26
        : getWidth(40),
    marginRight: isTablet() ? getWidthTab(10) : getWidth(10),
  },
  buttonsWrapper: {
    paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
    paddingVertical: isTablet() ? getWidthTab(50) : getWidth(20),
    height: isTablet() ? getWidthTab(190) : getWidth(100),
    marginTop: isTablet() ? getWidthTab(30) : getWidth(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: isTablet() ? getWidthTab(10) : (windowWidth / 375) * 26,
    height: isTablet() ? getWidthTab(60) : (windowWidth / 375) * 45,
    width: isTablet() ? getWidthTab(347) : (windowWidth / 375) * 150,
  },
  buttonTitleStyle: {
    fontSize: isTablet() ? Font10 : Font14,
    textAlign: 'center',
    fontWeight: '700',
  },
  resetButton: {
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetImageContainer: {
    height: isTablet() ? getWidthTab(30) : getWidth(20),
    width: isTablet() ? getWidthTab(30) : getWidth(20),
    resizeMode: 'contain',
    marginHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
  },
  resetTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  labels: {
    color: colors.textPrimary,
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  containerTablet: {
    marginTop: isTablet() ? '3%' : '4%',
    marginHorizontal: '20%',
    paddingHorizontal: '1%',
    width: '60%',
  },
  containerPhone: {
    marginTop: '4%',
  },
  inputContainerTablet: {
    height: (windowWidth / 100) * 8,
  },
  imageIcon: {
    width: isTablet() ? getWidthTab(37) : getWidth(22),
    height: isTablet() ? getWidthTab(37) : getWidth(22),
  },
  iconContainerStyle: {
    // marginRight: isTablet() ? getWidthTab(5) : getWidth(5),
    opacity: 0.3,
  },
  inputStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  disabledInput: {
    backgroundColor: colors.background,
  },
  vaccinationTouch: {
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
  },
});
