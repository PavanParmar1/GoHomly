import {Models} from '@rematch/core';
import {Auth} from './Auth';
import {Search} from './Search';
import {Property} from './Property';
import {Guest} from './Guest';
import {Booking} from './Booking';
import {Notification} from './Notification';
import {NearBySearch} from './NearBySearch';

export interface RootModel extends Models<RootModel> {
  Auth: typeof Auth;
  Search: typeof Search;
  Property: typeof Property;
  Guest: typeof Guest;
  Booking: typeof Booking;
  Notification: typeof Notification;
  NearBySearch: typeof NearBySearch;
}

export const models: RootModel = {
  Auth,
  Search,
  Property,
  Guest,
  Booking,
  Notification,
  NearBySearch,
};
