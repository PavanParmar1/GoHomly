import React from 'react';
import {View, SafeAreaView, ScrollView, FlatList, Alert} from 'react-native';
import SimpleToolBar from '../../../.storybook/stories/toolbar-simple/simpleback';
import {AddReservation} from './add-reservation';
import {PropertyView} from './property-view';
import {InputDetails} from './input-details';
import {BookingStatusItem} from './booking-status';
import styles from './styles';
import {Button} from '../../../.storybook/stories/button/button';

const DATA = [
  {
    id: 1,
    title: 'Initial Booking',
  },
  {
    id: 2,
    title: 'Update Booking',
  },
  {
    id: 3,
    title: 'Cancel Booking',
  },
];
export default function BookingDetails({navigation, route}) {
  const renderItem = ({item, index}) => (
    <BookingStatusItem size={DATA.length} item={item} position={index} />
  );
  return (
    <View>
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <SimpleToolBar
            title={route.params.search}
            onBackPress={() => {
              navigation.pop();
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.wrapper}>
            <View style={styles.subContainer}>
              <AddReservation />
              <PropertyView />
              <InputDetails />
              <FlatList
                scrollEnabled={false}
                data={DATA}
                style={styles.flatList}
                renderItem={renderItem}
              />
              <Button
                title={'Arrival Information'}
                onPress={() => Alert.alert('pressed')}
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonStyle}
              />
            </View>
            {/* <Footer /> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}
