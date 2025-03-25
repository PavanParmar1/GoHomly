import React from 'react';
import {Text, Image, View, FlatList, TouchableOpacity} from 'react-native';
import {
  INNER_CONTAINER,
  PRIMARY_TEXT_STYLE,
  SECONDARY_TEXT_STYLE,
  LEFT_ICON_STYLE,
  RIGHT_ICON_STYLE,
  TEXT_CONTAINER,
  ICON_LEFT,
  ICON_RIGHT,
  OUTER_CONTAINER,
  TITLE_STYLE,
} from './recent-searches.presets';
import {RecentSearchesProps} from './recent-searches.props';

// const defaultProps = [
//   {
//     id: 1,
//     location: '23street',
//     city: 'London',
//   },
//   {
//     id: 2,
//     location: 'Gladstone Street',
//     city: 'Liverpool',
//   },
//   {
//     id: 3,
//     location: '23street',
//     city: 'London',
//   },
//   {
//     id: 4,
//     location: '23street',
//     city: 'Wells',
//   },
// ];

export default function RecentSearches(props: RecentSearchesProps) {
  const Data = props.Data;
  // console.log(Data.length);

  function clickHandler(property: RecentSearchesProps) {
    props.onPress(property);
  }
  function RenderList({item}) {
    return (
      <TouchableOpacity onPress={() => clickHandler(item)} activeOpacity={0.75}>
        <View style={INNER_CONTAINER}>
          <View style={LEFT_ICON_STYLE}>
            <Image
              source={require('../../../assets/images/Essential-Time.png')}
              style={ICON_LEFT}
            />
          </View>
          <View style={TEXT_CONTAINER}>
            <Text style={PRIMARY_TEXT_STYLE}>{item.location}</Text>
            <Text style={SECONDARY_TEXT_STYLE}>{item.city}</Text>
          </View>
          <View style={RIGHT_ICON_STYLE}>
            <Image
              source={require('../../../assets/images/Essential-navigation-arrow.png')}
              style={ICON_RIGHT}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function isEmptyData() {
    let isEmpty = false;
    if (!Data || Data === undefined || Data.length === 0) {
      return isEmpty;
    }
  }

  return (
    <>
      {isEmptyData() && <> </>}
      {!isEmptyData() && (
        <View style={OUTER_CONTAINER}>
          <Text style={TITLE_STYLE}>Recent Searches</Text>
          <FlatList scrollEnabled={false} data={Data.slice(0, 3)} renderItem={RenderList} />
        </View>
      )}
      {/* {Data && Data.length <= 3 && (
        <View style={OUTER_CONTAINER}>
          <Text style={TITLE_STYLE}>Recent Searches</Text>
          <FlatList data={Data} renderItem={RenderList} />
        </View>
      )}
      {Data && Data.length > 3 && (
        <View style={OUTER_CONTAINER}>
          <Text style={TITLE_STYLE}>Recent Searches</Text>
          <FlatList data={Data.slice(0, 3)} renderItem={RenderList} />
        </View>
      )} */}
    </>
  );
}
