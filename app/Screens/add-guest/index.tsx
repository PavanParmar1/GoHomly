import {Platform, StatusBar, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import GuestDetailsForm2 from '../../../.storybook/stories/guest-details-form/guest-details-from-v2';
import UploadDocuments from '../../../.storybook/stories/upload-documents/upload-documents';
import {useRoute} from '@react-navigation/native';
import {Text} from '@rneui/base';
import {App} from '../../../assets/images/map';
import {Fonts} from '../../utils/common';
import {Image} from 'react-native';
import addGuestStyles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Tab, TabView} from '@rneui/themed';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

const AddGuest = ({navigation}: any) => {
  const route: any = useRoute();
  const bookingId = route?.params?.BookingId;
  const data = route?.params?.Data;
  const guestId = route?.params?.GuestId;
  const isFromUpload = route?.params?.segmentIndex;
  const [segmentIndex, setSegmentIndex] = useState(isFromUpload || 0);
  const [getGuestID, setGuestID] = useState(0);
  const [getBookingID, setBookingID] = useState(0);
  const [getGuestData, setGuestData] = useState(data);

  const {dimensions, orientation} = useOrientation();
  const {
    Font7,
    Font13,
    Font12,
    Font14,
    Font17,
    Font9,
    getWidth,
    getWidthTab,
    navbarHeader,
    navbarImage,
    navbarTitle,
  } = useSize();
  const styles = addGuestStyles(
    Font12,
    Font14,
    Font17,
    Font9,
    getWidth,
    getWidthTab,
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={navbarHeader}
          onPress={() => navigation.pop()}
          accessible={true}
          accessibilityLabel="Back">
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
        /* hiiii */
      ),
      headerTitle: () => (
        <Text style={navbarTitle}>{data ? 'Update Guest' : 'Add Guest'}</Text>
      ),

      headerShadowVisible: true,
    });
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} />

      {/* <View style={styles.segmentContainer}>
        <SegmentedControl
          style={styles.segment}
          values={['Guest Details', 'Upload Documents']}
          fontStyle={styles.segmentFontStyle}
          activeFontStyle={styles.activeSegmentFontStyle}
          selectedIndex={segmentIndex}
          onChange={event => {
            !getGuestData
              ? setSegmentIndex(0)
              : setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          appearance={'light'}
        />
      </View> */}

      <Tab
        value={segmentIndex}
        style={styles.tabView}
        containerStyle={styles.tabContainer}
        buttonStyle={(isActive: boolean) => ({
          backgroundColor: isActive ? 'white' : '#EEEEF0',
          elevation: isActive ? 3 : 0,
          borderRadius: 5,
          paddingHorizontal: 0,
          padding: 0,
        })}
        titleStyle={(isActive: boolean) => ({
          color: 'black',
          // height: isTablet() ? getWidthTab(40) : getWidth(32),
          padding: 0,
          includeFontPadding: false,
          fontSize:
            orientation === 'landscape' ? Font7 : isTablet() ? Font9 : Font13,
          fontFamily: isActive
            ? Platform.OS === 'ios'
              ? Fonts.SFProRounded.SemiBold
              : Fonts.SFProRounded.Bold
            : Fonts.SFProRounded.Regular,
        })}
        onChange={event => {
          !getGuestData ? setSegmentIndex(0) : setSegmentIndex(event);
        }}
        disableIndicator
        variant="primary">
        <Tab.Item title="Guest Details" activeOpacity={0} />
        <Tab.Item title="Upload Documents" activeOpacity={0} />
      </Tab>

      {/* <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableAutomaticScroll={true}
        style={{flex: 1, backgroundColor: 'pink'}}> */}
      <TabView
        disableSwipe={true}
        value={segmentIndex}
        onChange={segmentIndex}
        animationType="spring"
        containerStyle={{}}>
        <TabView.Item style={{flex: 1}}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            enableAutomaticScroll={true}
            style={{flex: 1}}>
            <GuestDetailsForm2
              id={
                bookingId !== undefined && bookingId !== null
                  ? bookingId
                  : getBookingID
              }
              navigation={navigation}
              Data={data !== undefined && data !== null ? data : getGuestData}
              isMandatory={true}
              onSuccess={(data: any) => {
                setGuestData(data);
                setBookingID(data.BookingId);
                setGuestID(data.Id);
                setSegmentIndex(1);
              }}
            />
          </KeyboardAwareScrollView>
        </TabView.Item>
        <TabView.Item style={{flex: 1}}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            enableAutomaticScroll={true}
            style={{flex: 1}}>
            <UploadDocuments
              navigation={navigation}
              guestId={
                guestId !== undefined && guestId !== null ? guestId : getGuestID
              }
            />
          </KeyboardAwareScrollView>
        </TabView.Item>
      </TabView>
      {/* {segmentIndex === 0 ? (
          <GuestDetailsForm2
            id={
              bookingId !== undefined && bookingId !== null
                ? bookingId
                : getBookingID
            }
            navigation={navigation}
            Data={data !== undefined && data !== null ? data : getGuestData}
            isMandatory={true}
            onSuccess={(data: any) => {
              setGuestData(data);
              setBookingID(data.BookingId);
              setGuestID(data.Id);
              setSegmentIndex(1);
            }}
          />
        ) : (
          <UploadDocuments
            navigation={navigation}
            guestId={
              guestId !== undefined && guestId !== null ? guestId : getGuestID
            }
          />
        )} */}
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default AddGuest;
