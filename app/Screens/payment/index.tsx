import {Divider} from '@rneui/themed-edge';
import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {App} from '../../../assets/images/map';
import AddNewCard from '../../../.storybook/stories/add-new-card/add-new-card';
import CheckBoxComponent from '../../../.storybook/stories/check-box/check-box';
import PayFromCompany from '../../../.storybook/stories/pay-from-company/pay-from-company';
import {styles} from './styles';
import Modal from 'react-native-modal';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {Button} from '../../../.storybook/stories/button/button';

const cardHolders = [
  {cardHolder: 'Jacob Jones', cardNumber: '****7001'},
  {cardHolder: 'Jacob Smith', cardNumber: '****7001'},
  {cardHolder: 'Albert Flores', cardNumber: '****8934'},
  {cardHolder: 'Dianne Russell', cardNumber: '****7584'},
];

export default function Payment({navigation}: {navigation: any}) {
  const [isModalVisible, setModalVisible] = useState(false);
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
      headerTitle: () => <Text style={navbarTitle}>{'Hello,Jean'}</Text>,
    });
  }, [navigation]);
  // const onPressMyBookingItem = v => {
  //   console.log('v >', v);
  //   navigation.navigate('myBookingPropertyDetail');
  // };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'black'}}
      contentContainerStyle={{flexGrow: 1}}
      bounces={false}>
      <View style={styles.outerContainer}>
        <CheckBoxComponent
          right={false}
          iconRight={false}
          checkedIcon="checkbox-outline"
          uncheckedIcon="square-outline"
          size={30}
          iconType="ionicon"
          checkedColor="black"
          uncheckedColor="black"
          title={'Pay From Company'}
          checkedTitle={'Pay From Company'}
          textStyle={styles.checkboxText}
          containerStyle={styles.checkboxContainer}
          // wrapperStyle={{height: 21, width: 21, margin: 0}}
          onPress={() => {}}
        />

        <Divider style={styles.dividerTop} />

        <PayFromCompany
          cardHolders={cardHolders}
          addPress={() => setModalVisible(!isModalVisible)}
        />

        <Button
          accessibilityLabel="Conitinue Payment"
          title={'Continue'}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {
            navigation.push('PaymentSuccess', {type: 1}); //Succese
            // navigation.push('PaymentSuccess', {type: 0}); //Failure
          }}
          buttonStyle={styles.buttonContainer}
        />

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
          style={styles.formModal}>
          <View style={styles.centeredView}>
            <AddNewCard onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
      <Footer />
    </ScrollView>
  );
}
