import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const OwnersPropertyStyle = (
  windowWidth: any,
  getWidthTab: any,
  getWidth: any,
  getHeight: any,
  Font12: number,
  Font14: number,
  Font18: number,
  Font9: number,
  Font11: number,
  Font10: number,
  Font8: number,
  Font13: number,
  Font15: number,
  Font7: number,
  Font4: any,
  Font5: any,
  Font6: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    ICON: {
      width: isTablet() ? getWidthTab(30) : getWidth(15),
      height: isTablet() ? getWidthTab(30) : getHeight(15),
      tintColor: colors.secondary,
    },

    HEART_ICON_STYLE: {
      width: isTablet() ? (45 * windowWidth) / 834 : (32 * windowWidth) / 375,
      height: isTablet() ? (45 * windowWidth) / 834 : (32 * windowWidth) / 375,
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
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (200 * windowWidth) / 834
          : isTablet()
            ? (300 * windowWidth) / 834
            : (200 * windowWidth) / 375,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(16),
      marginHorizontal: isTablet() ? getWidthTab(15) : getWidth(16),
      marginVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : orientation === 'landscape' && windowWidth === screenWidth
            ? getWidthTab(10)
            : isTablet()
              ? getWidthTab(15)
              : getWidth(10),
      backgroundColor: 'white',
      shadowColor: 'gray', // Shadow color
      shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
      shadowOpacity: 0.4,
      shadowRadius: isTablet() ? getWidthTab(5) : getWidth(5), // Shadow radius
      elevation: 5, // Required for Android
    },
    ratingContainer: {
      alignItems: 'flex-start',
      height: isTablet() ? getWidthTab(20) : getWidth(14),
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0.5%'
          : '1%',
    },

    ITEM_TITLE_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font7 : Font12,
      fontWeight: '400',
      marginTop: getWidth(5),
      textAlign: 'center',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_IMAGE_CONTAINER: {
      width: '100%',
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (150 * windowWidth) / 834
          : isTablet()
            ? (220 * windowWidth) / 834
            : (130 * windowWidth) / 375,
    },

    ITEM_INFORMATION_CONTAINER: {
      // width: isTablet() ? getWidthTab(774) : (343 * windowWidth) / 375,
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
      paddingTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(10),
      paddingBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(18),
      // backgroundColor: 'pink',
    },

    ITEM_INFORMATION_INNER_CONTAINER: {
      //   flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'flex-start',
      // justifyContent: 'space-between',
      // width: '70%',
      //   backgroundColor: 'pink',
    },

    ITEM_INFORMATION_RATING_CONTAINER: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
    },

    ITEM_INFORMATION_SUB_HEADER_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font7
            : Font11,
      includeFontPadding: false,
      // backgroundColor: 'orange',
      // width:
      //   orientation === 'landscape' && windowWidth === screenWidth
      //     ? '50%'
      //     : '45%',
    },
    RATE_STYLE: {
      color: '#6A6A6A',
      includeFontPadding: false,
      fontFamily: Fonts.SFProRounded.SemiBold,
      textAlignVertical: 'center',
      fontSize: isTablet() ? Font9 : Font12,
      marginLeft: isTablet() ? getWidthTab(7) : getWidth(5),
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
      // backgroundColor: 'blue',
      // width: '70%',
    },

    OWNERTITLE: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font12,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'left',
      // backgroundColor: 'orange',
      width: '30%',
    },

    SUB_TITLE: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font10
            : Font14,
      color: '#777777',
      includeFontPadding: false,
      textAlignVertical: 'center',
      // height: isTablet() ? getWidthTab(48) : getWidth(48),

      // marginEnd: '4%',
    },

    ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: {
      color: '#636363',
      marginTop: isTablet() ? getWidthTab(5) : getWidth(2),
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font9 : Font10,
      includeFontPadding: false,
    },

    BUTTON_STYLE: {
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidth(6) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 10,
      marginTop: getWidth(13),
      // width: isTablet() ? '30%' : '50%',
      alignItems: 'center',
      justifyContent: 'center',
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

    //  IMAGE_STYLE: {
    //   height: isTablet() ? getWidthTab(25) : getWidth(17),
    //   width: isTablet() ? getWidthTab(25) : getWidth(17),
    //   tintColor: 'black',
    // },

    TEXT_STYLE: {
      marginStart: isTablet() ? getWidthTab(15) : getWidth(4),
      color: '#777777',
      fontSize: isTablet() ? Font10 : Font13,
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
    },
  });
export default OwnersPropertyStyle;
