import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import serviceAnimalCardStyle from './service-animal-card.presets';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

const ServiceAnimalCard = () => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font12,
    Font16,
    Font8,
    Font14,
    Font20,
    Font7,
    Font9,
    Font4,
    Font5,
    Font6,
    getWidthTab,
    getWidth,
    getHeight,
  } = useSize();
  const styles = serviceAnimalCardStyle(
    getWidth,
    getHeight,
    getWidthTab,
    windowWidth,
    Font12,
    Font16,
    Font10,
    Font14,
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      scrollEventThrottle={16}
      style={styles.CONTAINER_STYLE}>
      <Image
        style={styles.IMAGE_STYLE}
        resizeMode="cover"
        source={require('../../../assets/images/animal_service.png')}
      />
      <View style={{padding: '2%', backgroundColor: 'white'}}>
        <Text style={styles.TEXT_STYLE}>Assistance Dogs</Text>
        <Text style={[styles.SUB_TEXT_STYLE, {marginTop: '3%'}]}>
          If you are accompanied by an assistance dog, please do not toggle the
          'pets' option. Assistance dogs are not considered pets but are
          essential for guests with disabilities. We kindly ask you to inform us
          about your assistance dog. This will enable us to make the necessary
          arrangements to support you and your assistance dog effectively during
          your stay.
        </Text>
        {/* <Text style={SUB_TEXT_STYLE}>
          Travelling with an emotional support animal.
        </Text> */}
      </View>
    </ScrollView>
  );
};

export default ServiceAnimalCard;
