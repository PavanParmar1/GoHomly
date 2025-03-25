import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {App} from '../../../assets/images/map';
import CompanyCard from '../../../.storybook/stories/company-card/company-card';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {CompanyCardProps} from '../../../.storybook/stories/company-card/company-card.props';
import Modal from 'react-native-modal';
import {styles} from './styles';
import AddNewCard from '../../../.storybook/stories/add-new-card/add-new-card';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';

let cards = [
  {
    cardHolder: 'Jacob Jones',
    cardNumber: ' ****7001',
    isSelected: true,
  },
  {
    cardHolder: 'Jacob Jones',
    cardNumber: ' ****7002',
    isSelected: false,
  },
  {
    cardHolder: 'Jacob Jones',
    cardNumber: ' ****7003',
    isSelected: false,
  },
  {
    cardHolder: 'Jacob Jones',
    cardNumber: ' ****7004',
    isSelected: false,
  },
  {
    cardHolder: 'Jacob Jones',
    cardNumber: ' ****7005',
    isSelected: false,
  },
];
export default function PaymentCards({navigation}: {navigation: any}) {
  const [cardlist, setCardlist] = useState(cards);
  const [isModalVisible, setModalVisible] = useState(false);
  const cardRemoveHandler = (item: CompanyCardProps) => {
    const revisedList = cardlist.filter(data => data.cardNumber !== item);
    setCardlist(revisedList);
  };

  function update(position: number) {
    let newArray = cardlist.map(el =>
      el.cardNumber === cardlist[position].cardNumber
        ? {...el, isSelected: !cardlist[position].isSelected}
        : {...el, isSelected: false},
    );
    // console.log(i);
    setCardlist([...newArray]);
    // console.log(position);
  }

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
      headerRight: () => (
        <TouchableOpacity
          style={styles.navbarHeaderRight}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.navbarImageRight}
            source={require('../../../assets/images/add.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Payment Cards'}</Text>,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        bounces={false}>
        <View style={styles.flatlistView}>
          <FlatList
            scrollEnabled={false}
            data={cardlist}
            renderItem={({item, index}) => (
              <CompanyCard
                cardHolder={item.cardHolder}
                cardNumber={item.cardNumber}
                isSelected={item.isSelected}
                onPressDelete={cardRemoveHandler}
                update={update}
                index={index}
              />
            )}
          />
        </View>
        <Footer />

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
      </ScrollView>
    </View>
  );
}
