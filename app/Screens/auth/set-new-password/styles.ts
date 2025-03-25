import {StyleSheet} from 'react-native';
import {Fonts, Primary} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const SetNewPasswordStyle = (
  Font11: number,
  Font12: number,
  Font16: number,
  windowWidth: number,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  screenWidth: any,
  Font6: any,
  Font7: any,
  Font8: any,
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
    label_text_style: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
    },
    password: {
      alignItems: 'flex-end',
    },
    passwordIconContainerStyle: {
      // marginRight: '3%',
      opacity: 0.3,
    },
    passwordRetypeTextInput: {
      marginTop: '6%',
    },
    passwordTextInput: {
      marginTop: '6%',
    },
    passwordTextInputTablet: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : isTablet()
            ? '3%'
            : '17%',
      marginHorizontal: '20%',
      paddingHorizontal: '1%',
      width: '60%',
    },
    passwordRetypeTextInputTablet: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '5%'
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
      marginBottom: '10%',
      marginTop: '6%',
      width: '60%',
    },
    submitTextTablet: {
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
export default SetNewPasswordStyle;
