import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import crashlytics from '@react-native-firebase/crashlytics';

const InternetCheck = () => {
  let currentNetwork;

  NetInfo.fetch().then(state => {
    currentNetwork = state.isConnected;
  });

  const [netInfo, setNetInfo] = useState<any>(currentNetwork);

  useEffect(() => {
    try {
      const unsubscribe = NetInfo.addEventListener(state => {
        setNetInfo(state.isConnected);
      });
      return () => unsubscribe();
    } catch (error: any) {
      crashlytics().recordError(error);
      crashlytics().log('Utils || InternetCheck');
    }
  }, []);

  return netInfo;
};

export default InternetCheck;
