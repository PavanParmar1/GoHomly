import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const PropertyOwenerStyle = (
  getWidth: any,
  windowWidth: any,
  Font10: number,
  Font11: number,
  Font12: number,
  Font14: number,
  Font16: number,
  Font18: number,
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
    CONTAINER: {},
    INNER_CONTAINER: {
      flexDirection: 'row',
      alignContent: 'space-around',
    },
    OWNER_CONTAINER: {
      marginTop: '1%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor:"pink"
    },
    INFO_CONTAINER: {
      justifyContent: 'center',
      marginHorizontal: isTablet() ? '8%' : '5%',
    },
    TITLE: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    SUB_TITLE: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textSecondary,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    HEADER_CONTAINER: {
      flexDirection: 'row',
      // marginVertical: '3%',
      marginStart: '1%',
    },
    HEADER: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    OWNER_IMAGE: {
      width: isTablet() ? (windowWidth / 834) * 90 : (windowWidth / 375) * 70,
      height: isTablet() ? (windowWidth / 834) * 90 : (windowWidth / 375) * 70,
      padding: 0,
    },
    ICONS_CONTAINER: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor:"yellow"
    },
    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 834) * 30
          : isTablet()
            ? (windowWidth / 834) * 42
            : (windowWidth / 375) * 30,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (windowWidth / 834) * 30
          : isTablet()
            ? (windowWidth / 834) * 42
            : (windowWidth / 375) * 30,
      paddingLeft: isTablet() ? '10%' : '13%',
      alignSelf: 'flex-end',
    },
    DIVIDER: {
      marginTop: isTablet() ? '5%' : getWidth(19),
    },
  });
export default PropertyOwenerStyle;
