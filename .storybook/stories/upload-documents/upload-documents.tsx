import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
  Linking,
  PermissionsAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts} from '../../../app/utils/common';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Divider} from '@rneui/themed';
import {showErrorToast, showToast} from '../../../app/utils/common/Toast';
import {colors} from '../../../app/theme';
import {Root} from '../../../app/rematch/types/store.types';
import {isTablet} from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import {itemListTypes, uploadDocumentTypes} from './upload-documents-types';
import crashlytics from '@react-native-firebase/crashlytics';
import DocumentPicker from 'react-native-document-picker';
import {
  Permission,
  PERMISSION_TYPE,
} from '../../../app/utils/common/appPermission';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import useUser from '../../../app/hooks/useUser';
import NewRelic from 'newrelic-react-native-agent';
import uploadDocStyle from './upload-documents.presets';
import useSize from '../../../app/hooks/useSize';
import useOrientation from '../../../app/hooks/useOrientation';

interface UploadDocumentsProps {
  data?: any;
  guestId?: any;
  navigation?: any;
}

const UploadDocuments = (props: UploadDocumentsProps) => {
  const arrRequestedDocumentByProperty = useSelector(
    (state: Root) => state.Guest.arrRequestedDocumentByProperty,
  );
  const arrGuestUploadedDocuments = useSelector(
    (state: Root) => state.Guest.arrGuestUploadedDocuments,
  );
  const arrGuestUploadedDocumentsAll = useSelector(
    (state: Root) => state.Guest.arrGuestUploadedDocumentsAll,
  );

  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font12,
    Font14,
    getWidthTab,
    getWidth,
    getHeight,
    Font11,
    Font13,
    Font18,
    Font15,
    Font19,
    Font9,
    Font8,
    Font7,
    Font10,
  } = useSize();
  const styles = uploadDocStyle(
    Font12,
    Font14,
    getWidthTab,
    getWidth,
    getHeight,
    Font11,
    Font13,
    Font18,
    Font15,
    Font19,
    Font9,
    Font8,
    Font7,
    windowWidth,
    screenWidth,
    orientation,
  );

  const [avatarSource, setAvatarSource] = useState(null);
  const [loaderIndex, setLoaderIndex] = useState<any>(-1);
  const [newGuest, setNewGuest] = useState<{id: any; image: any}[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [CheckInDocId, setCheckInDocId] = useState<any>(null);
  const loading = useSelector((state: Root) => state.loading);
  const {logOut} = useUser();

  const newArr = arrGuestUploadedDocumentsAll?.map(
    (item2: any) => item2.CheckInDocId,
  );

  console.log(props.guestId, 'guestId========');

  console.log(
    arrGuestUploadedDocumentsAll,
    'arrGuestUploadedDocumentsAll======',
  );

  const dispatch = useDispatch();

  const options: any = {
    mediaType: 'photo',
    includeBase64: true,
    maxWidth: 2000,
    maxHeight: 2000,
  };

  function promptMediaPermission(title: string, description: string) {
    Alert.alert(
      title,
      description,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            if (Platform.OS === 'android') {
              Linking.openSettings();
            } else {
              Linking.openURL('app-settings:');
            }
          },
        },
      ],
      {cancelable: false},
    );
  }

  const requestCameraPermission = async () => {
    try {
      Permission.checkPermission(PERMISSION_TYPE.camera).then(res => {
        if (res) {
          console.log('camera permission granted');
          // setCameraPermissionsGranted(true);
        } else {
          promptMediaPermission(
            'Camera Permission',
            'Ensure that your Camera Permission is allowed',
          );
        }
      });
    } catch (error: any) {
      // console.warn(error);
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || UploadDocument || fun: requestCameraPermission',
      );
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const galleryPermission = await Permission.checkPermission(
        PERMISSION_TYPE.mediaLibrary,
      );
      console.log(galleryPermission, 'galleryPermission');
      Permission.checkPermission(PERMISSION_TYPE.mediaLibrary).then(res => {
        if (res) {
          console.log('gallery permission granted');
        } else {
          promptMediaPermission(
            'Gallery Permission',
            'Ensure that your Gallery Permission is allowed',
          );
        }
      });
    } catch (error: any) {
      // console.warn(error);
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || UploadDocument || fun: requestCameraAndGalleryPermission',
      );
    }
  };
  const viewDocument = (DocId: number) => {
    try {
      const foundDocument = arrGuestUploadedDocumentsAll.find(
        (item: any) => DocId === item.CheckInDocId,
      );
      if (foundDocument) {
        props.navigation.navigate('ViewDocument', {
          DocumentId: foundDocument.ObjSysMediaFile.Id,
        });
      } else {
        console.log('No Id found');
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log(
        'Home || FindYourBooking || UploadDocument || fun: viewDocument',
      );
    }
  };

  const handleAvatarPress = (CheckInDocId: number) => {
    setLoaderIndex(CheckInDocId);
    setModalVisible(true);
    setCheckInDocId(CheckInDocId);
  };

  const handleModelOptionPress = async (option: any) => {
    if (option === 'camera') {
      console.log('fromCamera');
      if (await Permission.checkPermission(PERMISSION_TYPE.camera)) {
        console.log('open camera');
        try {
          launchCamera(options, (response: any) => {
            if (response.didCancel) {
              // setModalVisible(false);
            } else if (response.errorMessage) {
              console.error(response.errorMessage);
            } else {
              setAvatarSource(response.assets[0].uri);
              setModalVisible(false);
              dispatch.Guest.uploadDocument(
                {
                  docId: CheckInDocId,
                  guestId: props.guestId,
                  file: response.assets[0].uri,
                },
                (res: uploadDocumentTypes) => {
                  if (res.IsSuccess) {
                    showToast(res.Message);
                    setNewGuest((prevState: any) => [
                      ...prevState,
                      {id: CheckInDocId, image: response.assets[0].uri},
                    ]);
                  } else {
                    setModalVisible(false);
                    showErrorToast(res.Message);
                    if (res?.response?.status === 401) {
                      logOut();
                    }
                    console.log(res);
                  }
                },
              );
            }
          });
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Home || FindYourBooking || UploadDocument || fun: launchCamera',
          );
        }
      } else {
        requestCameraPermission();
      }
    } else if (option === 'gallery') {
      if (await Permission.checkPermission(PERMISSION_TYPE.mediaLibrary)) {
        console.log('open gallery');
        try {
          // open gallery
          /*   launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
              console.log('---didCancel---');
              setModalVisible(false);
            } else if (response.errorMessage) {
              console.log('---errorMessage---');
              console.error(response.errorMessage);
            } else {
              console.log('---else---');
              setAvatarSource(response.assets[0].uri);
              setModalVisible(false);
              dispatch.Guest.uploadDocument(
                {
                  docId: CheckInDocId,
                  guestId: props.guestId,
                  file: response.assets[0].uri,
                },
                (res: uploadDocumentTypes) => {
                  console.log('res=====', res);
                  if (res.IsSuccess) {
                    showToast(res.Message);
                    setNewGuest((prevState: any) => [
                      ...prevState,
                      {id: CheckInDocId, image: response.assets[0].uri},
                    ]);
                  } else {
                    showErrorToast(res.Message);
                    setModalVisible(false);
                    console.log(res);
                  }
                },
              );
            }
          }); */

          // IMGAE CROPPER LIB
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
          }).then(image => {
            console.log('Selected Image', image);
            setModalVisible(false);
            dispatch.Guest.uploadDocument(
              {
                docId: CheckInDocId,
                guestId: props.guestId,
                file: image.path,
              },
              (res: uploadDocumentTypes) => {
                console.log('res=====', res);
                if (res.IsSuccess) {
                  showToast(res.Message);
                  setNewGuest((prevState: any) => [
                    ...prevState,
                    {id: CheckInDocId, image: image.path},
                  ]);
                } else {
                  showErrorToast(res.Message);
                  setModalVisible(false);
                  console.log(res);
                  if (res?.response?.status === 401) {
                    logOut();
                  }
                }
              },
            );
          });
          // .catch(() => setModalVisible(false));
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Home || FindYourBooking || UploadDocument || fun: launchImageLibrary',
          );
        }
      } else {
        requestGalleryPermission();
      }
    } else {
      console.log('files pressed');
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        });

        console.log('res=====', res);

        const fileUri = res[0].uri;

        setAvatarSource(fileUri);
        setModalVisible(false);
        dispatch.Guest.uploadDocument(
          {
            docId: CheckInDocId,
            guestId: props.guestId,
            file: fileUri,
          },
          (uploadRes: uploadDocumentTypes) => {
            console.log('uploadRes=====', uploadRes);
            if (uploadRes.IsSuccess) {
              showToast(uploadRes.Message);
              setNewGuest((prevState: any) => [
                ...prevState,
                {id: CheckInDocId, image: fileUri},
              ]);
            } else {
              showErrorToast(uploadRes.Message);
              if (res?.response?.status === 401) {
                logOut();
              }
              console.log(uploadRes);
            }
          },
        );
      } catch (error) {
        crashlytics().recordError(error);
        NewRelic.recordError(error);
        crashlytics().log(
          'Home || FindYourBooking || UploadDocument || fun: DocumentPicker.pick',
        );
      }
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View>
        <Text style={[styles.textStyle, {marginHorizontal: '5%'}]}>
          {arrGuestUploadedDocuments?.length}/
          {arrRequestedDocumentByProperty?.length} Uploaded
        </Text>
        <FlatList
          scrollEnabled={false}
          data={arrRequestedDocumentByProperty}
          renderItem={({item}: itemListTypes) => (
            <>
              <View style={styles.container}>
                <Text style={styles.textStyle}>
                  {item.DocName}{' '}
                  <Text style={{color: colors.secondary}}>
                    {item.FlgMendatory ? '*' : ''}
                  </Text>
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {arrGuestUploadedDocuments?.some(
                    (data: any) => item.Id === data.CheckInDocId,
                  ) ? (
                    <TouchableOpacity
                      accessible={true}
                      accessibilityLabel="View Document"
                      onPress={() => {
                        viewDocument(item.Id);
                      }}
                      style={styles.IMAGE_BUTTON_CONTAINER}>
                      <Image
                        source={require('../../../assets/images/pdf_icon.png')}
                        resizeMode={'contain'}
                        style={styles.ICON}
                      />
                    </TouchableOpacity>
                  ) : item.Id === loaderIndex &&
                    loading.effects.Guest.uploadDocument ? (
                    <ActivityIndicator
                      style={styles.ICON}
                      color={colors.secondary}
                    />
                  ) : (
                    <TouchableOpacity
                      accessible={true}
                      accessibilityLabel="Document Upload"
                      onPress={() => {
                        console.log(item.Id, 'item.id');
                        handleAvatarPress(item.Id);
                      }}
                      style={styles.IMAGE_BUTTON_CONTAINER}>
                      <Image
                        source={require('../../../assets/images/upload_icon.png')}
                        resizeMode={'contain'}
                        style={styles.ICON}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View>
                {/* style={{marginTop: '1%', marginBottom: '2%'}} */}
                {arrGuestUploadedDocumentsAll?.map((item2: any) =>
                  item.Id === item2.CheckInDocId ? (
                    item2.FlgMarkInvalid &&
                    item2.FlgMarkInvalid !== undefined ? (
                      <TouchableOpacity
                        style={{
                          marginHorizontal: '8%',
                          paddingHorizontal: '2%',
                          paddingVertical: '3%',
                          backgroundColor: 'rgba(238, 238, 238,0.6)',
                          borderRadius: 10,
                          marginBottom: '3%',
                          flexDirection: 'row',
                        }}
                        activeOpacity={0.65}
                        onPress={() => viewDocument(item2.CheckInDocId)}
                        key={item2.Id}>
                        <View style={{width: '100%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={[
                                styles.textStyle,
                                {
                                  fontFamily: Fonts.SFProRounded.Medium,
                                  fontSize: isTablet() ? Font10 : Font13,
                                },
                              ]}>
                              Rejected
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                              }}>
                              <Text
                                style={[
                                  styles.textStyle,
                                  {
                                    fontFamily: Fonts.SFProRounded.Regular,
                                    fontSize: isTablet() ? Font10 : Font12,
                                    marginEnd: '3%',
                                  },
                                ]}>
                                {new Date(
                                  item2.DateUploaded,
                                ).toLocaleDateString()}
                              </Text>
                              <View>
                                <Icon
                                  name="chevron-forward-outline"
                                  size={15}
                                  color={'black'}></Icon>
                              </View>
                            </View>
                          </View>

                          <Text
                            style={[
                              styles.textStyle,
                              {
                                fontFamily: Fonts.SFProRounded.Regular,
                                fontSize: isTablet() ? Font10 : Font12,
                                marginTop: '1%',
                              },
                            ]}>
                            {item2.InvalidReason}
                          </Text>
                        </View>

                        {/* <TouchableOpacity
                              onPress={() => viewDocument(item2.CheckInDocId)}
                              style={[
                                styles.IMAGE_BUTTON_CONTAINER,
                                {
                                  flexDirection: 'row',
                                  borderRadius: 20,
                                  borderWidth: 1,
                                  padding: 1,
                                  paddingHorizontal: 6,
                                  borderColor: 'black',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginTop: '1%',
                                  width: '10%',
                                },
                              ]}>
                              <Text style={{color: 'black', fontSize: 12}}>View</Text>
                            </TouchableOpacity> */}
                      </TouchableOpacity>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  ),
                )}
              </View>
            </>
          )}
          ItemSeparatorComponent={() => <Divider style={{marginLeft: '5%'}} />}
        />
      </View>

      <Modal
        accessible={true}
        accessibilityLabel="Actions to Upload Dcument"
        isVisible={modalVisible}
        onBackdropPress={handleModalClose}
        onBackButtonPress={handleModalClose}
        style={{
          marginHorizontal: 0,
          justifyContent: 'flex-end',
          marginVertical: 0,
        }}
        swipeDirection={'down'}
        onSwipeComplete={handleModalClose}>
        <View
          style={{
            width: '100%',
            // height: isTablet() ? '75%' : '20%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#F6F6F6',
          }}>
          <Divider
            width={4}
            inset={true}
            insetType="middle"
            style={{
              width: isTablet() ? getWidthTab(80) : getWidth(48),
              marginTop: isTablet() ? getWidthTab(20) : getWidth(13),
              alignSelf: 'center',
              borderRadius: isTablet() ? getWidthTab(10) : getWidth(5),
            }}
          />

          <View
            style={{
              marginStart: isTablet() ? '5%' : '5%',
              marginHorizontal: isTablet() ? '3.5%' : '1%',
              marginVertical: isTablet() ? '4%' : '1.5%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.modelHeadertxt}>Choose an action</Text>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Close"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: isTablet() ? getWidthTab(48) : getWidth(48),
                height: isTablet() ? getWidthTab(48) : getWidth(48),
                // backgroundColor: 'pink',
              }}
              onPress={handleModalClose}>
              <Image
                style={{
                  width: isTablet() ? getWidthTab(30) : getWidth(20),
                  height: isTablet() ? getWidthTab(30) : getWidth(20),
                  tintColor: 'gray',
                }}
                source={require('../../../assets/images/cross.png')}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingBottom: isTablet() ? '7%' : '10%',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Camera"
                onPress={() => handleModelOptionPress('camera')}>
                <Image
                  style={styles.modelImg}
                  source={require('../../../assets/images/camera_option.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text style={styles.modelText}>Camera</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Gallery"
                onPress={() => handleModelOptionPress('gallery')}>
                <Image
                  style={styles.modelImg}
                  source={require('../../../assets/images/gallery_option.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text style={styles.modelText}>Gallery</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Files"
                onPress={() => handleModelOptionPress('file')}>
                <Image
                  style={styles.modelImg}
                  source={require('../../../assets/images/file_option.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text style={styles.modelText}>Files</Text>
            </View>
            {/* <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: isTablet() ? getWidthTab(70) : getWidth(50),
              }}>
              <TouchableOpacity onPress={handleModalClose}>
                <Image
                  style={{
                    width: isTablet() ? getWidthTab(50) : getWidth(40),
                    height: isTablet() ? getWidthTab(50) : getWidth(40),
                  }}
                  source={require('../../../assets/images/cancel_option_1.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <Text style={styles.modelText}>Cancel</Text>
            </View> */}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UploadDocuments;
