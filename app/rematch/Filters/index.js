import {createBlacklistFilter} from 'redux-persist-transform-filter';

const searchFilters = createBlacklistFilter('Search', []);

export const AllFilters = [searchFilters];
