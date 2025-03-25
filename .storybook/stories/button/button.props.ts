import React from 'react';
import {
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  TextStyle,
} from 'react-native';
import {IconNode} from '@rneui/base/dist/Icon';
import {TextProps} from '@rneui/base/dist/Text';

export interface ButtonProps {
  title?: string | React.ReactElement<{}>;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  buttonStyle?: StyleProp<ViewStyle>;
  type?: 'solid' | 'clear' | 'outline';
  loading?: boolean;
  loadingStyle?: StyleProp<ViewStyle>;
  loadingProps?: ActivityIndicatorProps;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconRight?: boolean;
  linearGradientProps?: object;
  TouchableComponent?: typeof React.Component;
  ViewComponent?: typeof React.Component;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTitleStyle?: StyleProp<TextStyle>;
  raised?: boolean;
  onPress?: (arg: any) => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  accessibilityLabel?:string;
}
