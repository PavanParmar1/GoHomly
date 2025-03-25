import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/common';
import {colors} from '../../theme';
import {isTablet} from 'react-native-device-info';

const PropertyDetailScreenStyle = (
  windowWidth: any,
  getWidth: any,
  getWidthTab: any,
  Font17: number,
  Font4: any,
  Font5: any,
  Font6: any,
  Font7: any,
  Font8: any,
  Font9: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: 'black',
      // marginBottom: '24%',
    },
    scrollview: {
      backgroundColor: 'white',
      marginLeft: '3%',
      marginRight: '3%',
      marginBottom: '5%',
    },
    subContainer: {marginBottom: '28%'},
    flatList: {marginTop: '7%'},
    footerview: {
      backgroundColor: 'black',
      width: '100%',
    },
    navbarHeader: {
      height: isTablet() ? getWidthTab(48) : getWidth(48),
      width: isTablet() ? getWidthTab(48) : getWidth(48),
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarBackImage: {
      width: isTablet() ? 40 : 35,
      height: isTablet() ? 40 : 35,
    },
    navbarShareImage: {
      marginHorizontal: 13,
      width: isTablet() ? 40 : 35,
      height: isTablet() ? 40 : 35,
    },
    navbarLikeImage: {
      marginRight: 20,
      width: isTablet() ? 40 : 35,
      height: isTablet() ? 40 : 35,
    },
    navbarTitle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: Font17,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    container: {flex: 1, backgroundColor: colors.background},
    innerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: getWidth(15),
      marginVertical: getWidth(15),
    },
    animatedViewAndroid: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(60)
          : 56,
      width: windowWidth,
      position: 'absolute',
      zIndex: 100,
      backgroundColor: 'white',
    },
  });
export default PropertyDetailScreenStyle;
