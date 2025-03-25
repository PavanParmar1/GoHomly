import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginStyle from './styles';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import {App} from '../../../../assets/images/map';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../../utils/common/Toast';
import {loginType} from './loginTypes';
import {Root} from '../../../rematch/types/store.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/app-navigator';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import crashlytics from '@react-native-firebase/crashlytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';

type LoginNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'login'
>;

interface LoginProps {
  navigation: LoginNavigationProp;
}
const Login: React.FC<LoginProps> = ({navigation}) => {
  const {dimensions, orientation} = useOrientation();
  const {
    Font11,
    Font12,
    Font18,
    Font16,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
  } = useSize();
  const styles = LoginStyle(
    dimensions.window.width,
    Font11,
    Font16,
    getWidth,
    Font18,
    Font12,
    getWidthTab,
    orientation,
    dimensions.screen.width,
    Font6,
    Font7,
    Font8,
  );
  const [passwordIcon, setPasswordIcon] = useState<string>('eye-off');
  const [secureText, setSecureText] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loading = useSelector((state: Root) => state.loading);
  const dispatch = useDispatch();

  const getImageWidth = () => {
    let imageWidth = (159 * dimensions.window.width) / 375;
    if (isTablet()) {
      if (
        orientation === 'landscape' &&
        dimensions.screen.width === dimensions.window.width
      ) {
        imageWidth = (150 * dimensions.window.width) / 834;
      } else {
        imageWidth = (221 * dimensions.window.width) / 834;
      }
    }
    return imageWidth;
  };

  const getImageHeight = () => {
    let imageHeight = (68 * dimensions.window.width) / 375;
    if (isTablet()) {
      if (
        orientation === 'landscape' &&
        dimensions.screen.width === dimensions.window.width
      ) {
        imageHeight = (70 * dimensions.window.width) / 834;
      } else {
        imageHeight = (143 * dimensions.window.width) / 834;
      }
    }
    return imageHeight;
  };

  // console.log(windowWidth);

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validateLoginFields() {
    try {
      if (userName.trim().length === 0) {
        showErrorToast('Email is required');
        return false;
      } else if (!regex.test(userName.trim())) {
        showErrorToast('Please enter valid Email');
        return false;
      } else if (password.length === 0) {
        showErrorToast('Password is required');
        return false;
      } else if (password.length < 6) {
        showErrorToast('Password should be at least 6 characters long');
        return false;
      }
      return true;
    } catch {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Auth || Login || fun: validateLoginFields');
    }
  }

  const openHomeScreen = async () => {
    if (validateLoginFields()) {
      dispatch.Auth.signIn(
        {
          LoginId: userName.trim(),
          Password: password,
        },
        async (res: loginType) => {
          try {
            if (res.IsSuccess) {
              console.log(res, 'loginResponse');

              await AsyncStorage.setItem(
                'AccessToken',
                res.Data.Token.AccessToken,
              );
              await AsyncStorage.setItem(
                'RefreshToken',
                res.Data.Token.RefreshToken,
              );

              crashlytics().setUserId(userName);
              crashlytics().setAttributes({
                email: userName,
              });

              // navigation.dispatch(
              //   CommonActions.reset({
              //     index: 0,
              //     routes: [
              //       {
              //         name: 'home',
              //       },
              //     ],
              //   }),
              // );
              navigation.navigate('home');
              crashlytics().setUserId(userName);
              crashlytics().setAttributes({
                email: userName,
              });
              NewRelic.setUserId(userName);

              setUserName('');
              setPassword('');
            } else if (res.Data !== null && res?.Data?.FlgVerified === false) {
              showErrorToast(res?.Message);
              navigation.push('otpVerification', {Email: userName});
            } else {
              showErrorToast(res?.Message);
            }
          } catch (error: any) {
            crashlytics().recordError(error);
            NewRelic.recordError(error);
            crashlytics().log('Auth || Login || fun: openHomeScreen');
            console.error('AsyncStorage error:', error);
          }
        },
      );
    }
  };

  function iconToggler() {
    if (passwordIcon === 'eye-off') {
      setPasswordIcon('eye');
      setSecureText(false);
    } else {
      setPasswordIcon('eye-off');
      setSecureText(true);
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={isTablet() ? styles.navbarHeaderTablet : styles.navbarHeader}
          onPress={() => navigation.navigate('welcome')}>
          <Image
            style={styles.navbarImage}
            source={App.Back}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),
      headerShown: true,
      headerTransparent: false,
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableAutomaticScroll={true}
          style={{width: '100%'}}>
          <StatusBar barStyle="dark-content" backgroundColor={'white'} />
          {/* <View style={[styles.container1]}>
            <Text>{orientation}</Text>
            <Text style={styles.header}>Window Dimensions</Text>
            {Object.entries(dimensions.window).map(([key, value]) => (
              <Text>
                {key} - {value}
              </Text>
            ))}
            <Text style={styles.header}>Screen Dimensions</Text>
            {Object.entries(dimensions.screen).map(([key, value]) => (
              <Text>
                {key} - {value}
              </Text>
            ))}
          </View> */}
          <View>
            {/* <Toast /> */}
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../../assets/images/Logo.png')}
                resizeMode="contain"
                accessible={true}
                accessibilityLabel="hapa logo"
                style={[
                  {
                    height: getImageHeight(),
                    width: getImageWidth(),
                  },
                ]}
              />
              <Text style={styles.logoText}>Login to your account here</Text>
            </View>
            <InputField
              placeholder={''}
              accessible={true}
              accessibilityLabel="Email InputField"
              value={userName}
              keyboardType="email-address"
              label={'Email Address/Phone Number'}
              inputStyle={{
                fontSize:
                  orientation === 'landscape' &&
                  dimensions.screen.width === dimensions.window.width
                    ? Font6
                    : isTablet()
                      ? Font11
                      : Font16,
              }}
              containerStyle={
                isTablet()
                  ? styles.userNameTextInputTablet
                  : styles.userNameTextInput
              }
              type="border"
              onChangeText={(val: string) => setUserName(val)}
              labelStyle={styles.labels}
              inputContainerStyle={isTablet() && styles.inputContainerTablet}
            />
            <InputField
              accessible={true}
              accessibilityLabel="Password InputField"
              placeholder={''}
              value={password}
              label={'Password'}
              autoCapitalize={'none'}
              secureTextEntry={secureText}
              inputStyle={{
                fontSize:
                  orientation === 'landscape' &&
                  dimensions.screen.width === dimensions.window.width
                    ? Font6
                    : isTablet()
                      ? Font11
                      : Font16,
              }}
              labelStyle={styles.labels}
              containerStyle={
                isTablet()
                  ? styles.passwordTextInputTablet
                  : styles.passwordTextInput
              }
              rightIcon={
                <TouchableOpacity
                  style={{
                    width: isTablet() ? getWidthTab(55) : getWidth(48),
                    height: isTablet() ? getWidthTab(55) : getWidth(48),
                    // backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    iconToggler();
                    setShowPassword(!showPassword);
                  }}>
                  <Image
                    source={
                      showPassword
                        ? require('../../../../assets/images/passwordshow.png')
                        : require('../../../../assets/images/passwordhide.png')
                    }
                    accessible={true}
                    accessibilityLabel="Password Eye"
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              }
              rightIconContainerStyle={styles.iconContainerStyle}
              type="border"
              onChangeText={(val: string) => setPassword(val)}
              inputContainerStyle={
                isTablet() ? styles.inputContainerTablet : {paddingEnd: '0%'}
              }
            />
            <Button
              accessibilityLabel="forgot password"
              type={'clear'}
              containerStyle={styles.forgotPassword}
              titleStyle={styles.forgotPasswordText}
              title={'Forgot Password?'}
              onPress={() => navigation.navigate('resetPassword')}
            />
            <Button
              accessibilityLabel="Login"
              loading={loading.effects.Auth.signIn}
              containerStyle={
                isTablet()
                  ? styles.loginButtonContainerTablet
                  : styles.loginButtonContainer
              }
              buttonStyle={
                isTablet() ? styles.loginButtonTablet : styles.loginButton
              }
              titleStyle={
                isTablet() ? styles.loginTextTablet : styles.loginText
              }
              title={'Login'}
              onPress={openHomeScreen}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Don't have an account ? Sign Up"
              style={styles.newAccount}
              onPress={() => navigation.navigate('signup')}>
              <Text style={styles.newAccountText}>
                Don't have an account ?{' '}
                <Text style={styles.signUpText}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
