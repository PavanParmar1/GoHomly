import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {App} from '../../../assets/images/map';
import Footer from '../../../.storybook/stories/footer-background/footer';
import InviteFriend from '../../../.storybook/stories/invite-friend/invite-friend';
import styles from './styles';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {useDispatch, useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

export default function FriendList({navigation}: {navigation: any}) {
  const arrReferrals = useSelector((state: Root) => state.Auth.referrals);

  console.log(arrReferrals, 'arrReferrals');
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch.Auth.referredList({}, (res: any) => {
        console.log(res);
      });
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Propfile || FriendList || fun: referredList');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      headerTitle: () => <Text style={navbarTitle}>{'Friend list'}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        bounces={false}>
        <View style={styles.flatlistView}>
          <FlatList
            scrollEnabled={false}
            data={arrReferrals}
            renderItem={item => (
              <InviteFriend
                name={item.item.name}
                emailId={item.item.email}
                profileImage={item.item.image}
              />
            )}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
