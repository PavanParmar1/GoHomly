import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NewBookingDetailProps} from './new-booking-details.props';
import {
  CONTAINER,
  INNER_CONTAINER,
  IMAGE,
  SUB_CONTAINER,
  SUB_CONTAINER2,
  HEADER_TEXT,
  VALUE_TEXT,
  SUB_HEADER_TEXT,
  SUB_VALUE_TEXT,
  TITLE_CONTAINER,
  TITLE,
  SUB_INNER_CONTAINER,
  Row_CONTAINER,
} from './new-booking-details.preset';

const NewBookingDetails = (props: NewBookingDetailProps) => {
  const checkInDate = props.checkInDate;
  const checkOutDate = props.checkOutDate;
  const GuestCount = props.GuestCount;
  const bookedBy = props.bookedBy;
  const ageOfLeadPerson = props.ageOfLeadPerson;
  const bookingId = props.bookingId;

  return (
    <View style={CONTAINER}>
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE}>Booking Detail</Text>
      </View>

      <View style={INNER_CONTAINER}>
        <Image
          style={IMAGE}
          source={require('../../../assets/images/guest_profile.png')}
          resizeMode="contain"
        />
        <View style={SUB_INNER_CONTAINER}>
          <Text style={HEADER_TEXT}>Name</Text>
          <Text style={VALUE_TEXT}>{bookedBy}</Text>
        </View>
      </View>

      <View style={Row_CONTAINER}>
        <View style={[SUB_CONTAINER]}>
          <Image
            style={IMAGE}
            source={require('../../../assets/images/bookmark.png')}
            resizeMode="contain"
          />
          <View style={SUB_INNER_CONTAINER}>
            <Text style={SUB_HEADER_TEXT}>Booking Id</Text>
            <Text style={SUB_VALUE_TEXT}>{bookingId}</Text>
          </View>
        </View>

        <View style={[SUB_CONTAINER2]}>
          <Image
            style={IMAGE}
            source={require('../../../assets/images/guest.png')}
            resizeMode="contain"
          />
          <View style={SUB_INNER_CONTAINER}>
            <Text style={SUB_HEADER_TEXT}>Guest</Text>
            <Text style={SUB_VALUE_TEXT}>{GuestCount}</Text>
          </View>
        </View>
      </View>

      <View style={Row_CONTAINER}>
        <View style={[SUB_CONTAINER]}>
          <Image
            style={IMAGE}
            source={require('../../../assets/images/calender.png')}
            resizeMode="contain"
          />
          <View style={SUB_INNER_CONTAINER}>
            <Text style={SUB_HEADER_TEXT}>Check In</Text>
            <Text style={SUB_VALUE_TEXT}>{checkInDate}</Text>
          </View>
        </View>

        <View style={[SUB_CONTAINER2]}>
          <Image
            style={IMAGE}
            source={require('../../../assets/images/calender.png')}
            resizeMode="contain"
          />
          <View style={SUB_INNER_CONTAINER}>
            <Text style={SUB_HEADER_TEXT}>Check Out</Text>
            <Text style={SUB_VALUE_TEXT}>{checkOutDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewBookingDetails;
