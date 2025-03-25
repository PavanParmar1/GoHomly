import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme';
import {
  Font12,
  Font17,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../utils/common';

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
    paddingLeft: isTablet() ? getWidthTab(60) : getWidth(20),
    paddingRight: isTablet() ? getWidthTab(60) : getWidth(20),
    borderBottomLeftRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    borderBottomRightRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    paddingBottom: isTablet() ? getWidthTab(100) : 0,
  },
  buttonContainer: {
    width: isTablet() ? getWidthTab(714) : getWidth(303),
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    marginTop: isTablet() ? getWidthTab(60) : getWidth(30),
    marginBottom: isTablet() ? getWidthTab(60) : getWidth(30),
    backgroundColor: colors.secondary,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    justifyContent: 'center',
    marginHorizontal: isTablet() ? getWidthTab(0) : '7%',
  },
  buttonTextTablet: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: Font12,
    color: colors.white,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
