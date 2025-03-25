import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import Config from 'react-native-config';
import {ApiCollection} from '../Api';

export const Notification = createModel<RootModel>()({
  state: {
    arrNotifications: [] as any,
    totalNotificationCount: 0,
    totalPageCount: 0,
    unreadNotificationCount: 0,
  },
  reducers: {
    setNotifications(state, payload) {
      return {
        ...state,
        arrNotifications: [...state.arrNotifications, ...payload],
      };
    },

    setInitialNotifications(state, payload) {
      return {
        ...state,
        arrNotifications: payload,
      };
    },

    setTotalNotificationCount(state, payload) {
      return {
        ...state,
        totalNotificationCount: payload,
      };
    },

    setUnreadMessageCount(state, payload) {
      return {
        ...state,
        unreadNotificationCount: payload,
      };
    },

    setTotalPageCount(state, payload) {
      return {
        ...state,
        totalPageCount: payload,
      };
    },
    resetArrNotifications(state) {
      return {
        ...state,
        arrNotifications: [],
      };
    },
  },
  effects: dispatch => ({
    async getNotifications(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const _url = `${
        Config.REACT_APP_API_URL + ApiCollection.notification.getNotifications
      }`;
      await axios
        .request({
          method: 'post',
          url: _url,
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
          dispatch.Notification.setTotalPageCount(response.data.TotalPages);

          if (payload.isInitial) {
            dispatch.Notification.setInitialNotifications(response.data.Data);
          } else {
            dispatch.Notification.setNotifications(response.data.Data);
          }
          dispatch.Notification.setTotalNotificationCount(
            response.data.TotalRecords,
          );
          dispatch.Notification.setUnreadMessageCount(
            response.data.ExtraData.TotalUnreadMessage,
          );
          callback(newResponse);
        })
        .catch(error => {
          callback(error);
          console.log('getNotifications called', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Notification Model || getNotifications Api Failure',
          );
        });
    },

    async getNotificationsHome(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const _url = `${
        Config.REACT_APP_API_URL + ApiCollection.notification.getNotifications
      }`;
      // console.log(_url,'_url')
      await axios
        .request({
          method: 'post',
          url: _url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          dispatch.Notification.setUnreadMessageCount(
            response.data.ExtraData.TotalUnreadMessage,
          );
          callback(response);
        })
        .catch(error => {
          console.log('getNotifications called', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Notification Model || getNotifications Api Failure',
          );
        });
    },

    async makeNotificationRead(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      // const data = state.Notification.arrNotifications;
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL}/Notification/ToggleRead?messageId=${payload.id}&markAsRead=true`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          // console.log(response, 'makeitRead');

          const newResponse = {
            IsSuccess: true,
            Data: response,
            Message: 'Response Successful',
          };

          if (state.Notification.unreadNotificationCount !== 0) {
            const newUnreadCount: any =
              state.Notification.unreadNotificationCount - 1;
            dispatch.Notification.setUnreadMessageCount(newUnreadCount);
          }

          const newNotificationArr = state.Notification.arrNotifications.map(
            (item: any) => {
              if (payload.id === item.Id) {
                return {
                  ...item,
                  FlgMessageRead: true,
                };
              } else {
                return item;
              }
            },
          );

          dispatch.Notification.setInitialNotifications(newNotificationArr);

          callback(newResponse);
          // console.log(newNotificationArr, 'newNotificationArr');
        })
        .catch(error => {
          callback(error);
          console.log('makeNotificationRead called', error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Notification Model || makeNotificationRead Api Failure',
          );
          // console.log(payload, 'iddddd===========');

          /*  const arrNewNotification = data.map((item: any) => {
            // console.log(item.unread, 'idddd===========');
            if (payload.Id === item.id && item.unread === true) {
              return {...item, unread: false};
            } else {
              return item;
            }
          });
          console.log(arrNewNotification, 'new===');
          dispatch.Notification.setNotifications(arrNewNotification); */
        });
    },
  }),
});
