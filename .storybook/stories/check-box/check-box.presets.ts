import {ViewStyle, TextStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font14,
  Fonts,
  GrayTextInputBorder,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  marginLeft: '7%',
  marginRight: '7%',
  width: '86%',
  // backgroundColor: colors.buttonPrimary,
  paddingVertical: '1%',
  paddingHorizontal: '1%',
  // borderColor: GrayTextInputBorder,
  // borderRadius: 8,
  // borderWidth: 1,
  marginVertical: 0,
  borderRadius: isTablet() ? 25 : 10,
  borderWidth: 1,
};
export const SELECTION_CONTAINER: ViewStyle = {
  ...CONTAINER,
  backgroundColor: colors.secondaryLight,
};
export const WRAPPER: ViewStyle = {
  backgroundColor: colors.background,
  paddingVertical: '1%',
  paddingHorizontal: '1%',
  justifyContent: 'space-between',
};
export const SELECTION_WRAPPER: ViewStyle = {
  ...WRAPPER,
  backgroundColor: 'transparent',
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Light,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const ICON_STYLE = {marginLeft: '1%'};

export const DISABLED_CHECKBOX = {
  ...WRAPPER,
  backgroundColor: GrayTextInputBorder,
};
export const DISABLED_TITLE = {color: GrayTextInputBorder};
