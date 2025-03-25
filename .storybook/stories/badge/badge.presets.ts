import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors, typography} from '../../../app/theme';
import {
  Font12,
  Font9,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';

const imageWidth = (32 * windowWidth) / 375;
const imageHeight = (32 * windowWidth) / 375;
const imageWidthTab = (50 * windowWidth) / 834;
const imageHeightTab = (50 * windowWidth) / 834;

export const DEFAULT_CONTAINER: ViewStyle = {
  width: isTablet() ? (windowWidth / 100) * 22 : (windowWidth / 100) * 12,
  height: isTablet() ? (windowWidth / 100) * 22 : (windowWidth / 100) * 12,
  borderRadius: isTablet() ? (windowWidth / 100) * 6 : (windowWidth / 100) * 6,
  // backgroundColor: 'transparent',
  backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
};
export const BADGE_CONTAINER = {
  top: isTablet() ? '1%' : '1%',
  left: isTablet() ? '72%' : '72.66%',
};

export const MAIN_IMAGE = {
  width: isTablet() ? imageWidthTab : imageWidth,
  height: isTablet() ? imageHeightTab : imageHeight,
  borderRadius: isTablet() ? imageHeightTab / 2 : imageWidth / 2,
  // backgroundColor: '#821212',
};
export const PRIMARY_BADGE_STYLE: ViewStyle = {
  backgroundColor: colors.secondary,
  width: isTablet() ? getWidthTab(16) : getWidth(10),
  height: isTablet() ? getWidthTab(16) : getWidth(10),
  borderRadius: isTablet() ? getWidthTab(8) : getWidth(5),
};
export const PRIMARY_BADGE_STYLE_WITH_TEXT: ViewStyle = {
  backgroundColor: colors.secondary,
  // padding: 10,
  // width: isTablet() ? getWidthTab(30) : getWidth(16),
  // height: isTablet() ? getWidthTab(30) : getWidth(16),
  // borderRadius: isTablet() ? getWidthTab(15) : getWidth(8),
};
export const SUCCESS_BADGE_STYLE: ViewStyle = {
  ...PRIMARY_BADGE_STYLE,
  backgroundColor: '#33fa22',
};
export const ERROR_BADGE_STYLE: ViewStyle = {
  ...PRIMARY_BADGE_STYLE,
  backgroundColor: 'red',
};
export const WARNING_BADGE_STYLE: ViewStyle = {
  ...PRIMARY_BADGE_STYLE,
  backgroundColor: 'orange',
};

export const TEXT_STYLE: TextStyle = {
  fontFamily: typography.primary,
  fontSize: isTablet() ? Font9 : Font12,
  fontWeight: '600',
  color: colors.white,
};
