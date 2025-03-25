import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {windowWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

export default function Item({item, index}) {
  const marginleft = isTablet()
    ? (52 * windowWidth) / 834
    : (32 * windowWidth) / 375;

  return (
    <View
      style={[
        styles.itemContainer,
        index > 0
          ? {marginLeft: marginleft, marginRight: marginleft}
          : {marginRight: marginleft},
      ]}>
      <View>
        <Text style={styles.itemTextContainer}>{item.title}</Text>
        <Text style={styles.itemTextContainer1}>{item.desc}</Text>
      </View>
    </View>
  );
}
