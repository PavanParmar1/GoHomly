import {Icon} from '@rneui/base-edge';
import React from 'react';

import {Text, View, Alert, KeyboardAvoidingView} from 'react-native';
// import {Button} from '@rn-community/button';
import {
  CONTAINER,
  INPUT_CONTAINER,
  TEXT,
  BUTTON_TITLE,
  BUTTON_STYLE,
  ICON_STYLE,
  LABEL_STYLE,
  INPUT_FIELD,
  INPUT_STYLE,
  SUBMIT_BUTTON_STYLE,
  INPUT_CONTAINER_TAB,
  SUBMIT_BUTTON_TITLE,
  SUBMIT_BUTTON_CONTAINER,
} from './contact-us.presets';
import {isTablet} from 'react-native-device-info';
import {getWidthTab, getWidth} from '../../../app/utils/common';
import {Button} from '../button/button';
import { TextField } from '../TextField';
const iconSize = isTablet() ? getWidthTab(30) : getWidth(20);
export default function ContactUs() {
  return (
    <View style={CONTAINER}>
      <KeyboardAvoidingView>
        <TextField
          label="Name"
          labelStyle={LABEL_STYLE}
          placeholder="Jane Cooper"
          keyboardType="name-phone-pad"
          containerStyle={INPUT_CONTAINER}
          inputContainerStyle={INPUT_CONTAINER_TAB}
          inputStyle={LABEL_STYLE}
        />
        <TextField
          label="Email"
          labelStyle={LABEL_STYLE}
          placeholder="janecooper@example.com"
          keyboardType="email-address"
          containerStyle={INPUT_CONTAINER}
          inputContainerStyle={INPUT_CONTAINER_TAB}
          inputStyle={LABEL_STYLE}
        />
        <TextField
          label="Phone Number"
          labelStyle={LABEL_STYLE}
          placeholder="44-7980-303-388"
          keyboardType="numeric"
          containerStyle={INPUT_CONTAINER}
          inputContainerStyle={INPUT_CONTAINER_TAB}
          inputStyle={LABEL_STYLE}
        />
        <View style={INPUT_CONTAINER}>
          <Text style={TEXT}>Photo ID</Text>
          <Button
            title="Upload Photo"
            titleStyle={BUTTON_TITLE}
            type={'outline'}
            buttonStyle={BUTTON_STYLE}
            onPress={() => Alert.alert('pressed')}
            iconRight={true}
            icon={
              <Icon
                type="feather"
                name="paperclip"
                size={iconSize}
                color="#77777760"
                style={ICON_STYLE}
              />
            }
          />
        </View>
        <TextField
          label="Concern"
          labelStyle={LABEL_STYLE}
          multiline={true}
          numberOfLines={3}
          placeholder="Type Here..."
          containerStyle={INPUT_CONTAINER}
          inputContainerStyle={INPUT_FIELD}
          inputStyle={INPUT_STYLE}
        />
      </KeyboardAvoidingView>
      <View style={SUBMIT_BUTTON_STYLE}>
        <Button
          title={'Submit'}
          titleStyle={SUBMIT_BUTTON_TITLE}
          buttonStyle={SUBMIT_BUTTON_CONTAINER}
        />
      </View>
    </View>
  );
}
