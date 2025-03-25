import {StyleSheet} from 'react-native';
import {Fonts, Primary} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const ResetPasswordStyle = (
  Font10: number,
  Font11: number,
  Font12: number,
  Font16: number,
  Font18: number,
  windowWidth: number,
  getWidthTab: any,
  getWidth: any,
  screenWidth: any,
  orientation: any,
  Font8: any,
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
    navbarImageTablet: {width: 30, height: 30},
    container: {
      // alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
    },

    forgotPassword: {
      alignSelf: 'flex-end',
      color: colors.secondary,
      marginRight: '8%',
      marginTop: '2%',
    },
    submitEmailButton: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 12,
      justifyContent: 'center',
      marginHorizontal: '7%',
      marginTop: '8%',
      width: '86%',
    },
    submitEmailButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height: (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '20%',
      marginTop: '6%',
      width: '60%',
    },
    imageContainer: {
      alignItems: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : isTablet()
            ? '9%'
            : '0%',
    },
    inputContainer: {
      marginTop: '10%',
    },
    loginText: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: Font18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    loginTextTablet: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : Font12,
      fontWeight: '600',
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    inputContainerTablet: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
    },

    logoText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font11
            : Font16,
      marginTop: isTablet() ? '1%' : '5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    labels: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    newAccount: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '20%'
            : '30%',
      marginBottom: '5%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    newAccountText: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: Primary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    emailTextInput: {
      marginTop: '17%',
    },
    emailTextInputTablet: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '10%'
            : '17%',
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    scrollView: {},
    signUpText: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.secondary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    toastStyle: {
      borderLeftColor: '#FF4500',
      borderRadius: isTablet() ? getWidth(8) : getWidth(10),
      borderLeftWidth: isTablet() ? getWidth(8) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 10 : (windowWidth / 100) * 12,
      width: '80%',
    },
    toastStyleSuccess: {
      borderLeftColor: 'green',
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

    loginButton: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 13,
      // justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
    },
    loginButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
    },

    loginButtonContainerTablet: {
      marginHorizontal: '21%',
      marginTop:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '3%'
          : '6%',
    },

    loginButtonContainer: {
      marginHorizontal: '7%',
      marginTop: '6%',
      borderRadius: getWidth(10),
    },
  });
export default ResetPasswordStyle;
