import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropertyOwenerStyle from './property-owner.presets';
import {capitalizeFirstLetter} from '../../../app/utils/common';
import {sendWhatsApp} from '../../../app/utils/common/sendWhatsApp';
import {callNumber} from '../../../app/utils/common/callNumber';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export default function PropertyOwner(props: any) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font11,
    Font12,
    Font14,
    Font16,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = PropertyOwenerStyle(
    getWidth,
    windowWidth,
    Font10,
    Font11,
    Font12,
    Font14,
    Font16,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
  );

  const owner = {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/owner.png',
  };
  const phone = require('../../../assets/images/phone.png');
  const chat = require('../../../assets/images/chat.png');
  return (
    <View style={[styles.CONTAINER, props.containerStyle]}>
      <View style={styles.HEADER_CONTAINER}>
        <Text style={styles.HEADER}>Property Owner</Text>
      </View>
      <View style={styles.OWNER_CONTAINER}>
        <View style={styles.INNER_CONTAINER}>
          {/* <FastImage source={owner} style={OWNER_IMAGE} resizeMode={'cover'} /> */}
          <View style={styles.INFO_CONTAINER}>
            <Text style={styles.TITLE}>
              {capitalizeFirstLetter(props?.name || '')}
            </Text>
            <Text style={styles.SUB_TITLE}>Owner</Text>
          </View>
        </View>
        <View style={styles.ICONS_CONTAINER}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="call the property Manager"
            style={{
              height: isTablet() ? getWidthTab(48) : getWidth(48),
              width: isTablet() ? getWidthTab(48) : getWidth(48),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => callNumber(props.number)}>
            <Image source={phone} style={styles.ICON} />
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Chat with property Manager"
            style={{
              height: isTablet() ? getWidthTab(48) : getWidth(48),
              width: isTablet() ? getWidthTab(48) : getWidth(48),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => sendWhatsApp(props.number)}>
            <Image source={chat} style={styles.ICON} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Divider style={DIVIDER} color={'#777777'} /> */}
      {/* <Divider style={DIVIDER} /> */}
    </View>
  );
}
