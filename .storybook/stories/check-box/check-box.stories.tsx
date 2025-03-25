import React from 'react';
import {Alert, View} from 'react-native';
import Checkbox from './check-box';
import { colors } from '../../../app/theme';

const CheckboxMeta = {
  title: 'Checkbox Component',
  component: Checkbox,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Story />
        </View>
      </>
    ),
  ],
};

export default CheckboxMeta;

export const type_1 = {
  args: {
    title: 'Nearest High',
    checkedTitle: 'Nearest High',
    iconRight: true,
    onPress: () => {},
  },
};

export const type_2 = {
  args: {
    title: 'Nearest High',
    checkedTitle: 'Nearest High',
    iconRight: true,
    onPress: () => {},
    containerStyle: {
      width: '50%',
      marginHorizontal: 0,
      backgroundColor: '#11ff11',
      padding: 0,
    },
  },
};

export const type_3 = {
  args: {
    title: 'Nearest High',
    checkedTitle: 'Nearest High',
    iconRight: true,
    onPress: () => {},
    containerStyle: {
      width: '100%',
      marginHorizontal: 0,
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
};

export const type_4 = {
  args: {
    right: false,
    iconRight: false,
    checkedIcon: 'checkbox-outline',
    uncheckedIcon: 'square-outline',
    size: 50,
    iconType: 'ionicon',
    checkedColor: colors.secondary,
    uncheckedColor: colors.secondary,
    title: 'hi is there any issue',
    checkedTitle: 'hi',
    containerStyle: {
      width: '50%',
      marginHorizontal: 0,
      backgroundColor: 'green',
      justifyContent: 'flex-start',
      padding: 0,
    },
    onPress: () => {},
  },
};

export const type_5 = {
  args: {
    right: false,
    iconRight: false,
    checkedIcon: 'checkbox-outline',
    uncheckedIcon: 'square-outline',
    size: 40,
    iconType: 'ionicon',
    checkedColor: colors.secondary,
    uncheckedColor: colors.secondary,
    title: ' ',
    checkedTitle: ' ',
    containerStyle: {
      width: '10%',
      marginHorizontal: 0,
      padding: 0,
    },
    onPress: () => {},
  },
};

export const type_6 = {
  args: {
    center: true,
    title: 'disconnected',
    containerStyle: {},
    wrapperStyle: {},
    checkedTitle: 'connected',
    onPress: () => {
      Alert.alert('Pressed');
    },
    checkedIcon: 'wifi',
    uncheckedIcon: 'wifi-off',
    iconType: 'material',
    checkedColor: 'red',
    uncheckedColor: 'green',
  },
};

export const type_7 = {
  args: {
    disabled: true,
    title: 'Disabled',
    disabledStyle: {borderColor: 'grey', borderRadius: 8, borderWidth: 1},
    checkedTitle: 'connected',
    onPress: () => {},
    size: 30,
    uncheckedIcon: 'wifi-off',
    iconType: 'material',
    uncheckedColor: 'grey',
  },
};
