import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './property-selection.preset';

import ImageButton from '../image-button/imagebutton';
import {Divider} from '@rneui/base';
import { colors } from '../../../app/theme';

interface counterProps {
  title?: string;
  showDivider?: boolean;
  value: number;
  onChange?: (value: number) => void;
}

export const PropertySelection = (props: counterProps) => {
  const {title = 'Title', showDivider, onChange, value} = props;
  const [internalValue, setInternalValue] = useState<number>(value);

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
    <View>
      <View style={styles.mainViewStyle}>
        <Text style={styles.lableStyle}>{title}</Text>
        <>
          <ImageButton
            source={require('../../../assets/images/bd_minus_circle.png')}
            style={[
              styles.imageButtonStyle,
              value === 0 ? {tintColor: '#7777774D'} : {tintColor: colors.secondary},
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
        </>
      </View>
      {showDivider ? (
        <Divider style={[styles.devider]} color={'#7777774D'} />
      ) : (
        <></>
      )}
    </View>
  );
};
