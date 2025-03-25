/* eslint-disable react-hooks/exhaustive-deps */
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from '@rneui/base';
import {App} from '../../../assets/images/map';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {showErrorToast} from '../../utils/common/Toast';
import WebView from 'react-native-webview';
import style from './style';
import {colors} from '../../theme';
import crashlytics from '@react-native-firebase/crashlytics';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';

const ViewDoc = ({navigation}: any) => {
  const route: any = useRoute();
  const DocId = route?.params?.DocumentId;
  const [isProgressBarShow, setProgressBarShow] = useState(false);
  const [docUri, setdocUri] = useState('');
  const dispatch = useDispatch();
  const {logOut} = useUser();
  // console.log(DocId);

  useEffect(() => {
    try {
      dispatch.Guest.viewDocument(
        {
          Id: DocId,
        },
        (res: any) => {
          if (res.IsSuccess) {
            // console.log(res);
            // showToast(res.Message);
            setdocUri(res.Data);
            // setdocUri(
            //   'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f1/c2/12/lemon-tree-hotel-port.jpg?w=700&h=-1&s=1',
            // );
          } else {
            showErrorToast(res.Message);
            if (res?.response?.status === 401) {
              logOut();
            }
            console.log(res);
            setdocUri(
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/162444368.jpg?k=a9f4b92d4ca881c15b8337448e5928cf8b65b006b5ef94f77eeee01754311d8d&o=&hp=1',
            );
          }
        },
      );
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || ViewDocScreen || fun: viewDocument');
    }
  }, []);

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
      headerTitle: () => <Text style={navbarTitle}>{'Document'}</Text>,

      headerShadowVisible: true,
    });
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <>
        {/* <Text>{DocId}</Text> */}
        <View style={style.container}>
          <View style={style.mapView}>
            <WebView
              accessible={true}
              accessibilityLabel="Dcument Image"
              // onLoad={() => setProgressBarShow(true)}
              onLoadEnd={() => setProgressBarShow(false)}
              onLoadStart={() => setProgressBarShow(true)}
              // scalesPageToFit= {false}
              source={{
                uri: docUri,
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
            {/* <Pdf
              source={{uri: docUri, cache: true}}
              trustAllCerts={false}
              renderActivityIndicator={(progress: any) =>
                progress < 100 && <ActivityIndicator color={colors.secondary} />
              }
              horizontal={true}
              style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
              }}
            /> */}
          </View>
        </View>
      </>
    </ScrollView>
  );
};

export default ViewDoc;
