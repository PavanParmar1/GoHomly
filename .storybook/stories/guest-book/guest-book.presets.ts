import {TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font12,
  Font15,
  Font18,
  Font8,
  Fonts,
  windowWidth,
} from '../../../app/utils/common';

const imageWidth = isTablet()
  ? (17 * windowWidth) / 834
  : (17 * windowWidth) / 375;
const imageHeight = isTablet()
  ? (17 * windowWidth) / 834
  : (17 * windowWidth) / 375;

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
};
export const HEADER_CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
};
export const TITLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font12 : Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const SUBTITLE: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '400',
  color: colors.textSecondary,
  marginTop: isTablet() ? '1%' : '2%',
  marginBottom: '2%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LIST_CONTAINER: ViewStyle = {
  borderColor: colors.textSecondary,
  borderRadius: 8,
  borderWidth: 0.3,
  marginTop: '1%',
  // backgroundColor: 'pink',
  paddingVertical: isTablet() ? '2%' : '3%',
};
export const QUERY_CONTAINER: ViewStyle = {
  marginHorizontal: '5%',
  marginTop: isTablet() ? '3%' : '5%',
  marginBottom: isTablet() ? '3%' : '5%',
  // backgroundColor: 'red'
};
export const QUESTION_CONTAIINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  // marginTop: isTablet() ? '1%' : '2%',
  alignItems: 'center',
  // backgroundColor: 'yellow'
};
export const QUESTION: TextStyle = {
  ...TEXT,
  fontSize: isTablet() ? Font10 : Font15,
  fontWeight: '400',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ICON = {
  width: imageWidth,
  height: imageHeight,
};
export const ANSWER: TextStyle = {
  marginTop: isTablet() ? '1%' : '3%',
  fontSize: isTablet() ? Font8 : Font12,
  fontWeight: '400',
  color: colors.textSecondary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const DIVIDER: ViewStyle = {
  marginHorizontal: '5%',
  borderColor: colors.textSecondary,
};
