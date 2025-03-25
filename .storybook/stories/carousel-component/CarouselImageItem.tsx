import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
import FastImage from 'react-native-fast-image';
import {App as AppImage} from '../../../assets/images/map';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
import CarouselComponentStyle from './carousel-component.presets';

const CarouselImageItem = ({item, index, onPress}: any) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font9,
    Font12,
    Font4,
    Font6,
    Font7,
    Font8,
    Font5,
    getWidth,
    getWidthTab,
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

  return (
    <>
      {/* <>{console.log(index)}</> */}
      {/* <Text>{JSON.stringify(index)}</Text> */}
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={`Property Images ${index}`}
        activeOpacity={1}
        onPress={() => onPress(index)}
        style={styles.IMAGE_ITEM_CONTAINER_STYLE}>
        <FastImage
          source={{uri: item.AWSThumbNailRelativePath}}
          style={styles.IMAGE_STYLE}
          defaultSource={AppImage.LoadingImageWithBGPlaceholder}
        />
      </TouchableOpacity>
    </>
  );
};
export default CarouselImageItem;
