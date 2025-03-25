import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import LanguageItem from './languageItem';
import { Divider } from '@rneui/base';

interface DropdownProps {
  data?: [];
  type?: any;
  initialSelectedLanguageId?: any;
  onPress?: (value: any, LanguageName: any) => void;
}

const DropdownMenu = (props: DropdownProps) => {
  const [selectedLanguageId, setSelectedLanguageId] = useState(null);

  useEffect(() => {
    if (props.initialSelectedLanguageId !== undefined) {
      setSelectedLanguageId(props.initialSelectedLanguageId);
    }
  }, [props.initialSelectedLanguageId]);

  const renderItemComponent = ({item}: any) => {
    return props.type === '1' ? (
      <LanguageItem
        item={item}
        isSelected={item.Id === selectedLanguageId}
        onPress={(id, name) => {
          setSelectedLanguageId(id);
          props.onPress && props.onPress(id, name);
        }}
      />
    ) : (
      <Text>No Item</Text>
    );
  };

  return <FlatList data={props.data} renderItem={renderItemComponent} ItemSeparatorComponent={() => <Divider style={{marginLeft: '5%'}} />}/>;
};

export default DropdownMenu;
