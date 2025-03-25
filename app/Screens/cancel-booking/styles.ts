import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font10,
  Font12,
  Font15,
  Font16,
  Font17,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../utils/common';

export const styles = StyleSheet.create({
  navbarHeader: {
    marginLeft: isTablet() ? getWidthTab(45) : getWidth(5),
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {
    width: isTablet() ? getWidthTab(22) : getWidth(19),
    height: isTablet() ? getWidthTab(22) : getWidth(19),
  },
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  outerContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomRightRadius: getWidth(20),
    borderBottomLeftRadius: getWidth(20),
  },
  viewmin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: isTablet() ? (windowWidth / 834) * 2 : (windowWidth / 375) * 2,
    paddingVertical: isTablet() ? getWidthTab(10) : getWidth(8),
  },
  buttonTitle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font16,
    fontWeight: '600',
    color: colors.white,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    marginTop: isTablet() ? getWidthTab(60) : getWidth(35),
    // alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    justifyContent: 'center',
    marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(36),
    width: isTablet() ? getWidthTab(714) : getWidth(303),
  },
  textstyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    fontWeight: '600',
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  termsContainer: {
    marginVertical: isTablet() ? getWidthTab(50) : getWidth(35),
    paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(20),
  },
  rightIcon: {
    height: isTablet() ? getWidthTab(30) : getWidth(20),
    width: isTablet() ? getWidthTab(30) : getWidth(20),
  },
  footerview: {
    backgroundColor: 'black',
    width: '100%',
  },
});
