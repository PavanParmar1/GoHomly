import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Font12,
  Font18,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {RoomCounter} from './room-counter';
import {InputDisabled} from './input-disabled';
import PickerView from '../PickerView';
import {isTablet} from 'react-native-device-info';

function BookingDetails(props: any) {
  const [roomCounter, setRoomCounter] = useState<boolean>(false);
  const [numberOfPerson, setnumberOfPerson] = useState<string>('2');

  const onPressMinute = () => {
    let object = {
      title: 'Minute',
      data: [1, 2, 3, 4, 5],
      defaultSelection: numberOfPerson,
    };
    props.showPicker(object, (value, index) => {
      console.log('index : ' + index);

      setnumberOfPerson('' + value);
    });
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>{'Booking Details'}</Text>
      <InputDisabled onPress={() => onPressMinute()} value={numberOfPerson} />
      <InputDisabled
        placeholder={'Single'}
        onPress={() => setRoomCounter(!roomCounter)}
        subViewVisible={roomCounter}
      />
      {roomCounter && (
        <View style={styles.mainViewIncre}>
          <RoomCounter title={'Single Room-£27'} minValue={0} maxValue={5} />
          <RoomCounter title={'Double Room-£48'} minValue={0} maxValue={5} />
          <RoomCounter title={'Tripple Room-£89'} minValue={0} maxValue={5} />
          <RoomCounter title={'Suite-£27'} minValue={0} maxValue={5} />
        </View>
      )}
      <View style={styles.calnderView}>
        <View style={styles.calenderHalf}>
          <InputDisabled
            placeholder={'22/02/2022'}
            rightIcon={
              <Image
                source={require('../../../assets/images/bd_calender.png')}
                style={styles.iconStylecalender}
              />
            }
            value={props.startDate}
            leftIconVisible={false}
            onPress={() => props.onShowPicker(1)}
          />
        </View>
        <View style={styles.calenderHalf}>
          <InputDisabled
            placeholder={'22/02/2022'}
            rightIcon={
              <Image
                source={require('../../../assets/images/bd_calender.png')}
                style={styles.iconStylecalender}
              />
            }
            value={props.endDate}
            leftIconVisible={false}
            onPress={() => props.onShowPicker(2)}
          />
        </View>
      </View>

      <InputDisabled
        placeholder={'Lead Person'}
        enable={true}
        rightIconVisible={false}
        leftIcon={
          <Image
            source={require('../../../assets/images/bd_person.png')}
            style={styles.iconStyle}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  calnderView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '1.5%',
    marginBottom: '0.5%',
  },
  calenderHalf: {
    flex: 1,
    marginHorizontal: '0.8%',
  },
  mainViewIncre: {
    backgroundColor: '#FBFBFB',
    width: '98%',
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(8),
    alignSelf: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    marginTop: isTablet() ? '4%' : '8%',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    marginLeft: '1%',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  iconStyle: {
    height: isTablet() ? (30 * windowWidth) / 834 : (20 * windowWidth) / 375,
    width: isTablet() ? (30 * windowWidth) / 834 : (20 * windowWidth) / 375,
    tintColor: '#777777',
  },
  iconStylecalender: {
    height: isTablet() ? (25 * windowWidth) / 834 : (16.5 * windowWidth) / 375,
    width: isTablet() ? (25 * windowWidth) / 834 : (16.5 * windowWidth) / 375,
    tintColor: '#777777',
    marginRight: '-7%',
  },
});

export default PickerView(BookingDetails);
