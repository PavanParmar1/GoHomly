import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyBookingScreen from '../Screens/my-booking';
import PropertyDetailsScreen from '../Screens/property-details/property-details-screen';
import FindYourBooking from '../Screens/find-your-booking';
import Payment from '../Screens/payment';
import PaymentSuccess from '../Screens/payment/payment-success';
import ModifyBooking from '../Screens/modify-booking';
import CancelBooking from '../Screens/cancel-booking';
import TermsAndCondition from '../Screens/term-condition';
import ProceedToBooking from '../Screens/proceed-to-booking';
import PriceSummary from '../Screens/price-summary';
import OwnerProperty from '../Screens/owner-property';
import GuestBookPdf from '../Screens/guest-book-pdf';

export type NavigatorParamList = {
  myBooking: undefined;
  myBookingPropertyDetail: undefined;
  propertydetails: undefined;
  modifyBooking: undefined;
  Payment: undefined;
  ownerProperty: undefined;
  PaymentSuccess: undefined;
  cancelBooking: undefined;
  termsAndCondition: undefined;
  findYourBooking: undefined;
  proceedToBooking: undefined;
  PriceSummary: undefined;
  GuestBookPdf: undefined;
  ownerPropertydetails: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const MyBookingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,
        // headerShadowVisible: false,
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName="myBooking">
      <Stack.Screen
        options={{headerShown: true}}
        name="myBooking"
        component={MyBookingScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="propertydetails"
        component={PropertyDetailsScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="proceedToBooking"
        component={ProceedToBooking}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="GuestBookPdf"
        component={GuestBookPdf}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="ownerProperty"
        component={OwnerProperty}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="PriceSummary"
        component={PriceSummary}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="myBookingPropertyDetail"
        component={PropertyDetailsScreen}
      />

      <Stack.Screen name="modifyBooking" component={ModifyBooking} />

      <Stack.Screen
        options={{headerShown: true}}
        name="findYourBooking"
        component={FindYourBooking}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="Payment"
        component={Payment}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="PaymentSuccess"
        component={PaymentSuccess}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="cancelBooking"
        component={CancelBooking}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="termsAndCondition"
        component={TermsAndCondition}
      />
    </Stack.Navigator>
  );
};
