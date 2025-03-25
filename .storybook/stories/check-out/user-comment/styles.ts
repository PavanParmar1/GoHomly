import {isTablet} from 'react-native-device-info';
import {Fonts} from '../../../../app/utils/common';
import {StyleSheet} from 'react-native';

const userCommentStyles = (
  Font10: any,
  Font13: any,
  Font14: any,
  Font15: any,
  Font9: any,
  getWidth: any,
  getWidthTab: any,
  orientation: any,
  windowWidth: any,
  screenWidth: any,
  Font7: any,
  Font6: any,
) =>
  StyleSheet.create({
    mainView: {
      width: '100%',
      // alignItems: 'center',
      height: '100%',
    },
    itemMainView: {
      width: '100%',
      // marginTop: isTablet() ? getWidthTab(30) : getWidth(23),
      // marginBottom: isTablet() ? getWidthTab(15) : getWidth(10),
    },
    avatrView: {
      flexDirection: 'row',
      // alignItems: 'center',
    },

    ratingmainView: {
      flexDirection: 'row',
      width: '100%',
      // marginVertical: isTablet() ? getWidthTab(5) : getWidth(5),
      alignItems: 'center',
    },
    ratingContainer: {
      alignSelf: 'flex-start',
      width:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(60)
          : isTablet()
            ? getWidthTab(100)
            : getWidth(50),
      height:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(20)
          : isTablet()
            ? getWidthTab(30)
            : getWidth(20),
      borderRadius: 0,
      justifyContent: 'flex-start',
      marginLeft: 0,
      padding: 0,
      paddingHorizontal: 0,
    },

    shimmer_ratingContainer: {
      alignSelf: 'flex-start',
      width: isTablet() ? getWidthTab(100) : getWidth(70),
      height: isTablet() ? getWidthTab(15) : getWidth(10),
      marginVertical: isTablet() ? getWidthTab(15) : getWidth(10),
      borderRadius: 20,
      justifyContent: 'flex-start',
    },

    imageTextStyle: {
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font7
          : isTablet()
            ? Font10
            : Font15,
      color: 'black',
      fontFamily: Fonts.SFProRounded.Medium,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    shimmer_imageTextStyle: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(15),
      marginEnd: isTablet() ? '3%' : '5%',
      width: isTablet() ? '45%' : '60%',
    },

    reviewDate: {
      fontSize:
        orientation === 'landscape' && screenWidth === windowWidth
          ? Font6
          : isTablet()
            ? Font9
            : Font14,
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'center',
    },

    shimmer_reviewDate: {
      borderRadius: 20,
      height: isTablet() ? getWidthTab(20) : getWidth(15),
      width: isTablet() ? '20%' : '25%',
    },

    comment: {
      fontSize:
        orientation === 'landscape' && windowWidth === screenWidth
          ? Font6
          : isTablet()
            ? Font9
            : Font13,
      // flex: 1,
      // marginHorizontal: isTablet() ? getWidthTab(8) : getWidth(5),
      color: '#777777',
      fontFamily: Fonts.SFProRounded.Regular,
      marginTop:
        orientation === 'landscape' && windowWidth === screenWidth
          ? getWidthTab(2)
          : isTablet()
            ? getWidthTab(5)
            : getWidth(2),
      includeFontPadding: false,
      textAlignVertical: 'center',
      textAlign: 'justify',
    },
    shimmer_comment: {
      borderRadius: 20,
      marginTop: isTablet() ? getWidthTab(12) : getWidth(6),
      height: isTablet() ? getWidthTab(15) : getWidth(12),
      width: isTablet() ? '40%' : '50%',
    },
  });
export default userCommentStyles;
