import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ExtraServicesViewModeProps} from './extra-services-view-mode.props';
import {
  BUTTON_TEXT,
  CONTAINER,
  INNER_CONTAINER,
  SEE_ALL_BUTTON,
  TEXT_BUTTON_CONTAINER,
  TITLE,
} from './extra-services-view-mode.presets';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import CheckBoxComponent from '../check-box/check-box';

const ExtraServicesViewMode = (props: ExtraServicesViewModeProps) => {
  return (
    <View style={CONTAINER}>
      <View style={TEXT_BUTTON_CONTAINER}>
        <Text style={TITLE}>Essential Extra Services</Text>

        <Button
          title={'See All'}
          type={'clear'}
          titleStyle={SEE_ALL_BUTTON}
          onPress={props.onPress}
        />
      </View>

      <View style={INNER_CONTAINER}>
        <Text style={[BUTTON_TEXT]}>{props.title}</Text>
      </View>

      <View style={INNER_CONTAINER}>
        <Text style={[BUTTON_TEXT]}>{props.title}</Text>
      </View>

      <View style={INNER_CONTAINER}>
        <Text style={[BUTTON_TEXT]}>{props.title}</Text>
      </View>

      {/* <View style={SUB_INNER_CONTAINER}>
        <CheckBoxComponent
          right={false}
          iconRight={false}
          checkedIcon="checkbox-outline"
          uncheckedIcon="square-outline"
          size={isTablet() ? 40 : 25}
          iconType="ionicon"
          checkedColor="#FF646C"
          uncheckedColor="black"
          onPress={() => {}}
          title=" "
          checkedTitle=" "
          containerStyle={{
            width: '5%',
            marginHorizontal: 0,
            padding: 0,
            marginEnd: 20,
          }}
        />

        <Text style={[BUTTON_TEXT]}>Cook ({'\u00A3 10'})</Text>
      </View>
      
      <View style={SUB_INNER_CONTAINER}>
        <CheckBoxComponent
          right={false}
          iconRight={false}
          checkedIcon="checkbox-outline"
          uncheckedIcon="square-outline"
          size={isTablet() ? 40 : 25}
          iconType="ionicon"
          checkedColor="#FF646C"
          uncheckedColor="black"
          onPress={() => {}}
          title=" "
          checkedTitle=" "
          containerStyle={{
            width: '5%',
            marginHorizontal: 0,
            padding: 0,
            marginEnd: 20,
          }}
        />
        <Text style={[BUTTON_TEXT]}>Toilet Cleaning ({'\u00A3 10'})</Text>
      </View> */}
    </View>
  );
};

export default ExtraServicesViewMode;
