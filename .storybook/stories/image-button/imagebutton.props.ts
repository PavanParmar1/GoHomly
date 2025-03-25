import React from 'react';
import {
  ImageProps as RNImageProps,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {InlinePressableProps} from '@rneui/base/dist/helpers';

export type ImageResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center';
export interface ImageURISource {
  uri?: string | undefined;
  bundle?: string | undefined;
  method?: string | undefined;
  headers?: {[key: string]: string} | undefined;
  cache?: 'default' | 'reload' | 'force-cache' | 'only-if-cached' | undefined;
  body?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  scale?: number | undefined;
}
export type ImageRequireSource = number;
export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;

//Main Component props
export interface IconButtonProps extends RNImageProps, InlinePressableProps {
  Component?: typeof React.Component;
  ImageComponent?: typeof React.Component;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle> | undefined;
  PlaceholderContent?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  transitionDuration?: number;
  resizeMode?: ImageResizeMode | undefined;
  touchOpecity?: number;
  resizeMethod?: 'auto' | 'resize' | 'scale' | undefined;
}
