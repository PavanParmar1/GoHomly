import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {MultipleSelectionProps} from './multiple-selection.props';
import {
  CONTAINER,
  SELECTED_CONTAINER,
  TEXT,
  SELECTED_TEXT,
} from './multiple-selection.presets';
import {isTablet} from 'react-native-device-info';

export default function MultipleSelection(props: MultipleSelectionProps) {
  const [selectionList, setSelectionList] = useState(props.options);

  const selectionHandler = object => {
    let selectedElement = selectionList;

    selectedElement = selectedElement?.map(item => {
      return {
        ...item,
        isSelected: item.id === object.id ? !item.isSelected : item.isSelected,
      };
    });
    setSelectionList([...selectedElement]);
  };
  const RenderList = ({item}) => (
    <View>
      <TouchableOpacity
        style={item.isSelected ? SELECTED_CONTAINER : CONTAINER}
        onPress={() => selectionHandler(item)}>
        <Text style={item.isSelected ? SELECTED_TEXT : TEXT}>
          {item.option}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{marginLeft: isTablet() ? 1 : 0}}>
      <FlatList
        data={selectionList}
        renderItem={RenderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
