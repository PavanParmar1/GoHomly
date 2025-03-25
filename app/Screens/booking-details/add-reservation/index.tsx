import * as React from 'react';
import {Alert, View, Text, Platform} from 'react-native';
// import {Button} from '@rn-community/button';
import styles from './styles';
import {Divider} from '@rneui/base-edge';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import {TextField} from '../../../../.storybook/stories/TextField';


export const AddReservation = () => {
  return isTablet() ? (
    <View style={styles.mainViewStyle}>
      <Text style={styles.title1}>{'Add Your Reservation Number'}</Text>
      <View style={styles.reser_number1}>
        <View style={styles.view501T}>
          <TextField
            viewMode="large"
            inputStyle={styles.inputStyle}
            label=" "
            labelStyle={styles.lableStyle}
            placeholder={'2222 8751 5684'}
            placeholderTextColor={'#777777'}
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.containerstyle1}
          />
        </View>
        <View style={styles.view50T}>
          <Button
            type={'clear'}
            title={'Submit'}
            buttonStyle={{
              marginRight: Platform.OS === 'android' ? 10 : 15,
            }}
            titleStyle={styles.buttonTitleStyle1}
            onPress={() => Alert.alert('pressed')}
          />
        </View>
      </View>
      {/* <View style={styles.divider} /> */}
      <Divider color={'#777777'} />
    </View>
  ) : (
    <View style={styles.mainViewStyle}>
      <Text style={styles.title1}>{'Add Your Resevation Number'}</Text>
      <View style={styles.reser_number1}>
        <View style={styles.view501}>
          <TextField
            viewMode="large"
            inputStyle={styles.inputStyle}
            label=" "
            labelStyle={styles.lableStyle}
            placeholder={'2222 8751 5684'}
            placeholderTextColor={'#777777'}
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.containerstyle}
          />
        </View>
        <View style={styles.view50}>
          <Button
            title={'Submit'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() => Alert.alert('pressed')}
          />
        </View>
      </View>
      {/* <View style={styles.divider} /> */}
      <Divider color={'#777777'} />
    </View>
  );
};
