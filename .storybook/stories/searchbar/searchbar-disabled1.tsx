import * as React from 'react';
import ImageButton from '../image-button/imagebutton';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  windowWidth,
  Font15,
  Fonts,
  getWidthTab,
  Font10,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {useState} from 'react';
import {TextField} from '../../stories/TextField';



const iconSize = (22 * windowWidth) / 375;
const iconSizeTab = (30 * windowWidth) / 834;
const SearchBarDisabled1 = ({onPress}) => {
  const [color, setColor] = useState<string>('#00000000');

  return (
    <View style={styles.mainViewStyle}>
      <TextField
        viewMode="large"
        inputStyle={styles.inputStyle}
        label=" "
        labelStyle={styles.labelStyle}
        placeholder={'Search by address, city, location'}
        placeholderTextColor={'#777777'}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={styles.containerStyle}
        rightIcon={
          <ImageButton
            source={require('./assets/mic.png')}
            onPress={() => console.log('hi')}
            containerStyle={styles.iconContainerStyle}
            touchOpecity={1}
            style={styles.iconStyle}
          />
        }
        rightIconContainerStyle={styles.rightIconContainerStyle}
      />
      <TouchableOpacity
        style={[styles.touchableStyle, {backgroundColor: color}]}
        onPressIn={() => setColor('#00000015')}
        onPressOut={() => setColor('#00000000')}
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBarDisabled1;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#777777',
    fontSize: isTablet() ? Font10 : Font15,
    paddingLeft: isTablet() ? getWidthTab(10) : '3%',
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  labelStyle: {height: 0},
  inputContainerStyle: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    height: isTablet() ? (windowWidth * 60) / 834 : (windowWidth * 53) / 375,
    borderRadius: isTablet()
      ? (windowWidth * 10) / 834
      : (windowWidth * 53) / 375 / 5,
    marginTop: 0,
  },
  containerStyle: {
    width: isTablet() ? getWidthTab(714) : '94%',
    alignSelf: 'center',
    backgroundColor: '#00000000',
  },
  iconContainerStyle: {},
  iconStyle: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
  },
  rightIconContainerStyle: {marginRight: -6},
  touchableStyle: {
    position: 'absolute',
    width: isTablet() ? getWidthTab(714) : '94%',
    alignSelf: 'center',
    opacity: 1,
    borderRadius: isTablet()
      ? (windowWidth * 10) / 834
      : (windowWidth * 55) / 375 / 6,
    height: isTablet() ? (windowWidth * 50) / 834 : (windowWidth * 50) / 375,
  },
  mainViewStyle: {
    width: '100%',
    alignSelf: 'center',
    marginTop: isTablet() ? '2%' : '3%',
  },
});
