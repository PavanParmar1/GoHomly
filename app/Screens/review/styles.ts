import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const reviewStyles = (
  Font12: any,
  Font17: any,
  Font20: any,
  getWidth: any,
  getWidthTab: any,
  windowHeight: any,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
  Font6: any,
  Font7: any,
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
      backgroundColor: 'white',
      flex: 1,
      marginTop: isTablet() ? getWidthTab(5) : getWidth(5),
      // paddingBottom: isTablet() ? getWidthTab(30) : getWidth(55),
      // paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(20),
    },
    scrollview: {backgroundColor: 'white', flex: 1},

    connectButton: {
      right: isTablet() ? 20 : 15,
      bottom: isTablet() ? 35 : 25,
      position: 'absolute',
    },
    connectImage: {
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(60)
          : isTablet()
            ? getWidthTab(85)
            : getWidth(60),
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(60)
          : isTablet()
            ? getWidthTab(85)
            : getWidth(60),
      alignItems: 'center',
      justifyContent: 'center',
    },
    connectText: {
      color: 'white',
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font12
            : Font20,
      includeFontPadding: false,
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
      alignItems: 'center',
    },

    scrollableModal: {
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? (windowHeight * 50) / 110
          : isTablet()
            ? (windowHeight * 40) / 110
            : (windowHeight * 35) / 110,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '70%'
          : '100%',
    },

    DIVIDER: {
      width: '12%',
      marginTop: '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
    },
  });
export default reviewStyles;
