import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
// import {Button} from '@rn-community/button';
import styles from './styles';
import Item from './property-details-item';
import {Divider} from '@rneui/base-edge';
import {Button} from '../button/button';

const DATA = [
  {
    id: 1,
    title: 'Area',
    desc: '2000 Sq.Fit',
  },
  {
    id: 2,
    title: 'Wifi Password',
    desc: '12345678',
  },
  {
    id: 3,
    title: 'Name',
    desc: 'ABC',
  },
  {
    id: 4,
    title: 'Year',
    desc: '2010',
  },
  {
    id: 5,
    title: 'Garage',
    desc: '2',
  },
  {
    id: 6,
    title: 'Full name',
    desc: 'Manchester Park',
  },
];

export default function PropertyDetails(props) {
  function propertyRenderer({item, index}) {
    return index === 1 ? (
      <TouchableOpacity onLongPress={props.wifiPress}>
        <Item item={item} index={index} />
      </TouchableOpacity>
    ) : (
      <Item item={item} index={index} />
    );
  }

  return (
    <View style={[styles.outerContainer, props.containerStyle]}>
      <View style={styles.textAndButtonContainer}>
        <Text style={styles.titleStyle}>Property Details</Text>

        <Button
          title={'See All'}
          type={'clear'}
          titleStyle={styles.seeAllButtonTitle}
          onPress={props.onSeeAllPress}
        />
      </View>

      <FlatList
        data={DATA}
        style={styles.flatList}
        renderItem={propertyRenderer}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider orientation={'vertical'} />}
      />
      <Divider style={styles.divider} />
    </View>
  );
}
