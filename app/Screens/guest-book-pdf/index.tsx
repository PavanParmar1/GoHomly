import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common';
import {App} from '../../../assets/images/map';
import {Image} from '@rneui/base';
import Pdf from 'react-native-pdf';
import {colors} from '../../theme';

const GuestBookPdf = ({navigation}: {navigation: any}) => {
  const route: any = useRoute();
  const url = route.params.Url;

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
      headerTitle: () => <Text style={navbarTitle}>{'Guest Book'}</Text>,

      headerShadowVisible: true,
    });
  }, [navigation]);
  // const source = {
  //   uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  //   cache: true,
  // };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Pdf
        source={{uri: url, cache: true}}
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
      />
    </View>
  );
};

export default GuestBookPdf;
