import React, {FunctionComponent} from 'react';
import {
  TextProps,
  TextStyle,
  ViewStyle,
  StyleProp,
  PressableProps,
} from 'react-native';
import {IconType} from '@rneui/base';

export interface CheckBoxProps extends PressableProps {
  checkBoxType?: string;
  Component?: typeof React.Component;
  iconRight?: boolean;
  title?: string | React.ReactElement<{}>;
  titleProps?: TextProps;
  center?: boolean;
  right?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTitleStyle?: StyleProp<TextStyle>;
  checkedTitle?: string;
  fontFamily?: string;
  /*
   * props for checked and unchecked Icon
   */
  checked?: boolean;
  onIconPress?(): void;
  onLongIconPress?(): void;
  onPress?(): void;
  onValueChange?: (isSelected:any)=>void;
  size?: number;
  checkedIcon?: string | React.ReactElement<{}>;
  uncheckedIcon?: string | React.ReactElement<{}>;
  iconType?: IconType;
  checkedColor?: string;
  uncheckedColor?: string;
}

export declare const CheckBox: FunctionComponent<CheckBoxProps>;
