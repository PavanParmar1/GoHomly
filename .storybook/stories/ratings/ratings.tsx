import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Rating} from 'react-native-ratings';
import {
  Default_Rating,
  LEFT_RATING,
  RIGHT_RATING,
  RATING_TEXT_WITH_BG,
  CONTAINER,
  BADGE_CONTAINER,
} from './ratings.presets';
import {SwipeRatingProps} from './ratings.props';

const W_IMAGE = require('../../../assets/images/startpsd.png');

export default function Ratings(props: SwipeRatingProps) {
  const {
    name,
    type,
    ratingImage,
    ratingColor,
    startingValue,
    ratingBackgroundColor,
    ratingCount,
    readonly,
    imageSize,
    minValue,
    jumpValue,
    showRating,
    style,
    tintColor,
    rightText,
    leftText,
    containerStyle,
    leftTextStyle,
    rightTextStyle,
  } = props;

  const [ratingType, setRatingType] = useState('star');
  const [ratingJump] = useState(() => {
    if (jumpValue !== 0.1) {
      return jumpValue;
    } else {
      return 0.1;
    }
  });
  const [displayRating] = useState(() => {
    if (showRating === false) {
      return showRating;
    } else {
      return true;
    }
  });
  const [ratingImageCount] = useState(() => {
    if (ratingCount) {
      return ratingCount;
    } else {
      return 5;
    }
  });
  const [ratingFillColor] = useState(() => {
    if (ratingColor !== '#f1c40f') {
      return ratingColor;
    } else {
      return '#f1c40f';
    }
  });
  const [readOnly] = useState(() => {
    if (readonly === true) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    switch (type) {
      case 'bell':
        setRatingType('bell');
        break;
      case 'heart':
        setRatingType('heart');
        break;
      case 'rocket':
        setRatingType('rocket');
        break;
      case 'custom':
        setRatingType('custom');
        break;
      default:
        setRatingType('star');
    }
  }, [type]);

  function ratingCompleted(rating: number) {
    // console.log('Rating is: ' + rating);
    props.onFinishRating(rating);
  }
  const _containerStyle = [CONTAINER, containerStyle];
  const _badgeContainer = [BADGE_CONTAINER, containerStyle];
  function DefaultRating() {
    return (
      <Rating
        jumpValue={ratingJump}
        onFinishRating={ratingCompleted}
        ratingColor={ratingColor || ratingFillColor} //only work with custom type
        imageSize={imageSize || Default_Rating.imageSize}
        type={ratingType}
        ratingImage={ratingImage || W_IMAGE} // custom image
        ratingBackgroundColor={
          ratingBackgroundColor || Default_Rating.tintColor
        } //use with custom image
        tintColor={tintColor || Default_Rating.tintColor} //background of rating icon
        ratingCount={ratingImageCount} //number of rating images to display
        ratingTextColor={Default_Rating.ratingTextColor}
        showRating={displayRating}
        readonly={readOnly}
        startingValue={startingValue || Default_Rating.startingValue}
        fractions={Default_Rating.fractions}
        minValue={minValue || Default_Rating.minValue}
        style={style || Default_Rating.style}
      />
    );
  }
  function RatingWithText() {
    return (
      <View style={_containerStyle}>
        <Text style={leftTextStyle || LEFT_RATING}>{leftText}</Text>
        <Rating
          jumpValue={ratingJump}
          onFinishRating={ratingCompleted}
          ratingColor={ratingColor || ratingFillColor} //only work with custom type
          imageSize={imageSize || Default_Rating.imageSize}
          type={ratingType}
          ratingImage={ratingImage || W_IMAGE} // custom image
          ratingBackgroundColor={
            ratingBackgroundColor || Default_Rating.tintColor
          } //use with custom image
          tintColor={tintColor || Default_Rating.tintColor} //background of rating icon
          ratingCount={ratingImageCount} //number of rating images to display
          ratingTextColor={Default_Rating.ratingTextColor}
          showRating={displayRating}
          readonly={readOnly}
          startingValue={startingValue || Default_Rating.startingValue}
          fractions={Default_Rating.fractions}
          minValue={minValue || Default_Rating.minValue}
          style={style || Default_Rating.style}
        />
        <Text style={rightTextStyle || RIGHT_RATING}>{rightText}</Text>
      </View>
    );
  }
  function RatingFullSize() {
    return (
      <View style={_badgeContainer}>
        <Text style={leftTextStyle || LEFT_RATING}>{leftText}</Text>
        <Rating
          jumpValue={ratingJump}
          onFinishRating={ratingCompleted}
          ratingColor={ratingColor || ratingFillColor} //only work with custom type
          imageSize={imageSize || Default_Rating.imageSize}
          type={ratingType}
          ratingImage={ratingImage || W_IMAGE} // custom image
          ratingBackgroundColor={
            ratingBackgroundColor || Default_Rating.tintColor
          } //use with custom image
          tintColor={tintColor || Default_Rating.tintColor} //background of rating icon
          ratingCount={ratingImageCount} //number of rating images to display
          ratingTextColor={Default_Rating.ratingTextColor}
          showRating={displayRating}
          readonly={readOnly}
          startingValue={startingValue || Default_Rating.startingValue}
          fractions={Default_Rating.fractions}
          minValue={minValue || Default_Rating.minValue}
          style={style || Default_Rating.style}
        />
        <Text style={RATING_TEXT_WITH_BG}>{rightText}</Text>
      </View>
    );
  }
  return (
    <>
      {!name && <DefaultRating />}
      {name === 'complete' && <RatingWithText />}
      {name === 'badge' && <RatingFullSize />}
    </>
  );
}
