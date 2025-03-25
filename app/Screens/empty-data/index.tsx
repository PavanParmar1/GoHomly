import {Text, Image, StatusBar, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../utils/common';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

interface emptyDataProps {
  imgType: number;
  text1: string;
  text2: string;
}

const images = [
  {img: require('../../../assets/images/empty_item_1.png')},
  {img: require('../../../assets/images/empty_item_2.png')},
  {img: require('../../../assets/images/empty_item_3.png')},
  {img: require('../../../assets/images/NoInternet.png')},
];

const EmptyData = (props: emptyDataProps) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    Font10,
    Font12,
    Font14,
    Font18,
    Font20,
    Font7,
    getWidthTab,
    getWidth,
    getHeight,
  } = useSize();

  const selectedImage = images[props.imgType];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Image
        resizeMode="contain"
        style={{
          height:
            orientation === 'landscape' && windowWidth === screenWidth
              ? getWidthTab(160)
              : isTablet()
                ? getHeight(180)
                : windowWidth < 375
                  ? getHeight(180)
                  : getHeight(220),
          width:
            orientation === 'landscape' && windowWidth === screenWidth
              ? getWidthTab(160)
              : isTablet()
                ? getWidthTab(256)
                : windowWidth < 375
                  ? getWidth(180)
                  : getWidth(220),
        }}
        accessible={true}
        accessibilityLabel="empty Data Img"
        // source={require(`'../../../assets/images/${props.imgType}.png'`)}
        source={selectedImage.img}
      />

      {/* <LottieView
        style={{
          height: isTablet()
            ? getHeight(180)
            : windowWidth < 375
              ? getHeight(180)
              : getHeight(220),
          width: isTablet()
            ? getWidthTab(256)
            : windowWidth < 375
              ? getWidth(180)
              : getWidth(220),
        }}
        source={require('../../../assets/anim/no_data_found.json')}
        autoPlay
        loop
      /> */}

      <Text
        style={{
          fontFamily: Fonts.SFProRounded.Bold,
          fontSize:
            orientation === 'landscape' && windowWidth === screenWidth
              ? Font12
              : isTablet()
                ? Font18
                : Font20,
          includeFontPadding: false,
          color: 'black',
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '0.2%'
              : isTablet()
                ? '4%'
                : windowWidth < 375
                  ? '2%'
                  : '10%',
        }}>
        {props.text1}
      </Text>
      <Text
        style={{
          fontFamily: Fonts.SFProRounded.Regular,
          includeFontPadding: false,
          fontSize:
            orientation === 'landscape' && windowWidth === screenWidth
              ? Font7
              : isTablet()
                ? Font10
                : Font14,
          color: 'black',
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '0%'
              : isTablet()
                ? '2%'
                : windowWidth < 375
                  ? '1%'
                  : '1%',
          textAlign: 'center',
        }}>
        {props.text2}
      </Text>
    </View>
  );
};

export default EmptyData;
