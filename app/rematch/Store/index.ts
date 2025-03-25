import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import {init, RematchRootState} from '@rematch/core';
import logger from 'redux-logger';
import {loadingPlugin} from '../Plugins';
import {models, RootModel} from '../Models';
import createRematchPersist from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['Auth'],
  storage: AsyncStorage,
});

export const store = init<RootModel>({
  models,
  plugins: [loadingPlugin, immerPlugin, selectPlugin(), persistPlugin],
  redux: {
    middlewares: [logger],
    rootReducers: {
      RESET: (state, action) => {
        console.log(state);
        console.log(action);
      },
    },
  },
});
export const {dispatch, select, getState} = store;

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type Select = typeof store.select;
export type RootState = RematchRootState<typeof models>;
