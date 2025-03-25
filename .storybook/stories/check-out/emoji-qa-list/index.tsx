import {Text} from '@rneui/themed';
import React, {useEffect} from 'react';
const {forwardRef, useRef, useImperativeHandle} = React;
import {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../../app/theme';
import {Rating} from 'react-native-ratings';
import useOrientation from '../../../../app/hooks/useOrientation';
import emojiStyles from './styles';
import useSize from '../../../../app/hooks/useSize';

interface EmojiList {
  data: any[];
  setPayload: (payload: any) => void;
}

let _arrRatings: any = [];
const starImage = require('../../../../assets/images/startpsd.png');

const EmojiList = forwardRef((props, ref) => {
  const array = [
    {
      Question:
        'How would you rate the cleanliness of the guest house during your stay?',
      Id: 3,
    },
    {
      Question:
        'Was the guest house accurately represented in its listing description and photos?',
      Id: 4,
    },
    {
      Question:
        'How satisfied were you with the amenities provided at the guest house?',
      Id: 1,
    },
  ];
  const [arrRatings, setArrRatings] = useState<any>(() =>
    props.data.map((item, index) => ({...item, Rating: 5})),
  );

  useEffect(() => {
    _arrRatings = arrRatings;
  }, []);

  const onFinishedRating = (val: any, id: number) => {
    const result = _arrRatings.map((item: any) => {
      if (item.Id === id) {
        return {...item, Rating: val};
      } else {
        return item;
      }
    });
    _arrRatings = result;
    setArrRatings([..._arrRatings]);
  };

  useImperativeHandle(ref, () => ({
    getSubmittedRatigs() {
      return _arrRatings;
    },
  }));

  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={arrRatings}
        extraData={arrRatings}
        renderItem={item => (
          <RatingItem
            item={item}
            onFinishedRating={(val, id) => onFinishedRating(val, id)}
          />
        )}
        scrollEnabled={false}
      />
    </View>
  );
});

export default EmojiList;

function RatingItem({item, onFinishedRating}: props) {
  const {dimensions, orientation} = useOrientation();
  const screenWidth = dimensions.screen.width;
  const windowWidth = dimensions.window.width;

  const {
    Font11,
    Font12,
    Font18,
    Font16,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
    Font10,
    Font14,
    Font9,
  } = useSize();
  const styles = emojiStyles(
    Font10,
    Font12,
    Font14,
    Font9,
    getWidth,
    getWidthTab,
    Font6,
    Font7,
    Font8,
    orientation,
    screenWidth,
    windowWidth,
  );

  return (
    <View style={styles.renderItemMain}>
      <View style={styles.itemQuesView}>
        {/* <View style={styles.itemDot} /> */}
        <Text style={styles.itemQuestion}>{item.item?.Question}</Text>
      </View>

      <View style={styles.itemEmoji}>
        <Rating
          type="custom"
          fractions={0}
          startingValue={item.item.Rating}
          ratingImage={starImage}
          ratingColor={colors.secondary}
          tintColor="white"
          ratingBackgroundColor="#c8c7c8"
          onFinishRating={(val: number) => onFinishedRating(val, item.item.Id)}
          imageSize={
            orientation === 'landscape' && screenWidth === windowWidth
              ? 30
              : isTablet()
                ? 33
                : 23
          }
        />
      </View>
    </View>
  );
}
