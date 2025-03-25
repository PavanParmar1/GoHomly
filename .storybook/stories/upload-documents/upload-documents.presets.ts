import {StyleSheet} from 'react-native';
import {
  Fonts,
  Font12,
  Font14,
  getWidthTab,
  getWidth,
  getHeight,
  Font11,
  Font13,
  Font18,
  Font15,
  Font19,
  Font9,
  Font8,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme/color';

const uploadDocStyle = (
  Font12: any,
  Font14: any,
  getWidthTab: any,
  getWidth: any,
  getHeight: any,
  Font11: any,
  Font13: any,
  Font18: any,
  Font15: any,
  Font19: any,
  Font9: any,
  Font8: any,
  Font7: any,
  windowWidth: any,
  screenWidth: any,
  orientation: any,
) =>
  StyleSheet.create({
    forgotPasswordText: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font12 : Font14,
      fontWeight: '400',
      color: colors.secondary,
    },

    container: {
      paddingHorizontal: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: '3.5%',
    },
    textStyle: {
      color: 'black',
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font14,
      includeFontPadding: false,
    },

    IMAGE_BUTTON_CONTAINER: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      // backgroundColor: 'blue'
      // marginRight: isTablet() ? getWidthTab(5) : getWidth(5),
    },
    ICON: {
      width: isTablet() ? getWidthTab(30) : getWidth(20),
      height: isTablet() ? getWidthTab(30) : getHeight(20),
    },
    modelText: {
      color: colors.secondary,
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize: isTablet() ? Font8 : Font13,
      marginTop: isTablet() ? getWidthTab(10) : getHeight(5),
    },

    modelImg: {
      width: isTablet() ? getWidthTab(70) : getWidth(50),
      height: isTablet() ? getWidthTab(70) : getWidth(50),
    },

    modelHeadertxt: {
      color: 'black',
      includeFontPadding: false,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font12 : Font18,
    },
  });

export default uploadDocStyle;
