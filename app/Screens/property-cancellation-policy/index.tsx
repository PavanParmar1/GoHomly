import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {App} from '../../../assets/images/map';
import Footer from '../../../.storybook/stories/footer-background/footer';
import styles from './styles';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';

export default function PropertyCancellationPolicy({
  navigation,
}: {
  navigation: any;
}) {
  const terms = [
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
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
      headerTitle: () => (
        <Text style={navbarTitle}>{'Property Cancellation Policy'}</Text>
      ),
      headerShadowVisible: true,
    });
  }, [navigation]);
  // const onPressMyBookingItem = v => {
  //   console.log('v >', v);
  //   navigation.navigate('myBookingPropertyDetail');
  // };

  const policyRenderer = data => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.pagination} />
        <Text style={styles.textStyle}>{data.item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        bounces={false}>
        <View style={styles.flatlistView}>
          <FlatList
            scrollEnabled={false}
            data={terms}
            renderItem={policyRenderer}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
