import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {Amenity} from '../../../app/rematch/types/store.types';

const CarouselComponentStyle = (
  orientation: any,
  windowWidth: any,
  getWidth: any,
  getWidthTab: any,
  Font9: number,
  Font12: number,
  Font5: any,
  Font4: any,
  Font6: any,
  Font7: any,
  Font8: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    CONTAINER_STYLE: {
      width: '100%',
      justifyContent: 'flex-start',
      // backgroundColor: 'pink',
    },

    /**
     * Top Image Container - Header View - View (OuterView, Like Margin Top, etc)
     */
    IMAGE_CONTAINER_STYLE: {
      // backgroundColor: 'black',
      width: '100%',
      height: isTablet()
        ? (540 * windowWidth) / 834
        : (296 * windowWidth) / 375,
    },

    IMAGE_ITEM_CONTAINER_STYLE: {
      // backgroundColor: 'orange',
      width: '100%',
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (300 * windowWidth) / 834
          : isTablet()
            ? (440 * windowWidth) / 834
            : (296 * windowWidth) / 375,
    },

    IMAGE_STYLE: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.disabled,
      resizeMode: 'cover',
    },

    IMAGE_COUNT_CONTAINER: {
      backgroundColor: colors.textPrimary,
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(55)
          : isTablet()
            ? getWidthTab(80)
            : getWidth(46),
      // height: isTablet() ? getWidthTab(35) : getWidth(24),
      // position: 'absolute',
      borderRadius: isTablet() ? getWidthTab(15) : getWidth(12),
      // bottom: isTablet() ? getWidthTab(16) : getWidth(16),
      // right: isTablet() ? getWidthTab(30) : getWidth(16),
    },

    IMAGE_WRAPPER_CONTAINER: {
      position: 'absolute',
      alignSelf: 'flex-end',
      bottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? 0
          : isTablet()
            ? 0
            : getWidth(10),
      right:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(28)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(16),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(48)
          : isTablet()
            ? getWidthTab(70)
            : getWidth(24),
      justifyContent: 'center',
      alignItems: 'center',
    },

    IMAGE_COUNT_TEXT_STYLE: {
      color: '#FFF',
      fontWeight: '600',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' ? Font5 : isTablet() ? Font9 : Font12,
      paddingVertical: isTablet() ? getWidthTab(2) : getWidth(3.5),
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    PAGAINATION_CONTAINER_STYLE: {
      position: 'absolute',
      alignSelf: 'center',
      width: isTablet() ? 8 : 0,
      bottom:
        orientation === 'landscape' && windowWidth === screenWidth
          ? 0
          : isTablet()
            ? 0
            : getWidth(-8),
    },

    PAGAINATION_DOT_STYLE: {
      position: 'absolute',
      alignSelf: 'center',
      width: isTablet() ? 8 : 0,
      backgroundColor: 'green',
      bottom: isTablet() ? getWidthTab(8) : getWidth(-8),
    },

    DOT_SIZE: {
      width: isTablet() ? 12 : 8,
      height: isTablet() ? 12 : 8,
      borderRadius: isTablet() ? 6 : 4,
    },

    SHIMMER_EFFECT_IMAGE_CONTAINER: {
      borderRadius: 20,
      marginLeft: 16,
      marginTop: 8,
      height: 296,
      width: (isTablet() ? windowWidth : (375 * windowWidth) / 375) - 32,
    },
  });
export default CarouselComponentStyle;
