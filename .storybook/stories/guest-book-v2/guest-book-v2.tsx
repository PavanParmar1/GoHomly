import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GuestBookPropsV2} from './guest-book-v2.props';
import GuestBookStyle from './guest-book-v2.presets';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
const GuestBook2 = (props: GuestBookPropsV2) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    getWidth,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font20,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
  } = useSize();
  const styles = GuestBookStyle(
    getWidth,
    getWidthTab,
    windowWidth,
    Font10,
    Font12,
    Font14,
    Font20,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
  );

  return (
    <>
      <View style={styles.CONTAINER}>
        <View style={styles.HEADER_CONTAINER}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'yellow',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/images/book_icon.png')}
                style={[styles.ICON, {tintColor: 'black'}]}
              />
              <Text style={styles.TITLE}>{'Guest Book'}</Text>
            </View>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="guestBook"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'pink',
                height: isTablet() ? getWidthTab(48) : getWidth(48),
                width: isTablet() ? getWidthTab(48) : getWidth(48),
                // backgroundColor: 'pink',
              }}
              onPress={props.onPress}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/images/pdf_icon.png')}
                style={styles.ICON_PDF}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.SUBTITLE}>
            {'Find all your answers related to this property.'}
          </Text>
        </View>
      </View>
    </>
  );
};

export default GuestBook2;
