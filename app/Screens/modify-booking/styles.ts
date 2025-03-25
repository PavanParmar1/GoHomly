import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Font12,
  Font16,
  Font17,
  Font18,
  Fonts,
  getHeight,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../utils/common';

export const styles = StyleSheet.create({
  navbarHeader: {
    marginLeft: isTablet() ? getWidthTab(45) : 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarImage: {
    width: isTablet() ? getWidthTab(22) : getWidth(19),
    height: isTablet() ? getWidthTab(22) : getWidth(19),
  },
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  outerContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    marginBottom: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flex: 1,
  },
  title: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  divider: {
    marginHorizontal: isTablet() ? getWidthTab(60) : getHeight(18),
    marginTop: isTablet() ? getWidthTab(10) : getWidth(10),
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: isTablet() ? getWidthTab(30) : getWidth(32),
    marginBottom: isTablet() ? getWidthTab(20) : getWidth(18),
    marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16.5),
  },
  dataContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: isTablet() ? getWidthTab(30) : getWidth(25),
    marginBottom: isTablet() ? getWidthTab(20) : getWidth(20),
    marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16.5),
  },
  heading: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font12 : Font18,
    color: '#1A1E25',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  addIcon: {
    width: isTablet() ? getWidthTab(30) : (windowWidth / 375) * 30,
    height: isTablet() ? getWidthTab(30) : (windowWidth / 375) * 30,
  },
  buttonTitle: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: isTablet() ? Font12 : Font16,
    color: colors.white,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.secondary,
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    // height: isTablet() ? getWidthTab(60) : getWidth(45),
    height: (windowWidth / 100) * 13,
    justifyContent: 'center',
    marginHorizontal: isTablet() ? getWidthTab(60) : '7%',
    marginTop: isTablet() ? getWidthTab(30) : getWidth(25),
    width: isTablet() ? getWidthTab(714) : '86%',
  },
  centeredView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  formModal: {
    marginTop: getWidth(44),
    marginHorizontal: 0,
  },
});
