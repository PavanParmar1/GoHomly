import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../theme/color';

import {
  getWidth,
  Fonts,
  Font17,
  Font10,
  Font15,
  // windowWidth,
  Font14,
} from '../../utils/common';
import {isTablet} from 'react-native-device-info';

// const iconSize = isTablet()
//   ? (22 * windowWidth) / 834
//   : (20 * windowWidth) / 375;
export default StyleSheet.create({
  navbarHeader: {
    marginLeft: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarHeaderRight: {
    marginRight: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navbarImage: {width: 19, height: 19},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font14 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatlistView: {
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    width: '100%',
  },
  flatlist: {
    alignSelf: 'center',
  },
  mapView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tagView: {
    // height: '15%',
    width: '100%',
    position: 'absolute',
  },
  itemContainer: {
    // width: getWidth(100),
    height: isTablet()
      ? Platform.OS === 'android'
        ? getWidth(28)
        : getWidth(23)
      : getWidth(38),
    backgroundColor: 'pink',
    marginLeft: getWidth(5),
    marginVertical: getWidth(10),
    borderRadius: isTablet()
      ? Platform.OS === 'android'
        ? getWidth(7)
        : getWidth(4)
      : getWidth(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: getWidth(10),
    paddingRight: getWidth(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    elevation: 8,
  },
  itemTextContainer: {
    // flex: 1,
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    marginHorizontal: getWidth(10),
    color: '#121212',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  iconStyle: {
    height: isTablet() ? getWidth(14) : getWidth(20),
    width: isTablet() ? getWidth(14) : getWidth(20),
    marginLeft: getWidth(3),
  },
});
