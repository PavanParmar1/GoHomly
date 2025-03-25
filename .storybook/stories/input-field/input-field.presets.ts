import {TextStyle, ViewStyle} from 'react-native';
import {colors, typography} from '../../../app/theme';
import {
  Fonts,
  Font16,
  GrayTextInputBorder,
  windowWidth,
} from '../../../app/utils/common';

/**
 * OuterContainer - TextInput - View (OuterView, Like Margin Top, etc)
 */
export const OUTER_CONTAINER: ViewStyle = {
  marginHorizontal: '7%',
  width: '86%',
  paddingTop: '1%',
  paddingHorizontal: '1%',
  backgroundColor: colors.background,
  marginBottom: 0,
  paddingBottom: '1%',
};
export const OUTER_CONTAINER_MEDIUM: ViewStyle = {
  ...OUTER_CONTAINER,
  width: '50%',
};
export const OUTER_CONTAINER_SMALL: ViewStyle = {
  ...OUTER_CONTAINER,
  width: '30%',
};

/**
 * InputContainer - TextInput - View (InnerView, Like Border around text input, Margin Top, etc)
 */
export const INNER_CONTAINER_PLAIN: ViewStyle = {
  marginTop: '2.5%',
  borderColor: GrayTextInputBorder,
};
export const INNER_CONTAINER_BORDER: ViewStyle = {
  // inputContainerStyle={{borderColor:'#777777',borderRadius:10,opacity:0.3,width:303,height:45}}

  ...INNER_CONTAINER_PLAIN,
  // backgroundColor: 'pink',
  borderWidth: 1,
  paddingHorizontal: '3%',
  borderColor: GrayTextInputBorder,
  borderRadius: 8,
  height: (windowWidth / 100) * 13,
};
export const INNER_CONTAINER_SOLID: ViewStyle = {
  ...INNER_CONTAINER_PLAIN,
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: '2%',
};

/**
 * TextStyle - TextInput - View (all font styles for label and input text, Like family,color,fontsize etc)
 */

export const TEXT: TextStyle = {
  fontFamily: typography.primary,
  color: colors.textPrimary,
  fontSize: Font16,
  fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
};
export const MULTILINE_TEXT: TextStyle = {
  ...TEXT,
};
export const LABEL_STYLE: TextStyle = {
  // fontFamily: typography.primary,
  fontFamily: Fonts.SFProRounded.Regular,
  color: colors.textPrimary,
  fontSize: Font16,
  // fontWeight: '400',
  includeFontPadding: false,
  textAlignVertical: 'center',
  // backgroundColor: 'pink'
};

export const DISABLED_INPUT_STYLE: TextStyle = {
  // backgroundColor: colors.disabled,
};

/**
 * ErrorStyle - Error- View (all font styles for error, Like family,color,fontsize etc)
 */

export const ERROR_STYLE: TextStyle = {
  marginVertical: 0,
  // fontFamily: typography.primary,
  //  color: colors.error,
  //  fontSize:8,
  // fontWeight: '400',
  // // backgroundColor: 'yellow',
  // marginBottom: 0,
  height: 0,
};

// const containerStyle = OUTER_CONTAINER;
// const inputContainerStyle = INNER_CONTAINER_BORDER;
// const errorMessage = 'oops You typed something wrong... ';
// const errorStyle = {fontFamily: typography.primary};
// const errorProps = {colors: 'red'};
// const inputStyle = TEXT;
// const label = 'Enter Anything';
// const labelStyle = TEXT;
// const labelProps = {};
// const placeholder = 'Just type here';
// const keyboardType = 'default';
// const autoCorrect = true;
// const secureTextEntry = false;
// const rightIcon = {};

// // export const BASE =[containerStyle,inputContainerStyle,errorMessage, errorStyle,errorProps,inputStyle,label,labelStyle,labelProps,placeholder,keyboardType, autoCorrect,secureTextEntry,rightIcon ]

export const typePresets: Record<string, ViewStyle> = {};

// export const PRESETS: {[name: string]: ViewStyle | TextInputProps} = {
//   default: {},
//   solid: {
//       ...containerStyle,
//       ...errorStyle,
//       ...inputContainerStyle,
//       ...errorProps ,
//       ...inputStyle,
//       ...labelStyle ,
//       ...labelProps ,
//       placeholder,
//       autoCorrect ,
//       secureTextEntry ,
//   },
//   border: {
//       ...containerStyle,
//       ...errorStyle,
//       ...inputContainerStyle,
//       ...errorProps ,
//       ...inputStyle,
//       ...labelStyle ,
//       ...labelProps ,
//       placeholder,
//       secureTextEntry ,
//       keyboardType:"email-address",
//       autoCorrect:false,
//   },
//   plain: {
//       ...containerStyle,
//       ...errorStyle,
//       ...inputContainerStyle,
//       ...errorProps ,
//       ...inputStyle,
//       ...labelStyle ,
//       ...labelProps ,
//       placeholder,
//   autoCorrect:false,
//   secureTextEntry:true
//   },
//   small: {

//   },
//   medium:{

//   },
//   large:{

//   }
// };
// export type InputFieldPreset = keyof typeof PRESETS;
