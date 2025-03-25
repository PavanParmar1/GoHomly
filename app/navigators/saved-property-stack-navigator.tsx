import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SavedPropertyBookingDetail from '../Screens/saved-property-booking-detail';
import PropertyDetailsScreen from '../Screens/property-details/property-details-screen';
import OwnerProperty from '../Screens/owner-property';
import GuestBookPdf from '../Screens/guest-book-pdf';
// import PropertyDetails from '../screens/property-details';
// import PropertyDetailsScreen from '../screens/property-details/property-details-screen';
// PropertyDetailsScreen;
export type NavigatorParamList = {
  savedPropertyBookingDetail: undefined;
  mySavedPropertyDetail: undefined;
  ownerProperty: undefined;
  GuestBookPdf: undefined;
  propertydetails: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const SavedPropertyStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,
        // headerShadowVisible: false,
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName="savedPropertyBookingDetail">
      <Stack.Screen
        options={{headerShown: true}}
        name="savedPropertyBookingDetail"
        component={SavedPropertyBookingDetail}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="mySavedPropertyDetail"
        component={PropertyDetailsScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="ownerProperty"
        component={OwnerProperty}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="GuestBookPdf"
        component={GuestBookPdf}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="propertydetails"
        component={PropertyDetailsScreen}
      />
    </Stack.Navigator>
  );
};
