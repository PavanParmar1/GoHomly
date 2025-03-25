import {View, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import GuestLogin from '../auth/guest-login';
import {useDispatch} from 'react-redux';
import {showErrorToast, showToast} from '../../utils/common/Toast';
import Modal from 'react-native-modal';
import {guestLoginFailedRes, myBookingProperty} from './homeTypes';
import crashlytics from '@react-native-firebase/crashlytics';
import useUser from '../../hooks/useUser';
import homeStyle from './styles';
import useSize from '../../hooks/useSize';
import useOrientation from '../../hooks/useOrientation';

interface GuestModalProps {
  isGuestLogin: boolean;
  setGuestLogin: any;
}

const GuestLoginModal = (props: GuestModalProps) => {
  const dispatch = useDispatch();
  const {logOut} = useUser();
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font12,
    Font16,
    Font7,
    Font9,
    getWidthTab,
    getWidth,
    Font18,
    Font15,
  } = useSize();

  const styles = homeStyle(
    Font16,
    windowWidth,
    Font18,
    Font12,
    getWidth,
    getWidthTab,
    Font10,
    Font15,
    Font9,
    orientation,
    Font7,
    screenWidth,
  );

  const handleOnSuccess = () => {
    try {
      dispatch.Property.onGoingBooking(
        {
          pageIndex: 0,
          pageSize: 10,
          isInitial: true,
        },
        (res: myBookingProperty) => {
          if (res.IsSuccess) {
            console.log(res, 'guestPropertyDetail----');
          } else {
            showErrorToast(res.Message);

            if (res?.response?.status === 401) {
              logOut();
            }
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log(
        'Home || HomeScreen || fun: handleOnSuccess of guestLoginModel',
      );
    }
  };

  return (
    <Modal
      testID={'modal'}
      isVisible={props.isGuestLogin}
      onBackdropPress={() => props.setGuestLogin(false)}
      onSwipeComplete={() => props.setGuestLogin(false)}
      swipeDirection="down"
      scrollOffsetMax={400 - 300}
      propagateSwipe={true}
      onBackButtonPress={() => {
        props.setGuestLogin(false);
      }}
      style={styles.modal}>
      <View style={styles.scrollableGuestModal}>
        <Divider
          width={4}
          inset={true}
          insetType="middle"
          style={styles.DIVIDER}
        />
        {/* <ScrollView scrollEventThrottle={16}> */}
        <GuestLogin
          onSuccess={(res: any) => {
            showToast(res.Message);
            props.setGuestLogin(false);
            handleOnSuccess();
          }}
          onFailure={(res: guestLoginFailedRes) => {
            showErrorToast(res.Message);
            if (res?.response?.status === 401) {
              logOut();
            }
          }}
        />
        {/* </ScrollView> */}
      </View>
    </Modal>
  );
};

export default GuestLoginModal;
