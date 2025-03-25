import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ExtraServicesProps} from './extra-services.props';
import {
  BUTTON_TEXT,
  CONTAINER,
  INNER_CONTAINER,
  SEE_ALL_BUTTON,
  TEXT_BUTTON_CONTAINER,
  TITLE,
} from './extra-services.presets';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import CheckBoxComponent from '..//check-box/check-box';
import { colors } from '../../../app/theme';

const ExtraServices = (props: ExtraServicesProps) => {
  return (
    <View style={CONTAINER}>
      <View style={TEXT_BUTTON_CONTAINER}>
        <Text style={TITLE}>{props.headerTitle}</Text>

        <Button
          title={'See All'}
          type={'clear'}
          titleStyle={SEE_ALL_BUTTON}
          onPress={props.onPress}
        />
      </View>

      <FlatList
        scrollEnabled={false}
        data={props.data}
        renderItem={({item}) => (
          <View style={INNER_CONTAINER}>
            <CheckBoxComponent
              right={false}
              iconRight={false}
              checkedIcon="checkbox-outline"
              uncheckedIcon="square-outline"
              size={isTablet() ? 40 : 21}
              iconType="ionicon"
              checkedColor={colors.secondary}
              uncheckedColor="#D0D5DD"
              onPress={() => {}}
              title=" "
              checkedTitle=" "
              containerStyle={{
                width: '5%',
                marginHorizontal: 0,
                padding: 0,
              }}
            />
            <Text style={[BUTTON_TEXT]}>{item.title}</Text>
          </View>
        )}
      />

      {/* <View style={SUB_INNER_CONTAINER}>
        <CheckBoxComponent
          right={false}
          iconRight={false}
          checkedIcon="checkbox-outline"
          uncheckedIcon="square-outline"
          size={isTablet() ? 40 : 25}
          iconType="ionicon"
          checkedColor="colors.secondary"
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
          checkedColor="colors.secondary"
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

export default ExtraServices;
