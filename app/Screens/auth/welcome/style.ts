import {StyleSheet} from 'react-native';
import {Fonts} from '../../../utils/common';
import {colors} from '../../../theme/color';
import {isTablet} from 'react-native-device-info';

const WelcomeStyle = (
  windowWidth: any,
  Font12: any,
  Font22: any,
  Font13: any,
  Font9: any,
  getWidth: any,
  Font18: any,
  IS_IOS: any,
  orientaion: any,
  Font7: any,
  Font8: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
    },

    background: {
      marginTop: isTablet() ? '3%' : '6%',
    },
    innerContainer: {
      position: 'absolute',
      bottom: 0,
      paddingTop:
        orientaion === 'landscape' && windowWidth === screenWidth
          ? '30%'
          : '55%',
    },

    largeText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.Bold
        : Fonts.SFProRounded.Medium,
      fontSize:
        orientaion === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font22,
      marginTop:
        orientaion === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : isTablet()
            ? '4%'
            : IS_IOS
              ? '7%'
              : '4%',
      color: colors.buttonPrimary,
    },
    smallText: {
      fontFamily: isTablet()
        ? Fonts.SFProRounded.Medium
        : Fonts.SFProRounded.Regular,
      fontSize:
        orientaion === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font12,
      color: colors.buttonPrimary,
      marginTop:
        orientaion === 'landscape' && windowWidth === screenWidth
          ? '0%'
          : isTablet()
            ? '1%'
            : IS_IOS
              ? '2%'
              : '0%',
    },
    buttonContainer_landscape: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '3%',
      marginBottom: '5%',
      width: '50%',
    },

    buttonContainer: {
      flexDirection: 'row',
      flex: 2,
      alignItems: 'center',
      marginTop: isTablet() ? '7%' : IS_IOS ? '10%' : '7%',
      marginBottom: isTablet() ? '7%' : '7%',
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
        orientaion === 'landscape' && windowWidth === screenWidth
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
        orientaion === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 100) * 6
          : (windowWidth / 100) * 8,
      justifyContent: 'center',
      marginHorizontal: '0%',
      width: '100%',
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
  });

export default WelcomeStyle;
