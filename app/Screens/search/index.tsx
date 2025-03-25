import React, {useState, useRef} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  // TouchableWithoutFeedback,
} from 'react-native';
import RecentSearches from '../../../.storybook/stories/recent-searches/recent-searches';
import SearchBarEnabled from '../../../.storybook/stories/searchbar/searchbar-enabled';
import NearbyProperties from '../../../.storybook/stories/nearby-properties/nearby-properties';
import FilterModal from '../search-property/filter-modal';
// import CheckBoxComponent from '../../components/check-box/check-box';
import {
  navbarContainer,
  searchBar,
  wrapper,
  bgImage,
  navbarContainerImageRight,
  navbarContainerOfRightSideImages,
  modalView,
  modalTextStyle,
  modalTextDivider,
  screenTitle,
  flatlistView,
  SortingText,
  SortingBack,
  SortingImage,
  modalCheckBoxStyle,
  modalTopDivider,
  modalContainer,
  modalTextContainer,
  filterModalContainer,
  Suggestion,
  Something,
  Listening,
  SearchCircle,
  CancelButton,
  SearchDialog,
  TextSearched,
  GIFImage,
  VisibleView,
} from './styles';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/themed';
import Footer from '../../../.storybook/stories/footer-background/footer';
import {isTablet} from 'react-native-device-info';
import ImageButton from '../../../.storybook/stories/image-button/imagebutton';
import {colors} from '../../theme';

let searchVal = '';

