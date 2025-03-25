import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

export default function Item({item}) {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.icon} style={styles.iconStyle} />
      <Text style={styles.itemTextContainer} numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  );
}
