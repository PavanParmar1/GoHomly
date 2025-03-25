import React from 'react';
import {View} from 'react-native';
import ImageButton from './imagebutton';

const ImageButtonMeta = {
  title: 'ImageButton',
  component: ImageButton,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
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

export default ImageButtonMeta;

export const basic = {
  args: {
    source: require('./assets/back.png'),
    // onPress={() => Alert.alert('Image press done')}
    containerStyle: {
      marginLeft: 25,
    },
  },
};
