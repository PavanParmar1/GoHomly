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
import {
  navbarHeader,
  navbarImage,
  navbarTitle,
} from '../../../app/utils/common';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {showErrorToast} from '../../../app/utils/common/Toast';
import WebView from 'react-native-webview';
import style from './view-policy.presets';
import {colors} from '../../../app/theme';

const ViewPolicy = ({props}: any) => {
  const route: any = useRoute();
  const DocId = route?.params?.DocumentId;
  const [isProgressBarShow, setProgressBarShow] = useState(false);
  //   const [docUri, setdocUri] = useState('');
  const dispatch = useDispatch();

  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerLeft: () => (
  //         <TouchableOpacity style={navbarHeader} onPress={() => navigation.pop()}>
  //           <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
  //         </TouchableOpacity>
  //       ),
  //       headerTitle: () => <Text style={navbarTitle}>{'Document'}</Text>,

  //       headerShadowVisible: true,
  //     });
  //   });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <>
        {/* <Text>{DocId}</Text> */}
        <View style={style.container}>
          <View style={style.mapView}>
            <>{console.log(props?.docUri)}</>
            {/* <WebView
              // onLoad={() => setProgressBarShow(true)}
              onLoadEnd={() => setProgressBarShow(false)}
              onLoadStart={() => setProgressBarShow(true)}
              // scalesPageToFit= {false}
              source={{
                uri: props.docUri,
              }}
            /> */}
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
};

export default ViewPolicy;
