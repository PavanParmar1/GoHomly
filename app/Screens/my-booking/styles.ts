import {Platform, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const myBookingStyles = (
  getWidth: any,
  getWidthTab: any,
  Font14: any,
  Font9: any,
  orientation: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: 5,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },

    segmentContainer: {
      paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(15),
      paddingTop: isTablet() ? getWidthTab(30) : getWidth(25),
      // paddingBottom: isTablet() ? getWidthTab(30) : getWidth(20),
      backgroundColor: 'orange',
    },
    segment: {
      height: isTablet() ? getWidthTab(46) : getWidth(32),
      width: isTablet() ? getWidthTab(714) : getWidth(343),
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollview: {
      backgroundColor: 'black',
      width: '100%',
    },
    flatList: {alignSelf: 'center'},
    flatlistView: {
      backgroundColor: 'white',
      borderBottomRightRadius: getWidth(20),
      borderBottomLeftRadius: getWidth(20),
      // paddingBottom: isTablet() ? 50 : 50,
    },
    footerview: {
      backgroundColor: 'black',
      width: '100%',
    },
    segmentFontStyle: {
      fontSize: isTablet() ? Font9 : Font14,
      fontFamily: Fonts.SFProRounded.Regular,
    },
    activeSegmentFontStyle: {
      fontSize: isTablet() ? Font9 : Font14,
      fontFamily:
        Platform.OS === 'ios'
          ? Fonts.SFProRounded.SemiBold
          : Fonts.SFProRounded.Bold,
    },
    tabView: {
      backgroundColor: '#EEEEF0',
      marginTop: isTablet() ? getWidthTab(30) : getWidth(25),
      marginBottom: isTablet() ? getWidthTab(30) : getWidth(20),
      marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(15),
      borderRadius: 9,
      paddingHorizontal: 0,
      elevation: 0,
      // height: isTablet() ? getWidthTab(33) : getWidth(40),
      alignItems: 'center',

      // padding: '0.7%',
    },
    tabContainer: {
      padding: '0.7%',
      backgroundColor: 'transparent',
      borderRadius: 5,
    },
  });
export default myBookingStyles;
