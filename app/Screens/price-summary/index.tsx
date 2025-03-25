import React from 'react';
import {App} from '../../../assets/images/map';

import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  getWidth,
  getWidthTab,
  navbarHeader,
  navbarImage,
  navbarTitle,
} from '../../utils/common/size';
import {
  BUTTON_CONTAINER,
  BUTTON_FONT_STYLE,
  BUTTON_STYLE,
  FLATLIST_CONTAINER,
  HEADER_DES_TEXT_STYLE,
  HEADER_TEXT_STYLE,
  INNER_CONTAINER_STYLE,
  PRICE_TEXT_STYLE,
  SERVICES_TEXT_STYLE,
  SERVICES_TOTAL_STYLE,
  TOTAL_PRICE_TEXT_STYLE,
  mainContainer,
  rowContainer,
  scrollview,
  totalInnerConatiner,
} from './styles';
import {useRoute} from '@react-navigation/native';
import ServiceItem from './ServiceItem';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../.storybook/stories/button/button';
import RefundPolicy from '../../../.storybook/stories/refund-policy/refund-policy';
import {useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';

export default function PriceSummary({navigation}: any) {
  const objPropertyDetails = useSelector(
    (state: Root) => state.Search.property,
  );

  const route: any = useRoute();

  const priceSummary = route?.params?.priceSummary;
  const payload = route?.params?.payload;
  // console.log(priceSummary, 'priceSummary');

  const priceFormater = (price: any) => {
    return `£${parseFloat(price).toFixed(2)}`;
  };

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
      headerTitle: () => <Text style={navbarTitle}>{'Proceed to Book'}</Text>,

      headerShadowVisible: true,
    });
  }, [navigation]);

  const renderItem = ({item}: any) => {
    return (
      <ServiceItem
        item={item}
        removeOnPress={() => {
          console.log('clicked');
        }}
      />
    );
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={mainContainer}>
        <ScrollView contentContainerStyle={scrollview}>
          <View style={INNER_CONTAINER_STYLE}>
            <Text style={HEADER_TEXT_STYLE}>
              {`${objPropertyDetails?.PropertyNamePublic} ` || 'NA'}
            </Text>
            <Text style={HEADER_DES_TEXT_STYLE}>
              {`${priceSummary.Nights} Nights, ${payload.noOfOccupants} Persons`}
            </Text>

            <View style={[FLATLIST_CONTAINER]}>
              <FlatList
                scrollEnabled={false}
                keyExtractor={(item: any) => item.Id.toString()}
                data={priceSummary.ObjServices}
                renderItem={renderItem}
              />
            </View>
          </View>

          <View style={{marginTop: isTablet() ? getWidthTab(12) : getWidth(9)}}>
            {/* <Divider color="black" /> */}

            <View style={totalInnerConatiner}>
              <Text style={SERVICES_TOTAL_STYLE}>Services Total</Text>
              <Text style={TOTAL_PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.ServicesTotal)}
              </Text>
            </View>

            {/* <Divider color="black" /> */}
          </View>

          <View
            style={{
              paddingHorizontal: isTablet() ? '4%' : getWidth(16),
            }}>
            <View style={rowContainer}>
              <Text style={SERVICES_TEXT_STYLE}>Rent</Text>
              <Text style={PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.Rent)}
              </Text>
            </View>

            <View style={rowContainer}>
              <Text style={SERVICES_TEXT_STYLE}>Taxes</Text>
              <Text style={PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.Taxes)}
              </Text>
            </View>
            <View style={rowContainer}>
              <Text style={SERVICES_TEXT_STYLE}>Discounts</Text>
              <Text style={PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.Discounts)}
              </Text>
            </View>

            <View style={rowContainer}>
              <Text style={SERVICES_TEXT_STYLE}>SubTotal</Text>
              <Text style={PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.SubTotal)}
              </Text>
            </View>
          </View>

          <View style={{marginTop: isTablet() ? getWidthTab(4) : getWidth(4)}}>
            {/* <Divider color="black" /> */}
            <View style={totalInnerConatiner}>
              <Text style={SERVICES_TOTAL_STYLE}>GrandTotal</Text>
              <Text style={TOTAL_PRICE_TEXT_STYLE}>
                {priceFormater(priceSummary?.GrandTotal)}
              </Text>
            </View>
            {/* <Divider color="black" /> */}
          </View>

          <RefundPolicy data={objPropertyDetails?.ObjPrCancellationPolicy} />
        </ScrollView>

        <View style={BUTTON_CONTAINER}>
          <Button
            accessibilityLabel="payment"
            onPress={() => {
              navigation.navigate('Payment');
            }}
            type="solid"
            loading={false}
            containerStyle={{
              borderRadius: isTablet() ? getWidth(12) : getWidth(10),
            }}
            buttonStyle={BUTTON_STYLE}
            titleStyle={BUTTON_FONT_STYLE}
            title={'Continue to pay'}
          />
        </View>
      </View>
    </>
  );
}
