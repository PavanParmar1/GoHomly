import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import {emergencyNumbers} from '../../utils/common';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import Config from 'react-native-config';
import {ApiCollection} from '../Api';

export const Search = createModel<RootModel>()({
  state: {
    search: <any>[],
    totalCount: 0,
    property: [],
    location: {},
    arrEmergencyNumbers: [],
    arrCurrentCountryEmergencyNumber: [
      {
        title: '991 (Police)',
        number: '991',
      },
      {
        title: '112 (Ambulance)',
        number: '112',
      },
    ],
    currentCountry: '',
    country: 'GB',
  },
  reducers: {
    setSearch(state, payload) {
      return {
        ...state,
        search: [...state.search, ...payload],
      };
    },
    setSearchInitial(state, payload) {
      return {
        ...state,
        search: payload,
      };
    },
    setTotalCount(state, payload) {
      return {
        ...state,
        totalCount: payload,
      };
    },
    setProperty(state, payload) {
      return {
        ...state,
        property: payload,
      };
    },
    setLocation(state, payload) {
      let _country = 'GB';
      payload?.results[0]?.address_components.map((item: any) => {
        if (item?.types.includes('country')) {
          _country = item?.short_name;
        }
      });
      let _f = state.arrEmergencyNumbers.filter(
        (item: any) => item.country_code === _country,
      );
      if (_f.length > 0) {
        _f = _f[0]?.emergencyNumbers;
      } else {
        _f = state.arrCurrentCountryEmergencyNumber;
      }
      return {
        ...state,
        location: payload,
        currentCountry: _country,
        arrCurrentCountryEmergencyNumber: _f,
      };
    },
    setEmergencyNumbers(state, payload) {
      return {
        ...state,
        arrEmergencyNumbers: payload,
      };
    },
    setCurrentCountry(state, payload) {
      return {
        ...state,
        currentCountry: payload,
      };
    },
  },

  effects: dispatch => ({
    async searchProperty(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: `${
            Config.REACT_APP_API_URL + ApiCollection.search.searchProperty
          }`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          if (payload?.isInitial) {
            dispatch.Search.setSearchInitial(response.data.Data);
          } else {
            dispatch.Search.setSearch(response.data.Data);
          }
          dispatch.Search.setTotalCount(response.data.TotalCount);

          callback(response.data);
        })
        .catch(error => {
          callback(error);
          // console.log(error);
          // console.error('Error fetching guest details:', error);

          // // Log the error details
          // console.error('Error status:', error.response?.status);
          // console.error('Error data:', error.response?.data);
          // callback(error.response?.status);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Search Model || searchProperty Api Failure');
        });
    },

    async propertyDetail(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/getById?id=${payload.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Search.setProperty(response.data.Data);
          callback(response.data);
        })
        .catch(error => {
          callback(error);
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Search Model || propertyDetail Api Failure');
        });
    },

    async getCurrentLocation(payload, state: any, callback) {
      await axios
        .request({
          method: 'get',
          url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${payload.lat},${payload.lng}&key=AIzaSyDtGH9kC1CTk8qKV7_EWZL5kTmrmL-9UVQ`,
        })
        .then(response => {
          dispatch.Search.setLocation(response.data);
          callback(response.data);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Search Model || getCurrentLocation Api Failure');
        });
    },

    async getEmergencyNumbers(callback) {
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/GetEmergencyNumbers`,
        })
        .then(response => {
          callback('emergency_numbers then called', response.data);
        })
        .catch(error => {
          console.log('emergency_numbers Catch called', error);
          dispatch.Search.setEmergencyNumbers(emergencyNumbers);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Search Model || getEmergencyNumbers Api Failure');
        });
    },

    setCurrentCountryManually(country) {
      dispatch.Search.setCurrentCountry(country);
    },
  }),
});
