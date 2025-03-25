import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
// import {Button} from '@rn-community/button';

import {Icon} from '@rneui/base-edge';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {
  CONTAINER,
  HEADER_CONTAINER,
  INNER_CONTAINER,
  INNER_DASHED_CONTAINER,
  TITLE,
  LABEL,
  INPUT,
  BUTTON_CONTAINER,
  BUTTON_TITLE,
  CONTAINER_BIRTH,
  INPUTCONDITION,
} from './guest-details-form.presets';
import DatePicker from 'react-native-neat-date-picker';
import CheckBoxComponent from '../check-box/check-box';
import {colorOptions, getWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import { Button } from '../button/button';
import { TextField } from '../TextField';

export default function GuestDetailsForm(props:any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [allergies, setAllergies] = useState('');
  // const [checkIn, setCheckIn] = useState('');
  const [id, setId] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [vaccinationDocument, setVaccinationDocument] = useState('');
  const [photoId, setPhotoId] = useState('');
  const [locationForm, setLocationForm] = useState('');
  const [isTimePickerEnable, setTimePickerEnable] = useState(false);
  const [dateFormat, setDateFormat] = useState('dd/mm/yyyy');

  const [accomodation, setAccomodation] = useState('');
  const [listView, setListView] = useState(false);

  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [type, setType] = useState(1);

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onShowPicker = (type1:any) => {
    setType(type1);
    if (type1 === 3) {
      setTimePickerEnable(true);
      setDateFormat('dd/mm/yyyy hh:mm');
    } else {
      setTimePickerEnable(false);
      setDateFormat('dd/mm/yyyy');
    }
    setShowDatePicker(true);
  };

  const onConfirm = (output:any) => {
    // console.log(output);
    setShowDatePicker(false);
    if (type === 1) {
      setBirthday('' + output.dateString);
    } else if (type === 2) {
      setVaccinationDate('' + output.dateString);
    } else if (type === 3) {
      setCheckInDate('' + output.dateString);
    }
    // setVaccinationDate('' + output.dateStringDisplay);
  };

  useEffect(() => {
    setVaccinationDocument(result && result[0].name);
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      // console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  return (
    <>
      <View style={HEADER_CONTAINER}>
        <Text style={TITLE}>Guest Details</Text>
        {/* <ImageButton
          source={require('../../../assets/images/add.png')}
          touchOpecity={0.8}
          // onPress={() => setModalVisible(true)}
          style={ADD_ICON}
        /> */}
      </View>

      <TextField
        placeholder={'John'}
        value={firstName}
        label={'First Name'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setFirstName(val)}
      />
      <TextField
        placeholder={'Williams'}
        value={lastName}
        label={'Last Name'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setLastName(val)}
      />
      <View>
        <TextField
          placeholder={'Birth Date'}
          value={birthday}
          label={'Birth Date'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_CONTAINER}
          inputStyle={INPUT}
          rightIcon={
            <Image
              source={require('../../../assets/images/bd_calender.png')}
              style={{
                width: isTablet() ? getWidth(14) : getWidth(22),
                height: isTablet() ? getWidth(14) : getWidth(22),
              }}
            />
          }
          rightIconContainerStyle={{opacity: 0.5}}
          type="border"
          keyboardType="numbers-and-punctuation"
          onChangeText={(val:any) => setBirthday(val)}
        />
        <TouchableOpacity
          style={CONTAINER_BIRTH}
          onPress={() => onShowPicker(1)}
        />
      </View>
      <TextField
        placeholder={'Add Nationality'}
        value={nationality}
        label={'Nationality'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setNationality(val)}
      />
      <TextField
        placeholder={'44-7809-303-388'}
        value={phoneNumber}
        label={'Phone Number'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        keyboardType="numeric"
        type="border"
        onChangeText={(val:any) => setPhoneNumber(val)}
      />
      <TextField
        placeholder={'jean@gmail.com'}
        value={email}
        label={'Email'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        keyboardType="email-address"
        type="border"
        onChangeText={(val:any) => setEmail(val)}
      />
      <TextField
        placeholder={'Add Address'}
        value={address}
        label={'Address'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setAddress(val)}
      />
      <TextField
        placeholder={'Add Allergies'}
        value={allergies}
        label={'Allergies'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setAllergies(val)}
      />

      <View>
        <TextField
          placeholder={'Expected Check-In Time'}
          value={checkInDate}
          label={'Expected Check-In Time'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_CONTAINER}
          inputStyle={INPUT}
          type="border"
          keyboardType="numbers-and-punctuation"
          rightIcon={
            <Image
              source={require('../../../assets/images/bd_calender.png')}
              style={{
                width: isTablet() ? getWidth(14) : getWidth(22),
                height: isTablet() ? getWidth(14) : getWidth(22),
              }}
            />
          }
          rightIconContainerStyle={{opacity: 0.5}}
          onChangeText={(val:any) => setCheckInDate(val)}
        />
        <TouchableOpacity
          style={CONTAINER_BIRTH}
          onPress={() => onShowPicker(3)}
        />
      </View>

      <TextField
        placeholder={'Present'}
        value={accomodation}
        label={'Accomodation'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        editable={false}
        disabledInputStyle={{backgroundColor: 'transparent'}}
        type="border"
        rightIcon={
          <Icon
            type="feather"
            name="chevron-down"
            size={isTablet() ? 30 : 22}
            onPress={() => setListView(!listView)}
          />
        }
        rightIconContainerStyle={{opacity: 0.5}}
        onChangeText={(val:any) => setAccomodation(val)}
      />
      {listView && (
        <CheckBoxComponent
          title={'No'}
          checkedTitle={'Yes'}
          iconRight={true}
          onPress={() => {}}
        />
      )}
      <TextField
        placeholder={'ID'}
        value={id}
        label={'Document Provided By Office'}
        labelStyle={LABEL}
        containerStyle={CONTAINER}
        inputContainerStyle={INNER_CONTAINER}
        inputStyle={INPUT}
        type="border"
        onChangeText={(val:any) => setId(val)}
      />
      <View>
        <TextField
          placeholder={'Upload Document'}
          value={vaccinationDocument}
          label={'Vaccination Document'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_CONTAINER}
          inputStyle={INPUT}
          disabled={true}
          disabledInputStyle={{backgroundColor: 'transparent'}}
          type="border"
          rightIcon={
            <Icon type="feather" name="paperclip" size={isTablet() ? 23 : 20} />
          }
          rightIconContainerStyle={{opacity: 0.5}}
          onChangeText={(val:any) => setVaccinationDocument(val)}
        />
        <TouchableOpacity
          style={CONTAINER_BIRTH}
          onPress={() => {
            DocumentPicker.pick({
              allowMultiSelection: true,
              type: [types.images, types.doc, types.docx, types.pdf, types.xls],
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
              .then(setResult)
              .catch(handleError);
          }}
        />
        <Text style={INPUTCONDITION}>*</Text>
      </View>
      <View>
        <TextField
          placeholder={'Select Vaccine Date'}
          value={vaccinationDate}
          label={'Recent Vaccination Date'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_CONTAINER}
          inputStyle={INPUT}
          type="border"
          keyboardType="numbers-and-punctuation"
          rightIcon={
            <Image
              source={require('../../../assets/images/bd_calender.png')}
              style={{
                width: isTablet() ? getWidth(14) : getWidth(22),
                height: isTablet() ? getWidth(14) : getWidth(22),
              }}
            />
          }
          rightIconContainerStyle={{opacity: 0.5}}
          onChangeText={(val:any) => setVaccinationDate(val)}
        />
        <TouchableOpacity
          style={CONTAINER_BIRTH}
          onPress={() => onShowPicker(2)}
        />
      </View>
      <View>
        <TextField
          placeholder={'Upload Photo'}
          value={photoId}
          label={'Photo ID'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_DASHED_CONTAINER}
          inputStyle={INPUT}
          disabled={true}
          disabledInputStyle={{backgroundColor: 'transparent'}}
          type="border"
          rightIcon={
            <Icon type="feather" name="paperclip" size={isTablet() ? 23 : 20} />
          }
          rightIconContainerStyle={{opacity: 0.5}}
          onChangeText={(val:any) => setPhotoId(val)}
        />
        <TouchableOpacity
          style={CONTAINER_BIRTH}
          onPress={() => {
            DocumentPicker.pick({
              allowMultiSelection: true,
              type: [types.images],
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
              .then(setResult)
              .catch(handleError);
          }}
        />
      </View>
      <View>
        <TextField
          placeholder={'Location'}
          value={locationForm}
          label={'Location Form'}
          labelStyle={LABEL}
          containerStyle={CONTAINER}
          inputContainerStyle={INNER_CONTAINER}
          inputStyle={INPUT}
          type="border"
          onChangeText={(val:any) => setLocationForm(val)}
        />
        <Text style={[INPUTCONDITION, {left: isTablet() ? '26%' : '34%'}]}>
          *
        </Text>
      </View>
      <View style={{marginVertical: '8%'}}>
        <Button
          title={'Check-In'}
          onPress={props.onPress}
          titleStyle={BUTTON_TITLE}
          buttonStyle={BUTTON_CONTAINER}
        />
      </View>

      {showDatePicker && (
        <DatePicker
          isVisible={showDatePicker}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={onConfirm}
          isTimePickerEnable={isTimePickerEnable}
          colorOptions={colorOptions}
          initialDate={new Date()}
          dateStringFormat={dateFormat} //dd/MM/yyyy hh:mm:ss
        />
      )}
    </>
  );
}
