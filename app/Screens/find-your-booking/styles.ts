import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/common';
import {colors} from '../../theme/color';
import {isTablet} from 'react-native-device-info';

const findBookingStyles = (
  Font18: any,
  windowWidth: any,
  getWidth: any,
  windowHeight: any,
  Font12: any,
  getWidthTab: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: isTablet() ? getWidthTab(45) : getWidth(5),
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    container: {
      backgroundColor: 'black',
      flexGrow: 1,
    },
    mainView: {
      backgroundColor: colors.background,
    },
    bookingDatailsContainer: {
      marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16.5),
    },
    dataContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: getWidth(16),
      marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16.5),
    },
    heading: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font12 : Font18,
      color: '#1A1E25',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    addIcon: {
      width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
      height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 30,
    },
    headerIcon: {
      width: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 25,
      height: isTablet() ? (windowWidth / 834) * 30 : (windowWidth / 375) * 25,
    },
    centeredView: {
      flex: 1,
      backgroundColor: colors.background,
    },
    formModal: {
      marginTop: getWidth(44),
      justifyContent: 'flex-end',
      marginBottom: 0,
      height: 150,
      marginHorizontal: 0,
    },
    bookProperty: {
      borderTopLeftRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      borderTopEndRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      backgroundColor: colors.background,
      height: isTablet()
        ? (windowHeight * 70) / 100
        : (windowHeight * 88) / 100,
    },
    bookPropertyModal: {
      // marginTop: getWidth(100),
      justifyContent: 'flex-end',
      marginBottom: 0,
      marginHorizontal: 0,
    },
    submitButton: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
    },
    buttonContainer: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
      height: isTablet() ? getWidthTab(60) : getWidth(45),
      justifyContent: 'center',
      marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(25),
      marginTop: '2%',
    },
    buttonTitleStyle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font18,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    footerview: {
      backgroundColor: 'black',
      width: '100%',
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    scrollableModal: {
      height: (windowHeight * 88) / 100,
      backgroundColor: 'white',
      borderTopStartRadius: isTablet() ? getWidthTab(20) : getWidth(20),
      borderTopEndRadius: isTablet() ? getWidthTab(20) : getWidth(20),
    },
    scrollableModalContent1: {
      height: 200,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText1: {
      fontSize: 20,
      color: 'white',
    },

    modalStyle: {
      alignItems: 'center',
      width: '100%',
    },
    modalView: {
      backgroundColor: colors.background,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
      paddingVertical: isTablet() ? getWidthTab(30) : getWidth(30),
      paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(20),
      alignItems: 'center',
      width: isTablet() ? '70%' : '90%',
    },

    scrollableModalContent2: {
      height: 200,
      backgroundColor: '#A9DCD3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText2: {
      fontSize: 20,
      color: 'white',
    },
    DIVIDER: {
      width: '12%',
      marginTop: '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
    },

    addButton: {
      right: isTablet() ? 20 : 15,
      bottom: isTablet() ? 35 : 25,
      position: 'absolute',
    },
  });
export default findBookingStyles;
