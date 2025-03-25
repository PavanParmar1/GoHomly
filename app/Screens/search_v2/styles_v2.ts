import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const SearchScreenStyle = (
  getWidth: any,
  getWidthTab: any,
  windowHeight: number,
  windowWidth: number,
  Font12: number,
  Font16: number,
  Font10: number,
  Font8: number,
  Font14: number,
  Font7: number,
  Font9: number,
  Font4: any,
  Font5: any,
  Font6: any,
  orientation: any,
  screenWidth: any,
) =>
  StyleSheet.create({
    notificationContainer: {
      width: isTablet() ? getWidthTab(30) : getWidth(25),
      marginLeft: isTablet() ? getWidthTab(60) : getWidth(10),
      paddingTop: isTablet() ? getWidthTab(10) : getWidth(0),
    },
    chatIcon: {
      width: isTablet() ? getWidthTab(35) : getWidth(22),
      height: isTablet() ? getWidthTab(35) : getWidth(22),
    },
    headerContainer: {
      paddingVertical: isTablet() ? getWidthTab(20) : getWidth(12),
    },
    headerInnerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: isTablet() ? getWidthTab(20) : getWidth(16),
      marginRight: isTablet() ? getWidthTab(16) : getWidth(12),
      marginTop: isTablet() ? getWidthTab(20) : getWidth(12),
      alignItems: 'center',
    },
    welcomeText: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font10 : Font16,
      textAlign: 'left',
      includeFontPadding: false,
    },
    sosView: {
      borderRadius: 5,
      backgroundColor: colors.buttonPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: isTablet() ? getWidthTab(15) : getWidth(7),
    },
    sosText: {
      color: 'white',
      textAlignVertical: 'center',
      textAlign: 'center',
      // borderRadius: 5,
      fontFamily: Fonts.SFProRounded.Regular,
      fontSize: isTablet() ? Font8 : Font12,
      paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(9),
      // height: isTablet() ? getWidthTab(30) : getWidth(22),
      //
      paddingVertical: 5,
    },

    searchModalContainer: {
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#F6F6F6',
    },

    filterModalContainer: {
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: colors.background,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '100%'
          : isTablet()
            ? '60%'
            : '90%',
    },

    INNER_CONTAINER_STYLE: {
      backgroundColor: colors.white,
      borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
      padding: isTablet() ? getWidthTab(20) : getWidth(15),
    },
    SEARCH_MODEL_HEADER_TEXT: {
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize: isTablet() ? Font10 : Font16,
      textAlignVertical: 'center',
    },
    SEARCH_BAR_CONTAINER: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
      borderColor: '#777777',
      borderWidth: isTablet() ? getWidthTab(1) : getWidth(1),
      alignItems: 'center',
      padding: isTablet() ? getWidthTab(10) : getWidth(10),
      marginVertical: isTablet() ? getWidthTab(10) : getWidth(20),
    },
    TEXTINPUT_STYLE: {
      flex: 1,
      fontSize: isTablet() ? Font9 : Font16,
      color: '#121212',
      fontFamily: Fonts.SFProRounded.Medium,
      padding: 0,
      marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
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
      fontSize: isTablet() ? Font7 : Font12,
      textAlignVertical: 'center',
    },

    SEARCH_SUGGESTION_CONTAINER: {
      // paddingVertical: isTablet() ? getWidthTab(10) : getWidth(10),
      paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
      // backgroundColor:"pink"
    },
    SEARCH_SUGGESTION_ITEM: {
      paddingVertical: isTablet() ? getWidthTab(10) : getWidth(10),
    },

    ADDRESS_TEXT_STYLE: {
      color: '#777777CC',
      marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
      textAlignVertical: 'center',
      fontSize: isTablet() ? Font7 : Font12,
    },

    WHERE_MAIN_CONTAINER: {},
    WHEN_MAIN_CONTAINER: {
      marginTop: isTablet() ? getWidthTab(20) : getWidth(10),
    },
    WHO_MAIN_CONTAINER: {
      marginTop: isTablet() ? getWidthTab(20) : getWidth(10),
    },

    TEXT_STYLE: {
      color: colors.textSecondary,
      fontFamily: Fonts.SFProRounded.Medium,
      fontSize: isTablet() ? Font9 : Font16,
      textAlignVertical: 'center',
    },

    OUTER_CONTAINER_STYLE: {
      paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
      paddingVertical: isTablet() ? getWidthTab(40) : getWidth(33),
    },

    BUTTON_CONTAINER: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: isTablet() ? getWidthTab(50) : getWidth(41),
    },

    BUTTON_STYLE: {
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidth(12) : getWidth(43),
      height: isTablet() ? getWidth(25) : getWidth(46),
      width: isTablet() ? getWidth(100) : getWidth(150),
      alignItems: 'center',
      justifyContent: 'center',
    },

    BUTTON_STYLE1: {
      backgroundColor: '#F6F6F6',
      borderRadius: isTablet() ? getWidth(6) : getWidth(43),
      height: isTablet() ? getWidth(25) : getWidth(46),
      width: isTablet() ? getWidth(100) : getWidth(150),
      marginRight: isTablet() ? getWidth(6) : getWidth(5),
      alignItems: 'center',
      justifyContent: 'center',
    },

    BUTTON_FONT_STYLE: {
      fontSize: isTablet() ? Font10 : Font14,
      fontFamily: Fonts.SFProRounded.Bold,
      color: colors.background,
      textAlignVertical: 'center',
    },

    BUTTON_FONT_STYLE1: {
      fontSize: isTablet() ? Font10 : Font14,
      fontFamily: Fonts.SFProRounded.Bold,
      color: colors.secondary,
      textAlignVertical: 'center',
    },
    DIVIDER1: {
      width: '100%',
      // marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
    },

    chatView: {
      flexDirection: 'row',
      alignItems: 'center',
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

    scrollableModal: {
      height: (windowHeight * 40) / 100,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    LottieViewStyle: {
      height: 100,
      width: 100,
      alignSelf: 'center',
    },

    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    wrapper: {
      width: '100%',
      height: '100%',
      // backgroundColor: 'white',
    },

    flatlistView: {
      paddingVertical: isTablet() ? getWidthTab(15) : getWidth(9),
      backgroundColor: 'white',
      height: '100%',
      // borderBottomRightRadius: getWidth(20),
      // borderBottomLeftRadius: getWidth(20),
    },
    modalView: {
      marginHorizontal: 0,
      justifyContent: 'flex-end',
      marginVertical: 0,
    },

    modalView1: {
      marginHorizontal: 0,
      justifyContent: 'flex-end',
      // marginTop: isTablet() ? getWidthTab(50) : getWidth(80),
      marginBottom: 0,
    },

    HEADER: {
      fontFamily: Fonts.SFProRounded.SemiBold,
      fontSize: isTablet() ? Font12 : Font16,
      color: 'black',
      includeFontPadding: false,
      textAlignVertical: 'center',
      marginVertical: isTablet() ? '4%' : '3%',
      marginHorizontal: isTablet() ? '5%' : '5%',
    },

    ServiceModalContainer: {
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: '5%',
      paddingVertical: '6%',
    },

    Pice: {
      fontFamily: Fonts.SFProRounded.Medium,
      color: 'black',
      fontSize: isTablet() ? Font10 : Font14,
      marginEnd: isTablet() ? '1%' : '1%',
    },

    SubContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  });
export default SearchScreenStyle;
