/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {App} from '../../../assets/images/map';

import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Switch,
} from 'react-native';
import Modal from 'react-native-modal';

import {
  Font10,
  Font16,
  getWidth,
  getWidthTab,
  navbarHeader,
  navbarImage,
  navbarTitle,
  windowWidth,
} from '../../utils/common/size';
import {useDispatch, useSelector} from 'react-redux';

import {colors} from '../../theme';
import {Root} from '../../rematch/types/store.types';
import {PersonSelector} from '../../../.storybook/stories/person-selection/person-selector';
import {isTablet} from 'react-native-device-info';
import {Divider} from '@rneui/base';
import {
  BUTTON_CONTAINER,
  BUTTON_FONT_STYLE,
  BUTTON_STYLE,
  BUTTONsTYLE,
  CONTAINER,
  HEADER_TEXT_STYLE,
  INNER_CONTAINER_STYLE,
  INPUT,
  MODALDIVIDER,
  OUTER_CONTAINER_STYLE,
  lableStyle,
  lableStyle1,
  mainContainer,
  modal,
  scrollableModal,
  scrollview,
} from './styles';
import {Fonts} from '../../utils/common';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../../.storybook/stories/button/button';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {showErrorToast, showToast} from '../../utils/common/Toast';
import ServiceItem from './ServiceItem';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

