import * as React from 'react';
import {View, Text} from 'react-native';
// import {Button} from '@rn-community/button';
import ImageButton from '../../../../.storybook/stories/image-button/imagebutton';
import styles from './styles';
import {Divider} from '@rneui/base-edge';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';

export const InputDetails = () => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.titleMainView}>
        <Text style={styles.title}>{'Your Input Details'}</Text>
        <Button
          title={'Edit'}
          titleStyle={styles.buttonTitleStyle}
          type={'clear'}
          buttonStyle={{marginRight: -8}}
          onPress={() => console.log('press')}
        />
      </View>
      <View style={styles.reser_number}>
        <Text style={styles.title1}>{'Reserve Date'}</Text>
        <Text style={styles.title2}>{'14/03/2022 to 17/03/2022'}</Text>
      </View>
      <View style={styles.reser_number}>
        <Text style={styles.title1}>{'Guest Count'}</Text>
        <Text style={styles.title2}>{'John + 2 Person'}</Text>
      </View>
      <View style={styles.reser_number}>
        <Text style={styles.title1}>{'John'}</Text>
        <Text style={styles.title2}>{'Age - 30'}</Text>
      </View>
      <View style={styles.reser_number}>
        <Text style={styles.title1}>{'Id'}</Text>
        <Text style={styles.title2}>{'2232323'}</Text>
      </View>
      <View style={styles.reser_number}>
        <Text style={styles.title1}>{'Guest Book'}</Text>
        <View style={styles.buttonBottom}>
          <ImageButton
            source={
              isTablet()
                ? require('../../../../assets/images/guest_book_tab.png')
                : require('../../../../assets/images/guest_book1.png')
            }
            onPress={() => console.log('hi')}
            containerStyle={styles.buttoncontainerStyle}
            style={styles.buttonstyle}
          />
        </View>
      </View>
      <Divider color={'#777777'} style={styles.dividerstyle} />
      {/* <View style={styles.divider} /> */}
    </View>
  );
};
