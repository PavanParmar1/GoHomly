/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {App} from '../../../assets/images/map';

import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/themed';
import GuestDetailsForm2 from '../../../.storybook/stories/guest-details-form/guest-details-from-v2';
import GuestDetails from '../../../.storybook/stories/guest-details/guest-details';
import GuestDetailsShimmer from '../../../.storybook/stories/guest-details/guest-details-shimmer';
import BookProperty from '../../../.storybook/stories/book-property/book-property-v2';
import Footer from '../../../.storybook/stories/footer-background/footer';

// import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast, showToast} from '../../utils/common/Toast';
import {colors} from '../../theme';
import {isTablet} from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import PropertyDialog from '../../../.storybook/stories/check-out/property-dialog';
import {Fonts} from '../../utils/common';
import crashlytics from '@react-native-firebase/crashlytics';
import Draggable from 'react-native-draggable';
import {isIOS} from '@rneui/base';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import findBookingStyles from './styles';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import guestDetailStyle from '../../../.storybook/stories/guest-details/guest-details.presets2';

export default function FindYourBooking({navigation}: any) {
  const previousAmountPaid = 31990;
  const currentAmountPaid = 12990;
  const propertyState = useSelector((state: any) => state.Property);
  const bookingId = propertyState.selecetedGuestProperty.Id;
  const PropertyId = propertyState.selecetedGuestProperty.PropertyId;
  const PropertyHostId = propertyState.selecetedGuestProperty?.PropertyHostId;
  // console.log(propertyState?.selecetedGuestProperty?.PropertyHostId, 'selected');

  const {dimensions, orientation} = useOrientation();
  const windowHeight = dimensions.window.height;
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font18,
    getWidth,
    Font12,
    getWidthTab,
    Font13,
    Font9,
    Font10,
    Font11,
    Font14,
    Font15,
    Font16,
    getHeight,
    navbarHeader,
    navbarImage,
    navbarTitle,
    Font7,
    Font8,
    Font6,
    Font5,
    Font4,
  } = useSize();
  const styles = findBookingStyles(
    Font18,
    dimensions.window.width,
    getWidth,
    dimensions.window.height,
    Font12,
    getWidthTab,
  );

  const style = guestDetailStyle(
    Font10,
    Font11,
    Font12,
    Font14,
    Font15,
    Font16,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    orientation,
    Font7,
    Font8,
    Font6,
    Font5,
    Font4,
    screenWidth,
    windowWidth,
  );

  const [CheckinStatus, setCheckinStatus] = useState(
    propertyState.selecetedGuestProperty.CheckinStatus,
  );
  const {logOut} = useUser();

  useEffect(() => {
    setCheckinStatus(propertyState.selecetedGuestProperty.CheckinStatus);
  }, [propertyState.selecetedGuestProperty]);

  const loading = useSelector((state: any) => state.loading);
  const arrGuests = useSelector((state: any) => state.Guest.arrGuests);
  const arrRequestedDocumentByProperty = useSelector(
    (state: any) => state.Guest.arrRequestedDocumentByProperty,
  );
  const dispatch = useDispatch();
  const [isScroll, setScroll] = useState(false);
  const [isBookPropertyModalVisible, setBookPropertyModalVisible] =
    useState(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isRatingModalVisible, setRatingModalVisible] =
    useState<boolean>(false);

  const priceList = [
    {charge: 'Base Price', amount: ' £ 15'},
    {charge: 'Cleaning Fees', amount: ' £ 15'},
    {charge: 'Breakfast', amount: ' £ 25'},
    {charge: 'Add On Facilities Charges', amount: ' £ 20'},
    {charge: 'Online food Charges', amount: ' £ 50'},
    {charge: 'Tax', amount: ' £ 50'},
  ];

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    try {
      setRefreshing(true);
      dispatch.Guest.getListOfGuests(
        {
          bookingid: bookingId,
        },

        (res: any) => {
          if (res.IsSuccess) {
            setRefreshing(false);
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: onRefresh of gusetLis',
      );
    }
  }, []);

  const [scrollOffset, setScrollOffset] = useState(null);
  const scrollViewRef = useRef();

  const guestDocs = (item: any, segmentIndex: number) => {
    try {
      dispatch.Guest.getGuestDocs({Id: item.Id}, (res: any) => {
        if (res.IsSuccess) {
          navigation.navigate('AddGuest', {
            Data: item,
            BookingId: bookingId,
            GuestId: item.Id,
            segmentIndex: segmentIndex,
          });
        } else {
          showErrorToast(res.Message);
        }
      });
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: guestDocs',
      );
    }
  };

  useEffect(() => {
    try {
      dispatch.Guest.getLanguages('', (res: any) => {
        if (res.IsSuccess) {
        } else {
          showErrorToast(res.Message);
        }
      });
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: getLanguages',
      );
    }
  }, []);

  useEffect(() => {
    try {
      dispatch.Guest.getPropertyReviewQuestions(
        {
          PageIndex: 0,
          PageSize: 10,
          PropertyHostId: PropertyHostId,
        },
        (res: any) => {
          if (res.status === 200) {
            console.log(res, 'sucessfully called-------------------');
          } else {
            // showErrorToast(res.Message);
            console.log(res, 'failed');
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: getPropertyReviewQuestions',
      );
    }
  }, [PropertyHostId]);

  useEffect(() => {
    try {
      dispatch.Guest.getRequestedDocumentByProperty(
        {
          Id: PropertyId,
        },
        (res: any) => {
          if (res.IsSuccess) {
            // setTotalDocCount(res.Data.length);
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: getRequestedDocumentByProperty',
      );
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      try {
        dispatch.Guest.getListOfGuests(
          {
            bookingid: bookingId,
          },

          (res: any) => {
            if (res.IsSuccess) {
            } else {
              showErrorToast(res.Message);
            }
          },
        );
      } catch (error: any) {
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log(
          'Home || FindYourBooking || GuestList || fun: getListOfGuests',
        );
      }
    }, [bookingId]),
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleBookPropertyModal = () => {
    setBookPropertyModalVisible(!isBookPropertyModalVisible);
  };

  const checkIn = (guestId: any) => {
    try {
      dispatch.Guest.checkIn(
        {
          guestId: guestId,
        },
        (res: any) => {
          if (res.status === 200) {
            console.log(res, 'success of checkin');
            showToast('Successfully Checked In');
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || FindYourBooking || GuestList || fun: checkIn');
    }
  };

  const getVerify = (Id: any) => {
    try {
      console.log('verifyResponse===');
      dispatch.Guest.getVerify(
        {
          Id: Id,
        },
        (res: any) => {
          console.log(res, 'VerifyResponse===');
          if (res === true) {
            showToast('Guest Verified Successfully');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || GuestList || fun: getVerify',
      );
    }
  };

  const checkOut = (guestId: any) => {
    Alert.alert(
      'Checkout',
      'Are you sure you want to Checkout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            try {
              console.log(guestId, 'guestId------------');
              dispatch.Guest.checkOut(
                {
                  guestId: guestId,
                },

                (res: any) => {
                  if (res.status === 200) {
                    navigation.navigate('checkOutScreen', {
                      propertyId: PropertyId,
                      propertyHostId: PropertyHostId,
                    });
                    console.log(res, 'resr=========== success');

                    // setRatingModalVisible(!isRatingModalVisible);
                    // showToast(res.Message);
                  } else {
                    console.log(res, 'resr=========== fail');
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
                'Home || FindYourBooking || GuestList || fun: checkOut',
              );
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  function payment() {
    setBookPropertyModalVisible(!isBookPropertyModalVisible);
    if (previousAmountPaid > currentAmountPaid) {
      navigation.navigate('cancelBooking', {title: 'Modify Booking'});
    } else {
      navigation.navigate('Payment', {modification: true});
    }
    navigation.navigate('Payment', {modification: false});
  }

  const handleOnScroll = (event: any) => {
    // this.setState({
    //   scrollOffset: event.nativeEvent.contentOffset.y,
    // });
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Guest Detail'}</Text>,
      headerRight: () => (
        <TouchableOpacity
          style={[navbarHeader, {alignItems: 'flex-end'}]}
          onPress={() =>
            navigation.navigate('GetInProperty', {
              BookingId: bookingId,
            })
          }>
          <Icon
            size={isTablet() ? getWidthTab(30) : getWidth(24)}
            color={'black'}
            name="information-circle-outline"
          />
        </TouchableOpacity>
      ),
      headerShadowVisible: true,
    });
  }, [navigation]);

  const _renderItem = ({item}: any) => (
    <>
      {/* <Text>{JSON.stringify(item)}</Text> */}
      <GuestDetails
        checkInStatus={CheckinStatus}
        onEditPress={() => {
          guestDocs(item, 0);
        }}
        onCheckoutPress={() => {
          checkOut(item.Id);
        }}
        onUploadPress={() => {
          guestDocs(item, 1);
        }}
        onCheckinPress={() => {
          checkIn(item.Id);
        }}
        onVerifyPress={() => {
          getVerify(item.Id);
        }}
        data={item}
        countOfRequstedDocumentsByProperty={
          arrRequestedDocumentByProperty.length
        }
      />
    </>
  );

  const NoItem = () => (
    <>
      <GuestDetailsShimmer />
    </>
  );

  return (
    <>
      <View
        style={{flex: 1, backgroundColor: colors.background}}
        pointerEvents={isScroll ? 'none' : 'auto'}>
        {arrGuests.length === 0 && !loading.effects.Guest.getListOfGuests ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{
                height: getWidth(199.24),
                width: getWidth(105.7),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={require('../../../assets/images/guest_no_item.png')}
              accessible={true}
              accessibilityLabel="Guest No Item Icon"
            />
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding:
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? '1%'
                    : '2%',
                paddingHorizontal: '3%',
              }}>
              <Image
                source={require('../../../assets/images/verified_icon.png')}
                resizeMode={'contain'}
                style={style.ICON_VERIFIED2}
                accessible={true}
                accessibilityLabel="Verified Icon"
              />
              <Text
                style={{
                  includeFontPadding: false,
                  fontSize:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? Font6
                      : isTablet()
                        ? Font9
                        : Font13,
                  fontFamily: Fonts.SFProRounded.Regular,
                  color: 'black',
                  marginStart:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? '1%'
                      : '2%',
                }}>
                Lead Guest
              </Text>
            </View>
            {arrGuests.length !== 0 && (
              <FlatList
                key={
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? 2
                    : 1
                }
                numColumns={
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? 2
                    : 1
                }
                data={arrGuests}
                renderItem={_renderItem}
                extraData={arrGuests}
                refreshControl={
                  <RefreshControl
                    tintColor={colors.secondary}
                    colors={[colors.secondary]}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                scrollEnabled={true}
                ItemSeparatorComponent={() =>
                  orientation === 'portrait' && (
                    <Divider style={{marginLeft: '5%'}} />
                  )
                }
                ListFooterComponent={() => (
                  <Footer
                    isVisible={true}
                    style={{backgroundColor: 'white', height: 70}}
                  />
                )}
              />
            )}

            {arrGuests.length === 0 && (
              <FlatList
                scrollEnabled={false}
                style={{width: '100%'}}
                data={[1, 2, 3, 4, 5, 6, 7]}
                renderItem={NoItem}
              />
            )}
          </>
        )}

        <Modal
          isVisible={isRatingModalVisible}
          avoidKeyboard={true}
          onBackdropPress={() => setRatingModalVisible(false)}
          onSwipeComplete={() => setRatingModalVisible(false)}
          onBackButtonPress={() => {
            setRatingModalVisible(false);
          }}
          swipeDirection="down"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          style={styles.modalStyle}>
          <View style={styles.modalView}>
            <PropertyDialog
              onPress={() => {
                setModalVisible(false);
                navigation.popToTop();
              }}
            />
          </View>
        </Modal>

        <Modal
          testID={'modal'}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          propagateSwipe={true}
          style={styles.modal}>
          <View style={styles.scrollableModal}>
            <Divider
              width={4}
              inset={true}
              insetType="middle"
              style={styles.DIVIDER}
            />
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleOnScroll}
              scrollEventThrottle={16}>
              <GuestDetailsForm2 onPress={toggleModal} />
            </ScrollView>
          </View>
        </Modal>
        <Modal
          testID={'modal'}
          isVisible={isBookPropertyModalVisible}
          onBackdropPress={() => setBookPropertyModalVisible(false)}
          onSwipeComplete={() => setBookPropertyModalVisible(false)}
          swipeDirection="down"
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          propagateSwipe={true}
          style={styles.modal}>
          <View style={styles.scrollableModal}>
            <Divider
              width={4}
              inset={true}
              insetType="middle"
              style={styles.DIVIDER}
            />
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleOnScroll}
              scrollEventThrottle={16}>
              <BookProperty
                priceList={priceList}
                onPress={toggleBookPropertyModal}
                payment={() => payment}
              />
            </ScrollView>
          </View>
        </Modal>
        <Footer />
      </View>
      <Draggable
        minX={1}
        minY={1}
        maxX={windowWidth}
        maxY={windowHeight - 100}
        x={isTablet() ? getWidthTab(720) : getWidth(300)} // Adjust the x position based on screen width
        y={
          isTablet()
            ? windowHeight - 230
            : isIOS
              ? windowHeight - 200
              : windowHeight - 170
        } // Adjust the y position based on screen height
        onDrag={() => {
          setScroll(true); // important step to disable scroll when long press this button
        }}
        onRelease={() => {
          setScroll(false); // important step to enable scroll when release or stop drag
        }}>
        <TouchableOpacity
          // style={styles.addButton}
          onPress={() => {
            dispatch.Guest.setGuestUploadedDocumentsInitial([]);
            dispatch.Guest.setGuestUploadedDocumentsAll([]);
            navigation.navigate('AddGuest', {BookingId: bookingId});
          }}
          accessible={true}
          accessibilityLabel="Add Guest"
          activeOpacity={0.75}>
          <Image
            style={{
              height:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? getWidthTab(70)
                  : isTablet()
                    ? getWidthTab(95)
                    : getWidth(70),
              width:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? getWidthTab(70)
                  : isTablet()
                    ? getWidthTab(95)
                    : getWidth(70),
            }}
            source={require('../../../assets/images/add_guest.png')}
          />
        </TouchableOpacity>
      </Draggable>
    </>
  );
}
