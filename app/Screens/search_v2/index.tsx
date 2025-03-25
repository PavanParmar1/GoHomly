/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect, Suspense, useCallback} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

const SearchBarV2 = React.lazy(
  () => import('../../../.storybook/stories/search-bar-v2/search-bar-v2'),
);
const TopProperties = React.lazy(
  () => import('../../../.storybook/stories/top-properties/top-properties'),
);
const TopPropertiesLandscape = React.lazy(
  () =>
    import(
      '../../../.storybook/stories/top-properties/top-properties-landscape'
    ),
);
const NearByV2 = React.lazy(
  () => import('../../../.storybook/stories/near-by-v2/near-by-v2'),
);
import {AllItems} from '../../../.storybook/stories/near-by-v2/NearByItem';

import {Anim} from '../../../assets/anim/map';
import moment from 'moment';
import {showErrorToast, showToast} from '../../utils/common/Toast';
import FilterModalV2 from './filter-modal-v2/index';
import {useDispatch, useSelector} from 'react-redux';
import SearchModal from './searchModel';
import LayoutModal from './LayoutModal';
import EmptyData from '../empty-data';
import InternetCheck from '../../utils/common/InternetCheck';
import {isTablet} from 'react-native-device-info';
import {
  SearchParamsTypes,
  guestParam,
  nearByRenderItem,
  whenDateTye,
} from './searchType';
import {propertyDetail} from '../home_2/homeTypes';
import {Root} from '../../rematch/types/store.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../navigators/search-property-stack-navigator';
import crashlytics from '@react-native-firebase/crashlytics';
import useLocation from '../../hooks/useLocation';
import useSearch from '../../hooks/useSearch';
import CheckAvailabilityModal from './CheckAvailabilityModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import SearchScreenStyle from './styles_v2';
type SearchNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'searchScreen'
>;

