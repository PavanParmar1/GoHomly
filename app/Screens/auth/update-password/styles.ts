import {Platform, StyleSheet} from 'react-native';
import {Fonts, Primary} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const UpdatePasswordStyle = (
  Font11: number,
  Font12: number,
  Font16: number,
  windowWidth: number,
  getWidth: any,
  getWidthTab: any,
  Font14: number,
  Font22: number,
  Font8: number,
  Font18: number,
  orientation: any,
  screenWidth: any,
  Font6: number,
  Font7: number,
) =>
  StyleSheet.create({
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
    submitPasswordButton: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 8,
      height: (windowWidth / 100) * 13,
      justifyContent: 'center',
      marginHorizontal: '7%',
      marginVertical: '8%',
      width: '86%',
    },
    imageContainer: {
      alignItems: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : '9%',
    },
    inputContainer: {
      marginTop: '10%',
    },
    label_text_style: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
    },

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

    // loginText: {
    //   fontFamily: Fonts.SFProRounded.Regular,
    //   fontSize: Font18,
    //   fontWeight: '600',
    //   color: colors.white,
    // },
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
    },
    password: {
      alignItems: 'flex-end',
    },
    passwordIconContainerStyle: {
      marginRight: '3%',
      opacity: 0.3,
    },
    passwordRetypeTextInput: {
      marginTop: '6%',
    },
    passwordTextInput: {
      marginTop: '17%',
    },
    passwordTextInputTablet: {
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
    passwordRetypeTextInputTablet: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : isTablet()
            ? '3%'
            : '4%',
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    inputContainerTablet: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
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
      marginHorizontal: '20%',
      marginTop: '6%',
      marginBottom: '10%',
      width: '60%',
    },
    submitTextTablet: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: Font12,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    otpInputView: {
      width: Platform.OS === 'android' ? '98%' : '100%',
      alignSelf: 'center',
      height: isTablet() ? (windowWidth / 10) * 1 : (windowWidth / 10) * 3,
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
      height: isTablet() ? 55 : 45,
      width: isTablet() ? 45 : 30,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    underlineStyleHighLighted: {
      // borderColor: "red",
    },

    headerText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.SemiBold
        : Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      fontSize: isTablet() ? Font11 : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    infoText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      color: colors.textSecondary,
      fontSize: isTablet() ? Font8 : Font12,
      marginBottom: isTablet() ? '15%' : '10%',
      marginTop: isTablet() ? '2.5%' : '5%',
    },

    loginText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: Font18,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    loginTextTablet: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : Font12,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });
export default UpdatePasswordStyle;
