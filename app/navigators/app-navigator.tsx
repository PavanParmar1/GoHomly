import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/auth/login';
import TabNavigator from './tab-navigator';
import ResetPassword from '../Screens/auth/reset-password';
import OtpVerification from '../Screens/auth/otp-verification';
import SetNewPassword from '../Screens/auth/set-new-password';
import SignUp from '../Screens/auth/signup';
import Welcome from '../Screens/auth/welcome';
import GuestLogin from '../Screens/auth/guest-login';
import Toast from 'react-native-toast-message';
import UpdatePassword from '../Screens/auth/update-password';
import TermsAndCondition from '../Screens/term-condition';
import {setCurrentScreenName} from 'react-native-clarity';
import TestScreen from '../Screens/auth/TestScreen';
import NewRelic from 'newrelic-react-native-agent';
import {colors} from '../theme';

export type NavigatorParamList = {
  welcome: undefined;
  login: undefined;
  otpVerification: any;
  resetPassword: undefined;
  setNewPassword: undefined;
  home: undefined;
  search: undefined;
  bookingDetails: undefined;
  signup: undefined;
  guestLogin: undefined;
  updatePassword: any;
  termsAndCondition: any;
  testScreen: any;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
        headerShadowVisible: false,
        gestureEnabled: true,
        headerBackVisible: false,
        headerTitleAlign: 'center',
        // navigationBarColor: 'translucent',
        // navigationBarHidden: true,
      }}
      initialRouteName="welcome">
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="guestLogin" component={GuestLogin} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="resetPassword" component={ResetPassword} />
      <Stack.Screen name="updatePassword" component={UpdatePassword} />
      <Stack.Screen name="otpVerification" component={OtpVerification} />
      <Stack.Screen name="setNewPassword" component={SetNewPassword} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="testScreen" component={TestScreen} />

      <Stack.Screen
        name="termsAndCondition"
        component={TermsAndCondition}
        options={{headerShown: true, headerTransparent: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const navigationRef: any = useNavigationContainerRef();
  const routeNameRef: any = React.useRef();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <>
      <NavigationContainer
        theme={MyTheme}
        ref={navigationRef}
        {...props}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute()?.name;
          // console.log('routeNameRef', routeNameRef.current);
          setCurrentScreenName(routeNameRef.current);
        }}
        onStateChange={() => {
          NewRelic.onStateChange;
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            routeNameRef.current = currentRouteName;
            setCurrentScreenName(currentRouteName);
            // console.log('routeNameRef', routeNameRef.current);
          }
        }}>
        <AppStack />
      </NavigationContainer>
      <Toast />
    </>
  );
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
