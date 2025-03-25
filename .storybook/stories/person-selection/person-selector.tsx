import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import personSelectorStyles, {styles} from './person-selector.preset';

import ImageButton from '../image-button/imagebutton';
import {Divider} from '@rneui/base';
import {colors} from '../../../app/theme';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

interface counterProps {
  title?: string;
  subtTitle?: string;
  isUnderlined?: boolean;
  value: number;
  onChange?: (value: number) => void;
}

export const PersonSelector = (props: counterProps) => {
  const {title = 'Title', subtTitle, isUnderlined, onChange, value} = props;

  const [internalValue, setInternalValue] = useState<number>(value);

  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font14,
    Font15,
    Font16,
    Font17,
    Font8,
    Font9,
    getWidth,
    getWidthTab,
    Font4,
    Font5,
    Font6,
    Font7,
  } = useSize();
  const styles = personSelectorStyles(
    getWidth,
    getWidthTab,
    Font10,
    Font14,
    Font15,
    Font16,
    Font17,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    windowWidth,
    screenWidth,
  );

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleDecrement = () => {
    if (internalValue > 0) {
      setInternalValue(internalValue - 1);
      if (onChange) {
        onChange(internalValue - 1);
      }
    }
  };

  const handleIncrement = () => {
    setInternalValue(internalValue + 1);
    if (onChange) {
      onChange(internalValue + 1);
    }
  };

  return (
    <>
      <View style={styles.mainViewStyle}>
        <View style={{flex: 1}}>
          <Text style={styles.lableStyle}>{title}</Text>
          <Text
            style={[
              styles.lableStyle1,
              isUnderlined
                ? {textDecorationLine: 'underline'}
                : {textDecorationLine: 'none'},
            ]}>
            {subtTitle}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <ImageButton
            source={require('../../../assets/images/bd_minus_circle.png')}
            style={[
              styles.imageButtonStyle,
              value === 0
                ? {tintColor: '#7777774D'}
                : {tintColor: colors.secondary},
            ]}
            containerStyle={styles.imageButtonStyle}
            onPress={handleDecrement}
          />
          <Text style={[styles.counterStyle]}>{internalValue}</Text>

          <ImageButton
            source={require('../../../assets/images/bd_plus_circle.png')}
            style={[styles.imageButtonStyle, {tintColor: colors.secondary}]}
            containerStyle={styles.imageButtonStyle}
            onPress={handleIncrement}
          />
        </View>
      </View>
    </>
  );
};
