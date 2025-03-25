import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  BUTTON_CONTAINER,
  BUTTON_FONT_STYLE,
  BUTTON_FONT_STYLE1,
  BUTTON_STYLE,
  BUTTON_STYLE1,
  ICON,
  INNER_CONTAINER,
  filterModalContainer,
  modalView,
  styles,
} from './styles';
import RangeSliderV2 from '../../../../.storybook/stories/range-slider-v2/range-slider-v2';
import {PropertySelection} from '../../../../.storybook/stories/property--selection-filter/property-selection';
import MultipleSelection from '../../../../.storybook/stories/multiple-selection/multiple-selection';
import {Rating} from 'react-native-ratings';
import {isTablet} from 'react-native-device-info';
import {getWidth, getWidthTab} from '../../../utils/common';
import {Divider} from '@rneui/base';
import CheckBoxComponent from '../../../../.storybook/stories/check-box/check-box';
import Accordion from 'react-native-collapsible/Accordion';
import {DIVIDER} from '../styles';
import Modal from 'react-native-modal';
import {sectionTypes} from '../searchType';
import {colors} from '../../../theme';

const starImage = require('../../../../assets/images/startpsd.png');

interface FilterModalProps {
  ModalVisible: boolean;
  handleCloseModal: any;
  handleScrollTo: any;
  scrollOffset: any;
  scrollViewRef: any;
  setModalVisible: any;
}

const propertyType = [
  {
    id: 1,
    option: 'Any',
    isSelected: true,
  },
  {
    id: 2,
    option: 'Studio',
    isSelected: false,
  },
  {
    id: 3,
    option: 'House',
    isSelected: false,
  },
  {
    id: 4,
    option: 'Motel',
    isSelected: false,
  },
  {
    id: 5,
    option: 'Apartment',
    isSelected: false,
  },
];

const CONTENT = [
  {
    title: 'Technology',
    content: [
      {title: 'DVD'},
      {title: 'Computer with free ASDL internet access'},
      {title: 'TV 3D '},
      {title: 'Internet Connection'},
      {title: 'Printer'},
    ],
  },
  {
    title: 'Basics',
    content: [
      {title: 'DVD'},
      {title: 'Computer with free ASDL internet access'},
      {title: 'TV 3D '},
      {title: 'Internet Connection'},
      {title: 'Printer'},
    ],
  },
  {
    title: 'Rooms',
    content: [
      {title: 'DVD'},
      {title: 'Computer with free ASDL internet access'},
      {title: 'TV 3D '},
      {title: 'Internet Connection'},
      {title: 'Printer'},
    ],
  },
];

