import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {App} from '../../../../assets/images/map';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast, showToast} from '../../../utils/common/Toast';
import {Root} from '../../../rematch/types/store.types';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import ResetPasswordStyle from './styles';

export default function ResetPassword({navigation}: {navigation: any}) {
  const dispatch = useDispatch();

  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font10,
    Font11,
    Font12,
    Font16,
    Font18,
    getWidthTab,
    getWidth,
    Font8,
    Font6,
    Font7,
  } = useSize();
  const styles = ResetPasswordStyle(
    Font10,
    Font11,
    Font12,
    Font16,
    Font18,
    windowWidth,
    getWidthTab,
    getWidth,
    screenWidth,
    orientation,
    Font8,
    Font6,
    Font7,
  );
  const [registeredEmailOrNumber, setRegisteredEmailOrNumber] =
    useState<string>('');

  const loading = useSelector((state: Root) => state.loading);

  const getImageWidth = () => {
    let imageWidth = (159 * windowWidth) / 375;

    if (isTablet()) {
      if (
        orientation === 'landscape' &&
        dimensions.screen.width === dimensions.window.width
      ) {
        imageWidth = (150 * dimensions.window.width) / 834;
      } else {
        imageWidth = (221 * windowWidth) / 834;
      }
    }

    return imageWidth;
  };
  const getImageHeight = () => {
    let imageHeight = (68 * windowWidth) / 375;
    if (isTablet()) {
      if (
        orientation === 'landscape' &&
        dimensions.screen.width === dimensions.window.width
      ) {
        imageHeight = (70 * dimensions.window.width) / 834;
      } else {
        imageHeight = (143 * windowWidth) / 834;
      }
    }
    return imageHeight;
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={isTablet() ? styles.navbarHeaderTablet : styles.navbarHeader}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.navbarImage}
            source={App.Back}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),
      headerShown: true,
      headerTransparent: false,
      gestureEnabled: false,
    });
  }, [navigation]);

  function resetInputHandler() {
    try {
      if (registeredEmailOrNumber.trim().length !== 0) {
        /*
        numeric regex for Uk based phone number
        patternForMail is for simple mail check
        */
        // const numericRegex = /^((\+44)|(0)) ?\d{4} ?\d{6}$/;
        const patternForMail =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (
          patternForMail.test(registeredEmailOrNumber.trim() as string) === true
        ) {
          try {
            dispatch.Auth.forgotPassword(
              {
                loginId: registeredEmailOrNumber,
              },
              (res: any) => {
                if (res.IsSuccess) {
                  showToast(res.Message);
                  navigation.navigate('otpVerification', {
                    Email: registeredEmailOrNumber.trim(),
                    isFromReset: true,
                  });
                  setRegisteredEmailOrNumber('');
                } else {
                  showErrorToast(res.Message);
                }
              },
            );
          } catch (error: any) {
            crashlytics().log(
              'Auth || ResetPassword || fun: resetInputHandler || forgotPassword api Call ',
            );
            crashlytics().recordError(error);
            NewRelic.recordError(error);
          }
        } else {
          showErrorToast('Please enter valid Email');
        }
      } else {
        showErrorToast('Email is required');
      }
    } catch (error: any) {
      crashlytics().log(
        'Auth || ResetPassword || fun: resetInputHandler || validations ',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableAutomaticScroll={true}>
          <StatusBar barStyle="dark-content" />
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
            <Text style={styles.logoText}>Reset Password</Text>
          </View>
          <InputField
            placeholder={''}
            autoCapitalize={'none'}
            value={registeredEmailOrNumber}
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
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.emailTextInputTablet : styles.emailTextInput
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            type="border"
            onChangeText={(val: string) => setRegisteredEmailOrNumber(val)}
          />
          <Button
            accessibilityLabel="Submit"
            title={'Submit'}
            loading={loading.effects.Auth.forgotPassword}
            containerStyle={
              isTablet()
                ? styles.loginButtonContainerTablet
                : styles.loginButtonContainer
            }
            buttonStyle={
              isTablet() ? styles.loginButtonTablet : styles.loginButton
            }
            titleStyle={isTablet() ? styles.loginTextTablet : styles.loginText}
            onPress={resetInputHandler}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.newAccount}
              onPress={() => navigation.pop()}>
              <Text style={styles.newAccountText}>
                Have an account ? <Text style={styles.signUpText}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      {/* <Toast config={toastConfig} /> */}
    </>
  );
}
