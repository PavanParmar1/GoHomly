import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/profile';
import PersonalInformation from '../Screens/personal-information';
import PreferenceScreen from '../Screens/preference';
import Referrals from '../Screens/referrals';
import PrivacyPolicy from '../Screens/privacy-policy';
import PropertyCancellationPolicy from '../Screens/property-cancellation-policy';
import PropertyBookingPolicy from '../Screens/property-booking-policy';
import FriendList from '../Screens/friend-list';
import PaymentCards from '../Screens/payment-cards';

export type NavigatorParamList = {
  profile: undefined;
  personalInfo: undefined;
  preference: undefined;
  referrals: undefined;
  privacyPolicy: undefined;
  propertyBookingPolicy: undefined;
  propertyCancellationPolicy: undefined;
  friendList: undefined;
  paymentCards: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerShadowVisible: false,
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }}
      initialRouteName="profile">
      <Stack.Screen
        options={{headerShown: true}}
        name="profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="personalInfo"
        component={PersonalInformation}
      />
      <Stack.Screen
        options={{headerShown: true, headerLeft: () => null}}
        name="preference"
        component={PreferenceScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="referrals"
        component={Referrals}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="privacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="propertyCancellationPolicy"
        component={PropertyCancellationPolicy}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="propertyBookingPolicy"
        component={PropertyBookingPolicy}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="friendList"
        component={FriendList}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="paymentCards"
        component={PaymentCards}
      />
    </Stack.Navigator>
  );
};
