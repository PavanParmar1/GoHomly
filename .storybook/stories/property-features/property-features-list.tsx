import {Divider} from '@rneui/themed';
import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {isTablet} from 'react-native-device-info';
import styles from './styles';

const DATA = [
  {
    id: 1,
    title: 'Hot Tub',
    icon: require('../../../assets/images/feat_hottub.png'),
  },
  {
    id: 2,
    title: 'Pets (Allowed)',
    icon: require('../../../assets/images/feat_pets.png'),
  },
  {
    id: 3,
    title: 'Kitchen',
    icon: require('../../../assets/images/feat_kitchen.png'),
  },
  {
    id: 4,
    title: 'Cleaning',
    icon: require('../../../assets/images/feat_cleaning.png'),
  },
  {
    id: 5,
    title: 'WiFi',
    icon: require('../../../assets/images/feat_wifi.png'),
  },
  {
    id: 6,
    title: 'Spa',
    icon: require('../../../assets/images/feat_spa.png'),
  },
  {
    id: 111,
    title: 'Hot Tub',
    icon: require('../../../assets/images/feat_hottub.png'),
  },
  {
    id: 21,
    title: 'Pets (Allowed)',
    icon: require('../../../assets/images/feat_pets.png'),
  },
  {
    id: 31,
    title: 'Kitchen',
    icon: require('../../../assets/images/feat_kitchen.png'),
  },
  {
    id: 41,
    title: 'Cleaning',
    icon: require('../../../assets/images/feat_cleaning.png'),
  },
  {
    id: 51,
    title: 'WiFi',
    icon: require('../../../assets/images/feat_wifi.png'),
  },
  {
    id: 61,
    title: 'Spa',
    icon: require('../../../assets/images/feat_spa.png'),
  },
  {
    id: 11,
    title: 'Hot Tub',
    icon: require('../../../assets/images/feat_hottub.png'),
  },
  {
    id: 12,
    title: 'Pets (Allowed)',
    icon: require('../../../assets/images/feat_pets.png'),
  },
  {
    id: 13,
    title: 'Kitchen',
    icon: require('../../../assets/images/feat_kitchen.png'),
  },
  {
    id: 14,
    title: 'Cleaning',
    icon: require('../../../assets/images/feat_cleaning.png'),
  },
  {
    id: 15,
    title: 'WiFi',
    icon: require('../../../assets/images/feat_wifi.png'),
  },
  {
    id: 16,
    title: 'Spa',
    icon: require('../../../assets/images/feat_spa.png'),
  },
];

const RenderData = ({item}) => {
  return (
    <View style={styles.featuresListView}>
      <Image source={item.icon} style={styles.iconStyle} />
      <Text style={styles.itemTextContainer}>{item.title}</Text>
    </View>
  );
};
export default function PropertyFeaturesList() {
  return (
    <View style={styles.listContainer}>
      <Divider width={3} insetType="middle" style={styles.divider} />
      <FlatList
        data={DATA}
        renderItem={RenderData}
        numColumns={isTablet() ? 3 : 2}
      />
    </View>
  );
}
