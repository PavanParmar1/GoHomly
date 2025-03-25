import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import {Button} from '@rn-community/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast, showToast} from '../../../utils/common/Toast';
import {App} from '../../../../assets/images/map';
import {Root} from '../../../rematch/types/store.types';
import crashlytics from '@react-native-firebase/crashlytics';
import useUser from '../../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import SetNewPasswordStyle from './styles';

export default function SetNewPassword({navigation}: {navigation: any}) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {Font11, Font12, Font16, getWidthTab, getWidth, Font6, Font7, Font8} =
    useSize();
  const styles = SetNewPasswordStyle(
    Font11,
    Font12,
    Font16,
    windowWidth,
    getWidth,
    getWidthTab,
    orientation,
    screenWidth,
    Font6,
    Font7,
    Font8,
  );

  const [currentPasswordIcon, setCurrentPasswordIcon] = useState('eye-off');
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [retypPasswordIcon, setRetypePasswordIcon] = useState('eye-off');
  const [secureCurrentPasswordText, setSecureCurrentPasswordText] =
    useState(true);
  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureRetypePasswordText, setSecureRetypePasswordText] =
    useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

  const loading = useSelector((state: Root) => state.loading);

  // const objChangePassword = useSelector(
  //   (state: any) => state.Auth.changePassword,
  // );

  const dispatch = useDispatch();
  const {logOut} = useUser();

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

  function currentIconToggler() {
    if (currentPasswordIcon === 'eye-off') {
      setCurrentPasswordIcon('eye');
      setSecureCurrentPasswordText(false);
    } else {
      setCurrentPasswordIcon('eye-off');
      setSecureCurrentPasswordText(true);
    }
  }

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
      // navigation.popToTop();
      if (currentPassword === password && currentPassword === retypedPassword) {
        showErrorToast('Please Enter Different Password');
      } else if (password !== retypedPassword) {
        showErrorToast('Password and Confirm Password must be same');
      } else {
        try {
          dispatch.Auth.changePassword(
            {
              OldPassword: currentPassword,
              NewPassword: password,
              ConfirmPassword: retypedPassword,
            },
            (res: any) => {
              if (res.IsSuccess) {
                showToast(res.Message);
                setCurrentPassword('');
                setPassword('');
                setRetypePasswordIcon('');
                navigation.popToTop();
              } else {
                showErrorToast(res.Message);
                if (res?.response?.status === 401) {
                  logOut();
                }
              }
            },
          );
        } catch (error: any) {
          crashlytics().log(
            'Auth || SetNewPassword || fun: submitButtonHandler || changePassword api Call',
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);
        }
      }
    } catch (error: any) {
      crashlytics().log(
        'Auth || SetNewPassword || fun: submitButtonHandler || validations',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  }

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
    });
  }, [navigation]);

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
              style={[{height: getImageHeight(), width: getImageWidth()}]}
            />
            <Text style={styles.logoText}>Set New Password</Text>
          </View>

          <InputField
            placeholder={''}
            value={currentPassword}
            autoCapitalize={'none'}
            secureTextEntry={secureCurrentPasswordText}
            label={'Enter Current Password'}
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
              name: currentPasswordIcon,
              size:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? getWidthTab(19)
                  : isTablet()
                    ? getWidth(11)
                    : getWidth(16),
              onPress: currentIconToggler,
            }}
            rightIconContainerStyle={styles.passwordIconContainerStyle}
            type="border"
            onChangeText={val => setCurrentPassword(val)}
          />

          <InputField
            placeholder={''}
            autoCapitalize={'none'}
            value={password}
            secureTextEntry={securePasswordText}
            label={'Enter New Password'}
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
            placeholder={''}
            value={retypedPassword}
            autoCapitalize={'none'}
            secureTextEntry={secureRetypePasswordText}
            label={'Confirm New Password'}
            labelStyle={styles.label_text_style}
            inputStyle={styles.label_text_style}
            containerStyle={
              isTablet()
                ? styles.passwordTextInputTablet
                : styles.passwordTextInput
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
            loading={loading.effects.Auth.changePassword}
            buttonStyle={
              isTablet()
                ? styles.submitButtonTablet
                : styles.submitPasswordButton
            }
            titleStyle={isTablet() && styles.submitTextTablet}
            onPress={submitButtonHandler}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
