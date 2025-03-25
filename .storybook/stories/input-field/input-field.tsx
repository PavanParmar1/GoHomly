import React, {useState} from 'react';
import {Input} from '@rneui/themed';
import {
  OUTER_CONTAINER,
  OUTER_CONTAINER_MEDIUM,
  OUTER_CONTAINER_SMALL,
  TEXT,
  LABEL_STYLE,
  ERROR_STYLE,
  INNER_CONTAINER_PLAIN,
  INNER_CONTAINER_BORDER,
  INNER_CONTAINER_SOLID,
  DISABLED_INPUT_STYLE,
} from './input-field.presets';
import {TextFieldProps} from './input-field.props';
import {KeyboardTypeOptions, ViewStyle, Alert, Text} from 'react-native';
import {compulsory} from '../personal-info/personal-info.presets';

function InputField(props: TextFieldProps) {
  const arrKeyBoardType: string[] = [
    'ascii-capable',
    'ascii-capable-number-pad',
    'decimal-pad',
    'default',
    'email-address',
    'name-phone-pad',
    'number-pad',
    'numbers-and-punctuation',
    'numeric',
    'phone-pad',
    'twitter',
    'url',
    'web-search',
  ];
  const {
    viewMode,
    rightIcon,
    multiline,
    rightIconContainerStyle,
    placeholder,
    keyboardType = 'default',
    label,
    errorMessage,
    placeholderTextColor,
    returnKeyType,
    onSubmitEditing,
    // ...rest
  } = props;

  let keyType: string = keyboardType;
  keyType = arrKeyBoardType.includes(keyboardType) ? keyType : 'default';
  const [outerContainer] = useState(() => {
    switch (viewMode || 'large') {
      case 'small':
        return OUTER_CONTAINER_SMALL;
      case 'medium':
        return OUTER_CONTAINER_MEDIUM;
      default:
        return OUTER_CONTAINER;
    }
  });
  const [inputContainer] = useState(() => {
    switch (props.type || 'border') {
      case 'solid':
        return INNER_CONTAINER_SOLID;
      case 'border':
        return INNER_CONTAINER_BORDER;
      case 'plain':
        return INNER_CONTAINER_PLAIN;
      default:
        return INNER_CONTAINER_BORDER;
    }
  });
  const [textStyles]: any = useState<ViewStyle>(() => {
    return props.multiline === true
      ? ({...textStyles, marginTop: 10} as ViewStyle)
      : ({marginTop: 0} as ViewStyle);
  });

  const containerStyles = [outerContainer, props.containerStyle];
  const inputContainerStyles = [inputContainer, props.inputContainerStyle];
  const inputStyle = [TEXT, props.inputStyle, textStyles];
  const errorStyle = [ERROR_STYLE, props.errorStyle];
  const labelStyle = [LABEL_STYLE, props?.labelStyle];

  function handleInputText(txtInput: any) {
    if (
      txtInput !== null &&
      txtInput.trim().length > 0 &&
      txtInput !== undefined
    ) {
      switch (keyboardType) {
        case 'email-address':
          // eslint-disable-next-line no-case-declarations
          const pattern = /^[a-zA-Z0-9._@]*$/;
          if (pattern.test(txtInput as string) === true) {
            props.onChangeText && props.onChangeText(txtInput);
          } else {
            console.log('invalid email');
          }
          break;
        case 'numeric':
          // eslint-disable-next-line no-case-declarations
          const numericRegex = /^[0-9]+$/;
          if (numericRegex.test(txtInput) === true) {
            props.onChangeText && props.onChangeText(txtInput);
          }
          break;
        default:
          // console.log('default: ' + txtInput);
          props.onChangeText && props.onChangeText(txtInput);
      }
    } else {
      props.onChangeText && props.onChangeText(txtInput);
    }
  }
  function validateUserInput(text: any) {
    // console.log('end of txt input', text);
    if (text.length > 0) {
      if (keyboardType === 'email-address') {
        // eslint-disable-next-line no-useless-escape
        const regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(text)) {
          // Alert.alert('Your Email is Valid.');
        } else {
          // Alert.alert('Please enter valid Email.');
        }
      } else if (keyboardType === 'url' || keyboardType === 'web-search') {
        const regex = /^(https?|http):\/\/[^\s$.?#].[^\s]*$/;
        if (regex.test(text)) {
          // Alert.alert('rediracting to the page');
        } else {
          // Alert.alert('Unable to search....Please type correct URL ');
        }
      }
    }
  }

  const _autoCapitalize =
    keyboardType == 'email-address'
      ? 'none'
      : props.autoCapitalize
        ? props.autoCapitalize
        : 'words';

  return (
    <Input
      // autoFocus
      accessible={true}
      accessibilityLabel=''
      containerStyle={containerStyles}
      inputContainerStyle={inputContainerStyles}
      errorMessage={errorMessage || ''}
      errorStyle={errorStyle}
      // errorProps ={}
      inputStyle={inputStyle}
      // label={label || 'Enter Title'}
      label={
        (
          <Text style={[labelStyle, {includeFontPadding: false}]}>
            {label}
            {props.isRequired && <Text style={compulsory}>*</Text>}
          </Text>
        ) || 'Enter Title'
      }
      labelStyle={labelStyle}
      // labelProps  ={}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyType as KeyboardTypeOptions}
      autoCorrect={props.autoCorrect || false}
      secureTextEntry={props.secureTextEntry || false}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}
      leftIcon={props.leftIcon}
      leftIconContainerStyle={props.leftIconContainerStyle}
      maxLength={props.maxLength}
      disabled={props.disabled}
      disabledInputStyle={props.disabledInputStyle || DISABLED_INPUT_STYLE}
      multiline={multiline || false}
      renderErrorMessage={props.renderErrorMessage} // what about this
      autoCapitalize={_autoCapitalize}
      onChangeText={value => handleInputText(value)}
      onEndEditing={e => validateUserInput(e.nativeEvent.text)}
      value={props.value}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      isRequired={props.isRequired}

      // {...rest}
    />
  );
}
export default InputField;
