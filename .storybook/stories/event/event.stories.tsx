import React from 'react';
import {View} from 'react-native';
import Event from './event';

const heart = {
  uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/event.png',
};
const eventDescription = 'A virtual evening of smooth jazz';
const eventSchedule = '20th May- Sat -2:00 PM';
const eventImage = heart;

const EventComponentMeta = {
  title: 'Event Component',
  component: Event,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {},
  decorators: [
    Story => (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Story />
        </View>
      </>
    ),
  ],
};

export default EventComponentMeta;
export const plain = {
  args: {
    eventDescription: eventDescription,
    eventSchedule: eventSchedule,
    eventImage: eventImage,
  },
};
