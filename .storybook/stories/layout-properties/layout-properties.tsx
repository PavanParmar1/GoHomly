import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

import {Divider} from '@rneui/base';
import LayoutPropertiesStyle from './layout-properties.presets';
import Accordion from 'react-native-collapsible/Accordion';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

const LayoutProperties = (props: any) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    getHeight,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font16,
    Font11,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
  } = useSize();
  const styles = LayoutPropertiesStyle(
    getHeight,
    windowWidth,
    Font10,
    Font12,
    Font14,
    Font16,
    Font11,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
  );

  const [activeSections, setActiveSections] = useState([0]);

  const CONTENT = [
    {
      title: 'Bedrooms',
      content: props?.data?.BedRooms,
    },

    {
      title: 'Living Room',
      content: props?.data?.LivingRooms,
    },

    {
      title: 'Bathroom',
      content: props?.data?.BathRooms,
    },

    {
      title: 'Kitchen',
      content: props?.data?.Kitchens,
    },
  ];
  const renderHeader = (section: any, index: any, isActive: any) => {
    return (
      <>
        {/* <>{console.log(section.content, 'section.content')}</> */}
        {section?.content?.length === 0 || section?.content === undefined ? (
          <View></View>
        ) : (
          <View
            key={index}
            style={styles.CONTAINER}
            accessible={true}
            accessibilityLabel="title of the layout">
            <Text style={styles.CONTAINER_TEXT}>{section.title}</Text>

            <Image
              source={
                isActive
                  ? require('../../../assets/images/minus_icon.png')
                  : require('../../../assets/images/add_icon.png')
              }
              resizeMode="contain"
              style={styles.ICON}
            />
          </View>
        )}
      </>
    );
  };

  const renderContent = (section: any) => {
    return section.title == 'Living Room' || section.title == 'Bedrooms' ? (
      <View
        accessible={true}
        accessibilityLabel="Property layout Info"
        style={{
          marginHorizontal:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '22%'
              : '8%',
        }}>
        <FlatList
          data={section?.content}
          scrollEnabled={false}
          renderItem={item => (
            <View
              style={{
                marginVertical:
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? '1.5%'
                    : '2%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.LIST_TEXT]}>{item.item.Name}</Text>
                <Text style={[styles.LIST_TEXT1, {color: '#777777'}]}>
                  {item.item.type}
                </Text>
              </View>

              <View
                accessible={true}
                accessibilityLabel="number of beds"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop:
                    orientation === 'landscape' && windowWidth === screenWidth
                      ? '1.5%'
                      : '3%',
                }}>
                <Text style={styles.LIST_TEXT1}>{'No. Beds'}</Text>
                <Text style={styles.LIST_TEXT2}>{item.item.NoOfBeds}</Text>
              </View>

              <View
                accessible={true}
                accessibilityLabel="number of person can sleep"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.LIST_TEXT1}>{'Person can sleep'}</Text>
                <Text style={styles.LIST_TEXT2}>
                  {item.item.PersonCanSleep}
                </Text>
              </View>

              <View
                accessible={true}
                accessibilityLabel="number of bathrooms"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <>
                  <Text style={styles.LIST_TEXT1}>{'Private Bathroom'}</Text>
                  <Text style={styles.LIST_TEXT2}>
                    {item.item.FlgPrivateBathRoom ? 'Yes' : 'No'}
                  </Text>
                </>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <Divider color="lightgrey" />}
        />
      </View>
    ) : (
      <FlatList
        accessible={true}
        accessibilityLabel="Other Content"
        data={section.content}
        scrollEnabled={false}
        renderItem={item => (
          <View
            style={{
              marginHorizontal:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? '22%'
                  : '8%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical:
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? '1.5%'
                    : '3%',
              }}>
              <Text style={styles.LIST_TEXT}>{item.item.Name}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <Divider
            color="lightgrey"
            style={{
              marginHorizontal:
                orientation === 'landscape' && windowWidth === screenWidth
                  ? '22%'
                  : '8%',
            }}
          />
        )}
      />
    );
  };

  const setSections = (sections: any) => {
    setActiveSections(sections);
  };

  return (
    <View
      style={{
        paddingVertical:
          orientation === 'landscape' && windowWidth === screenWidth
            ? '2%'
            : '7%',
      }}
      accessible={true}
      accessibilityLabel="Property Layouts">
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
  );
};

export default LayoutProperties;
