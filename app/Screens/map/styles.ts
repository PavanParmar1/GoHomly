import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors} from '../../theme/color';

import {
  getWidth,
  Fonts,
  Font17,
  Font10,
  Font15,
  // windowWidth,
  Font12,
  getWidthTab,
  windowHeight,
  Font14,
  Font8,
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
    marginRight: isTablet() ? getWidthTab(10) : getWidth(1),
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navbarImage: {width: 19, height: 19},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
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
    borderBottomRightRadius: getWidth(20),
    borderBottomLeftRadius: getWidth(20),
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
    backgroundColor: 'white',
    borderBottomLeftRadius: getWidth(20),
    borderBottomRightRadius: getWidth(20),
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
    marginVertical: isTablet() ? getWidth(10) : getWidth(22),
    borderRadius: isTablet()
      ? Platform.OS === 'android'
        ? getWidth(7)
        : getWidth(6)
      : getWidth(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: isTablet() ? getWidthTab(18) : getWidth(12),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  itemTextContainer: {
    // flex: 1,
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    marginLeft: isTablet() ? getWidthTab(15) : getWidth(10),
    color: '#121212',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  iconStyle: {
    height: isTablet() ? getWidth(14) : getWidth(20),
    width: isTablet() ? getWidth(14) : getWidth(20),
    // marginLeft: isTablet() ? getWidthTab(2) : getWidth(3),
    resizeMode: 'contain',
  },
  checkboxContainer: {
    width: isTablet() ? '9%' : '7%',
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    padding: 0,
  },
});

export const modal2: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
};

export const scrollableModal2: ViewStyle = {
  height: isTablet() ? (windowHeight * 55) / 110 : (windowHeight * 70) / 110,
  backgroundColor: colors.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const DIVIDER: ViewStyle = {
  width: isTablet() ? getWidthTab(80) : getWidth(48),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(13),
  alignSelf: 'center',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
};

export const lableStyle1: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font14,
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginStart: isTablet() ? '5%' : '1.5%',
  lineHeight: isTablet() ? getWidthTab(28) : getWidth(21),
};

export const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: isTablet() ? getWidthTab(20) : getWidth(15),
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(12) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.background,
  textAlignVertical: 'center',
};
