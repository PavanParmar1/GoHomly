import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {App} from '../../../assets/images/map';
// import {Button} from '@rn-community/button';
import RecentNotification from '../../../.storybook/stories/recent-notification/recent-notification';
import RecentNotificationShimmer from '../../../.storybook/stories/recent-notification/recent-notification-shimmer';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import EmptyData from '../empty-data';
import {showErrorToast} from '../../utils/common/Toast';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import notificationStyles from './styles';

export default function Notification({navigation}: {navigation: any}) {
  const arrNotifications = useSelector(
    (state: any) => state.Notification.arrNotifications,
  );

  const unreadNotificationCount = useSelector(
    (state: any) => state.Notification.unreadNotificationCount,
  );
  const {logOut} = useUser();

  const {dimensions, orientation} = useOrientation();
  const {Font17, Font16, getWidth, Font12, Font11, getWidthTab, Font9, Font13} =
    useSize();
  const styles = notificationStyles(
    Font17,
    Font16,
    getWidth,
    Font12,
    Font11,
    getWidthTab,
    Font9,
    Font13,
  );

  // const totalNotificationCount = useSelector(
  //   (state: any) => state.Notification.totalNotificationCount,
  // );

  const totalPageCount = useSelector(
    (state: any) => state.Notification.totalPageCount,
  );

  const [getPage, setPage] = useState(1);

  const [refresing, setRefresing] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);

  const pageSize = 15;

  const onEndReach = () => {
    console.log('first');
    try {
      getPage < totalPageCount &&
        arrNotifications.length > 0 &&
        dispatch.Notification.getNotifications(
          {
            PageIndex: getPage,
            PageSize: pageSize,
            isInitial: false,
          },
          (res: any) => {
            if (res.IsSuccess) {
              setPage(getPage + 1);
              console.log('totalNotificationCount3========');
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
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || NotificationScreen || fun: onEndReach pagination of Notification',
      );
    }
  };

  useEffect(() => {
    dispatch.Notification.getNotifications(
      {
        PageIndex: 0,
        PageSize: 15,
        isInitial: true,
      },
      (res: any) => {
        if (res.IsSuccess) {
          // setPage(getPage + 1);
          // console.log('totalNotificationCount3========');
        } else {
          showErrorToast(res.Message);
          if (res?.response?.status === 401) {
            logOut();
          }
        }
        console.log('getNotificationsCalled');
      },
    );
    return () => {
      dispatch.Notifcation.resetArrNotifications();
    };
  }, [dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.goBack()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Notification'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);

  const onRefresh = () => {
    try {
      console.log('refreshing');
      setRefresing(true);
      dispatch.Notification.getNotifications(
        {
          PageIndex: 0,
          PageSize: pageSize,
          isInitial: true,
        },
        (res: any) => {
          if (res.IsSuccess) {
            console.log('successfully called-------------------');
            setRefresing(false);
            setPage(1);
          } else {
            console.log('failed');
            setRefresing(false);
            showErrorToast(res.Message);
            if (res?.response?.status === 401) {
              logOut();
            }
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || NotificationScreen || fun: onRefresh of Notification',
      );
    }
  };

  const handleNotificationClick = (item: any) => {
    try {
      // console.log(item);
      !item.FlgMessageRead &&
        dispatch.Notification.makeNotificationRead(
          {id: item?.Id},
          (res: any) => {
            if (res.IsSuccess) {
              console.log(
                'notificationRead sucessfully called-------------------',
              );
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
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || NotificationScreen || fun: handleNotificationClick',
      );
    }
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <RecentNotification
        data={item}
        onPress={() => handleNotificationClick(item)}
      />
    );
  };

  const noItem = () => {
    return <RecentNotificationShimmer />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headingText}>
          <Text style={styles.heading}>Recent Notification</Text>
          {unreadNotificationCount > 0 ? (
            <View style={styles.bubbleView}>
              <Text style={styles.bubble}>{unreadNotificationCount}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
      {arrNotifications.length !== 0 && (
        <FlatList
          data={arrNotifications /* || notifications */}
          renderItem={renderItem}
          onEndReached={() => onEndReach()}
          ListFooterComponent={
            <>
              {getPage < totalPageCount && (
                <ActivityIndicator
                  style={{marginBottom: 50}}
                  color={colors.secondary}
                />
              )}
            </>
          }
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={refresing}
              onRefresh={() => {
                onRefresh();
              }}
            />
          }
        />
      )}

      {!loading.effects.Property.getNotifications &&
        arrNotifications.length === 0 && (
          <FlatList
            data={arrNotifications /* || notifications */}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                tintColor={colors.secondary}
                colors={[colors.secondary]}
                refreshing={refresing}
                onRefresh={() => {
                  onRefresh();
                }}
              />
            }
            // eslint-disable-next-line react/no-unstable-nested-components
            ListEmptyComponent={() => (
              <View
                style={{
                  height: '100%',
                }}>
                <EmptyData text1="Opps !" text2="No Data Found !" imgType={1} />
              </View>
            )}
          />
        )}

      {loading.effects.Property.getNotifications &&
        arrNotifications.length === 0 && (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            renderItem={noItem}
          />
        )}
    </View>
  );
}
