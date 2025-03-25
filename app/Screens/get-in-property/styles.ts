import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/common';
import {isTablet} from 'react-native-device-info';

const getPropertyStyles = (
  Font5: any,
  Font7: any,
  Font9: any,
  Font10: any,
  Font12: any,
  Font14: any,
  Font16: any,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    container: {backgroundColor: 'white', flex: 1},
    headerText: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font9
          : isTablet()
            ? Font12
            : Font16,
      color: 'black',
      includeFontPadding: false,
    },
    bulletPoint: {
      fontSize: 5,
      marginTop: isTablet() ? '1.3%' : '1.6%',
      width: isTablet() ? '6%' : '8%',
      textAlign: 'right',
      color: '#5F5F5F',
      includeFontPadding: false,
    },
    subHeader: {
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font12
            : Font16,
      color: 'black',
      marginStart: isTablet() ? '3%' : '4%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    subText: {
      // marginBottom: '1%',
      width: isTablet() ? '92%' : '88%',
      fontFamily: Fonts.SFProRounded.Light,
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      marginStart: '2%',
      color: '#5F5F5F',
      includeFontPadding: false,
    },
    divider: {
      borderColor: 'rgba(255, 100, 108, 0.17)',
      marginHorizontal:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '1%'
          : isTablet()
            ? '1.5%'
            : '2%',
      width: '100%',
    },
    innerContainer: {
      flexDirection: 'row',
      marginTop:
        orientation === 'landscape' && screenWidth === windowWidth
          ? '1.5%'
          : isTablet()
            ? '3%'
            : '4%',
    },
    renderItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: isTablet() ? '3%' : '5%',
    },
  });
export default getPropertyStyles;
