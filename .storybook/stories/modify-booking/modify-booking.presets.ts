import {ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../../app/theme';
import {Font14, Font18, Fonts, windowWidth} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  paddingBottom: (windowWidth / 375) * 26.13,
  borderRadius: 14,
};
export const TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: Font18,
  fontWeight: '700',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const TITLE_CONTAINER: ViewStyle = {
  alignItems: 'center',
  marginTop: (windowWidth / 375) * 25.05,
};
export const TEXT: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: Font14,
  fontWeight: '400',
  color: colors.textSecondary,
  textAlignVertical: 'center',
  textAlign: 'center',
  includeFontPadding: false,
};
export const TEXT_CONTAINER: ViewStyle = {
  marginTop: (windowWidth / 375) * 18.79,
  marginBottom: (windowWidth / 375) * 25.05,
  marginHorizontal: '7%',
};
export const NO_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: Font18,
  fontWeight: '600',
  includeFontPadding: false,
  textAlignVertical: 'center',

  color: colors.textSecondary,
};
export const YES_TITLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: Font18,
  fontWeight: '600',
  color: colors.background,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const BUTTON: ViewStyle = {
  marginTop: '4%',
};
export const BUTTON_CONTAINER: ViewStyle = {
  marginTop: '2%',
};
