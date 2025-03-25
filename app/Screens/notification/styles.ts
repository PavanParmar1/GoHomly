import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const notificationStyles = (
  Font17: any,
  Font16: any,
  getWidth: any,
  Font12: any,
  Font11: any,
  getWidthTab: any,
  Font9: any,
  Font13: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
      // backgroundColor: 'pink'
    },
    navbarHeaderTablet: {
      marginLeft: getWidthTab(40),
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarImage: {
      width: isTablet() ? getWidthTab(22) : getWidth(19),
      height: isTablet() ? getWidthTab(22) : getWidth(19),
    },
    navbarTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font17,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    container: {flex: 1, backgroundColor: colors.background},
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(15),
      marginVertical: isTablet() ? getWidthTab(35) : getWidth(18),
    },
    headingText: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    badge: {alignSelf: 'center', marginLeft: isTablet() ? '4%' : '3%'},
    // badgeText: {fontSize: isTablet() ? Font16 : Font11},
    buttonTitle: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font11 : Font16,
      color: colors.secondary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    heading: {
      fontFamily:
        Platform.OS === 'android'
          ? Fonts.SFProRounded.Bold
          : Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font11 : Font16,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    bubble: {
      fontFamily:
        Platform.OS === 'android'
          ? Fonts.SFProRounded.Bold
          : Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font9 : Font13,
      color: colors.white,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    bubbleView: {
      backgroundColor: colors.secondary,
      marginLeft: isTablet() ? getWidthTab(12) : getWidth(8),
      borderRadius: isTablet() ? getWidthTab(17) : getWidth(10),
      height: isTablet() ? getWidthTab(34) : getWidth(20),
      width: isTablet() ? getWidthTab(34) : getWidth(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default notificationStyles;
