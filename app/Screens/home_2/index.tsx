/* eslint-disable react-hooks/exhaustive-deps */
import React, {Suspense, useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {chatView} from './styles';
import GuestBooking from '../../../.storybook/stories/guest-booking/guest-booking';
import {View, Text} from 'react-native';
import ImageButton from '../../../.storybook/stories/image-button/imagebutton';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../utils/common/Toast';
import notifee from '@notifee/react-native';
const MyBookingCard = React.lazy(
  () => import('../../../.storybook/stories/my-booking/my-booking-card'),
);
const MyBookingCardLandscape = React.lazy(
  () =>
    import(
      '../../../.storybook/stories/my-booking-landscape/my-booking-card-landscape'
    ),
);
import GuestLoginModal from './GuestLogin';
import InternetCheck from '../../utils/common/InternetCheck';
import EmptyData from '../empty-data';
import {isTablet} from 'react-native-device-info';
import useUser from '../../hooks/useUser';
import {myBookingProperty, propertyDetail} from './homeTypes';
import {Root} from '../../rematch/types/store.types';
import {Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../navigators/home-navigator';
import {database} from '../../services/Firebase';
import {ref, onValue} from 'firebase/database';
import {colors} from '../../theme';
import LottieView from 'lottie-react-native';
import {Anim} from '../../../assets/anim/map';
import Draggable from 'react-native-draggable';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import BookServices from '../../../.storybook/stories/book-services/book-services';
import {Divider} from '@rneui/base';
import {useFocusEffect} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import useLocation from '../../hooks/useLocation';
import {sendWhatsApp} from '../../utils/common/sendWhatsApp';
import {callNumber} from '../../utils/common/callNumber';
import Instabug from 'instabug-reactnative';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import homeStyle from './styles';
import SearchScreenStyle from '../search_v2/styles_v2';

type HomeNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'HomeScreen'
>;
interface HomeScreenProps {
  navigation: HomeNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  const screenWidth = dimensions.screen.width;

  const {
    Font10,
    Font12,
    Font16,
    Font8,
    Font14,
    Font7,
    Font9,
    getWidthTab,
    getWidth,
    Font18,
    Font15,
    Font6,
  } = useSize();
  const style = SearchScreenStyle(
    getWidth,
    getWidthTab,
    windowHeight,
    windowWidth,
    Font12,
    Font16,
    Font10,
    Font8,
    Font14,
    Font7,
    Font9,
  );

  const styles = homeStyle(
    Font16,
    dimensions.window.width,
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
    Font8,
    Font6,
  );

  const [scroll, setScroll] = useState(false);
  const [isGuestLogin, setGuestLogin] = useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const [getPageIndex, setPageIndex] = useState(0);
  const pageSize = 5;
  const guestPropertyDetail = useSelector(
    (state: Root) => state.Property.guestProperty,
  );
  const [showTip, setTip] = useState(
    guestPropertyDetail?.length === 0 ? true : false,
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPriceChange = (price: number) => {
    setTotalPrice(price);
  };
  const [isServiceModalVisible, setServiceModalVisible] =
    useState<boolean>(false);
  const toggleServiceModal = () => {
    setServiceModalVisible(!isServiceModalVisible);
  };

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const loading = useSelector((state: any) => state.loading);
  const totalUnreadMessage = useSelector(
    (state: any) => state.Notification.unreadNotificationCount,
  );
  const {getPermission} = useLocation();

  const totalCount = useSelector((state: Root) => state.Property.totalCount);

  const userDetails = useSelector((state: any) => state.Auth.auth);
  const {logOut} = useUser();

  useEffect(() => {
    try {
      dispatch.Property.onGoingBooking(
        {
          pageIndex: getPageIndex,
          pageSize: pageSize,
          isInitial: true,
        },
        (res: myBookingProperty) => {
          if (res.IsSuccess) {
            // console.log(res, 'onGoingBooking----');
            setPageIndex(2);
            crashlytics().setUserId(userDetails.Data.Email);
            crashlytics().setAttributes({
              email: userDetails.Data.Email,
              firstname: userDetails.Data.FirstName,
              lastname: userDetails.Data.LastName,
              PhoneNumber: userDetails.Data.PhoneNumber,
            });
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
      crashlytics().log('Home || HomeScreen || fun: onGoingBooking Api call');
    }
    console.log('called from the home');
    getPermission();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Your code to fetch notifications goes here
      try {
        dispatch.Notification.getNotifications(
          {
            PageIndex: 0,
            PageSize: 15,
            isInitial: true,
          },
          (res: any) => {
            if (res.IsSuccess) {
              // console.log(res, 'successfully called-------------------');
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
          'Home || HomeScreen || fun: getNotifications Api call',
        );
      }
    }, [dispatch.Notification]), // Dependency array specifies when to re-run the effect
  );

  useEffect(() => {
    Instabug.identifyUser(
      userDetails?.Data?.Email || '',
      userDetails?.Data?.FirstName || '',
      String(userDetails?.Data?.Id || ''),
    );

    try {
      const variablesRef = ref(database, '/variables');
      const phase2_handles = ref(database, '/phase2_handles');

      onValue(variablesRef, snapshot => {
        const data = snapshot.val();
        // console.log('dt', data);
        // console.log('debug_mode', data.debug_mode);
        // console.log('verify_documents', data.verify_documents);
        const variable = {
          debug_mode: data.debug_mode,
          verify_documents: data.verify_documents,
          place_search_radius: data.place_search_radius,
          place_search_on: data.place_search_on,
        };

        dispatch.Auth.setVariable(variable);
      });

      onValue(phase2_handles, snapshot => {
        const data = snapshot.val();
        // console.log('dt', data);
        // console.log('book_services', data.book_services);
        // console.log('referral_code', data.referral_code);
        const variable = {
          book_services: data.book_services,
          referral_code: data.referral_code,
        };

        dispatch.Auth.setPhaseVariable(variable);
      });
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || HomeScreen || fun: getData from Firebase');
    }
  }, []);

  useEffect(() => {
    notifee
      .setBadgeCount(totalUnreadMessage)
      .then(() => console.log('Badge count set successfully'))
      .catch(error => console.error('Error setting badge count:', error));
  }, [totalUnreadMessage]);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const toggleLogin = () => {
    setGuestLogin(!isGuestLogin);
  };

  const onFetch = () => {
    const offset = pageSize * (getPageIndex - 1);
    try {
      guestPropertyDetail?.length < totalCount &&
        guestPropertyDetail.length > 0 &&
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
        'Home || HomeScreen || fun: onFetch onGoingBooking - pagination',
      );
    }
  };

  const onRefresh = React.useCallback(() => {
    try {
      setRefreshing(true);
      dispatch.Property.onGoingBooking(
        {
          pageIndex: 0,
          pageSize: pageSize,
          isInitial: true,
        },
        (res: myBookingProperty) => {
          try {
            if (res.IsSuccess) {
              dispatch.Notification.getNotifications(
                {
                  PageIndex: 0,
                  PageSize: 15,
                },
                (res: any) => {
                  if (res.IsSuccess) {
                    setPageIndex(2);
                    setRefreshing(false);
                    console.log(
                      res,
                      'Home refresh successfully called-------------------',
                    );
                  } else {
                    showErrorToast(res.Message);
                    if (res?.response?.status === 401) {
                      logOut();
                    }
                  }
                },
              );
            } else {
              console.log('called');
              showErrorToast(res.Message);
              setRefreshing(false);
            }
          } catch (error: any) {
            crashlytics().recordError(error);
            NewRelic.recordError(error);
            crashlytics().log(
              'Home || HomeScreen || fun: onRefresh Notification',
            );
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || HomeScreen || fun: onRefresh onGoingBooking');
    }
  }, []);

  const handleModalPress = (PropertyId: number, Id: number) => {
    try {
      dispatch.Search.propertyDetail(
        {
          id: PropertyId,
        },
        (res: propertyDetail) => {
          if (res.IsSuccess) {
            navigation.navigate('propertydetails', {
              flgFromHome: true,
              bookingId: Id,
            });
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
        'Home || HomeScreen || fun: handleModalPress Property Detail Api',
      );
    }
  };

  const network = InternetCheck();

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
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
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <View style={styles.headerInnerContainer}>
            {userDetails && userDetails.Data ? (
              <>
                <Text style={styles.welcomeText}>
                  Hello, {userDetails.Data.FirstName}
                </Text>
              </>
            ) : (
              <Text style={styles.welcomeText}>Hello</Text>
            )}

            <View style={chatView}>
              {/* <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => toggleModal()}
                style={sosView}>
                <Text style={sosText}>SOS</Text>
              </TouchableOpacity> */}

              <ImageButton
                source={require('../../../assets/images/home/Notification.png')}
                onPress={() =>
                  navigation.navigate('notification', {isfrom: 'home'})
                }
                accessible={true}
                accessibilityLabel="Notification Icon"
                containerStyle={{
                  width: isTablet() ? getWidthTab(48) : getWidth(48),
                  height: isTablet() ? getWidthTab(48) : getWidth(48),
                }}
                style={[
                  styles.chatIcon,
                  {marginRight: isTablet() ? getWidthTab(15) : getWidth(0)},
                ]}>
                {totalUnreadMessage > 0 ? (
                  <View
                    style={[
                      styles.bubbleView,
                      totalUnreadMessage > 9
                        ? {
                            height: isTablet() ? getWidthTab(20) : getWidth(14),
                            width: isTablet() ? getWidthTab(20) : getWidth(14),
                            borderRadius: isTablet()
                              ? getWidthTab(20) / 2
                              : getWidth(14) / 2,
                          }
                        : {
                            height: isTablet() ? getWidthTab(17) : getWidth(12),
                            width: isTablet() ? getWidthTab(17) : getWidth(12),
                            borderRadius: isTablet()
                              ? getWidthTab(17) / 2
                              : getWidth(12) / 2,
                          },
                    ]}>
                    <Text style={styles.bubble}>{totalUnreadMessage}</Text>
                  </View>
                ) : (
                  <></>
                )}
              </ImageButton>

              {/* <ImageButton
                source={require('../../../assets/images/home/ic_chat.png')}
                onPress={() => navigation.navigate('messages')}
                style={chatIcon}
              /> */}
            </View>
          </View>
        </SafeAreaView>

        <View style={{backgroundColor: 'white'}}>
          {loading.effects.Property.onGoingBooking &&
          guestPropertyDetail?.length === 0 ? (
            <ShimmerPlaceHolder style={styles.SHIMMER_TITLE} />
          ) : (
            <View>
              <Text style={styles.TITLE}>My Bookings</Text>
            </View>
          )}
        </View>
        <View
          style={styles.topViewmain}
          pointerEvents={scroll ? 'none' : 'auto'}>
          {network || network === undefined ? (
            orientation === 'landscape' && screenWidth === windowWidth ? (
              <>
                <MyBookingCardLandscape
                  data={guestPropertyDetail}
                  onBookPress={toggleServiceModal}
                  serviceEnable={true}
                  onPressItem={(PropertyId: number, Id: number) =>
                    handleModalPress(PropertyId, Id)
                  }
                  phonePress={(value: string) => {
                    callNumber(value);
                  }}
                  messagePress={(value: string) => {
                    sendWhatsApp(value);
                  }}
                  isLoading={loading.effects.Property.onGoingBooking}
                  onButtonPress={() => {
                    dispatch.Guest.setListOfGuests([]);
                    navigation.navigate('findYourBooking');
                    // navigation.navigate('checkOutScreen');
                  }}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  totalCount={totalCount}
                  onFetch={onFetch}
                  isFromPastBooking={false}
                  listEmptyComponent={
                    <GuestBooking
                      title="My Bookings"
                      subTitle="No properties found.Please head to Search to discover and book your perfect property!"
                    />
                  }
                />
              </>
            ) : (
              <>
                <MyBookingCard
                  data={guestPropertyDetail}
                  onBookPress={toggleServiceModal}
                  serviceEnable={true}
                  onPressItem={(PropertyId: number, Id: number) =>
                    handleModalPress(PropertyId, Id)
                  }
                  phonePress={(value: string) => {
                    callNumber(value);
                  }}
                  messagePress={(value: string) => {
                    sendWhatsApp(value);
                  }}
                  isLoading={loading.effects.Property.onGoingBooking}
                  onButtonPress={() => {
                    dispatch.Guest.setListOfGuests([]);
                    navigation.navigate('findYourBooking');
                    // navigation.navigate('checkOutScreen');
                  }}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  totalCount={totalCount}
                  onFetch={onFetch}
                  isFromPastBooking={false}
                  listEmptyComponent={
                    <GuestBooking
                      title="My Bookings"
                      subTitle="No properties found.Please head to Search to discover and book your perfect property!"
                    />
                  }
                />

                {/* <View style={styles.buttonInnerContainer2}>
            <Button
              buttonStyle={isTablet() ? styles.sButtonTablet : styles.sButton}
              titleStyle={isTablet() ? styles.btnTextTablet : styles.btnText}
              containerStyle={{
                position: 'absolute',
                right: isTablet() ? 25 : 10,
                bottom: isTablet() ? 120 : 90,
                width: isTablet() ? '25%' : '35%',
              }}
              title={'Connect'}
              onPress={() => {
                toggleLogin();
              }}
            />
          </View> */}

                {/* <SOSModal
              setModalVisible={setModalVisible}
              isModalVisible={isModalVisible}
            /> */}
              </>
            )
          ) : (
            <EmptyData
              text1="Opps !"
              text2="Looks like we are lost !"
              imgType={0}
            />
          )}
          {/* <>{showConnectToast()}</> */}

          <GuestLoginModal
            isGuestLogin={isGuestLogin}
            setGuestLogin={setGuestLogin}
          />

          {showTip &&
          !loading.effects.Property.onGoingBooking &&
          guestPropertyDetail?.length === 0 ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setTip(false);
                }}
                style={styles.toolTip}>
                <Text style={styles.toolTipText}>
                  Link your booking details by clicking this button
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <></>
          )}

          {/* <TouchableOpacity
            style={styles.connectButton}
            onPress={() => {
              toggleLogin();
              setTip(false);
            }}
            activeOpacity={0.75}>
            <Image
              style={{
                height: isTablet() ? getWidthTab(85) : getWidth(60),
                width: isTablet() ? getWidthTab(85) : getWidth(60),
              }}
              source={require('../../../assets/images/connect.png')}
            />
          </TouchableOpacity> */}

          <Modal
            testID={'modal'}
            isVisible={isServiceModalVisible}
            onBackdropPress={() => setServiceModalVisible(false)}
            onSwipeComplete={() => setServiceModalVisible(false)}
            swipeDirection="down"
            propagateSwipe={true}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            onBackButtonPress={() => setServiceModalVisible(false)}
            style={style.modalView1}>
            <View style={[style.filterModalContainer, {height: '90%'}]}>
              <Divider
                width={4}
                inset={true}
                insetType="middle"
                style={style.DIVIDER}
              />
              <Text style={style.HEADER}>Activities</Text>
              <Divider color="lightgray" />

              <View style={{height: '70%'}}>
                <ScrollView
                  showsVerticalScrollIndicator={true}
                  keyboardShouldPersistTaps="always"
                  scrollEventThrottle={16}
                  // contentContainerStyle={{backgroundColor: 'red', height: 50}}
                >
                  <BookServices onTotalPriceChange={handleTotalPriceChange} />
                </ScrollView>
              </View>
              {
                <View style={style.ServiceModalContainer}>
                  <TouchableOpacity
                    activeOpacity={0.75}
                    style={[style.BUTTON_STYLE, {flexDirection: 'row'}]}
                    onPress={() => {
                      setServiceModalVisible(false);
                    }}>
                    <Text
                      style={[
                        style.BUTTON_FONT_STYLE,
                        {
                          fontSize: isTablet() ? Font10 : Font16,
                        },
                      ]}>
                      {' \u00A3'}
                      {totalPrice}
                      {'.00'}
                    </Text>

                    <Icon
                      name="arrow-forward-outline"
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginStart: '7%',
                      }}
                      color={'white'}
                      size={15}
                    />
                  </TouchableOpacity>
                </View>
              }
            </View>
          </Modal>
        </View>
        <Draggable
          minX={1}
          minY={64}
          maxX={dimensions.window.width}
          maxY={
            isTablet()
              ? dimensions.window.height - 120
              : dimensions.window.height - 94
          }
          x={isTablet() ? getWidthTab(720) : getWidth(300)} // Adjust the x position based on screen width
          y={
            orientation === 'landscape' && screenWidth === windowWidth
              ? dimensions.window.height - 220
              : isTablet()
                ? dimensions.window.height - 250
                : dimensions.window.height - 170
          } // Adjust the y position based on screen height
          onDrag={() => {
            setScroll(true); // important step to disable scroll when long press this button
          }}
          onRelease={() => {
            setScroll(false); // important step to enable scroll when release or stop drag
          }}>
          <TouchableOpacity
            // style={styles.connectButton}
            onPress={() => {
              toggleLogin();
              setTip(false);
            }}
            accessible={true}
            accessibilityLabel="Connect Booking"
            activeOpacity={0.75}>
            <Image
              style={{
                height:
                  orientation === 'landscape' && screenWidth === windowWidth
                    ? getWidthTab(55)
                    : isTablet()
                      ? getWidthTab(85)
                      : getWidth(60),
                width:
                  orientation === 'landscape' && screenWidth === windowWidth
                    ? getWidthTab(55)
                    : isTablet()
                      ? getWidthTab(85)
                      : getWidth(60),
              }}
              source={require('../../../assets/images/connect.png')}
              accessible={true}
              accessibilityLabel="Connect Icon"
            />
          </TouchableOpacity>
        </Draggable>
      </Suspense>
    </>
  );
};

export default HomeScreen;
