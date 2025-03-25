import {StyleSheet} from 'react-native';
import {
  Fonts,
  Font14,
  Font18,
  Font15,
  Font12,
  Font10,
  getWidth,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {windowWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const iconSize = (20 * windowWidth) / 375;
const iconSizeTab = (20 * windowWidth) / 834;
// const marginRight = (33 * windowWidth) / 375;
// const marginRightTab = (20 * windowWidth) / 834;

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    fontWeight: '700',
    color: colors.textPrimary,
    alignSelf: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: isTablet() ? 0 : '2%',
  },
  seeAllButtonTitle: {
    color: colors.textSecondary,
    fontSize: isTablet() ? Font10 : Font14,
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  outerContainer: {
    marginTop: isTablet() ? 0 : '7.5%',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemTextContainer: {
    fontSize: isTablet() ? Font10 : Font15,
    fontFamily: Fonts.SFProRounded.Light,
    fontWeight: '400',
    color: '#777777',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  itemTextContainer1: {
    fontSize: isTablet() ? Font10 : Font15,
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '400',
    color: '#121212',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  iconStyle: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
  },
  flatList: {
    marginTop: isTablet() ? '3%' : '1.5%',
    marginBottom: isTablet() ? '2%' : '3.6%',
  },
  divider: {
    marginTop: isTablet() ? '4%' : getWidth(19),
  },
});

export default styles;
