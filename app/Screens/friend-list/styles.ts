import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Font12, Font17, Fonts, getWidth, getWidthTab} from '../../utils/common';

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
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    paddingTop: getWidth(15),
    backgroundColor: colors.background,
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
  },
  flatlistView: {
    backgroundColor: 'white',

    paddingHorizontal: isTablet() ? getWidthTab(50) : getWidth(16),
    flexGrow: 1,
  },
});
