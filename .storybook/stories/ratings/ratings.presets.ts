import {SwipeRatingProps} from './ratings.props';
import {colors, typography} from '../../../app/theme'; 

import {Font11, Font14, windowWidth} from '../../../app/utils/common';
import {TextStyle, ViewStyle} from 'react-native';

export const Default_Rating: SwipeRatingProps = {
  type: 'star',
  ratingImage: 'star',
  ratingColor: colors.ratingPrimary,
  ratingBackgroundColor: colors.background,
  tintColor: colors.background,
  ratingCount: 5,
  ratingTextColor: colors.textPrimary,
  imageSize: (windowWidth / 100) * 7,
  showRating: true,
  readonly: true,
  startingValue: 5,
  fractions: 0,
  minValue: 0,
  style: {marginHorizontal: '7%'},
  jumpValue: 0.1,
  // onStartRating:undefined,
  // onSwipeRating:undefined,
  // onFinishRating:undefined
};
export const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: Font14,
  fontWeight: '400',
  color: colors.textPrimary,
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const LEFT_RATING: TextStyle = {
  ...TEXT,
  fontSize: Font14,
  color: colors.textSecondary,
};
export const RIGHT_RATING: TextStyle = {
  ...TEXT,
  fontSize: Font11,
  color: colors.textSecondary,
};
export const RATING_TEXT_WITH_BG: TextStyle = {
  ...TEXT,
  fontSize: Font11,
  color: colors.background,
};

export const CONTAINER: ViewStyle = {
  marginHorizontal: '7%',
  width: '86%',
  paddingTop: '1%',
  paddingHorizontal: '1%',
  backgroundColor: '#FBFBFB',
  marginBottom: 0,
  paddingBottom: '1%',
  flexDirection: 'row',
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
};
export const BADGE_CONTAINER: ViewStyle = {
  ...CONTAINER,
  width: (windowWidth / 100) * 13.5,
  backgroundColor: colors.secondary,
  borderRadius: 6,
};
// export const Default_Airbnb: TapRatingProps ={
//   defaultRating: 3,
//   reviews: ['Very Bad','Bad','Good','Very Good','Excellent'],
//   count: 5,
//   selectedColor: '#f1c40f',
//   reviewColor: '#f1c40f',
//   size:30,
//   reviewSize: 16,
//   showRating: true,
//   isDisabled: false,
//   onFinishRating: (val:number) => {},
//   starContainerStyle: {},
//   ratingContainerStyle: {},
//   // starImage: ''
// }
