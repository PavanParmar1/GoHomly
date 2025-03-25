import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {
  Font12,
  Font18,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../utils/common';
export default StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  propertyView: {
    marginLeft: '-3%',
    marginRight: '-3%',
    marginVertical: '4.5%',
  },
  dividerStyle: {height: '0.30%', backgroundColor: '#777777'},
  nearbyStyleOverride: {
    shadowOffset: {width: isTablet() ? 3 : 5, height: isTablet() ? 3 : 5},
    borderWidth: isTablet()
      ? Platform.OS === 'android'
        ? 0.75
        : 0.35
      : Platform.OS === 'android'
        ? 0.5
        : 0.35,
    borderColor: '#DADADA',
    marginBottom: isTablet() ? 0 : '3%',
    elevation: 2,
    borderRadius: isTablet() ? getWidthTab(8) : getWidth(12),
  },
  titleMainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
    color: '#1A1E25',
    flex: 1,
    marginBottom: '3.5%',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  buttonTitleStyle: {
    fontSize: isTablet() ? Font12 : Font18,
    fontFamily: Fonts.SFProRounded.Bold,
    color: '#1A1E25',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
