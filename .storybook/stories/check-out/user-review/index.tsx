import {Text} from '@rneui/themed';
import React from 'react';
import {Image, StyleSheet, View, FlatList} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {
  Font10,
  Font12,
  Font13,
  Font15,
  Font17,
  Font28,
  Font9,
  Fonts,
  getWidth,
  getWidthTab,
} from '../../../../app/utils/common';

export default function UsersReview() {
  const array = [
    {percentage: '100%'},
    {percentage: '63%'},
    {percentage: '43%'},
    {percentage: '23%'},
    {percentage: '9%'},
  ];
  function getColor(index: number) {
    switch (index) {
      case 0:
        return '#76DC99';
      case 1:
        return '#B7EA83';
      case 2:
        return '#F6D757';
      case 3:
        return '#FBB851';
      case 4:
        return '#F17A55';
      default:
        return '#F17A55';
    }
  }

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

  const _renderItem = ({item, index}) => (
    <View style={styles.itemMain}>
      <Text style={styles.itemRatingText}>{getNumber(index)}</Text>
      <View style={styles.itemProgView}>
        <View style={styles.itemProgBar1} />
        <View
          style={[
            styles.itemProgBar2,
            {width: item.percentage, backgroundColor: getColor(index)},
          ]}
        />
      </View>
      <Text style={styles.percentage}>{item.percentage}</Text>
    </View>
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.ratingMainView}>
        <Image
          source={require('../../../../assets/images/startpixel.png')}
          style={styles.imageView}
        />
        <View style={styles.ratingTextView}>
          <Text style={styles.ratingTopTitle1}>4.7</Text>
          <Text style={styles.ratingTopTitle2}>
            Based on the reviewof 543 people
          </Text>
        </View>
      </View>

      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.title}>Customer Review</Text>
          <View style={styles.ratingViewMain}>
            <Text style={styles.ratingViewText}>Rating</Text>
            <View style={styles.arrawContainer}>
              <Image
                source={require('../../../../assets/images/bd_arrow_up.png')}
                style={[styles.ratingViewImage, {tintColor: '#FFA91C'}]}
              />
              <Image
                source={require('../../../../assets/images/bd_arrow_down.png')}
                style={styles.ratingViewImage1}
              />
            </View>
          </View>
          <View style={styles.ratingViewMain1}>
            <Text style={styles.ratingViewText1}>Date</Text>
            <View style={styles.arrawContainer}>
              <Image
                source={require('../../../../assets/images/bd_arrow_up.png')}
                style={styles.ratingViewImage}
              />
              <Image
                source={require('../../../../assets/images/bd_arrow_down.png')}
                style={styles.ratingViewImage1}
              />
            </View>
          </View>
        </View>
        <FlatList scrollEnabled={false} data={array} renderItem={_renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginTop: isTablet() ? getWidthTab(30) : getWidth(20),
    width: '100%',
  },
  ratingMainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: isTablet() ? getWidthTab(57) : getWidth(57),
    width: isTablet() ? getWidthTab(57) : getWidth(57),
  },
  ratingTextView: {
    flex: 1,
    marginHorizontal: isTablet() ? getWidthTab(30) : getWidth(25),
  },
  ratingTopTitle1: {
    fontSize: isTablet() ? Font12 : Font28,
    color: 'black',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '600',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  ratingTopTitle2: {
    fontSize: isTablet() ? Font10 : Font15,
    marginTop: isTablet() ? getWidthTab(3) : getWidth(5),
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  view1: {
    backgroundColor: '#FBFBFB',
    marginTop: isTablet() ? getWidthTab(60) : getWidth(30),
    width: '100%',
    padding: isTablet() ? getWidthTab(30) : getWidth(25),
    borderRadius: isTablet() ? getWidthTab(10) : getWidth(7),
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: isTablet() ? getWidthTab(30) : getWidth(15),
  },
  title: {
    fontSize: isTablet() ? Font12 : Font17,
    flex: 1,
    color: 'black',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '600',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  ratingViewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: isTablet() ? getWidthTab(30) : getWidth(15),
  },
  ratingViewText: {
    marginRight: isTablet() ? getWidthTab(25) : getWidth(10),
    fontSize: isTablet() ? Font10 : Font13,
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  ratingViewImage: {
    height: isTablet() ? getWidth(8) : getWidth(10),
    width: isTablet() ? getWidth(8) : getWidth(10),
    position: 'absolute',
  },
  ratingViewImage1: {
    height: isTablet() ? getWidth(8) : getWidth(10),
    width: isTablet() ? getWidth(8) : getWidth(10),
    position: 'absolute',
    bottom: 0,
  },
  ratingViewMain1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingViewText1: {
    marginRight: isTablet() ? getWidthTab(25) : getWidth(10),
    fontSize: isTablet() ? Font10 : Font13,
    color: '#777777',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '400',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  itemMain: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: getWidth(8),
  },
  arrawContainer: {
    height: isTablet() ? getWidth(13) : getWidth(16),
    width: getWidth(12),
    marginTop: 2,
  },
  itemRatingText: {
    fontSize: isTablet() ? Font9 : Font12,
    width: isTablet() ? getWidthTab(30) : getWidth(15),
    color: 'black',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '300',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  itemProgView: {
    width: '100%',
    flex: 1,
    marginHorizontal: isTablet() ? getWidthTab(15) : getWidth(8),
    justifyContent: 'center',
  },
  itemProgBar1: {
    width: '100%',
    height: isTablet() ? getWidthTab(16) : getWidth(10),
    backgroundColor: '#E4E4E4',
    borderRadius: isTablet() ? getWidthTab(8) : getWidth(4),
  },
  itemProgBar2: {
    position: 'absolute',
    height: isTablet() ? getWidthTab(16) : getWidth(9),
    borderRadius: isTablet() ? getWidthTab(8) : getWidth(4),
  },
  percentage: {
    fontSize: isTablet() ? Font9 : Font12,
    color: 'black',
    fontFamily: Fonts.SFProRounded.Regular,
    fontWeight: '600',
    width: isTablet() ? getWidthTab(50) : getWidth(35),
    textAlign: 'right',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
