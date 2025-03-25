import {
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicatorProps,
  TextProps,
} from 'react-native';
import {colors} from '../../../app/theme';
import {Fonts, Font12, Font18, windowWidth} from '../../../app/utils/common';

export const TITLE_STYLE_SOLID: StyleProp<TextStyle> = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.white,
  fontWeight: '600',
  fontSize: Font18,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const TITLE_STYLE_OUTLINE: StyleProp<TextStyle> = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.buttonOutlineTiltle,
  fontWeight: '600',
  fontSize: Font18,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const TITLE_STYLE_CLEAR: StyleProp<TextStyle> = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.buttonPrimary,
  fontWeight: '400',
  fontSize: Font12,
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const TITLE_PROPS: TextProps = {};

export const BUTTON_STYLE_SOLID_ENABLE: StyleProp<ViewStyle> = {
  backgroundColor: colors.buttonPrimary,
  height: (windowWidth * 45) / 375, //45
  marginHorizontal: '7%',
  width: '86%',
  borderRadius: (windowWidth * 45) / 375 / 4.5, //10
};

export const BUTTON_STYLE_OUTLINE_ENABLE: StyleProp<ViewStyle> = {
  backgroundColor: colors.white,
  height: (windowWidth * 45) / 375, //45
  borderRadius: (windowWidth * 45) / 375 / 4.5, //10
  marginHorizontal: '7%',
  width: '86%',
  borderWidth: 1,
  borderColor: colors.buttonOutlineBorder,
};

export const LOADING_STYLE_SOLID: StyleProp<ViewStyle> = {};

export const LOADING_STYLE_OUTLINE: StyleProp<ViewStyle> = {};

export const LOADING_STYLE_CLEAR: StyleProp<ViewStyle> = {};

export const LOADING_PROPS_SOLID: ActivityIndicatorProps = {
  animating: true,
  color: colors.buttonPrimary,
};

export const LOADING_PROPS_OUTLINE: ActivityIndicatorProps = {
  animating: true,
  color: colors.buttonPrimary,
};

export const LOADING_PROPS_CLEAR: ActivityIndicatorProps = {
  animating: true,
  color: colors.buttonPrimary,
};

export const CONTAINER_STYLE: StyleProp<ViewStyle> = {
  margin: 0,
};

export const ICON_CONTAINER_STYLE: StyleProp<ViewStyle> = {};

export const DISABLED_STYLE: StyleProp<ViewStyle> = {
  height: (windowWidth * 45) / 375, //45
  borderRadius: (windowWidth * 45) / 375 / 4.5, //10
  marginHorizontal: '7%',
  width: '86%',
  backgroundColor: colors.buttonPrimary,
  opacity: 0.6,
};

export const DISABLED_TITLE_STYLE: StyleProp<TextStyle> = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.white,
  fontWeight: '600',
  fontSize: Font18,
};

export const DISABLED_OUTLINE_STYLE: StyleProp<ViewStyle> = {
  backgroundColor: colors.white,
  height: (windowWidth * 45) / 375, //45
  borderRadius: (windowWidth * 45) / 375 / 4.5, //10
  marginHorizontal: '7%',
  width: '86%',
  borderWidth: 1,
  borderColor: colors.buttonOutlineBorder,
  opacity: 0.6,
};

export const DISABLED_TITLE_OUTLINE__STYLE: StyleProp<TextStyle> = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.buttonOutlineTiltle,
  fontWeight: '600',
  fontSize: Font18,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
// export const viewPresets: Record<string, ViewStyle> = {}
// export type ButtonPresetNames = keyof typeof viewPresets
