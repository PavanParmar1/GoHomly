import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import {REACT_APP_API_URL, REACT_APP_PRE_LOGIN_TOKEN} from '@env';
import {friends} from './referralData';
import {showErrorToast} from '../../utils/common/Toast';
import WIPRO from '../../services/axios';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import Config from 'react-native-config';
import {ApiCollection} from '../Api';

export const Auth = createModel<RootModel>()({
  state: {
    auth: {} as any, // as loginType
    guest: {},
    variables: {},
    phaseVariables: {},
    policy: '',
    referrals: [],
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        auth: {...state.auth, ...payload},
      };
    },

    setUser2(state, payload) {
      return {
        ...state,
        auth: {...state.auth, Data: {...state.auth.Data, ...payload}},
      };
    },

    setGuestUser(state, payload) {
      return {
        ...state,
        guest: {...state.guest, ...payload},
      };
    },

    setPolicy(state, payload) {
      return {
        ...state,
        policy: payload,
      };
    },

    setReferred(state, payload) {
      return {
        ...state,
        referrals: payload,
      };
    },

    clearUser() {
      return {
        auth: {},
        guest: {},
        variables: {},
      };
    },

    setVariable(state, payload) {
      return {
        ...state,
        variables: payload,
      };
    },

    setPhaseVariable(state, payload) {
      return {
        ...state,
        phaseVariables: payload,
      };
    },
  },
  effects: dispatch => ({
    async signUp(payload, state, callback) {
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.auth.signUp}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          dispatch.Auth.setUser(response.data);

          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Auth Model || signUp Api Failure');
        });
    },

    async verifyOtp(payload, state, callback) {
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.auth.verifyOtp}`,
          headers: {
            Authorization: `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          dispatch.Auth.setUser(response.data);
          callback(response.data);
        })
        .catch(error => {
          console.log(
            'Error:',
            error.response ? error.response.data : error.message,
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || verifyOtp Api Failure');
        });
    },

    async resendOtp(payload, state, callback) {
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.auth.resendOtp}`,
          headers: {
            Authorization: `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(
            'Error:',
            error.response ? error.response.data : error.message,
          );
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || resendOtp Api Failure');
        });
    },

    async signIn(payload, state, callback) {
      const url = `${Config.REACT_APP_API_URL + ApiCollection.auth.login}`;
      console.log(url, 'SignInUrl');
      console.log(Config.VARIANT, 'Variant');
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            Authorization: `Bearer ${Config.REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          console.log('_response lgoin', response.data);
          console.log('_response', response.data);
          dispatch.Auth.setUser(response.data);
          callback(response.data);
        })

        .catch(error => {
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || Sign In Api Failure');
        });
    },

    async signIn1(payload, state: any, callback) {
      console.log('-----1---------');
      const _r = await WIPRO.post(
        'https://test-simplicity4business.co.uk:5004/api/v1/user/login',
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

    async changePassword(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const url = `${
        Config.REACT_APP_API_URL + ApiCollection.auth.changePassword
      }`;
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          const newResponse = {
            IsSuccess: response.data,
            Message: 'Password Changed Successfully',
          };
          callback(newResponse);
        })
        .catch(error => {
          if (error.response?.status === 500) {
            showErrorToast(error.response?.data.FriendlyMsg);
          } else if (error.response?.status === 401) {
            callback(error);
          }
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || changePassword Api Failure');
        });
    },

    async forgotPassword(payload, state, callback) {
      const url = `${
        Config.REACT_APP_API_URL + ApiCollection.auth.forgotPassword
      }`;
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || forgotPassword Api Failure');
        });
    },

    async updatePassword(payload, state, callback) {
      const url = `${
        Config.REACT_APP_API_URL + ApiCollection.auth.updatePassword
      }`;
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`,
          },
          data: payload,
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || updatePassword Api Failure');
        });
    },

    async referredList(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      const url = `${REACT_APP_API_URL}/user/referralList`;
      await axios
        .request({
          method: 'get',
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch.Auth.setReferred(friends);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || referredList Api Failure');
        });
    },

    async guestLogin(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.auth.guestLogin}`,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: payload,
        })
        .then(response => {
          callback(response.data);
          dispatch.Auth.setGuestUser(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || guestLogin Api Failure');
        });
    },

    async getPolicy(payload, state: any, callback) {
      // const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: 'https://test-simplicity4business.co.uk:5004/Booking/policy',
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: payload,
        })
        .then(response => {
          // dispatch.Auth.setPolicy(response.data);
          callback(response.data);
        })
        .catch(error => {
          if (payload.tag === 'terms') {
            dispatch.Auth.setPolicy(
              'This Privacy Policy governs the manner in which our app collects, uses, maintains, and discloses information collected from users (each, a "User") of the HAPA mobile application ("HAPA").',
            );
          } else {
            dispatch.Auth.setPolicy(
              'This terms and conditions outline the rules and regulations for the use of HAPAs mobile application, located at hapa.com.By accessing this app, we assume you accept these terms and conditions. Do not continue to use HAPA if you do not agree to all of the terms and conditions stated on this page.The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You," and "Your" refer to you, the person logged on this app and compliant to the Company terms and conditions. The Company, Ourselves, We,Our, and Us refer to our Company. Party, Parties, or "Us, refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Clients needs in respect of provision of the Company stated services, in accordance with and subject to, prevailing law.The use of cookies on our app is subject to our Privacy Policy. By using our app, you consent to the use of cookies in accordance with our Privacy Policy',
            );
          }

          console.log(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);

          crashlytics().log('Auth Model || getPolicy Api Failure');
        });
    },

    async signOut() {
      dispatch({type: 'RESET'});
    },

    async updateProfile(payload, state, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      console.log(payload, 'updateProfile======');
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.auth.updateProfile}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          dispatch.Auth.setUser2({
            FirstName: payload.firstName,
            LastName: payload.lastName,
          });
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Auth Model || updateProfile Api Failure');
        });
    },
  }),
});
