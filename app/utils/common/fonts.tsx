import {Platform} from 'react-native';

export const Fonts = {
  SFProRounded: {
    Thin:
      Platform.OS === 'android' ? 'SF-Pro-Rounded-Thin' : 'SFProRounded-Thin',
    Light:
      Platform.OS === 'android' ? 'SF-Pro-Rounded-Light' : 'SFProRounded-Light',
    Regular:
      Platform.OS === 'android'
        ? 'SF-Pro-Rounded-Regular'
        : 'SFProRounded-Regular',
    Medium:
      Platform.OS === 'android'
        ? 'SF-Pro-Rounded-Medium'
        : 'SFProRounded-Medium',
    SemiBold:
      Platform.OS === 'android'
        ? 'SF-Pro-Rounded-Semibold'
        : 'SFProRounded-Semibold',
    Bold:
      Platform.OS === 'android' ? 'SF-Pro-Rounded-Bold' : 'SFProRounded-Bold',
  },
};
