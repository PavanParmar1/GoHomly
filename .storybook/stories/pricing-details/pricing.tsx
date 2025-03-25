import React from 'react';
import {Text, View} from 'react-native';
import {PricingDetailsProps} from './pricing.props';
import {
  CONTAINER,
  DATACONTAINER,
  TITLE_CONTAINER,
  TITLE,
  SUB_HEADING,
  TEXT,
  GENERALDATACONTAINER,
  SMALL_DESCRIPTION,
  DIVIDER,
  DATACONTAINER1,
} from './pricing.presets';
import {Divider} from '@rneui/base-edge';

export default function PastBookingDetail(props: PricingDetailsProps) {
  const general = props.general;
  const total = props.total;
  const tax = props.tax;
  const extraServices = props.extraServices;
  const totalPrice = props.totalPrice;
  return (
    <View style={CONTAINER}>
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE}>Pricing Detail</Text>
      </View>
      <View style={GENERALDATACONTAINER}>
        <Text style={SUB_HEADING}>{general}</Text>
      </View>
      <View style={DATACONTAINER}>
        <Text style={SUB_HEADING}>Total :</Text>
        <Text style={TEXT}>{'\u00A3 ' + total}</Text>
      </View>
      <Divider style={DIVIDER} color={'#777777'} />

      <View style={DATACONTAINER}>
        <Text style={SUB_HEADING}>Tax :</Text>
        <Text style={TEXT}>{'\u00A3 ' + tax}</Text>
      </View>
      <Divider style={DIVIDER} color={'#777777'} />

      <View style={DATACONTAINER}>
        <View>
          <Text style={SUB_HEADING}>Extra Services :</Text>
          <Text style={SMALL_DESCRIPTION}>
            (Room Cleaning, Cook, Toilet Cleaning)
          </Text>
        </View>
        <Text style={TEXT}>{'\u00A3 ' + extraServices}</Text>
      </View>

      <Divider style={DIVIDER} color={'#777777'} />

      <View style={DATACONTAINER1}>
        <Text style={SUB_HEADING}>Total Price :</Text>
        <Text style={TEXT}>{'\u00A3 ' + totalPrice}</Text>
      </View>
    </View>
  );
}
