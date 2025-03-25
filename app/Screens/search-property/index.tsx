import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import SearchBarDisabled1 from '../../../.storybook/stories/searchbar/searchbar-disabled1';
import {styles} from './styles';
import PastBookingIntegrate from '../../../.storybook/stories/past-booking-integrate/past-booking-integrate';
import CheckBoxComponent from '../../../.storybook/stories/check-box/check-box';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/themed';
import FilterModal from './filter-modal';
import {isTablet} from 'react-native-device-info';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {navbarTitle} from '../../utils/common/size';

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

const sortOptions = [
  {
    id: 0,
    title: 'Distance',
  },
  {
    id: 1,
    title: 'Price Ascending',
  },
  {
    id: 2,
    title: 'Price Descending',
  },
  {
    id: 3,
    title: 'Rating',
  },
  // {
  //   id: 4,
  //   title: 'Rating High',
  // },
  // {
  //   id: 4,
  //   title: 'Rating Low',
  // },
];

const pastBookings = [
  {
    id: 0,
    propertyImage: pastBookingImg,
    bedroomCount: 2,
    bathroomCount: 3,
    area: 1000,
    perNightCost: '£1578',
    address: '2118 Thornridge Cir. Syracua, AB4 7LE',
  },
  {
    id: 1,
    propertyImage: pastBookingImg1,
    bedroomCount: 2,
    bathroomCount: 3,
    area: 1000,
    perNightCost: '£1578',
    address: '2118 Thornridge Cir. Syracua, AB4 7LE',
  },
  {
    id: 2,
    propertyImage: pastBookingImg2,
    bedroomCount: 2,
    bathroomCount: 3,
    area: 1000,
    perNightCost: '£1578',
    address: '2118 Thornridge Cir. Syracua, AB4 7LE',
  },
  {
    id: 3,
    propertyImage: pastBookingImg3,
    bedroomCount: 2,
    bathroomCount: 3,
    area: 1000,
    perNightCost: '£1578',
    address: '2118 Thornridge Cir. Syracua, AB4 7LE',
  },
  {
    id: 4,
    propertyImage: pastBookingImg,
    bedroomCount: 1,
    bathroomCount: 2,
    area: 500,
    perNightCost: '£1578',
    address: 'Syracua, AB4 7LE',
  },
  {
    id: 5,
    propertyImage: pastBookingImg1,
    bedroomCount: 1,
    bathroomCount: 2,
    area: 2000,
    perNightCost: '£1578',
    address: '2118 Thornridge Cir. ',
  },
];

export default function SearchPropertyScreen({navigation}: {navigation: any}) {
  const scrollViewRef = useRef();
  const [scrollOffset, setScrollOffset] = useState(null);
  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={navbarTitle}>{'Search'}</Text>,
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.navBarFilterButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              style={styles.navbarFilterImage}
              source={require('../../../assets/images/ic_sort_black.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBarSortButton}
            onPress={() => {
              setFilterModalVisible(true);
            }}>
            <Image
              style={styles.navbarSortImage}
              source={require('../../../assets/images/ic_filter_black.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const onPressMyBookingItem = v => {
    console.log('v >', v);
    navigation.navigate('mySavedPropertyDetail');
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <SearchBarDisabled1 onPress={() => navigation.navigate('search')} />
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}>
          <View style={styles.scrollView}>
            {isTablet() && (
              <FlatList
                style={styles.listViewStyle}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={pastBookings}
                numColumns={isTablet() ? 2 : 0}
                scrollEnabled={false}
                renderItem={item => (
                  <PastBookingIntegrate
                    item={item.item}
                    onPress={v => onPressMyBookingItem(v)}
                  />
                )}
              />
            )}

            {!isTablet() && (
              <FlatList
                style={styles.listViewStyle}
                data={pastBookings}
                scrollEnabled={false}
                renderItem={item => (
                  <PastBookingIntegrate
                    item={item.item}
                    onPress={v => onPressMyBookingItem(v)}
                  />
                )}
              />
            )}
          </View>
          <Footer />
        </ScrollView>
      </View>

      <Modal
        isVisible={modalVisible}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.modalView}>
        <View style={styles.modalContainer}>
          <View style={{height: isTablet() ? 90 : 50}}>
            <Divider
              style={styles.modalTopDivider}
              width={isTablet() ? 8 : 5}
              color="#77777750"
            />
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalTextStyle}>Sort By</Text>
            <Divider
              style={styles.modalTextDivider}
              color="black"
              width={isTablet() ? 6 : 3}
            />
          </View>
          <FlatList
            style={{top: isTablet() ? 10 : -16}}
            data={sortOptions}
            renderItem={item => (
              <View style={styles.modalCheckBoxStyle}>
                <CheckBoxComponent
                  wrapperStyle={styles.listWraperStyle}
                  title={item.item.title}
                  checkedTitle={item.item.title}
                  iconRight={true}
                  onPress={() => {
                    console.log(item.item.title);
                  }}
                />
              </View>
            )}
          />
        </View>
      </Modal>
      <Modal
        isVisible={filterModalVisible}
        avoidKeyboard={true}
        onBackdropPress={() => setFilterModalVisible(false)}
        onSwipeComplete={() => setFilterModalVisible(false)}
        swipeDirection={['down']}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        scrollOffsetMax={400 - 300} // content height - ScrollView height
        propagateSwipe={true}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.modalView}>
        <View style={styles.filterModalContainer}>
          <View style={{height: 50}}>
            <Divider
              style={styles.modalTopDivider}
              width={isTablet() ? 8 : 5}
              color="#77777750"
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onScroll={handleOnScroll}
            scrollEventThrottle={16}>
            <FilterModal />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
