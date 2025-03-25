import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Platform,
  Share,
} from 'react-native';
import {App} from '../../../assets/images/map';
import Footer from '../../../.storybook/stories/footer-background/footer';
import styles from './styles';
import {navbarHeader, navbarImage, navbarTitle} from '../../utils/common/size';
import {useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
// import Clipboard from '@react-native-clipboard/clipboard';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

const gift = require('../../../assets/images/gift_roll.png');
export default function Referrals({navigation}: {navigation: any}) {
  const userDetails = useSelector((state: Root) => state.Auth.auth);

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
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.push('friendList')}>
          <Text style={styles.navbarHeaderRight}>Redeemed</Text>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text
          style={navbarTitle}>{`Hello, ${userDetails.Data.FirstName}`}</Text>
      ),
      headerShadowVisible: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  function showToastWithGravityAndOffset() {
    ToastAndroid.showWithGravityAndOffset(
      'Referral Code copied',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hapa Mobile App',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Profile || Referrals || fun: onShare');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        bounces={false}>
        <View style={styles.flatlistView}>
          <View style={styles.imageContainer}>
            <Image
              source={gift}
              style={styles.imageStyle}
              accessible={true}
              accessibilityLabel="Refer Icon"
            />
          </View>
          <Text style={styles.textStyle} numberOfLines={2}>
            Invite your friends and get buzz points
          </Text>
          <Text style={styles.referTextStyle}>Referral Code</Text>
          <TouchableOpacity
            onPress={() =>
              // Clipboard.setString(referralCode)
              {
                Platform.OS === 'android'
                  ? showToastWithGravityAndOffset()
                  : Alert.alert('Referral Code copied');
              }
            }>
            <View style={styles.codeContainer}>
              <Text style={styles.referTextStyle}>
                {userDetails.Data.AccountRefferalCode}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.8}
            onPress={onShare}>
            <Text style={styles.loginText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
