import {IconNode} from '@rneui/base';
import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../../app/theme';
import {
  Font10,
  Font15,
  Fonts,
  getWidthTab,
  windowWidth,
} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

interface InputDisabledProps {
  placeholder?: string;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  onChangeText?: () => void;
  value?: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  subViewVisible?: boolean;
  rightIconVisible?: boolean;
  leftIconVisible?: boolean;
  enable?: true;
  labelStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export const InputDisabled = (props: InputDisabledProps) => {
  const {
    placeholder = 'Number Of Persons',
    leftIcon,
    rightIcon,
    onChangeText,
    value = '',
    containerStyle,
    onPress,
    subViewVisible,
    rightIconVisible = true,
    leftIconVisible = true,
    enable = false,
    labelStyle,
    inputContainerStyle,
    inputStyle,
  } = props;

  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(value);
  }, [value]);

  const rightIconfun = () => {
    return (
      rightIcon || (
        <Image
          source={
            subViewVisible
              ? require('../../../assets/images/bd_arrow_up.png')
              : require('../../../assets/images/bd_arrow_down.png')
          }
          style={styles.iconStyle}
        />
      )
    );
  };

  const leftIconfun = () => {
    return (
      leftIcon || (
        <Image
          source={require('../../../assets/images/bd_persons.png')}
          style={styles.iconStyle}
        />
      )
    );
  };

  const onChangeTextLocal = (text1: string) => {
    setText(text1);
  };

  const [color, setColor] = useState<string>('#00000000');

  return (
    <View style={styles.mainViewStyle}>
      <TextField
        placeholder={placeholder}
        label=" "
        labelStyle={[styles.lableStyle, labelStyle]}
        containerStyle={[styles.containerStyle, containerStyle]}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        inputStyle={[styles.inputStyle, inputStyle]}
        placeholderTextColor={'#b4b4b4'}
        rightIcon={rightIconVisible ? rightIconfun() : <></>}
        rightIconContainerStyle={styles.rightICon}
        value={text}
        type="border"
        leftIcon={leftIconVisible ? leftIconfun() : <></>}
        onChangeText={onChangeText || onChangeTextLocal}
        leftIconContainerStyle={{
          marginRight: (3 * windowWidth) / 375,
          marginLeft: (-7 * windowWidth) / 375,
        }}
      />
      {enable === false && (
        <TouchableOpacity
          style={[styles.touchableStyle, {backgroundColor: color}]}
          onPressIn={() => setColor('#00000015')}
          onPressOut={() => setColor('#00000000')}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    alignSelf: 'center',
    // marginVertical: -0.,
    // justifyContent: 'center',
  },
  rightICon: {marginRight: isTablet() ? 10 : 5},
  lableStyle: {height: 0},
  containerStyle: {
    marginHorizontal: 0,
    width: '100%',
  },
  inputContainer: {
    height: isTablet() ? (windowWidth / 834) * 60 : (windowWidth / 375) * 45,
    paddingLeft: '5%',
  },
  inputStyle: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: isTablet() ? Font10 : Font15,
    fontWeight: '400',
    color: colors.textSecondary,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  touchableStyle: {
    position: 'absolute',
    width: '98%',
    alignSelf: 'center',
    opacity: 1,
    borderRadius: isTablet() ? getWidthTab(10) : (windowWidth * 55) / 375 / 6,
    height: '75%',
    bottom: 3,
  },
  iconStyle: {
    height: isTablet() ? (30 * windowWidth) / 834 : (19 * windowWidth) / 375,
    width: isTablet() ? (30 * windowWidth) / 834 : (19 * windowWidth) / 375,
    tintColor: '#777777',
  },
});
