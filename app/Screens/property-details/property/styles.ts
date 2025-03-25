import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../theme';
import {Fonts} from '../../../utils/common';

const PropertyDetailStyle = (
  getWidth: any,
  getWidthTab: any,
  windowHeight: any,
  windowWidth: any,
  Font10: number,
  Font11: number,
  Font12: number,
  Font14: number,
  Font15: number,
  Font16: number,
  Font18: number,
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
    mainContainer: {
      backgroundColor: '#F4F4F4',
      // marginBottom: '24%',
    },
    componentWrapper: {
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '2%'
          : isTablet()
            ? '4%'
            : '7%',
      backgroundColor: 'white',
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
      padding:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
    },
    scrollview: {
      backgroundColor: '#F4F4F4',
      marginHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(25)
          : isTablet()
            ? getWidthTab(40)
            : '3%',
      marginBottom: isTablet() ? getWidthTab(60) : '5%',
    },
    subContainer: {marginBottom: '28%'},
    flatList: {marginTop: '7%'},
    footerview: {
      backgroundColor: 'black',
      width: '100%',
    },
    propertyInfoContainer: {marginTop: '4%'},
    removeCleaningModalContainer: {
      alignItems: 'center',
    },
    modalContainer: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    scrollableModal: {
      // height: isTablet() ? getWidthTab(600) : getWidth(300),
    },

    scrollableModal2: {
      height: (windowHeight * 100) / 110,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    itemTextContainer: {
      fontSize: isTablet() ? Font10 : Font15,
      fontFamily: Fonts.SFProRounded.Light,
      color: '#777777',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    itemTextContainer1: {
      fontSize: isTablet() ? Font10 : Font15,
      fontFamily: Fonts.SFProRounded.Regular,
      color: '#121212',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    listContainer: {
      backgroundColor: colors.background,
      borderTopLeftRadius: getWidth(20),
      borderTopRightRadius: getWidth(20),
    },
    itemContainer: {
      flex: 1,
      margin: isTablet() ? '1.5%' : '2%',
      // backgroundColor: '#77777710',
      paddingVertical: 10,
      paddingHorizontal: 20,
      // borderRadius: isTablet() ? 8 : 5,
    },
    divider: {
      width: '12.8%',
      alignSelf: 'center',
      marginTop: '2%',
    },

    randerContent: {
      paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(2)
          : isTablet()
            ? getWidth(6)
            : getWidth(5.5),
      // backgroundColor: 'yellow',
    },
    randerHeader: {
      paddingHorizontal:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(14)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(16),
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(3)
          : isTablet()
            ? getWidthTab(10)
            : getWidth(8),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'pink',
    },

    INNER_CONTAINER: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(2)
          : isTablet()
            ? getWidth(6)
            : getWidth(7),
      // backgroundColor: 'orange',
    },
    textStyle: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font8
            : Font14,
      color: 'black',
      textAlignVertical: 'center',
      fontFamily: Fonts.SFProRounded.Regular,
    },

    acoordianTitleTextStyle: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font7
          : isTablet()
            ? Font11
            : Font16,
      color: 'black',
      textAlignVertical: 'center',
      fontFamily: Fonts.SFProRounded.SemiBold,
    },

    ICON: {
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? (25 * windowWidth) / 834
            : (15 * windowWidth) / 375,
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? (25 * windowWidth) / 834
            : (15 * windowWidth) / 375,
      // tintColor: '#777777',
      tintColor: '#000',
    },
    devider: {marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16)},

    roomsAndBedsTextStyle: {
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font8
          : isTablet()
            ? Font12
            : Font18,
      color: colors.textPrimary,
      marginStart:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '1%'
          : '0%',
      // backgroundColor: 'pink',
      includeFontPadding: false,
    },

    DIVIDER: {
      width: '12%',
      marginTop: '5.5%',
      marginBottom: '2%',
      alignSelf: 'center',
    },

    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    subContainers: {
      backgroundColor: 'white',
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? '2%'
          : isTablet()
            ? '5%'
            : '7%',
      padding:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? '4%'
            : '5%',
      borderRadius:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(10)
          : isTablet()
            ? getWidthTab(20)
            : getWidth(10),
    },

    BUTTON_CONTAINER: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: isTablet() ? '5%' : '4%',
      paddingHorizontal: isTablet() ? getWidthTab(40) : '3%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopColor: 'lightgrey',
      borderTopWidth: 0.8,
    },

    BUTTON_STYLE: {
      backgroundColor: colors.secondary,
      borderRadius: isTablet() ? getWidth(12) : getWidth(43),
      // height: isTablet() ? getWidth(25) : getWidth(46),
      height: (windowWidth / 100) * 13,
      width: isTablet() ? getWidth(100) : getWidth(150),
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '0%',
    },

    BUTTON_FONT_STYLE: {
      fontSize: isTablet() ? Font10 : Font14,
      fontFamily: Fonts.SFProRounded.Bold,
      color: colors.background,
      textAlignVertical: 'center',
    },
  });
export default PropertyDetailStyle;
