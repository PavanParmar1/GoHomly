import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {App} from '../../../assets/images/map';
import GuestDetailsForm from '../../../.storybook/stories/guest-details-form/guest-details-form';
import GuestDetails from '../../../.storybook/stories/guest-details/guest-details';
import ImageButton from '../../../.storybook/stories/image-button/imagebutton';
import {styles} from './styles';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/base';
import {colors} from '../../theme';
// import {Button} from '@rn-community/button';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {Button} from '../../../.storybook/stories/button/button';

const currentBooking = [
  {
    name: 'John Williamson',
    email: 'kenzi.lawson@example.com',
    phone: '4852 7852 85',
  },
];

const pastBooking = [
  {
    name: 'Alice Blue +3',
    email: '22/02/2022 to 28-02-2022',
    phone: '**** **** **** 4852 ',
  },
];

export default function ModifyBooking({navigation}: {navigation: any}) {
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
      headerTitle: () => <Text style={navbarTitle}>{'Bookings'}</Text>,
    });
  }, [navigation]);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <>
          <View style={styles.dataContainer}>
            <Text style={styles.heading}>Booking Details</Text>
          </View>
          <FlatList
            data={pastBooking}
            renderItem={item => (
              <GuestDetails
                name={item.item.name}
                email={item.item.email}
                phoneNumber={item.item.phone}
                isButtonVisible={false}
                nameStyle={{fontWeight: '400', color: colors.textSecondary}}
              />
            )}
          />

          <Divider style={styles.divider} />

          <View style={styles.dataContainer1}>
            <Text style={styles.heading}>Guest Details</Text>
            <ImageButton
              source={require('../../../assets/images/add.png')}
              touchOpecity={0.8}
              onPress={() => setModalVisible(true)}
              style={styles.addIcon}
            />
          </View>
          <FlatList
            data={currentBooking}
            renderItem={item => (
              <GuestDetails
                name={item.item.name}
                email={item.item.email}
                phoneNumber={item.item.phone}
              />
            )}
          />

          <Button
            title={'Proceed'}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Payment')}
          />
        </>
      </ScrollView>
      <Modal
        isVisible={isModalVisible}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        propagateSwipe={true}
        style={styles.formModal}>
        <View style={styles.centeredView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <GuestDetailsForm onPress={toggleModal} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
