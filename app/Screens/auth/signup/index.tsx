import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../../../.storybook/stories/input-field/input-field';
import {isTablet} from 'react-native-device-info';
import Modal from 'react-native-modal';
import {App} from '../../../../assets/images/map';
import {Fonts} from '../../../utils/common';
import CheckBoxComponent from '../../../../.storybook/stories/check-box/check-box';
// import TermsConditions from '../../../../.storybook/stories/terms';
import {Button} from '../../../../.storybook/stories/button/button';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../../utils/common/Toast';
import {signUpType} from './signUpTypes';
import {NavigatorParamList} from '../../../navigators/app-navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '../../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import SignUpStyle from './styles';

type SignUpNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'signup'
>;

interface SignUpProps {
  navigation: SignUpNavigationProp;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font10,
    Font11,
    Font14,
    Font12,
    Font16,
    Font18,
    getWidthTab,
    getWidth,
    Font6,
    Font7,
    Font8,
  } = useSize();
  const styles = SignUpStyle(
    Font10,
    Font11,
    Font16,
    Font18,
    Font14,
    getWidth,
    windowWidth,
    Font12,
    getWidthTab,
    screenWidth,
    orientation,
    Font6,
    Font7,
    Font8,
  );

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const [phone, setPhone] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('44');
  const phoneInput = useRef<PhoneInput>(null);

  const [passwordIcon, setPasswordIcon] = useState<string>('eye-off');
  const [secureText, setSecureText] = useState<boolean>(true);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  // const [referralCode, setReferralCode] = useState<string>('');

  const [isCheckedTerms, setCheckedTerms] = useState<boolean>(false);
  const [isCheckedTerms1, setCheckedTerms1] = useState<boolean>(false);
  const checkboxSize =
    orientation === 'landscape' && windowWidth === screenWidth
      ? getWidthTab(20)
      : isTablet()
        ? getWidthTab(40)
        : getWidth(25);

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [terms] = useState<string>('');

  const toggleModal = () => {
    // setModalVisible(!isModalVisible);
    // setTerms('terms');
    navigation.navigate('termsAndCondition', {type: 'terms'});
  };

  const toggleModal2 = () => {
    // setModalVisible(!isModalVisible);
    // setTerms('privacy');
    navigation.navigate('termsAndCondition', {type: 'privacy'});
  };

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

  function iconToggler() {
    if (passwordIcon === 'eye-off') {
      setPasswordIcon('eye');
      setSecureText(false);
    } else {
      setPasswordIcon('eye-off');
      setSecureText(true);
    }
  }

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneNumberRegex = /[.,-]/;

  const validateFields = () => {
    try {
      let isFormValid: boolean = false;
      if (firstname.trim().length === 0) {
        showErrorToast('First Name is required');
      } else if (lastname.trim().length === 0) {
        showErrorToast('Last Name is required');
      } else if (email.trim().length === 0) {
        showErrorToast('Email is required');
      } else if (!regex.test(email)) {
        showErrorToast('Please enter valid Email!');
      } else if (phone.trim().length === 0) {
        showErrorToast('Phone number is required!');
      } else if (phone.trim().length !== 10) {
        showErrorToast('Enter valid phone number!');
      } else if (phoneNumberRegex.test(phone)) {
        showErrorToast('Phone number must contain numbers only');
      } else if (password.length === 0) {
        showErrorToast('Password is required!');
      } else if (password.length < 6) {
        showErrorToast('Password should be at least 6 characters long!');
      } else if (!isCheckedTerms) {
        showErrorToast('Please accept the Terms & Conditions');
      }
      // else if (referralCode.length !== 0 && referralCode.length !== 6) {
      //   showErrorToast('Enter valid referral code');
      // }
      else {
        isFormValid = true;
      }
      return isFormValid;
    } catch (error: any) {
      crashlytics().log('Auth || SignUp || fun: validateFields');
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  const HandleSignUp = () => {
    try {
      if (validateFields()) {
        try {
          dispatch.Auth.signUp(
            {
              firstName: firstname,
              lastName: lastname,
              fullName: firstname + lastname,
              email: email,
              loginId: email,
              password: password,
              confirmPassword: password,
              mobileNo: `+${formattedValue}${phone}`,
              address: '16 Rex Pl, London W1K 2HB, UK',
              accountRefferalCode: '',
              flgOptInForMarketing: isCheckedTerms1,
            },
            (res: signUpType) => {
              if (res.IsSuccess) {
                // console.log(res, 'resSignup---------');
                navigation.push('otpVerification', {Email: email});
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setPhone('');
                // setReferralCode('');
                setFormattedValue('44'); // Reset formattedValue here
                setCheckedTerms(false);
                setCheckedTerms1(false);
                crashlytics().setUserId(email);
                crashlytics().setAttributes({
                  email: email,
                  firstname: firstname,
                  lastname: lastname,
                  PhoneNumber: formattedValue + phone,
                });
              } else if (res?.Data === null) {
                showErrorToast(res.Message);
              } else if (res?.Data?.FlgVerified === false) {
                showErrorToast(res.Message);
                navigation.push('otpVerification', {Email: email});
              } else {
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          crashlytics().log(
            'Auth || SignUp || fun: handleSignUp || signUp api Call',
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);
        }
      }
    } catch (error: any) {
      crashlytics().log('Auth || SignUp || fun: handleSignUp');
      crashlytics().recordError(error);
      NewRelic.recordError(error);
    }
  };

  const scrollViewRef: any = useRef();
  const [scrollOffset, setScrollOffset] = useState<any>(null);
  const handleOnScroll = (event: any) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
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
    });
  }, [navigation]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableAutomaticScroll={true}
          style={{width: '100%'}}>
          {/* <ScrollView style={styles.scrollView}> */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assets/images/Logo.png')}
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="hapa logo"
              style={[{height: getImageHeight(), width: getImageWidth()}]}
            />
            <Text style={styles.infoText}>Create a new account</Text>
          </View>
          <InputField
            placeholder={''}
            value={firstname}
            maxLength={30}
            keyboardType="default"
            label={'First Name'}
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.containerTablet : styles.containerPhone
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={(val: string) => setFirstName(val)}
          />

          <InputField
            placeholder={''}
            value={lastname}
            maxLength={30}
            keyboardType="default"
            label={'Last Name'}
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.containerTablet : styles.containerPhone
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={(val: string) => setLastName(val)}
          />

          <InputField
            placeholder={''}
            value={email}
            keyboardType="email-address"
            label={'Email Address'}
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.containerTablet : styles.containerPhone
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={(val: string) => setEmail(val)}
          />

          <Text style={styles.label}>
            Mobile Number<Text style={styles.compulsory}>*</Text>
          </Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phone}
            value={phone}
            defaultCode={formattedValue}
            // onChangeFormattedText={text => {
            //   setFormattedValue(text);
            // }}
            layout="second"
            onChangeText={text => {
              if (/^\d{0,10}$/.test(text) && text.length <= 10) {
                setPhone(text);
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
                    {marginTop: '1.3%'},
                    {
                      marginHorizontal: '21%',
                      width: '58%',
                    },
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
                orientation === 'landscape' &&
                dimensions.screen.width === dimensions.window.width
                  ? Font6
                  : isTablet()
                    ? Font11
                    : Font16,
              includeFontPadding: false,
              textAlignVertical: 'center',
              fontWeight: '400',
              color: colors.textPrimary,
              // backgroundColor:"pink"
            }}
            codeTextStyle={{
              fontFamily: Fonts.SFProRounded.Regular,
              fontSize:
                orientation === 'landscape' &&
                dimensions.screen.width === dimensions.window.width
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
              height:
                orientation === 'landscape' &&
                dimensions.screen.width === dimensions.window.width
                  ? (windowWidth / 100) * (isTablet() ? 5 : 13)
                  : (windowWidth / 100) * (isTablet() ? 8 : 13),
              marginRight: 0,
              backgroundColor: 'transparent',
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

          <InputField
            placeholder={''}
            value={password}
            autoCapitalize={'none'}
            secureTextEntry={secureText}
            label={'Password'}
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.containerTablet : styles.containerPhone
            }
            inputContainerStyle={
              isTablet() ? styles.inputContainerTablet : {paddingEnd: '0%'}
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
                  accessibilityLabel="password Eye"
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            }
            rightIconContainerStyle={styles.iconContainerStyle}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={(val: string) => setPassword(val)}
          />

          {/* <InputField
            placeholder={''}
            value={referralCode}
            keyboardType="default"
            label={'Referral Code (Optional)'}
            labelStyle={styles.labels}
            containerStyle={
              isTablet() ? styles.containerTablet : styles.containerPhone
            }
            inputContainerStyle={isTablet() && styles.inputContainerTablet}
            inputStyle={styles.inputStyle}
            type="border"
            onChangeText={(val: string) => {
              setReferralCode(val);
            }}
          /> */}

          <View
            style={
              isTablet() ? styles.termsContainerTablet : styles.termsContainer
            }>
            <CheckBoxComponent
              checkedIcon="checkbox-outline"
              uncheckedIcon="square-outline"
              size={checkboxSize}
              iconType="ionicon"
              checkedColor={colors.secondary}
              uncheckedColor={colors.secondary}
              title={' '}
              checkedTitle={' '}
              checked={isCheckedTerms}
              containerStyle={styles.checkboxContainer}
              onValueChange={isSelected => {
                setCheckedTerms(isSelected);
                // console.log(isCheckedTerms);
              }}
            />
            <View>
              <Text style={styles.terms}>
                By creating an account, you agree to our
              </Text>
              <View style={styles.conditionContainer}>
                <Pressable onPress={toggleModal}>
                  <Text style={styles.condition}>
                    Terms{/*  & Conditions */}
                  </Text>
                </Pressable>

                <Text
                  style={[
                    styles.condition,
                    {color: colors.textPrimary, textDecorationLine: 'none'},
                  ]}>
                  {' '}
                  &{' '}
                </Text>

                <Pressable onPress={toggleModal2}>
                  <Text style={styles.condition}>Privacy Policy</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View
            style={
              isTablet()
                ? styles.partnersContainerTablet
                : styles.partnersContainer
            }>
            <CheckBoxComponent
              checkedIcon="checkbox-outline"
              uncheckedIcon="square-outline"
              size={checkboxSize}
              iconType="ionicon"
              checkedColor={colors.secondary}
              uncheckedColor={colors.secondary}
              title={' '}
              checkedTitle={' '}
              checked={isCheckedTerms1}
              containerStyle={styles.checkboxContainer}
              onValueChange={isSelected => {
                setCheckedTerms1(isSelected);
                // console.log(isCheckedTerms);
              }}
            />
            <View style={{marginBottom: '5%'}}>
              <Text style={styles.terms}>
                Keep me up to date on exclusive offers by
              </Text>

              <Text
                style={[
                  styles.condition,
                  {textDecorationLine: 'none', color: colors.textPrimary},
                ]}>
                HAPA and its Partners.
              </Text>

              {/* <Pressable onPress={toggleModal2}>
                <Text style={styles.condition}>HAPA and its Partners. </Text>
              </Pressable> */}
            </View>
          </View>

          <Button
            accessibilityLabel="Sign Up"
            loading={loading?.effects.Auth.signUp}
            containerStyle={
              isTablet()
                ? styles.signUpButtonContainerTablet
                : styles.signUpButtonContainer
            }
            buttonStyle={
              isTablet()
                ? styles.createAccountButtonTablet
                : styles.createAczcountButton
            }
            titleStyle={styles.signUpText}
            title={'Sign Up'}
            onPress={HandleSignUp}
          />

          <Modal
            isVisible={isModalVisible}
            avoidKeyboard={true}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection={['down']}
            scrollTo={handleScrollTo}
            scrollOffset={scrollOffset}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            style={styles.modalView}>
            <View style={styles.filterModalContainer}>
              <Text style={styles.termText}>
                {terms === 'terms' ? 'TERMS AND CONDITIONS' : 'PRIVACY POLICY'}
              </Text>
              <ScrollView
                ref={scrollViewRef}
                onScroll={handleOnScroll}
                scrollEventThrottle={16}>
                {/* <TermsConditions policyTag={terms} /> */}
              </ScrollView>
            </View>
          </Modal>
          {/* </ScrollView> */}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
