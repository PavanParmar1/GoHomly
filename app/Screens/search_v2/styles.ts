import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {
  Fonts,
  getWidth,
  Font12,
  Font16,
  getWidthTab,
  Font10,
  Font8,
  windowHeight,
  Font14,
  Font7,
  Font9,
  windowWidth,
} from '../../utils/common';

export const notificationContainer: ViewStyle = {
  width: isTablet() ? getWidthTab(30) : getWidth(25),
  marginLeft: isTablet() ? getWidthTab(60) : getWidth(10),
  paddingTop: isTablet() ? getWidthTab(10) : getWidth(0),
};
export const chatIcon: ViewStyle = {
  width: isTablet() ? getWidthTab(35) : getWidth(22),
  height: isTablet() ? getWidthTab(35) : getWidth(22),
};
export const headerContainer: ViewStyle = {
  paddingVertical: isTablet() ? getWidthTab(20) : getWidth(12),
};

export const headerInnerContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: isTablet() ? getWidthTab(20) : getWidth(16),
  marginRight: isTablet() ? getWidthTab(16) : getWidth(12),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(12),
  alignItems: 'center',
};

export const welcomeText: TextStyle = {
  color: colors.textSecondary,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font10 : Font16,
  textAlign: 'left',
  includeFontPadding: false,
};

export const sosView: ViewStyle = {
  borderRadius: 5,
  backgroundColor: colors.buttonPrimary,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: isTablet() ? getWidthTab(15) : getWidth(7),
};

export const sosText: TextStyle = {
  color: 'white',
  textAlignVertical: 'center',
  textAlign: 'center',
  // borderRadius: 5,
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font8 : Font12,
  paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(9),
  // height: isTablet() ? getWidthTab(30) : getWidth(22),
  //
  paddingVertical: 5,
};

export const searchModalContainer: ViewStyle = {
  width: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: '#F6F6F6',
};

export const filterModalContainer: ViewStyle = {
  width: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: colors.background,
  height: '100%',
};

export const INNER_CONTAINER_STYLE: ViewStyle = {
  backgroundColor: colors.white,
  borderRadius: isTablet() ? getWidthTab(15) : getWidth(10),
  padding: isTablet() ? getWidthTab(20) : getWidth(15),
};
export const SEARCH_MODEL_HEADER_TEXT: TextStyle = {
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font10 : Font16,
  textAlignVertical: 'center',
};
export const SEARCH_BAR_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  borderColor: '#777777',
  borderWidth: isTablet() ? getWidthTab(1) : getWidth(1),
  alignItems: 'center',
  padding: isTablet() ? getWidthTab(10) : getWidth(10),
  marginVertical: isTablet() ? getWidthTab(10) : getWidth(20),
};
export const TEXTINPUT_STYLE: TextStyle = {
  flex: 1,
  fontSize: isTablet() ? Font9 : Font16,
  color: '#121212',
  fontFamily: Fonts.SFProRounded.Medium,
  padding: 0,
  marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
  textAlignVertical: 'center',
};

const serach_icon_width = isTablet()
  ? (25 * windowWidth) / 834
  : (16 * windowWidth) / 375;
const serach_icon_height = isTablet()
  ? (25 * windowWidth) / 834
  : (16 * windowWidth) / 375;

export const SEARCH_ICON: ImageStyle = {
  width: serach_icon_width,
  height: serach_icon_height,
  tintColor: '#777777',
};

export const SUB_TEXT_STYLE: TextStyle = {
  color: 'black',
  fontFamily: Fonts.SFProRounded.Regular,
  fontSize: isTablet() ? Font7 : Font12,
  textAlignVertical: 'center',
};

export const SEARCH_SUGGESTION_CONTAINER: ViewStyle = {
  // paddingVertical: isTablet() ? getWidthTab(10) : getWidth(10),
  paddingHorizontal: isTablet() ? getWidthTab(10) : getWidth(10),
  // backgroundColor:"pink"
};
export const SEARCH_SUGGESTION_ITEM: ViewStyle = {
  paddingVertical: isTablet() ? getWidthTab(10) : getWidth(10),
};