export default function FilterModalV2(props: FilterModalProps) {
  const [ratings, setRatings] = useState('4.5');
  const [activeSections, setActiveSections] = useState([]);
  const ratingCompleted = (rating: any) => {
    setRatings(rating);
  };

  const renderHeader = (
    section: sectionTypes,
    index: number,
    isActive: boolean,
    sections: sectionTypes,
  ) => {
    const isLastSection = index === sections.length - 1;

    return (
      <>
        <View style={styles.randerHeader}>
          <Text style={styles.acoordianTitleTextStyle}>{section.title}</Text>

          <Image
            source={
              isActive
                ? require('../../../../assets/images/minus_icon.png')
                : require('../../../../assets/images/add_icon.png')
            }
            resizeMode="contain"
            style={[ICON]}
          />
        </View>
        {!isLastSection && (
          <Divider style={[styles.devider]} color={'#7777774D'} />
        )}
      </>
    );
  };

  const renderContent = (section: sectionTypes) => {
    return (
      <View style={styles.randerContent}>
        <>{console.log(JSON.stringify(section), 'sections=========')}</>
        <FlatList
          scrollEnabled={false}
          data={section.content}
          renderItem={({item}) => (
            <View style={[INNER_CONTAINER]}>
              <Text style={styles.textStyle}>{item.title}</Text>

              <CheckBoxComponent
                right={false}
                iconRight={false}
                checkedIcon="checkbox-outline"
                uncheckedIcon="square-outline"
                size={isTablet() ? 30 : 20}
                iconType="ionicon"
                checkedColor={colors.secondary}
                uncheckedColor="#D0D5DD"
                onPress={() => {}}
                title=" "
                checkedTitle=" "
                containerStyle={{
                  width: isTablet() ? '3.5%' : '5%',
                  marginHorizontal: isTablet() ? '0%' : '0%',
                  padding: 0,
                  marginRight: isTablet() ? '0%' : '0%',
                  paddingRight: isTablet() ? '0%' : '0%',
                }}
              />
            </View>
          )}
        />
      </View>
    );
  };

  const setSections = (sections: any) => {
    setActiveSections(sections);
  };

  const handlefilterSubmit = () => {
    props.setModalVisible(false);
    console.log('clicked');
    console.log(props.ModalVisible);
  };

  return (
    <Modal
      isVisible={props.ModalVisible}
      onBackdropPress={props.handleCloseModal}
      onSwipeComplete={props.handleCloseModal}
      swipeDirection={'down'}
      scrollTo={props.handleScrollTo}
      scrollOffset={props.scrollOffset}
      scrollOffsetMax={400 - 300}
      propagateSwipe={true}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      style={modalView}>
      <View style={filterModalContainer}>
        <Divider style={DIVIDER} width={isTablet() ? 8 : 5} color="#77777750" />

        <ScrollView
          style={styles.filterModalContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.propertyTypeContainer}>
            <Text style={styles.filterModalTextStyle}>Property Type</Text>
            <MultipleSelection options={propertyType} />
          </View>
          <View style={styles.priceRangeWrapper}>
            <Text style={styles.filterModalTextStyle}>Price Range</Text>
            <View style={styles.priceRangeSlider}>
              <RangeSliderV2 />
            </View>
          </View>
          <View
            style={{
              marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
            }}>
            <Text style={styles.roomsAndBedsTextStyle}>Rooms and beds</Text>
            <PropertySelection
              title={'Bedrooms'}
              value={0}
              onChange={() => {
                console.log('clicked');
              }}
              showDivider={true}
            />
            <PropertySelection
              title={'Bathrooms'}
              value={0}
              onChange={() => {
                console.log('clicked');
              }}
              showDivider={true}
            />
            <PropertySelection
              title={'Kitchen'}
              value={0}
              onChange={() => {
                console.log('clicked');
              }}
              showDivider={true}
            />

            <PropertySelection
              title={'Leaving room'}
              value={0}
              onChange={() => {
                console.log('clicked');
              }}
              showDivider={false}
            />
          </View>

          <View
            style={{
              marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
            }}>
            <Text style={styles.roomsAndBedsTextStyle}>Amenities</Text>

            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={400}
              onChange={setSections}
              renderAsFlatList={false}
            />
          </View>

          <View
            style={{
              marginTop: isTablet() ? getWidthTab(30) : getWidth(30),
              marginHorizontal: isTablet() ? getWidthTab(10) : 0,
            }}>
            <Text style={styles.roomsAndBedsTextStyle}>Rating</Text>

            <View style={styles.ratingStyle}>
              <Text style={styles.ratingText}>{ratings}</Text>
              <Rating
                type="custom"
                ratingImage={starImage}
                ratingColor="#FFA91C"
                startingValue={ratings}
                ratingBackgroundColor="#FFA91C35"
                onFinishRating={(r: number) => ratingCompleted(r)}
                tintColor="white"
                ratingCount={5}
                imageSize={34}
                showRating={false}
              />
            </View>
            <View style={BUTTON_CONTAINER}>
              <TouchableOpacity
                onPress={handlefilterSubmit}
                style={BUTTON_STYLE1}>
                <Text style={BUTTON_FONT_STYLE1}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('clicked');
                }}
                style={BUTTON_STYLE}>
                <Text style={BUTTON_FONT_STYLE}>Clear All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
