import {useState, createContext, useContext, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Alert, Platform, Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import GeolocationService from 'react-native-geolocation-service';
import {Permission, PERMISSION_TYPE} from '../utils/common/appPermission';
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from 'react-native-android-location-enabler';
import axios from 'axios';

const LocationContext = createContext();

export function LocationProvider(props) {
  const dispatch = useDispatch();
  const [coordinate, setCoordinate] = useState({
    latitude: 51.5286416,
    longitude: -0.1015987,
  });
  const [postalCode, setPostalCode] = useState('London');
  const [country, setCountry] = useState('UK');

  useEffect(() => {
    getAddressFromLatLong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinate]);

  async function getAddressFromLatLong() {
    try {
      dispatch.Search.getCurrentLocation(
        {
          lat: coordinate.latitude,
          lng: coordinate.longitude,
        },
        res => {
          if (res) {
            console.log(
              coordinate.latitude,
              coordinate.longitude,
              'Got the location from Welcome',
            );
            let _city = '';
            let _country = '';
            res?.results[0]?.address_components.map(item => {
              if (item?.types.includes('postal_town')) {
                if (_city.length == 0) {
                  _city = item?.long_name;
                }
              } else if (item?.types.includes('sublocality_level_1')) {
                if (_city.length == 0) {
                  _city = item?.long_name;
                }
              }
              if (item?.types.includes('country')) {
                if (_country.length == 0) {
                  _country = item?.long_name;
                }
              } else if (item?.types.includes('administrative_area_level_3')) {
                if (_country.length == 0) {
                  _country = item?.long_name;
                }
              }
              /* else if (item?.types.includes('political')) {
                if (_country.length == 0) {
                  _country = item?.long_name;
                }
              } */
            });
            if (_city.length > 0 && _country.length > 0) {
              setPostalCode(_city);
              setCountry(_country);
            }
          } else {
            // console.log("Didn't get the location");
          }
        },
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  function promptLocationPermission() {
    Alert.alert(
      'Location Permission',
      'Ensure that your Location Permission is allowed',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            if (Platform.OS === 'android') {
              Linking.openSettings();
            } else {
              Linking.openURL('app-settings:');
            }
          },
        },
      ],
      {cancelable: false},
    );
  }

  async function checkGpsStatus() {
    if (Platform.OS === 'android') {
      const checkEnabled = await isLocationEnabled();
      if (!checkEnabled) {
        handleEnabledPressed();
      } else {
        getPermission(); // If already enabled, proceed to get permission
      }
    } else {
      getPermission(); // For iOS, directly get permission
    }
  }

  async function handleEnabledPressed() {
    if (Platform.OS === 'android') {
      try {
        const enableResult = await promptForEnableLocationIfNeeded();
        console.log('enableResult', enableResult);
        console.log('called from the checkGPS');
        getPermission();
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    }
  }

  async function getPermission() {
    if (Platform.OS == 'ios') {
      GeolocationService.requestAuthorization('whenInUse').then(loc => {
        if (loc == 'granted') {
          GeolocationService.getCurrentPosition(
            position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              console.log('lat-long', latitude, longitude);
              setCoordinate({
                latitude,
                longitude,
              });
            },
            error => {
              // Alert.alert(error.message.toString());
              console.warn(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 0,
            },
          );
        } else {
          promptLocationPermission();
        }
      });
    } else {
      Permission.checkPermission(PERMISSION_TYPE.location).then(res => {
        if (res) {
          console.log('location for android called');
          // const watchId = Geolocation.watchPosition(
          //   position => {
          //     const latitude = position.coords.latitude;
          //     const longitude = position.coords.longitude;
          //     setCoordinate({
          //       latitude,
          //       longitude,
          //     });
          //     console.log('cord', latitude, longitude);
          //   },
          //   error => {
          //     // Alert.alert('xyz');
          //     console.warn('error block', error);
          //   },
          //   {
          //     interval: 5000,
          //     fastestInterval: 5000,
          //     showLocationDialog: true,
          //     enableHighAccuracy: true,
          //     timeout: 20000,
          //     maximumAge: 0,
          //   },
          // );
          // return () => {
          //   console.log('watch cleared');
          //   Geolocation.clearWatch(watchId);
          // };

          Geolocation.getCurrentPosition(
            position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              console.log('Latitude:', latitude, 'Longitude:', longitude);
              setCoordinate({latitude, longitude});
              // setLocationOnRematch({latitude, longitude});
            },
            error => {
              console.error('Error getting location:', error);
              // Handle error here, maybe notify the user
            },
            // {
            //   enableHighAccuracy: false,
            //   timeout: 20000,
            //   maximumAge: 0,
            // },
          );
        } else {
          promptLocationPermission();
        }
      });
    }
  }

  return (
    <LocationContext.Provider
      value={{
        coordinate,
        postalCode,
        country,
        getPermission,
        checkGpsStatus,
      }}
      {...props}
    />
  );
}

export default function useLocation() {
  return useContext(LocationContext);
}
