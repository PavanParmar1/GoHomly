/* eslint-disable react-hooks/exhaustive-deps */
import React, {Suspense, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';
// import MyBookingCard from '../../../.storybook/stories/my-booking/my-booking-card';
const MyBookingCard = React.lazy(
  () => import('../../../.storybook/stories/my-booking/my-booking-card'),
);

const MyBookingCardLandscape = React.lazy(
  () =>
    import(
      '../../../.storybook/stories/my-booking-landscape/my-booking-card-landscape'
    ),
);

import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../utils/common/Toast';
import EmptyData from '../empty-data';
import InternetCheck from '../../utils/common/InternetCheck';
import {isTablet} from 'react-native-device-info';
import {Root} from '../../rematch/types/store.types';
import {myBookingProperty, propertyDetail} from '../home_2/homeTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../navigators/my-booking-navigator';
import LottieView from 'lottie-react-native';
import {Anim} from '../../../assets/anim/map';
import {colors} from '../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import {Tab, TabView} from '@rneui/themed';
import {Fonts} from '../../utils/common';
import {callNumber} from '../../utils/common/callNumber';
import {sendWhatsApp} from '../../utils/common/sendWhatsApp';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import myBookingStyles from './styles';

type MyBookingNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'myBooking'
>;

interface MyBookingScreenProps {
  navigation: MyBookingNavigationProp;
}

const MyBookingScreen: React.FC<MyBookingScreenProps> = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  // const loading = useSelector((state: Root) => state.loading);

  const {dimensions, orientation} = useOrientation();
  const screenWidth = dimensions.screen.width;
  const windowWidth = dimensions.window.width;

  const {Font14, getWidth, getWidthTab, Font13, Font9, Font7, navbarTitle} =
    useSize();
  const styles = myBookingStyles(
    getWidth,
    getWidthTab,
    Font14,
    Font9,
    orientation,
  );

  const [index, setIndex] = React.useState(0);

  const [getPageIndex, setPageIndex] = useState<number>(1);

  const [getPastPageIndex, setPastPageIndex] = useState<number>(1);
  const loading = useSelector((state: any) => state.loading);

  const upcomingPropertyDetail = useSelector(
    (state: Root) => state.Property.guestProperty,
  );

  const pastPropertyDetail = useSelector(
    (state: Root) => state.Property.PastBookingProperty,
  );

  const dispatch = useDispatch();
  const network = InternetCheck();
  const pageSize = 5;

  const onGoingCount = useSelector((state: Root) => state.Property.totalCount);
  const pastCount = useSelector(
    (state: Root) => state.Property.totalPastBookingCount,
  );
  const {logOut} = useUser();

  useEffect(() => {
    handleOnSuccess();
  }, []);

  const onPastRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch.Property.getPastBooking(
      {
        pageIndex: 0,
        pageSize: pageSize,
        isInitial: true,
      },
      (res: myBookingProperty) => {
        if (res.IsSuccess) {
          setRefreshing(false);
          setPastPageIndex(2);
          console.log('onPastRefreshCalled');
        } else {
          showErrorToast(res.Message);
          if (res?.response?.status === 401) {
            logOut();
          }
        }
      },
    );
  }, []);

  const onGoingRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch.Property.onGoingBooking(
      {
        pageIndex: 0,
        pageSize: pageSize,
        isInitial: true,
      },
      (res: myBookingProperty) => {
        if (res.IsSuccess) {
          setRefreshing(false);
          setPageIndex(2);
          console.log('onGoingRefreshCalled');
        } else {
          showErrorToast(res.Message);
          if (res?.response?.status === 401) {
            logOut();
          }
        }
      },
    );
  }, []);

  const handleOnSuccess = () => {
    try {
      try {
        dispatch.Property.getPastBooking(
          {
            pageIndex: 0,
            pageSize: pageSize,
            isInitial: true,
          },
          (res: myBookingProperty) => {
            if (res.IsSuccess) {
              setPastPageIndex(2);
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
          'MyBooking || MyBooking Screen || fun: handleOnSuccess || getPastBooking apiCall',
        );
      }

      try {
        dispatch.Property.onGoingBooking(
          {
            pageIndex: 0,
            pageSize: pageSize,
            isInitial: true,
          },
          (res: myBookingProperty) => {
            if (res.IsSuccess) {
              setPageIndex(2);
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
          'MyBooking || MyBooking Screen || fun: handleOnSuccess || onGoingBooking apiCall',
        );
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'MyBooking || MyBooking Screen || fun: handleOnSuccess',
      );
    }
  };

  const onFetchPastBooking = () => {
    const offset = pageSize * (getPastPageIndex - 1);
    console.log('pastBooking');

    console.log(
      pastPropertyDetail.length < pastCount && pastPropertyDetail.length > 0,
      'PastPagCondiion',
    );

    try {
      pastPropertyDetail.length < pastCount &&
        pastPropertyDetail.length > 0 &&
        !loading.effects.Property.getPastBooking &&
        dispatch.Property.getPastBooking(
          {
            pageIndex: offset,
            pageSize: pageSize,
            isInitial: false,
          },
          (res: myBookingProperty) => {
            if (res.IsSuccess) {
              setPastPageIndex(getPastPageIndex + 1);
              console.log('onPastBookingCalled');
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
        'MyBooking || MyBooking Screen || fun: onFetchPastBooking',
      );
    }
  };

  const onFetchCurrent = () => {
    const offset = pageSize * (getPageIndex - 1);
    try {
      upcomingPropertyDetail.length < onGoingCount &&
        upcomingPropertyDetail.length > 0 &&
        !loading.effects.Property.onGoingBooking &&
        dispatch.Property.onGoingBooking(
          {
            pageIndex: offset,
            pageSize: pageSize,
            isInitial: false,
          },
          (res: myBookingProperty) => {
            if (res.IsSuccess) {
              setPageIndex(getPageIndex + 1);
              console.log('onFetchCurrentCalled');
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
      crashlytics().log('MyBooking || MyBooking Screen || fun: onFetchCurrent');
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => <Text style={navbarTitle}>{'My Bookings'}</Text>,
    });
  }, [navigation]);
  // const [segmentIndex, setSegmentIndex] = useState<any>(0);

  const handleModalPress = (PropertyId: number) => {
    try {
      console.log(PropertyId, 'propId');
      dispatch.Search.propertyDetail(
        {
          id: PropertyId,
        },
        (res: propertyDetail) => {
          if (res.IsSuccess) {
            navigation.navigate('propertydetails');
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
        'MyBooking || MyBooking Screen || fun: handleModalPress || propertyDetail apiCall ',
      );
    }
  };

  return (
    <>
      {network || network === undefined ? (
        <SafeAreaView style={styles.container}>
          <Suspense
            fallback={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.background,
                }}>
                <LottieView
                  style={{
                    height: 100,
                    width: 100,
                    alignSelf: 'center',
                  }}
                  source={Anim.LoadingSuspenseFallback}
                  autoPlay
                  loop
                />
              </View>
            }>
            {/* <View style={styles.segmentContainer}> */}
            {/* <SegmentedControl
                style={styles.segment}
                values={['Past Booking', 'Upcoming Bookings']}
                fontStyle={styles.segmentFontStyle}
                activeFontStyle={styles.activeSegmentFontStyle}
                selectedIndex={segmentIndex}
                onChange={event => {
                  setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                appearance={'light'}
              /> */}
            {/* </View> */}

            <Tab
              value={index}
              style={styles.tabView}
              containerStyle={styles.tabContainer}
              buttonStyle={(isActive: boolean) => ({
                backgroundColor: isActive ? 'white' : '#EEEEF0',
                elevation: isActive ? 3 : 0,
                borderRadius: 5,
                paddingHorizontal: 0,
                padding: 0,
              })}
              titleStyle={(isActive: boolean) => ({
                color: 'black',
                // height: isTablet() ? getWidthTab(40) : getWidth(32),
                padding: 0,
                // textAlignVertical: 'top',
                includeFontPadding: false,
                fontSize:
                  orientation === 'landscape' &&
                  dimensions.window.width === dimensions.screen.width
                    ? Font7
                    : isTablet()
                      ? Font9
                      : Font13,
                fontFamily: isActive
                  ? Platform.OS === 'ios'
                    ? Fonts.SFProRounded.SemiBold
                    : Fonts.SFProRounded.Bold
                  : Fonts.SFProRounded.Regular,
              })}
              onChange={e => setIndex(e)}
              disableIndicator
              variant="primary">
              <Tab.Item title="Past Booking" activeOpacity={0} />
              <Tab.Item title="Upcoming Bookings" activeOpacity={0} />
            </Tab>

            <TabView
              disableSwipe={true}
              value={index}
              onChange={setIndex}
              animationType="spring"
              containerStyle={{}}>
              <TabView.Item style={{flex: 1}}>
                <View style={[styles.flatlistView]}>
                  {orientation === 'landscape' &&
                  windowWidth === screenWidth ? (
                    <MyBookingCardLandscape
                      serviceEnable={false}
                      data={pastPropertyDetail}
                      totalCount={pastCount}
                      onPressItem={(PropertyId: number) =>
                        handleModalPress(PropertyId)
                      }
                      phonePress={(value: string) => {
                        callNumber(value);
                      }}
                      messagePress={(value: string) => {
                        sendWhatsApp(value);
                      }}
                      refreshing={refreshing}
                      onRefresh={onPastRefresh}
                      onFetch={onFetchPastBooking}
                      isFromPastBooking={true}
                      isLoading={loading.effects.Property.getPastBooking}
                      listEmptyComponent={
                        !loading.effects.Property.getPastBooking && (
                          <View
                            style={{
                              height: '100%',
                              paddingBottom: isTablet() ? '10%' : '20%',
                            }}>
                            <EmptyData
                              text1="Opps !"
                              text2="No Data Found !"
                              imgType={1}
                            />
                          </View>
                        )
                      }
                      onButtonPress={() => {
                        console.log('clikced');
                      }}
                    />
                  ) : (
                    <MyBookingCard
                      serviceEnable={false}
                      data={pastPropertyDetail}
                      totalCount={pastCount}
                      onPressItem={(PropertyId: number) =>
                        handleModalPress(PropertyId)
                      }
                      phonePress={(value: string) => {
                        callNumber(value);
                      }}
                      messagePress={(value: string) => {
                        sendWhatsApp(value);
                      }}
                      refreshing={refreshing}
                      onRefresh={onPastRefresh}
                      onFetch={onFetchPastBooking}
                      isFromPastBooking={true}
                      isLoading={loading.effects.Property.getPastBooking}
                      listEmptyComponent={
                        !loading.effects.Property.getPastBooking && (
                          <View
                            style={{
                              height: '100%',
                              paddingBottom: isTablet() ? '10%' : '20%',
                            }}>
                            <EmptyData
                              text1="Opps !"
                              text2="No Data Found !"
                              imgType={1}
                            />
                          </View>
                        )
                      }
                      onButtonPress={() => {
                        console.log('clikced');
                      }}
                    />
                  )}
                </View>
              </TabView.Item>
              <TabView.Item style={{flex: 1}}>
                <View style={[styles.flatlistView]}>
                  {orientation === 'landscape' &&
                  screenWidth === windowWidth ? (
                    <MyBookingCardLandscape
                      serviceEnable={false}
                      data={upcomingPropertyDetail}
                      totalCount={onGoingCount}
                      phonePress={(value: string) => {
                        callNumber(value);
                      }}
                      onPressItem={(PropertyId: number) =>
                        handleModalPress(PropertyId)
                      }
                      messagePress={(value: string) => {
                        sendWhatsApp(value);
                      }}
                      refreshing={refreshing}
                      onRefresh={onGoingRefresh}
                      onFetch={onFetchCurrent}
                      isFromPastBooking={false}
                      isLoading={loading.effects.Property.onGoingBooking}
                      listEmptyComponent={
                        !loading.effects.Property.onGoingBooking && (
                          <View
                            style={{
                              flex: 1,
                              paddingBottom: isTablet() ? '10%' : '20%',
                            }}>
                            <EmptyData
                              text1="Opps !"
                              text2="No Data Found !"
                              imgType={1}
                            />
                          </View>
                        )
                      }
                      onButtonPress={() => {
                        dispatch.Guest.setListOfGuests([]);
                        navigation.navigate('findYourBooking');
                      }}
                    />
                  ) : (
                    <MyBookingCard
                      serviceEnable={false}
                      data={upcomingPropertyDetail}
                      totalCount={onGoingCount}
                      phonePress={(value: string) => {
                        callNumber(value);
                      }}
                      onPressItem={(PropertyId: number) =>
                        handleModalPress(PropertyId)
                      }
                      messagePress={(value: string) => {
                        sendWhatsApp(value);
                      }}
                      refreshing={refreshing}
                      onRefresh={onGoingRefresh}
                      onFetch={onFetchCurrent}
                      isFromPastBooking={false}
                      isLoading={loading.effects.Property.onGoingBooking}
                      listEmptyComponent={
                        !loading.effects.Property.onGoingBooking && (
                          <View
                            style={{
                              flex: 1,
                              paddingBottom: isTablet() ? '10%' : '20%',
                            }}>
                            <EmptyData
                              text1="Opps !"
                              text2="No Data Found !"
                              imgType={1}
                            />
                          </View>
                        )
                      }
                      onButtonPress={() => {
                        dispatch.Guest.setListOfGuests([]);
                        navigation.navigate('findYourBooking');
                      }}
                    />
                  )}
                </View>
              </TabView.Item>
            </TabView>
          </Suspense>
        </SafeAreaView>
      ) : (
        <EmptyData
          text1="Opps !"
          text2="Looks like we are lost !"
          imgType={1}
        />
      )}
    </>
  );
};
export default MyBookingScreen;
