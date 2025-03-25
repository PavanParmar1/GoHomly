/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Alert,
  AppState,
  Platform,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import {getVersion, isTablet} from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../../../.storybook/stories/button/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/app-navigator';
import {Root} from '../../../rematch/types/store.types';
import initialiseFirebase, {database} from '../../../services/Firebase';
import {ref, onValue} from 'firebase/database';
import useLocation from '../../../hooks/useLocation';
import useOrientation from '../../../hooks/useOrientation';
import WelcomeStyle from './style';
import useSize from '../../../hooks/useSize';

type WelcomeNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'welcome'
>;

interface WelcomeProps {
  navigation: WelcomeNavigationProp;
}

let updateAlertPrompt: boolean = false;

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const user = useSelector((state: Root) => state.Auth.auth);
  const persit = useSelector((state: Root) => state._persist);
  const {checkGpsStatus} = useLocation();
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font12,
    Font22,
    Font13,
    Font9,
    getWidth,
    Font18,
    IS_IOS,
    Font7,
    Font8,
  } = useSize();
  const style = WelcomeStyle(
    windowWidth,
    Font12,
    Font22,
    Font13,
    Font9,
    getWidth,
    Font18,
    IS_IOS,
    orientation,
    Font7,
    Font8,
    screenWidth,
  );

  const handleUpdate = () => {
    updateAlertPrompt = false;
    const storeUrl: any = Platform.select({
      ios: 'itms-apps://itunes.apple.com/appstore',
      android: 'market://details?id=com.android.vending',
    });

    Linking.openURL(storeUrl).catch(() => {
      Alert.alert('Error', 'Unable to open the store.');
    });
  };

  useEffect(() => {
    // handleCheckPressed();
    initialiseFirebase();
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        console.log('App has come to the foreground!');
        checkForceUpdate();
        // handleCheckPressed();
        initialiseFirebase();
      }
    });
    checkForceUpdate();
    console.log('called from the welcome');
    checkGpsStatus();
    return () => {
      subscription.remove();
    };
  }, []);

  /* async function handleCheckPressed() {
    if (Platform.OS === 'android') {
      const checkEnabled: boolean = await isLocationEnabled();
      console.log('checkEnabled', checkEnabled);
      handleEnabledPressed();
    }
  } */

  // async function handleEnabledPressed() {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const enableResult = await promptForEnableLocationIfNeeded();
  //       console.log('enableResult', enableResult);
  //       // The user has accepted to enable the location services
  //       // data can be :
  //       //  - "already-enabled" if the location services has been already enabled
  //       //  - "enabled" if user has clicked on OK button in the popup
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         console.error(error.message);
  //         // The user has not accepted to enable the location services or something went wrong during the process
  //         // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
  //         // codes :
  //         //  - ERR00 : The user has clicked on Cancel button in the popup
  //         //  - ERR01 : If the Settings change are unavailable
  //         //  - ERR02 : If the popup has failed to open
  //         //  - ERR03 : Internal error
  //       }
  //     }
  //   }
  // }

  const checkForceUpdate = () => {
    const force_update = ref(database, '/force_update');

    onValue(force_update, snapshot => {
      const data = snapshot.val();

      const variable = {
        android_version: data.android_version,
        ios_version: data.ios_version,
        force_update_flg: data.force_update_flg,
      };

      if (IS_IOS) {
        if (
          variable.force_update_flg &&
          variable.ios_version !== getVersion()
        ) {
          if (updateAlertPrompt == false) {
            showUpdateAlert();
          }
          return true;
        }
      } else {
        if (
          variable.force_update_flg &&
          variable.android_version !== getVersion()
        ) {
          if (!updateAlertPrompt == false) {
            showUpdateAlert();
          }
          return true;
        }
      }
    });

    return false;
  };

  const showUpdateAlert = () => {
    updateAlertPrompt = true;
    Alert.alert(
      'Update Alert!',
      'A new version of the app is available. Please update to continue using the app.',
      [
        {
          text: 'Update',
          onPress: () => handleUpdate(),
        },
      ],
      {cancelable: false},
    );
  };

  const getImageWidth = () => {
    let imageWidth = (303 * windowWidth) / 375;
    if (isTablet()) {
      imageWidth = (711 * windowWidth) / 834;
    }
    return imageWidth;
  };
  const getImageHeight = () => {
    let imageHeight = (653 * windowWidth) / 375;
    if (isTablet()) {
      imageHeight = (1500 * windowWidth) / 834;
    }
    return imageHeight;
  };

  const getImageWidth2 = () => {
    let imageWidth = (303 * windowWidth) / 375;
    if (isTablet()) {
      imageWidth = (711 * windowWidth) / 834;
    }
    return imageWidth;
  };

  const getImageWidth3 = () => {
    let imageWidth = (124 * windowWidth) / 375;
    if (isTablet()) {
      if (orientation === 'landscape' && windowWidth === screenWidth) {
        imageWidth = (150 * windowWidth) / 834;
      } else {
        imageWidth = (250 * windowWidth) / 834;
      }
    }
    return imageWidth;
  };
  const getImageHeight3 = () => {
    let imageHeight = (53 * windowWidth) / 375;
    if (isTablet()) {
      if (orientation === 'landscape' && windowWidth === screenWidth) {
        imageHeight = (70 * windowWidth) / 834;
      } else {
        imageHeight = (110 * windowWidth) / 834;
      }
    }
    return imageHeight;
  };

  useEffect(() => {
    if (persit.rehydrated === true) {
      if (user?.Data && user?.Data?.Token) {
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
      } else {
        console.log('---------2');
      }
    }
  }, [persit, navigation, user?.Data]);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <ImageBackground
        style={[
          {height: getImageHeight(), width: getImageWidth()},
          style.background,
        ]}
        accessible={true}
        accessibilityLabel="splash Screen Image"
        source={require('../../../../assets/images/splashScreen2.png')}
        resizeMode="contain"
      />

      <LinearGradient
        colors={['transparent', 'white']}
        locations={[0, 0.4, 1]}
        style={[{width: getImageWidth2()}, style.innerContainer]}>
        <Image
          source={require('../../../../assets/images/Logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="hapa logo"
          style={[
            {
              height: getImageHeight3(),
              width: getImageWidth3(),
            },
          ]}
        />

        <Text style={style.largeText}>Book Your Perfect Stay!</Text>
        <Text style={style.smallText}>Properties at Your Fingertips</Text>

        {persit.rehydrated == true && !(user?.Data && user?.Data?.Token) && (
          <>
            <View
              style={
                orientation === 'landscape' && windowWidth === screenWidth
                  ? style.buttonContainer_landscape
                  : style.buttonContainer
              }>
              <View style={style.buttonInnerContainer}>
                <Button
                  accessibilityLabel="Log In"
                  buttonStyle={isTablet() ? style.sButtonTablet : style.sButton}
                  titleStyle={isTablet() ? style.btnTextTablet : style.btnText}
                  title={'Log In'}
                  onPress={() => {
                    navigation.navigate('login');
                  }}
                />
              </View>
              <View style={style.buttonInnerContainer2}>
                <Button
                  accessibilityLabel="Sign Up"
                  buttonStyle={isTablet() ? style.sButtonTablet : style.sButton}
                  titleStyle={isTablet() ? style.btnTextTablet : style.btnText}
                  title={'Sign Up'}
                  onPress={() => {
                    navigation.navigate('signup');
                  }}
                />
              </View>
            </View>
          </>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Welcome;
