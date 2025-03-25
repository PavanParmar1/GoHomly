import * as React from 'react';
import {useState, useEffect} from 'react';
import ImageButton from '../image-button/imagebutton';
import {StyleSheet} from 'react-native';
import {
  windowWidth,
  Fonts,
  Font15,
  Font10,
  getWidthTab,
} from '../../../app/utils/common';
import Voice from '@react-native-community/voice';
import {isTablet} from 'react-native-device-info';
import {TextField} from '../../stories/TextField';

const iconSize = (22 * windowWidth) / 375;
const iconSizeTab = (30 * windowWidth) / 834;
const AnimationTime = 3500;
interface SearchBarProps {
  onChangesText?: (text: string) => void;
  onSpeechEndProps?: (text: string) => void;
  onSearchEndEditing?: (text: string) => void;
  onSearchError?: (error: any) => void;
  onSpeechStartProps?: () => void;
  isSelectedText?: string;
  onPress?: () => void;
  childRef?: any;
}

const SearchBarEnabled = (props: SearchBarProps) => {
  const {onChangesText, onSpeechEndProps, onSearchEndEditing, onSearchError} =
    props;
  const [searchButton, setSearchButton] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  React.useImperativeHandle(props.childRef, () => ({
    forceStartVoice() {
      props.onPress();
      startVoiceSpeech();
      setSearchButton(true);
      setTimeout(() => {
        stopVoiceSpeech();
        setSearchButton(false);
      }, AnimationTime);
    },
    forceStopVoice() {
      stopVoiceSpeech();
      setSearchButton(false);
    },
  }));

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
  }, []);
  useEffect(() => {
    if (props.isSelectedText !== null && props.isSelectedText !== '') {
      setText(props.isSelectedText);
    }
  }, [props.isSelectedText]);

  // useEffect(() => {
  //   props.onChangesText(text);
  // }, [text]);

  const startVoiceSpeech = async () => {
    setText('');
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error('startVoiceSpeech => ', e);
    }
  };

  const stopVoiceSpeech = async () => {
    try {
      await Voice.stop();
      //   await Voice.destroy().then(Voice.removeAllListeners);
    } catch (e) {
      console.error('stopVoiceSpeech => ', e);
    }
  };

  const onSpeechStart = () => {
    props.onSpeechStartProps();
    // console.log('Speech start');
  };
  const onSpeechEnd = () => {
    console.log('speech end');
    onSpeechEndProps(text);
  };
  const onSpeechError = (e: any) => {
    onSearchError(e);
  };
  const onSpeechResults = (e: any) => {
    if (e.value !== undefined) {
      setText(e.value[0]);
      onChangesText(e.value[0]);
    }
    // console.log('hiiiiii onSpeechResults : ', e.value);
    // console.log('hiiiiii onSpeechResults : ', e.value[0]);
  };
  const onSpeechPartialResults = (e: any) => {
    // console.log('hiiiiii onSpeechPartialResults : ', e.value);
    console.log('hiiiiii onSpeechPartialResults : ', e.value[0]);
  };

  return (
    <>
      <TextField
        viewMode="large"
        inputStyle={styles.inputStyle}
        label=" "
        labelStyle={styles.lableStyle}
        placeholder={'Search by address, city, location'}
        placeholderTextColor={'#777777'}
        value={text}
        onChangeText={setText}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.containerstyle}
        returnKeyType={'search'}
        onSubmitEditing={() => onSearchEndEditing(text)}
        clearButtonMode="while-editing"
        rightIcon={
          <ImageButton
            source={
              searchButton
                ? require('./assets/mic_g.gif')
                : require('./assets/mic.png')
            }
            onPress={() => {
              props.onPress();
              startVoiceSpeech();
              setSearchButton(true);
              setTimeout(() => {
                stopVoiceSpeech();
                setSearchButton(false);
              }, AnimationTime);
            }}
            containerStyle={styles.imagecontainer}
            touchOpecity={1}
            style={
              searchButton ? styles.righticonEnble : styles.righticonDisable
            }
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
    fontSize: isTablet() ? Font10 : Font15,
    paddingLeft: '3%',
    fontFamily: Fonts.SFProRounded.Regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: isTablet() ? getWidthTab(10) : (windowWidth * 53) / 375 / 5,
    height: isTablet() ? getWidthTab(65) : (windowWidth * 53) / 375,
  },
  containerstyle: {
    width: isTablet() ? getWidthTab(732) : '95%',
    marginHorizontal: '0%',
    alignSelf: 'center',
    backgroundColor: '#00000000',
  },
  imagecontainer: {
    // marginLeft: '3%',
    // marginRight: '3%',
  },
  righticonEnble: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
  },
  righticonDisable: {
    height: isTablet() ? iconSizeTab : iconSize,
    width: isTablet() ? iconSizeTab : iconSize,
  },
  righticonContainer: {marginRight: -6},
});
