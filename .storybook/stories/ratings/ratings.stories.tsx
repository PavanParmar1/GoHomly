import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Story, UseCase} from '../../../.storybook/views';
import Ratings from './ratings';
import {colors} from '../../../app/theme';
// import {View, StyleSheet, Alert, Text} from 'react-native';
import {windowWidth} from '../../../app/utils/common';
import {withKnobs} from '@storybook/addon-knobs';

const starImage = require('../../../assets/images/startpsd.png');

export const defaultProps = {
  ratingImage: 'star',
  ratingColor: '#FFA91C',
  // ratingBackgroundColor: 'yellow',
  tintColor: '#ddd',
  // ratingCount: 5,
  ratingTextColor: colors.textPrimary,
  imageSize: (windowWidth / 100) * 7,
  showRating: false,
  readonly: true,
  startingValue: 3,
  fractions: 2,
  minValue: 0,
  style: {backgroundColor: 'white'},
  jumpValue: 0.1,

  type: {
    options: ['star', 'rocket', 'bell', 'heart', 'custom'],
    control: {type: 'radio'},
  },
};

export const type = 'star';
export const ratingCount = 'Type Here';

storiesOf('Ratings', module)
  .addDecorator(withKnobs)
  .add('Default Rating', () => (
    <Story>
      <UseCase
        text="default ratings"
        usage="All editable types of basic ratings ">
        <Ratings
          type="star"
          ratingColor={'red'}
          readonly={true}
          ratingCount={5}
        />
        <Ratings type="bell" readonly={false} ratingCount={6} />
        <Ratings type="heart" ratingCount={7} />
        <Ratings type="rocket" ratingCount={10} />
      </UseCase>
    </Story>
  ))
  .add('general', () => (
    <Story>
      <UseCase
        text="ratings with and without text"
        usage="All editable types of basic ratings ">
        <Ratings type="star" jumpValue={0.5} ratingCount={5} />
        <Ratings type="bell" ratingCount={5} showRating={false} />
        <Ratings type="heart" showRating={false} ratingCount={5} />
        <Ratings type="rocket" ratingCount={5} />
      </UseCase>
    </Story>
  ))
  .add('custom ratings', () => (
    <Story>
      <UseCase
        text="ratings with and without text"
        usage="All editable types of basic ratings ">
        <Ratings
          type="custom"
          ratingImage={starImage}
          jumpValue={0.5}
          ratingCount={5}
          ratingColor="green"
          ratingBackgroundColor="#ceee"
          tintColor="#e1e1e1"
        />
      </UseCase>
      <UseCase
        text="ratings with and without text"
        usage="All editable types of basic ratings ">
        <Ratings
          type="custom"
          name="complete"
          ratingImage={starImage}
          ratingColor="#FFA91C"
          // jumpValue={0.5}
          // ratingCount={5}
          startingValue={6}
          readonly={true}
          // ratingColor="green"
          tintColor="#FBFBFB"
          showReadOnlyText={false}
          showRating={false}
          style={{margin: '1%', padding: '1%'}}
          ratingBackgroundColor="#FBFBFB"
          // rightText="4.5"
          leftText={'4.5'}
          imageSize={22}
        />
      </UseCase>
      <UseCase
        text="single star of 11px with text in right"
        usage="All editable types of basic ratings ">
        <Ratings
          type="custom"
          name="complete"
          containerStyle={{backgroundColor: 'transparent', width: '50%'}}
          ratingImage={starImage}
          ratingCount={1}
          ratingColor="#FFA91C"
          // startingValue={4}
          readonly={true}
          tintColor="#FBFBFB"
          showReadOnlyText={false}
          showRating={false}
          style={{margin: '1%', padding: '1%'}}
          ratingBackgroundColor="#FBFBFB"
          rightText={`4.5 (25 reviews)`}
          // leftText="4.5"
          imageSize={12}
        />
      </UseCase>
      <UseCase
        text="single star of 11px with text in right "
        usage="white color ">
        <Ratings
          type="custom"
          name="badge"
          containerStyle={{
            width: (windowWidth / 100) * 13.5,
            backgroundColor: colors.secondary,
            borderRadius: 6,
          }}
          ratingImage={starImage}
          ratingCount={1}
          // startingValue={4.5}
          readonly={true}
          tintColor={colors.secondary}
          ratingColor="#FFFFFF"
          showReadOnlyText={false}
          showRating={false}
          style={{margin: '1%', paddingRight: '11%'}}
          ratingBackgroundColor={colors.secondary}
          rightText={`4.5`}
          // leftText="4.5"
          imageSize={10}
        />
      </UseCase>
    </Story>
  ));
