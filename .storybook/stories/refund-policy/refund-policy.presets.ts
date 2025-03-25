import {TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const RefundPolicyStyle = (
  getWidth: any,
  getWidthTab: any,
  Font10: number,
  Font12: number,
  Font14: number,
  Font18: number,
  Font9: number,
  Font4: number,
  Font5: number,
  Font6: number,
  Font7: number,
  Font8: number,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      backgroundColor: 'white',
      // marginTop: isTablet() ? '5%' : '7%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '2%'
          : isTablet()
            ? '5%'
            : '7%',
      padding:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '5%',
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
    },
    INNER_CONTAINER: {
      marginHorizontal: isTablet() ? '2%' : '2%',
      borderRadius: isTablet() ? getWidthTab(20) : getWidth(20),
      //   padding: isTablet() ? '5%' : '6%',
      backgroundColor: colors.primary,
    },

    BUTTON_STYLE: {
      marginHorizontal: '0%',
      marginTop: isTablet() ? '4%' : '5%',
      borderRadius: isTablet() ? getWidthTab(12) : getWidth(12),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
    },

    TITLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      paddingTop: 0,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '0%',
    },

    HEADER: {
      fontSize: isTablet() ? Font9 : Font12,
      fontFamily: Fonts.SFProRounded.Regular,
      color: '#777777',
      includeFontPadding: false,
      textAlignVertical: 'center',
      width: isTablet() ? '75%' : '90%',
    },

    TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font10 : Font14,
      color: 'black',
      marginStart: isTablet() ? '2%' : '3%',
      textAlignVertical: 'center',
      marginTop: isTablet() ? '2.5%' : '5%',
    },

    SUBTITLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      color: 'black',
      fontFamily: Fonts.SFProRounded.Regular,
      // marginTop: isTablet() ? '2%' : '2%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    BULLET_POINT: {
      fontSize: 5,
      textAlign: 'center',
      color: '#777777',
      marginTop: isTablet() ? '1.7%' : '1.5%',
      // marginStart: '3%',
      width: '5%',
      // alignSelf: 'center'
    },
  });
export default RefundPolicyStyle;
