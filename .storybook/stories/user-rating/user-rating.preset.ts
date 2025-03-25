import {isTablet} from 'react-native-device-info';
import {Fonts} from '../../../app/utils/common';
import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';

const userRatingStyles = (
  Font12: any,
  Font13: any,
  Font15: any,
  Font22: any,
  Font9: any,
  getHeight: any,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  Font6: any,
  Font7: any,
  Font8: any,
  windowWidth: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    itemMain: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginVertical:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidth(4)
          : getWidth(8),
    },

    itemRatingText: {
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font9
            : Font12,
      // width: isTablet() ? getWidthTab(30) : getWidth(15),
      width: '10%',
      color: 'rgba(0, 0, 0, 0.6)',
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    itemProgView: {
      width: '70%',
      // flex: 1,
      //marginHorizontal: isTablet() ? getWidthTab(15) : getWidth(8),
      // justifyContent: 'center',
      marginEnd: '5%',
    },
    itemProgBar1: {
      width: '100%',
      height: isTablet() ? getWidthTab(16) : getWidth(10),
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(2),
    },
    itemProgBar2: {
      position: 'absolute',
      height: isTablet() ? getWidthTab(16) : getWidth(9),
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(2),
    },
    percentage: {
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font9
            : Font12,
      color: 'rgba(0, 0, 0, 0.3)',
      fontFamily: Fonts.SFProRounded.Regular,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
      width: '15%',
    },

    ratingText: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font8
          : isTablet()
            ? Font15
            : Font22,
      color: 'rgba(0, 0, 0, 0.87)',
      textAlignVertical: 'center',
      includeFontPadding: false,
    },

    subText: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font9
            : Font13,
      color: colors.darkgray,
      includeFontPadding: false,
      marginTop: isTablet() ? '1%' : '2%',
    },

    container: {
      flex: 1,
      borderLeftWidth: 0.6,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      paddingHorizontal: isTablet() ? '2%' : '3%',
    },

    imageStyle: {
      height:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getHeight(22),
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getHeight(22),
      marginStart: '20%',
      tintColor: colors.secondary,
    },
  });
export default userRatingStyles;
