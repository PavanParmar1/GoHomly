import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, BackHandler} from 'react-native';

import moment from 'moment';
import {useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
// import Modal from 'react-native-modal';
import {Fonts} from '../../utils/common';
import {CalendarList} from 'react-native-calendars';
import {colors} from '../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import {FlatList} from 'react-native-gesture-handler';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import {isTablet} from 'react-native-device-info';
import NewRelic from 'newrelic-react-native-agent';
import useSize from '../../hooks/useSize';

const CheckAvailabilityModal = (props: any) => {
  const {Font10, Font12, Font16, Font8, Font7, Font9,getWidth} = useSize();
  const formatDate1 = (date: Date) => moment(date).format('YYYY-MM-DD');
  const currentDate = formatDate1(new Date());
  const [dateRange] = useState<any>({
    startDate: null,
    endDate: null,
  });
  // const currentYear = new Date().getFullYear();

  const arrPropertyDetails = useSelector(
    (state: Root) => state.Search.property,
  );

  const arrPropertyRates = useSelector(
    (state: Root) => state.Property.propertyRates,
  );

  const formatUnavailableDates = (datesArray: any) => {
    return datesArray?.map((date: any) =>
      moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    );
  };

  const unavailableDates = formatUnavailableDates(
    arrPropertyDetails.ObjUnavailableDates,
  );

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
      crashlytics().log('Search || SearchScreen || fun: getMarkingStyle');
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function GetRateLabel(date: any) {
    if (arrPropertyRates[0][date?.date]) {
      return (
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontFamily: Fonts.SFProRounded.Regular,
            fontSize: isTablet() ? Font7 : Font9,
            color:
              getMarkingStyle(date.date).color === colors.secondary
                ? 'white'
                : 'grey',
          }}>
          £
          {arrPropertyRates[0][date?.date].RatePerNight % 1 === 0
            ? `${arrPropertyRates[0][date?.date].RatePerNight}.00`
            : arrPropertyRates[0][date?.date].RatePerNight}
        </Text>
      );
    } else {
      <></>;
    }
  }

  const {dismiss} = useBottomSheetModal();

  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // variables
  const snapPoints = useMemo(() => ['50%', '80%'], []);

  // callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View>
      {/* <Modal
        testID={'modal'}
        visible={props.isModalVisible2}
        transparent={true}
        animationType="slide"
        onDismiss={() => {
          props.setModalVisible2(false);
        }}
        onRequestClose={() => {
          props.setModalVisible2(false);
        }}
        style={[modal, {height: 100, backgroundColor: 'orange'}]} // Adjust the height to 50% of the screen
      >
        <View style={[scrollableModal, {height: '100%'}]}>
          <Divider
            width={4}
            inset={true}
            insetType="middle"
            style={MODALDIVIDER}
          />
          <CalendarList
            pastScrollRange={0} // Set to 0 to disable scrolling to past months
            futureScrollRange={7}
            scrollEnabled={true}
            showScrollIndicator={true}
            minDate={currentDate}
            customComponent={FlatList}
            // eslint-disable-next-line react/no-unstable-nested-components
            dayComponent={({date}: {date: any}) => {
              return (
                <View
                  // activeOpacity={0.65}
                  // onPress={() => {
                  //   if (!dateRange.startDate) {
                  //     if (unavailableDates.includes(date.dateString)) {
                  //       showErrorToast('Date Not Available');
                  //     } else {
                  //       setDateRange((prevRange: any) => ({
                  //         startDate: date.dateString,
                  //         endDate: prevRange.endDate,
                  //       }));
                  //     }
                  //   } else if (!dateRange.endDate) {
                  //     if (
                  //       date.dateString >= dateRange.startDate &&
                  //       !unavailableDates.includes(date.dateString)
                  //     ) {
                  //       setDateRange((prevRange: any) => ({
                  //         ...prevRange,
                  //         endDate: date.dateString,
                  //       }));
                  //       // setModalVisible2(false);
                  //     } else {
                  //       showToast('Please Select Valid End Date');
                  //     }
                  //   } else {
                  //     setDateRange({
                  //       startDate: date.dateString,
                  //       endDate: null,
                  //     });
                  //   }
                  // }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: unavailableDates?.includes(date.dateString)
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
                  {arrPropertyRates.length === 1 && (
                    <GetRateLabel date={date.dateString} />
                  )}
                </View>
              );
            }}
          />
        </View>
      </Modal> */}

      <BottomSheetModal
        ref={props.bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        handleIndicatorStyle={{marginTop: '3%', width: '10%'}}
        onChange={handleSheetChanges}>
        <BottomSheetView style={{flex: 1, alignItems: 'center'}}>
          <FlatList
            data={arrPropertyRates}
            renderItem={() => (
              <CalendarList
                pastScrollRange={0} // Set to 0 to disable scrolling to past months
                futureScrollRange={8}
                scrollEnabled={false}
                showScrollIndicator={true}
                minDate={currentDate}
                theme={{
                  textDayHeaderFontSize: isTablet() ? 18 : 14,
                  textMonthFontSize: isTablet() ? Font10 : Font16,
                  textMonthFontFamily: Fonts.SFProRounded.Regular,
                }}
                // eslint-disable-next-line react/no-unstable-nested-components
                dayComponent={({date}: {date: any}) => {
                  return (
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        backgroundColor: unavailableDates?.includes(
                          date.dateString,
                        )
                          ? 'rgba(239, 239, 240, 1)'
                          : getMarkingStyle(date).color,

                        borderTopLeftRadius:
                          dateRange?.startDate === date.dateString ? getWidth(20) : 0,
                        borderBottomLeftRadius:
                          dateRange?.startDate === date.dateString ? getWidth(20) : 0,
                        borderTopRightRadius:
                          dateRange?.endDate === date.dateString ? getWidth(20) : 0,
                        borderBottomRightRadius:
                          dateRange?.endDate === date.dateString ? getWidth(20) : 0,
                        width: unavailableDates?.includes(date.dateString)
                          ? ''
                          : 60,
                        // padding: 2,
                        paddingHorizontal: isTablet() ? 5 : 8,
                        paddingVertical: unavailableDates?.includes(
                          date.dateString,
                        )
                          ? 5
                          : 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          textAlign: 'center',
                          fontFamily: Fonts.SFProRounded.Regular,
                          fontSize: isTablet() ? Font8 : Font12,
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
            )}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default CheckAvailabilityModal;
