import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {Fonts} from '../../../app/utils/common';

const personSelectorStyles = (
  getWidth: any,
  getWidthTab: any,
  Font10: number,
  Font14: number,
  Font15: number,
  Font16: number,
  Font17: number,
  Font4: number,
  Font5: number,
  Font6: number,
  Font7: number,
  Font8: number,
  Font9: number,
  orientation: any,
  windowWidth: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    mainViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',

      justifyContent: 'space-between',
      paddingVertical: isTablet()
        ? (12 * windowWidth) / 834
        : (6 * windowWidth) / 375,
    },
    lableStyle: {
      flex: 1,
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
      lineHeight: isTablet() ? getWidthTab(20) : getWidth(18),
    },
    lableStyle1: {
      flex: 1,
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
      lineHeight: isTablet() ? getWidthTab(28) : getWidth(21),
    },
    imageButtonStyle: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (23 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (24 * windowWidth) / 375,
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (23 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (24 * windowWidth) / 375,
    },
    counterStyle: {
      textAlign: 'center',
      color: '#121212',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font10
            : Font17,
      /* marginLeft: isTablet() ? getWidthTab(6) : getWidth(8),
    marginRight: isTablet() ? getWidthTab(6) : getWidth(8), */
      marginHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(5)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(7),
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (25 * windowWidth) / 834
          : isTablet()
            ? getWidthTab(30)
            : getWidth(20),
      textAlignVertical: 'center',
      // backgroundColor: 'pink',
    },

    devider: {
      marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
    },
  });

export default personSelectorStyles;
