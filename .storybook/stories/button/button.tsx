import * as React from 'react';
import {useState} from 'react';
import {Button as ButtonElement} from '@rneui/base';
import {
  TITLE_STYLE_SOLID,
  TITLE_STYLE_OUTLINE,
  TITLE_STYLE_CLEAR,
  BUTTON_STYLE_SOLID_ENABLE,
  LOADING_STYLE_SOLID,
  LOADING_STYLE_OUTLINE,
  LOADING_STYLE_CLEAR,
  CONTAINER_STYLE,
  ICON_CONTAINER_STYLE,
  DISABLED_STYLE,
  DISABLED_TITLE_STYLE,
  BUTTON_STYLE_OUTLINE_ENABLE,
  DISABLED_OUTLINE_STYLE,
  DISABLED_TITLE_OUTLINE__STYLE,
} from './button.presets';
import {ButtonProps} from './button.props';
import {colors} from '../../../app/theme';
import {Pressable} from 'react-native';

export function Button(props: ButtonProps) {
  // grab the props
  const {
    title = 'Button',
    titleStyle,
    buttonStyle,
    type = 'solid',
    loading = false,
    loadingStyle,
    loadingProps,
    containerStyle,
    icon, //<Icon name="react" size={15} color="#0FF" />
    iconContainerStyle,
    iconRight = false,
    linearGradientProps,
    disabled = false,
    disabledStyle,
    disabledTitleStyle,
    raised = false,
    iconPosition,
    onPress,
    onLongPress,
    accessibilityLabel,
    ...rest
  } = props;

  const [TITLE_STYLE] = useState(() => {
    switch (props.type || 'solid') {
      case 'solid':
        return TITLE_STYLE_SOLID;
      case 'outline':
        return TITLE_STYLE_OUTLINE;
      case 'clear':
        return TITLE_STYLE_CLEAR;
      default:
        return TITLE_STYLE_SOLID;
    }
  });

  const [BUTTON_STYLE] = useState(() => {
    switch (props.type || 'solid') {
      case 'solid':
        return BUTTON_STYLE_SOLID_ENABLE;
      case 'outline':
        return BUTTON_STYLE_OUTLINE_ENABLE;
      case 'clear':
        return {};
      default:
        return BUTTON_STYLE_SOLID_ENABLE;
    }
  });

  const [DISABLE_STYLE_FILTER] = useState(() => {
    switch (props.type || 'solid') {
      case 'solid':
        return DISABLED_STYLE;
      case 'outline':
        return DISABLED_OUTLINE_STYLE;
      case 'clear':
        return {};
      default:
        return DISABLED_STYLE;
    }
  });
  const [DISABLE_TITLESTYLE_FILTER] = useState(() => {
    switch (props.type || 'solid') {
      case 'solid':
        return DISABLED_TITLE_STYLE;
      case 'outline':
        return DISABLED_TITLE_OUTLINE__STYLE;
      case 'clear':
        return {};
      default:
        return DISABLED_TITLE_STYLE;
    }
  });
  const [LOADING_STYLE] = useState(() => {
    switch (props.type || 'solid') {
      case 'solid':
        return LOADING_STYLE_SOLID;
      case 'outline':
        return LOADING_STYLE_OUTLINE;
      case 'clear':
        return LOADING_STYLE_CLEAR;
      default:
        return LOADING_STYLE_SOLID;
    }
  });

  function getLoaderColor() {
    if (loadingProps) {
    }
    switch (props.type || 'solid') {
      case 'solid':
        return colors.background;
      case 'outline':
        return colors.buttonOutlineBorder;
      case 'clear':
        return colors.buttonPrimary;
      default:
        return colors.background;
    }
  }

  const _titleStyle = [TITLE_STYLE, titleStyle];
  const _buttonStyle = [BUTTON_STYLE, buttonStyle];
  const _loadingStyle = [LOADING_STYLE, loadingStyle];

  const _containerStyle = [CONTAINER_STYLE, containerStyle];
  const _iconContainerStyle = [ICON_CONTAINER_STYLE, iconContainerStyle];

  const _disabledStyle = [DISABLE_STYLE_FILTER, disabledStyle];
  const _disabledTitleStyle = [DISABLE_TITLESTYLE_FILTER, disabledTitleStyle];

  return (
    <ButtonElement
      accessible={true}
      accessibilityLabel={props.accessibilityLabel}
      title={title}
      titleStyle={_titleStyle}
      // titleProps={_titleProps}
      buttonStyle={_buttonStyle}
      type={type}
      loading={loading}
      loadingStyle={_loadingStyle}
      loadingProps={{
        animating: true,
        color: getLoaderColor(),
      }}
      containerStyle={_containerStyle}
      icon={icon}
      onPress={onPress}
      onLongPress={onLongPress}
      iconContainerStyle={_iconContainerStyle}
      iconRight={iconRight}
      linearGradientProps={linearGradientProps}
      disabled={disabled}
      disabledStyle={_disabledStyle}
      disabledTitleStyle={_disabledTitleStyle}
      raised={raised}
      iconPosition={icon ? iconPosition : 'top'}
      TouchableComponent={touchprops => (
        <Pressable
          style={({pressed}) => [pressed && {opacity: 0.6}]}
          // android_ripple={{color: 'red', radius: -5, borderless: true}}
          {...touchprops}
        />
      )}
      {...rest}
    />
  );
}
