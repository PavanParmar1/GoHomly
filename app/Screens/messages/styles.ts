import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts, Font17, getWidth, getWidthTab, Font12} from '../../utils/common';
export const styles = StyleSheet.create({
  navbarHeader: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarHeaderTablet: {
    marginLeft: getWidthTab(40),
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {
    width: isTablet() ? getWidthTab(22) : getWidth(19),
    height: isTablet() ? getWidthTab(22) : getWidth(19),
  },
  navbarImageTablet: {width: 30, height: 30},
  navbarTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {flex: 1, backgroundColor: colors.background},
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(15),
    marginVertical: isTablet() ? getWidthTab(30) : getWidth(15),
  },
});
