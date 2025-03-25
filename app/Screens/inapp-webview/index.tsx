/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {App} from '../../../assets/images/map';
import Footer from '../../../.storybook/stories/footer-background/footer';
import styles from './styles';
import {WebView} from 'react-native-webview';
import {colors} from '../../theme';

export default function InappWebview({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={styles.navbarHeader}
          onPress={() => navigation.pop()}>
          <Image
            style={styles.navbarImage}
            source={App.Back}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.navbarTitle}>{'Event'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);
  const [isProgressBarShow, setProgressBarShow] = useState(false);

  const lat = route.params.latitude;
  const lng = route.params.longitude;

  const mapUrl = `https://www.google.com/maps/place/${lat},${lng}`;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: 'black'}}>
      <>
        <View style={styles.container}>
          {/* MapView */}
          <View style={styles.mapView}>
            <WebView
              // onLoad={() => setProgressBarShow(true)}
              onLoadEnd={() => setProgressBarShow(false)}
              onLoadStart={() => setProgressBarShow(true)}
              source={{
                uri: mapUrl,
              }}
            />
            {isProgressBarShow && (
              <ActivityIndicator
                size={'large'}
                color={colors.buttonPrimary}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                }}
              />
            )}
          </View>
        </View>
        <Footer />
      </>
    </ScrollView>
  );
}
