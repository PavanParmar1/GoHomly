import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font12,
  Font17,
  Font18,
  Font22,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../utils/common';

export default StyleSheet.create({
  navbarHeader: {
    marginLeft: isTablet() ? getWidthTab(40) : getWidth(5),
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {
    width: isTablet() ? getWidthTab(22) : getWidth(15),
    height: isTablet() ? getWidthTab(22) : getWidth(15),
  },
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
    justifyContent: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  navbarHeaderRight: {
    color: colors.secondary,
    justifyContent: 'flex-end',
    marginRight: isTablet() ? getWidthTab(45) : getWidth(1),
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: isTablet() ? Font12 : Font17,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
  },
  flatlistView: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomRightRadius: getWidth(20),
    borderBottomLeftRadius: getWidth(20),
  },
  imageContainer: {
    // marginTop: getWidth(16),
    paddingHorizontal: isTablet() ? getWidthTab(180) : getWidth(27),
  },
  imageStyle: {
    width: isTablet() ? getWidthTab(470) : getWidth(321),
    height: isTablet() ? getWidthTab(470) : getWidth(321),
  },
  textStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font22,
    includeFontPadding: false,
    color: colors.textPrimary,
    marginTop: getWidth(11),
    marginBottom: isTablet() ? getWidthTab(80) : getWidth(50),
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: isTablet() ? getWidthTab(230) : 0,
  },
  referTextStyle: {
    fontFamily:
      Platform.OS === 'android'
        ? isTablet()
          ? Fonts.SFProRounded.Bold
          : Fonts.SFProRounded.SemiBold
        : Fonts.SFProRounded.Medium,
    fontSize: isTablet() ? Font12 : Font22,
    includeFontPadding: false,
    color: colors.textPrimary,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  codeContainer: {
    borderColor: '#BBBBBB',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: getWidth(10),
    marginHorizontal: isTablet() ? getWidthTab(280) : getWidth(18),
    paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(77),
    paddingVertical: isTablet() ? getWidthTab(28) : getWidth(27),
    marginTop: isTablet() ? getWidthTab(30) : getWidth(20),
    marginBottom: isTablet() ? getWidthTab(20) : getWidth(25),
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    justifyContent: 'center',
    marginVertical: isTablet() ? getWidthTab(60) : getWidth(20),
    width: isTablet() ? getWidthTab(714) : getWidth(340),
    alignSelf: 'center',
  },
  loginText: {
    color: colors.white,
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font12 : Font18,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});
