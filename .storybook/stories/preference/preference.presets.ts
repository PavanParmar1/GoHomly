import {FontStyle} from '@react-native-segmented-control/segmented-control';
import {Platform, TextStyle, ViewStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font14,
  Font16,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: isTablet() ? getWidthTab(13) : getWidth(13),
  borderColor: '#77777730',
  borderWidth: 0.3,
  shadowRadius: 2,
  shadowColor: '#5A5A5A',
  shadowOpacity: 0.1,
  shadowOffset: {width: 1, height: 3},
  marginTop: isTablet() ? getWidthTab(30) : getWidth(10),
  marginBottom: isTablet() ? getWidthTab(10) : getWidth(10),
  marginHorizontal: isTablet()
    ? Platform.OS === 'android'
      ? getWidthTab(6)
      : getWidthTab(2)
    : getWidth(5),
  height: isTablet() ? getWidthTab(74) : getWidth(60),
  elevation: 2,
};
export const INNER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  marginHorizontal: isTablet() ? getWidth(10) : getWidth(19),
  marginVertical: isTablet() ? getWidthTab(5) : getWidth(14),
  justifyContent: 'space-between',
  alignItems: 'center',
  //   flex: 1,
};

export const NAME: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: isTablet() ? Font11 : Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginTop: isTablet() ? getWidthTab(8) : 0,
  //   flex: 1,
};
export const SEGMENT_STYLE: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(8) : 0,
  height: isTablet()
    ? Platform.OS === 'ios'
      ? getWidthTab(45)
      : getWidthTab(55)
    : getWidth(32),
  width: isTablet()
    ? Platform.OS === 'ios'
      ? getWidthTab(230)
      : getWidthTab(240)
    : getWidth(151),
};
export const SEGMENT_FONT_ACTIVE: FontStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: Platform.OS === 'ios' ? '400' : '700',
  fontFamily:
    Platform.OS === 'ios'
      ? Fonts.SFProRounded.SemiBold
      : Fonts.SFProRounded.Regular,
};
export const SEGMENT_FONT: FontStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontWeight: Platform.OS === 'ios' ? '400' : '400',
  fontFamily: Fonts.SFProRounded.Regular,
};
