import React, {useState} from 'react';
import {Text} from '@rneui/base-edge';
import {FlatList, View} from 'react-native';
import CompanyCard from '../company-card/company-card';
import {
  CONTAINER,
  HEADING_CONTAINER,
  HEADING,
  BUTTON,
  BUTTON_CONTAINER,
} from './pay-from-company.presets';
import {PayFromCompanyProps} from './pay-from-company.props';
import CompanyCardCvv from '../company-card-cvv/company-card-cvv';
import ImageButton from '../image-button/imagebutton';
import Modal from 'react-native-modal';
import RemoveCleaningFees from '../remove-cleaning-fees/remove-cleaning-fees';
import {isTablet} from 'react-native-device-info';
import {getWidth} from '../../../app/utils/common';

const cardHolder = 'Savannah Nguyen';
// const cardNumber = '**** **** **** 7548';
const cardHolders = [
  {cardHolder: 'Jacob Jones', cardNumber: ' **** 7001', isSelected: true},
  {cardHolder: 'Jacob Smith', cardNumber: ' **** 7003', isSelected: false},
  {cardHolder: 'Albert Flores', cardNumber: ' **** 8934', isSelected: false},
  {cardHolder: 'Dianne Russell', cardNumber: ' **** 7584', isSelected: false},
];
export default function PayFromCompany(props: PayFromCompanyProps) {
  const [cards, setCards] = useState(cardHolders);
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const cardRemoveHandler = (item: CompanyCardProps) => {
    setModalVisible(true);
    setCardNumber(item);
    // console.log('hiii', item);
    // const revisedList = cards.filter(data => data.cardNumber !== item);
    // setCards(revisedList);
  };

  function update(position: number) {
    let newArray = cards.map(el =>
      el.cardNumber === cards[position].cardNumber
        ? {...el, isSelected: !cards[position].isSelected}
        : {...el, isSelected: false},
    );
    // console.log(i);
    setCards([...newArray]);
    // console.log(position);
  }

  const renderItem = ({item, index}) => {
    console.log(item);
    return item.isSelected === true ? (
      <CompanyCardCvv cardHolder={cardHolder} cardNumber={cardNumber} />
    ) : (
      <CompanyCard
        cardHolder={item.cardHolder}
        cardNumber={item.cardNumber}
        index={index}
        isSelected={item.isSelected}
        onPressDelete={cardRemoveHandler}
        update={update}
      />
    );
  };

  return (
    <View style={CONTAINER}>
      <View style={HEADING_CONTAINER}>
        <Text style={HEADING}>Pay with</Text>
        <ImageButton
          source={require('../../../assets/images/add.png')}
          touchOpecity={0.8}
          onPress={props.addPress}
          style={BUTTON}
          containerStyle={BUTTON_CONTAINER}
        />
      </View>
      <FlatList
      scrollEnabled={false}
        data={cards}
        renderItem={renderItem}
        keyExtractor={item => item.cardHolder}
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
        style={{
          alignItems: 'center',
        }}>
        <View>
          <RemoveCleaningFees
            heading={
              isTablet()
                ? 'Are you sure you want to remove this card ?'
                : 'Are you sure you want to remove this card ?'
            }
            divider={false}
            text={''}
            container={{
              borderRadius: getWidth(15),
              paddingBottom: getWidth(25),
            }}
            headingStyle={{marginTop: getWidth(15)}}
            textStyle={{marginTop: getWidth(18)}}
            onPress={() => {
              setModalVisible(!isModalVisible);
              const revisedList = cards.filter(
                data => data.cardNumber !== cardNumber,
              );
              setCards(revisedList);
            }}
            onPress1={() => setModalVisible(!isModalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
}
