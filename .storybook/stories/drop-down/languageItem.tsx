import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../app/utils/common';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../app/theme';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

interface LanguageItemProps {
  item: any;
  isSelected: boolean;
  onPress?: (value: any, LanguageName: any) => void;
}

const LanguageItem = (props: LanguageItemProps) => {
  const {dimensions, orientation} = useOrientation();
  const {Font11, Font16, Font9, Font7, Font6} = useSize();

  return (
    <>
      <TouchableOpacity
        style={{
          // padding: 20,
          paddingVertical: 15,
          paddingHorizontal: '5%',
        }}
        activeOpacity={0.65}
        onPress={() =>
          props.onPress && props.onPress(props.item.Id, props.item.LanguageName)
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.SFProRounded.Regular,
              fontSize:
                orientation === 'landscape' &&
                dimensions.window.width === dimensions.screen.width
                  ? Font6
                  : isTablet()
                    ? Font11
                    : Font16,
              color: 'black',
              width: '90%',
            }}>
            {props.item.LanguageName}
          </Text>
          {props.isSelected && (
            <Icon
              name="checkmark-sharp"
              size={25}
              color={colors.secondary}
              style={{width: '10%', marginLeft: '5%'}}
            />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LanguageItem;
