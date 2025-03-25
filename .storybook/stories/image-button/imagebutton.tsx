import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from '@rneui/themed';
import {IconButtonProps} from './imagebutton.props';
import {IMAGE_STYLE, CONTAINER_STYLE} from './imagebutton.presets';

export default function ImageButton(props: IconButtonProps) {
  // grab the props
  const {
    source = require('./assets/back.png'),
    style,
    touchOpecity = 0.85,
    PlaceholderContent,
    containerStyle,
    childrenContainerStyle,
    placeholderStyle = {},
    transition = false,
    onPress,
    onLongPress,
    transitionDuration = 0,
    resizeMode = 'contain',
    resizeMethod,
    ...rest
  } = props;

  const _style = [IMAGE_STYLE, style];
  const _containerStyle = [CONTAINER_STYLE, containerStyle];

  return (
    <TouchableOpacity
      style={_containerStyle}
      onPress={onPress}
      activeOpacity={touchOpecity}
      onLongPress={onLongPress}>
      <Image
        source={source}
        style={_style}
        // PlaceholderContent={PlaceholderContent}
        childrenContainerStyle={childrenContainerStyle}
        placeholderStyle={placeholderStyle}
        transition={transition}
        transitionDuration={transitionDuration}
        resizeMethod={resizeMethod}
        resizeMode={resizeMode}
        {...rest}
      />
    </TouchableOpacity>
  );
}
