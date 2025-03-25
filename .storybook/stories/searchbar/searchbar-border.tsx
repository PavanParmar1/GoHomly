import * as React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {windowWidth, Font13, Secondary} from '../../../app/utils/common';
import {Button as ButtonElement} from '@rneui/base';
import { TextField } from '../TextField';

const SearchBarEnabled = () => {
  return (
    <>
      <TextField
        viewMode="large"
        inputStyle={styles.inputStyle}
        label=" "
        labelStyle={styles.lableStyle}
        placeholder={'2222 8751 5684'}
        placeholderTextColor={'#777777'}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.containerstyle}
        rightIcon={
          <ButtonElement
            title={'Submit'}
            titleStyle={styles.buttonStyle}
            type={'clear'}
            onPress={() => Alert.alert('pressed')}
          />
        }
        rightIconContainerStyle={styles.righticonContainer}
      />
    </>
  );
};

export default SearchBarEnabled;

const styles = StyleSheet.create({
  lableStyle: {height: 0},
  inputStyle: {
    color: '#777777',
    fontSize: Font13,
    padding: 10,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    // borderColor: '#FFF',
    borderRadius: (windowWidth * 45) / 375 / 6,
    height: (windowWidth * 45) / 375,
    marginTop: 0,
  },
  containerstyle: {
    width: '91.46%',
    marginHorizontal: '0%',
    alignSelf: 'center',
    backgroundColor: '#FFF', //remove this line when using in main component
  },
  imagecontainer: {
    marginLeft: 25,
  },
  righticonEnble: {
    height: 22.5,
    width: 22.5,
    marginRight: 0,
  },
  righticonDisable: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  righticonContainer: {marginRight: -6},
  buttonStyle: {
    fontSize: 14,
    color: Secondary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
