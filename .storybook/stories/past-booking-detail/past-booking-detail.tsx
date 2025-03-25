import React from 'react';
import {Text, View} from 'react-native';
import {PastBookingDetailProps} from './past-booking-detail.props';
import {
  CONTAINER,
  INNER_CONTAINER,
  DATACONTAINER,
  TITLE_CONTAINER,
  TITLE,
  SUB_HEADING,
  TEXT,
} from './past-booking-detail.presets';

export default function PastBookingDetail(props: PastBookingDetailProps) {
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
        <View style={DATACONTAINER}>
          <Text style={SUB_HEADING}>ID</Text>
          <Text style={TEXT}>{bookingId}</Text>
        </View>

        <View style={DATACONTAINER}>
          <Text style={SUB_HEADING}>{bookedBy}</Text>
          <Text style={TEXT}>{ageOfLeadPerson}</Text>
        </View>

        <View style={DATACONTAINER}>
          <Text style={SUB_HEADING}>Guests Count</Text>
          <Text style={TEXT}>{GuestCount}</Text>
        </View>

        <View style={DATACONTAINER}>
          <Text style={SUB_HEADING}>Check In</Text>
          <Text style={TEXT}>{checkInDate}</Text>
        </View>
        <View style={DATACONTAINER}>
          <Text style={SUB_HEADING}>Check Out</Text>
          <Text style={TEXT}>{checkOutDate}</Text>
        </View>
      </View>
    </View>
  );
}
