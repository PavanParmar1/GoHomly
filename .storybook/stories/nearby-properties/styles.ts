import {Platform, StyleSheet} from 'react-native';
import {
  windowWidth,
  Fonts,
  Font14,
  Font18,
  Font12,
  Font8,
  getWidthTab,
  getWidth,
  Font9,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {isTablet} from 'react-native-device-info';

const imageWidth = (113 * windowWidth) / 375;
const imageHeight = (118 * windowWidth) / 375;
const imageWidthTab = (345.95 * windowWidth) / 834;
const imageHeightTab = (190.86 * windowWidth) / 834;
const imageWidthTab1 = (139 * windowWidth) / 834;
const imageHeightTab1 = (135 * windowWidth) / 834;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: isTablet() ? '3%' : '3.5%',
    marginTop: isTablet() ? 0 : '3%',
    marginBottom: isTablet() ? '3%' : '3%',
    padding: isTablet() ? 0 : '1.5%',
    borderColor: '#DADADA',
    borderWidth: Platform.OS === 'android' ? 0.5 : 0.2,
    shadowColor: '#CFCFCF',
    shadowOpacity: 0.25,
    borderRadius: isTablet() ? getWidthTab(5) : getWidth(10),
    shadowOffset: {width: 1, height: 1},
    backgroundColor: colors.background,
    elevation: 2,
  },
  containerTablet: {
    marginHorizontal: getWidthTab(10),
    marginBottom: getWidthTab(50),
    width: imageWidthTab,
    height: getWidthTab(270),
    backgroundColor: colors.background,
  },
  dataContainer: {
    flexDirection: 'row',
    margin: isTablet() ? getWidthTab(20) : (windowWidth / 100) * 3,
  },
  image: {
    width: isTablet() ? imageWidthTab : imageWidth,
    height: isTablet() ? imageHeightTab : imageHeight,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(15),
  },
  imageForReservation: {
    width: isTablet() ? imageWidthTab1 : imageWidth,
    height: isTablet() ? imageHeightTab1 : imageHeight,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  },
  headerText: {
    fontFamily: Fonts.SFProRounded.Regular,
    color: colors.textPrimary,
    fontSize: isTablet() ? Font8 : Font14,
    fontWeight: '400',
    marginTop: isTablet() ? '3%' : '3%', // 1%
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  homeIcon: {
    width: isTablet() ? getWidthTab(19) : getWidth(14),
    height: isTablet() ? getWidthTab(19) : getWidth(14),
    marginRight: getWidth(5),
    // marginLeft: getWidth(-3),
  },
  text: {
    fontFamily: Fonts.SFProRounded.Regular,
    color: colors.textSecondary,
    fontSize: isTablet() ? getWidthTab(20) : Font14,
    fontWeight: '400',
    marginTop: isTablet() ? '2%' : '3%',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textWithIconContainer: {
    flexDirection: isTablet() ? 'row' : 'column',
    marginTop: 5,
  },
  textWithIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: getWidth(15),
  },
  textstyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    color: colors.textSecondary,
    fontSize: isTablet() ? getWidthTab(20) : Font14,
    fontWeight: '400',
    marginRight: isTablet() ? '5%' : 0,
    marginTop: isTablet() ? '2%' : '3%',
    paddingLeft: isTablet() ? '2%' : '3%',
    flexWrap: 'wrap',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textWithIconReservation: {
    fontFamily: Fonts.SFProRounded.Regular,
    color: colors.textSecondary,
    fontSize: isTablet() ? Font8 : Font14,
    fontWeight: '400',
    marginRight: isTablet() ? '5%' : 0,
    // marginTop: isTablet() ? '2%' : '3%',
    paddingLeft: isTablet() ? '2%' : '3%',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textWithIconTablet: {
    fontFamily: Fonts.SFProRounded.Regular,
    color: colors.textSecondary,
    fontSize: isTablet() ? Font8 : Font14,
    fontWeight: '400',
    // marginTop: isTablet() ? '2%' : '3%',
    marginLeft: isTablet() ? '3%' : '3%',
    paddingLeft: isTablet() ? '2%' : '3%',
  },
  textContainer: {
    flex: 1,
    marginLeft: isTablet() ? '2%' : '3%',
  },
  textContainerReservation: {
    flex: 1,
    marginLeft: isTablet() ? '2%' : '3%',
  },
  ratingStyle: {},
  titleStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginHorizontal: isTablet() ? getWidthTab(7) : '6.3%',
    marginBottom: isTablet() ? getWidthTab(30) : 0,
    alignSelf: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: isTablet() ? getWidthTab(714) : '93%',
    marginHorizontal: isTablet() ? getWidthTab(10) : '1%',
  },
  outerContainer: {
    paddingVertical: isTablet() ? getWidthTab(10) : getWidth(16),
    marginHorizontal: isTablet() ? getWidthTab(50) : 0,
    marginBottom: '5%',
    // backgroundColor: colors.background,
  },
  seeAllButtonTitle: {
    // color: colors.textSecondary,
    fontSize: isTablet() ? Font9 : Font12,
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Light,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginHorizontal: isTablet() ? getWidthTab(5) : 0,
  },
});

export default styles;
