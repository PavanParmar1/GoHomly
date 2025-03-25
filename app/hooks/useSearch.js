import {useState, createContext, useContext} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import {useDispatch} from 'react-redux';
import {showErrorToast} from '../utils/common/Toast';
import useLocation from './useLocation';
import useUser from './useUser';
import NewRelic from 'newrelic-react-native-agent';

const SearchContext = createContext();

export function SearchProvider(props) {
  // const [isSuccess, setSuccess] = useState(false);
  const {coordinate, postalCode, country} = useLocation();
  // const {logOut} = useUser();

  const pageSize = 2;
  const [searchParams, setSearchParams] = useState({
    where: {
      location: `${postalCode}, ${country}`,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    },
    when: {
      start: null,
      end: null,
    },
    who: {
      adult: 0,
      flgChildrenAllowed: false,
      flgPetsAllowed: false,
    },
    isInitial: true,
    pageIndex: 0,
    pageSize,
  });
  const dispatch = useDispatch();

  function fetch(params, callback) {
    const _searchParams =
      Object.keys(params).length > 0 ? params : searchParams;
    try {
      dispatch.Search.searchProperty(
        {
          locationId: 0,
          latitude: _searchParams.where.latitude,
          longitude: _searchParams.where.longitude,
          arrivalDate: _searchParams.when.start,
          departureDate: _searchParams.when.end,
          pageIndex: _searchParams.pageIndex,
          pageSize: _searchParams.pageSize,
          noOfAdults: searchParams.who.adult,
          flgChildrenAllowed: _searchParams.who.flgChildrenAllowed,
          flgPetsAllowed: _searchParams.who.flgPetsAllowed,
          isInitial: _searchParams.isInitial,
        },
        res => {
          if (res.IsSuccess) {
            callback();
          } else if (res === 500) {
            showErrorToast('Server Error');
          } else {
            callback();
            console.log('searchPropertyElse-----');
            showErrorToast(res.Message);
            // if (res?.response?.status === 401) {
            //   logOut();
            // }
          }
        },
      );
    } catch (error) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || SearchScreen || fun: searchProperty');
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        fetch,
      }}
      {...props}
    />
  );
}

export default function useSearch() {
  return useContext(SearchContext);
}
