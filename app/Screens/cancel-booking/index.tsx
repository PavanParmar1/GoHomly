import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {App} from '../../../assets/images/map';
// import {Button} from '@rn-community/button';
import Footer from '../../../.storybook/stories/footer-background/footer';
import PaymentRefundDetails from '../../../.storybook/stories/payment-refund-details/payment-refund-details';
import {colors} from '../../theme';
import {styles} from './styles';
import ModifyBookingRefund from '../../../.storybook/stories/modify-booking-refund/modify-booking-refund';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {Button} from '../../../.storybook/stories/button/button';

const bookingFee = '5000.00';
const cleaning = '50.00';
const breakfast = '50.00';
const cancellationFee = '100.00';

export default function CancelBooking({navigation, route}) {
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
      headerTitle: () => (
        <Text style={navbarTitle}>{route?.params?.title}</Text>
      ),
    });
  }, [navigation, route]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{backgroundColor: 'black'}}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.outerContainer}>
        {route.params.title === 'Modify Booking' && (
          <ModifyBookingRefund
            previousBookingAmount={2344}
            updatedBookingAmount={1000}
          />
        )}
        {route.params.title !== 'Modify Booking' && (
          <PaymentRefundDetails
            bookingFee={bookingFee}
            cleaningFee={cleaning}
            Breakfast={breakfast}
            cancellationFee={cancellationFee}
          />
        )}
        <Button
          title={'Proceed'}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonContainer}
          onPress={() => navigation.push('PaymentSuccess', {type: 1})}
        />

        <View style={styles.termsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.push('termsAndCondition', {type: 1})}>
            <View style={styles.viewmin}>
              <Text style={styles.textstyle}>Refund Terms</Text>
              <Image
                source={require('../../../assets/images/arrow_right.png')}
                style={styles.rightIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.push('termsAndCondition', {type: 2})}>
            <View style={styles.viewmin}>
              <Text style={styles.textstyle}>Cancelation Terms</Text>
              <Image
                source={require('../../../assets/images/arrow_right.png')}
                style={styles.rightIcon}
              />
            </View>
          </TouchableOpacity>

          <Text
            ellipsizeMode="clip"
            numberOfLines={1}
            style={{
              color: colors.textSecondary,
            }}>
            .......................................................................................................................................................................................................
            .........................................................................................
          </Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
