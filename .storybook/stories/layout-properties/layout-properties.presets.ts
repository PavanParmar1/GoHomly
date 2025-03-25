import {StyleSheet} from 'react-native';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const LayoutPropertiesStyle = (
  getHeight: any,
  windowWidth: any,
  Font10: number,
  Font12: number,
  Font14: number,
  Font16: number,
  Font11: number,
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
    CONTAINER: {
      marginHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '20%'
          : '5%',
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1.5%'
          : isTablet()
            ? '3%'
            : '3%',
      backgroundColor: '#F4F4F4',
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getHeight(20)
          : isTablet()
            ? getHeight(25)
            : getHeight(40),
      justifyContent: 'space-between',
      borderRadius: 7,
      marginVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '0.5%'
          : isTablet()
            ? '1%'
            : '1%',
      flexDirection: 'row',
      alignItems: 'center',
    },

    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (18 * windowWidth) / 834
          : isTablet()
            ? (25 * windowWidth) / 834
            : (15 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? (18 * windowWidth) / 834
          : isTablet()
            ? (25 * windowWidth) / 834
            : (15 * windowWidth) / 375,
      tintColor: '#000',
    },

    CONTAINER_TEXT: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      color: 'black',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font12
            : Font16,
    },

    LIST_TEXT: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: 'black',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font11
            : Font14,
      // marginTop: '3%',
    },

    LIST_TEXT1: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: 'black',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font10
            : Font12,
    },

    LIST_TEXT2: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: 'black',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font5
          : isTablet()
            ? Font11
            : Font14,
    },
  });
export default LayoutPropertiesStyle;
