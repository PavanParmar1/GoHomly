import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {App} from '../../../assets/images/map';
// import {Button} from '@rn-community/button';
import EmojiList from '../../../.storybook/stories/check-out/emoji-qa-list';
import Footer from '../../../.storybook/stories/footer-background/footer';
import Modal from 'react-native-modal';
import PropertyDialog from '../../../.storybook/stories/check-out/property-dialog';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from '../../../.storybook/stories/button/button';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {showErrorToast, showToast} from '../../utils/common/Toast';
import InputField from '../../../.storybook/stories/input-field/input-field';
import {isTablet} from 'react-native-device-info';
import crashlytics from '@react-native-firebase/crashlytics';
import useUser from '../../hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import checkOutStyles from './styles';

export default function CheckOutScreen({navigation}: {navigation: any}) {
  const route: any = useRoute();
  const [reviewText, setReviewText] = useState('');
  const propertyId = route?.params?.propertyId;
  const [isModalVisible, setModalVisible] = useState(false);
  const {logOut} = useUser();
  const arrQuestion = useSelector(
    (state: any) => state.Guest.arrPropertyQuestions,
  );
  // const [ratingsPayload, setRatingsPayload] = useState<any>([]);

  const {dimensions, orientation} = useOrientation();
  const screenWidth = dimensions.screen.width;
  const windowWidth = dimensions.window.width;

  const {
    Font12,
    Font18,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
    Font10,
    Font15,
    Font17,
    Font9,
    navbarHeader,
    navbarImage,
    navbarTitle,
  } = useSize();
  const styles = checkOutStyles(
    Font10,
    Font12,
    Font15,
    Font17,
    Font18,
    Font9,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
    orientation,
    screenWidth,
    windowWidth,
  );

  const childRef = useRef();
  const dispatch = useDispatch();

  const handleSubmitReview = () => {
    try {
      let _r = childRef.current.getSubmittedRatigs();
      console.log('_r', _r);

      _r = _r.map((item: any) => {
        return {
          Rating: item.Rating,
          QuestionId: item.Id,
        };
      });

      const payload = {
        Review: reviewText,
        PropertyId: propertyId,
        PrReviewRating: _r,
      };

      try {
        dispatch.Guest.insertReview(payload, (res: any) => {
          if (res.status === 200) {
            console.log(res, 'response-insertReview');
            showToast(res.Message);
            // showToast(res.Message);
            navigation.navigate('HomeScreen');
          } else {
            showErrorToast(res.Message);
            // console.log(res, 'response failed-insertReview');
            if (res?.response?.status === 401) {
              logOut();
            }
          }
        });
      } catch (error: any) {
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log(
          'Home || FindYourBooking || CheckOutScreen || fun: handleSubmitReview || insertReview apiCall',
        );
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || CheckOutScreen || fun: handleSubmitReview',
      );
    }
  };

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
      headerTitle: () => <Text style={navbarTitle}>{'Reviews'}</Text>,
      headerShadowVisible: true,
    });
  }, [navigation]);
  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      style={styles.scrollView}
      bounces={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.mainView}>
        <View style={styles.outerContainer}>
          <EmojiList ref={childRef} data={arrQuestion} />

          <InputField
            accessible={true}
            accessibilityLabel="app FeedBack"
            multiline={true}
            numberOfLines={3}
            label=" "
            labelStyle={{height: 0}}
            placeholder="Any feedback you would like to give, Leave us your comment."
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputField}
            inputStyle={styles.inputStyle}
            placeholderTextColor={'#777777'}
            onChangeText={(val: string) => setReviewText(val)}
            value={reviewText}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            accessibilityLabel="submit"
            buttonStyle={styles.submitButton}
            titleStyle={styles.buttonTitle}
            containerStyle={{
              marginHorizontal: isTablet() ? getWidthTab(60) : getWidth(20),
              marginBottom: isTablet() ? getWidthTab(60) : getWidth(20),
              width:
                orientation === 'landscape' && screenWidth === windowWidth
                  ? '30%'
                  : '85%',
            }}
            title={'Submit'}
            onPress={() => handleSubmitReview()}
          />
        </View>

        <Modal
          isVisible={isModalVisible}
          avoidKeyboard={true}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          style={styles.modalStyle}>
          <View style={styles.modalView}>
            <PropertyDialog
              onPress={() => {
                setModalVisible(false);
                navigation.popToTop();
              }}
            />
          </View>
        </Modal>
      </View>
      <Footer />
    </KeyboardAwareScrollView>
  );
}
