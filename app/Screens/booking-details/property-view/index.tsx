import * as React from 'react';
import {View} from 'react-native';
import NearbyPropertiesItem from '../../../../.storybook/stories/nearby-properties/nearby-properties-item';
import styles from './styles';
import {Divider} from '@rneui/base-edge';

const propertyData = {
  id: 1,
  imagePath: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/property.png',
  },
  address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
  apartmentType: 'Entire Studio Apartment',
  owner: 'Mercedes Vito',
  description: '1 bedroom | 2 bathroom',
};
// interface PropertyViewProps {
//   searchText?: string | '123465';
// }

export const PropertyView = () => {
  //props: PropertyViewProps
  // const {searchText} = props;
  return (
    <View style={styles.mainViewStyle}>
      {/* <View style={styles.titleMainView}>
        <Text style={styles.title}>
          {searchText !== undefined ? searchText : 123456}
        </Text>
      </View> */}
      <View style={styles.propertyView}>
        <NearbyPropertiesItem
          item={propertyData}
          containerStyle={styles.nearbyStyleOverride}
        />
      </View>
      {/* <View style={styles.dividerStyle} /> */}
      <Divider color={'#777777'} />
    </View>
  );
};
