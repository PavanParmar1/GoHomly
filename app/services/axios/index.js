// import { Alert } from 'react-native';
import {Observable, throwError, from} from 'rxjs';
import {
  mergeMap,
  retryWhen,
  take,
  delay,
  catchError,
  map,
} from 'rxjs/operators';
import axios from 'axios';
import {store, dispatch} from '../../rematch/Store/index';
import {REACT_APP_API_URL, REACT_APP_PRE_LOGIN_TOKEN} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

let interceptors = null;

async function getAccessToken() {
  // const _accessToken = store.getState().Auth?.auth?.Data?.Token.AccessToken;
  // const _refreshToken = store.getState().Auth?.auth?.Data?.Token.RefreshToken;

  const _accessToken = await AsyncStorage.getItem('AccessToken');
  const _refreshToken = await AsyncStorage.getItem('RefreshToken');

  // console.log('access=refresh', _accessToken + '\n' + _refreshToken);

  console.log('-----4---------');

  const preLoginAuthorization = `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`;
  const reqHeaders = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: preLoginAuthorization,
    },
  };
  let payload = {
    AccessToken: _accessToken,
    RefreshToken: _refreshToken,
  };
  console.log('-----41---------', payload);
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/User/RefreshToken`,
      payload,
      reqHeaders,
    );
    console.log('-----5---------', response);
    return response.data.Data;
  } catch (error) {
    console.log('-----6---------', error);
    console.error('Error refreshing token: ', error);
    throw error;
  }
}

// async function configRequestHeader(req) {
//   console.log('---req---before---', req);
//   let _accessToken = await AsyncStorage.getItem('AccessToken');
//   // req.headers['Content-Type'] = 'application/json';
//   if (req.url.includes('User/RefreshToken')) {
//     const _preLoginAuthorization = `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`;
//     req.headers.Authorization = _preLoginAuthorization;
//   } else {
//     if (_accessToken) {
//       const _afterLoginAuthorization = `Bearer ${_accessToken}`;
//       req.headers.Authorization = _afterLoginAuthorization;
//     } else {
//       const _preLoginAuthorization = `Bearer ${REACT_APP_PRE_LOGIN_TOKEN}`;
//       req.headers.Authorization = _preLoginAuthorization;
//     }
//   }
//   console.log('---req---after---', req);
//   return req;
// }

function errorHandler(err) {
  if (err && err.status === 0) {
    Object.assign(err.data, {message: ''});
  }
  console.log({err});
  return throwError(err);
}

// axios.interceptors.request.use(
//   async req => await configRequestHeader(req),
//   error => Promise.reject(error),
// );

axios.interceptors.response.use(
  response => response,
  async error => {
    console.log('-----2---------', error);

    if (error.response && error.response.status === 401) {
      try {
        if (error.response.config.url.includes('User/RefreshToken')) {
          console.log('Session Expired, Please login again');
          const exception = new Error();
          exception.Message = 'Session Expired, Please login again!';
          exception.IsSuccess = false;
          exception.response = {
            status: 401,
            data: {
              detail: 'Session Expired, Please login again!',
            },
          };
          throw exception;
        }

        console.log('-----3---------', error);

        const tokenObj = await getAccessToken();
        console.log('-----7---------', tokenObj);

        // dispatch.Auth?.auth?.Data?.Token.AccessToken.updateValue(
        //   tokenObj.accessToken,
        // );

        await AsyncStorage.setItem('AccessToken', tokenObj?.accessToken);
        // await AsyncStorage.setItem('RefreshToken', tokenObj.refreshToken);

        console.log('-----8---------', tokenObj.accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${tokenObj.accessToken}`;

        let originalRequest = error.response.config;

        originalRequest.headers.Authorization = `Bearer ${tokenObj.accessToken}`;
        console.log('-----9---------', originalRequest);
        return axios(originalRequest);
      } catch (refreshError) {
        console.log('-----10---------', refreshError);
        return Promise.reject(refreshError);
      }
    }
    console.log('-----11---------');
    return Promise.reject(error);
  },
);

function processApiRequest(apiCaller) {
  return from(apiCaller).pipe(
    retryWhen(errors =>
      errors.pipe(
        mergeMap(err => errorHandler(err)),
        delay(1000),
        take(1),
      ),
    ),
    catchError(err => errorHandler(err.response)),
    map(res => res.data),
  );
}

export default {
  post: (url, data, options) => {
    const config = options && {headers: options}
      ? {headers: options, timeout: 30000}
      : {timeout: 30000};
    return processApiRequest(axios.post(url, data, config));
  },
  put: (url, data, options) => {
    const config = options && {headers: options}
      ? {headers: options, timeout: 30000}
      : {timeout: 30000};
    return processApiRequest(axios.put(url, data, config));
  },
  delete: (url, options, data) => {
    data = data
      ? data instanceof Object && !Object.keys(data).length
        ? null
        : data
      : null;
    const config = data
      ? {headers: options, data, timeout: 30000}
      : {headers: options, data: '', timeout: 30000};
    return processApiRequest(axios.delete(url, config));
  },
  get: (url, options, data) => {
    data = data
      ? data instanceof Object && !Object.keys(data).length
        ? null
        : data
      : null;
    const config = data
      ? {headers: options, data, timeout: 30000}
      : {headers: options, data: '', timeout: 30000};
    console.log('config~~~~~~~~~~~~~>', config);
    return processApiRequest(axios.get(url, config));
  },
};
