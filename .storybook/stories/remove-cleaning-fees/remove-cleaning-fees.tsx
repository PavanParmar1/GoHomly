import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from '@rn-community/button';
import {Divider} from '@rneui/themed-edge';
import {
  CONTAINER,
  TITLE_CONTAINER,
  TITLE,
  TEXT,
  TEXT_CONTAINER,
  BUTTON,
  BUTTON_CONTAINER,
  BUTTON_YES,
  YES_TITLE,
  NO_TITLE,
  DIVIDER,
} from './remove-cleaning-fees.presets';
import {RemoveCleaningFeesProps} from './remove-cleaning-fees.props';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../app/utils/common';
import {Button} from '../button/button';

export default function RemoveCleaningFees(props: RemoveCleaningFeesProps) {
  const {
    divider = true,
    text = 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  } = props;
  return (
    <View style={[CONTAINER, props.container]}>
      {divider === true ? (
        <Divider width={3} insetType="middle" style={DIVIDER} />
      ) : (
        <></>
      )}

      <View style={[TITLE_CONTAINER, props.headingStyle]}>
        <Text
          style={[
            TITLE,
            {
              marginBottom:
                text.length > 0
                  ? 0
                  : isTablet()
                    ? getWidthTab(21)
                    : getWidth(18),
            },
          ]}>
          {props.heading}
        </Text>
      </View>
      {text.length > 0 && (
        <View style={[TEXT_CONTAINER, props.textStyle]}>
          <Text style={TEXT}>{text}</Text>
        </View>
      )}
      <View style={BUTTON_CONTAINER}>
        <Button
          title="Yes"
          titleStyle={YES_TITLE}
          buttonStyle={BUTTON_YES}
          onPress={() => props.onPress()}
        />
        <Button
          title={'No'}
          titleStyle={NO_TITLE}
          type={'outline'}
          onPress={() => props.onPress1()}
          buttonStyle={BUTTON}
        />
      </View>
    </View>
  );
}
