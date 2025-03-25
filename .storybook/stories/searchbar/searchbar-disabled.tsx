import React, {useState} from 'react';
import ImageButton from '../image-button/imagebutton';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {
  windowWidth,
  Font15,
  Fonts,
  getWidthTab,
  Font10,
  getWidth,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {TextField} from '../../stories/TextField';


const iconSize = (22 * windowWidth) / 375;
const iconSizeTab = (30 * windowWidth) / 834;
const SearchBarDisabled = ({onPress}) => {
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
        style={[
          styles.touchableStyle,
          {
            backgroundColor: color,
          },
        ]}
        onPressIn={() => setColor('#00000015')}
        onPressOut={() => setColor('#00000000')}
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBarDisabled;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#777777',
    fontSize: isTablet() ? Font10 : Font15,
    paddingLeft: isTablet() ? getWidthTab(10) : '3%',
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
  },
  labelStyle: {height: 0},
  inputContainerStyle: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    height: isTablet() ? getWidthTab(65) : getWidth(53),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    marginTop: 0,
  },
  containerStyle: {
    width: isTablet() ? getWidthTab(790) : '94%',
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
    width: isTablet()
      ? Platform.OS === 'android'
        ? getWidthTab(770)
        : getWidthTab(770)
      : '92%',
    alignSelf: 'center',
    opacity: 1,
    height: isTablet() ? getWidthTab(65) : getWidth(53),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(15),
    marginTop: isTablet()
      ? Platform.OS === 'android'
        ? getWidthTab(12)
        : getWidthTab(12)
      : Platform.OS === 'ios'
        ? getWidth(5)
        : getWidth(4),
  },
  mainViewStyle: {
    width: '100%',
    alignSelf: 'center',
    marginTop: isTablet() ? '2%' : '3%',
  },
});
