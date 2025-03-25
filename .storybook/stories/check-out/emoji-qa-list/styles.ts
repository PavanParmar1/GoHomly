import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../../app/theme';

const emojiStyles = (
  Font10: any,
  Font12: any,
  Font14: any,
  Font9: any,
  getWidth: any,
  getWidthTab: any,
  Font6: any,
  Font7: any,
  Font8: any,
  orientation: any,
  screenWidth: any,
  windowWidth: any,
) =>
  StyleSheet.create({
    mainView: {
      width: '100%',
    },
    smilybutton: {
      width: isTablet() ? getWidthTab(40) : getWidth(30),
      height: isTablet() ? getWidthTab(40) : getWidth(30),
      // paddingHorizontal:50
    },
    renderItemMain: {
      width: '100%',
      marginVertical: isTablet() ? getWidthTab(12) : getWidth(12),
    },
    itemQuesView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemDot: {
      width: isTablet() ? getWidthTab(10) : getWidth(10),
      height: isTablet() ? getWidthTab(10) : getWidth(10),
      backgroundColor: colors.textSecondary,
      borderRadius: isTablet() ? getWidthTab(5) : getWidth(5),
      marginHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
    },
    itemQuestion: {
      fontFamily: Fonts.SFProRounded.Regular,
      color: 'black',
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font14,
      marginBottom: '1.5%',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    itemEmoji: {
      alignSelf: 'flex-start',
    },
    inputContainer: {
      marginHorizontal: 0,
      width: '100%',
    },
    inputField: {
      height: isTablet() ? 500 : getWidth(75),
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
      marginHorizontal: isTablet() ? getWidthTab(5) : getWidth(5),
      borderColor: '#777777',
      borderWidth: 0.3,
    },
    inputStyle: {
      marginVertical: 0,
      alignSelf: 'flex-start',
      fontFamily: Fonts.SFProRounded.Light,
      fontWeight: '400',
      color: colors.textSecondary,
      fontSize: isTablet() ? Font9 : Font12,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    ratingContainer: {
      alignSelf: 'flex-start',
      width: isTablet() ? getWidthTab(85) : getWidth(240),
      height: isTablet() ? getWidthTab(30) : getWidth(20),
      marginTop: '2%',
      borderRadius: 0,
      justifyContent: 'flex-start',
      marginLeft: 0,
      padding: 0,
      paddingHorizontal: 0,
      // backgroundColor: 'orange',
      paddingStart: 0,
      // backgroundColor: 'gray',
    },
  });
export default emojiStyles;
