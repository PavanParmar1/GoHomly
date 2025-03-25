import {Divider, Text} from '@rneui/themed';
import React from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {isTablet} from 'react-native-device-info';
import Ratings from '../../ratings/ratings';
import {colors} from '../../../../app/theme';
import moment from 'moment';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import EmptyData from '../../../../app/Screens/empty-data';
import Footer from '../../footer-background/footer';
import useSize from '../../../../app/hooks/useSize';
import useOrientation from '../../../../app/hooks/useOrientation';
import userCommentStyles from './styles';

interface userCommentProps {
  data: any;
  isLoading: boolean;
  onRefresh: (filterNumber: any) => void;
  onEndReach: (filterNumber: any) => void;
  refreshing: any;
  filterNumber: any;
  reviewCount: number;
}

export default function UserComments(props: userCommentProps) {
  // const starimage = require('../../../assets/images/star.png');
  const starImage = require('../../../../assets/images/startpsd.png');

  // console.log(props.data, 'ReviewData');
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const {dimensions, orientation} = useOrientation();
  const {
    Font10,
    Font13,
    Font14,
    Font15,
    Font9,
    getWidth,
    getWidthTab,
    Font7,
    Font6,
  } = useSize();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.window.width;

  const styles = userCommentStyles(
    Font10,
    Font13,
    Font14,
    Font15,
    Font9,
    getWidth,
    getWidthTab,
    orientation,
    windowWidth,
    screenWidth,
    Font7,
    Font6,
  );

  const _renderItem = ({item}: any) => (
    <View style={styles.itemMainView}>
      {/* <>{console.log(item, 'item')}</> */}
      <View style={styles.avatrView}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text style={styles.imageTextStyle}>
              {item?.GuestDetail?.Contact?.FullName || 'John Doe'}
            </Text>
            {item?.DateCreatedUtc && (
              <Text style={styles.reviewDate}>
                {moment(item?.DateCreatedUtc || 'NA').format('DD-MM-YYYY')}
              </Text>
            )}
          </View>

          <View style={{alignItems: 'center'}}>
            <Ratings
              type="custom"
              name="complete"
              ratingImage={starImage}
              fractions={2}
              ratingColor={colors.secondary}
              startingValue={item.AvgRating}
              readonly={true}
              tintColor="white"
              showReadOnlyText={false}
              showRating={false}
              containerStyle={styles.ratingContainer}
              ratingBackgroundColor="#c8c7c8"
              imageSize={
                orientation === 'landscape' && screenWidth === windowWidth
                  ? 20
                  : isTablet()
                    ? 25
                    : 12
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.ratingmainView}></View>
      <Text style={styles.comment}>{item.Review}</Text>
    </View>
  );

  const NoItem = () => (
    <>
      <View style={styles.itemMainView}>
        <View style={styles.avatrView}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}>
              <ShimmerPlaceHolder style={styles.shimmer_imageTextStyle} />

              <ShimmerPlaceHolder style={styles.shimmer_reviewDate} />
            </View>

            <View style={{alignItems: 'center'}}>
              <ShimmerPlaceHolder style={styles.shimmer_ratingContainer} />
            </View>
          </View>
        </View>

        <ShimmerPlaceHolder style={styles.shimmer_comment} />
      </View>
    </>
  );

  return (
    <View style={styles.mainView}>
      {/* <>{console.log(props.data, 'props.data')}</> */}

      {props.data.length !== 0 && (
        <FlatList
          scrollEnabled={true}
          data={props.data}
          renderItem={_renderItem}
          onEndReached={() => props.onEndReach(props.filterNumber)}
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={props.refreshing}
              onRefresh={() => props.onRefresh(props.filterNumber)}
            />
          }
          contentContainerStyle={{
            paddingTop: isTablet() ? getWidthTab(5) : getWidth(5),
            paddingBottom: isTablet() ? getWidthTab(100) : getWidth(75),
            paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(20),
          }}
          ListFooterComponent={() => (
            <>
              {props.data.length < props.reviewCount && (
                <ActivityIndicator color={colors.secondary} />
              )}
              <Footer
                isVisible={true}
                style={{backgroundColor: 'white', height: 10}}
              />
            </>
          )}
          ItemSeparatorComponent={() => (
            <Divider color="lightgrey" style={{marginVertical: '3%'}} />
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                height: '100%',
                paddingTop: isTablet() ? '10%' : '20%',
              }}>
              <EmptyData text1="Opps !" text2="No Data Found !" imgType={1} />
            </View>
          )}
        />
      )}

      {!props.isLoading && props.data.length === 0 && (
        <FlatList
          scrollEnabled={false}
          data={props.data}
          renderItem={_renderItem}
          contentContainerStyle={{
            paddingTop: isTablet() ? getWidthTab(5) : getWidth(5),
            paddingBottom: isTablet() ? getWidthTab(100) : getWidth(75),
            paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(20),
          }}
          ItemSeparatorComponent={() => (
            <Divider color="lightgrey" style={{marginVertical: '3%'}} />
          )}
          refreshControl={
            <RefreshControl
              tintColor={colors.secondary}
              colors={[colors.secondary]}
              refreshing={props.refreshing}
              onRefresh={() => props.onRefresh(props.filterNumber)}
            />
          }
          ListEmptyComponent={() => (
            <View
              style={{
                height: '100%',
                paddingTop: isTablet() ? '10%' : '20%',
              }}>
              <EmptyData text1="Opps !" text2="No Data Found !" imgType={1} />
            </View>
          )}
        />
      )}

      {props.isLoading && props.data.length === 0 && (
        <FlatList
          scrollEnabled={false}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={NoItem}
          contentContainerStyle={{
            paddingTop: isTablet() ? getWidthTab(5) : getWidth(5),
            paddingBottom: isTablet() ? getWidthTab(100) : getWidth(75),
            paddingHorizontal: isTablet() ? getWidthTab(40) : getWidth(20),
          }}
          ItemSeparatorComponent={() => (
            <Divider color="lightgrey" style={{marginVertical: '3%'}} />
          )}
        />
      )}
    </View>
  );
}
