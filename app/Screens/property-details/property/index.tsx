import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Animated,
  Alert,
  FlatList,
  Text,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import CarouselComponent from '../../../../.storybook/stories/carousel-component/carousel-component';
import RemoveCleaningFees from '../../../../.storybook/stories/remove-cleaning-fees/remove-cleaning-fees';
import TaxServices from '../../../../.storybook/stories/tax-services/tax-services';
import PaymentMethods from '../../../../.storybook/stories/payment-methods/payment-methods';
import BookingDetails from '../../../../.storybook/stories/booking-details/booking-details';
import PropertyFeaturesList from '../../../../.storybook/stories/property-features/property-features-list';
import PropertyOwner from '../../../../.storybook/stories/property-owner/property-owner';
import {
  capitalizeFirstLetter,
  getWidth,
  getWidthTab,
} from '../../../utils/common';
import {isTablet} from 'react-native-device-info';
import {Divider} from '@rneui/themed-edge/dist/Divider';
import PropertyInformations from '../../../../.storybook/stories/property-informaton-v2/property-information-v2';
import {useDispatch, useSelector} from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import RefundPolicy from '../../../../.storybook/stories/refund-policy/refund-policy';
import {CarouselItem} from '../../../../.storybook/stories/carousel-component/CarouselItem';
import LayoutModal from '../../search_v2/LayoutModal';
import {Root} from '../../../rematch/types/store.types';
import {LayoutTypes} from '../../search_v2/searchType';

import LockBox from '../../../../.storybook/stories/lock-box/lock-box';
import {myBookingProperty, propertyDetail} from '../../home_2/homeTypes';
import {showErrorToast} from '../../../utils/common/Toast';
import OwnerPropertyItem from '../../../../.storybook/stories/owner-properties/owner-properties';
import GuestBook2 from '../../../../.storybook/stories/guest-book-v2/guest-book-v2';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import {colors} from '../../../theme';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import PropertyDetailStyle from './styles';

// type PropertyDetailsNavigationProp = NativeStackNavigationProp<
//   NavigatorParamList,
//   'myBookingPropertyDetail'
// >;

// interface PropertyDetailProps {
//   navigation: PersonalInfoNavigationProp;
// }

