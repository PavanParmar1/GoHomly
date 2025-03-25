import {
  TextInputProps,
  ViewStyle,
  KeyboardTypeOptions,
  TextStyle,
} from 'react-native';
import {IconNode} from '@rneui/base';
// import { PRESETS} from './input-field.presets';
type OpaqueColorValue = symbol & {__TYPE__: 'Color'};
export type ColorValue = string | OpaqueColorValue;
type NodeHandle = number;
export interface NativeSyntheticEvent<T>
  extends React.BaseSyntheticEvent<T, NodeHandle, NodeHandle> {}
export type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';
export type ReturnKeyTypeAndroid = 'none' | 'previous';
export type ReturnKeyTypeIOS =
  | 'default'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call';
export type ReturnKeyTypeOptions =
  | ReturnKeyType
  | ReturnKeyTypeAndroid
  | ReturnKeyTypeIOS;
export interface TextInputSubmitEditingEventData {
  text: string;
}
export interface TextFieldProps extends TextInputProps {
  type?: string;
  viewMode?: string;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  disabled?: boolean;
  disabledInputStyle?: ViewStyle;
  autoCapitalize?: any;
  errorMessage?: string;
  errorStyle?: TextStyle;
  errorProps?: {string: any};
  inputStyle?: TextStyle;
  label?: string | Element;
  labelStyle?: TextStyle;
  labelProps?: {string: any};
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  leftIcon?: IconNode;
  isRequired?: boolean;
  leftIconContainerStyle?: ViewStyle;
  rightIcon?: IconNode;
  rightIconContainerStyle?: ViewStyle;
  maxLength?: number;
  multiline?: boolean;
  onChangeText?: (val: any) => void;
  renderErrorMessage?: boolean;
  isFocused?: boolean;
  placeholderTextColor?: ColorValue | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  // preset?: keyof typeof PRESETS;
}

// allProps:{
//     labelProps ?:ViewStyle,
// placeholder ?:string,
// keyboardType ?:KeyboardTypeOptions,
// autoCorrect ?:boolean,
// secureTextEntry ?:boolean,
// leftIcon ?:IconNode,
// leftIconContainerStyle?:ViewStyle,
// rightIcon ?:IconNode,
// rightIconContainerStyle?: ViewStyle,
// preset ?: InputFieldPreset,
// maxLength?:number,
// }
