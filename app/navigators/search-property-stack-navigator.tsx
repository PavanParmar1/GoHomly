import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPropertyScreen from '../Screens/search-property';
import PropertyDetailsScreen from '../Screens/property-details/property-details-screen';
import SeeAllScreen from '../Screens/home_2/see-all';
import BookingDetails from '../Screens/booking-details';
import SearchScreenV2 from '../Screens/search_v2';
import Map from '../Screens/map';
import ReviewScreen from '../Screens/review';
import ProceedToBooking from '../Screens/proceed-to-booking';
import PriceSummary from '../Screens/price-summary';
import Payment from '../Screens/payment';
import Events from '../Screens/events';
import InappWebview from '../Screens/inapp-webview';
import GuestBookPdf from '../Screens/guest-book-pdf';
import OwnerProperty from '../Screens/owner-property';

export type NavigatorParamList = {
  searchScreen: undefined;
  mySavedPropertyDetail: undefined;
  searchPropertyScreen: undefined;
  bookingDetails: undefined;
  seeAll: undefined;
  map: any;
  webview: undefined;
  reviewScreen: undefined;
  proceedToBooking: undefined;
  Payment: undefined;
  PaymentSuccess: undefined;
  PriceSummary: undefined;
  events: undefined;
  GuestBookPdf: undefined;
  ownerProperty: undefined;
  propertydetails: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const SearchPropertyStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        // headerTransparent: true,
        // headerShadowVisible: false,
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName="searchScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="bookingDetails"
        component={BookingDetails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="searchScreen"
        component={SearchScreenV2}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="ownerProperty"
        component={OwnerProperty}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="searchPropertyScreen"
        component={SearchPropertyScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="mySavedPropertyDetail"
        component={PropertyDetailsScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="propertydetails"
        component={PropertyDetailsScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="Payment"
        component={Payment}
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
        name="seeAll"
        component={SeeAllScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="reviewScreen"
        component={ReviewScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="events"
        component={Events}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="webview"
        component={InappWebview}
      />
      <Stack.Screen options={{headerShown: true}} name="map" component={Map} />
    </Stack.Navigator>
  );
};
