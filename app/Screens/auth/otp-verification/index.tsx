import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import {App} from '../../../../assets/images/map';
// import {Button} from '@rn-community/button';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast, showToast} from '../../../utils/common/Toast';
import {CommonActions, useRoute} from '@react-navigation/native';
import {Root} from '../../../rematch/types/store.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/app-navigator';
import crashlytics from '@react-native-firebase/crashlytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import ForgotStyle from './styles';

type OtpNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'otpVerification'
>;

interface OtpProps {
  navigation: OtpNavigationProp;
}

const OtpVerification: React.FC<OtpProps> = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const loading = useSelector((state: Root) => state.loading);

  const dispatch = useDispatch();

  const route: any = useRoute();
  const receivedData = route.params.Email;
  const isFromReset = route.params.isFromReset;

  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  const {
    Font11,
    Font12,
    Font14,
    Font18,
    Font16,
    Font22,
    Font8,
    Font10,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
  } = useSize();
  const styles = ForgotStyle(
    Font12,
    Font14,
    windowWidth,
    windowHeight,
    getWidth,
    Font18,
    Font22,
    Font8,
    Font16,
    Font10,
    Font11,
    getWidthTab,
    orientation,
    dimensions.screen.width,
    Font6,
    Font7,
  );

  function setState(inputcode: string) {
    setVerificationCode(inputcode);
  }

  const ResendOtpHandler = () => {
    try {
      dispatch.Auth.resendOtp(
        {
          LoginId: receivedData,
        },
        (res: any) => {
          if (res.IsSuccess) {
            showToast(res.Message);
          } else {
            showToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().log('Auth || otpVerification || fun: ResendOtpHandler');
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPress = () => {
    Alert.alert(
      'Are you sure you want to exit?',
      'It will discard all the progress',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            navigation.pop();
          },
        },
      ],
      {cancelable: false},
    );
    return true; // Prevent default back button behavior
  };

  const OtpRegex = /[.,-]/;

  const OtpHandler = async () => {
    try {
      if (OtpRegex.test(verificationCode)) {
        showErrorToast('Otp must contain numbers only');
      } else {
        try {
          dispatch.Auth.verifyOtp(
            {
              LoginId: receivedData,
              otp: verificationCode,
            },
            async (res: any) => {
              try {
                if (res.IsSuccess) {
                  // console.log(res, 'IsSuccess');

                  await AsyncStorage.setItem(
                    'AccessToken',
                    res.Data.Token.AccessToken,
                  );
                  await AsyncStorage.setItem(
                    'RefreshToken',
                    res.Data.Token.RefreshToken,
                  );

                  showToast(res.Message);
                  if (isFromReset) {
                    dispatch.Auth.clearUser();
                    navigation.navigate('updatePassword', {
                      otpCode: verificationCode,
                      email: receivedData,
                    });
                  } else {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'home',
                          },
                        ],
                      }),
                    );
                  }

                  setVerificationCode('');
                } else {
                  showErrorToast(res.Message);
                }
              } catch (error: any) {
                crashlytics().log(
                  'Auth || otpVerification || fun: OtpHandler || clearUser',
                );
                crashlytics().recordError(error);
                NewRelic.recordError(error);
              }
            },
          );
        } catch (error: any) {
          crashlytics().log(
            'Auth || otpVerification || fun: OtpHandler || verifyOtp api call',
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);
        }
      }
    } catch (error: any) {
      crashlytics().log(
        'Auth || otpVerification || fun: OtpHandler || validations',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  React.useLayoutEffect(() => {
    function backButtonHandler() {
      Alert.alert(
        'Are you sure you want to exit?',
        ' It will discard all the progress ',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => {
              navigation.pop();
            },
          },
        ],
        {cancelable: false},
      );
    }

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={isTablet() ? styles.navbarHeaderTablet : styles.navbarHeader}
          onPress={backButtonHandler}
          accessible={true}
          accessibilityLabel="Back">
          <Image
            style={styles.navbarImage}
            source={App.Back}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),
      headerShown: true,
      headerTransparent: true,
      gestureEnabled: false,
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableAutomaticScroll={true}>
          <StatusBar barStyle="dark-content" />
          <ScrollView style={styles.screenContainer}>
            <Text style={styles.headerText}>OTP Authentication</Text>
            <Text style={styles.infoText}>
              You are all set up, please click the link in your email address to
              finish the verification process
            </Text>
            <OTPInputView
              style={styles.otpInputView}
              pinCount={4}
              editable={true}
              code={verificationCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={inputcode => {
                setState(inputcode);
              }}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              // onCodeFilled={code => {
              //   // console.log(`Code is ${code}, you are good to go!`);
              // }}
            />
            <Button
              accessibilityLabel="Continue"
              title={'Continue'}
              loading={loading?.effects.Auth.verifyOtp}
              buttonStyle={
                isTablet()
                  ? styles.submitButtonTablet
                  : styles.submitButtonContainer
              }
              titleStyle={styles.submitButtonText}
              onPress={() => {
                OtpHandler();
              }}
            />

            <Button
              accessibilityLabel="Resend OTP"
              type={'clear'}
              loading={loading?.effects.Auth.resendOtp}
              containerStyle={styles.otpButtonContainer}
              titleStyle={styles.otpTitle}
              title={'Resend OTP'}
              onPress={ResendOtpHandler}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      {/* <Toast config={toastConfig} /> */}
    </>
  );
};

export default OtpVerification;
