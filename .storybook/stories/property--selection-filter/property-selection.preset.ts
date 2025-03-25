import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {
  Font10,
  Font14,
  Font15,
  Font8,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

const iconSize = (18 * windowWidth) / 375;
const iconSizeTab = (30 * windowWidth) / 834;

export const styles = StyleSheet.create({
  mainViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: isTablet()
      ? (10 * windowWidth) / 834
      : (10 * windowWidth) / 375,
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },
  lableStyle: {
    flex: 1,
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font14,
    includeFontPadding: false,
    textAlignVertical: 'center',
    lineHeight: isTablet() ? getWidthTab(20) : getWidth(18),
  },
  imageButtonStyle: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
  },
  counterStyle: {
    textAlign: 'center',
    color: '#121212',
    fontSize: isTablet() ? Font10 : Font15,
    /* marginLeft: isTablet() ? getWidthTab(6) : getWidth(8),
    marginRight: isTablet() ? getWidthTab(6) : getWidth(8), */
    marginHorizontal: isTablet() ? getWidthTab(10) : getWidth(7),
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    width: isTablet() ? getWidthTab(30) : getWidth(20),
    textAlignVertical: 'center',
  },

  devider: {
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(16),
  },
});
