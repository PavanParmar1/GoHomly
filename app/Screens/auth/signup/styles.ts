import {StyleSheet} from 'react-native';
import {Fonts, GrayTextInputBorder} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const SignUpStyle = (
  Font10: number,
  Font11: number,
  Font16: number,
  Font18: number,
  Font14: number,
  getWidth: any,
  windowWidth: number,
  Font12: number,
  getWidthTab: any,
  screenWidth: any,
  orientation: any,
  Font6: any,
  Font7: any,
  Font8: any,
) =>
  StyleSheet.create({
    compulsory: {
      color: colors.error,
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

    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    createAccountButton: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 8,
      height: getWidth(45),
      justifyContent: 'center',
      marginHorizontal: '7%',
      marginTop: '7%',
      width: '86%',
    },
    createAccountButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      // marginTop: '4%',
      width: '100%',
    },

    signUpButtonContainerTablet: {
      marginHorizontal: '21%',
      marginTop: '2%',
      marginBottom: '10%',
    },

    signUpButtonContainer: {
      marginHorizontal: '7%',
      borderRadius: getWidth(10),
      marginBottom: '5%',
    },

    checkboxContainer: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '9%'
            : '7%',
      marginHorizontal: 0,
      backgroundColor: 'transparent',
      padding: 0,
    },
    iconContainerStyle: {
      // marginRight: '3%',
      opacity: 0.3,
    },
    imageContainer: {
      alignItems: 'center',
      // marginTop: getWidth(5),
      marginBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : isTablet()
            ? getWidth(20)
            : getWidth(30),
      paddingEnd: '0%',
    },
    infoText: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font11
            : Font16,
      marginTop: isTablet() ? '1%' : '5%',
      // fontWeight: '400',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    containerPhone: {
      marginTop: '4%',
    },
    containerTablet: {
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
      paddingEnd: '0%',
    } as any,
    inputStyle: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
      // fontWeight: '400',
      includeFontPadding: false,
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
    label: {
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
      marginTop: '4%',
      marginHorizontal: isTablet() ? '21%' : '8%',
    },
    signUpText: {
      color: colors.white,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      // fontWeight: '600',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    termText: {
      color: colors.secondary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font12 : Font18,
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: isTablet() ? '3%' : '5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    // logo: {
    //   height: getWidth(69),
    //   width: getWidth(159),
    // },
    scrollView: {},
    // titleText: {
    //   color: colors.textPrimary,
    //   fontFamily: Fonts.SFProRounded.Regular,
    //   fontSize: Font24,
    //   fontWeight: '600',
    //   marginVertical: '5%',
    // },
    userNameTextInput: {
      marginTop: getWidth(30),
    },

    phoneNumber: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: '#7777774A',
      height: isTablet() ? 65 : 48,
      width: isTablet() ? '58%' : '84%',
      borderWidth: 1,
      borderRadius: 7,
      marginStart: isTablet() ? '21%' : '8%',
      alignItems: 'center',
      paddingHorizontal: '1%',
      overflow: 'hidden',
    },
    phoneNumberText: {
      width: isTablet() ? '90%' : '80%',
      fontSize: isTablet() ? Font11 : Font16,
      color: 'black',
    },
    userNameTextInputTablet: {
      marginTop: isTablet() ? getWidth(20) : getWidth(30),
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    partnersContainer: {
      flexDirection: 'row',
      marginHorizontal: '5%',
      // marginVertical: '2%',
    },
    partnersContainerTablet: {
      flexDirection: 'row',
      marginHorizontal: '20%',
      marginTop: 10,
      // marginVertical: '3%',
      // marginVertical: '2%',
    },

    termsContainer: {
      flexDirection: 'row',
      marginHorizontal: '5%',
      marginVertical: '3%',
      marginBottom: windowWidth < 375 ? '0%' : '0%',
    },
    termsContainerTablet: {
      flexDirection: 'row',
      marginHorizontal: '20%',
      // marginVertical: '2%',
      // marginBottom: '0%',
      marginTop: '2%',
    },

    createAczcountButton: {
      marginHorizontal: '0%',
      width: '100%',
    },

    terms: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font14,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop: isTablet() ? '1%' : '2%',
    },

    conditionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    condition: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font14,
      color: colors.secondary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      textDecorationLine: 'underline',
    },
    disabledInput: {
      backgroundColor: colors.background,
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
      marginRight: isTablet() ? getWidthTab(-6) : 0,
    },
    imageIcon: {
      width: isTablet() ? getWidth(14) : getWidth(22),
      height: isTablet() ? getWidth(14) : getWidth(22),
    },
    // loginButton: {
    //   // alignItems: 'center',
    //   backgroundColor: colors.secondary,
    //   borderRadius: getWidth(10),
    //   height: (windowWidth / 100) * 12,
    //   // justifyContent: 'center',
    //   marginHorizontal: '7%',
    //   marginTop: '6%',
    //   width: '86%',
    // },
    // loginButtonTablet: {
    //   // alignItems: 'center',
    //   backgroundColor: colors.secondary,
    //   borderRadius: 8,
    //   height: (windowWidth / 100) * 12,
    //   // justifyContent: 'center',
    //   marginHorizontal: '20%',
    //   marginTop: '6%',
    //   width: '60%',
    // },
    vaccinationTouch: {
      marginHorizontal: '3.5%',
      width: '93%',
      height: 50,
      alignSelf: 'center',
      bottom: 0,
      paddingTop: '1%',
      paddingHorizontal: '1%',
      // backgroundColor: 'green',
      marginTop: '2.5%',
      paddingBottom: '1%',
      position: 'absolute',
    },
    centeredView: {
      flex: 1,
      paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
      backgroundColor: colors.background,
    },
    formModal: {
      marginTop: getWidth(44),
      marginHorizontal: 0,
    },
    modalView: {
      marginHorizontal: 0,
      justifyContent: 'flex-end',
      marginVertical: 0,
    },
    filterModalContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '90%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    datePickerModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    inputTypeContainerDefault: {
      marginHorizontal: '8%',
      width: '84%',
      marginBottom: 0,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: GrayTextInputBorder,
      height: (windowWidth / 100) * 13,
      marginTop: '2%',
    },
  });
export default SignUpStyle;
