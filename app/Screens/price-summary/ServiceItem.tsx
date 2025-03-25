import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  PRICE_TEXT_STYLE,
  REMOVE_BTN_TEXT_STYLE,
  SERVICE_ITEM_CONTAINER,
  SERVICE_ITEM_SUB_CONTAINER,
  SERVICE_TEXT_STYLE,
  lableStyle,
} from './styles';
import {capitalizeFirstLetter} from '../../utils/common';

interface ServiceItemProps {
  item: any;
  removeOnPress: () => void;
}

const ServiceItem = (props: ServiceItemProps) => {
  return (
    <View style={{}}>
      <View style={SERVICE_ITEM_CONTAINER}>
        <View style={SERVICE_ITEM_SUB_CONTAINER}>
          <Text style={SERVICE_TEXT_STYLE}>
            {capitalizeFirstLetter(props?.item?.Name)}
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              paddingHorizontal: '1.5%',
            }}
            activeOpacity={0.63}>
            <Text style={REMOVE_BTN_TEXT_STYLE}>Remove</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '20%',
          }}>
          <Text style={PRICE_TEXT_STYLE}>{`£${parseFloat(
            props?.item.Price,
          ).toFixed(2)}`}</Text>
        </View>
      </View>
      {props?.item?.Label === '' ? (
        <></>
      ) : (
        <>
          <Text style={lableStyle}>
            {capitalizeFirstLetter(props?.item?.Label)}
          </Text>
        </>
      )}
    </View>
  );
};

export default ServiceItem;
