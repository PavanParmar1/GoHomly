import React, {useState} from 'react';
import {Divider} from '@rneui/themed-edge';
import {Image, KeyboardAvoidingView, View, Text, Alert} from 'react-native';
import {
  CONTAINER,
  INNER_CONTAINER,
  DATE_CONTAINER,
  DIVIDER,
  BUTTON_STYLE,
  BUTTON_TITLE,
  CVV_CONTAINER,
  CARD,
  ICON,
  HEADER,
  INPUT,
  DATE_HEADER,
  HEADER_CONTAINER,
  INPUT_FIELD_LARGE,
  INPUT_FIELD_SMALL,
  MONTH,
  INPUT_FIELD_INNER_CONTAINER,
  YEAR,
} from './add-new-card.presets';
import {Button} from '../button/button';
import {isTablet} from 'react-native-device-info';
import { TextField } from '../TextField';

export default function AddNewCard(props: any) {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardsecurity, setCardSecurity] = useState('');

  const Card = require('../../../assets/images/Card.png');
  const masterCard = require('../../../assets/images/masterCard.png');
  const securityCode = require('../../../assets/images/securityCode.png');

  function validation() {
    var regEx = /^[0-9]{16}$/;
    if (cardName.length === 0) {
      Alert.alert('Please enter card holder name.');
      return false;
    } else if (cardNumber.length === 0) {
      Alert.alert('Please enter a card number.');
      return false;
    } else if (cardMonth.length === 0) {
      Alert.alert('Please enter month.');
      return false;
    } else if (cardYear.length === 0) {
      Alert.alert('Please enter year.');
      return false;
    } else if (cardsecurity.length === 0) {
      Alert.alert('Please enter card cvv number.');
      return false;
    } else if (!cardNumber.match(regEx)) {
      Alert.alert('Please enter a valid credit/debit card number.');
      return false;
    } else if (parseInt(cardMonth) > 12) {
      Alert.alert('Please enter a valid month.');
      return false;
    } else if (parseInt(cardYear) < 2022 || parseInt(cardYear) > 2100) {
      Alert.alert('Please enter a valid year.');
      return false;
    } else {
      return true;
    }
  }
  return (
    <KeyboardAvoidingView>
      <View style={CONTAINER}>
        <View>
          <Divider width={4} insetType="middle" style={DIVIDER} />
        </View>
        <View style={INNER_CONTAINER}>
          <View style={HEADER_CONTAINER}>
            <Image source={Card} style={CARD} />
            <Text style={HEADER}>Add Credit / Debit Card</Text>
          </View>
          <View>
            <TextField
              containerStyle={INPUT_FIELD_LARGE}
              inputContainerStyle={INPUT_FIELD_INNER_CONTAINER}
              label=" "
              value={cardName}
              onChangeText={val => setCardName(val)}
              placeholder="Card Holder’s Name"
              keyboardType="default"
              autoCapitalize={'characters'}
              inputStyle={INPUT}
            />
            <TextField
              containerStyle={INPUT_FIELD_LARGE}
              inputContainerStyle={INPUT_FIELD_INNER_CONTAINER}
              label=" "
              placeholder="Card Number"
              keyboardType="numeric"
              value={cardNumber}
              maxLength={16}
              onChangeText={val => setCardNumber(val)}
              rightIcon={<Image source={masterCard} style={ICON} />}
              inputStyle={INPUT}
            />
          </View>
          <View style={HEADER_CONTAINER}>
            <Text style={DATE_HEADER}>Expire Date</Text>
          </View>
          <View style={DATE_CONTAINER}>
            <View style={MONTH}>
              {/* <Button
                title={'Month'}
                type={'outline'}
                onPress={() => Alert.alert('pressed')}
                buttonStyle={DATE_BUTTON_STYLE}
                titleStyle={DATE_BUTTON_TITLE}
              /> */}
              <TextField
                containerStyle={INPUT_FIELD_LARGE}
                inputContainerStyle={INPUT_FIELD_INNER_CONTAINER}
                label=" "
                value={cardMonth}
                onChangeText={val => setCardMonth(val)}
                placeholder="Month"
                maxLength={2}
                keyboardType="numeric"
                autoCapitalize={'characters'}
                inputStyle={[INPUT, {marginLeft: isTablet() ? '4%' : '4%'}]}
              />
            </View>
            <View style={YEAR}>
              {/* <Button
                title={'Year'}
                type={'outline'}
                onPress={() => Alert.alert('pressed')}
                buttonStyle={DATE_BUTTON_STYLE}
                titleStyle={DATE_BUTTON_TITLE}
              /> */}
              <TextField
                containerStyle={INPUT_FIELD_LARGE}
                inputContainerStyle={INPUT_FIELD_INNER_CONTAINER}
                label=" "
                maxLength={4}
                value={cardYear}
                onChangeText={val => setCardYear(val)}
                placeholder="Year"
                keyboardType="numeric"
                autoCapitalize={'characters'}
                inputStyle={[INPUT, {marginLeft: isTablet() ? '4%' : '4%'}]}
              />
            </View>
          </View>
          <View style={CVV_CONTAINER}>
            <TextField
              containerStyle={INPUT_FIELD_SMALL}
              inputContainerStyle={INPUT_FIELD_INNER_CONTAINER}
              label=" "
              value={cardsecurity}
              onChangeText={val => setCardSecurity(val)}
              placeholder="Security Code"
              keyboardType="numeric"
              maxLength={3}
              // eslint-disable-next-line react-native/no-inline-styles
              inputStyle={[INPUT, {marginLeft: isTablet() ? '4%' : '4%'}]}
            />
            <Image source={securityCode} style={ICON} />
          </View>
        </View>
        <Button
          title={'Save My Card'}
          titleStyle={BUTTON_TITLE}
          onPress={() => {
            if (validation()) {
              props.onPress();
            }
          }}
          buttonStyle={BUTTON_STYLE}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
