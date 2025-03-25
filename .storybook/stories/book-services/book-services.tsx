import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Divider} from '@rneui/base-edge';
import {isTablet} from 'react-native-device-info';
import {Font10, Font12, Font14, Fonts} from '../../../app/utils/common';
// import Ratings from '../ratings/ratings';
import {colors} from '../../../app/theme';
import {
  BUTTON_STYLE2,
  TAG_TEX_STYLE,
  ratingContainer,
} from './book-services.presets';
import {Rating} from 'react-native-ratings';
import Ratings from '../ratings/ratings';

const BookServiceItem = React.memo(({item, onPress}: any) => {
  const starImage = require('../../../assets/images/startpsd.png');

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: '5%',
          width: '50%',
        }}>
        <View>
          <Text
            style={{
              fontFamily: Fonts.SFProRounded.Regular,
              fontSize: isTablet() ? Font10 : Font14,
              color: 'black',
            }}>
            {item.service}
          </Text>
          {item.isAgeMore && (
            <Text
              style={{
                fontFamily: Fonts.SFProRounded.Regular,
                fontSize: isTablet() ? Font10 : Font12,
                color: 'black',
                includeFontPadding: false,
                marginBottom: '3%',
              }}>
              (18+ only, ID required)
            </Text>
          )}
        </View>

        <View
          style={{
            alignItems: 'flex-start',
          }}>
          {/* <Ratings
            type="custom"
            name="complete"
            // ratingImage={starImage}
            ratingColor={colors.secondary}
            startingValue={3}
            readonly={true}
            tintColor="white"
            showReadOnlyText={false}
            showRating={false}
            containerStyle={ratingContainer}
            ratingBackgroundColor="#c8c7c8"
            imageSize={isTablet() ? 20 : 12}
          /> */}
          <View style={ratingContainer}>
            <Rating
              type="custom"
              fractions={1}
              startingValue={5}
              readonly
              ratingImage={starImage}
              // imageSize={40}
              ratingColor={colors.secondary}
              ratingBackgroundColor="#c8c7c8"
              // onFinishRating={ratingCompleted}

              imageSize={isTablet() ? 20 : 12}
            />
          </View>
        </View>
        <Text
          style={{
            fontFamily: Fonts.SFProRounded.SemiBold,
            fontSize: isTablet() ? Font10 : Font14,
            color: colors.secondary,
          }}>
          {'\u00A3'}
          {item.price}
          {'.00'}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingHorizontal: '5%',
          width: '50%',
        }}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={[
            BUTTON_STYLE2,
            {
              backgroundColor: item.added ? colors.secondary : 'white',
              borderWidth: item.added ? 0 : 1,
              borderColor: colors.secondary,
            },
          ]}
          onPress={() => onPress()}>
          <Text
            style={[
              TAG_TEX_STYLE,
              {color: item.added ? 'white' : colors.secondary},
            ]}>
            {item.added ? 'Remove' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const BookServices = ({onTotalPriceChange}: any) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([
    {
      id: 0,
      service: 'Afternoon Tea',
      added: false,
      isAgeMore: false,
      price: '20',
    },
    {
      id: 1,
      service: 'Wild Dining',
      added: false,
      isAgeMore: false,
      price: '45',
    },
    {
      id: 2,
      service: 'Whiskey Experience',
      isAgeMore: true,
      added: false,
      price: '65',
    },
    {
      id: 3,
      service: 'Horse Trekking',
      added: false,
      isAgeMore: false,
      price: '120',
    },
    {
      id: 4,
      service: 'Spa - Beauty & Health',
      added: false,
      isAgeMore: false,
      price: '180',
    },
  ]);

  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice]);

  const toggleAdd = (index: number) => {
    setData(prevData => {
      const newData = prevData.map((item, i) =>
        i === index ? {...item, added: !item.added} : item,
      );
      const newTotalPrice = newData.reduce(
        (acc, item) => (item.added ? acc + parseInt(item.price) : acc),
        0,
      );
      setTotalPrice(newTotalPrice);
      return newData;
    });
  };

  const renderItem = ({item, index}: any) => {
    const onPress = () => toggleAdd(index);

    return <BookServiceItem item={item} onPress={onPress} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Divider color="lightgray" />}
      />
    </View>
  );
};

export default BookServices;
