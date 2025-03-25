import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../theme';
import {Fonts} from '../../utils/common';

const PersonalInfoStyle = (
  getWidth: any,
  getWidthTab: any,
  Font12: number,
  Font17: number,
) =>
  StyleSheet.create({
    navbarHeader: {
      marginLeft: getWidth(5),
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarHeaderTablet: {
      marginLeft: getWidthTab(40),
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    navbarImage: {
      width: isTablet() ? getWidthTab(22) : getWidth(15),
      height: isTablet() ? getWidthTab(22) : getWidth(15),
    },
    // navbarImageTablet: {width: 30, height: 30},
    navbarTitle: {
      // marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: Fonts.SFProRounded.Bold,
      fontSize: isTablet() ? Font12 : Font17,
      color: colors.textPrimary,
      textAlignVertical: 'center',
      includeFontPadding: false,
    },
  });
export default PersonalInfoStyle;
