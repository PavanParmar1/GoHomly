import {Divider} from '@rneui/themed-edge';
import React, {useCallback, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ProfileScreenStyle from './styles';
import {navbarTitle} from '../../utils/common/size';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Footer from '../../../.storybook/stories/footer-background/footer';
import crashlytics from '@react-native-firebase/crashlytics';
import ReportModal from './ReportModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Instabug from 'instabug-reactnative';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

// const avatar = {
//   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/Avatar.png',
// };
export default function ProfileScreen({navigation}: {navigation: any}) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  const screenWidth = dimensions.screen.width;
  const {
    getWidth,
    getWidthTab,
    getHeight,
    Font10,
    Font12,
    Font11,
    Font13,
    Font15,
    Font16,
    Font17,
    Font18,
    Font8,
    Font7,
    Font6,
  } = useSize();
  const styles = ProfileScreenStyle(
    getWidth,
    getHeight,
    getWidthTab,
    windowWidth,
    windowHeight,
    Font10,
    Font12,
    Font11,
    Font13,
    Font15,
    Font16,
    Font17,
    Font18,
    Font8,
    Font7,
    orientation,
    screenWidth,
    Font6,
  );

  const userInfo = [
    'Personal Info',
    'Change Password',
    'Report A Problem',
    // 'Referrals',
    // 'Payment Cards',
    // 'Privacy Policy',
    // 'Property Booking Policy',
    // 'Property Cancellation Policy',
    // 'Preference',
  ];
  const dispatch = useDispatch();

  const userDetails = useSelector((state: any) => state.Auth.auth);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const signOut = () => {
    try {
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Sign Out',
            onPress: () => {
              Instabug.logOut();
              dispatch.Auth.signOut();
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'welcome',
                    },
                  ],
                }),
              );
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Profile || ProfileScreen || fun: signOut');
    }
  };

  const ListHeader = () => {
    return (
      <View style={styles.headerContainer}>
        {userDetails && userDetails?.Data ? (
          <>
            {/* <FastImage source={avatar} style={styles.avatar} /> */}
            <View>
              <Text style={styles.title}>{userDetails.Data.FirstName}</Text>
              <Text style={styles.mail}>{userDetails.Data.Email}</Text>
            </View>
          </>
        ) : null}
      </View>
    );
  };

  const ListFooter = () => {
    return (
      <>
        <View style={styles.divider}>
          <Divider color="lightgray" />
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <Footer isVisible={true} style={{backgroundColor: 'white'}} />
      </>
    );
  };
  const ListRenderer = (item: any) => {
    return (
      <Pressable
        style={styles.listContainer}
        onPress={() => {
          if (item.item === 'Personal Info') {
            navigation.navigate('personalInfo');
          } else if (item.item === 'Change Password') {
            navigation.navigate('setNewPassword');
          } else if (item.item === 'Preference') {
            navigation.navigate('preference');
          } else if (item.item === 'Payment Cards') {
            navigation.navigate('paymentCards');
          } else if (item.item === 'Referrals') {
            navigation.navigate('referrals');
          } else if (item.item === 'Privacy Policy') {
            navigation.navigate('privacyPolicy');
          } else if (item.item === 'Property Booking Policy') {
            navigation.navigate('propertyBookingPolicy');
          } else if (item.item === 'Property Cancellation Policy') {
            navigation.navigate('propertyCancellationPolicy');
          } else if (item.item === 'Report A Problem') {
            handlePresentModalPress();
          } else {
            Alert.alert(item.item + ' is pressed ');
          }
        }}>
        <Text style={styles.list}>{item.item}</Text>
      </Pressable>
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <TouchableOpacity accessible={true}
      // accessibilityLabel="Back" style={styles.navbarHeader}>
      //     <Image
      //       style={styles.navbarImage}
      //       source={App.Back}
      //       resizeMode={'contain'}
      //     />
      //   </TouchableOpacity>
      // ),
      headerTitle: () => <Text style={navbarTitle}>{'Profile'}</Text>,
    });
  }, [navigation]);
  // const onPressMyBookingItem = v => {
  //   console.log('v >', v);
  //   navigation.navigate('myBookingPropertyDetail');
  // };
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.flatlistView}>
          <FlatList
            ListHeaderComponent={ListHeader}
            data={userInfo}
            renderItem={item => <ListRenderer item={item.item} />}
            ItemSeparatorComponent={() => (
              <Divider style={styles.divider} color="lightgray" />
            )}
            ListFooterComponent={ListFooter}
          />

          <ReportModal bottomSheetModalRef={bottomSheetModalRef} />
        </View>
      </View>
    </View>
  );
}
