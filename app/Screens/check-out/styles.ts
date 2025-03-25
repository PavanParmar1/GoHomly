import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';
import {isTablet} from 'react-native-device-info';
const checkOutStyles = (
  Font10: any,
  Font12: any,
  Font15: any,
  Font17: any,
  Font18: any,
  Font9: any,
  getWidth: any,
  getWidthTab: any,
  Font6: any,
  Font7: any,
  Font8: any,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: 5,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarImage: {width: 19, height: 19},
    navbarTitle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font17,
      color: colors.textPrimary,
    },
    outerContainer: {
      marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(20),
      marginTop: isTablet() ? getWidthTab(12) : getWidth(12),
    },
    inputContainer: {
      marginHorizontal: 0,
      width: '100%',
      // marginBottom: isTablet() ? getWidthTab(30) : getWidth(45),
    },
    inputField: {
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(100)
          : isTablet()
            ? getWidthTab(150)
            : getWidth(75),
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(5),
      marginHorizontal: '0%',
      borderColor: '#777777',
      borderWidth: 1,
    },
    inputStyle: {
      marginVertical: 0,
      alignSelf: 'flex-start',
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textSecondary,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font12,
    },
    itemQuesView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemDot: {
      width: isTablet() ? getWidthTab(10) : getWidth(10),
      height: isTablet() ? getWidthTab(10) : getWidth(10),
      backgroundColor: colors.textSecondary,
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(5),
      marginHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
    },
    itemQuestion: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: 'black',
      fontSize: isTablet() ? Font10 : Font15,
      marginBottom: '1%',
    },
    buttonView: {
      marginTop: isTablet() ? getWidthTab(25) : getWidth(20),
      alignItems:
        orientation === 'landscape' && screenWidth === windowWidth
          ? 'center'
          : 'center',
    },
    mainView: {
      backgroundColor: 'white',
      // borderBottomLeftRadius: getWidth(20),
      // borderBottomRightRadius: getWidth(20),
      flex: 1,
      // marginBottom: isTablet() ? getWidthTab(65) : 0,
    },
    scrollView: {backgroundColor: 'black'},
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
    inputFieldStyle: {height: 0},

    submitButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(45)
          : isTablet()
            ? getWidthTab(60)
            : getWidth(45),
      marginHorizontal: '0%',
      width: '100%',
      justifyContent: 'center',
    },
    buttonTitle: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });

export default checkOutStyles;
