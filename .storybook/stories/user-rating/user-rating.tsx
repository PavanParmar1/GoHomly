import {View, Text, FlatList} from 'react-native';
import React from 'react';
import userRatingStyles from './user-rating.preset';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from '@rneui/base';
import {isTablet} from 'react-native-device-info';
import {useSelector} from 'react-redux';
import useSize from '../../../app/hooks/useSize';
import useOrientation from '../../../app/hooks/useOrientation';

const UserRating = () => {
  const userReviews = useSelector(
    (state: any) => state?.Property?.ratingSummary,
  );

  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font12,
    Font13,
    Font15,
    Font22,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
  } = useSize();
  const styles = userRatingStyles(
    Font12,
    Font13,
    Font15,
    Font22,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    orientation,
    Font6,
    Font7,
    Font8,
    windowWidth,
    screenWidth,
  );

  const totalReviewCount =
    userReviews.Rating5Count +
    userReviews.Rating4Count +
    userReviews.Rating3Count +
    userReviews.Rating2Count +
    userReviews.Rating1Count;

  const array = [
    {
      percentage: `${(userReviews.Rating5Count / totalReviewCount) * 100}`,
      count: userReviews.Rating5Count,
    },
    {
      percentage: `${(userReviews.Rating4Count / totalReviewCount) * 100}`,
      count: userReviews.Rating4Count,
    },
    {
      percentage: `${(userReviews.Rating3Count / totalReviewCount) * 100}`,
      count: userReviews.Rating3Count,
    },
    {
      percentage: `${(userReviews.Rating2Count / totalReviewCount) * 100}`,
      count: userReviews.Rating2Count,
    },
    {
      percentage: `${(userReviews.Rating1Count / totalReviewCount) * 100}`,
      count: userReviews.Rating1Count,
    },
  ];

  function getNumber(index: number) {
    switch (index) {
      case 0:
        return '5';
      case 1:
        return '4';
      case 2:
        return '3';
      case 3:
        return '2';
      case 4:
        return '1';
      default:
        return '0';
    }
  }

  const _renderItem = ({item, index}: any) => (
    <View style={styles.itemMain}>
      <Text style={styles.itemRatingText}>{getNumber(index)}</Text>
      <View style={styles.itemProgView}>
        <View style={styles.itemProgBar1} />
        <LinearGradient
          colors={['#4D62C3', '#F24987', '#FFA91C']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.itemProgBar2, {width: `${item.percentage}%`}]}
        />
      </View>
      <Text style={styles.percentage}>{item.count}</Text>
    </View>
  );

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: isTablet() ? 0.3 : 0.45,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.ratingText}>4.5</Text>
            <Image
              style={styles.imageStyle}
              source={require('../../../assets/images/rate_star.png')}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.subText}>{totalReviewCount} Reviews</Text>

          {/*  <View style={{marginTop: isTablet() ? '25%' : '20%'}}>
            <Text style={styles.ratingText}>88%</Text>

            <Text style={styles.subText}>Recommended</Text>
          </View> */}
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          style={{marginLeft: '2%'}}
          scrollEnabled={false}
          data={array}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
};

export default UserRating;
