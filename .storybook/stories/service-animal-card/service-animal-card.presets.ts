import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const serviceAnimalCardStyle = (
  getWidth: any,
  getHeight: any,
  getWidthTab: any,
  windowWidth: any,
  Font12: any,
  Font16: any,
  Font10: any,
  Font14: any,
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
    CONTAINER_STYLE: {
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '20%'
          : '2%',
      backgroundColor: 'white',
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    TEXT_STYLE: {
      color: colors.textPrimary,
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font16,
      textAlignVertical: 'center',
      marginTop: '1%',
      includeFontPadding: false,
    },

    SUB_TEXT_STYLE: {
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font10
            : Font14,
      includeFontPadding: false,
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '2%',
      marginBottom: '5%',
    },

    IMAGE_STYLE: {
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getHeight(120)
          : isTablet()
            ? getHeight(200)
            : getHeight(210),
      width: '100%',
      borderRadius: 12,
      marginTop: '8%',
    },

    DIVIDER: {
      width: isTablet() ? getWidthTab(80) : getWidth(48),
      marginTop: isTablet() ? getWidthTab(20) : getWidth(13),
      alignSelf: 'center',
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
    },
  });
export default serviceAnimalCardStyle;
