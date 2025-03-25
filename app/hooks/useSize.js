import {Platform} from 'react-native';
import useOrientation from './useOrientation';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../app/theme';
import {Fonts} from '../utils/common/fonts';

const useSize = () => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;

  const IS_IOS = Platform.OS === 'ios';

  const definePlatform = ({ios, android}) => (IS_IOS ? ios : android);

  const Font4 = definePlatform({
    ios: windowWidth * 0.015,
    android: windowWidth * 0.0125,
  });

  const Font5 = definePlatform({
    ios: windowWidth * 0.0175,
    android: windowWidth * 0.015,
  });

  const Font6 = definePlatform({
    ios: windowWidth * 0.02,
    android: windowWidth * 0.0175,
  });

  const Font7 = definePlatform({
    ios: windowWidth * 0.0225,
    android: windowWidth * 0.02,
  });
  const Font8 = definePlatform({
    ios: windowWidth * 0.025,
    android: windowWidth * 0.0225,
  });
  const Font9 = definePlatform({
    ios: windowWidth * 0.0275,
    android: windowWidth * 0.025,
  });
  const Font10 = definePlatform({
    ios: windowWidth * 0.03,
    android: windowWidth * 0.0275,
  });
  const Font11 = definePlatform({
    ios: windowWidth * 0.0325,
    android: windowWidth * 0.03,
  });
  const Font12 = definePlatform({
    ios: windowWidth * 0.035,
    android: windowWidth * 0.0325,
  });
  const Font13 = definePlatform({
    ios: windowWidth * 0.0375,
    android: windowWidth * 0.035,
  });
  const Font14 = definePlatform({
    ios: windowWidth * 0.04,
    android: windowWidth * 0.0375,
  });
  const Font15 = definePlatform({
    ios: windowWidth * 0.0425,
    android: windowWidth * 0.04,
  });
  const Font3 = definePlatform({
    ios: windowWidth * 0.045,
    android: windowWidth * 0.04,
  });
  const Font16 = definePlatform({
    ios: windowWidth * 0.0475,
    android: windowWidth * 0.0425,
  });
  const Font17 = definePlatform({
    ios: windowWidth * 0.05,
    android: windowWidth * 0.045,
  });
  const Font18 = definePlatform({
    ios: windowWidth * 0.0525,
    android: windowWidth * 0.0475,
  });
  const Font19 = windowWidth * 0.0475;
  const Font20 = windowWidth * 0.05;
  const Font22 = windowWidth * 0.055;
  const Font24 = windowWidth * 0.06;
  const Font28 = windowWidth * 0.075;
  const Font32 = windowWidth * 0.08;
  const Font36 = windowWidth * 0.09;
  const PageLimit = 10;
  function getHeight(height) {
    return (windowWidth / 375) * height;
  }
  function getWidth(width) {
    return (windowWidth / 375) * width;
  }
  function getWidthTab(width) {
    return (windowWidth / 834) * width;
  }
  const navbarHeader = {
    marginLeft: isTablet() ? getWidthTab(15) : getWidth(0),
    marginRight: isTablet() ? getWidthTab(15) : getWidth(0),
    height: isTablet() ? 34 : getWidth(48),
    width: isTablet() ? 34 : getWidth(48),
    justifyContent: 'center',
    alignItems: 'flex-start',
  };
  const navbarImage = {
    width: isTablet() ? getWidthTab(19) : getWidth(15),
    height: isTablet() ? getWidthTab(19) : getWidth(15),
  };
  const navbarTitle = {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: orientation === 'landscape' ? Font7 : isTablet() ? Font9 : Font17,
    color: colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  };

  return {
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    Font10,
    Font11,
    Font12,
    Font13,
    Font14,
    Font15,
    Font16,
    Font17,
    Font18,
    Font19,
    Font20,
    Font22,
    Font24,
    Font28,
    Font36,
    Font32,
    PageLimit,
    getHeight,
    getWidth,
    getWidthTab,
    navbarHeader,
    navbarImage,
    navbarTitle,
    IS_IOS,
  };
};

export default useSize;