const sortOptions = [
  {
    id: 0,
    title: 'Nearest',
    isLiked: true,
  },
  {
    id: 1,
    title: 'Newest First',
    isLiked: false,
  },
  {
    id: 2,
    title: 'Price High to Low',
    isLiked: false,
  },
  {
    id: 3,
    title: 'Price Low to High',
    isLiked: false,
  },
  {
    id: 4,
    title: 'Popular',
    isLiked: false,
  },
];
const listen = 'Listening...';
export default function SearchScreen({navigation}: {navigation: any}) {
  const [isSelectedText, setSelectedText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchedText, setSearchedText] = useState('');
  const [title, setTitle] = useState(listen);
  const [searchButton, setSearchButton] = useState<boolean>(false);
  const childRef = useRef();

  const defaultProps = [
    {
      id: 1,
      location: '23street',
      city: 'London',
    },
    {
      id: 2,
      location: 'Gladstone Street',
      city: 'Liverpool',
    },
    // {
    //   id: 3,
    //   location: '23street',
    //   city: 'London',
    // },
    // {
    //   id: 4,
    //   location: '23street',
    //   city: 'Wells',
    // },
  ];
  const propertyData = [
    {
      id: 1,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking1.png',
      },
      // require('../../../assets/images/property.png'),
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 2,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking2.png',
      },
      // imagePath: require('../../../assets/images/pastBooking.png'),
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 3,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking3.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 4,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking4.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 5,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking1.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 6,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking2.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 7,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking3.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 8,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking4.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
    {
      id: 9,
      imagePath: {
        uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/booking1.png',
      },
      address: '2118 Thornridge Cir. Syracua, Kensington, AB41 7LE',
      apartmentType: 'Entire Studio Apartment',
      owner: 'Mercedes Vito',
      description: '1 bedroom | 2 bathroom',
    },
  ];

  function speechEnd(text: string) {
    console.log(' speechEnd: ', text);
    setSearchButton(false);
    setTimeout(() => {
      setSearchModalVisible(false);
      setSearchedText('');
      setTimeout(() => {
        navigation.push('bookingDetails', {search: searchVal});
      }, 350);
    }, 250);
  }
  function speechStart() {
    console.log('Speech start');
    setSearchButton(true);
  }

  function onChangesText(text: string) {
    searchVal = text;
    setSearchedText(text);
    // console.log(' onChangesText: ', text);
  }

  function onSearchError(error: any) {
    setSearchButton(false);
    console.log('hiiiiii 1 onSpeechError : ', JSON.stringify(error?.error));
    // if (searchedText.length > 0) {
    //   setSearchModalVisible(false);
    //   setSearchedText('');
    // } else if (error?.error?.message === '203/Retry') {
    //   setSearchedText('Your voice was not recognize.Try again.');
    // }
    var message = error?.error?.message;
    if (
      message === '203/Retry' ||
      message === '7/No match' ||
      message === '5/Client side error' ||
      message ===
        '1110/The operation couldn’t be completed. (kAFAssistantErrorDomain error 1110.)'
    ) {
      setTitle('Did not hear that.Try again');
      setSearchedText('Tap the microphone to try again.');
    } else {
      setTimeout(() => {
        if (searchedText.length > 0) {
          setSearchModalVisible(false);
          setSearchedText('');

          setTimeout(() => {
            navigation.push('bookingDetails', {search: searchVal});
          }, 350);
        }
      }, 250);
    }
  }

  function onSearchEndEditing(text: string) {
    console.log('onSearchEndEditing', text);
    navigation.push('bookingDetails', {search: text});
  }

  function NearByPropertyNavigator() {
    navigation.navigate('mySavedPropertyDetail', {isbookigDetails: true});
  }

  function RecentSearchHandler(property) {
    const address = property.location + ',' + property.city;
    setSelectedText(address);
    navigation.push('bookingDetails', {search: address});
    // onChangesText(address);
  }

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

  const [data, setData] = useState(sortOptions);

  const PressHandler = element => {
    let newArray = data.map(el =>
      el.title === element.item.title
        ? {...el, isLiked: !element.item.isLiked}
        : {...el, isLiked: false},
    );
    setData(newArray);
  };

  return (
    <View style={wrapper}>
      <ImageBackground
        source={{
          uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/bgblur.png',
        }}
        // source={require('../../../assets/images/bgblur.png')}
        resizeMode="contain"
        style={bgImage}
      />
      <View style={navbarContainer}>
        {/* <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.75}>
          <Image
            source={require('../../../assets/images/caretarrow.png')}
            style={navbarContainerImage}
          />
        </TouchableOpacity> */}
        <Text style={screenTitle}>Search</Text>
        <View style={navbarContainerOfRightSideImages}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.75}>
            <Image
              source={require('../../../assets/images/sortandfilter.png')}
              style={navbarContainerImageRight}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterModalVisible(true)}
            activeOpacity={0.75}>
            <Image
              source={require('../../../assets/images/SortFilter.png')}
              style={navbarContainerImageRight}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView bounces={false}>
        <View style={searchBar}>
          <SearchBarEnabled
            childRef={childRef}
            onSpeechStartProps={speechStart}
            onSpeechEndProps={speechEnd}
            onChangesText={onChangesText}
            onSearchEndEditing={onSearchEndEditing}
            isSelectedText={isSelectedText}
            onSearchError={onSearchError}
            onPress={() => setSearchModalVisible(true)}
          />
        </View>
        <RecentSearches
          Data={defaultProps}
          onPress={property => RecentSearchHandler(property)}
        />
        <View style={{backgroundColor: 'black', width: '100%'}}>
          <View style={flatlistView}>
            <NearbyProperties
              Data={propertyData}
              containerStyle={{}}
              onPress={NearByPropertyNavigator}
              seeMorePress={() =>
                navigation.navigate('seeAll', {title: 'Nearby Properties'})
              }
            />
          </View>
          <Footer isVisible={true} />
        </View>
      </ScrollView>
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
        style={modalView}>
        <View style={modalContainer}>
          <View style={{height: isTablet() ? 90 : 50}}>
            <Divider
              style={modalTopDivider}
              width={isTablet() ? 8 : 5}
              color="#77777750"
            />
          </View>
          <View style={modalTextContainer}>
            <Text style={modalTextStyle}>Sort By</Text>
            <Divider
              style={modalTextDivider}
              color="black"
              width={isTablet() ? 6 : 3}
            />
          </View>
          <FlatList
            style={{
              top: isTablet() ? 10 : -10,
              marginBottom: isTablet() ? 35 : 15,
            }}
            data={data}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  PressHandler(item);
                  setTimeout(() => {
                    setModalVisible(false);
                  }, 350);
                }}>
                <View style={modalCheckBoxStyle}>
                  <View
                    style={[
                      SortingBack,
                      {
                        backgroundColor: item.item.isLiked
                          ? colors.secondary
                          : '#00000000',
                      },
                    ]}>
                    <Text style={SortingText}>{item.item.title}</Text>
                    <Image
                      source={require('../../../assets/images/checked_icon.png')}
                      style={[
                        SortingImage,
                        {
                          tintColor: item.item.isLiked ? 'black' : 'white',
                        },
                      ]}
                    />
                  </View>

                  {/* <CheckBoxComponent
                  wrapperStyle={listWraperStyle}
                  title={item.item.title}
                  checkedTitle={item.item.title}
                  iconRight={true}
                  checked={item.item.isSelected}
                  onPress={() => {
                    console.log(item.item.title);
                  }}
                /> */}
                </View>
              </TouchableOpacity>
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
        style={modalView}>
        <View style={filterModalContainer}>
          <View style={{height: 50}}>
            <Divider
              style={modalTopDivider}
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

      <Modal
        isVisible={searchModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        style={modalView}>
        <View style={SearchDialog}>
          <View style={SearchDialog}>
            <View
              style={[
                SearchDialog,
                {
                  padding: '8%',
                  backgroundColor: '#00000040',
                },
              ]}>
              <View>
                <Text style={Listening}>{title}</Text>
                {searchedText.length <= 0 ? (
                  <View style={VisibleView}>
                    <Text style={Something}>Say something like :</Text>
                    <Text style={Suggestion}>&#8226;{'   Apartments..'} </Text>
                    <Text style={Suggestion}>&#8226;{'   Bungalows..'} </Text>
                  </View>
                ) : (
                  <Text style={TextSearched}>{searchedText}</Text>
                )}
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  if (!searchButton) {
                    childRef.current.forceStartVoice();
                    setTitle('Listening...');
                    setSearchedText('');
                  } else {
                    childRef.current.forceStopVoice();
                  }
                }}>
                <View style={SearchCircle}>
                  <ImageButton
                    source={
                      searchButton
                        ? require('../../../assets/images/mic_g.gif')
                        : require('../../../assets/images/mic.png')
                    }
                    style={GIFImage}
                    onPress={() => {
                      if (!searchButton) {
                        childRef.current.forceStartVoice();
                        setTitle('Listening...');
                        setSearchedText('');
                      } else {
                        childRef.current.forceStopVoice();
                      }
                    }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  childRef.current.forceStopVoice();
                  setSearchedText('');
                  setTitle('Listening...');
                  setSearchModalVisible(false);
                }}>
                <Image
                  style={CancelButton}
                  source={require('../../../assets/images/cancel.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
