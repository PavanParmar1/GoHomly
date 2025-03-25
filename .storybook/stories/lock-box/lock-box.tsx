import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {LockBoxProps} from './lock-box.props';
import LockBoxStyle from './lock-box.presets';
import {isTablet} from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import {navbarHeader, navbarImage} from '../../../app/utils/common';
import {App} from '../../../assets/images/map';
import CarouselComponentStyle from '../carousel-component/carousel-component.presets';
import {App as AppImage} from '../../../assets/images/map';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export default function LockBox(props: LockBoxProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    getWidth,
    getWidthTab,
    Font12,
    Font14,
    Font20,
    Font8,
    Font9,
    Font4,
    Font5,
    Font6,
    Font7,
  } = useSize();
  const styles = LockBoxStyle(
    windowWidth,
    getWidth,
    getWidthTab,
    Font12,
    Font14,
    Font20,
    Font8,
    Font4,
    Font5,
    Font6,
    Font7,
    Font9,
    orientation,
    screenWidth,
  );
  const style = CarouselComponentStyle(
    orientation,
    windowWidth,
    getWidth,
    getWidthTab,
    Font9,
    Font12,
    Font5,
    Font4,
    Font6,
    Font7,
    Font8,
    screenWidth,
  );

  const [getModalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const renderItem = ({item, index}: any) => (
    <>
      {/* <>{console.log(item, 'LockBoxItem')}</> */}
      <TouchableOpacity
        onPress={() => handleImagePress(index)}
        style={{marginEnd: 10, borderRadius: 5}}>
        <FastImage
          source={{uri: item.Url}}
          style={styles.IMG}
          defaultSource={AppImage.LoadingImageWithLockPlaceholder}
        />
      </TouchableOpacity>
    </>
  );

  return (
    <>
      <View style={styles.CONTAINER}>
        <View style={styles.INNER_CONTAINER}>
          <Text style={styles.TITLE}>{props.title}</Text>
          <Text style={styles.SUBTITLE}>{props.subTitle}</Text>

          {/* <View style={IMG_CONTAINER}>
            <TouchableOpacity onPress={() => handleImagePress(images[0].url)}>
              <Image
                source={require('../../../assets/images/lockbox.png')}
                style={IMG}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginStart: isTablet() ? '2%' : '3.5%'}}
              // onPress={props.onPress}
              onPress={() => setModalVisible(true)}>
              <Image
                source={require('../../../assets/images/lockbox_1.png')}
                style={IMG}
              />
            </TouchableOpacity>

          </View> */}

          <FlatList
            horizontal={true}
            data={props.data}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />

          <Modal
            onRequestClose={() => setModalVisible(false)}
            visible={getModalVisible}
            transparent={false}>
            <View style={{flex: 1, backgroundColor: 'black'}}>
              <SafeAreaView style={{flex: 1}}>
                <StatusBar
                  backgroundColor={'black'}
                  barStyle={'light-content'}
                />
                <ImageViewer
                  saveToLocalByLongPress={false}
                  imageUrls={props?.data?.map((item: any) => ({url: item.Url}))}
                  index={selectedImageIndex}
                  onSwipeDown={() => setModalVisible(false)} // Close the modal when swiped down
                  renderImage={props => (
                    <FastImage
                      {...props} // Pass all props to FastImage
                      style={[style.IMAGE_STYLE]} // Apply your custom styles
                      defaultSource={AppImage.LoadingImageWithLockPlaceholder}
                    />
                  )}
                  renderIndicator={(currentIndex: any, allSize: any) => (
                    <View
                      style={{
                        position: 'absolute',
                        top: 35,
                        right: 0,
                        left: 0,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        style={[
                          navbarHeader,
                          {
                            width: '12%',
                            alignItems: 'center',
                          },
                        ]}
                        onPress={() => setModalVisible(false)}>
                        <Image
                          style={[navbarImage, {tintColor: 'white'}]}
                          source={App.Back}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>

                      <View
                        style={{
                          alignItems: 'center',
                          width: '88%',
                          height: isTablet() ? 34 : 30,
                          justifyContent: 'center',
                        }}>
                        <Text style={{color: 'white', fontSize: 16}}>
                          {currentIndex} / {allSize}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </SafeAreaView>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
}
