import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';

import PastBookingIntegrate from '../../../../.storybook/stories/past-booking-integrate/past-booking-integrate';
import {App} from '../../../../assets/images/map';
import {
  navbarTitle,
  navbarHeader,
  navbarImage,
  outerContainer,
  container,
} from './styles';

import Footer from '../../../../.storybook/stories/footer-background/footer';
import {isTablet} from 'react-native-device-info';

export default function SeeAllScreen({route, navigation}: {navigation: any}) {
  const {title} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{title}</Text>,
      headerShadowVisible: false,
    });
  }, [navigation, title]);

  const pastBookingImg = {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/pastBooking.png',
  };
  const pastBookingImg1 = {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking1.png',
  };
  const pastBookingImg2 = {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking2.png',
  };
  const pastBookingImg3 = {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking3.png',
  };
  const pastBookings = [
    {
      id: 0,
      propertyImage: pastBookingImg,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: false,
    },
    {
      id: 1,
      propertyImage: pastBookingImg1,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: true,
    },
    {
      id: 2,
      propertyImage: pastBookingImg2,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: false,
    },
    {
      id: 3,
      propertyImage: pastBookingImg3,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: false,
    },
    {
      id: 4,
      propertyImage: pastBookingImg,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: false,
    },
    {
      id: 5,
      propertyImage: pastBookingImg1,
      bedroomCount: 2,
      bathroomCount: 3,
      area: 1000,
      perNightCost: '£1578',
      address: '2118 Thornridge Cir. Syracua, AB4 7LE',
      isLiked: false,
    },
  ];
  const onPressMyBookingItem = v => {
    console.log('v >', v);
    navigation.push('propertydetails', {isbookigDetails: true});
  };

  const [data, setData] = useState(pastBookings);

  function favourite(element: any) {
    let newArray = data.map(el =>
      el.id === element.id ? {...el, isLiked: !element.isLiked} : el,
    );
    // console.log(newArray);
    setData(newArray);
  }
  return (
    <View style={outerContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={container}>
          <FlatList
            data={data}
            numColumns={isTablet() ? 2 : 1}
            renderItem={item => (
              <PastBookingIntegrate
                item={item.item}
                onPress={v => onPressMyBookingItem(v)}
                onFavPress={() => favourite(item.item)}
              />
            )}
            scrollEnabled={false}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
