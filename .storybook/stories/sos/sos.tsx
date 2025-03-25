import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {
  BUTTON_TEXT,
  CONTAINER,
  HEADER,
  IMAGE,
  INNER_CONTAINER,
} from './sos.presets';
import {Divider} from '@rneui/base-edge';
import {SosProps} from './sos.props';

const Sos = (props: SosProps) => {
  const renderItem = ({item, index}: any) => {
    return (
      <>
        {/* <Text>{JSON.stringify(item)}</Text> */}
        <TouchableOpacity
          style={INNER_CONTAINER}
          onPress={() => props.numPress(item.number, index)}>
          <Image
            style={IMAGE}
            source={require('../../../assets/images/phone_img.png')}
            resizeMode="contain"
          />
          <Text style={BUTTON_TEXT}>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={CONTAINER}>
      <Text style={HEADER}>Emergency Numbers</Text>
      <Divider color="lightgray" />

      <FlatList
        data={props?.data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider color="lightgray" />}
      />
    </View>
  );
};

export default Sos;
