import {StyleSheet} from 'react-native';
import {
  Fonts,
  Font14,
  Font18,
  Font15,
  Font12,
  Font10,
  getWidthTab,
  getWidth,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {isTablet} from 'react-native-device-info';

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
    marginBottom: '2%',
  },
  seeAllButtonTitle: {
    color: colors.textPrimary,
    fontSize: isTablet() ? Font10 : Font14,
    fontWeight: '600',
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  outerContainer: {
    marginTop: isTablet() ? '5%' : '8%',
    marginBottom: isTablet() ? 0 : '5%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    width: '55%',
  },
  itemTextContainer: {
    flex: 1,
    fontWeight: '400',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    marginLeft: isTablet() ? '10.5%' : '10.5%',
    color: '#121212',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  imageContainer: {flexDirection: 'row', alignItems: 'center'},
  imagestyle: {
    height: isTablet() ? getWidthTab(30) : getWidth(18),
    width: isTablet() ? getWidthTab(30) : getWidth(18),
    marginRight: isTablet() ? getWidthTab(10) : getWidth(5),
  },
});

export default styles;