export default function ProceedToBooking({navigation}: any) {
  const arrPropertyDetails = useSelector(
    (state: Root) => state.Search.property,
  );
  const propertyId = arrPropertyDetails.Id;
  const [arrServices, setArrServices] = useState<any>(() =>
    arrPropertyDetails?.ObjFeeHead.map((fI: any) => {
      return {
        ...fI,
        multiRateId: fI?.ObjFinPrFeeHeadMultiRate[0]?.Id || 0,
        multiRateItem: fI?.ObjFinPrFeeHeadMultiRate[0] || {},
      };
    }),
  );
  const [objAmountDatils, setObjAmounDetails] = useState<any>(null);
  const [isPetAllowed, setPetAllowed] = useState<boolean>(false);
  const [adultNumber, setAdultNumber] = useState<number>(0);
  const [childNumber, setChildNumber] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalVisible2, setModalVisible2] = useState<boolean>(false);
  const [latestPayload, setLatestPayload] = useState<any>(null);

  const formatDate1 = (date: Date) => moment(date).format('YYYY-MM-DD');
  const dispatch = useDispatch();

  const arrPropertyRates = useSelector(
    (state: Root) => state.Property.propertyRates,
  );

  const currentDate = formatDate1(new Date());
  const [dateRange, setDateRange] = useState<any>({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    try {
      dispatch.Property.getPropertyRates(
        {
          id: propertyId,
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
        'Search || ProceedToBookingScreen || fun: getPropertyRates',
      );
    }
  }, []);

  useEffect(() => {
    try {
      setArrServices((prevArrServices: any) => {
        return prevArrServices.map((item: any) => ({
          ...item,
          isSelected: item.FlgAutoApplyOnBooking ? true : false,
        }));
      });
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || ProceedToBookingScreen || fun: setArrServices',
      );
    }
  }, []);

  useEffect(() => {
    try {
      const result = arrServices
        .filter((item: any) => {
          return item?.isSelected;
        })
        .map((item: any) => {
          return {
            id: item?.Id,
            qty: 1,
            multiRateId: item.multiRateId,
          };
        });

      const payload = {
        noOfOccupants: adultNumber + childNumber,
        propertyId: propertyId,
        bookingStartDate: dateRange.startDate,
        bookingEndDate: dateRange.endDate,
        feeHeads: result,
      };

      setLatestPayload(payload);

      // console.log(payload, 'payload');
      if (
        dateRange.startDate &&
        dateRange.endDate &&
        (adultNumber || childNumber)
      ) {
        dispatch.Booking.bookingAmountCalculation(payload, (res: any) => {
          if (res.IsSuccess) {
            setObjAmounDetails(res.Data);
          } else {
            showErrorToast(res.Message);
          }
        });
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || ProceedToBookingScreen || fun: bookingAmountCalculation',
      );
    }
  }, [arrServices, adultNumber, childNumber, dateRange]);

  const formatUnavailableDates = (datesArray: any) => {
    return datesArray.map((date: any) =>
      moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    );
  };

  const unavailableDates = formatUnavailableDates(
    arrPropertyDetails.ObjUnavailableDates,
  );

  // const getDateRangeStyles = (startDate: string, endDate: string) => {
  //   const styles: any = {};
  //   const currentDate = moment(startDate);
  //   const lastDate = moment(endDate).subtract(1, 'day');

  //   while (currentDate.isBefore(lastDate)) {
  //     currentDate.add(1, 'days');
  //     const dateString = currentDate.format('YYYY-MM-DD');

  //     // console.log(dateString, 'dateString====');

  //     styles[dateString] = {
  //       color: colors.secondary,
  //       textColor: 'white',
  //     };
  //   }

  //   return styles;
  // };

  const getMarkingStyle = (date: any) => {
    try {
      if (dateRange.startDate && dateRange.endDate) {
        // Both start and end dates are selected
        if (
          date.dateString >= dateRange.startDate &&
          date.dateString <= dateRange.endDate
        ) {
          if (!unavailableDates.includes(date.dateString)) {
            return {color: colors.secondary};
          }
          // Date is within the range
        }
      } else if (
        dateRange.startDate &&
        dateRange.startDate === date.dateString
      ) {
        // Only start date is selected
        return {color: colors.secondary};
      } else if (dateRange.endDate && dateRange.endDate === date.dateString) {
        // Only end date is selected
        return {color: colors.secondary};
      } else if (
        dateRange.startDate &&
        dateRange.endDate &&
        date.dateString > dateRange.startDate &&
        date.dateString < dateRange.endDate
      ) {
        // Dates between start and end date
        return {color: 'lightblue'}; // Change this to the desired style
      }

      // Check if the current date is in the unavailable dates range

      return {};
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Search || ProceedToBookingScreen || fun: getMarkingStyle',
      );
    }
  };

  // const getDateRangeStyles = (startDate: string, endDate: string) => {
  //   const styles: any = {};
  //   const currentDate = moment(startDate);
  //   const lastDate = moment(endDate).subtract(1, 'day');

  //   let hasUnavailableDates = false; // Flag to check if any date in the range is unavailable

  //   while (currentDate.isBefore(lastDate)) {
  //     const dateString = currentDate.format('YYYY-MM-DD');
  //     if (unavailableDates.includes(dateString)) {
  //       // If any date in the range is unavailable, set the flag to true and reset the selection to the start date
  //       hasUnavailableDates = true;
  //       break;
  //     }
  //     styles[dateString] = {
  //       color: colors.secondary,
  //       textColor: 'white',
  //     };
  //     currentDate.add(1, 'days');
  //   }

  //   if (hasUnavailableDates) {
  //     // Reset the styles object and show toast for the not selection reason
  //     showToast(
  //       'Some dates in the range are unavailable. Selection reset to start date.',
  //     );
  //     return {
  //       [endDate]: {
  //         color: 'white',
  //         textColor: '#121212',
  //       },
  //       [startDate]: {
  //         color: colors.secondary,
  //         textColor: 'white',
  //         borderRadius: 20,
  //       },
  //     };
  //   }

  //   return styles;
  // };

  const handleAdultValueChange = (value: number) => {
    setAdultNumber(value);
  };
  const handleChildValueChange = (value: number) => {
    setChildNumber(value);
  };

  const togglePetSwitch = () => {
    setPetAllowed(!isPetAllowed);
  };

  const addServiceToggle = (itemId: string) => {
    setArrServices((prevArrServices: any) => {
      return prevArrServices.map((item: any) => {
        if (item.Id === itemId) {
          return {
            ...item,
            isSelected: item.FlgAutoApplyOnBooking || !item.isSelected,
          };
        }
        return item;
      });
    });
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
      headerTitle: () => <Text style={navbarTitle}>{'Proceed to Book'}</Text>,

      headerShadowVisible: true,
    });
  }, [navigation]);

  // const getDisabledDates = () => {
  //   const formattedDisabledDates =
  //     arrPropertyDetails.ObjUnavailableDates.reduce((acc: any, date) => {
  //       const [day, month, year] = date.split('/');
  //       const formattedDate = `${year}-${month}-${day}`;
  //       acc[formattedDate] = {disabled: true};
  //       return acc;
  //     }, {});
  //   return formattedDisabledDates;
  // };

  const formatDateDDMMYYYY = (date: string | null) => {
    return date ? moment(date).format('DD-MM-YYYY') : '';
  };

  const setMultiRateOption = (_item: any, index: number) => {
    const _arrServices = arrServices.map((item: any, itemIndex: number) =>
      itemIndex == index
        ? {...item, multiRateId: _item.Id, multiRateItem: _item}
        : item,
    );
    setArrServices(_arrServices);
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View>
        {/* <Text>{item.Id}</Text> */}
        <ServiceItem
          item={item}
          addServiceToggle={addServiceToggle}
          onSelectedItemChange={_item => {
            setMultiRateOption(_item, index);
            // console.log(item, 'item');
          }}
          multiRateId={item.multiRateId}
          multiRateItem={item.multiRateItem}
        />
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={mainContainer}>
        <ScrollView style={scrollview}>
          <View style={OUTER_CONTAINER_STYLE}>
            <Text style={HEADER_TEXT_STYLE}>Booking Details</Text>

            <Button
              accessibilityLabel="Select Date"
              buttonStyle={BUTTONsTYLE}
              containerStyle={[
                CONTAINER,
                {
                  marginTop: isTablet() ? '2.5%' : '2%',
                  padding: '0%',
                  paddingHorizontal: '0%',
                },
              ]}
              type={'outline'}
              title={
                dateRange.startDate === null
                  ? 'Select Date'
                  : `${formatDateDDMMYYYY(
                      dateRange.startDate,
                    )} - ${formatDateDDMMYYYY(dateRange.endDate)}`
              }
              titleStyle={INPUT}
              iconRight={true}
              icon={
                <Icon
                  name={'calendar-number-outline'}
                  size={isTablet() ? 30 : 22}
                  color={'rgba(119, 119, 119, 1)'}
                />
              }
              onPress={() => {
                setModalVisible2(!isModalVisible2);
              }}
            />
            <View
              style={[
                INNER_CONTAINER_STYLE,
                {paddingVertical: '2%', marginTop: isTablet() ? '2.5%' : '2%'},
              ]}>
              <PersonSelector
                title="Adults"
                subtTitle="Ages 13 or Above"
                value={adultNumber}
                onChange={handleAdultValueChange}
              />

              <Divider color={'#7777774D'} />

              <PersonSelector
                title="Children"
                subtTitle="Ages 2-12"
                value={childNumber}
                onChange={handleChildValueChange}
              />

              <Divider color={'#7777774D'} />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: isTablet()
                    ? (12 * windowWidth) / 834
                    : (0 * windowWidth) / 375,
                }}>
                <View>
                  <Text style={lableStyle}>Pets</Text>

                  <TouchableOpacity
                    activeOpacity={0.65}
                    onPress={() => {
                      setIsVisible(!isVisible);
                    }}>
                    <Text
                      style={[lableStyle1, {textDecorationLine: 'underline'}]}>
                      Bringing a service animal?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Switch
                    trackColor={{true: colors.secondary}}
                    thumbColor={isPetAllowed ? 'white' : '#f4f3f4'}
                    onValueChange={togglePetSwitch}
                    value={isPetAllowed}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={OUTER_CONTAINER_STYLE}>
            <Text style={HEADER_TEXT_STYLE}>Add Services</Text>

            <View style={[INNER_CONTAINER_STYLE, {borderWidth: 0}]}>
              <FlatList
                scrollEnabled={false}
                keyExtractor={(item: any) => item.Id.toString()}
                data={arrServices}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <Divider color="lightgrey" />}
              />
            </View>
          </View>

          <View style={BUTTON_CONTAINER}>
            <Button
              accessibilityLabel="Price Summary"
              onPress={() => {
                navigation.navigate('PriceSummary', {
                  priceSummary: objAmountDatils,
                  payload: latestPayload,
                });
              }}
              type="solid"
              loading={false}
              disabled={
                objAmountDatils?.GrandTotal && (adultNumber || childNumber)
                  ? false
                  : true
              }
              disabledStyle={BUTTON_STYLE}
              disabledTitleStyle={BUTTON_FONT_STYLE}
              containerStyle={{
                borderRadius: isTablet() ? getWidthTab(12) : getWidth(43),
              }}
              buttonStyle={BUTTON_STYLE}
              titleStyle={BUTTON_FONT_STYLE}
              title={`£${
                objAmountDatils?.GrandTotal && (adultNumber || childNumber)
                  ? parseFloat(objAmountDatils?.GrandTotal).toFixed(2)
                  : parseFloat('0').toFixed(2)
              }`}
              iconRight={true}
              icon={
                <Icon
                  name={'arrow-forward-outline'}
                  size={isTablet() ? 30 : 22}
                  style={{opacity: 0.5}}
                  color={colors.background}
                />
              }
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        testID={'modal'}
        isVisible={isModalVisible2}
        onBackdropPress={() => setModalVisible2(false)}
        onSwipeComplete={() => setModalVisible2(false)}
        onBackButtonPress={() => setModalVisible2(false)}
        swipeDirection="down"
        propagateSwipe={true}
        style={modal}>
        <View style={scrollableModal}>
          <Divider
            width={4}
            inset={true}
            insetType="middle"
            style={MODALDIVIDER}
          />
          <Calendar
            minDate={currentDate}
            dayComponent={({date}: {date: any}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.65}
                  onPress={() => {
                    if (!dateRange.startDate) {
                      if (unavailableDates.includes(date.dateString)) {
                        showErrorToast('Date Not Available');
                      } else {
                        setDateRange((prevRange: any) => ({
                          startDate: date.dateString,
                          endDate: prevRange.endDate,
                        }));
                      }
                    } else if (!dateRange.endDate) {
                      if (
                        date.dateString >= dateRange.startDate &&
                        !unavailableDates.includes(date.dateString)
                      ) {
                        setDateRange((prevRange: any) => ({
                          ...prevRange,
                          endDate: date.dateString,
                        }));
                        // setModalVisible2(false);
                      } else {
                        showToast('Please Select Valid End Date');
                      }
                    } else {
                      setDateRange({
                        startDate: date.dateString,
                        endDate: null,
                      });
                    }
                  }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: unavailableDates.includes(date.dateString)
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
                            : getMarkingStyle(date).color === colors.secondary // Check if the date is within the range
                              ? 'white' // Set text color to white for dates within the range
                              : unavailableDates?.includes(date.dateString)
                                ? 'grey'
                                : 'black', // Otherwise, set text color to black
                    }}>
                    {date.day}
                  </Text>
                  {arrPropertyRates?.map((item: any) =>
                    moment(item.DateTime).format('YYYY-MM-DD') ===
                    date.dateString ? (
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          fontFamily: Fonts.SFProRounded.Regular,
                          fontSize: Font10,
                          color:
                            getMarkingStyle(date).color === colors.secondary
                              ? 'white'
                              : 'grey',
                        }}>
                        £
                        {item.RatePerNight % 1 === 0
                          ? `${item.RatePerNight}.00`
                          : item.RatePerNight}
                      </Text>
                    ) : (
                      <></>
                    ),
                  )}
                </TouchableOpacity>
              );
            }}
            // onDayPress={day => {
            //   if (!dateRange.startDate) {
            //     if (unavailableDates.includes(day.dateString)) {
            //       showErrorToast('Date Not Available');
            //     } else {
            //       setDateRange((prevRange: any) => ({
            //         startDate: day.dateString,
            //         endDate: prevRange.endDate,
            //       }));
            //     }
            //   } else if (!dateRange.endDate) {
            //     if (
            //       day.dateString >= dateRange.startDate &&
            //       !unavailableDates.includes(day.dateString)
            //     ) {
            //       setDateRange((prevRange: any) => ({
            //         ...prevRange,
            //         endDate: day.dateString,
            //       }));
            //       setModalVisible2(false);
            //     } else {
            //       showToast('Please Select Valid End Date');
            //     }
            //   } else {
            //     setDateRange({
            //       startDate: day.dateString,
            //       endDate: null,
            //     });
            //   }
            // }}
            // markingType={
            //   dateRange.startDate === dateRange.endDate ? 'multi-dot' : 'period'
            // }
            // markedDates={{
            //   [dateRange.startDate]: {
            //     selected: true,
            //     selectedColor: colors.secondary,
            //     startingDay: true,
            //     color: colors.secondary,
            //     textColor: 'white',
            //   },
            //   [dateRange.endDate]: {
            //     selected: true,
            //     selectedColor: colors.secondary,
            //     endingDay: true,
            //     color: colors.secondary,
            //     textColor: 'white',
            //   },
            //   ...getDateRangeStyles(dateRange.startDate, dateRange.endDate),

            //   ...getDisabledDates(),
            // }}
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
                : colors.secondary,
              todayBackgroundColor: unavailableDates.includes(currentDate)
                ? 'white'
                : 'white',
              textDayFontWeight: '400',
              textMonthFontSize: isTablet() ? Font10 : Font16,
              textMonthFontFamily: Fonts.SFProRounded.Medium,
            }}
          />
        </View>
      </Modal>
    </>
  );
}
