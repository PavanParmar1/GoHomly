import {StyleSheet} from 'react-native';
import {colors} from '../../../app/theme/color';

import {Fonts, Font17, Font14} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
export default StyleSheet.create({
  navbarHeader: {
    marginLeft: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navbarHeaderRight: {
    marginRight: 5,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navbarImage: {width: 19, height: 19},
  navbarTitle: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: isTablet() ? Font14 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlistView: {
    backgroundColor: 'white',
  },
  mapView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
