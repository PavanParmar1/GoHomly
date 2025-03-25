import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Font12, Font17, Fonts, getWidth, getWidthTab} from '../../utils/common';

export const styles = StyleSheet.create({
  navbarHeader: {
    marginLeft: getWidth(5),
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
  navbarImageTablet: {width: getWidthTab(22), height: getWidthTab(22)},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
  },
  flatlistView: {
    backgroundColor: 'white',
    borderBottomRightRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    borderBottomLeftRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(16),
    flexGrow: 1,
  },
});
