import React, {useState, useRef} from 'react';
import {CarouselItemProps} from './carousel-component.props';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Modal,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import CarouselImageItem from './CarouselImageItem';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Image} from '@rneui/base';
import {App} from '../../../assets/images/map';
import {isTablet} from 'react-native-device-info';
import {App as AppImage} from '../../../assets/images/map';
import FastImage from 'react-native-fast-image';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
import CarouselComponentStyle from './carousel-component.presets';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function CarouselComponent(props: CarouselItemProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font5,
    Font10,
    Font9,
    Font12,
    Font14,
    Font4,
    Font6,
    Font7,
    Font8,
    getWidth,
    getWidthTab,
    navbarHeader,
    navbarImage,
  } = useSize();
  const styles = CarouselComponentStyle(
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

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index: any) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  // const NoItem = ({}: {image: any}) => (
  //   <View style={CONTAINER_STYLE}>
  //     <View>
  //       <ShimmerPlaceHolder style={CONTAINER_STYLE} />
  //     </View>
  //   </View>
  // );

  // const noItemList = () => <NoItem image={''} />;

  return (
    <View style={styles.CONTAINER_STYLE}>
      {props.isLoading && (
        <View style={styles.CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_IMAGE_CONTAINER} />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <View style={styles.CONTAINER_STYLE}>
          <View>
            <View>
              <Carousel
                layout="default"
                data={props.data || []}
                useScrollView={true}
                renderItem={({item}) => (
                  <CarouselImageItem
                    item={item}
                    index={index}
                    onPress={handleImagePress}
                  />
                )}
                sliderWidth={
                  isTablet() ? windowWidth : (375 * windowWidth) / 375
                }
                itemWidth={isTablet() ? windowWidth : (375 * windowWidth) / 375}
                windowSize={1}
                onSnapToItem={i => setIndex(i)}
                layoutCardOffset={0}
                loop={true}
                loopClonesPerSide={props.data.length}
                firstItem={0}
                enableSnap={true}
                activeSlideOffset={20}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                activeSlideAlignment={'center'}
                containerCustomStyle={{
                  overflow: 'visible', // for custom animations
                }}
                decelerationRate={0.25}
              />
            </View>

            <Modal
              onRequestClose={() => setModalVisible(false)}
              visible={modalVisible}
              transparent={true}>
              <View style={{flex: 1, backgroundColor: 'black'}}>
                <SafeAreaView style={{flex: 1}}>
                  <StatusBar
                    backgroundColor={'black'}
                    barStyle={'light-content'}
                  />

                  <ImageViewer
                    enableSwipeDown={true}
                    onSwipeDown={() => setModalVisible(false)}
                    failImageSource={require('../../../assets/images/add_guest.png')} // Set the fail image source
                    saveToLocalByLongPress={false}
                    renderIndicator={(currentIndex: any, allSize: any) => (
                      <View
                        style={{
                          position: 'absolute',
                          top: 20,
                          right: 0,
                          left: 0,
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}
                        accessible={true}
                        accessibilityLabel="navBar">
                        <TouchableOpacity
                          style={[
                            navbarHeader,
                            {
                              width: '12%',
                              alignItems: 'center',
                              // backgroundColor: 'pink',
                            },
                          ]}
                          accessible={true}
                          accessibilityLabel="imageViwer Back"
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
                          <Text
                            style={{
                              color: 'white',
                              fontSize: isTablet() ? Font10 : Font14,
                            }}>
                            {currentIndex} / {allSize}
                          </Text>
                        </View>
                      </View>
                    )}
                    renderImage={props => (
                      <FastImage
                        {...props} // Pass all props to FastImage
                        style={[styles.IMAGE_STYLE]} // Apply your custom styles
                        defaultSource={AppImage.LoadingImageWithBGPlaceholder} // Default placeholder image
                        accessible={true}
                        accessibilityLabel="Default Property Image"
                      />
                    )}
                    index={selectedImageIndex}
                    imageUrls={props?.data?.map((item: any) => ({
                      url: item.AWSThumbNailRelativePath,
                    }))}
                  />
                </SafeAreaView>
              </View>
            </Modal>
          </View>

          <Pagination
            dotsLength={props.data.length || 0}
            activeDotIndex={index}
            carouselRef={isCarousel}
            containerStyle={styles.PAGAINATION_CONTAINER_STYLE}
            dotStyle={[
              styles.DOT_SIZE,
              {
                backgroundColor: props.dotColor,
              },
            ]}
            inactiveDotOpacity={0.5}
            tappableDots={false}
          />
          <View style={styles.IMAGE_WRAPPER_CONTAINER}>
            <View
              style={props.counterViewStyle || styles.IMAGE_COUNT_CONTAINER}>
              <Text
                style={props.counterTextStyle || styles.IMAGE_COUNT_TEXT_STYLE}>
                {index + 1}/{props.data.length}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
export default CarouselComponent;
