import {StyleSheet} from 'react-native';
import {
  Fonts,
  Font14,
  Font18,
  Font15,
  Font12,
  Font10,
  getWidthTab,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {windowWidth, getWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const iconSize = isTablet()
  ? (22 * windowWidth) / 834
  : (20 * windowWidth) / 375;

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font12 : Font18,
    color: colors.textPrimary,
    alignSelf: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '2%',
  },
  seeAllButtonTitle: {
    color: colors.textSecondary,
    fontSize: isTablet() ? Font10 : Font14,
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  outerContainer: {
    marginTop: '7.5%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: isTablet() ? '1%' : '2.5%',
    marginBottom: isTablet() ? '1%' : '2.5%',
    width: isTablet() ? '25%' : '55%',
  },
  itemTextContainer: {
    flex: 1,
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    paddingLeft: isTablet() ? '5%' : '10.5%',
    marginRight: isTablet() ? '10%' : '10.5%',
    color: '#121212',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  iconStyle: {height: iconSize, width: iconSize},
  listContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: '1%',
    paddingTop: '2%',
    borderTopLeftRadius: getWidth(20),
    borderTopRightRadius: getWidth(20),
    marginBottom: isTablet() ? getWidthTab(0) : getWidth(0),
    paddingBottom: isTablet() ? getWidthTab(50) : getWidth(40),
  },
  divider: {
    width: '12.8%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  featuresListView: {
    marginTop: '8%',
    marginLeft: '3.5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
