import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
export default function EntryCode() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.textAndButtonContainer}>
        <Text style={styles.titleStyle}>Entry Code</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/qrcode.png')}
            style={styles.imagestyle}
          />
          <Text style={styles.seeAllButtonTitle}>7865</Text>
        </View>
      </View>
    </View>
  );
}
