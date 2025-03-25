import {Fonts} from '../../../app/utils/common';
import {colors} from '../../../app/theme/color';
import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';

const PersonalInfoStyle = (
  getWidth: any,
  getWidthTab: any,
  windowWidth: any,
  Font11: number,
  Font12: number,
  Font14: number,
  Font16: number,
  Font18: number,
  Font24: number,
  screenWidth: any,
  orientation: any,
  Font7: any,
) =>
  StyleSheet.create({
    compulsory: {
      color: colors.error,
    },
    container: {
      backgroundColor: 'white',
      width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    innerContainer: {
      // backgroundColor: 'pink',
      // borderBottomRightRadius: isTablet() ? getWidthTab(20) : getWidth(20),
      // borderBottomLeftRadius: isTablet() ? getWidthTab(20) : getWidth(20),
      // backgroundColor: 'red',
      justifyContent: 'center',
      paddingHorizontal: isTablet() ? getWidthTab(60) : 0,
      flex: 1,
      alignItems:
        orientation === 'landscape' && screenWidth === windowWidth
          ? 'center'
          : 'stretch',
    },
    saveButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      height: isTablet() ? (windowWidth / 100) * 8 : (windowWidth / 100) * 13,
      // height: (windowWidth / 100) * 12.5,
      justifyContent: 'center',
      alignSelf: 'center',
      // marginHorizontal: isTablet() ? getWidthTab(0) : getWidth(36),
      marginTop: isTablet() ? getWidthTab(50) : getWidth(30),
      marginBottom: isTablet() ? getWidthTab(20) : getWidth(25),
      width: isTablet() ? getWidthTab(700) : getWidth(335),
    },
    iconContainerStyle: {
      marginRight: '3%',
      opacity: 0.3,
    },
    inputContainer: {
      marginTop: isTablet() ? getWidthTab(20) : getWidth(15),
      marginHorizontal: isTablet() ? 0 : getWidth(16),
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(500)
          : isTablet()
            ? getWidthTab(700)
            : getWidth(343),
      // backgroundColor: 'red',
    },
    disabledButton: {
      width: isTablet() ? getWidthTab(700) : getWidth(335),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
      marginHorizontal: isTablet() ? getWidthTab(10) : getWidth(16),
    },
    inputStyle: {
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
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
      fontWeight: '400',
      includeFontPadding: false,
      paddingBottom: Platform.OS === 'android' ? -20 : 0,
      textAlignVertical: 'center',
    },
    loginText: {
      color: colors.white,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font12 : Font18,
      fontWeight: '600',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    titleText: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font14 : Font24,
      fontWeight: '600',
      marginVertical: '5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    userNameTextInput: {
      marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
    },
    disabledInput: {
      backgroundColor: 'transparent',
    },
    imageIcon: {
      width: isTablet() ? getWidthTab(30) : getWidth(22),
      height: isTablet() ? getWidthTab(30) : getWidth(22),
    },
    buttonLabel: {
      marginTop: isTablet() ? getWidthTab(20) : getWidth(15),
      marginLeft: isTablet() ? getWidthTab(10) : getWidth(19),
      fontSize: isTablet() ? Font11 : Font16,
      marginBottom: '2%',
      fontWeight: Platform.OS === 'android' ? '500' : '400',
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    buttonPlaceholder: {
      alignSelf: 'flex-start',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font11 : Font16,
      fontWeight: '400',
      color: '#77777770',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    INPUT_CONTAINER_TAB: {
      paddingHorizontal: isTablet() ? '3%' : '3%',
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(500)
          : isTablet()
            ? getWidthTab(700)
            : getWidth(335),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? (windowWidth / 100) * 5
          : isTablet()
            ? (windowWidth / 100) * 8
            : (windowWidth / 100) * 13,
      // height: (windowWidth / 100) * 8,
    },
    TOUCHABLE_SYLE: {
      backgroundColor: 'transparent',
      width: isTablet() ? getWidthTab(700) : getWidth(335),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
      position: 'absolute',
      alignSelf: 'center',
      bottom: getWidth(4),
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    },
  });
export default PersonalInfoStyle;
