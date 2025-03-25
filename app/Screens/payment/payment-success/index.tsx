import React from 'react';
import {Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {App} from '../../../../assets/images/map';
import PaymentStatusWithDetails from '../../../../.storybook/stories/payment-status-with-details/payment-status-with-details';
import SuccessPaymentStatus from '../../../../.storybook/stories/success-payment-status/success-payment-status';
import {getWidth, getWidthTab, successFullFlag} from '../../../utils/common';
import {styles} from './styles';
import {
  navbarHeader,
  navbarImage,
  navbarTitle,
} from '../../../utils/common/size';
import {Button} from '../../../../.storybook/stories/button/button';
import Footer from '../../../../.storybook/stories/footer-background/footer';

const reservationNumber = '0000 8888 4578 ';
const transactionNumber = '7854269245';
export default function PaymentSuccess({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Hello,Jean'}</Text>,
    });
  }, [navigation]);
  // const onPressMyBookingItem = v => {
  //   console.log('v >', v);
  //   navigation.navigate('myBookingPropertyDetail');
  // };
  console.log(successFullFlag);

  function getTitle(value: number) {
    if (value === 1) {
      return 'Success';
    } else if (value === 2) {
      return 'Success';
    } else if (value === 3) {
      return 'Success';
    }
  }

  function getDesc(value: number) {
    if (value === 1) {
      return 'Thanks, Your property booked successfully!';
    } else if (value === 2) {
      return 'Thanks, You booking information is updated.';
    } else if (value === 3) {
      return 'We have successfully received your request to cancel booking!';
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'black'}}
      contentContainerStyle={{flexGrow: 1}}
      bounces={false}>
      <View style={styles.outerContainer}>
        <View style={{marginTop: isTablet() ? getWidthTab(90) : getWidth(80)}}>
          <SuccessPaymentStatus
            type={route.params.type}
            Title={getTitle(successFullFlag)}
            message={getDesc(successFullFlag)}
          />
        </View>
        <View style={{marginTop: isTablet() ? getWidthTab(60) : getWidth(28)}}>
          <PaymentStatusWithDetails
            reservationNumber={reservationNumber}
            transactionNumber={transactionNumber}
          />
        </View>
        <Button
          title={'Book More Property'}
          titleStyle={isTablet() && styles.buttonTextTablet}
          onPress={() => navigation.popToTop()}
          buttonStyle={styles.buttonContainer}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}
