import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Fonts,
  Font10,
  Font11,
  Font15,
  Font16,
  Font17,
  windowWidth,
  Font12,
  getWidth,
  getWidthTab,
} from '../../utils/common';
const Width = windowWidth / 375;

export const styles = StyleSheet.create({
  navbarHeader: {
    marginLeft: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarImage: {width: 19, height: 19},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font17,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  navbarFilterImage: {
    marginHorizontal: 0,
    width: isTablet() ? getWidthTab(24) : getWidth(18),
    height: isTablet() ? getWidthTab(24) : getWidth(18),
  },
  navbarSortImage: {
    marginHorizontal: 0,
    width: isTablet() ? getWidthTab(24) : getWidth(18),
    height: isTablet() ? getWidthTab(24) : getWidth(18),
  },
  navBarFilterButton: {
    width: isTablet() ? getWidthTab(60) : getWidth(40),
    alignSelf: 'center',
    alignItems: 'center',
    left: isTablet() ? getWidthTab(10) : getWidth(10),
  },
  navBarSortButton: {
    width: isTablet() ? getWidthTab(60) : getWidth(40),
    alignSelf: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  searchContainer: {
    width: isTablet() ? '100%' : '100%',
    height: isTablet() ? '10%' : '10%',
    paddingHorizontal: isTablet() ? getWidthTab(60) : 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: isTablet() ? '60%' : '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  filterModalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTopDivider: {
    width: isTablet() ? 90 : 50,
    top: isTablet() ? getWidthTab(20) : getWidth(16),
    alignSelf: 'center',
    borderRadius: isTablet() ? 5 : 2.5,
  },
  modalTextContainer: {
    paddingHorizontal: isTablet() ? getWidthTab(60) : getWidth(32),
    height: isTablet() ? getWidthTab(90) : getWidth(60),
    top: isTablet() ? 0 : -16,
  },
  modalTextStyle: {
    height: isTablet() ? getWidthTab(40) : getWidth(30),
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: isTablet() ? '700' : '400',
    top: isTablet() ? getWidthTab(10) : getWidth(20),
    width: '50%',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  filterModalTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: isTablet() ? '700' : '400',
    color: colors.textPrimary,
    paddingHorizontal: 5,
    bottom: 8,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  roomsAndBedsTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font11 : Font16,
    fontWeight: '700',
    color: colors.textPrimary,
    paddingTop: 16,
    paddingHorizontal: 16,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  filterPriceTextStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    fontWeight: '400',
    color: colors.textSecondary,
    // paddingHorizontal:5,
    paddingTop: 16,
    bottom: 16,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  modalTextDivider: {
    width: '50%',
    borderRadius: isTablet() ? 3 : 1.5,
    top: isTablet() ? 20 : 20,
  },
  modalCheckBoxStyle: {
    width: '100%',
    height: isTablet() ? getWidthTab(92) : getWidth(48),
  },
  modalView: {
    marginHorizontal: 0,
    justifyContent: 'flex-end',
    marginVertical: 0,
  },
  listViewStyle: {
    paddingHorizontal: isTablet() ? getWidthTab(50) : getWidth(16),
    height: '90%',
    paddingTop: 8,
    flex: 1,
  },
  flatList: {alignSelf: 'center'},
  listWraperStyle: {
    paddingVertical: isTablet() ? '2%' : '1%',
    paddingLeft: '2%',
    paddingRight: isTablet() ? '2%' : '5%',
    justifyContent: 'space-between',
    height: isTablet() ? getWidthTab(60) : getWidth(32),
  },
  bookProperty: {
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: colors.background,
  },
  INPUT_FIELD_LARGE: {
    backgroundColor: 'transparent',
    marginHorizontal: 0,
    width: '100%',
    marginTop: Width * -18,
  },
  INPUT_FIELD_INNER_CONTAINER: {
    backgroundColor: colors.white,
    height: Width * 45,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: getWidth(20),
    borderBottomRightRadius: getWidth(20),
    backgroundColor: 'white',
  },

  scrollViewContainer: {
    flex: 1,
    width: '100%',
    // borderBottomLeftRadius: getWidth(20),
    // borderBottomRightRadius: getWidth(20),
    backgroundColor: 'black',
  },
});
