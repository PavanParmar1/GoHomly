import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font10,
  Font11,
  Font12,
  Font15,
  Font16,
  Font17,
  Font18,
  Fonts,
  getHeight,
  getWidth,
  getWidthTab,
} from '../../utils/common';

export const styles = StyleSheet.create({
  navbarHeader: {
    marginLeft: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {width: 19, height: 19},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
  },
  outerContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: isTablet() ? getWidthTab(60) : getWidth(20),
    paddingRight: isTablet() ? getWidthTab(60) : getWidth(20),
    borderBottomLeftRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    borderBottomRightRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    paddingBottom: isTablet() ? getWidthTab(140) : 0,
  },
  // container: {
  //   backgroundColor: colors.background,
  //   marginBottom: 100,
  //   borderBottomEndRadius: isTablet() ? getWidthTab(20) : getWidth(20),
  //   borderBottomStartRadius: isTablet() ? getWidthTab(20) : getWidth(20),
  //   flex: 1,
  // },
  checkboxContainer: {
    width: isTablet() ? '40%' : '55%',
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    padding: 0,
    marginVertical: isTablet() ? getWidthTab(30) : getWidth(25),
  },
  checkboxText: {
    fontSize: isTablet() ? Font10 : Font15,
    color: 'black',
    marginLeft: isTablet() ? getWidthTab(23) : getWidth(10),
  },
  title: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  mail: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    color: colors.textSecondary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  list: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  dividerTop: {marginBottom: isTablet() ? getWidthTab(25) : getWidth(30)},
  flatlistContainer: {
    // marginTop: deviceWidth * 30,
    // marginBottom: 50,
  },
  buttonContainer: {
    // alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    width: isTablet() ? getWidthTab(714) : getWidth(303),
    justifyContent: 'center',
    marginHorizontal: isTablet() ? 0 : getWidth(25),
    marginTop: isTablet() ? getWidthTab(60) : getWidth(40),
    marginBottom: isTablet() ? getWidthTab(0) : getWidth(40),
    alignSelf: 'center',
  },
  buttonTitleStyle: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font12 : Font18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  listContainer: {
    marginTop: isTablet() ? getWidthTab(20) : getHeight(15),
    marginBottom: isTablet() ? getWidthTab(20) : getHeight(20),
    marginHorizontal: isTablet() ? getWidthTab(30) : getHeight(30),
  },
  centeredView: {
    flex: 1,
    marginBottom: isTablet() ? getWidthTab(-100) : getWidth(-30),
    borderRadius: isTablet() ? getWidthTab(20) : getHeight(20),
    backgroundColor: colors.background,
  },
  formModal: {
    marginTop: isTablet() ? getWidthTab(140) : getWidth(44),
    marginHorizontal: 0,
  },
});
