/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {App} from '../../../assets/images/map';
import UserComments from '../../../.storybook/stories/check-out/user-comment';
import UserRating from '../../../.storybook/stories/user-rating/user-rating';
import reviewStyles from './styles';
import HorizontalCard from '../../../.storybook/stories/horizontal-card/horizontal-card';
import {isTablet} from 'react-native-device-info';
import {Divider} from '@rneui/themed';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import Draggable from 'react-native-draggable';
import {isIOS} from '@rneui/base';
import {showErrorToast} from '../../utils/common/Toast';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

export default function ReviewScreen({navigation}: {navigation: any}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFilter] = useState('');
  console.log(selectedFilter);
  const dispatch = useDispatch();
  const userReviews = useSelector((state: any) => state?.Property?.reviews);
  const userReviewsCounts = useSelector(
    (state: any) => state?.Property?.reviewCount,
  );
  const [isScroll, setScroll] = useState(false);

  const {dimensions, orientation} = useOrientation();
  const {
    Font12,
    Font17,
    Font20,
    getWidth,
    getWidthTab,
    getHeight,
    navbarHeader,
    navbarImage,
    navbarTitle,
    Font6,
    Font7,
  } = useSize();
  const windowHeight = dimensions.window.height;
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const styles = reviewStyles(
    Font12,
    Font17,
    Font20,
    getWidth,
    getWidthTab,
    dimensions.window.height,
    orientation,
    screenWidth,
    windowWidth,
    Font6,
    Font7,
  );

  const route: any = useRoute();
  const propertyId = route?.params?.propertyId;
  const rating = route?.params?.rating;
  console.log(propertyId, 'propId');
  const loading = useSelector((state: any) => state.loading);

  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [getFilterNumber, setFilterNumber] = useState(null);
  const [getPage, setPage] = useState(0);

  const pageSize = 10;

  useEffect(() => {
    try {
      dispatch.Property.getRatingSummary(
        {
          PropertyId: propertyId,
        },
        (res: any) => {
          if (res.IsSuccess) {
            // console.log(res.data, 'res.data ');
          } else {
            console.log('else');
            showErrorToast(res.Message);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || PropertyReview || fun: getRatingSummary',
      );
    }

    try {
      dispatch.Property.getReviews(
        {
          PageIndex: getPage,
          PageSize: pageSize,
          PropertyId: propertyId,
          isInitial: true,
        },
        (res: any) => {
          if (res.IsSuccess) {
            setPage(getPage + 1);
          } else {
            showErrorToast(res.Message);
          }
        },
      );
      return () => {
        dispatch.Property.resetReviews();
      };
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || PropertyReview || fun: getReviews',
      );
    }
  }, []);

  const onEndReach = (filterNumber: any) => {
    try {
      userReviews?.length < userReviewsCounts &&
        userReviews?.length > 0 &&
        !loading.effects.Property.getReviews &&
        dispatch.Property.getReviews(
          {
            PageIndex: getPage,
            PageSize: pageSize,
            PropertyId: propertyId,
            AvgRating: filterNumber,
            isInitial: false,
          },
          (res: any) => {
            if (res.status === 200) {
              console.log('PaginationResponse');
              setPage(getPage + 1);
            } else {
              console.log('else');
            }
          },
        );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || PropertyReview || fun: onEndReach  pagination of getReviews',
      );
    }
  };

  const onRefresh = React.useCallback((filterNumber: any) => {
    try {
      setRefreshing(true);
      dispatch.Property.getReviews(
        {
          PageIndex: 0,
          PageSize: 10,
          PropertyId: propertyId,
          AvgRating: filterNumber,
          isInitial: true,
        },
        (res: any) => {
          if (res.status === 200) {
            console.log('onRefresh');
            setPage(1);
            setRefreshing(false);
          } else {
            setRefreshing(false);
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || PropertyReview || fun: onRefresh of getReviews',
      );
    }
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const applyFilter = (filterNumber: any) => {
    // setSelectedFilter(filterNumer);
    dispatch.Property.resetReviews();
    try {
      dispatch.Property.getReviews(
        {
          PageIndex: 0,
          PageSize: 10,
          PropertyId: propertyId,
          AvgRating: filterNumber,
          isInitial: true,
        },
        (res: any) => {
          if (res) {
            console.log('if');
            // console.log(res, 'reviews');
            setPage(1);
          } else {
            console.log('else');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || PropertyDetailScreen || PropertyReview || fun: applyFilter',
      );
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
      headerTitle: () => <Text style={navbarTitle}>{'Reviews'}</Text>,
      headerShadowVisible: true,
    });
  }, [navigation]);

  return (
    <>
      <View
        style={{backgroundColor: 'white', flex: 1}}
        pointerEvents={isScroll ? 'none' : 'auto'}>
        <View style={{backgroundColor: 'white'}}>
          <HorizontalCard
            onPress={(filterNumber: any) => {
              setFilterNumber(filterNumber);
              applyFilter(filterNumber);
            }}
          />
        </View>
        <View style={styles.outerContainer}>
          <UserComments
            reviewCount={userReviewsCounts}
            data={userReviews}
            filterNumber={getFilterNumber}
            isLoading={loading.effects.Property.getReviews}
            onRefresh={(filterNumber: any) => onRefresh(filterNumber)}
            refreshing={refreshing}
            onEndReach={(filterNumber: any) => onEndReach(filterNumber)}
          />
        </View>

        <Modal
          accessible={true}
          accessibilityLabel="Rating Summary"
          testID={'modal'}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          propagateSwipe={true}
          style={styles.modal}>
          <View style={styles.scrollableModal}>
            <Divider
              width={4}
              inset={true}
              insetType="middle"
              style={styles.DIVIDER}
            />
            <UserRating />
          </View>
        </Modal>
      </View>

      <Draggable
        minX={1}
        minY={50}
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
          // style={styles.connectButton}
          onPress={toggleModal}
          accessible={true}
          accessibilityLabel="Rating Summary"
          activeOpacity={0.75}>
          <ImageBackground
            style={styles.connectImage}
            source={require('../../../assets/images/gradient_btn.png')}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.connectText}>
                {rating ? parseFloat(rating).toFixed(1) : ''}
              </Text>

              <Image
                style={{
                  tintColor: 'white',
                  alignItems: 'center',
                  width:
                    orientation === 'landscape' && screenWidth === windowWidth
                      ? getWidthTab(17)
                      : isTablet()
                        ? getWidthTab(22)
                        : getWidth(18),
                  height:
                    orientation === 'landscape' && screenWidth === windowWidth
                      ? getWidthTab(17)
                      : isTablet()
                        ? getWidthTab(22)
                        : getHeight(18),
                }}
                resizeMode="contain"
                source={require('../../../assets/images/star_img.png')}
                accessible={true}
                accessibilityLabel="Star Img Icon"
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Draggable>
    </>
  );
}
