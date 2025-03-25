import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GuestBookItemProps} from './guest-book.props';

import {
  QUERY_CONTAINER,
  QUESTION_CONTAIINER,
  QUESTION,
  ICON,
  ANSWER,
} from './guest-book.presets';
const CaretUp = require('../../../assets/images/Caretup.png');
const CaretDown = require('../../../assets/images/Caretdown.png');

export function GuestBookItem({data, onPress}: GuestBookItemProps) {
  const DATA = data.item;
  return (
    <View style={QUERY_CONTAINER}>
      <TouchableOpacity onPress={() => onPress(DATA.id)} style={{flex: 1}}>
        <>
          <View style={QUESTION_CONTAIINER}>
            <Text style={QUESTION}>{DATA.question}</Text>
            <Image
              source={DATA.isExpanded ? CaretUp : CaretDown}
              style={ICON}
            />
          </View>
          {DATA.isExpanded && <Text style={ANSWER}>{DATA.answer}</Text>}
        </>
      </TouchableOpacity>
    </View>
  );
}
