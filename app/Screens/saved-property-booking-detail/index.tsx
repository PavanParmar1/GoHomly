import React, {Suspense, useCallback, useRef, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import savedPropertyStyles, {styles} from './styles';
import {navbarTitle} from '../../utils/common/size';
// import TopProperties from '../../../.storybook/stories/top-properties/top-properties';
const TopProperties = React.lazy(
  () => import('../../../.storybook/stories/top-properties/top-properties'),
);

const TopPropertiesLandscape = React.lazy(
  () =>
    import(
      '../../../.storybook/stories/top-properties/top-properties-landscape'
    ),
);

import Modal from 'react-native-modal';
import {Divider} from '@rneui/base';
import LayoutProperties from '../../../.storybook/stories/layout-properties/layout-properties';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../navigators/saved-property-stack-navigator';
import {useDispatch, useSelector} from 'react-redux';
import {showErrorToast} from '../../utils/common/Toast';
import {useFocusEffect} from '@react-navigation/native';
import {propertyDetail} from '../home_2/homeTypes';
import LayoutModal from '../search_v2/LayoutModal';
import EmptyData from '../empty-data';
import {isTablet} from 'react-native-device-info';
import crashlytics from '@react-native-firebase/crashlytics';
import {Root} from '../../rematch/types/store.types';
import {colors} from '../../theme';
import LottieView from 'lottie-react-native';
import {Anim} from '../../../assets/anim/map';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import CheckAvailabilityModal from '../search_v2/CheckAvailabilityModal';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

type SavedNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'savedPropertyBookingDetail'
>;

interface SavedProps {
  navigation: SavedNavigationProp;
}

const SavedPropertyBookingDetail: React.FC<SavedProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const arrUserLikes = useSelector(
    (state: any) => state?.Property?.likedProperty,
  );
  const totalLikedCount = useSelector(
    (state: Root) => state.Property.totalLikedPropertyCount,
  );

  const {orientation, dimensions} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {Font12, getWidth, getWidthTab, Font6, Font7, Font8, Font17} =
    useSize();
  const styles = savedPropertyStyles(
    Font17,
    getWidth,
    getWidthTab,
    Font12,
    dimensions.window.height,
  );

  const [loadingCheck, setLoadingheck] = useState<{[key: number]: boolean}>({});

  const loading = useSelector((state: any) => state.loading);

  const [isLayoutModalVisible, setLayoutModalVisible] =
    useState<boolean>(false);

  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [getLayout, setLayout] = useState<any>();

  const [getPage, setPage] = useState<number>(1);
  const pageSize = 3;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleModalPress2 = (Id: number) => {
    setLoadingheck(prevState => ({
      ...prevState,
      [Id]: true, // Set loading state to true when action is initiated for a specific card
    }));

    try {
      dispatch.Search.propertyDetail(
        {
          id: Id,
        },
        (res: propertyDetail) => {
          if (res.IsSuccess) {
            try {
              dispatch.Property.getPropertyRates(
                {
                  id: Id,
                },
                (res: any) => {
                  if (res.IsSuccess) {
                    handlePresentModalPress();
                    // setModalVisible2(!isModalVisible2);
                    setLoadingheck(prevState => ({
                      ...prevState,
                      [Id]: false, // Set loading state to false when action is completed for a specific card
                    }));
                  } else {
                    showErrorToast(res.Message);
                  }
                },
              );
            } catch (error: any) {
              crashlytics().recordError(error);
              NewRelic.recordError(error);

              crashlytics().log(
                'Search || OwnersProperty || fun: handleModalPress2 || getPropertyRates apiCall',
              );
            }
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);

      crashlytics().log(
        'Search || OwnersProperty || fun: handleModalPress2 || propertyDetail apiCall',
      );
    }
  };

  const getLikedProperty = () => {
    try {
      dispatch.Property.getLikedProperty(
        {
          pageIndex: 0,
          pageSize: pageSize,
          isInitial: true,
        },
        (res: any) => {
          if (res.IsSuccess) {
            setRefreshing(false);
            setPage(2);
          } else {
            showErrorToast(res.Message);
            setRefreshing(false);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);

      crashlytics().log(
        'Favourite || SavedPropertyDetail || fun: getLikedProperty',
      );
    }
  };

  const onEndFetch = () => {
    try {
      const offset = pageSize * (getPage - 1);
      arrUserLikes.length < totalLikedCount &&
        !loading.effects.Property.getLikedProperty &&
        arrUserLikes.length > 0 &&
        dispatch.Property.getLikedProperty(
          {
            pageIndex: offset,
            pageSize: pageSize,
            isInitial: false,
          },
          (res: any) => {
            if (res) {
              console.log('getLikedPropertyOnEnd', res.Message);
              setPage(getPage + 1);
            } else {
              console.log('else');
              showErrorToast(res.Message);
            }
          },
        );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);

      crashlytics().log('Favourite || SavedPropertyDetail || fun: onEndFetch');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getLikedProperty();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const handleModalPress = (Id: number) => {
    try {
      dispatch.Search.propertyDetail(
        {
          id: Id,
        },
        (res: propertyDetail) => {
          if (res.IsSuccess) {
            navigation.navigate('mySavedPropertyDetail');
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Favourite || SavedPropertyDetail || fun: handleModalPress for propertyDetail',
      );
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getLikedProperty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLayoutModal = () => {
    setLayoutModalVisible(!isLayoutModalVisible);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={navbarTitle}>{'Saved Property'}</Text>,
    });
  }, [navigation]);

  const [isModalVisible, setModalVisible] = useState(false);

  return (
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
      <View style={styles.outerContainer}>
        {/* <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}> */}
        <View style={styles.container}>
          {/* <TopProperties
            data={arrUserLikes}
            horizontal={false}
            loadingState={loadingCheck}
            isLoading={loading.effects.Property.getLikedProperty}
            totalCount={totalLikedCount}
            OnCheckAvailabilityPress={(Id: any) => {
              handleModalPress2(Id);
            }}
            onLayoutPress={(id: number) => {
              arrUserLikes.map((item: any) => {
                console.log(item.Layout, 'item.Layout===');
                if (item.Id === id) {
                  setLayout(item.Layout);
                }
              });

              toggleLayoutModal();
            }}
            onModalPress={(Id: any) => {
              handleModalPress(Id);
            }}
            listEmptyComponent={
              !loading.effects.Property.getLikedProperty && (
                <View
                  style={{
                    height: '100%',
                    paddingBottom: isTablet() ? '10%' : '21%',
                  }}>
                  <EmptyData
                    text1="Opps !"
                    text2="No Data Found !"
                    imgType={1}
                  />
                </View>
              )
            }
            onRefresh={() => onRefresh()}
            refreshing={refreshing}
            onFetch={onEndFetch}
          /> */}

          {orientation === 'landscape' && screenWidth === windowWidth ? (
            <>
              <TopPropertiesLandscape
                data={arrUserLikes}
                horizontal={false}
                loadingState={loadingCheck}
                isLoading={loading.effects.Property.getLikedProperty}
                totalCount={totalLikedCount}
                OnCheckAvailabilityPress={(Id: any) => {
                  handleModalPress2(Id);
                }}
                onLayoutPress={(id: number) => {
                  arrUserLikes.map((item: any) => {
                    console.log(item.Layout, 'item.Layout===');
                    if (item.Id === id) {
                      setLayout(item.Layout);
                    }
                  });

                  toggleLayoutModal();
                }}
                onModalPress={(Id: any) => {
                  handleModalPress(Id);
                }}
                listEmptyComponent={
                  !loading.effects.Property.getLikedProperty && (
                    <View
                      style={{
                        height: '100%',
                        paddingBottom: isTablet() ? '10%' : '21%',
                      }}>
                      <EmptyData
                        text1="Opps !"
                        text2="No Data Found !"
                        imgType={1}
                      />
                    </View>
                  )
                }
                onRefresh={() => onRefresh()}
                refreshing={refreshing}
                onFetch={onEndFetch}
              />
            </>
          ) : (
            <>
              <TopProperties
                data={arrUserLikes}
                horizontal={false}
                loadingState={loadingCheck}
                isLoading={loading.effects.Property.getLikedProperty}
                totalCount={totalLikedCount}
                OnCheckAvailabilityPress={(Id: any) => {
                  handleModalPress2(Id);
                }}
                onLayoutPress={(id: number) => {
                  arrUserLikes.map((item: any) => {
                    console.log(item.Layout, 'item.Layout===');
                    if (item.Id === id) {
                      setLayout(item.Layout);
                    }
                  });

                  toggleLayoutModal();
                }}
                onModalPress={(Id: any) => {
                  handleModalPress(Id);
                }}
                listEmptyComponent={
                  !loading.effects.Property.getLikedProperty && (
                    <View
                      style={{
                        height: '100%',
                        paddingBottom: isTablet() ? '10%' : '21%',
                      }}>
                      <EmptyData
                        text1="Opps !"
                        text2="No Data Found !"
                        imgType={1}
                      />
                    </View>
                  )
                }
                onRefresh={() => onRefresh()}
                refreshing={refreshing}
                onFetch={onEndFetch}
              />
            </>
          )}

          <LayoutModal
            isLayoutModalVisible={isLayoutModalVisible}
            setLayoutModalVisible={setLayoutModalVisible}
            data={getLayout}
          />

          {/* <Modal
            testID={'modal'}
            isVisible={isModalVisible2}
            onBackdropPress={() => setModalVisible2(false)}
            onSwipeComplete={() => setModalVisible2(false)}
            onBackButtonPress={() => setModalVisible2(false)}
            swipeDirection="down"
            scrollOffsetMax={400 - 300}
            propagateSwipe={true}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            style={modal}>
            <View style={[scrollableModal, {height: '90%'}]}>
              <Divider
                width={4}
                inset={true}
                insetType="middle"
                style={MODALDIVIDER}
              />
              <CalendarList
                pastScrollRange={0} // Set to 0 to disable scrolling to past months
                futureScrollRange={7} // Display the full current year and all future years
                scrollEnabled={true}
                showScrollIndicator={true}
                minDate={currentDate}
                // eslint-disable-next-line react/no-unstable-nested-components
                dayComponent={({date}: {date: any}) => {
                  return (
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        backgroundColor: unavailableDates.includes(
                          date.dateString,
                        )
                          ? 'rgba(239, 239, 240, 1)'
                          : getMarkingStyle(date).color,

                        borderTopLeftRadius:
                          dateRange?.startDate === date.dateString ? 20 : 0,
                        borderBottomLeftRadius:
                          dateRange?.startDate === date.dateString ? 20 : 0,
                        borderTopRightRadius:
                          dateRange?.endDate === date.dateString ? 20 : 0,
                        borderBottomRightRadius:
                          dateRange?.endDate === date.dateString ? 20 : 0,
                        width: unavailableDates?.includes(date.dateString)
                          ? ''
                          : 60,
                        padding: 7,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          textAlign: 'center',
                          color:
                            dateRange.startDate === date.dateString
                              ? 'white'
                              : dateRange.endDate === date.dateString
                                ? 'white'
                                : getMarkingStyle(date).color ===
                                    colors.secondary // Check if the date is within the range
                                  ? 'white' // Set text color to white for dates within the range
                                  : unavailableDates?.includes(date.dateString)
                                    ? 'grey'
                                    : 'black', // Otherwise, set text color to black
                        }}>
                        {date.day}
                      </Text>
                      {arrPropertyRates.length === 1 && (
                        <GetRateLabel date={date.dateString} />
                      )}
                    </View>
                  );
                }}
              />
            </View>
          </Modal> */}
          <CheckAvailabilityModal bottomSheetModalRef={bottomSheetModalRef} />

          <Modal
            testID={'modal'}
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
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
              <ScrollView scrollEventThrottle={16}>
                <LayoutProperties />
              </ScrollView>
            </View>
          </Modal>
        </View>
        {/* <Footer isVisible={true} /> */}
        {/* </ScrollView> */}
      </View>
    </Suspense>
  );
};

export default SavedPropertyBookingDetail;
