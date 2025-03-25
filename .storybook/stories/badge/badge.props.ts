import React, {FunctionComponent} from 'react';
import {
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  PressableProps,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';

export interface BadgeProps {
  containerStyle?: StyleProp<ViewStyle>;
  badgeStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  imagePath?: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
  textStyle?: StyleProp<TextStyle>;
  value?: React.ReactNode;
  Component?: typeof React.Component;
  status?: 'primary' | 'success' | 'warning' | 'error';
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  pressableProps?: Omit<
    PressableProps,
    'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
  >;
}
export declare const Badge: FunctionComponent<BadgeProps>;
