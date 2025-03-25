import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const guestDetailStyle = (
  Font10: any,
  Font11: any,
  Font12: any,
  Font14: any,
  Font15: any,
  Font16: any,
  Font9: any,
  getHeight: any,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  Font7: any,
  Font8: any,
  Font6: any,
  Font5: any,
  Font4: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      backgroundColor: colors.background,
    },

    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(20),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getHeight(20),
    },

    ICON_VERIFIED: {
      width: isTablet() ? getWidthTab(20) : getWidth(14),
      height: isTablet() ? getWidthTab(20) : getHeight(14),
    },

    ICON_VERIFIED2: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(16),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(20)
            : getHeight(16),
    },

    INNER_CONTAINER_LANDSCAPE: {
      backgroundColor: colors.background,
      borderColor: '#77777730',
      borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
      borderWidth: isTablet() ? 2 : 0.3,
      padding: '2.5%',
      width: '45.5%',
      marginStart: '3%',
      // shadowOffset: {width: 0, height: 0},
      // shadowOpacity: 0.3,
      // shadowRadius: 0.5,
      marginTop: isTablet() ? getWidthTab(15) : getWidth(15),
      // marginBottom: isTablet() ? getWidthTab(21) : getWidth(21),
      // marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16),
    },

    INNER_CONTAINER: {
      backgroundColor: colors.background,
      // borderColor: '#77777730',
      // borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
      // borderWidth: isTablet() ? 1 : 0.3,
      padding: '5%',
      // shadowOffset: {width: 0, height: 0},
      // shadowOpacity: 0.3,
      // shadowRadius: 0.5,
      // marginTop: isTablet() ? getWidthTab(15) : getWidth(15),
      // marginBottom: isTablet() ? getWidthTab(21) : getWidth(21),
      // marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16),
    },

    HEADER_CONTAINER: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    INFO_CONTAINER: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0%'
          : isTablet()
            ? '1%'
            : '1%',
    },
    NAME: {
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font15,
      color: '#1A1E25',
      includeFontPadding: false,
      textAlignVertical: 'center',
      // backgroundColor: 'red'
    },
    SHIMMER_NAME: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(18),
      marginEnd: isTablet() ? '3%' : '5%',
      width: isTablet() ? '80%' : '70%',
    },
    INFO: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font10
            : Font14,
      color: colors.textSecondary,
      marginTop: isTablet() ? '2%' : '3%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    SHIMMER_INFO: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(18),
      width: isTablet() ? '50%' : '50%',
      marginTop: isTablet() ? '2%' : '3%',
    },

    PHONE: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font10 : Font14,
      color: colors.textSecondary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop: '4%',
    },

    IMAGE_BUTTON_CONTAINER: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      // backgroundColor: 'pink',
      // marginRight: isTablet() ? getWidthTab(5) : getWidth(5),
    },

    SHIMMER_IMAGE_BUTTON_CONTAINER: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(18),
      width: isTablet() ? '7%' : '10%',
    },
    IMAGE_BUTTON: {
      color: 'black',
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font10 : Font15,
    },

    TAG_STYLE_LANDSCAPE: {
      paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
      borderWidth: isTablet() ? getWidthTab(0.2) : getWidth(0.2),
      borderRadius: isTablet() ? getWidthTab(3) : getWidth(4),
      paddingVertical: isTablet() ? getWidthTab(4) : getWidth(3),
    },

    TAG_STYLE: {
      paddingHorizontal: isTablet() ? getWidthTab(15) : getWidth(10),
      borderWidth: isTablet() ? getWidthTab(0.2) : getWidth(0.2),
      borderRadius: isTablet() ? getWidthTab(3) : getWidth(4),
      paddingVertical: isTablet() ? getWidthTab(3) : getWidth(3),
    },

    SHIMMER_TAG_STYLE: {
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
      height: isTablet() ? getWidthTab(20) : getWidth(20),
      width: isTablet() ? '30%' : '30%',
    },

    TAG_TEX_STYLE: {
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font4
          : isTablet()
            ? Font9
            : Font12,
      color: 'black',
    },

    forgotPasswordText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font11 : Font16,
      color: colors.secondary,
    },

    forgotPassword: {
      alignSelf: 'flex-end',
      // color: colors.secondary,
      marginRight: isTablet() ? '20%' : '6%',
      marginTop: isTablet() ? '1%' : '2%',
    },
  });
export default guestDetailStyle;
