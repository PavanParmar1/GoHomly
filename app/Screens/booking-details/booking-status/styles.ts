import {StyleSheet} from 'react-native';
import {
  Font14,
  Font9,
  Fonts,
  getWidthTab,
  getWidth,
  Font10,
  Font15,
} from '../../../utils/common';
import {isTablet} from 'react-native-device-info';
export default StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  dateView: {
    width: isTablet() ? '12%' : '14%',
    alignSelf: 'center',
    height: isTablet() ? '90%' : '86%',
  },
  dateColor: {
    color: '#777777',
    flex: 1,
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font14,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  title: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font10 : Font15,
    color: '#1A1E25',
    flexWrap: 'wrap',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  title1: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font14,
    color: '#1A1E25',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  title2: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font14,
    color: '#777777',
    textAlign: 'right',
    marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  reser_number: {
    flexDirection: 'row',
    marginTop: '2.3%',
    marginBottom: '2.3%',
    justifyContent: 'space-between',
  },
  tittleViewStyle: {
    borderTopRightRadius: isTablet() ? getWidthTab(7) : getWidth(7),
    borderBottomRightRadius: isTablet() ? getWidthTab(7) : getWidth(7),
    justifyContent: 'center',
    height: isTablet() ? getWidthTab(45) : getWidth(30),
    marginTop: isTablet() ? getWidthTab(7) : getWidth(7),
    marginBottom: isTablet() ? getWidthTab(7) : getWidth(7),
  },
  divider: {
    backgroundColor: '#E4E7EC',
    width: '2%',
    flex: 1,
  },
  badgeContainerStyle: {
    width: '98%',
    height: isTablet() ? getWidthTab(45) : getWidth(30),
    borderTopLeftRadius: isTablet() ? getWidthTab(7) : getWidth(7),
    borderBottomLeftRadius: isTablet() ? getWidthTab(7) : getWidth(7),
    justifyContent: 'center',
    marginTop: isTablet() ? getWidthTab(7) : getWidth(7),
    marginBottom: isTablet() ? getWidthTab(7) : getWidth(7),
  },
  badgeTopView: {flex: 1, width: '86%', flexDirection: 'row'},
  badgesubTopView: {
    alignItems: 'center',
    width: '11%',
    // backgroundColor: 'pink'
  },
  badgeStyle: {
    width: isTablet() ? getWidthTab(15) : getWidth(10),
    height: isTablet() ? getWidthTab(15) : getWidth(10),
    borderRadius: isTablet() ? getWidthTab(12) : getWidth(10),
  },
});
