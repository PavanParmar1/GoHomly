import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const NearByV2Style = (
  windowWidth: number,
  getWidthTab: any,
  getWidth: any,
  Font12: number,
  Font18: number,
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
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (21 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (21 * windowWidth) / 375,
    },

    CONTAINER_STYLE: {
      justifyContent: 'flex-start',
      width: '100%',
      marginVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(5)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(7),
      alignItems: 'flex-start',
    },

    /**
     * Top Header Container - Header View - View (OuterView, Like Margin Top, etc)
     */
    HEADER_CONTAINER_STYLE: {
      // height: 40,
      marginBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0.5%'
          : isTablet()
            ? '1.25%'
            : '3%',
    },

    HEADER_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font12
            : Font18,
      paddingLeft:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(16),
      paddingTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(2)
          : isTablet()
            ? getWidthTab(6)
            : getWidth(6),
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    /**
     * InnerContainer - Row Inner View - View (OuterView, Like Margin Top, etc)
     */
    ITEM_CONTAINER_SOLID: {
      alignItems: 'center',
      marginLeft:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(16),
    },

    ITEM_TITLE_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font8
            : Font12,
      width: '115%',
      // lineHeight: 16,
      // position: 'absolute',
      paddingTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(5)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(10),
      textAlign: 'center',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ITEM_IMAGE_CONTAINER: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (40 * windowWidth) / 834
          : isTablet()
            ? (60 * windowWidth) / 834
            : (40 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (40 * windowWidth) / 834
          : isTablet()
            ? (60 * windowWidth) / 834
            : (40 * windowWidth) / 375,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.secondary,
      backgroundColor: '#FFF2F3B8',
      borderWidth: isTablet()
        ? (1 * windowWidth) / 834
        : (0.5 * windowWidth) / 375,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
    },

    SHIMMER_EFFECT_HEADER_TEXT_CONTAINER: {
      marginLeft:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(16),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(26)
            : getWidth(18),
      borderRadius: isTablet() ? getWidthTab(13) : getWidth(9),
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(100)
          : isTablet()
            ? getWidthTab(140)
            : getWidth(80),
      marginBottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0.5%'
          : isTablet()
            ? '1.25%'
            : '1.5%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(3)
          : isTablet()
            ? getWidthTab(6)
            : getWidth(6),
    },

    SHIMMER_EFFECT_IMAGE_CONTAINER: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (40 * windowWidth) / 834
          : isTablet()
            ? (60 * windowWidth) / 834
            : (40 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (40 * windowWidth) / 834
          : isTablet()
            ? (60 * windowWidth) / 834
            : (40 * windowWidth) / 375,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (20 * windowWidth) / 834
          : isTablet()
            ? (30 * windowWidth) / 834
            : (20 * windowWidth) / 375,
    },

    SHIMMER_EFFECT_TEXT_CONTAINER: {
      borderRadius: 20,
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(5)
          : isTablet()
            ? getWidthTab(4)
            : getWidth(0),
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(40)
          : isTablet()
            ? getWidthTab(70)
            : getWidth(40),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(15)
            : getWidth(10),
    },
  });
export default NearByV2Style;
