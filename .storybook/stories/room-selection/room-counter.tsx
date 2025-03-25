import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {
  Font10,
  Font15,
  Font16,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';
import ImageButton from '../image-button/imagebutton';

interface counterProps {
  title?: string;
  minValue?: number;
  maxValue?: number;
  textWidth?: number;
  // onChange?: (value: number) => void;
}

const constTextWidth = (25 * windowWidth) / 375;
const iconSize = (30 * windowWidth) / 375;
const iconSizeTab = (30 * windowWidth) / 834;

export const RoomCounter = (props: counterProps) => {
  const {
    title = 'Title',
    minValue,
    maxValue,
    textWidth = constTextWidth,
    // onChange,
  } = props;

  const [value, setValue] = useState<number>(minValue || 0);
  const [counterVisible, setCounterVisible] = useState<boolean>(false);

  useEffect(() => {
    if (minValue == value) {
      setCounterVisible(false);
    } else {
      setCounterVisible(true);
    }
  }, [value]);

  return (
    <View style={styles.mainViewStyle}>
      <Text style={styles.lableStyle}>{title}</Text>
      {counterVisible ? (
        <>
          <ImageButton
            source={require('../../../assets/images/bd_minus_circle.png')}
            style={styles.imageButtonStyle}
            containerStyle={styles.imageButtonStyle}
            onPress={() => {
              if (minValue && minValue > value - 1) {
                Alert.alert('Min Limit Reached');
              } else {
                setValue(value - 1);
              }
            }}
          />
          <Text style={[styles.counterStyle, {width: textWidth}]}>{value}</Text>

          <ImageButton
            source={require('../../../assets/images/bd_plus_circle.png')}
            style={styles.imageButtonStyle}
            containerStyle={styles.imageButtonStyle}
            onPress={() => {
              if (maxValue && maxValue < value + 1) {
                Alert.alert('Max Limit Reached');
              } else {
                setValue(value + 1);
              }
            }}
          />
        </>
      ) : (
        <ImageButton
          source={require('../../../assets/images/bd_add.png')}
          style={styles.imageButtonStyle}
          containerStyle={styles.imageButtonStyle}
          onPress={() => {
            setValue(value + 1);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
   paddingVertical:isTablet()? getWidthTab(11.5):getWidth(9),
   paddingHorizontal:isTablet()? getWidthTab(30):getWidth(16)
  },
  lableStyle: {
    flex: 1,
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font9 : Font16,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  imageButtonStyle: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
    tintColor: 'black',
  },
  counterStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: isTablet() ? Font10 : Font16,
    marginLeft: isTablet()
      ? (windowWidth * 10) / 834
      : (windowWidth * 10) / 375,
    marginRight: isTablet()
      ? (windowWidth * 10) / 834
      : (windowWidth * 10) / 375,
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  touchableStyle: {
    position: 'absolute',
    width: '98%',
    alignSelf: 'center',
    opacity: 1,
    borderRadius: (windowWidth * 55) / 375 / 6,
    height: '75%',
    bottom: 3,
  },
});
