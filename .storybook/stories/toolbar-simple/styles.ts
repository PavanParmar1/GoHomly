import {StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import {Font12, Font18, Fonts} from '../../../app/utils/common';
export default StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '7%',
  },
  styleContainer1: {
    height: isTablet() ? 19 : '42.5%',
    // backgroundColor: '#123456',
    alignSelf: 'center',
    marginTop: '17%',
  },
  containerStyle1: {
    height: '98.5%',
    width: isTablet() ? 19 : '11%',
    // backgroundColor: '#654321',
    marginHorizontal: isTablet() ? 30 : 0,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    position: 'absolute',
    alignSelf: 'center',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  divider: {height: '1%', backgroundColor: '#777777'},
});
