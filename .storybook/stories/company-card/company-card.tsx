import React from 'react';
import {
  CONTAINER,
  ICON,
  TEXT,
  DELETEICON,
  INNER_CONTAINER,
  IMAGE,
} from './company-card.presets';
import {CompanyCardProps} from './company-card.props';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';

export default function CompanyCard(props: CompanyCardProps) {
  const cardHolder = props.cardHolder || 'Jacob Jones';
  const cardNumber = props.cardNumber || '****7001';
  const Icon = require('../../../assets/images/masterCardWithoutText.png');
  const deleteIcon = require('../../../assets/images/bin.png');
  const RightGreen = require('../../../assets/images/rightGreen.png');
  const onPressDelete = () => {
    props.onPressDelete(cardNumber);
  };
  return (
    <Pressable
      onPress={() => {
        props.update(props.index);
      }}>
      <View style={CONTAINER}>
        <View style={INNER_CONTAINER}>
          <Image source={Icon} style={ICON} />
          <Text style={TEXT}>
            {cardHolder}
            {cardNumber}
          </Text>
        </View>
        {props.isSelected ? (
          <Image source={RightGreen} style={IMAGE} />
        ) : (
          <TouchableOpacity onPress={onPressDelete}>
            <Image source={deleteIcon} style={DELETEICON} />
          </TouchableOpacity>
        )}
      </View>
    </Pressable>
  );
}
