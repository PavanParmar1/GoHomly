import {Linking, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {showErrorToast} from './Toast';
import crashlytics from '@react-native-firebase/crashlytics';

export const callNumber = (phone: string) => {
  try {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }

    if (isTablet()) {
      showErrorToast('Phone calls are not supported on your device.');

      return;
    }

    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          showErrorToast('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((err: any) => {
        console.log(err);
        crashlytics().recordError(err);
        crashlytics().log('utill || fun: Linking.canOpenURL');
      });
  } catch (error: any) {
    crashlytics().recordError(error);
    crashlytics().log('utill || fun: callNumber || validations');
  }
};
