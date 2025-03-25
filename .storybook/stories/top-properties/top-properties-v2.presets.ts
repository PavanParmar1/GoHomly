import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const TopPropertiesStyle = (
  getWidth: any,
  getHeight: any,
  getWidthTab: any,
  windowWidth: number,
  Font12: number,
  Font14: number,
  Font18: number,
  Font9: number,
  Font11: number,
  Font17: number,
  Font10: number,
  Font8: number,
  Font13: number,
  orientation: any,
) =>
  StyleSheet.create({
    ICON: {
      width: isTablet() ? getWidthTab(30) : getWidth(20),
      height: isTablet() ? getWidthTab(30) : getHeight(20),
      tintColor: colors.secondary,
    },

    HEART_ICON_STYLE: {
      width: isTablet() ? (45 * windowWidth) / 834 : (42 * windowWidth) / 375,
      height: isTablet() ? (45 * windowWidth) / 834 : (42 * windowWidth) / 375,
    },

    CONTAINER_STYLE: {
      // backgroundColor: 'green'
      // shadowColor: '#EFEFEF', // Shadow color
      // shadowOffset: {width: 5.339, height: 2.339}, // Shadow offset
      // shadowOpacity: 1,
      // shadowRadius: isTablet() ? getWidthTab(21.354) : getWidth(21.354), // Shadow radius
    },

    HEADER_CONTAINER_STYLE: {
      marginTop: isTablet() ? getWidthTab(43) : getWidth(30),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(17),
    },

    HEADER_STYLE: {
      color: colors.textPrimary,
      fontWeight: '700',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font11 : Font18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_CONTAINER_SOLID: {
      overflow: 'hidden',
      width: /*  orientation === 'landscape'
          ? windowWidth / 2.1
          : */ isTablet()
        ? (774 * windowWidth) / 834
        : (343 * windowWidth) / 375,
      borderRadius: isTablet() ? getWidthTab(20) : getWidth(16),
      marginHorizontal: /* orientation === 'landscape'
          ? '2.2%'
          :  */ isTablet() ? getWidthTab(30) : getWidth(16),
      marginVertical: isTablet() ? getWidthTab(15) : getWidth(16),
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: 'gray', // Shadow color
      shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
      shadowOpacity: 1,
      shadowRadius: isTablet() ? getWidthTab(21.354) : getWidth(21.354), // Shadow radius
    },

    ITEM_TITLE_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font9 : Font12,
      fontWeight: '400',
      marginTop: getWidth(5),
      textAlign: 'center',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_IMAGE_CONTAINER: {
      width: '100%',
      height: isTablet()
        ? (287 * windowWidth) / 834
        : (176 * windowWidth) / 375,
    },

    ITEM_INFORMATION_CONTAINER: {
      width: isTablet() ? getWidthTab(774) : (343 * windowWidth) / 375,
      paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
      paddingTop: isTablet() ? getWidthTab(10) : getWidth(10),
      paddingBottom: isTablet() ? getWidthTab(20) : getWidth(18),
    },

    ITEM_INFORMATION_INNER_CONTAINER: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      // width: '100%',
      // backgroundColor:"pink"
    },

    ITEM_INFORMATION_RATING_CONTAINER: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
    },

    ITEM_INFORMATION_SUB_HEADER_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font10 : Font17,
      includeFontPadding: false,

      // backgroundColor: 'pink',
    },
    RATE_STYLE: {
      color: '#6A6A6A',
      includeFontPadding: false,
      fontFamily: Fonts.SFProRounded.SemiBold,
      textAlignVertical: 'center',
      fontSize: isTablet() ? Font9 : Font14,
      marginLeft: isTablet() ? getWidthTab(7) : getWidth(5),
    },

    ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: {
      color: '#636363',
      marginTop: isTablet() ? getWidthTab(5) : getWidth(2),
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font9 : Font14,
      includeFontPadding: false,
      // backgroundColor: 'pink',
      width: orientation === 'landscape' ? '50%' : '100%',
    },

    BUTTON_STYLE: {
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidth(6) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 10,
      marginTop: getWidth(13),
      width: isTablet() ? '30%' : '50%',
      // alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '0%',
    },

    BUTTON_FONT_STYLE: {
      fontSize: isTablet() ? Font9 : Font14,
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      color: colors.background,
      textAlignVertical: 'center',
    },

    SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(19),
      width: isTablet() ? '88%' : '82%',
    },
    SHIMMER_EFFECT_HEADER_TEXT_CONTAINER1: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(19),
      width: isTablet() ? '10%' : '15%',
    },

    SHIMMER_EFFECT_IMAGE_CONTAINER: {
      width: '100%',
      height: isTablet()
        ? (287 * windowWidth) / 834
        : (176 * windowWidth) / 375,
    },

    SHIMMER_EFFECT_TEXT_CONTAINER: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(19),
      width: isTablet() ? '88%' : '82%',
      marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
    },

    SHIMMER_EFFECT_TAG_CONTAINER: {
      borderRadius: 15,
      height: isTablet() ? getWidthTab(40) : getWidth(19),
      width: '22%',
    },
    SHIMMER_EFFECT_BUTTON: {
      borderRadius: isTablet() ? getWidth(6) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 10,
      marginTop: getWidth(13),
      width: isTablet() ? '30%' : '50%',
    },

    SEE_ALL_BUTTON_TITLE: {
      fontSize: isTablet() ? Font8 : Font14,
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Light,
      includeFontPadding: false,
      fontWeight: '400',
      // backgroundColor:"green",
    },

    IMAGE_STYLE: {
      height: isTablet() ? getWidthTab(25) : getWidth(15),
      width: isTablet() ? getWidthTab(25) : getWidth(15),
      tintColor: 'black',
    },

    // export const IMAGE_STYLE: ImageStyle = {
    //   height: isTablet() ? getWidthTab(25) : getWidth(17),
    //   width: isTablet() ? getWidthTab(25) : getWidth(17),
    //   tintColor: 'black',
    // };

    TEXT_STYLE: {
      marginStart: isTablet() ? getWidthTab(15) : getWidth(4),
      color: '#777777',
      fontSize: isTablet() ? Font10 : Font13,
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
    },
  });
export default TopPropertiesStyle;
