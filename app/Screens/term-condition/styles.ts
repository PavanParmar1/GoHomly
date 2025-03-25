import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font10,
  Font12,
  Font15,
  Font17,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../utils/common';

export default StyleSheet.create({
  navbarHeader: {
    marginLeft: isTablet() ? 10 : 5,
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
    backgroundColor: 'black',
    flex: 1,
  },
  viewmin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: isTablet() ? getWidthTab(2) : (windowWidth / 375) * 2,
    paddingVertical: isTablet() ? getWidthTab(10) : getWidth(8),
  },
  textstyle: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font10 : Font15,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  scrollViewStyle: {
    backgroundColor: 'white',
    padding: isTablet() ? getWidthTab(60) : getWidth(22),
    borderBottomLeftRadius: getWidth(20),
    borderBottomRightRadius: getWidth(20),
  },
  footerview: {
    backgroundColor: 'black',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlistView: {
    backgroundColor: 'white',
  },
  mapView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
