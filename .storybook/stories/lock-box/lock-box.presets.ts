import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const LockBoxStyle = (
  windowWidth: any,
  getWidth: any,
  getWidthTab: any,
  Font12: number,
  Font14: number,
  Font20: number,
  Font8: number,
  Font4: any,
  Font5: any,
  Font6: any,
  Font7: any,
  Font9: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    CONTAINER: {
      backgroundColor: colors.background,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(10),
    },
    INNER_CONTAINER: {
      // marginHorizontal: isTablet() ? '3%' : '3%',
      // marginVertical: isTablet() ? '2.5%' : '3.2%',
    },
    IMG_CONTAINER: {
      flexDirection: 'row',
      marginTop: '1%',
    },
    TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
    },

    TITLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font20,
      fontFamily: Fonts.SFProRounded.Bold,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '0%',
    },
    SUBTITLE: {
      color: colors.textPrimary,
      marginVertical: isTablet() ? '2%' : '3%',
      includeFontPadding: false,
      textAlignVertical: 'center',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font8
            : Font14,
      fontFamily: Fonts.SFProRounded.Regular,
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '0%',
    },

    IMG: {
      width: isTablet() ? (100 * windowWidth) / 834 : (60 * windowWidth) / 375,
      height: isTablet() ? (100 * windowWidth) / 834 : (60 * windowWidth) / 375,
    },
  });
export default LockBoxStyle;
