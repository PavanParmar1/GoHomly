import React from 'react';
import {GuestDetailsProps} from './guest-details.props';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import guestDetailStyle from './guest-details.presets2';

import {isTablet} from 'react-native-device-info';
import {capitalizeFirstLetter} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {useSelector} from 'react-redux';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export default function GuestDetails(props: GuestDetailsProps) {
  // const [tag, setStatusTag] = useState('WaitingForUploadDocuments');
  const userDetails = useSelector((state: any) => state.Auth.auth);
  const firebaseVariables = useSelector((state: any) => state.Auth.variables);

  const {dimensions, orientation} = useOrientation();
  const windowHeight = dimensions.window.height;
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font10,
    Font11,
    Font12,
    Font14,
    Font15,
    Font16,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    Font7,
    Font8,
    Font6,
    Font5,
    Font4,
  } = useSize();
  const styles = guestDetailStyle(
    Font10,
    Font11,
    Font12,
    Font14,
    Font15,
    Font16,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    orientation,
    Font7,
    Font8,
    Font6,
    Font5,
    Font4,
    screenWidth,
    windowWidth,
  );

  const item = props.data;
  const VerificationStatus =
    item?.VerificationStatus?.Key || 'waiting_for_docs';

  return (
    <View
      style={
        orientation === 'landscape' && screenWidth === windowWidth
          ? styles.INNER_CONTAINER_LANDSCAPE
          : styles.INNER_CONTAINER
      }>
      <View style={styles.HEADER_CONTAINER}>
        <Text style={[styles.NAME, props.nameStyle]}>
          {capitalizeFirstLetter(item?.FirstName)}
          {'  '}
          {userDetails.Data.Email === item?.EmailWork ? (
            <Text style={[styles.NAME, {color: colors.secondary}]}>(You)</Text>
          ) : (
            <></>
          )}{' '}
          {item?.FlgLeadGuest ? (
            <Image
              source={require('../../../assets/images/verified_icon.png')}
              resizeMode={'contain'}
              style={styles.ICON_VERIFIED}
            />
          ) : (
            <></>
          )}
        </Text>

        <View style={{flexDirection: 'row'}}>
          {VerificationStatus === 'waiting_for_docs' ||
          VerificationStatus === 'screening_in_process' ||
          VerificationStatus === 'screening_failed' ? (
            <>
              <TouchableOpacity
                onPress={() => props.onUploadPress(props.index)}
                accessible={true}
                accessibilityLabel="Document Upload"
                style={[
                  styles.IMAGE_BUTTON_CONTAINER,
                  {marginEnd: isTablet() ? getWidthTab(25) : getWidth(15)},
                ]}>
                <Image
                  source={require('../../../assets/images/upload_icon.png')}
                  resizeMode={'contain'}
                  style={styles.ICON}
                />
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Edit Guest Info"
                onPress={() => props.onEditPress(props.index)}
                style={[styles.IMAGE_BUTTON_CONTAINER]}>
                <Image
                  source={require('../../../assets/images/edit_icon.png')}
                  resizeMode={'contain'}
                  style={styles.ICON}
                />
              </TouchableOpacity>
            </>
          ) : VerificationStatus === 'screening_completed' ? (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="CheckIn"
              onPress={() => props.onCheckinPress(props.index)}
              style={[styles.IMAGE_BUTTON_CONTAINER]}>
              <Image
                source={require('../../../assets/images/checkin_icon.png')}
                resizeMode={'contain'}
                style={styles.ICON}
              />
            </TouchableOpacity>
          ) : VerificationStatus === 'checked_in' ? (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="CheckOut"
              onPress={() => props.onCheckoutPress(props.index)}
              style={[styles.IMAGE_BUTTON_CONTAINER]}>
              <Image
                source={require('../../../assets/images/checkout_icon.png')}
                resizeMode={'contain'}
                style={styles.ICON}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={styles.INFO_CONTAINER}>
        {item?.EmailWork && <Text style={styles.INFO}>{item?.EmailWork}</Text>}
        {item?.MobileNo && <Text style={styles.INFO}>{item?.MobileNo}</Text>}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:
              orientation === 'landscape' && screenWidth === windowWidth
                ? '3%'
                : '4%',
          }}>
          <View
            style={
              orientation === 'landscape' && screenWidth === windowWidth
                ? styles.TAG_STYLE_LANDSCAPE
                : styles.TAG_STYLE
            }>
            <Text style={styles.TAG_TEX_STYLE}>
              {VerificationStatus === 'waiting_for_docs'
                ? 'Screening Pending'
                : VerificationStatus === 'screening_in_process'
                  ? 'Screening In Process'
                  : VerificationStatus === 'screening_failed'
                    ? 'Screening Failed'
                    : VerificationStatus === 'screening_completed'
                      ? 'Screening Completed'
                      : VerificationStatus === 'checked_in'
                        ? 'Checked In'
                        : VerificationStatus === 'checked_out'
                          ? 'Checked Out'
                          : null}
            </Text>
          </View>
          {VerificationStatus === 'waiting_for_docs' ||
          VerificationStatus === 'screening_in_process' ? (
            <Text style={[styles.TAG_TEX_STYLE]}>
              {props?.countOfRequstedDocumentsByProperty -
                item?.DocumnetsToUpload +
                '/' +
                props.countOfRequstedDocumentsByProperty +
                ' uploaded'}
            </Text>
          ) : (
            <></>
          )}
          {VerificationStatus === 'screening_in_process' &&
          firebaseVariables.verify_documents ? (
            <TouchableOpacity onPress={() => props.onVerifyPress()}>
              <Text
                style={[
                  styles.TAG_TEX_STYLE,
                  {color: colors.secondary, textDecorationLine: 'underline'},
                ]}>
                Verify
              </Text>
            </TouchableOpacity>
          ) : (
            // <></>
            <></>
          )}
        </View>
      </View>
    </View>
  );
}
