import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const GuestBookStyle = (
  getWidth: any,
  getWidthTab: any,
  windowWidth: any,
  Font10: number,
  Font12: number,
  Font14: number,
  Font20: number,
  Font4: any,
  Font5: any,
  Font6: any,
  Font7: any,
  Font8: any,
  Font9: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      backgroundColor: colors.background,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
      paddingLeft:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '5%',
      paddingBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '5%',
      paddingTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '1%',
      paddingRight:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '1%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '2%'
          : isTablet()
            ? '5%'
            : '7%',
    },
    HEADER_CONTAINER: {
      // marginHorizontal: isTablet() ? '3%' : '3%',
      // marginVertical: isTablet() ? '2.5%' : '3.2%',
    },
    TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
    },

    TITLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font20,
      fontFamily: Fonts.SFProRounded.Bold,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginStart: '6.5%',
    },
    SUBTITLE: {
      color: colors.textSecondary,
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0%'
          : isTablet()
            ? '1%'
            : '0%',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      textAlignVertical: 'center',
      includeFontPadding: false,
      // backgroundColor:"yellow",
      marginRight: isTablet() ? '4%' : '5%',
    },

    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (22 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
    },
    ICON_PDF: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (23 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
    },
  });
export default GuestBookStyle;
