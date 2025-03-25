import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {
  Font12,
  Font15,
  Font17,
  Font8,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../utils/common';
import {isTablet} from 'react-native-device-info';

export default StyleSheet.create({
  navbarHeader: {
    marginLeft: isTablet() ? getWidthTab(40) : getWidth(5),
    marginBottom: 0,
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
  },
  container: {
    backgroundColor: colors.background,
    paddingTop: getWidth(19),
    flex: 1,
  },
  textStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font8 : Font15,
    color: colors.textPrimary,
    marginHorizontal: isTablet() ? getWidthTab(15) : getWidth(5),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  listContainer: {
    marginBottom: isTablet() ? getWidth(12) : getWidth(30),
    flexDirection: 'row',
  },
  pagination: {
    width: isTablet() ? getWidth(2) : getWidth(4),
    height: isTablet() ? getWidth(2) : getWidth(4),
    borderRadius: getWidth(2),
    backgroundColor: colors.textPrimary,
    marginRight: getWidth(2),
    marginTop: isTablet() ? getWidth(5) : getWidth(8),
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
  },
  flatlistView: {
    backgroundColor: 'white',
    borderBottomRightRadius: getWidth(20),
    borderBottomLeftRadius: getWidth(20),
    paddingHorizontal: isTablet() ? getWidth(30) : getWidth(20),
    flexGrow: 1,
  },
});
