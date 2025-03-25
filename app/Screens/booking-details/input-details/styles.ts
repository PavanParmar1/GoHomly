import {StyleSheet} from 'react-native';
import {
  Font12,
  Font16,
  Font18,
  Font9,
  Fonts,
  getWidthTab,
  getWidth,
} from '../../../utils/common';
import {isTablet} from 'react-native-device-info';
export default StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: isTablet() ? '2.5%' : '5%',
  },
  title: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
    color: '#1A1E25',
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  title1: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font9 : Font16,
    color: '#1A1E25',
    width: '35%',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  title2: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font16,
    color: '#777777',
    flex: 1,
    textAlign: 'right',
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
  reser_number: {
    flexDirection: 'row',
    marginTop: isTablet() ? getWidthTab(13) : getWidth(15),
  },
  divider: {
    height: '0.30%',
    backgroundColor: '#777777',
    marginTop: isTablet() ? 0 : '7.5%',
  },
  titleMainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttoncontainerStyle: {
    height: 22,
    width: 22,
  },
  buttonstyle: {
    height: isTablet() ? getWidthTab(30) : getWidth(20),
    width: isTablet() ? getWidthTab(30) : getWidth(20),
  },
  buttonBottom: {flex: 1, alignItems: 'flex-end'},
  dividerstyle: {marginTop: isTablet() ? '4%' : '7.5%'},
});
