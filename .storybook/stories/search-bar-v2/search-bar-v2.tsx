import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {searchBarV2Props} from './search-bar-v2.props';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
import SearchBarStyleV2 from './search-bar-v2.preset';

const SearchBarV2 = (props: searchBarV2Props) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const {
    Font4,
    Font5,
    Font12,
    Font7,
    Font10,
    Font8,
    Font6,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = SearchBarStyleV2(
    getWidth,
    getWidthTab,
    windowWidth,
    Font12,
    Font10,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    screenWidth,
    orientation,
  );
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <>
      {!props.isLoading && (
        <View style={styles.CONTAINER_STYLE}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={props.address}
            activeOpacity={0.65}
            style={styles.INNER_CONTAINER_STYLE}
            onPress={props.onPressItem}>
            <Image
              resizeMode="contain"
              style={styles.SEARCH_ICON}
              source={require('../../../assets/images/search/search_icon.png')}
              accessible={true}
              accessibilityLabel="Search Icon"
            />
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.TEXT_STYLE}>{props.address}</Text>
              <Text style={styles.SUB_TEXT_STYLE}>{props.otherData}</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity accessible={true}
            accessibilityLabel={'filter'} activeOpacity={0.65} onPress={props.onIconPress}>
        <Image
          resizeMode="contain"
          style={ICON}
          source={require('../../../assets/images/filter2.png')}
        />
      </TouchableOpacity> */}
        </View>
      )}

      {props.isLoading && (
        <View style={styles.CONTAINER_STYLE}>
          <ShimmerPlaceHolder style={styles.SHIMMER_INNER_CONTAINER_STYLE} />
        </View>
      )}
    </>
  );
};

export default SearchBarV2;
