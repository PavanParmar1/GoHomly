import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {getWidth, getWidthTab} from '../../utils/common';

export const styles = StyleSheet.create({
  // navbarHeader: {
  //   marginLeft: isTablet() ? getWidthTab(40) : getWidth(5),
  //   height: 44,
  //   width: 44,
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  // },
  navbarHeaderRight: {
    marginRight: isTablet() ? getWidthTab(45) : getWidth(1),
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  // navbarImage: {
  //   width: isTablet() ? getWidthTab(22) : getWidth(19),
  //   height: isTablet() ? getWidthTab(22) : getWidth(19),
  // },
  navbarImageRight: {
    width: isTablet() ? getWidthTab(30) : getWidth(19),
    height: isTablet() ? getWidthTab(30) : getWidth(19),
  },
  // navbarTitle: {
  //   fontFamily: Fonts.SFProRounded.Regular,
  //   fontSize: isTablet() ? Font12 : Font17,
  //   fontWeight: '700',
  //   color: colors.textPrimary,
  // },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  innerContainer: {
    backgroundColor: '#FBFBFB',
    paddingHorizontal: getWidth(17.5),
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
  },
  flatlistView: {
    backgroundColor: '#FBFBFB',
    paddingTop: isTablet() ? getWidthTab(30) : getWidth(16),
    paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(17.5),
    borderBottomRightRadius: getWidth(20),
    borderBottomLeftRadius: getWidth(20),
    flexGrow: 1,
  },
  centeredView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  formModal: {
    marginTop: getWidth(44),
    marginHorizontal: 0,
  },
});
