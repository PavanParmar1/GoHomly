import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Animated,
  Switch,
  Easing,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {PersonSelector} from '../../../../.storybook/stories/person-selection/person-selector';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/themed';
import {isTablet} from 'react-native-device-info';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {showToast} from '../../../utils/common/Toast';
import {Fonts} from '../../../utils/common';
import {useSelector} from 'react-redux';
import {Button} from '../../../../.storybook/stories/button/button';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors} from '../../../theme/color';
import ServiceAnimalCard from '../../../../.storybook/stories/service-animal-card/service-animal-card';
import {Root} from '../../../rematch/types/store.types';
import crashlytics from '@react-native-firebase/crashlytics';
import useSearch from '../../../hooks/useSearch';
import NewRelic from 'newrelic-react-native-agent';
import {Image} from '@rneui/base';
import useOrientation from '../../../hooks/useOrientation';
import useSize from '../../../hooks/useSize';
import SearchModelStyle from './styles';

interface SearchModalProps {
  searchModalVisible: boolean;
  handleCloseModal: any;
  handleScrollTo: any;
  scrollOffset: any;
  scrollViewRef: any;
  setSearchModalVisible: any;
  searchObject: any;
  setSearchParams: any;
  setSubmit: any;
  currentLocationAddress: string;
  latitude: any;
  longitude: any;
  pageSize: any;
  setPage: any;
}

