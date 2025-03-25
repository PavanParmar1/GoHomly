import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/home_2';
import PropertyDetailsScreen from '../Screens/property-details/property-details-screen';
import Notification from '../Screens/notification';
import Messages from '../Screens/messages';
import SeeAllScreen from '../Screens/home_2/see-all';
import Map from '../Screens/map';
import Events from '../Screens/events';
import InappWebview from '../Screens/inapp-webview';
import CheckOutScreen from '../Screens/check-out';
import FindYourBooking from '../Screens/find-your-booking';
import Payment from '../Screens/payment';
import PaymentSuccess from '../Screens/payment/payment-success';
import ReviewScreen from '../Screens/review';
import AddGuest from '../Screens/add-guest';
import ViewDoc from '../Screens/view-document';
import GetInProperty from '../Screens/get-in-property';
import ProceedToBooking from '../Screens/proceed-to-booking';
import PriceSummary from '../Screens/price-summary';
import OwnerProperty from '../Screens/owner-property';
import GuestBookPdf from '../Screens/guest-book-pdf';
export interface notificationParams {
  isfrom: string;
}

export type NavigatorParamList = {
  HomeScreen: undefined;
  propertydetails: any;
  ownerProperty: undefined;
  notification: notificationParams;
  messages: undefined;
  seeAll: undefined;
  map: undefined;
  events: undefined;
  webview: undefined;
  checkOutScreen: undefined;
  findYourBooking: undefined;
  Payment: undefined;
  PaymentSuccess: undefined;
  reviewScreen: undefined;
  AddGuest: undefined;
  ViewDocument: undefined;
  GetInProperty: undefined;
  proceedToBooking: undefined;
  PriceSummary: undefined;
  GuestBookPdf: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        headerTitle: '',
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="ownerProperty"
        component={OwnerProperty}
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
        name="PriceSummary"
        component={PriceSummary}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="checkOutScreen"
        component={CheckOutScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="notification"
        component={Notification}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="messages"
        component={Messages}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="AddGuest"
        component={AddGuest}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="GetInProperty"
        component={GetInProperty}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="ViewDocument"
        component={ViewDoc}
      />

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
        name="seeAll"
        component={SeeAllScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="events"
        component={Events}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="reviewScreen"
        component={ReviewScreen}
      />

      <Stack.Screen options={{headerShown: true}} name="map" component={Map} />
      <Stack.Screen
        options={{headerShown: true}}
        name="webview"
        component={InappWebview}
      />
    </Stack.Navigator>
  );
};
