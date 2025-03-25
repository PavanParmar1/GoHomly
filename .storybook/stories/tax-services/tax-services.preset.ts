import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const TaxAndServicesStyle = (
  getWidth: any,
  getWidthTab: any,
  Font10: number,
  Font12: number,
  Font14: number,
  Font18: number,
  Font8: number,
  Font9: number,
  Font4: number,
  Font5: number,
  Font6: number,
  Font7: number,
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
      // backgroundColor: 'yellow',
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
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      color: 'black',
      marginEnd: isTablet() ? '2%' : '3%',
      textAlignVertical: 'center',
      includeFontPadding: false,
    },

    subitemText: {
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font12,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    serviceItemContainer: {
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(6)
          : isTablet()
            ? getWidthTab(12)
            : getWidth(10),
      width: '100%',
    },

    RENDERCONTAINER: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'gray',
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '2%'
          : '2%',
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
      // backgroundColor:"pink",
    },

    lableStyle1: {
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      includeFontPadding: false,
      // backgroundColor:"yellow",
      textAlignVertical: 'center',
    },
  });
export default TaxAndServicesStyle;
