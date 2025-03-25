import {createModel} from '@rematch/core';
import {RootModel} from '.';
import axios from 'axios';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';
import Config from 'react-native-config';
import {ApiCollection} from '../Api';

export const Guest = createModel<RootModel>()({
  state: {
    guestDetail: [],
    arrGuests: [],
    languageDetail: [],
    docsDetails: [],
    arrRequestedDocumentByProperty: [],
    guestDocDetails: [],
    statusTag: [],
    arrGuestUploadedDocuments: [],
    arrGuestUploadedDocumentsAll: [],
    arrPropertyQuestions: [],
  },
  reducers: {
    setListOfGuests(state, payload) {
      return {
        ...state,
        arrGuests: payload,
      };
    },

    setLanguage(state, payload) {
      return {
        ...state,
        languageDetail: payload,
      };
    },
    setGuestStatusUpdate(state: any, guestIndex: number) {
      state.arrGuests[guestIndex].VerificationStatus.Key =
        'screening_completed';
    },

    setRequestedDocumentByProperty(state, payload) {
      return {
        ...state,
        arrRequestedDocumentByProperty: payload,
      };
    },

    setGuestUploadedDocumentsInitial(state, payload) {
      return {
        ...state,
        arrGuestUploadedDocuments: payload,
      };
    },

    setGuestUploadedDocumentsAll(state, payload) {
      return {
        ...state,
        arrGuestUploadedDocumentsAll: payload,
      };
    },

    setGuestUploadedDocuments(state, payload) {
      return {
        ...state,
        arrGuestUploadedDocuments: payload.filteredData,
        arrGuestUploadedDocumentsAll: payload.all,
      };
    },
    appendUploadedGuestDocument(state, payload) {
      return {
        ...state,
        arrGuestUploadedDocuments: [
          payload,
          ...state.arrGuestUploadedDocuments,
        ],
        arrGuestUploadedDocumentsAll: [
          payload,
          ...state.arrGuestUploadedDocumentsAll,
        ],
      };
    },
    updateGuestStatus(state, payload) {
      let _arrGuests = state.arrGuests.map((item: any) => {
        if (item.Id === payload.Id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        arrGuests: _arrGuests,
      };
    },
    setArrPropertyQuestions(state, payload) {
      return {
        ...state,
        arrPropertyQuestions: payload,
      };
    },
  },

  effects: dispatch => ({
    async addGuest(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.guest.addGuest}`,
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
          console.error('Error addGuest:', error);
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || addGuest Api Failure');
        });
    },

    async getListOfGuests(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Booking/getGuests?bookingId=${payload.bookingid}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Guest.setListOfGuests(response.data.Data);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          console.error('Error getGuest:', error);
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || getListOfGuests Api Failure');
        });
    },

    async getLanguages(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL + ApiCollection.guest.getLanguages}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Guest.setLanguage(response.data);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          console.error('Error getLanguages:', error);
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || getLanguages Api Failure');
        });
    },

    async getRequestedDocumentByProperty(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/CheckInDoc/getCheckInDocs?propertyId=${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Guest.setRequestedDocumentByProperty(response.data.Data);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Guest Model || getRequestedDocumentByProperty Api Failure',
          );
        });
    },

    async getGuestDocs(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/CheckInDoc/getGuestDocs?guestId=${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response, 'getDOCReas');

          const filteredData = response.data.Data.filter((item: any) => {
            return (
              item.FlgMarkInvalid !== true && item.FlgMarkInvalid === undefined
            );
          });

          console.log(filteredData, 'filteredData');

          dispatch.Guest.setGuestUploadedDocuments({
            filteredData: filteredData,
            all: response.data.Data,
          });

          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          console.error('Error getGuestDocs:', error);
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || getGuestDocs Api Failure');
        });
    },

    async uploadDocument(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      try {
        const formData = new FormData();
        formData.append('file', {
          uri: payload.file,
          type: 'image/jpg',
          name: 'your_actual_file_name.jpg',
        });

        const response = await axios.post(
          `${Config.REACT_APP_API_URL}/CheckInDoc/uploadDocs?checkInDocId=${payload.docId}&guestId=${payload.guestId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log('Upload successful:', response.data);
        dispatch.Guest.appendUploadedGuestDocument(response.data.Data);
        callback(response.data);
      } catch (error) {
        console.log(payload, 'payloadUploading');
        console.error('Error uploading guest details:', error);
        callback(error);
        // Log the error details
        console.error('Error status:', error);
        console.error('Error data:', error);

        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log('Guest Model || uploadDocument Api Failure');
      }
    },

    async viewDocument(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'get',
          url: `${Config.REACT_APP_API_URL}/Files/getSignedUrl/${payload.Id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
          console.error('Error ViewDoc:', error);
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || viewDocument Api Failure');
        });
    },

    async checkIn(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const url = `${Config.REACT_APP_API_URL}/CheckInOut/GuestCheckIn?guestId=${payload.guestId}`;
      console.warn(url);
      await axios
        .request({
          method: 'post',
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Guest.updateGuestStatus({
            Id: payload.guestId,
            VerificationStatus: {Key: 'checked_in', Name: 'Checked In'},
          });
          callback(response);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          console.error('Error CheckIn:', error);

          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || checkIn Api Failure');
        });
    },

    async checkOut(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL}/CheckInOut/GuestCheckOut?guestId=${payload.guestId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          dispatch.Guest.updateGuestStatus({
            Id: payload.guestId,
            VerificationStatus: {Key: 'checked_out', Name: 'Checked Out'},
          });
          callback(response);
        })
        .catch(error => {
          console.log(error);
          // setGuestStatusUpdate;
          callback(error);
          // Log the error details
          console.error('Error status:', error.response?.status);
          console.error('Error data:', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || checkOut Api Failure');
        });
    },

    async getPropertyReviewQuestions(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'post',
          url: `${
            Config.REACT_APP_API_URL +
            ApiCollection.guest.propertyReviewQuestions
          }`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          dispatch.Guest.setArrPropertyQuestions(response.data.Data);
          callback(response);
        })
        .catch(error => {
          console.log(error);
          callback(error);
          console.error('Error status:question_api', error.response?.status);
          console.error('Error data:question_api', error.response?.data);

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Guest Model || getPropertyReviewQuestions Api Failure',
          );
        });
    },

    async insertReview(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;

      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL + ApiCollection.guest.insertReview}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        })
        .then(response => {
          const newResponse = {
            IsSuccess: true,
            Message: 'Added Successfully',
            status: response.status,
          };

          callback(newResponse);
        })
        .catch(error => {
          console.log(JSON.stringify(error), 'Insert Review');

          if (error.response?.status === 401) {
            callback(error);
          } else {
            callback(error.response?.data);
          }

          console.error('Error status:insertReview', error.response?.status);
          console.error('Error data:insertReview', error.response?.data);
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || insertReview Api Failure');
        });
    },

    async getVerify(payload, state: any, callback) {
      const token = state.Auth.auth.Data.Token.AccessToken;
      const guestDetails = state.Guest.arrGuests;

      await axios
        .request({
          method: 'post',
          url: `${Config.REACT_APP_API_URL}/CheckInOut/CheckInOut?guestId=${payload.Id}&status=screening_completed`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response, 'responseVerify====');
          console.log(payload.Id, 'payload.Id====');
          const newArr = guestDetails.map((obj: any) => {
            if (obj.Id === payload.Id) {
              return {
                ...obj,
                VerificationStatus: {
                  ...obj.VerificationStatus,
                  Key: 'screening_completed',
                },
              };
            } else {
              return obj;
            }
          });
          dispatch.Guest.setListOfGuests(newArr);
          // const guestIndex = guestDetails.findIndex(
          //   (guestObj: any) => guestObj.Id === payload.Id,
          // );
          // dispatch.Guest.setGuestStatusUpdate(guestIndex);
          callback(response.data);
        })
        .catch(error => {
          console.log(error, 'errorVerify====');

          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Guest Model || getVerify Api Failure');
        });
    },
  }),
});
