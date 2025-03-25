import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const guestDetailFromStyle = (
  Font11: any,
  Font12: any,
  Font13: any,
  Font16: any,
  Font18: any,
  Font9: any,
  getWidth: any,
  getWidthTab: any,
  windowHeight: any,
  windowWidth: any,
  orientation: any,
  screenWidth: any,
  Font7: any,
  Font6: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      marginHorizontal: isTablet() ? '5%' : '3.5%',
      width: isTablet() ? '90%' : '93%',
      paddingTop: '1%',
      paddingHorizontal: isTablet() ? '1%' : '1%',
      marginTop: isTablet() ? '1.5%' : '2.5%',
      paddingBottom: '1%',
    },
    CONTAINER_BIRTH: {
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
    INNER_CONTAINER: {
      // height: isTablet() ? getWidthTab(56) : getWidth(49),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? (windowWidth / 100) * 5
          : isTablet()
            ? (windowWidth / 100) * 8
            : (windowWidth / 100) * 13,
      paddingLeft: isTablet() ? getWidthTab(20) : getWidth(10),
    },
    INNER_DASHED_CONTAINER: {
      height: isTablet() ? getWidthTab(56) : getWidth(45),
      borderStyle: 'dashed',
      //   backgroundColor: 'indigo',
    },
    HEADER_CONTAINER: {
      // ...CONTAINER,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    TITLE: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font18,
      color: '#1A1E25',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    LABEL: {
      fontWeight: '400',
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
    },
    INPUT: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
      // color: colors.textSecondary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      fontWeight: '400',
    },
    INPUTCONDITION: {
      position: 'absolute',
      color: 'red',
      top: isTablet() ? getWidthTab(30) : getWidth(15),
      left: isTablet() ? '37.5%' : '50%',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font11 : Font16,
      includeFontPadding: false,
    },
    ADD_ICON: {
      width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
      height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
    },
    BUTTON_CONTAINER: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
      width: isTablet() ? getWidthTab(734) : getWidth(313),
      justifyContent: 'center',
      marginHorizontal: isTablet() ? getWidthTab(50) : getWidth(30),
      // marginTop: '6%',
    },
    BUTTON_TITLE: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font12 : Font18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    buttonContainer: {
      flexDirection: 'row',
      flex: 2,
      alignItems: 'center',
      marginVertical:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '4%'
          : '5%',
      marginHorizontal: isTablet() ? '6%' : '5%',
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '50%'
          : '100%',
    },
    buttonInnerContainer: {
      flex: 1,
      paddingEnd: isTablet() ? '1%' : '3%',
    },
    buttonInnerContainer2: {
      flex: 1,
      paddingStart: '3%',
    },
    btnTextTablet: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : Font12,
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
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 13,
      marginHorizontal: '0%',
      width: '100%',
    },
    sButtonTablet: {
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? (windowWidth / 100) * 6
          : (windowWidth / 100) * 7,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '100%'
          : '100%',
    },

    Button: {
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 12,
      marginHorizontal: '0%',
      marginTop: '6%',
      width: '100%',
    },
    ButtonTablet: {
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height: (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      marginTop: '4%',
      marginBottom: '2%',
      width: '100%',
    },

    sButtonTitle: {
      fontSize: isTablet() ? Font9 : Font13,
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },

    scrollableModal: {
      height: isTablet()
        ? (windowHeight * 60) / 110
        : (windowHeight * 70) / 110,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    DIVIDER: {
      width: '12%',
      marginTop: '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
    },
  });
export default guestDetailFromStyle;
