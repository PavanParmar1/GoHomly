import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {
  IMAGE,
  MESSAGE,
  TITLE,
  INNER_CONTAINER,
  CONTAINER,
} from './success-payment-status.presets';
import {SuccessPaymentStatusProps} from './success-payment-status.props';

export default function SuccessPaymentStatus(props: SuccessPaymentStatusProps) {
  const [title, setTitle] = useState('Success');
  const [message, setMessage] = useState(
    'Woah, successfully completed booking.',
  );

  var successImage;
  const getImage = (type:any) => {
    if (type === 1) {
      successImage = require('../../../assets/images/success.png');
      return successImage;
    } else if (type === 0) {
      successImage = require('../../../assets/images/failed.png');
      return successImage;
    }
  };

  useEffect(() => {
    if (props.type === 0) {
      setTitle('Failed!');
      setMessage('Failed message goes here..');
    }
  }, [props.type]);

  return (
    <View style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <Image source={getImage(1)} style={IMAGE} />
        <Text style={TITLE}>{props.Title || title}</Text>
        <Text style={MESSAGE}>{props.message || message}</Text>
      </View>
    </View>
  );
}