function SearchModal(props: SearchModalProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font12,
    Font16,
    Font8,
    Font14,
    Font20,
    Font7,
    Font9,
    Font4,
    Font5,
    Font6,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = SearchModelStyle(
    getWidth,
    getWidthTab,
    windowWidth,
    Font12,
    Font16,
    Font10,
    Font14,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
  );

  const loading = useSelector((state: Root) => state.loading);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isWhereExpanded, setWhereExpanded] = useState<boolean>(true);
  const [isWhenExpanded, setWhenExpanded] = useState<boolean>(false);
  const [isWhoExpanded, setWhoExpanded] = useState<boolean>(false);

  const {searchParams, setSearchParams, fetch} = useSearch();

  const [getLatitude, setLatitude] = useState(
    searchParams.where.latitude || 23.9023,
  );
  const [getLongitude, setLongitude] = useState(
    searchParams.where.longitude || 72.00283,
  );
  console.log(getLatitude, getLongitude);

  const whereOpacity = useRef(new Animated.Value(1)).current;
  const whenOpacity = useRef(new Animated.Value(0)).current;
  const whoOpacity = useRef(new Animated.Value(0)).current;

  const [searchText, setSearchText] = useState<string>(
    searchParams.where.location,
  );

  const [address, setAddress] = useState({
    address: searchParams.where.location,
    city: '',
    state: '',
    zip: '',
    country: 'United Kingdom',
    latitude: searchParams.where.latitude,
    longitude: searchParams.where.longitude,
  });

  useEffect(() => {
    setSearchText(searchParams.where.location);
    setLatitude(searchParams.where.latitude);
    setLongitude(searchParams.where.longitude);
    setAddress({
      address: searchParams.where.location,
      city: '',
      state: '',
      zip: '',
      country: 'United Kingdom',
      latitude: searchParams.where.latitude,
      longitude: searchParams.where.longitude,
    });
  }, [
    searchParams.where.location,
    searchParams.where.latitude,
    searchParams.where.longitude,
  ]);

  const [isChildrenAllowed, setChildrenAllowed] = useState<boolean>(false);
  const [isDogAllowed, setDogAllowed] = useState<boolean>(false);
  const [adultNumber, setAdultNumber] = useState<number>(0);

  console.log(searchParams, 'ContextAddress');
  console.log(address, 'ContextAddress2');

  const formatDate = (date: Date) => moment(date).format('DD-MM-YYYY');
  const formatDate1 = (date: Date) => moment(date).format('YYYY-MM-DD');
  const currentDate = formatDate1(new Date());
  const [dateRange, setDateRange] = useState<any>({
    startDate: null,
    endDate: null,
  });

  // const searchObject = props.searchObject;

  const getDateRangeStyles = (startDate: string, endDate: string) => {
    const styles: any = {};
    const currentDate = moment(startDate);
    const lastDate = moment(endDate).subtract(1, 'day');

    while (currentDate.isBefore(lastDate)) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      styles[dateString] = {
        color: colors.secondary,
        textColor: 'white',
      };
    }

    return styles;
  };

  const animateOpacity = (animatedValue: Animated.Value, toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (isWhereExpanded) {
      animateOpacity(whereOpacity, 1);
      animateOpacity(whenOpacity, 0);
      animateOpacity(whoOpacity, 0);
    } else if (isWhenExpanded) {
      animateOpacity(whereOpacity, 0);
      animateOpacity(whenOpacity, 1);
      animateOpacity(whoOpacity, 0);
    } else if (isWhoExpanded) {
      animateOpacity(whereOpacity, 0);
      animateOpacity(whenOpacity, 0);
      animateOpacity(whoOpacity, 1);
    }
  }, [
    isWhereExpanded,
    isWhenExpanded,
    isWhoExpanded,
    whenOpacity,
    whoOpacity,
    whereOpacity,
  ]);

  const handleAdultValueChange = (value: number) => {
    setAdultNumber(value);
  };

  const togglePetSwitch = () => {
    setDogAllowed(!isDogAllowed);
  };

  // const togglePetSwitch2 = () => {
  //   setPetAllowed(!isPetAllowed);
  // };

  // const togglePetSwitch3 = () => {
  //   setDisabledAllowed(!isDisabledAllowed);
  // };

  const toggleChildrenSwitch = () => {
    setChildrenAllowed(!isChildrenAllowed);
  };

  const handleSearchSubmit = () => {
    const _searchParams = {
      where: {
        location: address.address,
        latitude: address.latitude,
        longitude: address.longitude,
      },
      when: {
        start: dateRange.startDate,
        end: dateRange.endDate,
      },
      who: {
        adult: adultNumber,
        flgChildrenAllowed: isChildrenAllowed,
        flgPetsAllowed: isDogAllowed,
      },
      isInitial: true,
      pageIndex: 0,
      pageSize: 2,
    };

    try {
      setSearchParams(_searchParams);

      setTimeout(() => {
        fetch(_searchParams, () => {
          // props.setPage(2);
          setWhenExpanded(false);
          setWhereExpanded(true);
          setWhoExpanded(false);
          props.setSearchModalVisible(false);
          props.setPage(2);
          // address.address === ''
          // ? props.setSubmit(false)
          // : props.setSubmit(true);
        });
      }, 500);
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || SearchScreen || SearchModel || fun: handleSearchSubmit || searchProperty apiCall',
      );
    }
  };

  const handleClearAll = () => {
    try {
      const _searchParams = {
        where: {
          location: 'London, United Kingdom',
          latitude: '51.5286416',
          longitude: '-0.1015987',
        },
        when: {
          start: null,
          end: null,
        },
        who: {
          adult: 0,
          flgChildrenAllowed: false,
          flgPetsAllowed: false,
        },
        isInitial: true,
        pageIndex: 0,
        pageSize: 2,
      };

      try {
        setDateRange({startDate: null, endDate: null});
        setWhenExpanded(false);
        setWhereExpanded(true);
        setWhoExpanded(false);
        setAdultNumber(0);
        setChildrenAllowed(false);
        setDogAllowed(false);
        props.setSearchModalVisible(false);

        // }
        setSearchParams(_searchParams);

        setTimeout(() => {
          fetch(_searchParams, () => {
            props.setPage(2);
            // setSearchText('');

            // props.setSubmit(false);

            // setAddress({
            //   address: '',
            //   city: '',
            //   state: '',
            //   zip: '',
            //   country: 'Uk',
            //   latitude: 0,
            //   longitude: 0,
            // });
          });
        }, 500);
      } catch (error: any) {
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log(
          'Search || SearchScreen || SearchModel || fun: handleClearAll || searchProperty apiCall',
        );
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || SearchScreen || SearchModel || fun: handleClearAll',
      );
    }
  };

  return (
    <>
      <Modal
        isVisible={props.searchModalVisible}
        avoidKeyboard={true}
        onBackdropPress={props.handleCloseModal}
        onSwipeComplete={props.handleCloseModal}
        swipeDirection={'down'}
        scrollTo={props.handleScrollTo}
        scrollOffset={props.scrollOffset}
        scrollOffsetMax={400 - 300}
        propagateSwipe={true}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        onBackButtonPress={props.handleCloseModal}
        style={styles.modalView}>
        <View style={styles.searchModalContainer}>
          <Divider
            style={styles.DIVIDER}
            width={isTablet() ? 8 : 5}
            color="#77777750"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            scrollEventThrottle={16}>
            <View style={styles.OUTER_CONTAINER_STYLE}>
              <View style={styles.WHERE_MAIN_CONTAINER}>
                {isWhereExpanded ? (
                  <Animated.View
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {
                        opacity: whereOpacity,
                        height:
                          orientation === 'landscape' &&
                          windowWidth === screenWidth
                            ? getWidthTab(300)
                            : isTablet()
                              ? getWidthTab(346)
                              : getWidth(346),
                      },
                    ]}>
                    <Text style={styles.SEARCH_MODEL_HEADER_TEXT}>
                      Destination?
                    </Text>

                    <GooglePlacesAutocomplete
                      placeholder={'Type Address'}
                      enablePoweredByContainer={false}
                      listViewDisplayed={false}
                      renderRightButton={() => {
                        return (
                          Platform.OS === 'android' && (
                            <TouchableOpacity
                              accessible={true}
                              accessibilityLabel="clear"
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width:
                                  orientation === 'landscape' &&
                                  windowWidth === screenWidth
                                    ? getWidthTab(48)
                                    : isTablet()
                                      ? getWidthTab(48)
                                      : getWidth(46),
                                height:
                                  orientation === 'landscape' &&
                                  windowWidth === screenWidth
                                    ? getWidthTab(48)
                                    : isTablet()
                                      ? getWidthTab(48)
                                      : getWidth(46),
                                // backgroundColor: 'pink',
                              }}
                              onPress={() => {
                                setSearchText('');
                                setAddress({...address, address: ''});
                              }}>
                              <Image
                                style={{
                                  width:
                                    orientation === 'landscape' &&
                                    windowWidth === screenWidth
                                      ? getWidthTab(20)
                                      : isTablet()
                                        ? getWidthTab(20)
                                        : getWidth(20),
                                  height:
                                    orientation === 'landscape' &&
                                    windowWidth === screenWidth
                                      ? getWidthTab(20)
                                      : isTablet()
                                        ? getWidthTab(20)
                                        : getWidth(20),
                                  tintColor: 'gray',
                                }}
                                source={require('../../../../assets/images/cross.png')}
                                resizeMode={'contain'}
                              />
                            </TouchableOpacity>
                          )
                        );
                      }}
                      onPress={(data: any, details = null) => {
                        setSearchText(data?.description);
                        setAddress({
                          ...address,
                          address: data?.description,
                          latitude:
                            details?.geometry?.location?.lat ||
                            searchParams.where.latitude,
                          longitude:
                            details?.geometry?.location?.lng ||
                            searchParams.where.longitude,
                        });
                        setWhereExpanded(false);
                        setWhenExpanded(true);
                      }}
                      listUnderlayColor={'rgba(245,245,245, 0.5)'}
                      textInputProps={{
                        onChange(e) {
                          setSearchText(e.nativeEvent.text);
                        },
                        value: searchText,
                        leftIcon: {
                          type: 'image',
                          source: require('../../../../assets/images/search/search_icon.png'),
                        },
                      }}
                      onFail={error => console.error('error-->', error)}
                      query={{
                        key: 'AIzaSyC0J9tN2rjaDa68UEubDkxuQwQ655GyIr0',
                        language: 'en',
                        region: 'ae',
                        components: 'country:uk',
                        location: '0,0',
                        radius: 5000,
                        rankby: 'distance',
                        types: 'geocode',
                      }}
                      numberOfLines={1}
                      fetchDetails={true}
                      renderDescription={row => row.description}
                      nearbyPlacesAPI="GooglePlacesSearch"
                      styles={{
                        textInputContainer: styles.SEARCH_BAR_OUTER_CONTAINER,
                        textInput: styles.SEARCH_BAR_INNER_CONTAINER,
                        listView: styles.SEARCH_SUGGESTION_ITEM,
                        description: styles.DESCRIPTION_ITEM,
                        placeholderStyle: {
                          fontSize:
                            orientation === 'landscape' &&
                            windowWidth === screenWidth
                              ? Font7
                              : Font20,
                        },
                      }}
                    />
                  </Animated.View>
                ) : (
                  <Pressable
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                    ]}
                    onPress={() => {
                      setWhereExpanded(true);
                      setWhenExpanded(false);
                      setWhoExpanded(false);
                    }}>
                    <Text style={styles.TEXT_STYLE}>Where</Text>
                    <Text style={styles.SUB_TEXT_STYLE}>
                      {address.address !== ''
                        ? address.address
                        : searchText
                          ? searchText
                          : 'I’m Flexible'}
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.WHEN_MAIN_CONTAINER}>
                {isWhenExpanded ? (
                  <Animated.View
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {opacity: whenOpacity},
                    ]}>
                    <Text style={styles.SEARCH_MODEL_HEADER_TEXT}>
                      When’s your trip?
                    </Text>
                    <Calendar
                      minDate={currentDate}
                      onDayPress={day => {
                        if (!dateRange.startDate) {
                          setDateRange((prevRange: any) => ({
                            startDate: day.dateString,
                            endDate: prevRange.endDate,
                          }));
                        } else if (!dateRange.endDate) {
                          if (day.dateString >= dateRange.startDate) {
                            setDateRange((prevRange: any) => ({
                              ...prevRange,
                              endDate: day.dateString,
                            }));
                            /* setSearchParams((prevParams: any) => ({
                                ...prevParams,
                                startDate: dateRange.startDate,
                                endDate: day.dateString,
                              })); */
                          } else {
                            showToast('Please Select Valid End Date');
                          }
                        } else {
                          setDateRange({
                            startDate: day.dateString,
                            endDate: null,
                          });
                        }
                      }}
                      markingType={
                        dateRange.startDate === dateRange.endDate
                          ? 'multi-dot'
                          : 'period'
                      }
                      markedDates={{
                        [dateRange.startDate]: {
                          selected: true,
                          selectedColor: colors.secondary,
                          startingDay: true,
                          color: colors.secondary,
                          textColor: 'white',
                        },
                        [dateRange.endDate]: {
                          selected: true,
                          selectedColor: colors.secondary,
                          endingDay: true,
                          color: colors.secondary,
                          textColor: 'white',
                        },
                        ...getDateRangeStyles(
                          dateRange.startDate,
                          dateRange.endDate,
                        ),
                      }}
                      theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#777777CC',
                        selectedDayBackgroundColor: colors.secondary,
                        selectedDayTextColor: '#ffffff',
                        dayTextColor: '#121212',
                        textDisabledColor: '#777777CC',
                        arrowColor: '#121212',
                        textDayFontSize: isTablet() ? 20 : 16,
                        textDayHeaderFontSize: isTablet() ? 20 : 14,
                        todayTextColor: dateRange.startDate
                          ? colors.secondary
                          : colors.background,
                        todayBackgroundColor: dateRange.startDate
                          ? colors.background
                          : colors.secondary,
                        textDayFontWeight: '400',
                        textMonthFontSize:
                          orientation === 'landscape' &&
                          windowWidth === screenWidth
                            ? Font7
                            : isTablet()
                              ? Font10
                              : Font16,
                        textMonthFontFamily: Fonts.SFProRounded.Medium,
                      }}
                    />
                  </Animated.View>
                ) : (
                  <Pressable
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                    ]}
                    onPress={() => {
                      setWhenExpanded(true);
                      setWhereExpanded(false);
                      setWhoExpanded(false);
                    }}>
                    <Text style={styles.TEXT_STYLE}>When</Text>
                    <Text style={styles.SUB_TEXT_STYLE}>
                      {dateRange.startDate !== null &&
                      dateRange.endDate !== null
                        ? formatDate(dateRange.startDate) +
                          ' to ' +
                          formatDate(dateRange.endDate)
                        : 'Any Week'}
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.WHO_MAIN_CONTAINER}>
                {isWhoExpanded ? (
                  <Animated.View
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {
                        opacity: whoOpacity,
                        // height: isTablet() ? getWidthTab(400) : getWidth(346),
                        // backgroundColor:"red",
                      },
                    ]}>
                    <Text style={styles.SEARCH_MODEL_HEADER_TEXT}>
                      Who’s Coming?
                    </Text>
                    <PersonSelector
                      title="Adults"
                      subtTitle="Ages 13 or Above"
                      value={adultNumber}
                      onChange={handleAdultValueChange}
                    />

                    <Divider color={'#7777774D'} />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical:
                          orientation === 'landscape' &&
                          windowWidth === screenWidth
                            ? (6 * windowWidth) / 834
                            : isTablet()
                              ? (12 * windowWidth) / 834
                              : (0 * windowWidth) / 375,
                      }}>
                      <View style={styles.dogContainer}>
                        <Text style={styles.lableStyle}>Children</Text>

                        <Text style={styles.lableStyle1}>Ages 2-12</Text>
                      </View>
                      <View>
                        <Switch
                          trackColor={{true: colors.secondary}}
                          thumbColor={isChildrenAllowed ? 'white' : '#f4f3f4'}
                          onValueChange={toggleChildrenSwitch}
                          value={isChildrenAllowed}
                          style={
                            orientation === 'landscape' &&
                            windowWidth === screenWidth
                              ? {
                                  transform: [
                                    {scaleX: getWidthTab(0.8)},
                                    {scaleY: getWidthTab(0.8)},
                                  ],
                                  overflow: 'visible',
                                }
                              : {}
                          }
                        />
                      </View>
                    </View>

                    <Divider color={'#7777774D'} />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop:
                          orientation === 'landscape' &&
                          windowWidth === screenWidth
                            ? (6 * windowWidth) / 834
                            : isTablet()
                              ? (12 * windowWidth) / 834
                              : (0 * windowWidth) / 375,
                      }}>
                      <View style={styles.dogContainer}>
                        <Text style={styles.lableStyle}>Dogs</Text>

                        <TouchableOpacity
                          activeOpacity={0.65}
                          onPress={() => {
                            setIsVisible(!isVisible);
                          }}>
                          <Text
                            style={[
                              styles.lableStyle1,
                              {textDecorationLine: 'underline'},
                            ]}>
                            Bringing an assistance dog?
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Switch
                          trackColor={{true: colors.secondary}}
                          thumbColor={isDogAllowed ? 'white' : '#f4f3f4'}
                          onValueChange={togglePetSwitch}
                          value={isDogAllowed}
                          style={
                            orientation === 'landscape' &&
                            windowWidth === screenWidth
                              ? {
                                  transform: [
                                    {scaleX: getWidthTab(0.8)},
                                    {scaleY: getWidthTab(0.8)},
                                  ],
                                  overflow: 'visible',
                                }
                              : {}
                          }
                        />
                      </View>
                    </View>

                    {/* <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: isTablet()
                          ? (12 * windowWidth) / 834
                          : (0 * windowWidth) / 375,
                      }}>
                      <View style={dogContainer}>
                        <Text style={lableStyle}>Pets</Text>

                        <TouchableOpacity
                          activeOpacity={0.65}
                          onPress={() => {
                            setIsVisible(!isVisible);
                          }}>
                          <Text
                            style={[
                              lableStyle1,
                              {textDecorationLine: 'underline'},
                            ]}>
                            Bringing an pet?
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Switch
                          trackColor={{true: colors.secondary}}
                          thumbColor={isPetAllowed ? 'white' : '#f4f3f4'}
                          onValueChange={togglePetSwitch2}
                          value={isPetAllowed}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: isTablet()
                          ? (12 * windowWidth) / 834
                          : (0 * windowWidth) / 375,
                      }}>
                      <View style={dogContainer}>
                        <Text style={lableStyle}>Disabled</Text>

                        <TouchableOpacity
                          activeOpacity={0.65}
                          onPress={() => {
                            setIsVisible(!isVisible);
                          }}>
                          <Text
                            style={[
                              lableStyle1,
                              {textDecorationLine: 'underline'},
                            ]}>
                            Disable Guests Allowed?
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Switch
                          trackColor={{true: colors.secondary}}
                          thumbColor={isDisabledAllowed ? 'white' : '#f4f3f4'}
                          onValueChange={togglePetSwitch3}
                          value={isDisabledAllowed}
                        />
                      </View>
                    </View> */}
                  </Animated.View>
                ) : (
                  <Pressable
                    style={[
                      styles.INNER_CONTAINER_STYLE,
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                    ]}
                    onPress={() => {
                      setWhenExpanded(false);
                      setWhereExpanded(false);
                      setWhoExpanded(true);
                    }}>
                    <Text style={styles.TEXT_STYLE}>Who</Text>
                    <Text style={styles.SUB_TEXT_STYLE}>
                      {[adultNumber && `${adultNumber} Adult`]
                        .filter(Boolean)
                        .join(', ') || 'Any Guest'}
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.BUTTON_CONTAINER}>
                <Button
                  accessibilityLabel="clear All"
                  onPress={handleClearAll}
                  type="solid"
                  loading={false}
                  loadingStyle={{backgroundColor: ''}}
                  containerStyle={{
                    borderRadius: isTablet() ? getWidthTab(12) : getWidth(43),
                  }}
                  buttonStyle={styles.BUTTON_STYLE1}
                  titleStyle={styles.BUTTON_FONT_STYLE1}
                  title={'Clear All'}
                />

                <Button
                  accessibilityLabel="Search"
                  onPress={handleSearchSubmit}
                  type="solid"
                  loading={loading.effects.Search.searchProperty}
                  containerStyle={{
                    borderRadius: isTablet() ? getWidthTab(12) : getWidth(43),
                  }}
                  buttonStyle={styles.BUTTON_STYLE}
                  titleStyle={styles.BUTTON_FONT_STYLE}
                  title={'Search'}
                />
              </View>
            </View>
          </ScrollView>

          <Modal
            isVisible={isVisible}
            onBackdropPress={() => setIsVisible(false)}
            onSwipeComplete={() => setIsVisible(false)}
            swipeDirection="down"
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
            onBackButtonPress={() => {
              setIsVisible(false);
            }}
            style={styles.modalView}>
            <View
              style={[
                styles.searchModalContainer,
                {
                  height:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? '85%'
                      : isTablet()
                        ? '65%'
                        : '65%',
                  backgroundColor: 'white',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              ]}>
              <Divider
                style={styles.DIVIDER}
                width={isTablet() ? 8 : 5}
                color="#77777750"
              />
              <ServiceAnimalCard />
            </View>
          </Modal>
        </View>
      </Modal>

      {/* <BottomSheet
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        modalProps={{}}
        isVisible={isVisible}></BottomSheet> */}
    </>
  );
}
export default SearchModal;
