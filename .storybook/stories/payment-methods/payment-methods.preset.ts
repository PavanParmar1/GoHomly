import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const PaymentMethodStyle = (
  getWidth: any,
  getWidthTab: any,
  Font10: number,
  Font12: number,
  Font14: number,
  Font18: number,
  Font4: number,
  Font5: number,
  Font6: number,
  Font7: number,
  Font8: number,
  Font9: number,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      backgroundColor: 'white',
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

    TITLE_CONTAINER: {
      marginBottom: isTablet() ? getWidthTab(3) : getWidth(5),
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '0%',
    },

    TITLE: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    TEXT: {
      color: 'black',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      marginEnd: isTablet() ? '2%' : '3%',
      textAlignVertical: 'center',
      includeFontPadding: false,
    },
  });
export default PaymentMethodStyle;
