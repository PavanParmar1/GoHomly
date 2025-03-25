import {Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {isTablet} from 'react-native-device-info';
import useSize from '../../../app/hooks/useSize';
import useOrientation from '../../../app/hooks/useOrientation';
import horizontalCardStyles from './horizontal-card.preset';

const HorizontalCard = (props: any) => {
  const [pressedIndex, setPressedIndex] = useState(0);

  const {dimensions, orientation} = useOrientation();
  const {Font14, Font9, getHeight, getWidth, getWidthTab, Font7, Font5} =
    useSize();
  const windowWidth = dimensions.window.width;
  const screenWith = dimensions.screen.width;
  const styles = horizontalCardStyles(
    Font14,
    Font9,
    getHeight,
    getWidth,
    getWidthTab,
    orientation,
    windowWidth,
    screenWith,
    Font7,
    Font5,
  );

  const Data = [
    {text: 'All', starVisible: false, ratingValue: null},
    // {text: 'Recent', starVisible: false, ratingValue: null},
    {text: '5', starVisible: true, ratingValue: 5},
    {text: '4', starVisible: true, ratingValue: 4},
    {text: '3', starVisible: true, ratingValue: 3},
    {text: '2', starVisible: true, ratingValue: 2},
    {text: '1', starVisible: true, ratingValue: 1},
  ];

  const handlePress = (index: number) => {
    setPressedIndex(index);
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      onPress={() => {
        handlePress(index);
        props.onPress(item.ratingValue);
      }}
      style={[
        styles.itemContainer,
        {
          backgroundColor: pressedIndex === index ? 'black' : 'white',
        },
      ]}
      activeOpacity={0.75}>
      <Text
        style={[
          styles.text,
          {color: pressedIndex === index ? 'white' : 'black'},
        ]}>
        {item.text}
      </Text>
      {item.starVisible && (
        <Image
          style={styles.starImage}
          resizeMode="contain"
          source={require('../../../assets/images/star_img.png')}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={{
        paddingHorizontal: isTablet() ? getWidthTab(30) : getWidth(17),
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalCard;
