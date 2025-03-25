import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {styles} from './styles';
import Modal from 'react-native-modal';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import RangeSlider from '../../../../.storybook/stories/range-slider/range-slider';
import {Button} from '../../../../.storybook/stories/button/button';
import PropertyFacilities from '../../../../.storybook/stories/property-facilities/property-facilities';
import {RoomCounter} from '../../../../.storybook/stories/room-selection/room-counter';
import MultipleSelection from '../../../../.storybook/stories/multiple-selection/multiple-selection';
import {Rating} from 'react-native-ratings';
import {isTablet} from 'react-native-device-info';
import DatePicker from 'react-native-neat-date-picker';
import {
  colorOptions,
  Font12,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../utils/common';
import {colors} from '../../../theme';

// const calendar = require('../../../../assets/images/ic_calendar.png');
const starImage = require('../../../../assets/images/startpsd.png');
const resetImage = require('../../../../assets/images/reset.png');

// const sortOptions = [
//   {
//     id: 0,
//     title: 'Nearest High',
//   },
//   {
//     id: 1,
//     title: 'Nearest Low',
//   },
//   {
//     id: 2,
//     title: 'Price High',
//   },
//   {
//     id: 3,
//     title: 'Price Low',
//   },
//   {
//     id: 4,
//     title: 'Rating High',
//   },
//   {
//     id: 4,
//     title: 'Rating Low',
//   },
// ];

// const pastBookings = [
//   {
//     id: 0,
//     propertyImage: pastBookingImg,
//     bedroomCount: 2,
//     bathroomCount: 3,
//     area: 1000,
//     perNightCost: '£1578',
//     address: '2118 Thornridge Cir. Syracua, AB4 7LE',
//   },
//   {
//     id: 1,
//     propertyImage: pastBookingImg1,
//     bedroomCount: 2,
//     bathroomCount: 3,
//     area: 1000,
//     perNightCost: '£1578',
//     address: '2118 Thornridge Cir. Syracua, AB4 7LE',
//   },
//   {
//     id: 2,
//     propertyImage: pastBookingImg2,
//     bedroomCount: 2,
//     bathroomCount: 3,
//     area: 1000,
//     perNightCost: '£1578',
//     address: '2118 Thornridge Cir. Syracua, AB4 7LE',
//   },
//   {
//     id: 3,
//     propertyImage: pastBookingImg3,
//     bedroomCount: 2,
//     bathroomCount: 3,
//     area: 1000,
//     perNightCost: '£1578',
//     address: '2118 Thornridge Cir. Syracua, AB4 7LE',
//   },
// ];
const propertyType = [
  {
    id: 1,
    option: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    option: 'Studio',
    isSelected: false,
  },
  {
    id: 3,
    option: 'House',
    isSelected: false,
  },
  {
    id: 4,
    option: 'Motel',
    isSelected: false,
  },
  {
    id: 5,
    option: 'Apartment',
    isSelected: false,
  },
];

const priceRange = [
  {
    id: 1,
    option: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    option: 'Monthly',
    isSelected: false,
  },
  {
    id: 3,
    option: 'Per Night',
    isSelected: false,
  },
  {
    id: 4,
    option: 'Per Day',
    isSelected: false,
  },
  {
    id: 5,
    option: 'Annual',
    isSelected: false,
  },
];
const facilities = [
  {
    id: 1,
    label: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    label: 'Wifi',
    isSelected: false,
  },
  {
    id: 3,
    label: 'Self Check-in',
    isSelected: false,
  },
  {
    id: 4,
    label: 'Kitchen',
    isSelected: false,
  },
  {
    id: 5,
    label: 'Security',
    isSelected: false,
  },
  {
    id: 6,
    label: 'Free Parking',
    isSelected: false,
  },
  {
    id: 7,
    label: 'Camera',
    isSelected: false,
  },
];
export const ModalScreen = () => {
  return (
    <View>
      <Modal
        isVisible={true}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.modalView}
      />
    </View>
  );
};

