import React, {useState} from 'react';
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
  ITEM_RATING_STYLE,
  ITEM_RATING_CONTAINER_STYLE,
  ITEM_INFORMATION_TITLE_CONTAINER,
  ITEM_INFORMATION_TOP_CONTAINER,
  ITEM_TRAVEL_DATE_HEADER_STYLE,
  ITEM_TRAVEL_DATE_STYLE,
  TRAVEL_INFORMATION_TITLE_CONTAINER,
  TRAVEL_INFORMATION_MAIN_CONTAINER,
  DIVIDER,
  GUEST_INFORMATION_TITLE_CONTAINER,
  GUEST_INFORMATION_MAIN_CONTAINER,
  CHECKOUT_TITLE,
  CHECKOUT_BUTTON_CONTAINER,
  CHECKOUT_BUTTON_STYLE,
  ICONS_CONTAINER,
  ICON,
  BUTTON_CONTAINER,
  BUTTON_MAIN_CONTAINER,
  CHECKOUT_BTN_CONTAINER,
  RIGHT_BUTTON_CONTAINER,
  CHECKOUT_BTN,
  LIKE_HEART_ICON,
  VERTICAL_DIVIDER,
  ITEM_ADDRESS_HEADER_STYLE,
  LINE_DIVIER_VIEW,
  ITEM_RATING_IMGE_STYLE,
  LIKE_HEART_ICON_CONTAINER,
  TRAVEL_INFORMATION_TOP_CONTAINER,
  GUEST_INFORMATION_TOP_CONTAINER,
  ITEM_INFORMATION_MAIN_CONTAINER,
  SEE_ALL_CONTAINER_STYLE,
  DIVIDER_GUEST_STYLE,
  ICONS_TOP_CONTAINER,
} from './my-booking.presets';
import {MyBookingProps} from './my-booking.props';
import Ratings from '../../../.storybook/stories/ratings/ratings';
const starImage = require('../../../assets/images/home/my-booking/ic_star.png');
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getWidth, getWidthTab, windowWidth} from '../../../app/utils/common';
import Carousel from 'react-native-snap-carousel';
import {isTablet} from 'react-native-device-info';
import {Button} from '../button/button';
import FastImage from 'react-native-fast-image';
import {Divider} from '@rneui/themed-edge';
import ImageButton from '../image-button/imagebutton';
const phone = require('../../../assets/images/phone.png');
const chat = require('../../../assets/images/chat.png');
import {App as AppImage} from '../../../assets/images/map';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
function MyBooking(props: MyBookingProps) {
  const [data, setData] = useState(props.data);
  const heartFill = require('../../../assets/images/home/my-booking/ic_fav_filled.png');
  const heart = require('../../../assets/images/home/my-booking/ic_fav.png');

  console.log(props.data, 'propsData');

  const Item = ({
    title,
    overlay,
    address,
    description,
    images,
    rating,
    guestDetails,
    travelDate,
    bookingId,
    favOnPress,
    isLiked,
    getPropertyData,
  }: // onPressItem,
  {
    title: any;
    image: any;
    overlay: any;
    address: any;
    description: any;
    images: any;
    rating: any;
    guestDetails: any;
    travelDate: any;
    bookingId: any;
    isLiked: any;
    getPropertyData: any;
    // favOnPress?: () => void;
  }) => (
    <View style={ITEM_CONTAINER_SOLID}>
      <ImageButton
        source={isLiked ? heartFill : heart}
        // onPress={favOnPress(bookingId)}
        style={LIKE_HEART_ICON}
        containerStyle={LIKE_HEART_ICON_CONTAINER}
      />

      {getPropertyData.length === 1 ? (
        <FastImage
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            ...ITEM_IMAGE_CONTAINER,
          }}
          source={{uri: getPropertyData.PropertyCoverPhoto.UniqueFileName}}
          defaultSource={AppImage.LoadingImageWithBGPlaceholder}
        />
      ) : (
        <FastImage
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            ...ITEM_IMAGE_CONTAINER,
          }}
          source={require('../../../assets/images/home/my-booking/ic_booking_1.png')}
          defaultSource={AppImage.LoadingImageWithBGPlaceholder}
        />
      )}

      {getPropertyData.length === 2 && (
        <View flexDirection="row">
          <View flex={1} backgroundColor="white" paddingRight={5}>
            <FastImage
              style={{borderTopLeftRadius: 10, ...ITEM_IMAGE_CONTAINER}}
              source={images[0].image}
              defaultSource={AppImage.LoadingImageWithBGPlaceholder}
            />
          </View>
          <View flex={1}>
            <FastImage
              style={{borderTopRightRadius: 10, ...ITEM_IMAGE_CONTAINER}}
              source={images[1].image}
              defaultSource={AppImage.LoadingImageWithBGPlaceholder}
            />
          </View>
          {/* <Image style={ITEM_OVERLAY_CONTAINER} source={overlay} /> */}
        </View>
      )}
      {getPropertyData.length >= 3 && (
        <View flexDirection="row">
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
                style={{
                  borderTopRightRadius: 10,
                  ...ITEM_IMAGE_CONTAINER_TYPE3,
                }}
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
      )}
      <View style={ITEM_INFORMATION_CONTAINER}>
        <View style={ITEM_INFORMATION_SUB_CONTAINER}>
          <View style={ITEM_INFORMATION_MAIN_CONTAINER}>
            <View style={ITEM_INFORMATION_TOP_CONTAINER}>
              <View style={ITEM_INFORMATION_TITLE_CONTAINER}>
                <Text numberOfLines={1} style={ITEM_ADDRESS_HEADER_STYLE}>
                  {getPropertyData.PropertyName}
                </Text>
                <Text
                  numberOfLines={1}
                  style={ITEM_INFORMATION_SUB_DESCRIPTION_STYLE}>
                  {getPropertyData.Location}
                </Text>
              </View>
              <View style={ITEM_RATING_CONTAINER_STYLE}>
                <Image style={ITEM_RATING_IMGE_STYLE} source={starImage} />
                <Text style={ITEM_RATING_STYLE}>5.0</Text>
              </View>
            </View>
          </View>
          <Divider width={1} style={DIVIDER} color="#7777771A" />

          {isTablet() && (
            <>
              <View style={GUEST_INFORMATION_TOP_CONTAINER}>
                <View style={GUEST_INFORMATION_MAIN_CONTAINER}>
                  <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>Guests</Text>
                  <Text style={ITEM_TRAVEL_DATE_STYLE}>
                    {guestDetails || '--'}
                  </Text>
                </View>

                <View style={TRAVEL_INFORMATION_MAIN_CONTAINER}>
                  <View style={TRAVEL_INFORMATION_TOP_CONTAINER}>
                    <View style={TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>
                        Travel Date
                      </Text>
                      <Text style={ITEM_TRAVEL_DATE_STYLE}>
                        {`${new Date(
                          getPropertyData.CheckInTime,
                        ).getDate()} ${new Date(
                          getPropertyData.CheckInTime,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                        })}`}
                        {'\t'}- {'\t'}
                        {`${new Date(
                          getPropertyData.CheckOutTime,
                        ).getDate()} ${new Date(
                          getPropertyData.CheckOutTime,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                        })}`}
                      </Text>
                    </View>
                    <Divider
                      width={1}
                      style={VERTICAL_DIVIDER}
                      color="#7777771A"
                    />
                    <View style={TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>
                        Booking ID
                      </Text>
                      <Text style={ITEM_TRAVEL_DATE_STYLE}>
                        {getPropertyData.Id}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={DIVIDER_GUEST_STYLE}>
                <Divider width={1} style={DIVIDER} color="#7777771A" />
              </View>
            </>
          )}

          {!isTablet() && (
            <>
              <View style={GUEST_INFORMATION_MAIN_CONTAINER}>
                <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>Guests</Text>
                <Text style={ITEM_TRAVEL_DATE_STYLE}>
                  {guestDetails || '--'}
                </Text>
              </View>
              <View style={DIVIDER_GUEST_STYLE}>
                <Divider width={1} style={DIVIDER} color="#7777771A" />
              </View>
              <View style={TRAVEL_INFORMATION_MAIN_CONTAINER}>
                <View style={TRAVEL_INFORMATION_TOP_CONTAINER}>
                  <View style={TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>
                      Travel Date
                    </Text>
                    <Text style={ITEM_TRAVEL_DATE_STYLE}>
                      {`${new Date(
                        getPropertyData.CheckInTime,
                      ).getDate()} ${new Date(
                        getPropertyData.CheckInTime,
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                      })}`}
                      {'\t'}- {'\t'}
                      {`${new Date(
                        getPropertyData.CheckOutTime,
                      ).getDate()} ${new Date(
                        getPropertyData.CheckOutTime,
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                      })}`}
                    </Text>
                  </View>
                  <Divider
                    width={1}
                    style={VERTICAL_DIVIDER}
                    color="#7777771A"
                  />
                  <View style={TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <Text style={ITEM_TRAVEL_DATE_HEADER_STYLE}>
                      Booking ID
                    </Text>
                    <Text style={ITEM_TRAVEL_DATE_STYLE}>
                      {getPropertyData.Id}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}

          <View style={CHECKOUT_BTN_CONTAINER}>
            <Button
              title="Check Out"
              titleStyle={CHECKOUT_TITLE}
              containerStyle={CHECKOUT_BTN}
              // type="solid"
              buttonStyle={CHECKOUT_BUTTON_STYLE}
              onPress={props.checkOutPress}
            />

            <View style={RIGHT_BUTTON_CONTAINER}>
              <View style={ICONS_TOP_CONTAINER}>
                <View style={ICONS_CONTAINER}>
                  <TouchableOpacity
                    onPress={() =>
                      props.phonePress(getPropertyData.BookedBy.Phone)
                    }>
                    <Image source={phone} style={ICON} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginStart: '15%'}}
                    onPress={props.chatPress}>
                    <Image source={chat} style={ICON} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
      <>{console.log(item, 'itemData-----------')}</>
      <Item
        title={item.title}
        image={item.image}
        overlay={item.overlay}
        address={item.address}
        description={item.description}
        images={item.images}
        guestDetails={item.guestDetail}
        travelDate={item.travelDate}
        bookingId={item.bookingId}
        getPropertyData={item}
        // favOnPress={() => favorites(item.id)}
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
            containerStyle={SEE_ALL_CONTAINER_STYLE}
          />
        </View>
      )}

      {!props.isLoading && (props.data || []).length > 0 && (
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          layout={'default'}
          data={props.data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          windowSize={1}
          // enableSnap={true}
          // comment below lines to show edge animation
          layoutCardOffset={0}
          // loop={true}
          firstItem={0}
          enableSnap={true}
          activeSlideOffset={20}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment={'center'}
          // scrollEnabled={false}
          // containerCustomStyle={{
          //   overflow: 'visible', // for custom animations
          // }}
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
    </View>
  );
}
export default MyBooking;
