import {Text, Alert, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react'; // Import useEffect
import {Button} from '../../../.storybook/stories/button/button';
import styles from './login/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
import {showErrorToast} from '../../utils/common/Toast';
import {CommonActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: Root) => state.Auth.auth);
  const [getPageIndex, setPageIndex] = useState(0);
  const pageSize = 5;
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const navigation = useNavigation();
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
      crashlytics().log('Profile || ProfileScreen || fun: signOut');
    }
  };

  const updateToken = async () => {
    dispatch.Auth.setUser2({
      Token: {
        ...user.Data.Token,
        AccessToken: 'Your updated access token here',
      },
    });
    await AsyncStorage.setItem('AccessTokenInternal', 'updaed fake token');
  };
  const getNewProperty = () => {
    try {
      dispatch.Property.onGoingBooking(
        {
          pageIndex: getPageIndex,
          pageSize: pageSize,
          isInitial: true,
        },
        (res: any) => {
          if (res.IsSuccess) {
            // console.log(res, 'onGoingBooking----');
            setPageIndex(2);
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {}
  };

  const getPastBooking = () => {
    try {
      dispatch.Property.getPastBooking(
        {
          pageIndex: getPageIndex,
          pageSize: pageSize,
          isInitial: true,
        },
        (res: any) => {
          if (res.IsSuccess) {
            // setPastPageIndex(getPastPageIndex + 1);
            console.log('onPastBookingCalled');
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {}
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedAccessToken = await AsyncStorage.getItem('AccessToken');
      const storedRefreshToken = await AsyncStorage.getItem('RefreshToken');
      setAccessToken(storedAccessToken || '');
      setRefreshToken(storedRefreshToken || '');
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        type={'clear'}
        containerStyle={styles.forgotPassword}
        title={'Update Token'}
        onPress={() => updateToken()}
      />
      <Button
        type={'clear'}
        containerStyle={styles.forgotPassword}
        title={'Get New Property'}
        onPress={() => getNewProperty()}
      />
      <Button
        type={'clear'}
        containerStyle={styles.forgotPassword}
        title={'Logout'}
        onPress={() => signOut()}
      />

      <Button
        type={'clear'}
        containerStyle={styles.forgotPassword}
        title={'Call Past Booking'}
        onPress={() => getPastBooking()}
      />

      <Text>AccessToken: {accessToken}</Text>
      <Text style={{marginTop: '5%'}}>RefreshToken: {refreshToken}</Text>
    </SafeAreaView>
  );
};

export default TestScreen;
