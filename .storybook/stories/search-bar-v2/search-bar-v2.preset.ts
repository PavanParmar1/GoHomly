import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const SearchBarStyleV2 = (
  getWidth: any,
  getWidthTab: any,
  windowWidth: any,
  Font12: number,
  Font10: number,
  Font4: number,
  Font5: number,
  Font6: number,
  Font7: number,
  Font8: number,
  screenWidth: any,
  orientation: any,
) =>
  StyleSheet.create({
    ICON: {
      width: isTablet() ? (50 * windowWidth) / 834 : (40 * windowWidth) / 375,
      height: isTablet() ? (50 * windowWidth) / 834 : (40 * windowWidth) / 375,
    },
    SEARCH_ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
    },

    CONTAINER_STYLE: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(12)
          : isTablet()
            ? getWidthTab(12)
            : getWidth(12),
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(17),
    },

    INNER_CONTAINER_STYLE: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#F6F6F6',
      alignItems: 'center',
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(40)
          : isTablet()
            ? (60 * windowWidth) / 834
            : (46 * windowWidth) / 375,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(23),
      borderWidth: 1,
      borderColor: '#f2f2f2',
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(9)
          : isTablet()
            ? getWidthTab(18)
            : getWidth(7),
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(15)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(16),
      // marginRight: isTablet() ? getWidthTab(12) : getWidth(10),
    },

    SHIMMER_INNER_CONTAINER_STYLE: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(40)
          : isTablet()
            ? (60 * windowWidth) / 834
            : (46 * windowWidth) / 375,
      width: '100%',
      // marginHorizontal: isTablet() ? getWidthTab(20) : getWidth(17),
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(23),
    },
    TEXT_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font8
            : Font12,
      textAlignVertical: 'center',
      includeFontPadding: false,
    },

    SUB_TEXT_STYLE: {
      color: colors.gray,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font4
          : isTablet()
            ? Font7
            : Font10,
      includeFontPadding: false,
    },
  });
export default SearchBarStyleV2;
