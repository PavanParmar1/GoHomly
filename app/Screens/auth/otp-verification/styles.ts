import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const ForgotStyle = (
  Font12: any,
  Font14: any,
  windowWidth: any,
  windowHeight: any,
  getWidth: any,
  Font18: any,
  Font22: any,
  Font8: any,
  Font16: any,
  Font10: any,
  Font11: any,
  getWidthTab: any,
  orientation: any,
  screenWidth: any,
  Font6: any,
  Font7: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: 5,
      height: getWidth(48),
      width: getWidth(48),
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarHeaderTablet: {
      marginLeft: 10,
      height: getWidthTab(48),
      width: getWidthTab(48),
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarImage: {
      width: isTablet() ? getWidthTab(22) : getWidth(19),
      height: isTablet() ? getWidthTab(22) : getWidth(19),
    },
    // navbarImageTablet: {width: 30, height: 30},
    // borderStyleBase: {
    //   height: 45,
    //   width: 30,
    // },

    borderStyleHighLighted: {
      // borderColor: "",
      // backgroundColor:'red'
    },
    screenContainer: {
      marginHorizontal: isTablet() ? '20%' : '6%',
      marginTop: (windowHeight / 100) * 12,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.SemiBold
        : Fonts.SFProRounded.Medium,
      color: colors.textPrimary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font22,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth && '10%',
    },
    infoText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      color: colors.textSecondary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font8
            : Font12,
      marginBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '15%'
            : '10%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1.5%'
          : isTablet()
            ? '2.5%'
            : '5%',
    },
    otpInputView: {
      width: Platform.OS === 'android' ? '98%' : '100%',
      alignSelf: 'center',
      height: isTablet() ? (windowWidth / 10) * 1 : (windowWidth / 10) * 3,
    },
    submitButtonContainer: {
      marginHorizontal: 0,
      width: '100%',
      height: (windowWidth / 100) * 13,
      // alignItems: 'center',
      // backgroundColor: colors.secondary,
      // borderRadius: 8,
      // paddingVertical: (windowWidth / 100) * 4,
      // bottom:'8%'
      // width:'96%'
    },
    submitButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : '6%',
      width: '100%',
    },
    submitButtonText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      color: colors.background,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    otpButtonContainer: {
      alignItems: 'flex-end',
      marginTop: '4%',
    },
    otpTitle: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      // color: colors.secondary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    underlineStyleBase: {
      borderBottomWidth: 1,
      // paddingVertical: isTablet() ? getWidth(16) : getWidth(5),
      borderColor: 'rgba(18, 18, 18, 0.2)',
      borderWidth: 0,
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize: isTablet()
        ? Platform.OS === 'android'
          ? Font14
          : Font16
        : Font22,
      height: isTablet() ? getWidthTab(55) : getWidth(45),
      width: isTablet() ? getWidthTab(45) : getWidth(30),
      includeFontPadding: false,
      textAlignVertical: 'center',
      // backgroundColor:"pink"
    },

    underlineStyleHighLighted: {
      // borderColor: "red",
    },
    toastStyle: {
      borderLeftColor: 'orange',
      borderRadius: isTablet() ? getWidth(8) : getWidth(10),
      borderLeftWidth: isTablet() ? getWidth(8) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 10 : (windowWidth / 100) * 12,
      width: '80%',
    },
    toastStyleSuccess: {
      borderLeftColor: '#32CD32',
      borderRadius: isTablet() ? getWidth(8) : getWidth(6),
      borderLeftWidth: isTablet() ? getWidth(8) : getWidth(6),
      height: isTablet() ? (windowWidth / 100) * 10 : (windowWidth / 100) * 12,
      width: '80%',
    },
    contentContainerStyle: {
      paddingHorizontal: isTablet() ? '3%' : '5%',
    },

    text1Props: {
      fontSize: isTablet() ? Font12 : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    text2Props: {
      fontSize: isTablet() ? Font10 : Font11,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });
export default ForgotStyle;
