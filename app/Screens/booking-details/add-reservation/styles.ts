import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../theme';
import {
  Font11,
  Font12,
  Font16,
  Font18,
  Fonts,
  getWidthTab,
  windowWidth,
} from '../../../utils/common';
import {isTablet} from 'react-native-device-info';
export default StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: colors.textPrimary,
    marginTop: isTablet() ? getWidthTab(30) : '8%',
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
  },
  title1: {
    color: colors.textPrimary,
    fontFamily: Fonts.SFProRounded.Bold,
    marginTop: isTablet()
      ? getWidthTab(30)
      : Platform.OS === 'android'
        ? '4%'
        : '7%',
    fontSize: isTablet() ? Font12 : Font18,
  },
  reser_number: {
    flexDirection: 'row',
    marginTop: isTablet() ? getWidthTab(20) : '7%',
    marginBottom: isTablet() ? getWidthTab(25) : '8%',
  },
  reser_number1: {
    flexDirection: 'row',
    marginTop: isTablet()
      ? getWidthTab(20)
      : Platform.OS === 'android'
        ? '4%'
        : '7%',
    marginBottom: isTablet() ? getWidthTab(25) : '8%',
  },
  lableStyle: {height: 0},
  inputStyle: {
    color: '#777777',
    fontSize: isTablet() ? Font11 : Font16,
    padding: isTablet() ? 8 : 10,
  },
  inputContainer: {
    borderRadius: isTablet() ? getWidthTab(10) : (windowWidth * 45) / 375 / 6,
    height: isTablet() ? (windowWidth * 60) / 834 : (windowWidth * 46.5) / 375,
    marginTop: 0,
  },
  containerstyle: {
    width: '100%',
    marginHorizontal: '0%',
  },
  containerstyle1: {
    width: '100%',
    marginHorizontal: '0%',
    paddingStart: 0,
    paddingEnd: 0,
  },
  divider: {height: '0.5%', backgroundColor: '#777777'},
  view50: {flex: 1, marginLeft: '3%'},
  view501: {flex: 1, marginRight: '3%'},
  view50T: {position: 'absolute', alignSelf: 'center', right: 0},
  view501T: {flex: 1},
  buttonStyle: {
    width: '100%',
    borderRadius: isTablet() ? getWidthTab(10) : (windowWidth * 45) / 375 / 6,
    height: isTablet() ? (windowWidth * 60) / 834 : (windowWidth * 45) / 375,
    marginLeft: 0,
  },
  buttonTitleStyle: {
    fontSize: isTablet() ? Font11 : Font16,
    fontFamily: Fonts.SFProRounded.Regular,
  },
  buttonTitleStyle1: {
    fontSize: isTablet() ? Font11 : Font16,
    fontFamily: Fonts.SFProRounded.SemiBold,
    includeFontPadding: false,
    paddingTop: Platform.OS === 'android' ? 3 : 2,
    textAlignVertical: 'center',
  },
});