export default function FilterModal() {
  const [ratings, setRatings] = useState('2');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [vaccinationDate, setVaccinationDate] = useState('');
  const ratingCompleted = (rating: any) => {
    setRatings(rating);
  };
  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (output: any) => {
    setShowDatePicker(false);
    setVaccinationDate('' + output.dateString);
  };
  const pressHandler = () => {
    Alert.alert('button pressed');
  };
  return (
    <View style={styles.filterModalContainer}>
      <View style={styles.dateContainer}>
        {/* <Text style={styles.filterModalTextStyle}>
          How long do you want to stay?
        </Text> */}
        {/* <InputField
          containerStyle={styles.inputFieldLarge}
          inputContainerStyle={styles.inputFieldInnerContainer}
          inputStyle={styles.inputFieldText}
          label=" "
          placeholder="10 July - 10 Aug"
          keyboardType="default"
          rightIcon={
            <Image
              style={styles.navbarFilterImage}
              source={calendar}
              resizeMode={'contain'}
            />
          }
        /> */}
        {showDatePicker && (
          <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
            isTimePickerEnable={false}
            colorOptions={colorOptions}
            initialDate={new Date()}
            dateStringFormat={'dd/mm/yyyy'} //dd/MM/yyyy hh:mm:ss
          />
        )}
        <View>
          <InputField
            placeholder={'10 Oct - 15 Oct'}
            value={vaccinationDate}
            label={'How long do you want to stay?'}
            labelStyle={styles.filterModalTextStyle}
            containerStyle={styles.inputFieldLarge}
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            rightIcon={
              <Image
                source={require('../../../../assets/images/bd_calender.png')}
                style={styles.imageIcon}
              />
            }
            rightIconContainerStyle={styles.iconContainerStyle}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={val => setVaccinationDate(val)}
            disabled={true}
            disabledInputStyle={styles.disabledInput}
          />
          <TouchableOpacity
            style={styles.vaccinationTouch}
            onPress={() => setShowDatePicker(true)}
          />
        </View>
      </View>
      <View style={styles.propertyTypeContainer}>
        <Text style={styles.filterModalTextStyle}>Property Type</Text>
        <MultipleSelection options={propertyType} />
      </View>
      <View style={styles.priceRangeWrapper}>
        <Text style={styles.filterModalTextStyle}>Price Range</Text>
        <Text style={styles.filterPriceTextStyle}> £ 100 - £ 500 / month</Text>
        <RangeSlider />

        <View style={styles.priceRangeContainer}>
          <MultipleSelection options={priceRange} />
        </View>
      </View>
      <View
        style={{
          paddingTop: isTablet() ? getWidthTab(35) : getWidth(15),
          marginHorizontal: isTablet() ? getWidthTab(10) : 0,
          paddingRight: isTablet() ? getWidthTab(5) : 0,
        }}>
        <Text style={styles.roomsAndBedsTextStyle}>Rooms and beds</Text>
        {/* <View style={{marginHorizontal: -16}}> */}
        <RoomCounter title={'Bedroom'} minValue={0} maxValue={5} />
        <RoomCounter title={'Bathroom'} minValue={0} maxValue={5} />
        <RoomCounter title={'Bed'} minValue={0} maxValue={5} />
      </View>
      {/* </View> */}
      <View
        style={{
          paddingTop: isTablet() ? getWidthTab(35) : getWidth(15),
          marginHorizontal: isTablet() ? getWidthTab(10) : 0,
        }}>
        <Text style={styles.roomsAndBedsTextStyle}>Persons</Text>

        <RoomCounter title={'Adults'} minValue={0} maxValue={5} />
        <RoomCounter title={'Children'} minValue={0} maxValue={5} />
        <RoomCounter title={'Infants'} minValue={0} maxValue={5} />
      </View>
      <View style={{}}>
        <View
          style={{
            paddingTop: isTablet() ? getWidthTab(30) : getWidth(15),
            marginHorizontal: isTablet() ? getWidthTab(10) : 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.roomsAndBedsTextStyle}>Property Facilities</Text>
          <Button
            accessibilityLabel="See All"
            title={'See All'}
            titleStyle={{
              fontSize: isTablet() ? Font9 : Font12,
              color: colors.secondary,
              fontFamily: Fonts.SFProRounded.Regular,
              fontWeight: '400',
              includeFontPadding: false,
              textAlignVertical: 'center',
            }}
            type={'clear'}
            // onPress={props.seeAllPress}
            containerStyle={{
              marginRight: isTablet() ? getWidthTab(10) : getWidth(10),
            }}
          />
        </View>

        <View style={styles.facilities}>
          <PropertyFacilities options={facilities} />
        </View>
      </View>

      <View
        style={{
          paddingTop: isTablet() ? getWidthTab(10) : getWidth(1),
          marginHorizontal: isTablet() ? getWidthTab(10) : 0,
        }}>
        <Text style={styles.roomsAndBedsTextStyle}>Rating</Text>

        <View style={styles.ratingStyle}>
          <Text style={styles.ratingText}> {ratings}</Text>
          <Rating
            type="custom"
            ratingImage={starImage}
            ratingColor="#FFA91C"
            startingValue={2}
            ratingBackgroundColor="#FFA91C35"
            onFinishRating={(r: any) => ratingCompleted(r)}
            tintColor="white"
            ratingCount={5}
            imageSize={30}
            showRating={false}
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={pressHandler}>
              <View style={styles.resetButton}>
                <Image style={styles.resetImageContainer} source={resetImage} />
                <Text style={styles.resetTextStyle}>Reset all</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <Button
              accessibilityLabel="Apply"
              title={'Apply'}
              titleStyle={styles.buttonTitleStyle}
              onPress={pressHandler}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
