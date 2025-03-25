import React, {useState} from 'react';
import {Badge} from '@rneui/base';
import {BadgeProps} from './badge.props';
import {
  DEFAULT_CONTAINER,
  PRIMARY_BADGE_STYLE,
  TEXT_STYLE,
  BADGE_CONTAINER,
  MAIN_IMAGE,
  PRIMARY_BADGE_STYLE_WITH_TEXT,
} from './badge.presets';
import {View, Image, TouchableOpacity} from 'react-native';

export default function BadgeComponent(props: BadgeProps) {
  const {
    containerStyle,
    badgeStyle,
    textStyle,
    value,
    status,
    imagePath,
    onPress,
  } = props;
  const [imageStyle] = useState(MAIN_IMAGE);
  const [iconContainerStyle] = useState(BADGE_CONTAINER);
  const [badgeStatus] = useState(() => {
    if (status && status === 'error') {
      return 'primary' as BadgeProps['status'];
    } else if (status && status === 'success') {
      return 'success' as BadgeProps['status'];
    } else if (status && status === 'warning') {
      return 'warning' as BadgeProps['status'];
    } else {
      return 'primary' as BadgeProps['status'];
    }
  });

  const [badgeValue] = useState(() => {
    if (value && value !== '') {
      return value;
    } else {
      return '';
    }
  });

  const clickHandler = () => {
    console.log('inside badge image');
    // onPress();
  };
  function DefaultBadge() {
    return (
      <Badge
        containerStyle={containerStyle || DEFAULT_CONTAINER}
        badgeStyle={badgeStyle || PRIMARY_BADGE_STYLE}
        textProps={{adjustsFontSizeToFit: true}}
        textStyle={textStyle || TEXT_STYLE}
        value={badgeValue || ''}
        status={badgeStatus}
      />
    );
  }
  function BadgeWithText() {
    return (
      <Badge
        containerStyle={[containerStyle || DEFAULT_CONTAINER]}
        badgeStyle={badgeStyle || PRIMARY_BADGE_STYLE_WITH_TEXT}
        textProps={{adjustsFontSizeToFit: true}}
        textStyle={textStyle}
        value={badgeValue || ''}
        status={badgeStatus}
      />
    );
  }

  function BadgeWithImage() {
    // useEffect(() => {
    //   if (imageWidth && imageHeight) {
    //     const imageRadius =
    //       imageHeight >= imageWidth ? imageWidth : imageHeight;
    //     setImageStyle({
    //       ...imageStyle,
    //       width: imageWidth,
    //       height: imageHeight,
    //       borderRadius: imageRadius / 2,
    //     });
    //     setIconContainerStyle({
    //       ...iconContainerStyle,
    //       width: imageWidth,
    //       height: imageHeight,
    //       borderRadius: imageRadius / 2,
    //     });
    //     // console.log(imageRadius);
    //   }
    // }, [imageWidth, imageHeight]);

    return (
      <View style={containerStyle || DEFAULT_CONTAINER}>
        {/* <TouchableOpacity
          onPress={clickHandler}
          style={containerStyle || DEFAULT_CONTAINER}>
          <Image source={imagePath} style={imageStyle || MAIN_IMAGE} />
        </TouchableOpacity> */}
        <View
          style={containerStyle || DEFAULT_CONTAINER}>
          <Image source={imagePath} style={imageStyle || MAIN_IMAGE} />
        </View>
        <Badge
          containerStyle={[iconContainerStyle, {position: 'absolute'}]}
          badgeStyle={badgeStyle || PRIMARY_BADGE_STYLE}
          textProps={{adjustsFontSizeToFit: true}}
          textStyle={textStyle || TEXT_STYLE}
          value={badgeValue || ''}
          // status={badgeStatus}
          // onPress={onPress}
        />
      </View>
    );
  }
  return (
    <>
      {/* {!value && !imageProps && (
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: 4,
            height: 4,
            borderRadius: 2,
          }}></View>
      )} */}
      {!value && !imagePath && <DefaultBadge />}
      {value && !imagePath && <BadgeWithText />}
      {imagePath && <BadgeWithImage />}
    </>
  );
}
