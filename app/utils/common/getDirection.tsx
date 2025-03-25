import {Linking, Platform} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

export const handleMarkerPress = (navigation: any, item: any) => {
  try {
    const {geometry} = item;
    const lat = geometry?.location?.lat;
    const lng = geometry?.location?.lng;

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    const isAndroid = Platform.OS === 'android';
    const isIOS = Platform.OS === 'ios';

    const googleMapsAvailableOnIOS =
      isIOS && Linking.canOpenURL('comgooglemaps://');

    const appleMapsAvailable = isIOS && Linking.canOpenURL('maps://');

    if (isAndroid) {
      Linking.canOpenURL(mapUrl)
        .then(supported => {
          if (supported) {
            Linking.openURL(mapUrl);
          } else {
            navigation.navigate('webview', {
              latitude: item?.geometry?.location?.lat,
              longitude: item?.geometry?.location?.lng,
            });
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else if (appleMapsAvailable) {
      Linking.canOpenURL(`maps://?q=${lat},${lng}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(`maps://?q=${lat},${lng}`);
          } else {
            navigation.navigate('webview', {
              latitude: item?.geometry?.location?.lat,
              longitude: item?.geometry?.location?.lng,
            });
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else if (googleMapsAvailableOnIOS) {
      Linking.canOpenURL(`comgooglemaps://?q=${lat},${lng}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(`comgooglemaps://?q=${lat},${lng}`);
          } else {
            navigation.navigate('webview', {
              latitude: item?.geometry?.location?.lat,
              longitude: item?.geometry?.location?.lng,
            });
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else if (isIOS) {
      Linking.canOpenURL(`http://maps.apple.com/?ll=${lat},${lng}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(mapUrl);
          } else {
            navigation.navigate('webview', {
              latitude: item?.geometry?.location?.lat,
              longitude: item?.geometry?.location?.lng,
            });
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      navigation.navigate('webview', {
        latitude: item?.geometry?.location?.lat,
        longitude: item?.geometry?.location?.lng,
      });
    }
  } catch (error: any) {
    crashlytics().recordError(error);
    crashlytics().log('Utils || GetDirection || fun: handleMarkerPress');
  }
};
