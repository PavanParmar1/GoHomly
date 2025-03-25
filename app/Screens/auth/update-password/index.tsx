import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
// import {Button} from '@rn-community/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast, showToast} from '../../../utils/common/Toast';
import {App} from '../../../../assets/images/map';
import {useRoute} from '@react-navigation/native';
import {Root} from '../../../rematch/types/store.types';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import UpdatePasswordStyle from './styles';

export default function UpdatePassword({navigation}: {navigation: any}) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font11,
    Font12,
    Font16,
    Font18,
    Font14,
    Font22,
    Font8,
    Font6,
    Font7,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = UpdatePasswordStyle(
    Font11,
    Font12,
    Font16,
    windowWidth,
    getWidth,
    getWidthTab,
    Font14,
    Font22,
    Font8,
    Font18,
    orientation,
    screenWidth,
    Font6,
    Font7,
  );

  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [retypPasswordIcon, setRetypePasswordIcon] = useState('eye-off');
  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureRetypePasswordText, setSecureRetypePasswordText] =
    useState(true);
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

  const loading = useSelector((state: Root) => state.loading);

  const dispatch = useDispatch();

  const route: any = useRoute();
  const otpCode = route.params.otpCode;
  const email = route.params.email;

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

  function iconToggler() {
    if (passwordIcon === 'eye-off') {
      setPasswordIcon('eye');
      setSecurePasswordText(false);
    } else {
      setPasswordIcon('eye-off');
      setSecurePasswordText(true);
    }
  }
  function iconTogglerRetyped() {
    if (retypPasswordIcon === 'eye-off') {
      setRetypePasswordIcon('eye');
      setSecureRetypePasswordText(false);
    } else {
      setRetypePasswordIcon('eye-off');
      setSecureRetypePasswordText(true);
    }
  }
  function submitButtonHandler() {
    try {
      if (password.trim().length === 0) {
        showErrorToast('Password is required');
      } else if (password.trim().length < 6) {
        showErrorToast('Password should be at least 6 characters long');
      } else if (retypedPassword.trim().length === 0) {
        showErrorToast('Please confirm the password');
      } else if (password !== retypedPassword) {
        showErrorToast('Password and Confirm Password must be same');
      } else {
        try {
          dispatch.Auth.updatePassword(
            {
              LoginId: email,
              ConfirmedOTP: otpCode,
              Password: retypedPassword,
            },
            (res: any) => {
              if (res.IsSuccess) {
                setPassword('');
                setRetypedPassword('');
                setRetypePasswordIcon('eye-off');
                setPasswordIcon('eye-off');
                setSecurePasswordText(true);
                setSecureRetypePasswordText(true);

                showToast(res.Message);

                navigation.navigate('login');
              } else {
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          crashlytics().log(
            'Auth || UpdatePassword || fun: updatePassword || updatePassword apiCall',
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);
        }
      }
    } catch (error: any) {
      crashlytics().log(
        'Auth || UpdatePassword || fun: updatePassword || validations',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPress = () => {
    try {
      dispatch.Auth.clearUser();
      navigation.navigate('login');
      return true;
    } catch (error: any) {
      crashlytics().log(
        'Auth || UpdatePassword || fun: handleBackPress || clearUser',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={isTablet() ? styles.navbarHeaderTablet : styles.navbarHeader}
          onPress={() => {
            dispatch.Auth.clearUser();
            navigation.navigate('login');
          }}>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView enableAutomaticScroll={true}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assets/images/Logo.png')}
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="hapa logo"
              style={[{height: getImageHeight(), width: getImageWidth()}]}
            />
            <Text style={styles.logoText}>Set New Password</Text>
          </View>
          <InputField
            placeholder={''}
            value={password}
            autoCapitalize={'none'}
            secureTextEntry={securePasswordText}
            label={'Create New Password'}
            labelStyle={styles.label_text_style}
            inputStyle={styles.label_text_style}
            containerStyle={
              isTablet()
                ? styles.passwordTextInputTablet
                : styles.passwordTextInput
            }
            rightIcon={{
              type: 'feather',
              name: passwordIcon,
              size:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? getWidthTab(19)
                  : isTablet()
                    ? getWidth(11)
                    : getWidth(16),
              onPress: iconToggler,
            }}
            rightIconContainerStyle={styles.passwordIconContainerStyle}
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            type="border"
            onChangeText={val => setPassword(val)}
          />
          <InputField
            autoCapitalize={'none'}
            placeholder={''}
            value={retypedPassword}
            secureTextEntry={secureRetypePasswordText}
            label={'Retype New Password'}
            labelStyle={styles.label_text_style}
            inputStyle={styles.label_text_style}
            containerStyle={
              isTablet()
                ? styles.passwordRetypeTextInputTablet
                : styles.passwordRetypeTextInput
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            rightIcon={{
              type: 'feather',
              name: retypPasswordIcon,
              size:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? getWidthTab(19)
                  : isTablet()
                    ? getWidth(11)
                    : getWidth(16),
              onPress: iconTogglerRetyped,
            }}
            rightIconContainerStyle={styles.passwordIconContainerStyle}
            type="border"
            onChangeText={val => setRetypedPassword(val)}
          />
          <Button
            accessibilityLabel="Submit"
            title={'Submit'}
            loading={loading.effects.Auth.updatePassword}
            buttonStyle={
              isTablet()
                ? styles.submitButtonTablet
                : styles.submitPasswordButton
            }
            titleStyle={isTablet() ? styles.loginTextTablet : styles.loginText}
            onPress={submitButtonHandler}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
