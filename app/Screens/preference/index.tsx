import React from 'react';
import {Text, TouchableOpacity, Image, View, FlatList} from 'react-native';
import {App} from '../../../assets/images/map';
import {styles} from './styles';
import Preference from '../../../.storybook/stories/preference/preference';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';

export default function PreferenceScreen({navigation}: {navigation: any}) {
  const preferData = [
    {
      prefernce: 'Distance',
      measurementFirst: 'Miles',
      measurementSecond: 'KM',
    },
    {
      prefernce: 'Property Area ',
      measurementFirst: 'Sq.Ft',
      measurementSecond: 'Sq.Mt',
    },
    {
      prefernce: 'Phone Number',
      measurementFirst: 'Mobile',
      measurementSecond: 'Landline',
    },
  ];
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Preference'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.flatlistView}>
          <FlatList
            data={preferData}
            renderItem={item => (
              <Preference
                preferedOption={item.item.prefernce}
                unitFirst={item.item.measurementFirst}
                unitSecond={item.item.measurementSecond}
              />
            )}
          />
        </View>
        <Footer />
      </View>
    </View>
  );
}
