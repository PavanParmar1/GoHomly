/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
import {LogBox, View} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from './app/navigators/app-navigator';
import store from './app/rematch/index';
import Toast from 'react-native-toast-message';
import initialiseFirebase from './app/services/Firebase';
import {initialize} from 'react-native-clarity';
import {LocationProvider} from './app/hooks/useLocation';
import {SearchProvider} from './app/hooks/useSearch';
import InternetCheck from './app/utils/common/InternetCheck';
import EmptyData from './app/Screens/empty-data';
import Modal from 'react-native-modal';
import notifee from '@notifee/react-native';
import {toastConfig} from './app/utils/common/Toast';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Instabug, {InvocationEvent} from 'instabug-reactnative';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    initialiseFirebase();
    notifee.requestPermission();

    //9f7e61a187ad270c021262330a5c9f58 hapa-test key
    //cf5488a7abae7d64708bd9b520acc0d4 hapa (prod) key
    Instabug.init({
      token: '9f7e61a187ad270c021262330a5c9f58',
      invocationEvents: [InvocationEvent.shake],
    });

    //m44xgdlajn hapa-test key
    //m44y9zabl7 hapa (prod) key
    initialize('m44xgdlajn');
  }, []);

  const network = InternetCheck();

  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaProvider
            style={{flex: 1}}
            initialMetrics={initialWindowMetrics}>
            <LocationProvider>
              <SearchProvider>
                <AppNavigator>
                  <Toast />
                </AppNavigator>
              </SearchProvider>
            </LocationProvider>
          </SafeAreaProvider>

          <Modal
            testID={'modal'}
            isVisible={!network && network !== undefined}
            // onBackdropPress={() => setServiceModalVisible(false)}
            // onSwipeComplete={() => setServiceModalVisible(false)}
            // swipeDirection="down"
            // scrollTo={handleScrollTo}
            // scrollOffset={scrollOffset}
            // scrollOffsetMax={400 - 300}
            propagateSwipe={true}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            // onBackButtonPress={() => setServiceModalVisible(false)}
            style={{
              backgroundColor: 'white',
              padding: '0%',
              marginHorizontal: 0,
              justifyContent: 'flex-end',
              marginVertical: 0,
            }}>
            <View style={{flex: 1}}>
              <EmptyData
                text1="You seem to be offline"
                text2={`Please check your Wi-Fi connection or${'\n'}cellular data and try again`}
                imgType={3}
              />
            </View>
          </Modal>
          <Toast config={toastConfig} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
export default App;

// import StorybookUIRoot from './.storybook';
// export { StorybookUIRoot as default };

// export {default} from './.storybook';
