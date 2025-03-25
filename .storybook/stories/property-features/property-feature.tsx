import React from 'react';
import {View, Text, FlatList} from 'react-native';
// import {Button} from '@rn-community/button';
import styles from './styles';
import Item from './property-feature-item';
import {Divider} from '@rneui/base-edge';
import {isTablet} from 'react-native-device-info';
import {getWidth} from '../../../app/utils/common';
import {Button} from '../button/button';

const numberOfColumn = isTablet() ? 4 : 2;

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
];

export default function PropertyFeatures(props) {
  function propertyRenderer({item}) {
    return <Item item={item} />;
  }
  function RenderFeatureList() {
    props.onPress(DATA);
  }

  return (
    <View style={[styles.outerContainer, props.containerStyle]}>
      <View style={styles.textAndButtonContainer}>
        <Text style={styles.titleStyle}>Property Features</Text>

        <Button
          title={'See All'}
          type={'clear'}
          titleStyle={styles.seeAllButtonTitle}
          onPress={RenderFeatureList}
        />
      </View>

      <FlatList
        data={DATA}
        renderItem={propertyRenderer}
        scrollEnabled={false}
        numColumns={numberOfColumn}
        style={{marginBottom: '2%'}}
        scrollEnabled={false}
      />
      <Divider
        style={{marginTop: isTablet() ? '3%' : getWidth(12)}}
        color={'#777777'}
      />
    </View>
  );
}
