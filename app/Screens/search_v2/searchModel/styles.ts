import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme';
import {Fonts, GrayTextInputBorder} from '../../../utils/common';

const SearchModelStyle = (
  getWidth: any,
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
    searchModalContainer: {
      width: '100%',
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '90%'
          : isTablet()
            ? '70%'
            : '90%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#F6F6F6',
    },
    INNER_CONTAINER_STYLE: {
      backgroundColor: colors.background,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(15)
            : getWidth(10),
      padding:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(15)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(15),
    },
    SEARCH_MODEL_HEADER_TEXT: {
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Medium,
      includeFontPadding: false,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font16,
      textAlignVertical: 'center',
    },
    SEARCH_BAR_OUTER_CONTAINER: {
      flexDirection: 'row',
      borderRadius: 8,
      borderColor: GrayTextInputBorder,
      borderWidth: 1,
      alignItems: 'center',
      paddingStart: isTablet() ? getWidthTab(10) : getWidth(10),
      marginVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(15),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(46)
          : isTablet()
            ? getWidthTab(56)
            : getWidth(44),
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font10
            : Font16,
      // backgroundColor: 'orange',
    },
    SEARCH_BAR_INNER_CONTAINER: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginVertical: 0,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(40)
          : isTablet()
            ? getWidthTab(50)
            : getWidth(40),
      marginBottom: 0,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font16,
      // backgroundColor: 'pink',
    },
    TEXTINPUT_STYLE: {
      flex: 1,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font16,
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Medium,
      includeFontPadding: false,
      padding: 0,
      textAlignVertical: 'center',
    },
    SEARCH_ICON: {
      width: isTablet() ? (25 * windowWidth) / 834 : (16 * windowWidth) / 375,
      height: isTablet() ? (25 * windowWidth) / 834 : (16 * windowWidth) / 375,
      tintColor: '#777777',
    },
    SUB_TEXT_STYLE: {
      color: 'black',
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font7
            : Font12,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    SEARCH_SUGGESTION_CONTAINER: {
      paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
    },
    SEARCH_SUGGESTION_ITEM: {
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(5)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(10),
      // backgroundColor: 'pink',
    },
    DESCRIPTION_ITEM: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font8
            : Font14,
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      // backgroundColor: 'orange',
    },
    ADDRESS_TEXT_STYLE: {
      color: '#777777CC',
      marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
      textAlignVertical: 'center',
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font7
            : Font12,
    },
    WHERE_MAIN_CONTAINER: {},
    WHEN_MAIN_CONTAINER: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
    },
    WHO_MAIN_CONTAINER: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
    },
    TEXT_STYLE: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.Medium,
      includeFontPadding: false,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font9
            : Font16,
      textAlignVertical: 'center',
    },
    OUTER_CONTAINER_STYLE: {
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '20%'
          : isTablet()
            ? getWidthTab(20)
            : getWidth(16),
      paddingVertical: isTablet() ? getWidthTab(40) : getWidth(33),
    },
    BUTTON_CONTAINER: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(15)
          : isTablet()
            ? getWidthTab(50)
            : getWidth(41),
    },
    BUTTON_STYLE: {
      backgroundColor: colors.secondary,
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(10)
          : isTablet()
            ? getWidth(12)
            : getWidth(43),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(20)
          : isTablet()
            ? getWidth(25)
            : (windowWidth / 100) * 12.5,
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(70)
          : isTablet()
            ? getWidth(100)
            : getWidth(150),
      marginHorizontal: 0,
    },
    BUTTON_STYLE1: {
      backgroundColor: '#F6F6F6',
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(10)
          : isTablet()
            ? getWidth(6)
            : getWidth(43),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(20)
          : isTablet()
            ? getWidth(25)
            : (windowWidth / 100) * 12.5,
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(70)
          : isTablet()
            ? getWidth(100)
            : getWidth(150),
      marginRight:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidth(3)
          : isTablet()
            ? getWidth(6)
            : getWidth(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    BUTTON_FONT_STYLE: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font10
            : Font14,
      fontFamily: Fonts.SFProRounded.Bold,
      includeFontPadding: false,
      color: colors.background,
      textAlignVertical: 'center',
    },
    BUTTON_FONT_STYLE1: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font10
            : Font14,
      fontFamily: Fonts.SFProRounded.Bold,
      includeFontPadding: false,
      color: colors.secondary,
      textAlignVertical: 'center',
    },
    DIVIDER1: {
      width: '100%',
    },
    DIVIDER: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(50)
          : isTablet()
            ? getWidthTab(80)
            : getWidth(48),
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(15)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(13),
      alignSelf: 'center',
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalView: {
      marginHorizontal: 0,
      justifyContent: 'flex-end',
      marginVertical: 0,
    },
    dogContainer: {
      paddingVertical: isTablet()
        ? (8 * windowWidth) / 834
        : (6 * windowWidth) / 375,
    },
    lableStyle: {
      flex: 1,
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font8
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
      lineHeight: isTablet() ? getWidthTab(20) : getWidth(18),
    },
    lableStyle1: {
      flex: 1,
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font14,
      includeFontPadding: false,
      textAlignVertical: 'center',
      lineHeight: isTablet() ? getWidthTab(28) : getWidth(21),
    },
    devider: {
      marginTop: isTablet() ? getWidthTab(8) : getWidth(6),
    },
  });
export default SearchModelStyle;
