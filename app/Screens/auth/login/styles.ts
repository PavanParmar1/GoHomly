import {StyleSheet} from 'react-native';
import {Font7, Font8, Font9, Fonts, Primary} from '../../../utils/common';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme/color';

// const loginScreenStyle = (orientation: any) =>
//   StyleSheet.create({
//     viewS: {
//       backgroundColor: orientation === 'portrait' ? 'green' : 'pink',
//     },
//   });
// export default loginScreenStyle;

const LoginStyle = (
  windowWidth: number,
  Font11: number,
  Font16: number,
  getWidth: any,
  Font18: number,
  Font12: number,
  getWidthTab: any,
  orientation: any,
  screenWidth: any,
  Font6: any,
  Font7: any,
  Font8: any,
) =>
  StyleSheet.create({
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 16,
      marginVertical: 10,
    },

    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
    },
    // footerContainer: {
    //   alignItems: 'center',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   marginVertical: '10%',
    // },
    // footerText: {
    //   fontSize: Font16,
    // },
    forgotPassword: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      // color: colors.secondary,
      marginRight: isTablet() ? '20%' : '6%',
      marginTop: isTablet() ? '1%' : '2%',
      // paddingVertical: isTablet() ? getWidthTab(5) : getWidth(5),
      // backgroundColor: 'pink',
      // height: isTablet() ? getWidthTab(48) : getWidth(48),
    },
    forgotPasswordTablet: {
      // backgroundColor:"pink",
      alignSelf: 'flex-end',
      // color: colors.secondary,
      marginRight: isTablet() ? '20%' : '6%',
      marginTop: isTablet() ? '1%' : '2%',
    },
    forgotPasswordText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
      color: colors.secondary,
    },
    forgotPasswordButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 12,
      justifyContent: 'center',
      marginHorizontal: '7%',
      marginTop: '6%',
      width: '86%',
    },
    loginButton: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 13,
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
      // marginBottom: '10%',
      width: '100%',
    },

    loginButtonContainerTablet: {
      marginHorizontal: '21%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : '6%',
    },

    loginButtonContainer: {
      marginHorizontal: '7%',
      marginTop: '6%',
      borderRadius: getWidth(10),
    },

    imageContainer: {
      alignItems: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : isTablet()
            ? '12%'
            : '0%',
    },
    inputContainer: {
      marginTop: '10%',
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
    newAccount: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '15%'
            : windowWidth < 375
              ? '10%'
              : '22%',
      alignSelf: 'center',
    },
    newAccountText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      height: isTablet() ? getWidthTab(48) : getWidth(48),
      textAlignVertical: 'center',
    },
    labels: {
      fontWeight: '400',
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    password: {
      alignItems: 'flex-end',
    },
    passwordIconContainerStyle: {
      marginRight: '3%',
    },
    passwordTextInput: {
      marginTop: '4%',
    },
    passwordTextInputTablet: {
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
    passwordIcon: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(34)
            : getWidth(24),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(34)
            : getWidth(24),
      tintColor: 'black',
    },
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
    userNameTextInput: {
      marginTop: isTablet() ? '10%' : '17%',
    },
    userNameTextInputTablet: {
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
    iconContainerStyle: {
      // marginRight: '3%',
      // marginHorizontal: '0%',
      opacity: 0.3,
      // backgroundColor: 'pink',
    },
    inputContainerTablet: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
      // backgroundColor: 'pink',
      paddingEnd: '0%',
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
    navbarImageTablet: {width: 30, height: 30},
  });
export default LoginStyle;
