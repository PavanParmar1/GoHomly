import {StyleSheet, Platform} from 'react-native';
import {colors} from '../theme/color';
import {isTablet} from 'react-native-device-info';

const tabBarStyle = (
  getWidth: any,
  getWidthTab: any,
  windowHeight: any,
  orientation: any,
  windowWidth: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      // backgroundColor: 'blue',
      backgroundColor: colors.background,
      flex: 1,
    },

    tabContainer: {
      alignSelf: 'center',
      flex: orientation === 'landscape' && screenWidth === windowWidth ? 1 : 0,
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(40)
          : isTablet()
            ? Platform.OS === 'ios'
              ? getWidthTab(70)
              : getWidthTab(80)
            : getWidth(60),
      marginHorizontal: isTablet()
        ? Platform.OS === 'ios'
          ? getWidthTab(16)
          : getWidthTab(18)
        : getWidth(16),
      marginVertical: isTablet()
        ? Platform.OS === 'ios'
          ? getWidthTab(16)
          : getWidthTab(6)
        : Platform.OS === 'android'
          ? getWidth(6)
          : getWidth(16),
      borderTopWidth: 0,
      right:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '25%'
          : '0%',
      left:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '25%'
          : '0%',
      backgroundColor: 'black',
      position: 'absolute',
      borderRadius: isTablet() ? getWidthTab(50) : getWidth(35),
      // width: orientation === 'landscape' ? '50%' : '100%',
    },
    tabIcon: {
      top: isTablet()
        ? 0
        : Platform.OS === 'ios'
          ? windowHeight > 736
            ? getWidth(14)
            : 0
          : 0,
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(30),
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(30),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabIconSearch: {
      top: isTablet()
        ? getWidthTab(3)
        : Platform.OS === 'ios'
          ? windowHeight > 736
            ? getWidth(18)
            : getWidth(4)
          : getWidth(4),
      backgroundColor: 'black',
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(20),
      width: isTablet() ? getWidthTab(20) : getWidth(20),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(30)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(23),
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(30)
          : isTablet()
            ? getWidthTab(45)
            : getWidth(23),
      aspectRatio: 1,
      resizeMode: 'contain',
    },
  });

export default tabBarStyle;
