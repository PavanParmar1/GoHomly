import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font11,
  Font12,
  Font14,
  Font15,
  Font16,
  Font9,
  Fonts,
  getHeight,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';

export const CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
};

export const ICON = {
  width: isTablet() ? getWidthTab(30) : getWidth(20),
  height: isTablet() ? getWidthTab(30) : getHeight(20),
};

export const ICON_VERIFIED = {
  width: isTablet() ? getWidthTab(20) : getWidth(14),
  height: isTablet() ? getWidthTab(20) : getHeight(14),
};

export const ICON_VERIFIED2 = {
  width: isTablet() ? getWidthTab(20) : getWidth(16),
  height: isTablet() ? getWidthTab(20) : getHeight(16),
};

export const INNER_CONTAINER: ViewStyle = {
  backgroundColor: colors.background,
  // borderColor: '#77777730',
  // borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
  // borderWidth: isTablet() ? 1 : 0.3,
  padding: '5%',
  // shadowOffset: {width: 0, height: 0},
  // shadowOpacity: 0.3,
  // shadowRadius: 0.5,
  // marginTop: isTablet() ? getWidthTab(15) : getWidth(15),
  // marginBottom: isTablet() ? getWidthTab(21) : getWidth(21),
  // marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(16),
};
export const HEADER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const INFO_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? '1%' : '1%',
};
export const NAME: TextStyle = {
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font10 : Font15,
  color: '#1A1E25',
  includeFontPadding: false,
  textAlignVertical: 'center',
  // backgroundColor: 'red'
};
export const SHIMMER_NAME: TextStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(18),
  marginEnd: isTablet() ? '3%' : '5%',
  width: isTablet() ? '80%' : '70%',
};
export const INFO: TextStyle = {
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font14,
  color: colors.textSecondary,
  marginTop: isTablet() ? '2%' : '3%',
  includeFontPadding: false,
  textAlignVertical: 'center',
};

export const SHIMMER_INFO: TextStyle = {
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(18),
  width: isTablet() ? '50%' : '50%',
  marginTop: isTablet() ? '2%' : '3%',
};

export const PHONE: TextStyle = {...INFO, marginTop: '4%'};

export const IMAGE_BUTTON_CONTAINER: ImageStyle = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  // backgroundColor: 'pink',
  // marginRight: isTablet() ? getWidthTab(5) : getWidth(5),
};

export const SHIMMER_IMAGE_BUTTON_CONTAINER: ImageStyle = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(18),
  width: isTablet() ? '7%' : '10%',
};
export const IMAGE_BUTTON: TextStyle = {
  color: 'black',
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font10 : Font15,
};

export const TAG_STYLE: ViewStyle = {
  paddingHorizontal: isTablet() ? getWidthTab(15) : getWidth(10),
  borderWidth: isTablet() ? getWidthTab(0.2) : getWidth(0.2),
  borderRadius: isTablet() ? getWidthTab(1.5) : getWidth(4),
  paddingVertical: isTablet() ? getWidthTab(3) : getWidth(3),
};

export const SHIMMER_TAG_STYLE: ViewStyle = {
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
  height: isTablet() ? getWidthTab(20) : getWidth(20),
  width: isTablet() ? '30%' : '30%',
};

export const TAG_TEX_STYLE: TextStyle = {
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font9 : Font12,
  color: 'black',
};

export const forgotPasswordText: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font11 : Font16,
  color: colors.secondary,
};

export const forgotPassword: ViewStyle = {
  alignSelf: 'flex-end',
  // color: colors.secondary,
  marginRight: isTablet() ? '20%' : '6%',
  marginTop: isTablet() ? '1%' : '2%',
};
