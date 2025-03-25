import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import moment from 'moment';
import WIPRO from '../../services/axios';
import NewRelic from 'newrelic-react-native-agent';
import Config from 'react-native-config';
import {ApiCollection} from '../Api';

export const Property = createModel<RootModel>()({
  state: {
    guestProperty: <any>[],
    totalCount: 0,
    totalPastBookingCount: 0,
    totalLikedPropertyCount: 0,
    selecetedGuestProperty: {},
    PastBookingProperty: <any>[],
    reviews: <any>[],
    likedProperty: <any>[],
    propertyRates: [],
    hostProperty: [],
    lockBox: {},
    reviewCount: 0,
    ratingSummary: {},
  },
  reducers: {
    setGuestProperty(state, payload) {
      return {
        ...state,
        guestProperty: [...state.guestProperty, ...payload],
      };
    },
    setGuestPropertyInitial(state, payload) {
      return {
        ...state,
        guestProperty: payload,
      };
    },

    setRatingSummary(state, payload) {
      return {
        ...state,
        ratingSummary: payload,
      };
    },

    setTotalCount(state, payload) {
      return {
        ...state,
        totalCount: payload,
      };
    },
    setTotalPastCount(state, payload) {
      return {
        ...state,
        totalPastBookingCount: payload,
      };
    },
    setSelectedGuestProperty(state, payload) {
      return {
        ...state,
        selecetedGuestProperty: payload,
      };
    },
    setPastBookingProperty(state, payload) {
      return {
        ...state,
        PastBookingProperty: [...state.PastBookingProperty, ...payload],
      };
    },
    setPastBookingPropertyInitial(state, payload) {
      return {
        ...state,
        PastBookingProperty: payload,
      };
    },

    setReview(state, payload) {
      return {
        ...state,
        reviews: [...state.reviews, ...payload],
      };
    },

    setInitialReview(state, payload) {
      return {
        ...state,
        reviews: payload,
      };
    },

    resetReviews(state) {
      return {
        ...state,
        reviews: [],
      };
    },
    setReviewCount(state, payload) {
      return {
        ...state,
        reviewCount: payload,
      };
    },
    setLikedProperty(state, payload) {
      return {
        ...state,
        likedProperty: [...state.likedProperty, ...payload],
      };
    },

    setLikedPropertyInitial(state, payload) {
      return {
        ...state,
        likedProperty: payload,
      };
    },

    setTotalLikedPropertyCount(state, payload) {
      return {
        ...state,
        totalLikedPropertyCount: payload,
      };
    },

    setHostProperty(state, payload) {
      return {
        ...state,
        hostProperty: payload,
      };
    },

    setLockBox(state, payload) {
      return {
        ...state,
        lockBox: payload,
      };
    },

    setPropertyRates(state, payload) {
      return {
        ...state,
        propertyRates: payload,
      };
    },
  },

  effects: dispatch => ({
    async guestPropertyDetail(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: 'https://test-simplicity4business.co.uk:5004/api/v1/Booking/getAll',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Property.setGuestProperty(response.data.Data);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Property Model || guestPropertyDetail Api Failure',
          );
        });
    },

    async onGoingBooking(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Booking/GetOnGoingBooking?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log('-----12---------', response);
          if (payload?.isInitial) {
            dispatch.Property.setGuestPropertyInitial(response.data.Data);
          } else {
            dispatch.Property.setGuestProperty(response.data.Data);
          }
          dispatch.Property.setTotalCount(response.data.TotalCount);
          callback(response.data);
        })
        .catch(error => {
          console.log('-----13---------', error);
          console.log(JSON.stringify(error), 'OngoingBookingError');
          console.log(error, 'OngoingBookingError');
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || onGoingBooking Api Failure');
        });
    },

    async onGoingBooking1(payload, state: any, callback) {
      console.log('-----1---------');
      const _r = await WIPRO.get(
        `https://test-simplicity4business.co.uk:5004/api/v1/Booking/GetOnGoingBooking?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`,
      ).toPromise();
      console.log('-----17----', _r);
      if (payload?.isInitial) {
        dispatch.Property.setGuestPropertyInitial(_r.Data);
      } else {
        dispatch.Property.setGuestProperty(_r.Data);
      }
      dispatch.Property.setTotalCount(_r.TotalCount);
      callback(_r);
    },

    async hostProperty(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/getByPropertyHostId?propertyHostId=${payload.hostId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Property.setHostProperty(response.data.Data);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || hostProperty Api Failure');
        });
    },

    async getPastBooking(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Booking/GetPastBooking?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          if (payload?.isInitial) {
            dispatch.Property.setPastBookingPropertyInitial(response.data.Data);
          } else {
            dispatch.Property.setPastBookingProperty(response.data.Data);
          }

          dispatch.Property.setTotalPastCount(response.data.TotalCount);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || getPastBooking Api Failure');
        });
    },

    async getReviews(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: `${
            Config.REACT_APP_API_URL + ApiCollection.property.getReviews
          }`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          const newResponse = {
            IsSuccess: true,
            Data: response,
            Message: 'Response Successful',
          };
          callback(newResponse);
          dispatch.Property.setReviewCount(response.data.TotalRecords);

          if (payload.isInitial) {
            dispatch.Property.setInitialReview(response.data.Data);
          } else {
            dispatch.Property.setReview(response.data.Data);
          }
        })
        .catch(error => {
          callback(error);
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || getReviews Api Failure');
        });
    },

    async getRatingSummary(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL}/Review/RatingSummary?PropertyId=${payload.PropertyId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          const newResponse = {
            IsSuccess: true,
            Data: response,
            Message: 'Response Successful',
          };
          dispatch.Property.setRatingSummary(response.data);
          console.log(response, 'response--------------------');

          callback(newResponse);
          console.log(response, 'RatingSummaryData');
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || getRatingSummary Api Failure');
        });
    },

    async getLockBox(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Booking/getLockBox?bookingId=${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          const newResponse = {
            IsSuccess: true,
            Data: response.data,
            Message: 'Response Successful',
          };
          callback(newResponse);
          dispatch.Property.setLockBox(response.data);
        })
        .catch(error => {
          if (error.response?.status === 500) {
            dispatch.Property.setLockBox(null);
          } else if (error.response?.status === 401) {
            callback(error);
          }
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || getLockBox Api Failure');
        });
    },

    async getLikedProperty(payload, state: any, callback: any) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      try {
        const response = await axios.request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/GetFavourite?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (payload.isInitial === true) {
          dispatch.Property.setLikedPropertyInitial(response.data.Data);
        } else {
          dispatch.Property.setLikedProperty(response.data.Data);
        }

        dispatch.Property.setTotalLikedPropertyCount(response.data.TotalCount);

        callback(response.data);
      } catch (error: any) {
        console.error(error);
        callback(error);
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log('Property Model || getLikedProperty Api Failure');
      }
    },

    async unlikeProperty(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/RemoveFavourite?propertyId=${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data);
          callback(response.data);
          const likeArr = state.Property.likedProperty.filter(
            (item: any) => item.Id !== payload.Id,
          );
          console.log(likeArr, 'likeArr======');
          const newSearchArr = state.Search.search.map((obj: any) => {
            if (obj.Id === payload.Id) {
              return {
                ...obj,
                FlgFavorite: false,
              };
            } else {
              return obj;
            }
          });

          const newOnGoing = state.Property.guestProperty.map((item: any) => {
            if (item.PropertyId === payload.Id) {
              return {
                ...item,
                FlgFavorite: false,
              };
            } else {
              return item;
            }
          });

          const newPastBooking = state.Property.PastBookingProperty.map(
            (item: any) => {
              if (item.PropertyId === payload.Id) {
                return {
                  ...item,
                  FlgFavorite: false,
                };
              } else {
                return item;
              }
            },
          );

          const newHostProperty = state.Property.hostProperty.map(
            (item: any) => {
              if (item.Id === payload.Id) {
                return {
                  ...item,
                  FlgFavorite: false,
                };
              } else {
                return item;
              }
            },
          );

          dispatch.Property.setHostProperty(newHostProperty);
          dispatch.Search.setSearchInitial(newSearchArr);
          dispatch.Property.setGuestPropertyInitial(newOnGoing);
          dispatch.Property.setPastBookingPropertyInitial(newPastBooking);
          dispatch.Property.setLikedPropertyInitial(likeArr);
        })
        .catch(error => {
          callback(error);
          console.log('unlikeProperty error', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || unlikeProperty Api Failure');
        });
    },

    async likeProperty(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/AddFavourite?propertyId=${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data);
          callback(response.data);
          const likeArr = state.Property.likedProperty.filter(
            (item: any) => item.Id !== payload.Id,
          );
          const newSearchArr = state.Search.search.map((obj: any) => {
            if (obj.Id === payload.Id) {
              return {
                ...obj,
                FlgFavorite: true,
              };
            } else {
              return obj;
            }
          });

          const newOnGoing = state.Property.guestProperty.map((item: any) => {
            if (item.PropertyId === payload.Id) {
              return {
                ...item,
                FlgFavorite: true,
              };
            } else {
              return item;
            }
          });

          const newPastBooking = state.Property.PastBookingProperty.map(
            (item: any) => {
              if (item.PropertyId === payload.Id) {
                return {
                  ...item,
                  FlgFavorite: true,
                };
              } else {
                return item;
              }
            },
          );
          const newHostProperty = state.Property.hostProperty.map(
            (item: any) => {
              if (item.Id === payload.Id) {
                return {
                  ...item,
                  FlgFavorite: true,
                };
              } else {
                return item;
              }
            },
          );
          // const propertyObj = state.Search?.property;
          // console.log('propertyObj', propertyObj);
          // dispatch.Search.setProperty({...propertyObj, FlgFavorite: true});
          dispatch.Property.setHostProperty(newHostProperty);
          dispatch.Search.setSearchInitial(newSearchArr);
          dispatch.Property.setGuestPropertyInitial(newOnGoing);
          dispatch.Property.setPastBookingPropertyInitial(newPastBooking);
          dispatch.Property.setLikedPropertyInitial(likeArr);
        })
        .catch(error => {
          callback(error);
          console.log('likeProperty error', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Property Model || likeProperty Api Failure');
        });
    },

    async getPropertyRates(payload, state: any, callback: any) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      try {
        const response = await axios.request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Property/GetPropertyRate?propertyId=${payload.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let objRate: any = Object.create({});
        response.data.Data?.map((item: any) => {
          const _cDate = moment(item.DateTime).format('YYYY-MM-DD');
          objRate[_cDate] = {
            DateTime: moment(item.DateTime).format('YYYY-MM-DD'),
            RatePerNight: item.RatePerNight,
            RatePerWeekend: item.RatePerWeekend,
          };
        });
        dispatch.Property.setPropertyRates([objRate]);
        callback(response.data);
      } catch (error) {
        callback(error);
        console.error(error);
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log('getPropertyRates Model || likeProperty Api Failure');
      }
    },

    async selectProperty(payload) {
      dispatch.Property.setSelectedGuestProperty(payload);
    },
  }),
});
