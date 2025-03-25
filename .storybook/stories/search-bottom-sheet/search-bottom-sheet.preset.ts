import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../../app/theme';
import {
  Fonts,
  Font12,
  windowWidth,
  getWidth,
  getWidthTab,
  Font9,
  Font10,
  Font7,
  Font16,
  Font14,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const imageWidth = isTablet()
  ? (50 * windowWidth) / 834
  : (40 * windowWidth) / 375;
const imageHeight = isTablet()
  ? (50 * windowWidth) / 834
  : (40 * windowWidth) / 375;

const serach_icon_width = isTablet()
  ? (30 * windowWidth) / 834
  : (20 * windowWidth) / 375;
const serach_icon_height = isTablet()
  ? (30 * windowWidth) / 834
  : (20 * windowWidth) / 375;

export const ICON = {
  width: imageWidth,
  height: imageHeight,
};
export const SEARCH_ICON = {
  width: serach_icon_width,
  height: serach_icon_height,
};

export const CONTAINER_STYLE: ViewStyle = {
  backgroundColor: '#F6F6F6',
  paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
};

export const INNER_CONTAINER_STYLE: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.white,
  justifyContent: 'space-between',
  borderRadius: isTablet() ? getWidthTab(30) : getWidth(10),
  padding: isTablet() ? getWidthTab(16) : getWidth(15),
};

export const TEXT_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontWeight: '500',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font9 : Font16,
  textAlignVertical: 'center',
};

export const SUB_TEXT_STYLE: TextStyle = {
  color: 'black',
  fontWeight: '400',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font7 : Font12,
  textAlignVertical: 'center',
};

export const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: isTablet() ? getWidthTab(20) : getWidth(41),
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(6) : getWidth(43),
  height: isTablet() ? getWidth(6) : getWidth(46),
  width: isTablet() ? getWidth(6) : getWidth(150),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_STYLE1: ImageStyle = {
  backgroundColor: colors.white,
  borderRadius: isTablet() ? getWidth(6) : getWidth(43),
  height: isTablet() ? getWidth(6) : getWidth(46),
  width: isTablet() ? getWidth(6) : getWidth(150),
  marginRight: isTablet() ? getWidth(6) : getWidth(5),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font9 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.background,
  fontWeight: '700',
  textAlignVertical: 'center',
};

export const BUTTON_FONT_STYLE1: TextStyle = {
  fontSize: isTablet() ? Font9 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.secondary,
  fontWeight: '700',
  textAlignVertical: 'center',
};
