import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const savedPropertyStyles = (
  Font17: any,
  getWidth: any,
  getWidthTab: any,
  Font12: any,
  windowHeight: any,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: 5,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbarImage: {width: 19, height: 19},
    navbarTitle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font17,
      color: colors.textPrimary,
    },
    outerContainer: {
      backgroundColor: 'black',
      flex: 1,
    },
    container: {
      backgroundColor: colors.background,
      alignItems: 'center',
      paddingTop: isTablet() ? getWidthTab(20) : getWidth(0),
      paddingBottom: isTablet() ? getWidthTab(20) : getWidth(20),
      // borderBottomLeftRadius: getWidth(20),
      // borderBottomRightRadius: getWidth(20),
      flex: 1,
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },

    scrollableModal: {
      height: (windowHeight * 100) / 110,
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
export default savedPropertyStyles;
