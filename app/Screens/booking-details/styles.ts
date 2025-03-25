import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab, Fonts, Font12, Font17} from '../../utils/common';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  subContainer: {
    paddingHorizontal: isTablet() ? getWidthTab(60) : '3.5%',
    marginBottom: isTablet()
      ? Platform.OS === 'android'
        ? getWidthTab(270)
        : getWidthTab(250)
      : Platform.OS === 'android'
        ? getWidth(175)
        : getWidth(132),
    // borderBottomRightRadius: getWidth(20),
    // borderBottomLeftRadius: getWidth(20),
    backgroundColor: 'white',
  },
  flatList: {marginTop: isTablet() ? '3%' : '7%'},
  wrapper: {
    width: '100%',
    backgroundColor: 'black',
  },
  buttonStyle: {
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    marginTop: '7%',
    marginBottom: '7%',
    marginStart: 0,
    marginEnd: 0,
    alignSelf: 'center',
    width: isTablet() ? '100%' : '87%',
  },
  buttonTitle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font17,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
