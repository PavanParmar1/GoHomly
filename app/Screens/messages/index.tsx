import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {App} from '../../../assets/images/map';
import ContactUs from '../../../.storybook/stories/contact-us/contact-us';
import {styles} from './styles';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';

export default function Messages({navigation}: {navigation: any}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.goBack()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Contact Us'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <ContactUs />
      </ScrollView>
    </View>
  );
}
