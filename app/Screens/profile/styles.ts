import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts, Primary} from '../../utils/common';

const ProfileScreenStyle = (
  getWidth: any,
  getHeight: any,
  getWidthTab: any,
  windowWidth: any,
  windowHeight: any,
  Font10: number,
  Font12: number,
  Font11: number,
  Font13: number,
  Font15: number,
  Font16: number,
  Font17: number,
  Font18: number,
  Font8: number,
  Font7: number,
  orientation: any,
  screenWidth: any,
  Font6: number,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: isTablet() ? getWidthTab(40) : getWidth(5),
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbarImage: {
      width: isTablet() ? getWidthTab(22) : getWidth(19),
      height: isTablet() ? getWidthTab(22) : getWidth(19),
    },
    navbarTitle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font17,
      color: colors.textPrimary,
      includeFontPadding: false,
    },
    outerContainer: {
      // backgroundColor: 'white',
      // flex: 1,
    },
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    title: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font12
            : Font18,
      color: colors.textPrimary,
      includeFontPadding: false,
    },
    mail: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font16,
      color: colors.textSecondary,
      includeFontPadding: false,
    },
    list: {
      fontFamily: isTablet()
        ? Platform.OS === 'android'
          ? Fonts.SFProRounded.SemiBold
          : Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? 'auto'
          : isTablet()
            ? getWidthTab(48)
            : getWidth(48),
      // backgroundColor: 'pink',
    },
    avatar: {
      width: isTablet() ? getWidthTab(102) : getHeight(64),
      height: isTablet() ? getWidthTab(102) : getHeight(64),
      resizeMode: 'contain',
      borderRadius: isTablet() ? getWidthTab(51) : getHeight(64),
      marginRight: isTablet() ? getWidthTab(30) : getHeight(16),
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: isTablet() ? getWidth(20) : getHeight(25),
      marginHorizontal: isTablet() ? getWidth(30) : getHeight(30),
      marginBottom: isTablet() ? getWidth(12) : getHeight(15),
    },
    divider: {
      marginHorizontal: isTablet() ? getWidthTab(60) : getHeight(18),
    },
    logOutText: {
      marginVertical:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(18),
      marginHorizontal: isTablet() ? getWidthTab(10) : getWidth(14),
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      fontFamily: isTablet()
        ? Platform.OS === 'android'
          ? Fonts.SFProRounded.SemiBold
          : Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      includeFontPadding: false,
    },
    listContainer: {
      marginTop: isTablet()
        ? getWidth(5)
        : Platform.OS === 'ios' && windowHeight <= 667
          ? getHeight(2)
          : getHeight(2),
      marginBottom: isTablet()
        ? getWidth(5)
        : Platform.OS === 'ios' && windowHeight <= 667
          ? getHeight(2)
          : getHeight(2),
      marginHorizontal: isTablet() ? getWidth(30) : getHeight(30),
      // backgroundColor: 'orange',
    },
    scrollView: {
      backgroundColor: 'black',
      width: '100%',
      flexGrow: 1,
    },
    flatlistView: {
      backgroundColor: 'white',
      // borderBottomRightRadius: getWidth(20),
      // borderBottomLeftRadius: getWidth(20),
      flexGrow: 1,
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },

    scrollableGuestModal: {
      height: (windowHeight * 50) / 100,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    DIVIDER: {
      width: '12%',
      marginTop: '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
    },

    imageContainer: {
      alignItems: 'center',
      marginTop: isTablet() ? '5%' : '5%',
    },

    logoText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font8
            : Font16,
      marginTop:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? '1%'
            : '5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    logoSubText: {
      color: Primary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font8 : Font13,
      marginTop: isTablet() ? '1%' : '2%',
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'center',
    },

    loginButton: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(10),
      height: (windowWidth / 100) * 11,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
    },

    signUpButtonContainerTablet: {
      marginHorizontal: '20%',
      marginTop: '2%',
      marginBottom: '10%',
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
      marginTop: '10%',
    },

    loginButtonTablet: {
      // alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: getWidth(5),
      height: (windowWidth / 100) * 8,
      // justifyContent: 'center',
      marginHorizontal: '20%',
      marginTop: '8%',
      width: '60%',
    },

    loginText: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: Font15,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    loginTextTablet: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : Font10,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  });
export default ProfileScreenStyle;
