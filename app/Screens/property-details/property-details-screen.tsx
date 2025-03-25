/* eslint-disable react-hooks/exhaustive-deps */
import {Divider} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Share,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native';
import PropertyDetails from './property/';
import PropertyDetailScreenStyle from './styles';
import {isTablet} from 'react-native-device-info';
import {Root} from '../../rematch/types/store.types';
import {useDispatch, useSelector} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

import {colors} from '../../theme';
import {showErrorToast} from '../../utils/common/Toast';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
const like = require('../../../assets/images/heartfill_toolbar.png');
const unlike = require('../../../assets/images/heart_toolbar.png');

export default function PropertyDetailsScreen({navigation, route}: any) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font17,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = PropertyDetailScreenStyle(
    windowWidth,
    getWidth,
    getWidthTab,
    Font17,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
  );

  const arrProperties = useSelector((state: Root) => state.Search.property);
  const [loadingState, setLoadingState] = useState(false);

  const [isLike, setLike] = useState(arrProperties?.FlgFavorite);
  const dispatch = useDispatch();

  const handleLikePress = (Id: number, FlgFavorite: boolean) => {
    setLoadingState(true);
    try {
      if (!FlgFavorite) {
        try {
          dispatch.Property.likeProperty(
            {
              Id: Id,
            },
            (res: any) => {
              if (res.IsSuccess) {
                setLoadingState(false);
                setLike(true);
              } else {
                setLoadingState(false);
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Search || SearchScreen || fun: handleLikePress || likeProperty',
          );
        }
      } else {
        try {
          dispatch.Property.unlikeProperty(
            {
              Id: Id,
            },
            (res: any) => {
              if (res.IsSuccess) {
                setLoadingState(false);
                setLike(false);
              } else {
                setLoadingState(false);
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Search || SearchScreen || fun: handleLikePress || unlikeProperty',
          );
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || SearchScreen || fun: handleLikePress');
    }
  };

  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [
      0,
      isTablet()
        ? Platform.OS === 'android'
          ? (470 * windowWidth) / 834
          : (540 * windowWidth) / 834
        : Platform.OS === 'android'
          ? (240 * windowWidth) / 375
          : (200 * windowWidth) / 375,
    ],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'I would like to share Amazing Hapa app for property booking',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('The content was successfully shared.');
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error: any) {
      Alert.alert('Error', 'Something went wrong, Try again later');
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || PropertyDetailScreen || fun: onShare');
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          activeOpacity={0.67}
          style={styles.navbarHeader}
          onPress={() => navigation.pop()}>
          <Image
            style={styles.navbarBackImage}
            source={require('../../../assets/images/round_back.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={isLike ? 'Like' : 'Unlike'}
            activeOpacity={0.67}
            style={[styles.navbarHeader, {alignItems: 'center'}]}
            onPress={() => handleLikePress(arrProperties.Id, isLike)}>
            {loadingState ? (
              <ActivityIndicator
                style={{
                  position: 'absolute',
                  right: 0,
                  marginEnd: isTablet() ? '3.8%' : '6%',
                  marginTop: isTablet() ? '3%' : '6%',
                  zIndex: 1, // Ensure the activity indicator is above other content
                }}
                color={colors.secondary}
              />
            ) : (
              <Image
                style={[styles.navbarShareImage]}
                source={isLike ? like : unlike}
                resizeMode={'contain'}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Share"
            activeOpacity={0.67}
            style={styles.navbarHeader}
            onPress={() => onShare()}>
            <Image
              style={styles.navbarShareImage}
              source={require('../../../assets/images/share_toolbar.png')}
              resizeMode={'contain'}
              accessible={true}
              accessibilityLabel="Share Icon"
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        opacity: headerOpacity,
      },
      headerBackground: () => (
        <Animated.View
          style={{
            backgroundColor: 'white',
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
          }}>
          <Divider />
        </Animated.View>
      ),
      headerTransparent: true,
      headerTitleStyle: {color: 'transparent'},
      headerTintColor: 'transparent',
      headerShadowVisible: true,
    });
  }, [navigation, isLike, loadingState]);

  return (
    <View>
      {Platform.OS === 'android' && (
        <Animated.View
          style={[styles.animatedViewAndroid, {opacity: headerOpacity}]}
        />
      )}
      <PropertyDetails
        navigation={navigation}
        route={route}
        yOffset={yOffset}
      />
    </View>
  );
}
