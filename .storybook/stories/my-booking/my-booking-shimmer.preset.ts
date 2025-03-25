import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {windowWidth, getWidth, getWidthTab} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const iconWidth = (windowWidth / 375) * 30;
const iconWidthTab = (windowWidth / 834) * 42;

export const SHIMMER_ITEM_ADDRESS_HEADER_STYLE: TextStyle = {
  marginTop: isTablet()
    ? getWidthTab(5)
    : Platform.OS === 'ios'
      ? getWidth(12)
      : getWidth(12),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  borderRadius: 20,
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '88%' : '95%',
};

export const SHIMMER_ITEM_INFORMATION_SUB_DESCRIPTION_STYLE: TextStyle = {
  marginTop: isTablet()
    ? getWidthTab(5)
    : Platform.OS === 'ios'
      ? getWidth(3)
      : getWidth(5),
  borderRadius: 20,
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '88%' : '95%',
};

export const SHIMMER_ITEM_RATING_IMGE_STYLE: ImageStyle = {
  // marginLeft: isTablet() ? getWidthTab(15) : getWidth(0),
  // width: isTablet() ? getWidthTab(35) : getWidth(20),
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  borderRadius: 20,
  marginTop: isTablet() ? getWidthTab(5) : getWidth(12),
  // height: isTablet() ? getWidthTab(20) : getWidth(19),
  width: isTablet() ? '10%' : '15%',
};

export const SHIMMER_ITEM_TRAVEL_GUEST_HEADER_STYLE: TextStyle = {
  marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '40%' : '25%',
  height: isTablet() ? getWidthTab(20) : getWidth(18),
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(8),
};

export const SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE: TextStyle = {
  marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '40%' : '50%',
  height: isTablet() ? getWidthTab(20) : getWidth(18),
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(8),
};

export const SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE_TAB: TextStyle = {
  marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '25%' : '25%',
  height: isTablet() ? getWidthTab(18) : getWidth(18),
  borderRadius: isTablet() ? getWidthTab(20) : getWidth(8),
};

export const SHIMMER_GUEST_INFORMATION_MAIN_CONTAINER: ViewStyle = {
  width: isTablet() ? '100%' : '100%',
  marginVertical: isTablet() ? '2%' : '4%',
};

export const SHIMMER_ITEM_GUEST_INFO_STYLE: TextStyle = {
  marginTop: isTablet() ? getWidthTab(6) : getWidth(5),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '75%' : '81%',
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  borderRadius: 20,
};

export const SHIMMER_ITEM_TRAVEL_DATE_STYLE: TextStyle = {
  marginTop: isTablet() ? getWidthTab(6) : getWidth(5),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '88%' : '90%',
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  borderRadius: 20,
};

export const SHITEM_TRAVEL_DATE_HEADER_STYLE: TextStyle = {
  marginTop: isTablet() ? getWidthTab(12) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(16) : getWidth(4),
  width: isTablet() ? '88%' : '70%',
  height: isTablet() ? getWidthTab(20) : getWidth(19),
  borderRadius: 20,
};

export const SHIMMER_CHECKOUT_BTN: ViewStyle = {
  width: isTablet() ? '49%' : '50%',
  height: isTablet() ? getWidthTab(60) : getWidth(40),
  borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
  marginLeft: isTablet() ? getWidthTab(15) : getWidth(4),
  top: isTablet() ? getWidthTab(0) : getWidth(0),
};

export const SHIMMER_ICON: ImageStyle = {
  width: isTablet() ? iconWidthTab : iconWidth,
  height: isTablet() ? iconWidthTab : iconWidth,
  borderRadius: isTablet() ? getWidthTab(21) : getWidth(15),
};
