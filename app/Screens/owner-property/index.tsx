import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
import TopProperties from '../../../.storybook/stories/top-properties/top-properties';

const TopPropertiesLandscape = React.lazy(
  () =>
    import(
      '../../../.storybook/stories/top-properties/top-properties-landscape'
    ),
);
import EmptyData from '../empty-data';
import {isTablet} from 'react-native-device-info';
import {Image} from '@rneui/base';
import {App} from '../../../assets/images/map';
import {colors} from '../../theme';
import {myBookingProperty, propertyDetail} from '../home_2/homeTypes';
import {showErrorToast} from '../../utils/common/Toast';
import LayoutModal from '../search_v2/LayoutModal';
import {useRoute} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import CheckAvailabilityModal from '../search_v2/CheckAvailabilityModal';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

// import Pdf from 'react-native-pdf';

const OwnerProperty = ({navigation}: any) => {
  const guestPropertyDetail = useSelector(
    (state: Root) => state.Property.hostProperty,
  );

  const {dimensions, orientation} = useOrientation();
  const screenWidth = dimensions.screen.width;
  const windowWidth = dimensions.window.width;

  const {navbarHeader, navbarImage, navbarTitle} = useSize();

  const [loadingCheck, setLoadingheck] = useState<{[key: number]: boolean}>({});

  const [refreshing, setRefreshing] = useState(false);
  const {logOut} = useUser();

  const [isLayoutModalVisible, setLayoutModalVisible] =
    useState<boolean>(false);

  const route: any = useRoute();

  const [getLayout, setLayout] = useState<any>();

  const toggleLayoutModal = () => {
    setLayoutModalVisible(!isLayoutModalVisible);
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const dispatch = useDispatch();

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
      headerTitle: () => (
        <Text style={navbarTitle}>{'Properties By Owner '}</Text>
      ),

      headerShadowVisible: true,
    });
  }, [navigation]);

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
            if (res?.response?.status === 401) {
              logOut();
            }
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || OwnersProperty || fun: propertyDetail');
    }
  };

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
                'Search || OwnersProperty || fun: handleModalPress2 || getPropertyRates apiCall',
              );
            }
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
        'Search || OwnersProperty || fun: handleModalPress2 || propertyDetail apiCall',
      );
    }
  };

  const onRefresh = () => {
    try {
      setRefreshing(true);
      dispatch.Property.hostProperty(
        {
          hostId: route?.params?.hostID,
        },
        (res: myBookingProperty) => {
          if (res.IsSuccess) {
            // console.log(res, 'hostProperty----');
            setRefreshing(false);
          } else {
            setRefreshing(false);
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || OwnersProperty || fun: onRefresh');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      {orientation === 'landscape' && screenWidth === windowWidth ? (
        <>
          <TopPropertiesLandscape
            data={guestPropertyDetail}
            horizontal={false}
            loadingState={loadingCheck}
            OnCheckAvailabilityPress={(Id: any) => {
              handleModalPress2(Id);
            }}
            onModalPress={(Id: number) => {
              handleModalPress(Id);
            }}
            onLayoutPress={(id: number) => {
              guestPropertyDetail.map((item: any) => {
                console.log(item.Layout, 'item.Layout===');
                if (item.Id === id) {
                  setLayout(item.Layout);
                }
              });

              toggleLayoutModal();
            }}
            isLoading={false}
            listEmptyComponent={
              <View
                style={{
                  height: '100%',
                  paddingBottom: isTablet() ? '10%' : '21%',
                }}>
                <EmptyData text1="Opps !" text2="No Data Found !" imgType={1} />
              </View>
            }
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </>
      ) : (
        <TopProperties
          data={guestPropertyDetail}
          horizontal={false}
          loadingState={loadingCheck}
          OnCheckAvailabilityPress={(Id: any) => {
            handleModalPress2(Id);
          }}
          onModalPress={(Id: number) => {
            handleModalPress(Id);
          }}
          onLayoutPress={(id: number) => {
            guestPropertyDetail.map((item: any) => {
              console.log(item.Layout, 'item.Layout===');
              if (item.Id === id) {
                setLayout(item.Layout);
              }
            });

            toggleLayoutModal();
          }}
          isLoading={false}
          listEmptyComponent={
            <View
              style={{
                height: '100%',
                paddingBottom: isTablet() ? '10%' : '21%',
              }}>
              <EmptyData text1="Opps !" text2="No Data Found !" imgType={1} />
            </View>
          }
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      )}

      <CheckAvailabilityModal bottomSheetModalRef={bottomSheetModalRef} />

      <LayoutModal
        isLayoutModalVisible={isLayoutModalVisible}
        setLayoutModalVisible={setLayoutModalVisible}
        data={getLayout}
      />
    </View>
  );
};

export default OwnerProperty;
