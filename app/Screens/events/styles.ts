import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme/color';
import {Fonts, Font17, Font12, getWidthTab, getWidth} from '../../utils/common';
export default StyleSheet.create({
  navbarHeader: {
    marginLeft: 5,
    height: getWidth(48),
    width: getWidth(48),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarHeaderTablet: {
    marginLeft: 10,
    height: getWidthTab(48),
    width: getWidthTab(48),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {width: 22, height: 22},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: isTablet() ? getWidthTab(20) : 5,
  },
  flatlistView: {
    // flex: 1,
    backgroundColor: 'white',
    // borderBottomLeftRadius: getWidth(20),
    // borderBottomRightRadius: getWidth(20),
  },
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
  },
  flatlist: {
    // alignSelf: 'center',
  },
});
