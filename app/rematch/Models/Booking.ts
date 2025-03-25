import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

export const Booking = createModel<RootModel>()({
  state: {
    auth: {},
    guest: {},
    variables: {},
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        auth: {...state.auth, ...payload},
      };
    },
  },
  effects: () => ({
    async bookingAmountCalculation(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const url =
        'https://test-simplicity4business.co.uk:5004/api/v1/Booking/BookingAmountCalculation';
      console.warn(url);
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          console.error('Error calulate Booking:', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Booking Model || bookingAmountCalculation Api Failure',
          );
        });
    },
  }),
});
