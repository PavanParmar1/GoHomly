import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Text} from '@rneui/base';
import {App} from '../../../assets/images/map';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import style from './styles';
import {colors} from '../../theme';

export default function TermsAndCondition({navigation}: {navigation: any}) {
  const [isProgressBarShow, setProgressBarShow] = useState(false);

  const route: any = useRoute();
  const type = route.params.type;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text style={navbarTitle}>
          {type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
        </Text>
      ),

      headerShadowVisible: true,
    });
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <>
        <View style={style.container}>
          <View style={style.mapView}>
            <WebView
              // onLoad={() => setProgressBarShow(true)}
              onLoadEnd={() => setProgressBarShow(false)}
              onLoadStart={() => setProgressBarShow(true)}
              // scalesPageToFit={false}
              source={{
                uri:
                  type === 'terms'
                    ? 'https://hapaclouds.com/terms-conditions'
                    : 'https://hapaclouds.com/privacy-policy/',
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
      </>
    </ScrollView>
  );
}
