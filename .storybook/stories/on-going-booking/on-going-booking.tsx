import React from 'react';
import {
  HEADER_STYLE,
  ITEM_CONTAINER_SOLID,
  HEADER_CONTAINER_STYLE,
  CONTAINER_STYLE,
  HEADER_SUB_CONTAINER_STYLE,
  SUB_HEADER_STYLE,
  ITEM_INFORMATION_CONTAINER,
  ITEM_INFORMATION_SUB_CONTAINER,
  ITEM_INFORMATION_SUB_HEADER_STYLE,
  ITEM_INFORMATION_SUB_DESCRIPTION_STYLE,
  SHIMMER_EFFECT_IMAGE_CONTAINER,
  SHIMMER_EFFECT_HEADER_TEXT_CONTAINER,
  SHIMMER_EFFECT_TEXT_CONTAINER,
  ITEM_IMAGE_CONTAINER,
  ITEM_OVERLAY_CONTAINER,
  ITEM_IMAGE_CONTAINER_TYPE1,
  ITEM_IMAGE_CONTAINER_TYPE3,
  ITEM_IMAGE_CONTAINER_TYPE2,
  ITEM_OVERLAY_CONTAINER_TYPE2,
  LEFT_BUTTON_STYLE,
  RIGHT_BUTTON_STYLE,
  CAROUSEL_MOVEMENT_ICON,
  RATING_CONTAINER,
  RATING_TEXT,
  SEE_ALL_BUTTON_TITLE,
} from './on-going-booking.presets';
import {OnGoingBookingProps} from './on-going-booking.props';
import Ratings from '../../../.storybook/stories/ratings/ratings';
const starImage = require('../../../assets/images/startpsd.png');
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getWidth, windowWidth} from '../../../app/utils/common';
import Carousel from 'react-native-snap-carousel';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import FastImage from 'react-native-fast-image';
import {App as AppImage} from '../../../assets/images/map';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function OnGoingBooking(props: OnGoingBookingProps) {
  const Item = ({
    overlay,
    address,
    description,
    images,
  }: // onPressItem,
  {
    title: any;
    image: any;
    overlay: any;
    address: any;
    description: any;
    images: any;
    // onPressItem?: () => void;
  }) => (
    <View style={ITEM_CONTAINER_SOLID}>
      {images.length === 1 && (
        <>
          <FastImage 
            style={ITEM_IMAGE_CONTAINER} 
            source={images[0].image} 
            defaultSource={AppImage.LoadingImageWithBGPlaceholder}
            />
          {/* <Image style={ITEM_OVERLAY_CONTAINER} source={overlay} /> */}
        </>
      )}

      {images.length === 2 && (
        <>
          <View flex={1} flexDirection="row">
            <View flex={1} backgroundColor="white" paddingRight={5}>
              <FastImage
                style={ITEM_IMAGE_CONTAINER_TYPE1}
                source={images[0].image}
                defaultSource={AppImage.LoadingImageWithBGPlaceholder}
              />
            </View>
            <View flex={1}>
              <FastImage
                style={ITEM_IMAGE_CONTAINER_TYPE2}
                source={images[1].image}
                defaultSource={AppImage.LoadingImageWithBGPlaceholder}
              />
            </View>
            {/* <Image style={ITEM_OVERLAY_CONTAINER_TYPE2} source={overlay} /> */}
          </View>
        </>
      )}

      {/* <Image style={ITEM_IMAGE_CONTAINER} source={images[0].image} />
      <Image style={ITEM_OVERLAY_CONTAINER} source={overlay} /> */}

      {/* <View flex={1} flexDirection="row">
        <View flex={1} backgroundColor="white" paddingRight={5}>
          <Image style={ITEM_IMAGE_CONTAINER_TYPE1} source={images[0].image} />
        </View>
        <View flex={1}>
          <Image style={ITEM_IMAGE_CONTAINER_TYPE2} source={images[1].image} />
        </View>
        <Image style={ITEM_OVERLAY_CONTAINER_TYPE2} source={overlay} />
      </View> */}
      {images.length >= 3 && (
        <>
          <View flex={1} flexDirection="row">
            <View flex={1} backgroundColor="white" paddingRight={5}>
              <FastImage
                style={ITEM_IMAGE_CONTAINER_TYPE1}
                source={images[0].image}
                defaultSource={AppImage.LoadingImageWithBGPlaceholder}
              />
            </View>
            <View flex={1} flexDirection="column">
              <View flex={1} paddingBottom={5}>
                <FastImage
                  style={ITEM_IMAGE_CONTAINER_TYPE3}
                  source={images[1].image}
                  defaultSource={AppImage.LoadingImageWithBGPlaceholder}
                />
              </View>
              <View flex={1}>
                <FastImage
                  style={ITEM_IMAGE_CONTAINER_TYPE3}
                  source={images[2].image}
                  defaultSource={AppImage.LoadingImageWithBGPlaceholder}
                />
              </View>
            </View>
            {/* <Image style={ITEM_OVERLAY_CONTAINER_TYPE2} source={overlay} /> */}
          </View>
        </>
      )}
      <View style={ITEM_INFORMATION_CONTAINER}>
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <Text style={ITEM_INFORMATION_SUB_HEADER_STYLE}>{address}</Text>
          <View
            style={{
              width: '100%',
              // height: 40,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={ITEM_INFORMATION_SUB_DESCRIPTION_STYLE}>
              {description}
            </Text>
            <Ratings
              type="custom"
              name="complete"
              ratingImage={starImage}
              ratingColor="#FFA91C"
              // jumpValue={0.5}
              // ratingCount={5}
              startingValue={4.5}
              readonly={true}
              // ratingColor="green"
              tintColor="#FBFBFB"
              showReadOnlyText={false}
              showRating={false}
              // style={{marginHorizontal: '2%', padding: '-8%',backgroundColor:'red'}}
              containerStyle={RATING_CONTAINER}
              ratingBackgroundColor="#FFA91C30"
              // rightText="4.5"
              leftText={'4.5'}
              leftTextStyle={RATING_TEXT}
              imageSize={isTablet() ? 20 : 15}
            />
          </View>
        </View>
      </View>
    </View>
  );

  // function dynamicImageView(props) {
  //   return (
  //     <View flex={1} flexDirection="row">
  //       <View flex={1} backgroundColor="white" paddingRight={5}>
  //         <Image style={ITEM_IMAGE_CONTAINER_TYPE1} source={image} />
  //       </View>
  //       <View flex={1} flexDirection="column">
  //         <View flex={1} backgroundColor="white" paddingBottom={5}>
  //           <Image style={ITEM_IMAGE_CONTAINER_TYPE3} source={image} />
  //         </View>
  //         <View flex={1} backgroundColor="white">
  //           <Image style={ITEM_IMAGE_CONTAINER_TYPE3} source={image} />
  //         </View>
  //       </View>
  //       <Image style={ITEM_OVERLAY_CONTAINER_TYPE2} source={overlay} />
  //     </View>
  //   );
  // }

  const NoItem = ({}: {title: any; image: any}) => (
    <View style={ITEM_CONTAINER_SOLID}>
      {/* <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
      <View style={{height: 10}} />
      <ShimmerPlaceHolder style={{borderRadius: 20, width: 70, height: 15}} /> */}

      <View>
        <ShimmerPlaceHolder style={SHIMMER_EFFECT_IMAGE_CONTAINER} />
      </View>

      <View style={ITEM_INFORMATION_CONTAINER}>
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
          <View style={{height: 10}} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_TEXT_CONTAINER} />
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={props.onPressItem} activeOpacity={0.75}>
      <Item
        title={item.title}
        image={item.image}
        overlay={item.overlay}
        address={item.address}
        description={item.description}
        images={item.images}
      />
    </TouchableOpacity>
  );

  const noItemList = () => (
    <NoItem title={''} image={''} overlay={''} address={''} description={''} />
  );
  return (
    <View style={CONTAINER_STYLE}>
      {props.isLoading && (
        <View style={HEADER_CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
          <ShimmerPlaceHolder style={SHIMMER_EFFECT_HEADER_TEXT_CONTAINER} />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <View style={HEADER_CONTAINER_STYLE}>
          <View style={HEADER_SUB_CONTAINER_STYLE}>
            <Text style={HEADER_STYLE}>{props.titleLabel}</Text>
            <Text style={SUB_HEADER_STYLE}>{props.subTitleLabel}</Text>
          </View>
          <Button
            title={'See All'}
            titleStyle={SEE_ALL_BUTTON_TITLE}
            type={'clear'}
            onPress={props.seeAllPress}
            containerStyle={{
              alignSelf: 'center',
              marginRight: getWidth(10),
              marginTop: getWidth(10),
            }}
          />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          layout={'default'}
          data={props.data || []}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          windowSize={1}
          // comment below lines to show edge animation
          layoutCardOffset={0}
          // loop={true}
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
        // <FlatList
        //   style={{width: '100%'}}
        //   horizontal={true}
        //   showsHorizontalScrollIndicator={false}
        //   data={props.data || []}
        //   renderItem={renderItem}
        // />
      )}
      {props.isLoading && (
        <FlatList
          style={{width: '100%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1]}
          renderItem={noItemList}
        />
      )}
      {!props.isLoading && (
        <TouchableOpacity
          style={LEFT_BUTTON_STYLE}
          onPress={() => {
            console.log('left button clicked >>>>');
            this._carousel.snapToPrev();
          }}>
          <Image
            style={CAROUSEL_MOVEMENT_ICON}
            source={require('../../../assets/images/home/ic_left.png')}
          />
        </TouchableOpacity>
      )}
      {!props.isLoading && (
        <TouchableOpacity
          style={RIGHT_BUTTON_STYLE}
          onPress={() => {
            console.log('right button clicked >>>>');

            this._carousel.snapToNext();
          }}>
          <Image
            style={CAROUSEL_MOVEMENT_ICON}
            source={require('../../../assets/images/home/ic_right.png')}
          />
        </TouchableOpacity>
      )}
      {/* <View style={RIGHT_BUTTON_STYLE} /> */}
    </View>
  );
}
export default OnGoingBooking;
