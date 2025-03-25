import {Dimensions, Platform, ViewStyle} from 'react-native';
import {ImageStyle, TextStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from './fonts';

// const { height, width } = useWindowDimensions();

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const IS_IOS: boolean = Platform.OS === 'ios';

export const definePlatform = ({
  ios,
  android,
}: {
  ios: any;
  android: any;
}): any => (IS_IOS ? ios : android);

export const Font7: number = definePlatform({
  ios: windowWidth * 0.0225,
  android: windowWidth * 0.02,
});
export const Font8: number = definePlatform({
  ios: windowWidth * 0.025,
  android: windowWidth * 0.0225,
});
export const Font9: number = definePlatform({
  ios: windowWidth * 0.0275,
  android: windowWidth * 0.025,
});
export const Font10: number = definePlatform({
  ios: windowWidth * 0.03,
  android: windowWidth * 0.0275,
});
export const Font11: number = definePlatform({
  ios: windowWidth * 0.0325,
  android: windowWidth * 0.03,
});
export const Font12: number = definePlatform({
  ios: windowWidth * 0.035,
  android: windowWidth * 0.0325,
});
export const Font13: number = definePlatform({
  ios: windowWidth * 0.0375,
  android: windowWidth * 0.035,
});
export const Font14: number = definePlatform({
  ios: windowWidth * 0.04,
  android: windowWidth * 0.0375,
});
export const Font15: number = definePlatform({
  ios: windowWidth * 0.0425,
  android: windowWidth * 0.04,
});
export const Font3: number = definePlatform({
  ios: windowWidth * 0.045,
  android: windowWidth * 0.04,
});
export const Font16: number = definePlatform({
  ios: windowWidth * 0.0475,
  android: windowWidth * 0.0425,
});
export const Font17: number = definePlatform({
  ios: windowWidth * 0.05,
  android: windowWidth * 0.045,
});
export const Font18: number = definePlatform({
  ios: windowWidth * 0.0525,
  android: windowWidth * 0.0475,
});
export const Font19: number = windowWidth * 0.0475;
export const Font20: number = windowWidth * 0.05;
export const Font22: number = windowWidth * 0.055;
export const Font24: number = windowWidth * 0.06;
export const Font28: number = windowWidth * 0.075;
export const Font32: number = windowWidth * 0.08;
export const Font36: number = windowWidth * 0.09;
export const PageLimit = 10;

export function getHeight(height: number) {
  return (windowWidth / 375) * height;
}

export function getWidth(width: number) {
  return (windowWidth / 375) * width;
}
export function getWidthTab(width: number) {
  return (windowWidth / 834) * width;
}
export const navbarHeader: ViewStyle = {
  marginLeft: isTablet() ? getWidthTab(15) : getWidth(0),
  marginRight: isTablet() ? getWidthTab(15) : getWidth(0),
  height: isTablet() ? 34 : getWidth(48),
  width: isTablet() ? 34 : getWidth(48),
  justifyContent: 'center',
  alignItems: 'flex-start',
  // backgroundColor: 'pink',
};
export const navbarImage: ImageStyle = {
  width: isTablet() ? getWidthTab(19) : getWidth(15),
  height: isTablet() ? getWidthTab(19) : getWidth(15),
};
export const navbarTitle: TextStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: Fonts.SFProRounded.Bold,
  fontSize: isTablet() ? Font9 : Font17,
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
