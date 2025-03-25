import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Fonts} from '../../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../../.storybook/stories/button/button';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../../utils/common/Toast';
import Toast from 'react-native-toast-message';
import {Root} from '../../../rematch/types/store.types';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import {colors} from '../../../theme';
// import {App} from '../../../../assets/images/map';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import GuestLoginStyle from './styles';

export interface GuestLoginProps {
  onPress?: () => void;
  onSuccess?: (res: any) => void;
  onFailure?: (res: any) => void;
}

export default function GuestLogin({onSuccess, onFailure}: GuestLoginProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font11,
    Font15,
    Font8,
    Font18,
    Font16,
    Font6,
    Font7,
    getWidth,
    getWidthTab,
  } = useSize();
  const styles = GuestLoginStyle(
    Font11,
    Font16,
    windowWidth,
    getWidth,
    Font18,
    Font15,
    getWidthTab,
    Font8,
    orientation,
    screenWidth,
    Font6,
    Font7,
  );

  const [eamilId, setEmailId] = useState<string>('');
  // const [bookingId, setBookingId] = useState('');

  const [value, setValue] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('44');

  const phoneInput = useRef<PhoneInput>(null);

  const loading = useSelector((state: Root) => state.loading);

  const dispatch = useDispatch();

  const getImageWidth = () => {
    let imageWidth = (159 * dimensions.window.width) / 375;
    if (isTablet()) {
      if (
        orientation === 'landscape' &&
        dimensions.screen.width === dimensions.window.width
      ) {
        imageWidth = (120 * dimensions.window.width) / 834;
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
        imageHeight = (50 * dimensions.window.width) / 834;
      } else {
        imageHeight = (143 * dimensions.window.width) / 834;
      }
    }
    return imageHeight;
  };
  const onPressGuestLogin = () => {
    try {
      if (eamilId.trim().length === 0) {
        showErrorToast('Please enter booking id');
      } else if (value.trim().length === 0) {
        showErrorToast('Please enter phone number');
      } else if (value.trim().length !== 10) {
        showErrorToast('Please enter valid phone number');
      } else {
        try {
          dispatch.Auth.guestLogin(
            {
              bookingRef: eamilId,
              // mobileNo: formattedValue.replace('+', ''),
              mobileNo: '+' + formattedValue + value,
            },
            (res: any) => {
              console.log(res, 'GuestLoginResponse');
              console.log(JSON.stringify(res), 'GuestLoginResponse');
              if (res.IsSuccess) {
                onSuccess(res);
              } else {
                onFailure(res);
              }
            },
          );
        } catch (error: any) {
          crashlytics().log(
            'Auth || GuestLogin || fun: onPressGuestLogin || guestLogin api call',
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);
        }
      }
    } catch (error: any) {
      crashlytics().log(
        'Auth || GuestLogin || fun: onPressGuestLogin validations',
      );
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          enableAutomaticScroll={true}
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../../assets/images/Logo.png')}
                resizeMode="contain"
                style={[{height: getImageHeight(), width: getImageWidth()}]}
              />
              <Text style={styles.logoText}>Connect Your Booking Details</Text>
            </View>
            <InputField
              accessible={true}
              accessibilityLabel="Provide Booking Id to Connect Your Booking"
              placeholder={''}
              value={eamilId}
              label={'Booking ID'}
              inputStyle={{
                fontSize:
                  orientation === 'landscape' && screenWidth === windowWidth
                    ? Font6
                    : isTablet()
                      ? Font11
                      : Font16,
                fontWeight: '400',
                fontFamily: Fonts.SFProRounded.Regular,
              }}
              containerStyle={
                isTablet()
                  ? styles.emailAddressTextInputTablet
                  : styles.emailAddressTextInput
              }
              type="border"
              onChangeText={(val: any) => setEmailId(val)}
              labelStyle={styles.labels}
              inputContainerStyle={isTablet() && styles.inputContainerTablet}
            />

            <Text style={styles.label}>Mobile Number</Text>
            <PhoneInput
              accessible={true}
              accessibilityLabel="Provide the number to connect Your Booking"
              ref={phoneInput}
              defaultValue={value}
              defaultCode={formattedValue}
              value={value}
              layout="second"
              onChangeText={(text: any) => {
                if (/^\d{0,10}$/.test(text) && text.length <= 10) {
                  setValue(text);
                }
              }}
              onChangeCountry={(text: any) => {
                setFormattedValue(text.callingCode);
              }}
              containerStyle={
                isTablet()
                  ? [
                      styles.inputTypeContainerDefault,
                      styles.containerTablet,
                      styles.inputContainerTablet,
                      {marginTop: '1.5%'},
                      {marginHorizontal: '21%', width: '58%'},
                    ]
                  : [styles.inputTypeContainerDefault]
              }
              textContainerStyle={{
                backgroundColor: 'transparent',
                paddingHorizontal: 0,
              }}
              textInputStyle={{
                width: 2000,
                height: (windowWidth / 100) * (isTablet() ? 8 : 13),
                fontFamily: Fonts.SFProRounded.Regular,
                fontSize:
                  orientation === 'landscape' && screenWidth === windowWidth
                    ? Font6
                    : isTablet()
                      ? Font11
                      : Font16,
                includeFontPadding: false,
                textAlignVertical: 'center',
                fontWeight: '400',
                color: colors.textPrimary,
                // backgroundColor: 'pink',
              }}
              codeTextStyle={{
                fontFamily: Fonts.SFProRounded.Regular,
                fontSize:
                  orientation === 'landscape' && screenWidth === windowWidth
                    ? Font6
                    : isTablet()
                      ? Font11
                      : Font16,
                includeFontPadding: false,
                textAlignVertical: 'center',
                fontWeight: '400',
                color: colors.textPrimary,
              }}
              countryPickerButtonStyle={{
                marginRight: 0,
                backgroundColor: 'transparent',
                height:
                  orientation === 'landscape' &&
                  dimensions.screen.width === dimensions.window.width
                    ? (windowWidth / 100) * (isTablet() ? 5 : 13)
                    : (windowWidth / 100) * (isTablet() ? 8 : 13),
                width:
                  orientation === 'landscape' &&
                  dimensions.screen.width === dimensions.window.width
                    ? '15%'
                    : isTablet()
                      ? '25%'
                      : '30%',
              }}
              placeholder={' '}
            />

            <Button
              accessibilityLabel="Connect"
              loading={loading.effects.Auth.guestLogin}
              containerStyle={
                isTablet()
                  ? styles.signUpButtonContainerTablet
                  : styles.signUpButtonContainer
              }
              buttonStyle={
                isTablet() ? styles.loginButtonTablet : styles.loginButton
              }
              titleStyle={
                isTablet() ? styles.loginTextTablet : styles.loginText
              }
              title={'Connect'}
              onPress={() => onPressGuestLogin()}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <Toast />
    </>
  );
}
