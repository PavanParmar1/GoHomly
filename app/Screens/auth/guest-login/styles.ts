import {StyleSheet} from 'react-native';
import {
  Fonts,
  Primary,
  GrayTextInputBorder,
} from '../../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../../app/theme/color';

const GuestLoginStyle = (
  Font11: number,
  Font16: number,
  windowWidth: number,
  getWidth: any,
  Font18: number,
  Font15: number,
  getWidthTab: any,
  Font8: number,
  orientation: any,
  screenWidth: any,
  Font6: number,
  Font7: number,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
    },

    loginButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 13,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
    },

    signUpButtonContainerTablet: {
      marginHorizontal: '21%',
      marginTop: '2%',
      marginBottom: '10%',
      // backgroundColor: 'pink',
    },

    loginButtonContainerTablet: {
      marginHorizontal: '20%',
      marginTop: '6%',
    },

    loginButtonContainer: {
      marginHorizontal: '7%',
      marginTop: '6%',
      borderRadius: getWidth(10),
    },

    signUpButtonContainer: {
      borderRadius: getWidth(10),
      marginHorizontal: '8%',
      marginTop: '13%',
    },

    loginButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 5
          : (windowWidth / 100) * 8,
      // justifyContent: 'center',
      marginHorizontal: '0%',
      marginTop: '8%',
      width: '100%',
    },
    imageContainer: {
      alignItems: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '3%'
          : isTablet()
            ? '12%'
            : '19%',
    },
    loginText: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: Font18,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    loginTextTablet: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : Font11,
      color: colors.white,
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
    logoText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font15,
      marginTop: isTablet() ? '1%' : '8%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    newAccount: {
      marginTop: isTablet() ? '20%' : '22%',
      alignSelf: 'center',
    },
    newAccountText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font11 : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    bookingIdTextInput: {
      marginTop: '6%',
    },
    bookingIdTextInputTablet: {
      marginTop: isTablet() ? '3%' : '4%',
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    emailAddressTextInput: {
      marginTop: isTablet() ? '10%' : '17%',
    },
    emailAddressTextInputTablet: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
          : isTablet()
            ? '15%'
            : '17%',
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

    inputTypeContainerDefault: {
      marginHorizontal: '8%',
      width: '84%',
      backgroundColor: 'white',
      marginBottom: 0,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: GrayTextInputBorder,
      height: (windowWidth / 100) * 13,
      marginTop: '2.5%',
    },

    label: {
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
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '4%',
      marginHorizontal: isTablet() ? '21%' : '8%',
    },

    containerTablet: {
      marginTop: isTablet() ? '3%' : '4%',
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    navbarImage: {
      width: isTablet() ? getWidthTab(22) : getWidth(19),
      height: isTablet() ? getWidthTab(22) : getWidth(19),
    },
    navbarImageTablet: {width: 30, height: 30},
  });
export default GuestLoginStyle;
