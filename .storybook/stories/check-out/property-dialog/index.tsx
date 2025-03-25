import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Font10,
  Font12,
  Font15,
  Font16,
  Font18,
  Font24,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../../app/utils/common';
import {Rating} from 'react-native-ratings';
// import {Button} from '@rn-community/button';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../button/button';
import {colors} from '../../../../app/theme';
import { TextField } from '../../TextField';

const starimage_selected = require('../../../../assets/images/startpsd.png');

export default function PropertyDialog(props) {
  const [ratings, setRatings] = useState('5');
  const ratingCompleted = rating => {
    setRatings(rating);
  };
  return (
    <>
      <View style={styles.mainView}>
        <Text style={styles.title_text}>Do you like the property?</Text>
        <Text style={styles.message_text}>Rate your experience</Text>
        <View style={styles.ratingStyle}>
          {/* <Text style={styles.ratingText}> {ratings}</Text> */}
          <Rating
            type="custom"
            ratingImage={starimage_selected}
            ratingColor={colors.secondary}
            ratingBackgroundColor="#c8c7c8"
            onFinishRating={r => ratingCompleted(r)}
            tintColor="#FBFBFB"
            ratingCount={5}
            imageSize={30}
            jumpValue={1}
            minValue={1}
            startingValue={ratings}
            showRating={false}
          />
        </View>
        <TextField
          multiline={true}
          numberOfLines={3}
          label=" "
          labelStyle={{height: 0}}
          placeholder="Any feedback you would like to give, Leave us your comment."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputField}
          inputStyle={styles.inputStyle}
          placeholderTextColor={'#777777'}
        />
      </View>
      <Button
        title={'Submit'}
        onPress={() => props.onPress()}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    width: '100%',
  },
  title_text: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    fontWeight: '700',
    color: 'black',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  message_text: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font16,
    fontWeight: '400',
    color: '#777777',
    marginVertical: isTablet() ? getWidthTab(20) : getWidth(25),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  inputContainer: {
    marginHorizontal: 0,
    width: '98%',
    marginTop: '3%',
  },
  inputField: {
    height: isTablet() ? getWidthTab(150) : getWidth(90),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(15),
  },
  inputStyle: {
    marginVertical: 0,
    alignSelf: 'flex-start',
    fontFamily: Fonts.SFProRounded.Light,
    fontWeight: '400',
    fontSize: isTablet() ? Font10 : Font15,
    color: '#777777',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  ratingStyle: {
    backgroundColor: '#FBFBFB',
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(35),
    width: isTablet() ? '96%' : '98%',
    alignItems: 'center',
    justifyContent: 'center',
    height: isTablet() ? getWidthTab(65) : getWidth(65),
    flexDirection: 'row',
    marginVertical: isTablet() ? getWidthTab(20) : 0,
  },
  ratingText: {
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font18 : Font24,
    width: isTablet() ? getWidthTab(45) : getWidth(25),
    marginTop: isTablet() ? getWidthTab(5) : getWidth(3),
    marginRight: isTablet() ? getWidthTab(20) : getWidth(10),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  buttonStyle: {
    width: isTablet() ? '95%' : '97%',
    height: isTablet() ? getWidthTab(60) : getWidth(45),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(10),
    alignSelf: 'center',
  },
  buttonTitle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font12 : Font18,
    fontWeight: '700',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: getWidth(23),
    marginBottom: getWidth(7),
  },
});