export const ADDRESS_TEXT_STYLE: TextStyle = {
  color: '#777777CC',
  marginLeft: isTablet() ? getWidthTab(10) : getWidth(10),
  textAlignVertical: 'center',
  fontSize: isTablet() ? Font7 : Font12,
};

export const WHERE_MAIN_CONTAINER: ViewStyle = {};
export const WHEN_MAIN_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(20) : getWidth(10),
};
export const WHO_MAIN_CONTAINER: ViewStyle = {
  marginTop: isTablet() ? getWidthTab(20) : getWidth(10),
};

export const TEXT_STYLE: TextStyle = {
  color: colors.textSecondary,
  fontFamily: Fonts.SFProRounded.Medium,
  fontSize: isTablet() ? Font9 : Font16,
  textAlignVertical: 'center',
};

export const OUTER_CONTAINER_STYLE: ViewStyle = {
  paddingHorizontal: isTablet() ? getWidthTab(20) : getWidth(16),
  paddingVertical: isTablet() ? getWidthTab(40) : getWidth(33),
};

export const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: isTablet() ? getWidthTab(50) : getWidth(41),
};

export const BUTTON_STYLE: ImageStyle = {
  backgroundColor: colors.secondary,
  borderRadius: isTablet() ? getWidth(12) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_STYLE1: ImageStyle = {
  backgroundColor: '#F6F6F6',
  borderRadius: isTablet() ? getWidth(6) : getWidth(43),
  height: isTablet() ? getWidth(25) : getWidth(46),
  width: isTablet() ? getWidth(100) : getWidth(150),
  marginRight: isTablet() ? getWidth(6) : getWidth(5),
  alignItems: 'center',
  justifyContent: 'center',
};

export const BUTTON_FONT_STYLE: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.background,
  textAlignVertical: 'center',
};

export const BUTTON_FONT_STYLE1: TextStyle = {
  fontSize: isTablet() ? Font10 : Font14,
  fontFamily: Fonts.SFProRounded.Bold,
  color: colors.secondary,
  textAlignVertical: 'center',
};
export const DIVIDER1: ViewStyle = {
  width: '100%',
  // marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
};

export const chatView: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const DIVIDER: ViewStyle = {
  width: isTablet() ? getWidthTab(80) : getWidth(48),
  marginTop: isTablet() ? getWidthTab(20) : getWidth(13),
  alignSelf: 'center',
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
};

export const modal: ViewStyle = {
  justifyContent: 'flex-end',
  margin: 0,
};

export const scrollableModal: ViewStyle = {
  height: (windowHeight * 40) / 100,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const LottieViewStyle: ViewStyle = {
  height: 100,
  width: 100,
  alignSelf: 'center',
};

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
};

export const wrapper: ViewStyle = {
  width: '100%',
  height: '100%',
  // backgroundColor: 'white',
};

export const flatlistView: ViewStyle = {
  paddingVertical: isTablet() ? getWidthTab(15) : getWidth(9),
  backgroundColor: 'white',
  height: '100%',
  // borderBottomRightRadius: getWidth(20),
  // borderBottomLeftRadius: getWidth(20),
};
export const modalView: ViewStyle = {
  marginHorizontal: 0,
  justifyContent: 'flex-end',
  marginVertical: 0,
};

export const modalView1: ViewStyle = {
  marginHorizontal: 0,
  justifyContent: 'flex-end',
  marginTop: isTablet() ? getWidthTab(50) : getWidth(80),
  marginBottom: 0,
};

export const HEADER: TextStyle = {
  fontFamily: Fonts.SFProRounded.SemiBold,
  fontSize: isTablet() ? Font12 : Font16,
  color: 'black',
  includeFontPadding: false,
  textAlignVertical: 'center',
  marginVertical: isTablet() ? '4%' : '3%',
  marginHorizontal: isTablet() ? '5%' : '5%',
};

export const ServiceModalContainer: ViewStyle = {
  alignItems: 'flex-end',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  padding: '5%',
  paddingVertical: '6%',
};

export const Pice: TextStyle = {
  fontFamily: Fonts.SFProRounded.Medium,
  color: 'black',
  fontSize: isTablet() ? Font10 : Font14,
  marginEnd: isTablet() ? '1%' : '1%',
};

export const SubContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
};