interface SearchProps {
  navigation: SearchNavigationProp;
}
const SearchScreenV2: React.FC<SearchProps> = ({navigation}) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const windowHeight = dimensions.window.height;
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
  } = useSize();
  const styles = SearchScreenStyle(
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

  const dispatch = useDispatch();
  const [getLayout, setLayout] = useState<any>();
  const [isFirstTimeLoad, setFirstTimeLoad] = useState(true);

  const arrProperties = useSelector((state: Root) => state.Search.search);
  const totalCount = useSelector((state: Root) => state.Search.totalCount);

  const [getPage, setPage] = useState<number>(1);
  const pageSize = 2;

  const loading = useSelector((state: any) => state.loading);
  const {coordinate, postalCode, country} = useLocation();

  const {searchParams, setSearchParams, fetch} = useSearch();

  useEffect(() => {
    const _searchParams = {
      ...searchParams,
      where: {
        location: `${postalCode}, ${country}`,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    };
    setSearchParams(_searchParams); // First time current location set
    setTimeout(() => {
      fetch(_searchParams, () => {
        setFirstTimeLoad(false);
        setPage(2); // Increment page 2 on success of page 1
      });
    }, 500);
  }, []);

  const fetchData = (searchParams: SearchParamsTypes) => {
    try {
      const offset = pageSize * (getPage - 1);

      const _searchParams = {
        ...searchParams,
        isInitial: false,
        pageIndex: offset,
        pageSize: pageSize,
      };

      setSearchParams(_searchParams);

      setTimeout(() => {
        arrProperties.length < totalCount &&
          arrProperties.length > 0 &&
          !loading.effects.Search.searchProperty &&
          fetch(_searchParams, () => {
            setPage(getPage + 1);
            console.log('SuccessPagination');
          });
      }, 500);
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: fetchData of property');
      NewRelic.recordError(error);
    }
  };

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
            showToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: propertyDetail');
      NewRelic.recordError(error);
    }
  };

  const [loadingCheck, setLoadingheck] = useState<{[key: number]: boolean}>({});

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
          } else {
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: handleModalPress2');
      NewRelic.recordError(error);
    }
  };

  // const currentYear = new Date().getFullYear();

  const [isLayoutModalVisible, setLayoutModalVisible] =
    useState<boolean>(false);
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false); // need to check the type of date
  const formatDate = (date: number) => moment(date).format('DD-MM-YYYY');
  const network = InternetCheck();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback((searchParams2: SearchParamsTypes) => {
    setRefreshing(true);
    handleSearchSubmit(searchParams2);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleSearchSubmit = (searchParams: SearchParamsTypes) => {
    try {
      const _searchParams = {
        ...searchParams,
        isInitial: true,
        pageIndex: 0,
        pageSize: pageSize,
      };

      setSearchParams(_searchParams);

      setTimeout(() => {
        fetch(_searchParams, () => {
          setPage(2);
        });
      }, 500);
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: handleSearchSubmit');
      NewRelic.recordError(error);
    }
  };

  const formatDateRange = (when: whenDateTye) => {
    try {
      const startDate = when?.start;
      const endDate = when?.end;

      if (startDate && endDate) {
        const startFormat = moment(startDate).format('DD');
        const startFormat1 = moment(startDate).format('DD MMM');
        const endFormat = moment(endDate).format('DD MMM');

        if (moment(startDate).isSame(endDate, 'month')) {
          return `${startFormat}-${endFormat}`;
        } else if (!moment(startDate).isSame(endDate, 'year')) {
          return `${formatDate(startDate)} to ${formatDate(endDate)}`;
        } else {
          return `${startFormat1}-${endFormat}`;
        }
      } else if (startDate) {
        return moment(startDate).format('DD MMM');
      } else {
        return 'Any Week';
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: formatDateRange');
      NewRelic.recordError(error);
    }
  };

  const generateGuestString = (guestParams: guestParam) => {
    const guestItems = [guestParams && `${guestParams} Adult`].filter(Boolean);

    return guestItems.length > 0 ? guestItems.join(', ') : 'Any Guest';
  };

  const handleCloseModal = () => {
    setSearchModalVisible(false);
  };

  const handleCloseFilterModal = () => {
    setFilterModalVisible(false);
  };

  const toggleLayoutModal = () => {
    setLayoutModalVisible(!isLayoutModalVisible);
  };

  const [scrollOffset] = useState<any>(null);
  const scrollViewRef: any = useRef();

  const handleScrollTo = (p: number) => {
    if (scrollViewRef.current) {
      scrollViewRef?.current?.scrollTo(p);
    }
  };
  const nearByRender = (item: nearByRenderItem) => {
    // getCurrentLocation();
    try {
      dispatch.NearBySearch.getNearByPlaces(
        {
          lat: coordinate.latitude,
          lon: coordinate.longitude,
          types: item.type,
          id: item?.id,
        },
        (res: any) => {
          if (res.status === 'OK') {
            navigation.navigate('map', {title: item.title});
          } else {
            console.log(res, 'failed');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Search || SearchScreen || fun: nearByRender');
      NewRelic.recordError(error);
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Suspense
        fallback={
          <View style={styles.SubContainer}>
            <LottieView
              style={styles.LottieViewStyle}
              source={Anim.LoadingSuspenseFallback}
              autoPlay
              loop
            />
          </View>
        }>
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <SearchBarV2
            onIconPress={() => {
              setFilterModalVisible(true);
            }}
            isLoading={isFirstTimeLoad}
            address={
              searchParams.where?.location
                ? searchParams.where?.location
                : 'Where to Go?'
            }
            otherData={
              `${formatDateRange(searchParams.when)}, ${generateGuestString(
                searchParams.who.adult,
              )}` || 'Anywhere - Any Week - Any Guest'
            }
            onPressItem={() => {
              setSearchModalVisible(true);
            }}
          />
        </SafeAreaView>

        <NearByV2
          titleLabel="Near By"
          data={AllItems}
          onPressItem={nearByRender}
          isLoading={isFirstTimeLoad}
        />
        {network || network === undefined ? (
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <View style={{backgroundColor: 'black', width: '100%'}}>
                <View style={[styles.flatlistView]}>
                  {orientation === 'landscape' &&
                  screenWidth === windowWidth ? (
                    <>
                      <TopPropertiesLandscape
                        data={arrProperties}
                        horizontal={false}
                        loadingState={loadingCheck}
                        totalCount={totalCount}
                        isLoading={
                          loading.effects.Search.searchProperty ||
                          isFirstTimeLoad
                        }
                        onModalPress={(Id: number) => {
                          handleModalPress(Id);
                        }}
                        onLayoutPress={(id: number) => {
                          arrProperties.map((item: any) => {
                            if (item.Id === id) {
                              setLayout(item.Layout);
                            }
                          });
                          toggleLayoutModal();
                        }}
                        OnCheckAvailabilityPress={(Id: any) => {
                          handleModalPress2(Id);
                        }}
                        onRefresh={() => onRefresh(searchParams)}
                        refreshing={refreshing}
                        listEmptyComponent={
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
                        }
                        onFetch={() => {
                          fetchData(searchParams);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <TopProperties
                        data={arrProperties}
                        horizontal={false}
                        loadingState={loadingCheck}
                        totalCount={totalCount}
                        isLoading={
                          loading.effects.Search.searchProperty ||
                          isFirstTimeLoad
                        }
                        onModalPress={(Id: number) => {
                          handleModalPress(Id);
                        }}
                        onLayoutPress={(id: number) => {
                          arrProperties.map((item: any) => {
                            if (item.Id === id) {
                              setLayout(item.Layout);
                            }
                          });
                          toggleLayoutModal();
                        }}
                        OnCheckAvailabilityPress={(Id: any) => {
                          handleModalPress2(Id);
                        }}
                        onRefresh={() => onRefresh(searchParams)}
                        refreshing={refreshing}
                        listEmptyComponent={
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
                        }
                        onFetch={() => {
                          fetchData(searchParams);
                        }}
                      />
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{
              height: '100%',
              paddingBottom: isTablet() ? '10%' : '20%',
            }}>
            <EmptyData
              text1="Opps !"
              text2="Looks like we are lost !"
              imgType={0}
            />
          </View>
        )}

        <CheckAvailabilityModal bottomSheetModalRef={bottomSheetModalRef} />

        <SearchModal
          searchModalVisible={searchModalVisible}
          handleCloseModal={handleCloseModal}
          handleScrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollViewRef={scrollOffset}
          pageSize={pageSize}
          setPage={setPage}
          setSearchModalVisible={setSearchModalVisible}
        />

        <FilterModalV2
          ModalVisible={filterModalVisible}
          handleCloseModal={handleCloseFilterModal}
          handleScrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollViewRef={scrollViewRef}
          setModalVisible={setFilterModalVisible}
        />

        <LayoutModal
          isLayoutModalVisible={isLayoutModalVisible}
          setLayoutModalVisible={setLayoutModalVisible}
          data={getLayout}
        />
      </Suspense>
    </View>
  );
};

export default SearchScreenV2;
