import {isTablet} from 'react-native-device-info';
import {Fonts} from '../../../app/utils/common';
import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {ScreenWidth} from '@rneui/base';

const horizontalCardStyles = (
  Font14: any,
  Font9: any,
  getHeight: any,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  windowWidth: any,
  screenWidth: any,
  Font7: any,
  Font5: any,
) =>
  StyleSheet.create({
    itemContainer: {
      backgroundColor: 'white',
      borderWidth: 1,
      marginTop: isTablet() ? getWidthTab(20) : getWidth(15),
      marginBottom: isTablet() ? getWidthTab(10) : getWidth(7),
      marginHorizontal:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(4)
          : isTablet()
            ? getWidthTab(7)
            : getWidth(3),
      paddingHorizontal:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(7)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(7),
      paddingVertical:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(1)
          : isTablet()
            ? getWidthTab(2)
            : getWidth(3),
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(5),
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font9
            : Font14,
      color: 'black',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    starImage: {
      width:
        orientation === 'landscape' && screenWidth === windowWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(17)
            : getWidth(15),
      height: isTablet() ? getWidthTab(17) : getHeight(12),
      marginStart: isTablet() ? 10 : 5,
      tintColor: colors.secondary,
    },
  });
export default horizontalCardStyles;
