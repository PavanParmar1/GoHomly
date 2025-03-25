import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const myBookingStyle = (
  orientation: any,
  Font7: any,
  Font12: any,
  Font14: any,
  Font16: any,
  Font18: any,
  windowWidth: any,
  getWidth: any,
  getWidthTab: any,
  Font9: any,
  Font11: any,
  Font8: any,
  Font10: any,
  Font15: any,
  getHeight: any,
  screenWidth: any,
  Font6: any,
  Font5: any,
) =>
  StyleSheet.create({
    CONTAINER_STYLE: {
      justifyContent: 'flex-start',
      width: '100%',
      alignItems: 'flex-start',
      // backgroundColor: 'red',
      // marginBottom: isTablet() ? getWidthTab(43) : getWidth(60),
    },

    /**
     * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
     */
    HEADER_CONTAINER_STYLE: {
      // height: isTablet() ? getWidthTab(70) : getWidth(70),
      marginTop: isTablet() ? getWidthTab(43) : getWidth(20),
      // marginLeft: isTablet() ? getWidthTab(30) : getWidth(16),
      width: '100%',
      flexDirection: 'row',
      // backgroundColor: 'red',
    },

    HEADER_SUB_CONTAINER_STYLE: {
      // height: isTablet() ? getWidthTab(60) : getWidth(60),
      // backgroundColor: 'green',
      flex: 1,
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
    },

    ITEM_ADDRESS_HEADER_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font6 : Font16,
      // lineHeight: 24,
      marginTop: isTablet()
        ? getWidthTab(5)
        : Platform.OS === 'ios'
          ? getWidth(12)
          : getWidth(12),
      marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
      // lineHeight: 20,
      // height: 24,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
      // backgroundColor: 'orange',
    },
    /**
     * InnerContainer - Row Inner View - View (OuterView, Like Margin Top, etc)
     */
    ITEM_CONTAINER_SOLID: {
      flexDirection: 'row',
      // alignItems: 'center',
      // overflow: 'hidden',
      // width: isTablet() ? (774 * windowWidth) / 834 : (343 * windowWidth) / 375,

      // height: isTablet() ? (590 * windowWidth) / 834 : (460 * windowWidth) / 375,
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
      padding: getWidthTab(10),
      marginBottom: isTablet() ? getWidthTab(20) : getWidth(16),
      marginTop: getWidth(3),
      backgroundColor: colors.background,
      borderRadius: isTablet() ? getWidthTab(16.016) : getWidth(16.016), // Border radius
      shadowColor: 'gray', // Shadow color
      shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
      shadowOpacity: 0.4,
      shadowRadius: isTablet() ? getWidthTab(5) : getWidth(5), // Shadow radius
      elevation: 5, // Required for Android
      // marginTop: 8,
    },

    ITEM_IMAGE_CONTAINER: {
      flex: 1,
      // width: '100%',
      // height: '100%',
      // height: isTablet()
      //   ? (287 * windowWidth) / 834
      //   : (190 * windowWidth) / 375,
    },

    ITEM_IMAGE_CONTAINER_TYPE1: {
      width: '100%',
      borderTopLeftRadius: 10,
      height: isTablet()
        ? (287 * windowWidth) / 834
        : (190 * windowWidth) / 375,
    },

    ITEM_IMAGE_CONTAINER_TYPE2: {
      width: '100%',
      height: '100%',
    },

    ITEM_IMAGE_CONTAINER_TYPE3: {
      width: '100%',
      height: '100%',
    },

    ITEM_OVERLAY_CONTAINER: {
      width: isTablet() ? (788 * windowWidth) / 834 : (343 * windowWidth) / 375,
      height: isTablet()
        ? (287 * windowWidth) / 834
        : (190 * windowWidth) / 375,
      position: 'absolute',
    },

    ITEM_OVERLAY_CONTAINER_TYPE2: {
      width: '110%',
      height: '100%',
      position: 'absolute',
    },

    ITEM_INFORMATION_CONTAINER: {
      // height: isTablet() ? getWidthTab(322) : getWidth(268),
      width: isTablet() ? '65%' : (343 * windowWidth) / 375,
    },

    ITEM_INFORMATION_SUB_CONTAINER: {
      // margin: isTablet() ? getWidthTab(10) : getWidth(16),
      // height: isTablet() ? getWidthTab(300) : getWidth(200),
      // top: isTablet() ? getWidthTab(4) : getWidth(0),
      // padding: isTablet() ? getWidthTab(10) : getWidth(10),
      // paddingVertical: isTablet() ? getWidthTab(15) : getWidth(15),
    },

    ITEM_TRAVEL_DATE_HEADER_STYLE: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font6 : Font14,
      marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
      marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
      // lineHeight: 20,
      // height: 24,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_TRAVEL_DATE_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font5 : Font14,
      marginTop: isTablet() ? getWidthTab(3) : getWidth(5),
      marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
      // lineHeight: 20,
      // height: 24,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font6 : Font14,
      // lineHeight: isTablet() ? 42 : 21,
      marginTop: isTablet()
        ? getWidthTab(0)
        : Platform.OS === 'ios'
          ? getWidth(3)
          : getWidth(2),
      // lineHeight: getWidth(18),
      paddingLeft: isTablet() ? getWidthTab(16) : getWidth(4),
      // height: isTablet() ? getWidthTab(30) : getWidth(30),
      // width: '40%',
      // backgroundColor: 'blue',
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_INFORMATION_MAIN_CONTAINER: {
      flexDirection: 'row',
      width: '100%',
    },

    ITEM_INFORMATION_TITLE_CONTAINER: {
      width: '85%',
      backgroundColor: 'white',
    },

    ITEM_INFORMATION_TOP_CONTAINER: {
      flexDirection: 'row',
      marginTop: isTablet() ? getWidthTab(0) : getWidth(-10),
      width: '100%',
      // backgroundColor: 'orange',
      alignItems: 'flex-start',
    },

    GUEST_INFORMATION_TOP_CONTAINER: {
      // flexDirection: 'row',
      top: -16,
      // backgroundColor:"pink",
    },

    GUEST_INFORMATION_MAIN_CONTAINER: {
      width: '50%',
      marginVertical: isTablet() ? '1%' : '4%',
      //   backgroundColor: 'pink',
    },

    GUEST_INFORMATION_TITLE_CONTAINER: {
      width: '50%',
    },

    TRAVEL_INFORMATION_MAIN_CONTAINER: {
      // height: 60,
      top: isTablet() ? getWidthTab(0) : getWidth(2),
      width: isTablet() ? '100%' : '100%',
      // marginVertical: isTablet()?'1%':'0%',
    },

    TRAVEL_INFORMATION_TOP_CONTAINER: {
      flexDirection: 'row',
      // width: '100%',
    },

    TRAVEL_INFORMATION_TITLE_CONTAINER: {
      width: isTablet() ? '50%' : '50%',
    },

    ITEM_RATING_CONTAINER_STYLE: {
      flexDirection: 'row',
      marginTop: isTablet() ? getWidthTab(3) : getWidth(12),
      // height: isTablet() ? 26 : 20,
      width: '15%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: isTablet() ? getWidthTab(16) : getWidth(0),
    },
    ITEM_RATING_IMGE_STYLE: {
      paddingLeft: isTablet() ? getWidthTab(15) : getWidth(0),
      width: isTablet() ? getWidthTab(25) : getWidth(20),
      height: isTablet() ? getWidthTab(25) : getHeight(20),
      tintColor: colors.secondary,
    },
    ITEM_RATING_STYLE: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font6 : Font14,
      // lineHeight: getWidth(18),
      paddingLeft: isTablet() ? getWidthTab(5) : getWidth(5),
      // width: '40%',
      // backgroundColor: 'blue',
      textAlign: 'left',
      justifyContent: 'center',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    LEFT_BUTTON_STYLE: {
      height: isTablet() ? getWidthTab(60) : getWidth(40),
      width: isTablet() ? getWidthTab(60) : getWidth(40),
      backgroundColor: 'white',
      position: 'absolute',
      borderTopRightRadius: isTablet() ? getWidthTab(30) : getWidth(20),
      borderBottomRightRadius: isTablet() ? getWidthTab(30) : getWidth(20),
      alignSelf: 'flex-start',
      left: -10,
      justifyContent: 'center',
      // marginVertical: (288 * windowWidth) / 375 / 2 + 16,
      marginTop: isTablet() ? getWidthTab(250) : getWidth(170),
    },

    RIGHT_BUTTON_STYLE: {
      height: isTablet() ? getWidthTab(60) : getWidth(40),
      width: isTablet() ? getWidthTab(60) : getWidth(40),
      backgroundColor: 'white',
      position: 'absolute',
      borderTopLeftRadius: isTablet() ? getWidthTab(30) : getWidth(20),
      borderBottomLeftRadius: isTablet() ? getWidthTab(30) : getWidth(20),
      alignSelf: 'flex-end',
      right: -10,
      justifyContent: 'center',
      // marginVertical: (288 * windowWidth) / 375 / 2 + 16,
      marginVertical: isTablet() ? getWidthTab(250) : getWidth(170),
    },
    CAROUSEL_MOVEMENT_ICON: {
      alignSelf: 'center',
      height: isTablet() ? getWidthTab(24) : getWidth(14),
      width: isTablet() ? getWidthTab(12) : getWidth(7),
    },
    RATING_CONTAINER: {
      backgroundColor: 'transparent',
      marginLeft: isTablet() ? getWidthTab(30) : 0,
      width: isTablet() ? getWidthTab(200) : getWidth(200),
    },
    RATING_TEXT: {
      fontFamily: Fonts.SFProRounded.Light,
      fontSize: isTablet() ? Font9 : Font12,
      color: '#777777',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: {
      borderRadius: 20,
      marginLeft: 16,
      marginTop: 8,
      height: 16,
      width: '50%',
    },

    SHIMMER_EFFECT_SUB_HEADER_TEXT_CONTAINER: {
      borderRadius: 20,
      width: 70,
      height: 15,
    },

    SHIMMER_EFFECT_IMAGE_CONTAINER: {
      width: (343 * windowWidth) / 375,
      height: (194 * windowWidth) / 375,
    },

    SHIMMER_EFFECT_TEXT_CONTAINER: {
      borderRadius: 20,
      height: 16,
      width: '100%',
    },

    SEE_ALL_CONTAINER_STYLE: {
      marginRight: getWidth(10),
      marginTop: isTablet() ? getWidthTab(-6) : getWidth(-6),
    },

    DIVIDER: {
      // marginVertical: isTablet() ? '2.0%' : '2%',
      backgroundColor: '#7777771A',
      marginHorizontal: isTablet() ? getWidthTab(17) : getWidth(4),
    },

    DIVIDER_GUEST_STYLE: {
      marginTop: isTablet() ? getWidthTab(10) : getWidth(12),
    },

    VERTICAL_DIVIDER: {
      marginHorizontal: isTablet() ? '1%' : '2%',
      backgroundColor: '#7777771A',
      height: '75%',
      marginTop: isTablet() ? getWidthTab(18) : getWidth(8),
      width: 1,
    },

    CHECKOUT_TITLE: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font7 : Font15,
      fontWeight: '400',
      color: colors.background,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    CHECKOUT_BUTTON: {
      marginTop: '4%',
    },
    CHECKOUT_BUTTON_STYLE: {
      width: isTablet() ? '100%' : '100%',
      height: isTablet() ? getWidthTab(40) : getWidth(40),
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      alignSelf: 'center',
    },

    ICONS_TOP_CONTAINER: {
      flexDirection: 'row',
      width: isTablet() ? '90%' : '90%',
      // backgroundColor: '#FFF',
    },
    ICONS_CONTAINER: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: isTablet() ? 'flex-start' : 'flex-start',
      flex: 1,
      // marginHorizontal: isTablet() ? 0 : -20,
      // backgroundColor: 'orange',
    },
    ICON: {
      width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
      height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
    },

    BUTTON_MAIN_CONTAINER: {
      width: '100%',
      // flexDirection: 'column',
      flexDirection: 'row',
    },

    CHECKOUT_BTN_CONTAINER: {
      // width: '100%',
      flexDirection: 'row',
      marginTop: isTablet() ? '0%' : '5%',
      justifyContent: isTablet() ? 'space-between' : 'flex-start',
      marginBottom: isTablet() ? '1%' : '4%',
      width: '100%',
      // backgroundColor: 'pink',
    },

    CHECKOUT_BTN: {
      width: isTablet() ? '49%' : '50%',
      marginLeft: isTablet() ? getWidthTab(15) : getWidth(4),
      top: isTablet() ? getWidthTab(0) : getWidth(0),
      justifyContent: 'center',
    },

    RIGHT_BUTTON_CONTAINER: {
      // backgroundColor: 'yellow',
      width: isTablet() ? '50%' : '50%',
      alignItems: 'center',
      justifyContent: 'center',
      // right: isTablet() ? getWidthTab(0) : getWidth(0),
    },
    LIKE_HEART_ICON: {
      width: isTablet() ? getWidthTab(34) : getWidth(40),
      height: isTablet() ? getWidthTab(34) : getWidth(40),
    },

    LIKE_HEART_ICON_CONTAINER: {
      position: 'absolute',
      top: isTablet() ? getWidthTab(2) : getWidth(12),
      right: isTablet() ? getWidthTab(2) : getWidth(12),
      zIndex: 100,
      width: isTablet() ? getWidthTab(54) : getWidth(48),
      height: isTablet() ? getWidthTab(54) : getWidth(48),
    },

    LINE_DIVIER_VIEW: {
      height: isTablet() ? getWidthTab(2) : getWidth(2),
      top: isTablet() ? getWidthTab(-8) : getWidth(-8),
      backgroundColor: 'blue',
    },
  });
export default myBookingStyle;
