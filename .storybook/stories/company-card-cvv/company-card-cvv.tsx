import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  CONTAINER,
  ICON,
  IMAGE,
  LABEL,
  INNER_CONTAINER_MEDIUM,
  INNER_CONTAINER_TOP,
  TEXT,
  CARD_HOLDER,
  CVV_INPUT,
  INPUT_OUTER_CONTAINER,
  INPUT_INNER_CONTAINER,
} from './company-card-cvv.presets';
import {CompanyCardCvvProps} from './company-card-cvv.props';
import { TextField } from '../TextField';

const Icon = require('../../../assets/images/masterCardWithoutText.png');
const RightGreen = require('../../../assets/images/rightGreen.png');
export default function CompanyCardCvv(props: CompanyCardCvvProps) {
  const cardHolder = props.cardHolder;
  const cardNumber = props.cardNumber;
  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER_TOP}>
        <Image source={Icon} style={ICON} />
        <Text style={TEXT}>{cardNumber}</Text>
      </View>
      <View style={INNER_CONTAINER_MEDIUM}>
        <Text style={CARD_HOLDER}> {cardHolder}</Text>
        <Image source={RightGreen} style={IMAGE} />
      </View>
      <TextField
        label=" "
        labelStyle={LABEL}
        placeholder="Enter cvv"
        containerStyle={INPUT_OUTER_CONTAINER}
        inputContainerStyle={INPUT_INNER_CONTAINER}
        keyboardType="numeric"
        inputStyle={CVV_INPUT}
        maxLength={3}
        placeholderTextColor={'#777777'}
      />
    </View>
  );
}
