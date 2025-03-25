import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {Button} from '@rn-community/button';
import PersonalInfoStyle from './personal-info.presets';
import Footer from '../footer-background/footer';
import InputField from '../input-field/input-field';

import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showErrorToast, showToast} from '../../../app/utils/common/Toast';
import useUser from '../../../app/hooks/useUser';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import LoginStyle from '../../../app/Screens/auth/login/styles';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export interface updateType {
  IsSuccess: boolean;
  Message: string;
  TotalCount: number;
}

export default function PersonalInfo(props: any) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    getWidth,
    getWidthTab,
    Font11,
    Font12,
    Font14,
    Font16,
    Font18,
    Font24,
    Font7,
  } = useSize();
  const style = PersonalInfoStyle(
    getWidth,
    getWidthTab,
    windowWidth,
    Font11,
    Font12,
    Font14,
    Font16,
    Font18,
    Font24,
    screenWidth,
    orientation,
    Font7,
  );

  const styles = LoginStyle(
    dimensions.window.width,
    Font11,
    Font16,
    getWidth,
    Font18,
    Font12,
    getWidthTab,
  );

  const [firstName, setFirstName] = useState<string>(props?.firstName || '');
  const [lastName, setLastName] = useState<string>(props?.lastName || '');
  const [email, setEmail] = useState<string>(props?.email || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(
    props?.phoneNumber || '',
  );

  const dispatch = useDispatch();
  const {logOut} = useUser();

  const onConfirm = () => {
    dispatch.Auth.updateProfile(
      {
        id: props.id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        fullName: firstName + lastName,
        phoneNumber: phoneNumber,
        address: 'london',
      },
      (res: updateType) => {
        console.log(res, 'Response----------');
        if (res.IsSuccess) {
          console.log('res.IsSuccess', res);
          showToast(res.Message);
          props.onPress();
        } else {
          console.log('res.IsSuccess is not true:', res.IsSuccess);
          showErrorToast(res.Message);
          if (res?.response?.status === 401) {
            logOut();
          }
        }
      },
    );
  };

  return (
    <View style={style.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableAutomaticScroll={true}
        contentContainerStyle={{
          backgroundColor: 'white',
          flexGrow: 1,
          paddingBottom: '5%',
        }}>
        <View style={style.innerContainer}>
          <InputField
            maxLength={30}
            placeholder={'Jane'}
            keyboardType="default"
            value={firstName}
            label={
              <Text style={style.labels}>
                First Name
                {/* <Text style={compulsory}>*</Text> */}
              </Text>
            }
            containerStyle={style.inputContainer}
            inputContainerStyle={isTablet() && style.INPUT_CONTAINER_TAB}
            inputStyle={style.inputStyle}
            type="border"
            onChangeText={val => setFirstName(val)}
          />
          <InputField
            placeholder={'Cooper'}
            maxLength={30}
            value={lastName}
            label={
              <Text style={style.labels}>
                Last Name
                {/* <Text style={compulsory}>*</Text> */}
              </Text>
            }
            containerStyle={style.inputContainer}
            inputContainerStyle={isTablet() && style.INPUT_CONTAINER_TAB}
            inputStyle={style.inputStyle}
            type="border"
            onChangeText={val => setLastName(val)}
          />
          <InputField
            placeholder={'janecooper@gmail.com'}
            value={email}
            disabled={true}
            keyboardType="email-address"
            label={
              <Text style={style.labels}>
                Email Address
                {/* <Text style={compulsory}>*</Text> */}
              </Text>
            }
            labelStyle={style.labels}
            containerStyle={style.inputContainer}
            inputContainerStyle={[
              style.INPUT_CONTAINER_TAB,
              {backgroundColor: 'rgba(0, 0, 0, 0.06)'},
              ,
            ]}
            inputStyle={style.inputStyle}
            type="border"
            onChangeText={val => setEmail(val)}
          />
          <InputField
            placeholder={'+1 956 356 5623'}
            value={phoneNumber}
            keyboardType="numeric"
            disabled={true}
            label={
              <Text style={style.labels}>
                Mobile Number
                {/* <Text style={compulsory}>*</Text> */}
              </Text>
            }
            containerStyle={style.inputContainer}
            inputContainerStyle={[
              style.INPUT_CONTAINER_TAB,
              {backgroundColor: 'rgba(0, 0, 0, 0.06)'},
            ]}
            inputStyle={style.inputStyle}
            type="border"
            onChangeText={val => setPhoneNumber(val)}
          />

          <View
            style={{
              flex: 1,
              // justifyContent: 'flex-end',
              width:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? '100%'
                  : '100%',
            }}>
            <Button
              accessibilityLabel="Login"
              loading={false}
              containerStyle={
                isTablet()
                  ? [
                      styles.loginButtonContainerTablet,

                      {marginTop: getWidthTab(50), marginHorizontal: '0%'},
                    ]
                  : [
                      styles.loginButtonContainer,
                      {
                        marginHorizontal: '5.5%',
                        marginTop: getWidth(30),
                      },
                    ]
              }
              buttonStyle={
                isTablet()
                  ? [
                      styles.loginButtonTablet,
                      {
                        height:
                          orientation === 'landscape' &&
                          windowWidth === screenWidth
                            ? (windowWidth / 100) * 5
                            : (windowWidth / 100) * 8,
                      },
                    ]
                  : styles.loginButton
              }
              titleStyle={
                isTablet()
                  ? [
                      styles.loginTextTablet,
                      {
                        fontSize:
                          orientation === 'landscape' &&
                          screenWidth === windowWidth
                            ? Font7
                            : Font12,
                      },
                    ]
                  : styles.loginText
              }
              title={'Save'}
              onPress={() => onConfirm()}
            />

            {/* <TouchableOpacity
              style={saveButton}
              activeOpacity={0.8}
              onPress={() => {}}>
              <Text style={loginText}>Save</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <Footer />
      </KeyboardAwareScrollView>
    </View>
  );
}