export default function PropertyDetails({navigation, route, yOffset}: any) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const windowHeight = dimensions.window.height;
  const {
    Font10,
    Font11,
    Font12,
    Font14,
    Font15,
    Font16,
    Font18,
    Font8,
    Font4,
    Font5,
    Font6,
    Font7,
    Font9,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = PropertyDetailStyle(
    getWidth,
    getWidthTab,
    windowHeight,
    windowWidth,
    Font10,
    Font11,
    Font12,
    Font14,
    Font15,
    Font16,
    Font18,
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
  const objLockBox = useSelector((state: Root) => state.Property.lockBox);

  const [isLayoutVisible, setLayoutVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  // const [getPageIndex] = useState(1);
  // const pageSize = 10;

  const toggleLLayoutModal = () => {
    setLayoutVisible(!isLayoutVisible);
  };

  const guestPropertyDetail = useSelector(
    (state: Root) => state.Property.hostProperty,
  );

  const DATAPROPERTY = [
    {
      id: 1,
      title: 'Area',
      desc: '2000 Sq.Fit',
    },
    {
      id: 2,
      title: 'Wifi Password',
      desc: '12345678',
    },
    {
      id: 3,
      title: 'Name',
      desc: 'ABC',
    },
    {
      id: 4,
      title: 'Year',
      desc: '2010',
    },
    {
      id: 5,
      title: 'Garage',
      desc: '2',
    },
    {
      id: 6,
      title: 'Full name',
      desc: 'Manchester Park',
    },
  ];

  useEffect(() => {
    // const offset = pageSize * (getPageIndex - 1);

    try {
      dispatch.Property.hostProperty(
        {
          hostId: arrProperties?.PropertyHostId,
        },
        (res: myBookingProperty) => {
          if (res.IsSuccess) {
            // console.log(res, 'hostProperty----');
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || PropertyDetailScreen || fun: hostProperty');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalPress = (Id: number) => {
    try {
      dispatch.Search.propertyDetail(
        {
          id: Id,
        },
        (res: propertyDetail) => {
          if (res.IsSuccess) {
            navigation.push('propertydetails', {isFromOwner: true});
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || fun: hostProperty details',
      );
    }
  };

  useEffect(() => {
    try {
      route?.params?.flgFromHome &&
        dispatch.Property.getLockBox(
          {
            Id: route?.params?.bookingId,
          },
          (res: any) => {
            console.log(route?.params?.bookingId, 'route?.params?.bookingId2');
            if (res.IsSuccess) {
              console.log(res, 'LockBoxForProperty----');
            } else {
              showErrorToast(res.Message);
            }
          },
        );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || PropertyDetailScreen || fun: getLockBox');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIn = '15/06/2022 16:00';
  const checkOut = '16/06/2022 16:00';

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleCheckout, setModalVisibleCheckOut] = useState(false);
  // const [isModalVisibleBooking, setModalVisibleBooking] = useState(false);
  const [isModalVisibleFeatures, setModalVisibleFeatures] = useState(false);
  const [isModalVisibleDetails, setModalVisibleDetails] = useState(false);

  const BookingDetailsEditHandler = (_bookingData: any) => {
    navigation.navigate('findYourBooking');
  };

  const scrollViewRef = useRef<any>();
  const [scrollOffset] = useState<number>(100);

  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const RenderDataProperty = ({item, index}: {item: any; index: number}) => {
    return index === 1 ? (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onLongPress={() => {
            Platform.OS === 'android'
              ? showToastWithGravityAndOffset()
              : Alert.alert('Password copied');
          }}>
          <>
            <Text style={styles.itemTextContainer}>{item.title}</Text>
            <Text style={styles.itemTextContainer1}>{item.desc}</Text>
          </>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTextContainer}>{item.title}</Text>
        <Text style={styles.itemTextContainer1}>{item.desc}</Text>
      </View>
    );
  };

  function showToastWithGravityAndOffset() {
    ToastAndroid.showWithGravityAndOffset(
      'Password copied',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  const CONTENT = arrProperties?.ObjHealthAndSafety;

  const data: CarouselItem[] = [
    {
      title: 'Entertainment',
      AWSThumbNailRelativePath:
        'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.jpg',
      // require('../../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    },
    {
      title: 'Entertainment',
      AWSThumbNailRelativePath:
        'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.jpg',
      // require('../../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    },
    {
      title: 'Entertainment',
      AWSThumbNailRelativePath:
        'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.jpg',
      // require('../../../../assets/images/home/ongoing-booking/ic_booking_1.png'),
    },
  ];

  const [activeSections, setActiveSections] = useState([0]);

  const [activeSections2, setActiveSections2] = useState([0]);

  const renderHeader = (section: any, index: any, isActive: any) => {
    return (
      <View style={styles.randerHeader}>
        <Text style={styles.acoordianTitleTextStyle}>{section.title}</Text>
        <Image
          source={
            isActive
              ? require('../../../../assets/images/minus_icon.png')
              : require('../../../../assets/images/add_icon.png')
          }
          resizeMode="contain"
          style={styles.ICON}
          accessible={true}
          accessibilityLabel="Plus/Minus Icon"
        />
      </View>
    );
  };

  const renderContent = (section: any) => {
    return (
      <View style={styles.randerContent}>
        <FlatList
          scrollEnabled={false}
          data={section.data}
          keyExtractor={(item: any) => item.Id.toString()}
          renderItem={({item}: any) => (
            <View style={styles.INNER_CONTAINER} key={item.Id}>
              <Text style={styles.textStyle}>{`${capitalizeFirstLetter(
                item.Name,
              )} (${item.AmenityItemCount})`}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <Divider color="lightgrey" />}
        />
      </View>
    );
  };

  const renderHeader2 = (section: any, index: number, isActive: boolean) => {
    return (
      <View style={styles.randerHeader}>
        <Text style={styles.acoordianTitleTextStyle}>{section.GroupName}</Text>
        <Image
          source={
            isActive
              ? require('../../../../assets/images/minus_icon.png')
              : require('../../../../assets/images/add_icon.png')
          }
          resizeMode="contain"
          style={styles.ICON}
          accessible={true}
          accessibilityLabel="Plus/Minus Icon"
        />
      </View>
    );
  };

  const renderContent2 = (section: any) => {
    return (
      <View style={styles.randerContent}>
        <FlatList
          scrollEnabled={false}
          data={section?.ObjPrSafetyChecklistData}
          renderItem={({item}: any) => (
            <View style={styles.INNER_CONTAINER}>
              <Text style={styles.textStyle}>
                {capitalizeFirstLetter(item?.Description)}{' '}
                <Text
                  style={{color: item.FlgYes ? '#34C759' : colors.secondary}}>
                  {item.FlgYes ? '(Available)' : '(Not Available)'}
                </Text>
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <Divider color="lightgrey" />}
        />
      </View>
    );
  };

  const setSections = (sections: any) => {
    setActiveSections(sections);
  };

  const setSections2 = (sections: any) => {
    setActiveSections2(sections);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingBottom:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '6%'
              : isTablet()
                ? '10%'
                : '15%',
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View
          style={{
            backgroundColor: '#F4F4F4',
            paddingBottom: isTablet() ? 10 : 15,
          }}>
          <CarouselComponent
            data={
              arrProperties?.ObjSysMediaFile?.length !== 0
                ? arrProperties?.ObjSysMediaFile
                : data
            }
            isLoading={false}
            dotColor={'white'}
            onBackPress={() => navigation.pop()}
          />
          <View style={styles.scrollview}>
            <PropertyInformations
              titleLabel={
                arrProperties?.PropertyNamePublic +
                ': ' +
                arrProperties?.PropertyType
              }
              subTitle={`${
                arrProperties?.AddressFull || ''
              } (Max:${arrProperties?.MaxPersonCanStay} Guests)`}
              rate={arrProperties?.PropertyRating}
              checkIn={arrProperties?.CheckInTimeFrom}
              checkOut={arrProperties?.CheckOutTimeTo}
              price={arrProperties?.RatePerNight}
              isChildAllowed={arrProperties?.LodgingFlgChildrenAllowed}
              isPetAllowed={arrProperties?.LodgingFlgPetsAllowed}
              isSomkingAllowed={arrProperties?.LodgingFlgSmokingAllowed}
              onModalPress={toggleLLayoutModal}
              onPressReview={() =>
                navigation.navigate('reviewScreen', {
                  propertyId: arrProperties?.Id,
                  rating: arrProperties?.PropertyRating,
                })
              }
            />
            {arrProperties?.ObjOwner && (
              <PropertyOwner
                name={arrProperties?.ObjOwner?.Name}
                containerStyle={styles.componentWrapper}
                number={arrProperties?.ObjOwner?.PhoneNo}
              />
            )}
            <View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? '2%'
                      : isTablet()
                        ? '5%'
                        : '7%',
                  padding:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? getWidthTab(10)
                      : isTablet()
                        ? '4%'
                        : '5%',
                  borderRadius:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? getWidthTab(10)
                      : isTablet()
                        ? getWidthTab(20)
                        : getWidth(10),
                }}>
                <Text style={styles.roomsAndBedsTextStyle}>Amenities</Text>
                <Accordion
                  activeSections={activeSections}
                  sections={arrProperties?.ObjAmenities?.map((group: any) => {
                    return {
                      title: group.GroupName,
                      data: group.Amenities,
                    };
                  })}
                  touchableComponent={TouchableOpacity}
                  renderHeader={renderHeader}
                  renderContent={renderContent}
                  duration={400}
                  containerStyle={{
                    marginTop:
                      orientation === 'landscape' && screenWidth === windowWidth
                        ? '1%'
                        : isTablet()
                          ? '4%'
                          : '5%',
                  }}
                  onChange={setSections}
                  // renderAsFlatList={true}
                />
              </View>
              {route?.params?.isbookigDetails === false && (
                <BookingDetails
                  checkIn={checkIn}
                  checkOut={checkOut}
                  containerStyle={styles.componentWrapper}
                  onPress={item => BookingDetailsEditHandler(item)}
                />
              )}

              {arrProperties?.ObjFeeHead && (
                <View>
                  <TaxServices
                    Title="Tax And Services"
                    data={arrProperties?.ObjFeeHead}
                  />
                </View>
              )}
              {arrProperties?.ObjPrCancellationPolicy && (
                <View>
                  <RefundPolicy data={arrProperties?.ObjPrCancellationPolicy} />
                </View>
              )}

              {arrProperties?.ObjPaymentMethod && (
                <View>
                  <PaymentMethods
                    Title="Payment Methods"
                    data={arrProperties?.ObjPaymentMethod}
                  />
                </View>
              )}

              {CONTENT && CONTENT?.length !== 0 && (
                <View style={styles.subContainers}>
                  <Text style={styles.roomsAndBedsTextStyle}>
                    Health And Safety
                  </Text>
                  <Accordion
                    activeSections={activeSections2}
                    sections={CONTENT}
                    touchableComponent={TouchableOpacity}
                    renderHeader={renderHeader2}
                    renderContent={renderContent2}
                    duration={400}
                    containerStyle={{
                      marginTop:
                        orientation === 'landscape' &&
                        screenWidth === windowWidth
                          ? '1%'
                          : isTablet()
                            ? '4%'
                            : '5%',
                    }}
                    onChange={setSections2}
                    // renderAsFlatList={true}
                  />
                </View>
              )}
              {arrProperties?.GuestBookFile && (
                <GuestBook2
                  onPress={() =>
                    navigation.navigate('GuestBookPdf', {
                      Url: arrProperties?.GuestBookFile,
                    })
                  }
                />
              )}

              {objLockBox !== null && route?.params?.flgFromHome && (
                <View style={styles.subContainers}>
                  <LockBox
                    title="LockBox"
                    subTitle={objLockBox.LockBoxCode || '0000'}
                    data={objLockBox.Photos}
                  />
                </View>
              )}
            </View>
          </View>
        </View>

        {guestPropertyDetail?.length !== 0 && !route?.params?.isFromOwner && (
          <OwnerPropertyItem
            data={guestPropertyDetail}
            isLoading={false}
            onModalPress={(id: any) => handleModalPress(id)}
            ownerName={arrProperties?.ObjOwner?.Name}
            ViewAllPress={() => {
              navigation.navigate('ownerProperty', {
                hostID: arrProperties?.PropertyHostId,
              });
            }}
          />
        )}

        {/* {route?.params?.isbookigDetails === true ? (
          <BookingFooter
            checkIn={checkInFooter}
            checkOut={checkOutFooter}
            rate={rate}
            numberOfDays={numberOfDays}
            onPress={availableProperty}
            isCheckout={route && route?.params?.checkout}
          />
        ) : (
          <BookingFooter1
            checkIn={checkInFooter}
            checkOut={checkOutFooter}
            rate={rate}
            numberOfDays={numberOfDays}
            onPress={() => {
              setModalVisible(!isModalVisible);
              changeSuccessFlag(2);
            }}
            isCheckout={route && route?.params?.checkout}
            onPress1={() => {
              setModalVisibleBooking(!isModalVisibleBooking);
              changeSuccessFlag(3);
            }}
          />
        )} */}

        {/* <Footer /> */}

        <Modal
          isVisible={isModalVisibleCheckout}
          avoidKeyboard={true}
          onBackdropPress={() => setModalVisibleCheckOut(false)}
          onSwipeComplete={() => setModalVisibleCheckOut(false)}
          swipeDirection="down"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          style={styles.removeCleaningModalContainer}>
          <View style={{width: isTablet() ? getWidthTab(620) : getWidth(315)}}>
            <RemoveCleaningFees
              heading={'Are you sure you want to checkout ?'}
              divider={false}
              text={''}
              container={{
                borderRadius: getWidth(15),
                paddingBottom: getWidth(25),
              }}
              headingStyle={{marginTop: getWidth(15)}}
              textStyle={{marginTop: getWidth(18)}}
              onPress={() => {
                setModalVisibleCheckOut(false);
                setTimeout(() => {
                  navigation.navigate('checkOutScreen');
                }, 400);
              }}
              onPress1={() => setModalVisibleCheckOut(false)}
            />
          </View>
        </Modal>

        <Modal
          isVisible={isModalVisible}
          avoidKeyboard={true}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          style={styles.removeCleaningModalContainer}>
          <View>
            <RemoveCleaningFees
              heading={'Are you sure you want to modify your booking details ?'}
              divider={false}
              text={''}
              container={{
                borderRadius: getWidth(15),
                paddingBottom: getWidth(25),
              }}
              headingStyle={{marginTop: getWidth(15)}}
              textStyle={{marginTop: getWidth(18)}}
              onPress={() => {
                setModalVisible(!isModalVisible);
                navigation.navigate('findYourBooking', {
                  reservationNumber: 123,
                  amountPaid: 8888,
                });
                // navigation.navigate('modifyBooking');
              }}
              onPress1={() => setModalVisible(!isModalVisible)}
            />
          </View>
        </Modal>

        <Modal
          // testID={'modal'}
          isVisible={isModalVisibleFeatures}
          onBackdropPress={() => setModalVisibleFeatures(false)}
          onSwipeComplete={() => setModalVisibleFeatures(false)}
          swipeDirection="down"
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          propagateSwipe={true}
          style={styles.modalContainer}>
          <View style={styles.scrollableModal}>
            <View ref={scrollViewRef}>
              <PropertyFeaturesList />
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={isModalVisibleDetails}
          onBackdropPress={() => setModalVisibleDetails(false)}
          onSwipeComplete={() => setModalVisibleDetails(false)}
          swipeDirection="down"
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          propagateSwipe={true}
          style={styles.modalContainer}>
          <View style={styles.scrollableModal}>
            <View ref={scrollViewRef} style={styles.listContainer}>
              <Divider width={3} insetType="middle" style={styles.divider} />
              <FlatList
                data={DATAPROPERTY}
                renderItem={RenderDataProperty}
                numColumns={isTablet() ? 3 : 2}
                style={{paddingHorizontal: '4%', paddingVertical: '6%'}}
              />
            </View>
          </View>
        </Modal>

        {arrProperties?.ObjLayout !== null && (
          <LayoutModal
            isLayoutModalVisible={isLayoutVisible}
            setLayoutModalVisible={setLayoutVisible}
            data={arrProperties?.ObjLayout as LayoutTypes}
          />
        )}
      </Animated.ScrollView>

      {/* booking - phase-2 */}
      {/*  <View style={styles.BUTTON_CONTAINER}>
        <Button
                        accessibilityLabel='Proceed to Booking'
          onPress={() => {
            navigation.navigate('proceedToBooking');
          }}
          type="solid"
          loading={false}
          containerStyle={{
            borderRadius: isTablet() ? getWidthTab(12) : getWidth(43),
          }}
          buttonStyle={styles.BUTTON_STYLE}
          titleStyle={styles.BUTTON_FONT_STYLE}
          title={'Book Property'}
          iconRight={true}
          icon={
            <Icon
              name={'arrow-forward-outline'}
              size={isTablet() ? 30 : 20}
              style={{marginStart: '2%'}}
              color={colors.background}
            />
          }
        />
      </View> */}
    </View>
  );
}
