import React, {ReactElement, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import {
  SHIMMER_CHECKOUT_BTN,
  SHIMMER_GUEST_INFORMATION_MAIN_CONTAINER,
  SHIMMER_ICON,
  SHIMMER_ITEM_ADDRESS_HEADER_STYLE,
  SHIMMER_ITEM_GUEST_INFO_STYLE,
  SHIMMER_ITEM_INFORMATION_SUB_DESCRIPTION_STYLE,
  SHIMMER_ITEM_RATING_IMGE_STYLE,
  SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE,
  SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE_TAB,
  SHIMMER_ITEM_TRAVEL_DATE_STYLE,
  SHIMMER_ITEM_TRAVEL_GUEST_HEADER_STYLE,
} from './my-booking-shimmer.preset';
import {isTablet} from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import {Divider} from '@rneui/themed-edge';
import ImageButton from '../image-button/imagebutton';
import {Button} from '../button/button';
import Footer from '../footer-background/footer';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../app/theme';
import {Root} from '../../../app/rematch/types/store.types';
import {myBookingProperty} from '../../../app/Screens/home_2/homeTypes';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import crashlytics from '@react-native-firebase/crashlytics';
import NewRelic from 'newrelic-react-native-agent';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const starImage = require('../../../assets/images/rate_star.png');
const phone = require('../../../assets/images/phone.png');
const chat = require('../../../assets/images/chat.png');
import {App as AppImage} from '../../../assets/images/map';
import {showErrorToast} from '../../../app/utils/common/Toast';
import myBookingStyle from './my-booking.presets2';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

export interface MyBookingCardProps {
  data: myBookingProperty[];
  phonePress: (value: string) => void;
  messagePress: (value: string) => void;
  onPressItem: (PropertyId: number, Id: number) => void;
  onButtonPress: (
    CheckinStatus?: string,
    id?: number,
    PropertyId?: number,
  ) => void;
  onRefresh: () => void;
  onFetch: () => void;
  refreshing: any;
  listEmptyComponent?: ReactElement<any, any>;
  isFromPastBooking: boolean;
  isLoading?: boolean;
  onBookPress: () => void;
  serviceEnable?: boolean;
  totalCount: number;
  // scrollEnable: boolean;
  // onFavPress: (PropertyId: number) => void;
}

const data = [
  {
    id: 0,
    propertyImage: require('../../../assets/images/home/my-booking/ic_booking_1.png'),
    address: 'Main street, London',
    description: 'London, United Kingdom',
    rating: 5.0,
    guests: '2 Adults, 0 Children, 1 Infants, 1 Pet',
    travelDate: '28 Dec - 29 Dec',
    bookingId: '125436',
    isLiked: true,
  },
];

const MyBookingCard = (props: MyBookingCardProps) => {
  const heartFill = require('../../../assets/images/home/my-booking/ic_fav_filled.png');
  const heart = require('../../../assets/images/home/my-booking/ic_fav.png');

  const dispatch = useDispatch();

  const {dimensions, orientation} = useOrientation();
  const {
    Font7,
    Font12,
    Font14,
    Font16,
    Font18,
    getWidth,
    getWidthTab,
    Font9,
    Font11,
    Font8,
    Font10,
    Font15,
    getHeight,
  } = useSize();

  const styles = myBookingStyle(
    orientation,
    Font7,
    Font12,
    Font14,
    Font16,
    Font18,
    dimensions.window.width,
    getWidth,
    getWidthTab,
    Font9,
    Font11,
    Font8,
    Font10,
    Font15,
    getHeight,
    dimensions.screen.width,
  );

  const firebaseVariables = useSelector((state: any) => state.Auth.variables);
  const firebasePhaseVariables = useSelector(
    (state: any) => state.Auth.phaseVariables,
  );

  const [loadingState, setLoadingState] = useState<{[key: number]: boolean}>(
    {},
  );

  const [likedBookings, setLikedBookings] = useState<object>({
    isliked: true,
    propertyID: null,
  });

  const handleLikePress = (propertyId: number, FlgFavorite: boolean) => {
    try {
      setLoadingState(prevState => ({
        ...prevState,
        [propertyId]: true, // Set loading state to true when action is initiated for a specific card
      }));
      if (!FlgFavorite) {
        try {
          dispatch.Property.likeProperty(
            {
              Id: propertyId,
            },
            (res: any) => {
              if (res.IsSuccess) {
                console.log(res, 'likeRes====');
                setLoadingState(prevState => ({
                  ...prevState,
                  [propertyId]: false, // Set loading state to false when action is completed for a specific card
                }));
              } else {
                setLoadingState(prevState => ({
                  ...prevState,
                  [propertyId]: false, // Set loading state to false when action is completed for a specific card
                }));
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          console.log('if catch Called');
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Home || MyBookingCard || fun: handleLikePress');
        }
      } else {
        try {
          dispatch.Property.unlikeProperty(
            {
              Id: propertyId,
            },
            (res: any) => {
              if (res.IsSuccess) {
                console.log(res, 'unlikeRes====');
                setLoadingState(prevState => ({
                  ...prevState,
                  [propertyId]: false, // Set loading state to false when action is completed for a specific card
                }));
              } else {
                setLoadingState(prevState => ({
                  ...prevState,
                  [propertyId]: false, // Set loading state to false when action is completed for a specific card
                }));
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          console.log('else catch Called');
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log('Home || MyBookingCard || fun: handleLikePress');
        }
      }
    } catch (error: any) {
      console.log('catch Called');
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Home || MyBookingCard || fun: handleLikePress');
    }
  };

  const loading = useSelector((state: Root) => state.loading);
  const guestPropertyDetail = useSelector(
    (state: Root) => state.Property.guestProperty,
  );

  const totalCount = useSelector((state: Root) => state.Property.totalCount);
  const guestPastPropertyDetail = useSelector(
    (state: Root) => state.Property.PastBookingProperty,
  );

  const totalPastCount = useSelector(
    (state: Root) => state.Property.totalPastBookingCount,
  );

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={item.PropertyName}
      onPress={() => props.onPressItem(item.PropertyId, item.Id)}
      activeOpacity={0.75}
      style={styles.ITEM_CONTAINER_SOLID}>
      {loadingState[item.PropertyId] ? (
        <ActivityIndicator
          style={styles.LIKE_HEART_ICON_CONTAINER}
          color={colors.secondary}
        />
      ) : (
        <>
          <ImageButton
            source={item.FlgFavorite ? heartFill : heart}
            onPress={() => handleLikePress(item.PropertyId, item.FlgFavorite)}
            style={styles.LIKE_HEART_ICON}
            containerStyle={styles.LIKE_HEART_ICON_CONTAINER}
            accessible={true}
            accessibilityLabel={`like the property ${item.PropertyName}`}
          />
        </>
      )}

      <FastImage
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          ...styles.ITEM_IMAGE_CONTAINER,
        }}
        source={
          item
            ? {uri: item.ObjSysMediaFile[0]?.AWSS3FilePath}
            : require('../../../assets/images/home/my-booking/ic_booking_1.png')
        }
        defaultSource={AppImage.LoadingImageWithBGPlaceholder}
      />
      <View style={styles.ITEM_INFORMATION_CONTAINER}>
        <View style={styles.ITEM_INFORMATION_SUB_CONTAINER}>
          <View style={styles.ITEM_INFORMATION_MAIN_CONTAINER}>
            <View style={styles.ITEM_INFORMATION_TOP_CONTAINER}>
              <View style={styles.ITEM_INFORMATION_TITLE_CONTAINER}>
                <Text style={styles.ITEM_ADDRESS_HEADER_STYLE}>
                  {firebaseVariables?.debug_mode
                    ? 'Hapa' +
                      ' # ' +
                      item.PropertyId +
                      '  ' +
                      item.PropertyName
                    : item.PropertyName}
                </Text>
                {/* <Text>{item.ObjSysMediaFile[0]?.AWSS3FilePath}</Text> */}
                <Text
                  numberOfLines={orientation === 'landscape' ? 1 : 2}
                  style={styles.ITEM_INFORMATION_SUB_DESCRIPTION_STYLE}>
                  {item.Location}
                </Text>
              </View>
              {item?.PropertyRating && (
                <View style={styles.ITEM_RATING_CONTAINER_STYLE}>
                  <Image
                    resizeMode="contain"
                    style={styles.ITEM_RATING_IMGE_STYLE}
                    source={starImage}
                    accessible={true}
                    accessibilityLabel="Star Icon"
                  />
                  <Text style={styles.ITEM_RATING_STYLE}>
                    {item?.PropertyRating?.toFixed(1)}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.DIVIDER_GUEST_STYLE}>
            <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
          </View>

          {isTablet() ? (
            <>
              <View style={styles.GUEST_INFORMATION_TOP_CONTAINER}>
                <View style={styles.GUEST_INFORMATION_MAIN_CONTAINER}>
                  <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                    Guests
                  </Text>
                  <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                    {item.AdultsCount === 0
                      ? ''
                      : item.AdultsCount + ' Adults ,'}
                    {item.KidsCount === 0 ? '' : item.KidsCount + ' Children,'}
                    <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                      {item.FlgPetsAllowed
                        ? ' Pets Allowed'
                        : ' Pets Not Allowed'}
                    </Text>
                  </Text>
                </View>

                <View
                  style={[
                    styles.DIVIDER_GUEST_STYLE,
                    {marginTop: isTablet() ? getWidthTab(0) : getWidth(0)},
                  ]}>
                  <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
                </View>

                <View style={styles.TRAVEL_INFORMATION_MAIN_CONTAINER}>
                  <View style={styles.TRAVEL_INFORMATION_TOP_CONTAINER}>
                    <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                        Travel Date
                      </Text>
                      <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                        {`${new Date(item.DateFrom).getDate()} ${new Date(
                          item.DateFrom,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                        })}`}
                        {'  '}-{'  '}
                        {`${new Date(item.DateTo).getDate()} ${new Date(
                          item.DateTo,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                        })}`}
                      </Text>
                    </View>
                    <Divider
                      width={1.5}
                      style={styles.VERTICAL_DIVIDER}
                      color="#7777771A"
                    />
                    <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                        Booking ID
                      </Text>
                      <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                        {item.BookingRef}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <View
                style={[
                  styles.GUEST_INFORMATION_MAIN_CONTAINER,
                  {marginTop: '1%'},
                ]}>
                <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>Guests</Text>
                <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                  <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                    {item.AdultsCount === 0
                      ? ''
                      : item.AdultsCount + ' Adults ,'}
                    {item.KidsCount === 0 ? '' : item.KidsCount + ' Children,'}
                    <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                      {item.FlgPetsAllowed
                        ? ' Pets Allowed'
                        : ' Pets Not Allowed'}
                    </Text>
                  </Text>
                </Text>
              </View>
              <View
                style={[
                  styles.DIVIDER_GUEST_STYLE,
                  {marginTop: isTablet() ? getWidthTab(4) : getWidth(0)},
                ]}>
                <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
              </View>
              <View style={styles.TRAVEL_INFORMATION_MAIN_CONTAINER}>
                <View style={styles.TRAVEL_INFORMATION_TOP_CONTAINER}>
                  <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                      Travel Date
                    </Text>
                    <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                      {`${new Date(item.DateFrom).getDate()} ${new Date(
                        item.DateFrom,
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                      })}`}
                      {'  '}-{'  '}
                      {`${new Date(item.DateTo).getDate()} ${new Date(
                        item.DateTo,
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                      })}`}
                    </Text>
                  </View>
                  <Divider
                    width={1}
                    style={styles.VERTICAL_DIVIDER}
                    color="#7777771A"
                  />
                  <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                      Booking ID
                    </Text>
                    <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                      {item.BookingRef}
                    </Text>
                  </View>
                  <Divider
                    width={1}
                    style={styles.VERTICAL_DIVIDER}
                    color="#7777771A"
                  />
                  <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <Text style={styles.ITEM_TRAVEL_DATE_HEADER_STYLE}>
                      Booking ID
                    </Text>
                    <Text style={styles.ITEM_TRAVEL_DATE_STYLE}>
                      {item.BookingRef}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}

          <View style={styles.CHECKOUT_BTN_CONTAINER}>
            <Button
              accessibilityLabel={`Property Check-In ${item.PropertyName}`}
              title={
                // item.CheckinStatus === 'Pending' ? 'Check In' : 'Check Out'
                'Property Check-In'
              }
              disabled={props.isFromPastBooking ? true : false}
              disabledStyle={styles.CHECKOUT_BUTTON_STYLE}
              disabledTitleStyle={styles.CHECKOUT_TITLE}
              onPress={() => {
                props.onButtonPress(
                  // item.CheckinStatus,
                  item.Id,
                  item.PropertyId,
                );
                dispatch.Property.setSelectedGuestProperty(item);
              }}
              titleStyle={styles.CHECKOUT_TITLE}
              containerStyle={styles.CHECKOUT_BTN}
              buttonStyle={styles.CHECKOUT_BUTTON_STYLE}
            />

            <View style={styles.RIGHT_BUTTON_CONTAINER}>
              <View style={styles.ICONS_TOP_CONTAINER}>
                <View style={styles.ICONS_CONTAINER}>
                  <TouchableOpacity
                    onPress={() => props.phonePress(item.ObjOwner.PhoneNo)}
                    style={{
                      // backgroundColor: 'pink',
                      height: isTablet() ? getWidthTab(48) : getWidth(48),
                      justifyContent: 'center',
                    }}
                    accessible={true}
                    accessibilityLabel={`call Propety Manager for ${item.PropertyName}`}>
                    <Image source={phone} style={styles.ICON} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.messagePress(item.ObjOwner.PhoneNo)}
                    style={{
                      marginStart: isTablet() ? '8%' : '12%',
                      justifyContent: 'center',
                      // backgroundColor: 'pink',
                      height: isTablet() ? getWidthTab(48) : getWidth(48),
                    }}
                    accessible={true}
                    accessibilityLabel={`Chat with Property Manager ${item.PropertyName}`}>
                    <Image source={chat} style={styles.ICON} />
                  </TouchableOpacity>

                  {firebasePhaseVariables?.book_services &&
                    props?.serviceEnable && (
                      <TouchableOpacity
                        onPress={() => props.onBookPress()}
                        style={{marginStart: isTablet() ? '8%' : '12%'}}>
                        <Image
                          source={require('../../../assets/images/book_activity.png')}
                          style={[styles.ICON, {height: 35, width: 35}]}
                          accessible={true}
                          accessibilityLabel="Book Activity"
                        />
                      </TouchableOpacity>
                    )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const NoItem = ({}: {title: any; image: any}) => (
    <View style={styles.ITEM_CONTAINER_SOLID}>
      <ShimmerPlaceHolder
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          ...styles.ITEM_IMAGE_CONTAINER,
        }}
      />

      <View style={styles.ITEM_INFORMATION_CONTAINER}>
        <View style={styles.ITEM_INFORMATION_SUB_CONTAINER}>
          <View style={styles.ITEM_INFORMATION_MAIN_CONTAINER}>
            <View style={styles.ITEM_INFORMATION_TOP_CONTAINER}>
              <View style={styles.ITEM_INFORMATION_TITLE_CONTAINER}>
                <ShimmerPlaceHolder style={SHIMMER_ITEM_ADDRESS_HEADER_STYLE} />

                <ShimmerPlaceHolder
                  style={SHIMMER_ITEM_INFORMATION_SUB_DESCRIPTION_STYLE}
                />
              </View>
              <ShimmerPlaceHolder style={SHIMMER_ITEM_RATING_IMGE_STYLE} />
            </View>
          </View>

          <View style={styles.DIVIDER_GUEST_STYLE}>
            <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
          </View>

          {isTablet() ? (
            <>
              <View style={styles.GUEST_INFORMATION_TOP_CONTAINER}>
                <View style={SHIMMER_GUEST_INFORMATION_MAIN_CONTAINER}>
                  <ShimmerPlaceHolder
                    style={SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE_TAB}
                  />
                  <ShimmerPlaceHolder style={SHIMMER_ITEM_GUEST_INFO_STYLE} />
                </View>

                <View
                  style={[
                    styles.DIVIDER_GUEST_STYLE,
                    {marginTop: isTablet() ? getWidthTab(0) : getWidth(0)},
                  ]}>
                  <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
                </View>

                <View style={styles.TRAVEL_INFORMATION_MAIN_CONTAINER}>
                  <View style={styles.TRAVEL_INFORMATION_TOP_CONTAINER}>
                    <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <ShimmerPlaceHolder
                        style={SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE_TAB}
                      />

                      <ShimmerPlaceHolder
                        style={SHIMMER_ITEM_TRAVEL_DATE_STYLE}
                      />
                    </View>
                    <Divider
                      width={1}
                      style={styles.VERTICAL_DIVIDER}
                      color="#7777771A"
                    />

                    <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                      <ShimmerPlaceHolder
                        style={SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE_TAB}
                      />

                      <ShimmerPlaceHolder
                        style={SHIMMER_ITEM_TRAVEL_DATE_STYLE}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <View
                style={[
                  SHIMMER_GUEST_INFORMATION_MAIN_CONTAINER,
                  {marginTop: '1%'},
                ]}>
                <ShimmerPlaceHolder
                  style={SHIMMER_ITEM_TRAVEL_GUEST_HEADER_STYLE}
                />
                <ShimmerPlaceHolder style={SHIMMER_ITEM_GUEST_INFO_STYLE} />
              </View>

              <View
                style={[
                  styles.DIVIDER_GUEST_STYLE,
                  {marginTop: isTablet() ? getWidthTab(4) : getWidth(0)},
                ]}>
                <Divider width={1} style={styles.DIVIDER} color="#7777771A" />
              </View>

              <View style={styles.TRAVEL_INFORMATION_MAIN_CONTAINER}>
                <View style={styles.TRAVEL_INFORMATION_TOP_CONTAINER}>
                  <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <ShimmerPlaceHolder
                      style={SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE}
                    />

                    <ShimmerPlaceHolder
                      style={SHIMMER_ITEM_TRAVEL_DATE_STYLE}
                    />
                  </View>
                  <Divider
                    width={1}
                    style={styles.VERTICAL_DIVIDER}
                    color="#7777771A"
                  />

                  <View style={styles.TRAVEL_INFORMATION_TITLE_CONTAINER}>
                    <ShimmerPlaceHolder
                      style={SHIMMER_ITEM_TRAVEL_DATE_HEADER_STYLE}
                    />

                    <ShimmerPlaceHolder
                      style={SHIMMER_ITEM_TRAVEL_DATE_STYLE}
                    />
                  </View>
                </View>
              </View>
            </>
          )}

          <View style={styles.CHECKOUT_BTN_CONTAINER}>
            <ShimmerPlaceHolder style={SHIMMER_CHECKOUT_BTN} />

            <View style={styles.RIGHT_BUTTON_CONTAINER}>
              <View style={styles.ICONS_TOP_CONTAINER}>
                <View style={styles.ICONS_CONTAINER}>
                  <ShimmerPlaceHolder style={SHIMMER_ICON} />

                  <ShimmerPlaceHolder
                    style={[
                      SHIMMER_ICON,
                      {marginStart: isTablet() ? '8%' : '12%'},
                    ]}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const noItemList = () => <NoItem title={''} image={''} />;

  return (
    <>
      {props.data?.length !== 0 && (
        <FlatList
          data={props.data}
          ListEmptyComponent={props?.listEmptyComponent}
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          onEndReached={props.onFetch}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <>
              {props.isLoading && props.data?.length < props.totalCount && (
                <ActivityIndicator color={colors.secondary} />
              )}

              <Footer
                isVisible={true}
                style={{
                  backgroundColor: 'white',
                  height:
                    props.isLoading && props.data?.length < props.totalCount
                      ? 100
                      : 80,
                }}
              />
            </>
          )}
        />
      )}

      {!props.isLoading && props.data?.length === 0 && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          data={props.data}
          ListEmptyComponent={props?.listEmptyComponent}
          renderItem={renderItem}
        />
      )}

      {props.isLoading && props.data?.length === 0 && (
        <FlatList
          style={{width: '100%'}}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={[1, 2, 3, 4]}
          renderItem={noItemList}
        />
      )}
    </>
  );
};

export default MyBookingCard;
