import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Instabug from 'instabug-reactnative';
import {useDispatch} from 'react-redux';

const useUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function logOut() {
    dispatch.Auth.signOut();
    Instabug.signOut();
    AsyncStorage.clear();
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'welcome'}],
      });
    }, 700);
  }
  return {logOut};
};

export default useUser;
