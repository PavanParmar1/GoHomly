import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import {MAP_API_KEY} from '@env';
import {AllItems} from '../../../.storybook/stories/near-by-v2/NearByItem';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

export const NearBySearch = createModel<RootModel>()({
  state: {
    arrNearByPlaces: <any>{},
    arrNearByTypes: [] as any,
    // arrSelectedNearByPlaces: [] as any,
  },
  reducers: {
    setNearByPlaces(state, payload) {
      return {
        ...state,
        arrNearByPlaces: payload,
      };
    },

    setNewNearByPlaces(state, payload) {
      return {
        ...state,
        arrNearByPlaces: {
          ...state.arrNearByPlaces,
          next_page_token: payload.next_page_token,
          results: [...state.arrNearByPlaces.results, ...payload.results],
        },
      };
    },

    setNearByTypes(state, payload) {
      return {
        ...state,
        arrNearByTypes: payload,
      };
    },
  },
  effects: dispatch => ({
    async getNearByPlaces(payload, state, callback) {
      const data: any = state.Auth.variables;
      const _url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${payload.lat},${payload.lon}&radius=${data.place_search_radius}&${data.place_search_on}=${payload.types}&key=${MAP_API_KEY}`;
      console.warn(_url);
      await axios
        .request({
          method: 'get',
          url: _url,
        })
        .then(response => {
          // console.log(response.data, 'NearbyResponse');

          dispatch.NearBySearch.setNearByPlaces(response.data);
          const selectedId = payload.id;
          const filterarr = AllItems.map((item: any) => {
            if (selectedId === item.id) {
              return {...item, isSelected: true};
            } else {
              return item;
            }
          });
          dispatch.NearBySearch.setNearByTypes(filterarr);
          callback(response.data);
        })
        .catch(error => {
          console.log('nearByPlaces-------', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'NearBySearch Model || getNearByPlaces Api Failure',
          );
        });
    },

    async getMoreNearByPlaces(payload, state, callback) {
      const data: any = state.Auth.variables;
      const _url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${payload.lat}%2C${payload.lon}&radius=${data.place_search_radius}&${data.place_search_on}=${payload.types}&key=${MAP_API_KEY}&pagetoken=${payload.nextPageToken}`;
      await axios
        .request({
          method: 'get',
          url: _url,
        })
        .then(response => {
          callback(response.data);
          dispatch.NearBySearch.setNewNearByPlaces(response.data);
        })
        .catch(error => {
          console.log('nearByPlaces2-------', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'NearBySearch Model || getMoreNearByPlaces Api Failure',
          );
        });
    },
  }),
});
