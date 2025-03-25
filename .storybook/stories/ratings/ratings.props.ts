// import { Rating, AirbnbRating } from 'react-native-ratings';
import {ViewStyle, StyleProp, TextStyle} from 'react-native';

export type SwipeRatingProps = {
  name?: string;
  containerStyle?: ViewStyle;

  leftTextStyle?: TextStyle;

  rightTextStyle?: TextStyle;

  /**
   * Graphic used for represent a rating
   *
   * Default is 'star'
   */
  type?: string;

  /*
   * text values to display beside the star
   */
  rightText?: string;
  leftText?: string;
  /**
   * Pass in a custom image source; use this along with type='custom' prop above
   */
  ratingImage?: React.ReactNode;
  /**
   * Pass in a custom fill-color for the rating icon; use this along with type='custom' prop above
   *
   * Default is '#f1c40f'
   */
  ratingColor?: string;
  /**
   * Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop above
   *
   * Default is 'white'
   */
  ratingBackgroundColor?: string;
  /**
   * Number of rating images to display
   *
   * Default is 5
   */
  ratingCount?: number;
  /**
   * Color used for the text labels
   */
  ratingTextColor?: string;
  /**
   * The size of each rating image
   *
   * Default is 50
   */
  imageSize?: number;
  /**
   * Callback method when the user starts rating.
   */
  onStartRating?: Function;
  /**
   * Callback method when the user finishes rating. Gives you the final rating value as a whole number
   */
  onFinishRating?: Function;
  /**
   * Displays the Built-in Rating UI to show the rating value in real-time
   *
   * Default is false
   */
  showRating?: boolean;
  /**
   * Exposes style prop to add additonal styling to the container view
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Whether the rating can be modiefied by the user
   *
   * Default is false
   */
  readonly?: boolean;
  /**
   * Whether the text is read only
   *
   * Default is false
   */
  showReadOnlyText?: boolean;
  /**
   * The initial rating to render
   *
   * Default is ratingCount/2
   */
  startingValue?: number | string;
  /**
   * The number of decimal places for the rating value; must be between 0 and 20
   */
  // fractions?: typeof fractionsType;
  fractions?: number;
  /**
   * The minimum value the user can select
   *
   * Default is 0
   */
  minValue?: number;
  /**
   * Callback method when the user is swiping.
   */
  onSwipeRating?: (number: any) => void;
  /**
   * Color used for the background
   */
  tintColor?: string;
  /**
   * The number to jump per swipe
   * Default is 0 (not to jump)
   */
  jumpValue?: number;
};

export type TapRatingProps = {
  /**
   * Total number of ratings to display
   *
   * Default is 5
   */
  count?: number;
  /**
   * Labels to show when each value is tapped
   *
   * e.g. If the first star is tapped, then value in index 0 will be used as the label
   *
   * Default is ['Terrible', 'Bad', 'Okay', 'Good', 'Great']
   */
  reviews?: string[];
  /**
   * Determines if to show the reviews above the rating
   *
   * Default is true
   */
  showRating?: boolean;
  /**
   * Color value for review.
   *
   * Default is #f1c40f
   */
  reviewColor?: string;
  /**
   * Size value for review.
   *
   * Default is 40
   */
  reviewSize?: number;
  /**
   * Initial value for the rating
   *
   * Default is 3
   */
  defaultRating?: number;
  /**
   * Style for star container
   *
   * Default is none
   */
  starContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for rating container
   *
   * Default is none
   */
  ratingContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Callback method when the user finishes rating. Gives you the final rating value as a whole number
   */
  onFinishRating?: (number: any) => void;
  /**
   * Whether the rating can be modiefied by the user
   *
   * Default is false
   */
  isDisabled?: boolean;
  /**
   * Color value for filled stars.
   *
   * Default is #004666
   */
  selectedColor?: string;
  /**
   * Size of rating image
   *
   * Default is 40
   */
  size?: number;
  /**
   * Pass in a custom base image source
   */
  starImage?: string;
};
