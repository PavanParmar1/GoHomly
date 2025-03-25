import {Platform, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  Fonts,
  Primary,
  Font12,
  getWidth,
  getWidthTab,
  Font8,
  windowHeight,
  IS_IOS,
} from '../../utils/common';
import {colors} from '../../theme/color';
import {isTablet} from 'react-native-device-info';

export const sosView: ViewStyle = {
  borderRadius: 5,
  backgroundColor: colors.buttonPrimary,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: isTablet() ? getWidthTab(15) : getWidth(7),
};

export const sosText: TextStyle = {
  color: 'white',
  textAlign: 'center',
  // borderRadius: 5,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font12,
  paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(9),
  paddingVertical: isTablet()
    ? IS_IOS
      ? getWidthTab(4)
      : getWidthTab(0)
    : IS_IOS
      ? getWidth(4)
      : getWidth(0),
  // height: isTablet() ? getWidthTab(30) : getWidth(22),
  // marginRight: isTablet() ? getWidthTab(15) : getWidth(5),
};

export const modal: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
  alignItems: 'center',
};
export const scrollableGuestModal: ViewStyle = {
  height: (windowHeight * 90) / 100,
  width: '70%',
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const chatView: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // backgroundColor: 'orange',
};

export const scrollableModal: ViewStyle = {
  height: (windowHeight * 40) / 110,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

const homeStyle = (
  Font16: any,
  windowWidth: any,
  Font18: any,
  Font12: any,
  getWidth: any,
  getWidthTab: any,
  Font10: any,
  Font15: any,
  Font9: any,
  orientation: any,
  Font7: any,
  screenWidth: any,
  Font8: any,
  Font6: any,
) =>
  StyleSheet.create({
    curveContainer: {
      height: '100%',
      width: '100%',
      // backgroundColor: 'black',
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
      // alignItems: 'center',
    },
    scrollableGuestModal: {
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '90%'
          : '90%',
      // width:
      //   orientation === 'landscape' && screenWidth === windowWidth
      //     ? '70%'
      //     : '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    SHIMMER_TITLE: {
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
      marginTop: isTablet() ? '3%' : '5%',
      height: isTablet() ? getWidthTab(20) : getWidth(18),
      width: isTablet() ? '20%' : '30%',
      borderRadius: 15,
      marginBottom: isTablet() ? '1%' : '2.5%',
    },

    welcomeText: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font16,
      textAlign: 'left',
      includeFontPadding: false,
    },

    headerInnerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: isTablet() ? getWidthTab(20) : getWidth(16),
      marginRight: isTablet() ? getWidthTab(16) : getWidth(12),
      marginTop: isTablet() ? getWidthTab(20) : getWidth(5),
      alignItems: 'center',
      backgroundColor: 'white',
    },

    DIVIDER: {
      width: '12%',
      marginTop:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '3.5%'
          : '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
    },
    scrollView: {
      backgroundColor: 'white',
      width: '100%',
      // flex: 1,
      // borderBottomLeftRadius: 20,
      // borderBottomRightRadius: 20,
      // marginBottom: 60,
    },
    safeAreacontainer: {
      // alignItems: 'center',
      // backgroundColor: colors.background,
      flex: 1,
    },

    TITLE: {
      marginHorizontal:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(35)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(16),
      marginTop:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '2%'
          : isTablet()
            ? '3%'
            : '5%',
      color: colors.textPrimary,
      fontFamily: isTablet()
        ? Fonts.SFProRounded.SemiBold
        : Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      // lineHeight: 24,
      paddingTop: 0,
      // height: 24,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginBottom: isTablet() ? '1%' : '2%',
      // backgroundColor:'blue',
    },

    chatIcon: {
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(35)
            : getWidth(22),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(35)
            : getWidth(22),
      // backgroundColor: 'pink',
    },

    topViewmain: {
      width: '100%',
      backgroundColor: 'white',
      flex: 1,
      // paddingBottom: '10%',
    },
    searchView: {
      width: '100%',
      marginTop: isTablet() ? '5%' : 0,
    },
    searchContainer: {
      width: '100%',
    },
    findYourProperty: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font18,
      paddingLeft: isTablet() ? getWidthTab(30) : getWidth(16),
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    container: {
      borderBottomLeftRadius: getWidth(20),
      borderBottomRightRadius: getWidth(20),
      backgroundColor: colors.background,
      // height: isTablet() ? getWidthTab(650) : getWidth(690),
      paddingBottom: isTablet() ? 50 : 50,
    },
    footerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: '10%',
    },
    footerText: {
      fontSize: 16,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      color: colors.secondary,
      marginRight: '8%',
      marginTop: '2%',
    },
    forgotPasswordButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 8,
      height: (windowWidth / 100) * 12,
      justifyContent: 'center',
      marginHorizontal: '7%',
      marginTop: '6%',
      width: '86%',
    },
    imageContainer: {
      alignItems: 'center',
      marginTop: '9%',
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
    logo: {
      height: 69,
      width: 159,
    },
    logoText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: Font16,
      marginTop: '5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    newAccount: {
      marginTop: '30%',
    },
    newAccountText: {
      color: Primary,
      fontSize: Font16,
      fontFamily: Fonts.SFProRounded.Regular,
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
    signUpText: {
      color: colors.secondary,
      fontSize: Font16,
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    userNameTextInput: {
      marginTop: '17%',
    },
    item: {
      padding: 0,
      marginVertical: 0,
      marginHorizontal: 0,
    },
    title: {
      fontSize: 32,
    },

    buttonInnerContainer2: {
      flex: 1,
      paddingStart: '3%',
    },
    btnTextTablet: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: Font12,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    btnText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: Font18,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    sButton: {
      backgroundColor: colors.secondary,
      borderRadius: getWidth(25),
      height: (windowWidth / 100) * 12,
      marginHorizontal: '0%',
      marginTop: '6%',
      width: '100%',
    },
    sButtonTablet: {
      backgroundColor: colors.secondary,
      borderRadius: getWidth(15),
      height: (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
    },

    connectButton: {
      right: isTablet() ? 30 : 25,
      bottom: isTablet() ? 120 : 90,
      position: 'absolute',
    },

    toolTip: {
      paddingHorizontal:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(5)
          : getWidth(15),
      paddingVertical: getWidth(10),
      borderRadius: getWidth(10),
      right: isTablet() ? getWidthTab(140) : 100,
      left: isTablet() ? getWidthTab(300) : 15,
      bottom:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(75)
          : isTablet()
            ? getWidthTab(135)
            : 92,
      position: 'absolute',
      backgroundColor: colors.secondary,
      alignItems: 'center',
    },

    toolTipText: {
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font15,
      color: colors.background,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    bubble: {
      fontFamily:
        Platform.OS === 'android'
          ? Fonts.SFProRounded.Bold
          : Fonts.SFProRounded.Medium,
      fontSize: isTablet() ? 13 : Font9,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    bubbleView: {
      backgroundColor: colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });
export default homeStyle;
