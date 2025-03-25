import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const guestBookingStyle = (
  Font11: any,
  Font12: any,
  Font14: any,
  Font16: any,
  Font18: any,
  Font8: any,
  Font9: any,
  Font7: any,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
  Font6: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      // backgroundColor: colors.white,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      // marginVertical: isTablet() ? '5%' : '5%',
    },
    INNER_CONTAINER: {
      marginHorizontal: isTablet() ? '2%' : '2%',
      borderRadius: isTablet() ? getWidthTab(20) : getWidth(20),
      padding: isTablet() ? '5%' : '6%',
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : isTablet()
            ? '2%'
            : '6%',
      backgroundColor: colors.background,
    },

    BUTTON_STYLE: {
      marginHorizontal: '0%',
      marginTop: isTablet() ? '4%' : '5%',
      borderRadius: isTablet() ? getWidthTab(12) : getWidth(12),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
    },

    TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font9 : Font14,
      fontWeight: '400',
      color: colors.background,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    TITLE: {
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
      marginTop: isTablet() ? '2%' : '3%',
      color: colors.textPrimary,
      fontWeight: '700',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font12 : Font18,
      // lineHeight: 24,
      paddingTop: 0,
      // height: 24,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
      // backgroundColor:'blue',
    },

    HEADER: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      fontWeight: '600',
      fontFamily: Fonts.SFProRounded.Medium,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0%'
          : isTablet()
            ? '1%'
            : '1%',
    },
    SUBTITLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font11,
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      marginTop: orientation === 'landscape' ? '1%' : isTablet() ? '2%' : '2%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });
export default guestBookingStyle;
