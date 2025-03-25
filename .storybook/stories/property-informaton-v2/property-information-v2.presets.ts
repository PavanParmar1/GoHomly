import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';

const PropertyInfoV2Style = (
  windowWidth: any,
  getWidth: any,
  getHeight: any,
  getWidthTab: any,
  Font13: number,
  Font10: number,
  Font17: number,
  Font9: number,
  Font16: number,
  Font14: number,
  Font12: number,
  Font11: number,
  Font4: any,
  Font5: any,
  Font6: any,
  Font7: any,
  Font8: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    CONTAINER_STYLE: {
      marginHorizontal: isTablet() ? '1%' : '1%',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? '3%'
            : '4%',
      // backgroundColor: 'orange',
    },

    ITEM_INFORMATION_INNER_CONTAINER: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      // backgroundColor: 'gray',
    },

    ITEM_INFORMATION_SUB_HEADER_STYLE: {
      color: colors.textPrimary,
      fontWeight: isTablet() ? '700' : '700',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font10 : Font17,
    },

    PROPERTY_TITLE_HEADER_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font9
          : isTablet()
            ? Font13
            : Font17,
      width: '85%',
      // backgroundColor: 'red',
    },

    PROPERTY_SUB_DESCRIPTION_STYLE: {
      color: '#636363',
      // marginTop: isTablet() ? getWidthTab(7) : getWidth(7),
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font13,
      width: '90%',
      // backgroundColor: 'orange',
      includeFontPadding: false,
    },

    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(35)
            : getWidth(20),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(35)
            : getHeight(25),
      tintColor: colors.secondary,
    },

    RATE_STYLE: {
      color: '#6A6A6A',
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font16,
      marginLeft: isTablet() ? getWidthTab(5) : getWidth(7),
      // height: isTablet() ? getWidthTab(35) : getHeight(25),
    },
    ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: {
      color: '#636363',
      marginTop: isTablet() ? getWidthTab(7) : getWidth(7),
      fontWeight: '600',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font9 : Font13,
    },

    IMAGE_STYLE: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(25)
            : getWidth(15),
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(25)
            : getWidth(15),
      tintColor: 'black',
    },

    TEXT_STYLE: {
      marginStart: '7%',
      color: '#777777',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font13,
      fontFamily: Fonts.SFProRounded.Regular,
    },

    INNER_CONTAINER: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : isTablet()
            ? '1%'
            : '1%',
      // backgroundColor: 'pink',
    },

    TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
    },

    SUBTITLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font14,
      fontFamily: Fonts.SFProRounded.Regular,
      color: '#777777',
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop: '3%',
    },
    DATEANDTIME: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font13,
      fontFamily: Fonts.SFProRounded.Regular,
      color: colors.textPrimary,
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginTop: isTablet() ? '8%' : '4%',
    },
  });
export default PropertyInfoV2Style;
