/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {App} from '../../../assets/images/map';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {getWidth} from '../../utils/common';
import Event1 from '../../../.storybook/stories/event/event1';
import {isTablet} from 'react-native-device-info';
import {useDispatch, useSelector} from 'react-redux';
// import {Root} from '../../rematch/types/store.types';
import {showErrorToast} from '../../utils/common/Toast';
import Carousel from 'react-native-snap-carousel';
import {MAP_API_KEY} from '@env';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/base';
import {colors} from '../../theme';
import CheckBoxComponent from '../../../.storybook/stories/check-box/check-box';
import crashlytics from '@react-native-firebase/crashlytics';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewRelic from 'newrelic-react-native-agent';

import styles, {
  BUTTON_CONTAINER,
  BUTTON_FONT_STYLE,
  BUTTON_STYLE,
  DIVIDER,
  lableStyle1,
  modal2,
  scrollableModal2,
} from './styles';
import {
  getWidthTab,
  navbarHeader,
  navbarImage,
  navbarTitle,
} from '../../utils/common/size';
import {handleMarkerPress} from '../../utils/common/getDirection';
import useLocation from '../../hooks/useLocation';

export default function Map({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const carsoulView = useRef();
  const {width: viewportWidth} = Dimensions.get('window');
  const dispatch = useDispatch();
  const {coordinate, checkGpsStatus} = useLocation();
  const [isfilterModalVisible, setFilterModalVisible] =
    useState<boolean>(false);

  const arrNearByPlaces = useSelector(
    (state: any) => state.NearBySearch.arrNearByPlaces,
  );
  const AllItems = useSelector(
    (state: any) => state.NearBySearch.arrNearByTypes,
  );

  // console.log(isfilterModalVisible, 'arrNearByPlaces');
  const [allItems, setAllItems] = useState(AllItems);

  const selectedTypes = allItems
    .filter((item: any) => item.isSelected)
    .map((item: any) => item.type)
    .join('|');

  const toggleModal = () => {
    setFilterModalVisible(true);
  };

  const toggleCheckbox = (itemId: any) => {
    const updatedItems = allItems.map((item: any) => {
      if (item.id === itemId) {
        return {...item, isSelected: !item.isSelected};
      }
      return item;
    });
    setAllItems(updatedItems);
  };

  const nearByRender = () => {
    try {
      dispatch.NearBySearch.getNearByPlaces(
        {
          lat: coordinate.latitude,
          lon: coordinate.longitude,
          types: selectedTypes,
        },
        (res: any) => {
          if (res.status === 'OK') {
            // console.log('locationData', res);
            // setNearByPlaceType(title);
            setFilterModalVisible(false);
          } else {
            // console.log(res, 'failed');
            showErrorToast('failed');
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || MapScreen || fun: nearByRender - getNearByPlaces',
      );
    }
  };

  // const currentLocation = useSelector((state: Root) => state.Search.location);

  function wp(percentage: any) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);

  const sliderWidth = viewportWidth - getWidth(30);
  const itemWidth = slideWidth + itemHorizontalMargin * (isTablet() ? 2 : 6);

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
        <>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Filter"
            style={styles.navbarHeaderRight}
            onPress={toggleModal}>
            <Image
              style={styles.navbarImage}
              source={require('../../../assets/images/ic_filter_black.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Events"
            style={styles.navbarHeaderRight}
            onPress={() => {
              console.log(selectedTypes, '===========navigation2');
              navigation.navigate('events', {
                types: selectedTypes,
                lat: coordinate.latitude,
                lng: coordinate.longitude,
                next_page_token: arrNearByPlaces.next_page_token,
              });
            }}>
            <Image
              style={styles.navbarImage}
              source={require('../../../assets/images/header_menu.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </>
      ),
      headerTitle: () => (
        // ${route?.params?.title}
        <Text style={navbarTitle}>{'Nearby'}</Text>
      ),
      headerShadowVisible: false,
    });
  }, [navigation, route?.params?.title, selectedTypes]);

  useEffect(() => {
    nearByRender();
  }, [coordinate]);

  /* function propertyRenderer({item, index}: any) {
    return (
      <TouchableOpacity
        activeOpacity={0.63}
        onPress={() => {
          nearByRender(item.type, item.title);
        }}
        style={[
          styles.itemContainer,
          {
            backgroundColor: item.backColor,
            marginLeft:
              index === 0
                ? isTablet()
                  ? getWidthTab(70)
                  : getWidth(25)
                : isTablet()
                  ? getWidth(20)
                  : getWidth(25),
            marginRight: index === 5 ? getWidth(25) : 0,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Image source={item.icon} style={styles.iconStyle} />
        <Text
          style={[styles.itemTextContainer, {color: item.titleColor}]}
          numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  } */

  // favourites data
  const genrateImgUri = (ref: string) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${MAP_API_KEY}`;
  };

  const nearByPlacePinImg = (item: any) => {
    /*  if (nearByPlaceType === 'Food') {
      return require('../../../assets/images/search/nearby_pin/food_pin.png');
    } else if (nearByPlaceType === 'Movies') {
      return require('../../../assets/images/search/nearby_pin/movie_pin.png');
    } else if (nearByPlaceType === 'Shopping') {
      return require('../../../assets/images/search/nearby_pin/shopping_pin.png');
    } else if (nearByPlaceType === 'Event') {
      return require('../../../assets/images/search/nearby_pin/event_pin.png');
    } else if (nearByPlaceType === 'Attraction') {
      return require('../../../assets/images/search/nearby_pin/attraction_pin.png');
    } else {
      return require('../../../assets/images/search/nearby_pin/spa_pin.png');
    }*/
    if (
      item === 'restaurant' ||
      item === 'cafe' ||
      item === 'lodging' ||
      item === 'meal_takeaway' ||
      item === 'meal_delivery'
    ) {
      return require('../../../assets/images/search/nearby_pin/food_pin.png');
    } else if (item === 'movie_theater') {
      return require('../../../assets/images/search/nearby_pin/movie_pin.png');
    } else if (
      item === 'shopping_mall' ||
      item === 'jewelry_store' ||
      item === 'supermarket' ||
      item === 'grocery_or_supermarket' ||
      item === 'point_of_interest'
    ) {
      return require('../../../assets/images/search/nearby_pin/shopping_pin.png');
    } else if (
      item === 'tourist_attraction' ||
      item === 'hindu_temple' ||
      item === 'park' ||
      item === 'travel_agency' ||
      item === 'landmark'
    ) {
      return require('../../../assets/images/search/nearby_pin/event_pin.png');
    } else if (
      item === 'pet_store' ||
      item === 'mosque' ||
      item === 'zoo' ||
      item === 'aquarium' ||
      item === 'tourist_attraction' ||
      item === 'park' ||
      item === 'art_gallery' ||
      item === 'museum' ||
      item === 'amusement_park'
    ) {
      return require('../../../assets/images/search/nearby_pin/attraction_pin.png');
    } else if (item === 'spa') {
      return require('../../../assets/images/search/nearby_pin/spa_pin.png');
    } else {
      return require('../../../assets/images/search/nearby_pin/default_pin.png');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: 'black'}}>
      <>
        <View style={styles.container}>
          {/* MapView */}
          <View style={styles.mapView}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              toolbarEnabled={false}
              showsMyLocationButton={false}
              region={{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                accessible={true}
                accessibilityLabel="Your Current Location"
                coordinate={{
                  latitude: coordinate.latitude,
                  longitude: coordinate.longitude,
                }}
                // icon={require('../../../assets/images/search/nearby_pin/location_pin.png')}
                title="Your Current Location"
                description="This is your current location">
                <Image
                  source={require('../../../assets/images/search/nearby_pin/location_pin.png')}
                  resizeMode="contain"
                  style={{
                    width: isTablet() ? getWidthTab(45) : getWidth(30),
                    height: isTablet() ? getWidthTab(45) : getWidth(30),
                  }} // Adjust width and height as needed
                  accessible={true}
                  accessibilityLabel="Location Pin Icon"
                />
              </Marker>

              {arrNearByPlaces?.results?.map((item: any, index: any) => (
                <Marker
                  accessible={true}
                  accessibilityLabel="Marker"
                  key={index}
                  coordinate={{
                    latitude: item?.geometry?.location?.lat,
                    longitude: item?.geometry?.location?.lng,
                  }}
                  // title={item?.name}
                  // description={item?.vicinity}
                  onPress={() => {
                    carsoulView.current.snapToItem(index, true, true);
                    // console.log(item, 'item-----------');
                  }}>
                  <Image
                    source={nearByPlacePinImg(item?.types[0])}
                    style={{
                      width: isTablet() ? getWidthTab(80) : getWidth(60),
                      height: isTablet() ? getWidthTab(80) : getWidth(60),
                    }} // Adjust width and height as needed
                  />
                </Marker>
              ))}
            </MapView>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Fetch Your Current Location"
              activeOpacity={0.63}
              onPress={() => {
                checkGpsStatus();
              }}
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                right: isTablet() ? 25 : 15,
                top: isTablet() ? 25 : 15,
                height: isTablet() ? getWidthTab(55) : getWidth(45),
                width: isTablet() ? getWidthTab(55) : getWidth(45),
                borderRadius: isTablet()
                  ? getWidthTab(55) / 2
                  : getWidth(45) / 2,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
              }}>
              <Icon name="location-arrow" size={30} color={colors.secondary} />
            </TouchableOpacity>
          </View>
          {/* <Button onPress={() => getPermission()}>Get Location</Button> */}

          {/* TagView List*/}
          {/* <View style={styles.tagView}>
            <FlatList
              data={allItems}
              horizontal
              renderItem={propertyRenderer}
              // style={{backgroundColor: 'red'}}
              showsHorizontalScrollIndicator={false}
            />
          </View> */}

          {/* Property View List */}
          <View
            style={[
              styles.tagView,
              {
                bottom: isTablet() ? getWidth(15) : getWidth(20),
              },
            ]}>
            <Carousel
              accessible={true}
              accessibilityLabel=""
              ref={carsoulView}
              data={arrNearByPlaces?.results}
              renderItem={({item}: any) => (
                <Event1
                  placeAddress={item?.vicinity}
                  placeName={item?.name}
                  placeImage={
                    item?.photos &&
                    item?.photos.length > 0 &&
                    item?.photos[0]?.photo_reference &&
                    genrateImgUri(item?.photos[0]?.photo_reference)
                  }
                  onPressItem={() => handleMarkerPress(navigation, item)}
                  // favOnPress={() => favourites(item)}
                  isLiked={item.isLiked}
                />
              )}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={0}
              enableSnap={true}
              activeSlideOffset={20}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              activeSlideAlignment={'center'}
              containerCustomStyle={{
                overflow: 'visible',
              }}
              decelerationRate={0.25}
            />
          </View>
        </View>
        <Footer />

        <Modal
          testID={'modal'}
          isVisible={isfilterModalVisible}
          onBackdropPress={() => setFilterModalVisible(false)}
          onSwipeComplete={() => setFilterModalVisible(false)}
          onBackButtonPress={() => setFilterModalVisible(false)}
          swipeDirection="down"
          propagateSwipe={true}
          style={modal2}>
          <View style={scrollableModal2}>
            <Divider
              width={4}
              inset={true}
              insetType="middle"
              style={DIVIDER}
            />
            <View style={{marginTop: '2%'}}>
              <FlatList
                data={allItems}
                renderItem={({item}) => (
                  <View
                    style={{
                      // padding: 20,
                      paddingVertical: 12,
                      paddingHorizontal: '2%',
                    }}
                    activeOpacity={0.65}
                    onPress={() => console.log('clicked')}>
                    {/* <>{console.log(item, 'item==========')}</> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            backgroundColor: 'rgba(254, 182, 166, 0.6)',
                            marginEnd: isTablet()
                              ? getWidthTab(5)
                              : getWidth(10),
                            padding: isTablet() ? getWidthTab(5) : getWidth(10),
                            borderRadius: isTablet()
                              ? getWidthTab(10)
                              : getWidth(15),
                          }}>
                          <Image
                            source={item.icon}
                            style={[
                              styles.iconStyle,
                              {
                                tintColor: colors.secondary,
                              },
                            ]}
                          />
                        </View>

                        <Text style={[lableStyle1, {color: '#121212'}]}>
                          {item.title}
                        </Text>
                      </View>
                      {/* {selectedItem.Id === item.Id && ( */}
                      {/* <Icon
                        name="checkmark-sharp"
                        size={25}
                        color={colors.secondary}
                        // style={{width: '10%', marginLeft: '5%'}}
                      /> */}
                      <CheckBoxComponent
                        checkedIcon="checkbox-outline"
                        uncheckedIcon="square-outline"
                        size={isTablet() ? getWidthTab(40) : getWidth(25)}
                        iconType="ionicon"
                        checkedColor={colors.secondary}
                        uncheckedColor={colors.secondary}
                        title={' '}
                        checkedTitle={' '}
                        checked={item.isSelected}
                        containerStyle={styles.checkboxContainer}
                        onValueChange={() => {
                          toggleCheckbox(item.id);
                        }}
                      />
                      {/* )} */}
                    </View>
                  </View>
                )}
                ItemSeparatorComponent={() => (
                  <Divider style={{marginLeft: '5%'}} />
                )}
              />

              <View
                style={[
                  BUTTON_CONTAINER,
                  {paddingHorizontal: '2%', marginBottom: '5%'},
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    nearByRender();
                  }}
                  style={BUTTON_STYLE}>
                  <Text style={BUTTON_FONT_STYLE}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
    </ScrollView>
  );
}
