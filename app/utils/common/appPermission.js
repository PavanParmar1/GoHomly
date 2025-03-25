import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const PLATFORM_MEDIA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android:
    Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const PLATFORM_CAMERA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const PLATFORM_MICROPHONE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MICROPHONE,
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
};

const PLATFORM_LOCATION_PERMISSIONS = {
  ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
};

const PLATFORM_NOTIFICATION_PERMISSIONS = {
  ios: PERMISSIONS.IOS.REMINDERS,
  android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
};

const REQUEST_PERMISSION_TYPE = {
  mediaLibrary: PLATFORM_MEDIA_PERMISSIONS,
  location: PLATFORM_LOCATION_PERMISSIONS,
  camera: PLATFORM_CAMERA_PERMISSIONS,
  microphone: PLATFORM_MICROPHONE_PERMISSIONS,
  notification: PLATFORM_NOTIFICATION_PERMISSIONS,
};

const PERMISSION_TYPE = {
  mediaLibrary: 'mediaLibrary',
  location: 'location',
  camera: 'camera',
  microphone: 'microphone',
  notification: 'notification',
};

class AppPermission {
  checkPermission = async type => {
    console.log('Apppermission type:', type);
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log('Apppermission permissions:', permissions);
    if (!permissions) {
      return true;
    }
    try {
      const result = await check(permissions);
      console.log('Apppermission result:', result);
      if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
        return true;
      }
      return this.requestPermission(permissions);
    } catch (error) {
      console.log('Apppermission checkPermission error', error);
      return false;
    }
  };

  isPermissionGranted = async type => {
    console.log('Apppermission type:', type);
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log('Apppermission permissions:', permissions);
    if (!permissions) {
      return true;
    }
    try {
      const result = await check(permissions);
      console.log('Apppermission result:', result);
      if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Apppermission checkPermission error', error);
      return false;
    }
  };

  requestPermission = async permissions => {
    console.log('Apppermission requestPermission:', permissions);
    try {
      const result = await request(permissions);
      console.log('Apppermission requestPermission result', result);
      return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
    } catch (error) {
      console.log('Apppermission requestPermission error', error);
      return false;
    }
  };
}

const Permission = new AppPermission();
export {Permission, PERMISSION_TYPE};
