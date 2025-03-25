import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {App} from '../../../assets/images/map';
import Event from '../../../.storybook/stories/event/event';
import Footer from '../../../.storybook/stories/footer-background/footer';
import styles from './styles';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {useDispatch, useSelector} from 'react-redux';
import {MAP_API_KEY} from '@env';
import {handleMarkerPress} from '../../utils/common/getDirection';
import {colors} from '../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

export default function Events({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const arrNearByPlaces = useSelector(
    (state: any) => state.NearBySearch.arrNearByPlaces,
  );

  const arrNewNearByPlaces = useSelector(
    (state: any) => state.NearBySearch.arrNearByPlaces,
  );

  const [refresing, setRefresing] = useState(false);

  console.log(arrNewNearByPlaces, 'arrNewNearByPlaces====');

  const dispatch = useDispatch();

  // const type = route?.params?.types;
  const {types, lat, lng} = route.params;
  console.log(types, lat, lng, 'types----------------------');

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
      headerRight: () => (
        <TouchableOpacity
          style={styles.navbarHeaderRight}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.navbarImage}
            source={require('../../../assets/images/search/nearby/map.png')}
            resizeMode={'contain'}
            accessible={true}
            accessibilityLabel="Map Icon"
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Events'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);

  const genrateImgUri = (ref: string) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${MAP_API_KEY}`;
  };

  const handlePagination = () => {
    try {
      dispatch.NearBySearch.getMoreNearByPlaces(
        {
          lat: lat,
          lon: lng,
          types: types,
          nextPageToken: arrNearByPlaces.next_page_token,
        },
        (res: any) => {
          if (res.status === 'OK') {
            // console.log('locationData', res);
            console.log(res, '-------------------------success');
          } else {
            // console.log(res, 'failed');
            console.log('failed');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || EventScreen || fun: handlePagination');
    }
  };

  const onRefresh = () => {
    try {
      setRefresing(true);
      dispatch.NearBySearch.getNearByPlaces(
        {
          lat: lat,
          lon: lng,
          types: types,
        },
        (res: any) => {
          if (res.status === 'OK') {
            setRefresing(false);

            // console.log('locationData', res);
            console.log(res, '-------------------------success');
          } else {
            // console.log(res, 'failed');
            console.log('failed');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || EventScreen || fun: onRefresh');
    }
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        bounces={true}> */}
      <View style={styles.flatlistView}>
        <FlatList
          style={styles.flatlist}
          scrollEnabled={true}
          data={arrNearByPlaces?.results}
          onEndReached={() => handlePagination()}
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
          renderItem={({item}) => (
            <Event
              placeAddress={item?.vicinity}
              placeName={item?.name}
              placeImage={
                item?.photos &&
                item?.photos.length > 0 &&
                item?.photos[0]?.photo_reference &&
                genrateImgUri(item?.photos[0]?.photo_reference)
              }
              onPressItem={() => handleMarkerPress(navigation, item)}
              favOnPress={() => console.log('clicked')}
              isLiked={item.isLiked}
            />
          )}
          ListFooterComponent={() => (
            <>
              {/* <>{console.log(props.isLoading, 'Loading')}</>
              <>{console.log(props.data.length, 'Loading1')}</>
              <>{console.log(props.totalCount, 'Loading2')}</> */}

              {arrNearByPlaces.next_page_token !== undefined && (
                <ActivityIndicator color={colors.secondary} />
              )}
              <Footer
                isVisible={true}
                style={{backgroundColor: 'white', height: 10}}
              />
            </>
          )}
        />
      </View>
      <Footer />
      {/* </ScrollView> */}
    </View>
  );
}
