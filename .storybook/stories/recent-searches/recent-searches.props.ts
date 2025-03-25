import {IconNode} from '@rneui/base-edge';
import {
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

export interface RecentSearchesProps {
  /*
   * Main Heading of component eg. Recent Searches
   */
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  /*
   * The Upper Text in list
   */
  primaryText?: string;
  primaryTextStyle?: StyleProp<TextStyle>;
  /*
   * The lower text
   */
  secondaryText?: string;
  secondaryTextStyle?: StyleProp<TextStyle>;
  /*
   * Container which holds the entire view of component
   */
  outerContainer?: StyleProp<ViewStyle>;
  /*
   * It holds the view of icons and text of every single list item
   */
  innerContainer?: StyleProp<ViewStyle>;
  /*
   * for loading
   */
  loading?: boolean;
  loadingStyle?: StyleProp<ViewStyle>;
  loadingProps?: ActivityIndicatorProps;
  containerStyle?: StyleProp<ViewStyle>;
  /*
   * Left icon of the list
   */
  iconLeft?: ImageSourcePropType;
  iconLeftContainerStyle?: StyleProp<ViewStyle>;
  /*
   * icon on right side in the list
   */
  iconRight?: IconNode;
  iconRightContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (arg: any) => void;
  Data?: {id: number; location: string; city: string}[];
}
