import React, {useState} from 'react';
import {topPropertiesProps} from './top-properties.props';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';
import {isTablet} from 'react-native-device-info';
import {Divider} from '@rneui/base';
import Footer from '../footer-background/footer';
import {colors} from '../../../app/theme';
import {useDispatch, useSelector} from 'react-redux';
import {Root} from '../../../app/rematch/types/store.types';
import {App as AppImage} from '../../../assets/images/map';
import crashlytics from '@react-native-firebase/crashlytics';
import {Button} from '../button/button';
import {showErrorToast} from '../../../app/utils/common/Toast';
import NewRelic from 'newrelic-react-native-agent';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
import TopPropertiesStyle from './top-properties-v2.presets';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function TopProperties(props: topPropertiesProps) {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font12,
    Font14,
    Font18,
    Font9,
    Font11,
    Font17,
    Font10,
    Font8,
    Font13,
    getWidthTab,
    getWidth,
    getHeight,
  } = useSize();
  const styles = TopPropertiesStyle(
    getWidth,
    getHeight,
    getWidthTab,
    windowWidth,
    Font12,
    Font14,
    Font18,
    Font9,
    Font11,
    Font17,
    Font10,
    Font8,
    Font13,
    orientation,
  );

  const data = props.data;
  const loading = useSelector((state: any) => state.loading);
  const arrProperties = useSelector((state: Root) => state.Search.search);
  const totalCount = useSelector((state: Root) => state.Search.totalCount);
  const dispatch = useDispatch();
  // const [arrUserLikes, setArrUserLikes] = useState<any>(data);

  const [loadingState, setLoadingState] = useState<{[key: number]: boolean}>(
    {},
  );

  const stripHtmlTags = (html: any) => {
    return html
      .replace(/<br\s*\/?>/gi, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ');
  };

  const handleLikePress = (Id: number, FlgFavorite: boolean) => {
    try {
      setLoadingState(prevState => ({
        ...prevState,
        [Id]: true, // Set loading state to true when action is initiated for a specific card
      }));
      if (!FlgFavorite) {
        try {
          dispatch.Property.likeProperty(
            {
              Id: Id,
            },
            (res: any) => {
              if (res.IsSuccess) {
                console.log(res, 'likeRes====');
                setLoadingState(prevState => ({
                  ...prevState,
                  [Id]: false, // Set loading state to false when action is completed for a specific card
                }));
              } else {
                showErrorToast(res.Message);
                setLoadingState(prevState => ({
                  ...prevState,
                  [Id]: false, // Set loading state to false when action is completed for a specific card
                }));
              }
            },
          );
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Search || SearchScreen || fun: handleLikePress || likeProperty',
          );
        }
      } else {
        try {
          dispatch.Property.unlikeProperty(
            {
              Id: Id,
            },
            (res: any) => {
              if (res.IsSuccess) {
                console.log(res, 'unlikeRes====');
                setLoadingState(prevState => ({
                  ...prevState,
                  [Id]: false, // Set loading state to false when action is completed for a specific card
                }));
              } else {
                setLoadingState(prevState => ({
                  ...prevState,
                  [Id]: false, // Set loading state to false when action is completed for a specific card
                }));
                showErrorToast(res.Message);
              }
            },
          );
        } catch (error: any) {
          crashlytics().recordError(error);
          NewRelic.recordError(error);
          crashlytics().log(
            'Search || SearchScreen || fun: handleLikePress || unlikeProperty',
          );
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error);
      NewRelic.recordError(error);
      crashlytics().log('Search || SearchScreen || fun: handleLikePress');
    }
  };

  const Item = ({
    Id,
    PropertyName,
    address,
    image,
    rate,
    liked,
    propertyObject,
  }: {
    Id: any;
    PropertyName: any;
    address: any;
    image: any;
    rate: any;
    liked: any;
    propertyObject: any;
  }) => (
    <TouchableOpacity
      onPress={() => {
        props.onModalPress(propertyObject.Id);
      }}
      accessible={true}
      accessibilityLabel={`${propertyObject.PropertyName}`}
      activeOpacity={0.6}
      style={styles.ITEM_CONTAINER_SOLID}>
      <FastImage
        resizeMode="cover"
        style={styles.ITEM_IMAGE_CONTAINER}
        source={{
          uri: propertyObject.CoverPhotoUrl,
          priority: FastImage.priority.normal,
        }}
        defaultSource={AppImage.LoadingImageWithBGPlaceholder}>
        {loadingState[propertyObject.Id] ? (
          <ActivityIndicator
            style={{
              position: 'absolute',
              right: 0,
              marginEnd: isTablet() ? '3.8%' : '6%',
              marginTop: isTablet() ? '3%' : '6%',
            }}
            color={colors.secondary}
          />
        ) : (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={`like property ${propertyObject.PropertyName}`}
            onPress={() => {
              handleLikePress(propertyObject.Id, propertyObject.FlgFavorite);
            }}
            style={{
              position: 'absolute',
              right: 0,
              marginEnd: isTablet() ? '1%' : '2.5%',
              marginTop: isTablet() ? '1%' : '2.5%',
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'pink',
              width: isTablet() ? getWidthTab(54) : getWidth(48),
              height: isTablet() ? getWidthTab(54) : getWidth(48),
            }}>
            <FastImage
              resizeMode="contain"
              style={styles.HEART_ICON_STYLE}
              source={
                propertyObject.FlgFavorite
                  ? require('../../../assets/images/heart_icon_checked.png')
                  : require('../../../assets/images/heart_icon_unchecked.png')
              }
              defaultSource={AppImage.LoadingImageWithBGPlaceholder}
            />
          </TouchableOpacity>
        )}
      </FastImage>

      <View style={styles.ITEM_INFORMATION_CONTAINER}>
        <View style={styles.ITEM_INFORMATION_INNER_CONTAINER}>
          <Text style={styles.ITEM_INFORMATION_SUB_HEADER_STYLE}>
            {propertyObject.PropertyName}
          </Text>
          {propertyObject && propertyObject.PropertyRating !== 0 && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '25%',
                justifyContent: 'flex-end',
              }}>
              <Image
                resizeMode="contain"
                style={styles.ICON}
                source={require('../../../assets/images/rate_star.png')}
                accessible={true}
                accessibilityLabel="Rate_Star Icon"
              />
              <Text style={styles.RATE_STYLE}>
                {propertyObject?.PropertyRating?.toFixed(1)}
              </Text>
            </View>
          )}
        </View>
        {address && propertyObject.LocationName && (
          <Text
            numberOfLines={orientation === 'landscape' ? 1 : 2}
            style={
              styles.ITEM_INFORMATION_SUB_DESCRIPTION_STYLE
            }>{`${stripHtmlTags(address)}, ${stripHtmlTags(
            propertyObject.LocationName,
          )}`}</Text>
        )}
        {/* <Text>{propertyObject.CoverPhotoUrl}</Text> */}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: '2%',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: 'yellow',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: isTablet() ? getWidthTab(48) : getWidth(48),
              // width: '33%',
              // backgroundColor: 'pink',
            }}
            accessible={true}
            accessibilityLabel={`Property Layout Information of ${propertyObject.PropertyName}`}
            onPress={() => {
              props.onLayoutPress(propertyObject.Id);
            }}>
            <Image
              style={[styles.IMAGE_STYLE, {marginStart: '0%'}]}
              source={require('../../../assets/images/layout.png')}
              resizeMode="contain"
            />
            <Text style={styles.TEXT_STYLE}>Layout</Text>
            <View style={{height: 30, marginStart: '2%'}}>
              <Image
                style={{
                  height: isTablet() ? getHeight(8) : getHeight(15),
                  width: getWidth(10),
                  resizeMode: 'contain',
                  alignContent: 'center',
                }}
                accessible={true}
                accessibilityLabel="Info Icon"
                source={require('../../../assets/images/info.png')}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              // width: '33%',
            }}>
            <Image
              style={[styles.IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgChildrenAllowed
                  ? require('../../../assets/images/child.png')
                  : require('../../../assets/images/children_not_allowed.png')
              }
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="children Icon"
            />
            <Text style={styles.TEXT_STYLE}>Children</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              // width: '33%',
            }}>
            <Image
              style={[styles.IMAGE_STYLE, {marginStart: '0%'}]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/dog_allowed.png')
                  : require('../../../assets/images/no_dogs.png')
              }
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="dog Icon"
            />
            <Text style={styles.TEXT_STYLE}>Dogs</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              // width: '33%',
            }}>
            <Image
              style={[styles.IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgSmokingAllowed
                  ? require('../../../assets/images/smoking_allowed.png')
                  : require('../../../assets/images/no_smoking.png')
              }
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="Smoking Icon"
            />
            <Text style={styles.TEXT_STYLE}>Smoking</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: '2%',
            alignItems: 'center',

            width: '100%',
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '33%',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/pet.png')
                  : require('../../../assets/images/no-pet.png')
              }
              resizeMode="contain"
            />
            <Text style={TEXT_STYLE}>Pets</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '33%',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/disabled.png')
                  : require('../../../assets/images/no_disabled.png')
              }
              resizeMode="contain"
            />
            <Text style={TEXT_STYLE}>Disabled</Text>
          </View> */}

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '33%',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgSmokingAllowed
                  ? require('../../../assets/images/smoking_allowed.png')
                  : require('../../../assets/images/no_smoking.png')
              }
              resizeMode="contain"
            />
            <Text style={TEXT_STYLE}>Smoking</Text>
          </View> */}
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: '4%',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '16%',
            }}
            onPress={() => {
              props.onLayoutPress(propertyObject.Id);
            }}>
            <Image
              style={[IMAGE_STYLE, {marginStart: '0%'}]}
              source={require('../../../assets/images/layout.png')}
              resizeMode="contain"
            />

            <View style={{height: 30, marginStart: '2%'}}>
              <Image
                style={{
                  height: isTablet() ? getHeight(8) : getHeight(15),
                  width: getWidth(10),
                  resizeMode: 'contain',
                  alignContent: 'center',
                }}
                source={require('../../../assets/images/info.png')}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: '16%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgChildrenAllowed
                  ? require('../../../assets/images/child.png')
                  : require('../../../assets/images/children_not_allowed.png')
              }
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              width: '16%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/pet.png')
                  : require('../../../assets/images/no-pet.png')
              }
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              width: '16%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={[IMAGE_STYLE, {marginStart: '0%'}]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/dog_allowed.png')
                  : require('../../../assets/images/no_dogs.png')
              }
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              width: '16%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgPetsAllowed
                  ? require('../../../assets/images/disabled.png')
                  : require('../../../assets/images/disabled.png')
              }
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              width: '16%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={[IMAGE_STYLE]}
              source={
                propertyObject.LodgingFlgSmokingAllowed
                  ? require('../../../assets/images/smoking_allowed.png')
                  : require('../../../assets/images/no_smoking.png')
              }
              resizeMode="contain"
            />
          </View>
        </View> */}

        <Divider
          style={{
            // marginTop: '1%',
            borderColor: 'lightgrey',
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 2.5}}>
            <Button
              accessibilityLabel={` Check Availability for ${propertyObject.PropertyName}`}
              onPress={() => props.OnCheckAvailabilityPress(propertyObject.Id)}
              loading={
                props?.loadingState[propertyObject?.Id] &&
                (loading?.effects?.Search?.propertyDetail ||
                  loading?.effects?.Property?.getPropertyRates)
              }
              titleStyle={styles.BUTTON_FONT_STYLE}
              title={'Check Availability'}
              buttonStyle={{width: '100%', marginHorizontal: '0%'}}
              containerStyle={styles.BUTTON_STYLE}
            />
            {/* <Text style={BUTTON_FONT_STYLE}>{ 'Check Availability'}</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const NoItem = ({}: {title: any; image: any}) => (
    <View
      style={[
        styles.ITEM_CONTAINER_SOLID,
        {borderWidth: 0.5, borderColor: 'lightgray'},
      ]}>
      <View>
        <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_IMAGE_CONTAINER} />
      </View>

      <View style={[styles.ITEM_INFORMATION_CONTAINER]}>
        <View style={styles.ITEM_INFORMATION_INNER_CONTAINER}>
          <ShimmerPlaceHolder
            style={styles.SHIMMER_EFFECT_HEADER_TEXT_CONTAINER}
          />
          <ShimmerPlaceHolder
            style={styles.SHIMMER_EFFECT_HEADER_TEXT_CONTAINER1}
          />
        </View>
        <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TEXT_CONTAINER} />

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: '4%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TAG_CONTAINER} />

          <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TAG_CONTAINER} />

          <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TAG_CONTAINER} />

          <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_TAG_CONTAINER} />
        </View>

        <Divider style={{marginTop: '5%', borderColor: 'lightgrey'}} />

        <ShimmerPlaceHolder style={styles.SHIMMER_EFFECT_BUTTON} />
      </View>
    </View>
  );

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          shadowColor: 'gray', // Shadow color
          shadowOffset: {width: 5.339, height: 5.339}, // Shadow offset
          shadowOpacity: 0.4,
          shadowRadius: isTablet() ? getWidthTab(5) : getWidth(5), // Shadow radius
        }}>
        <Item
          id={item.Id}
          image={item.CoverPhotoUrl}
          overlay={item.overlay}
          address={item.Address}
          apartmentType={item.apartmentType}
          images={item.images}
          rate={item.rate}
          liked={item.liked}
          propertyObject={item}
          onPress={() => item}
        />
      </View>
    );
  };

  const noItemList = () => <NoItem title={''} image={''} />;
  return (
    <View style={styles.CONTAINER_STYLE}>
      {props?.data?.length !== 0 && (
        <FlatList
          horizontal={props.horizontal}
          data={props.data}
          renderItem={renderItem}
          scrollEnabled={true}
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
          ListFooterComponent={() => (
            <>
              {/* <>{console.log(props.isLoading, 'Loading')}</>
              <>{console.log(props.data.length, 'Loading1')}</>
              <>{console.log(props.totalCount, 'Loading2')}</> */}

              {props?.isLoading && props?.data?.length < props.totalCount && (
                <ActivityIndicator color={colors.secondary} />
              )}
              <Footer
                isVisible={true}
                style={{backgroundColor: 'white', height: 100}}
              />
            </>
          )}
        />
      )}

      {!props?.isLoading && props?.data?.length === 0 && (
        <FlatList
          scrollEnabled={true}
          style={{width: '100%'}}
          data={props.data}
          renderItem={renderItem}
          ListEmptyComponent={props?.listEmptyComponent}
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
        />
      )}

      {props?.isLoading && props?.data?.length === 0 && (
        <FlatList
          scrollEnabled={false}
          style={{width: '100%'}}
          data={[1, 2, 3, 4]}
          renderItem={noItemList}
        />
      )}
    </View>
  );
}
export default TopProperties;
