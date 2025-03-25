import {View, Text, FlatList} from 'react-native';
import React from 'react';

import {Divider} from '@rneui/base';
import {isTablet} from 'react-native-device-info';
import {RefundPolicyProps} from './refund-policy.props';
import {capitalizeFirstLetter} from '../../../app/utils/common';

const renderItem = ({item, index}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: isTablet() ? '2%' : '2%',
        // alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: isTablet() ? '2%' : '3%',
      }}>
      {/* <Text style={BULLET_POINT}>{'\u2B24'}</Text> */}

      {item.Text && (
        <Text numberOfLines={2} style={SUBTITLE}>
          {capitalizeFirstLetter(item.Text)}
        </Text>
      )}
    </View>
  );
};
import useSize from '../../../app/hooks/useSize';
import RefundPolicyStyle from './refund-policy.presets';
import useOrientation from '../../../app/hooks/useOrientation';
import { SUBTITLE } from '../booking-details/booking-details.presets';

const RefundPolicy = (props: RefundPolicyProps) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {
    getWidth,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font18,
    Font9,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
  } = useSize();
  const styles = RefundPolicyStyle(
    getWidth,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font18,
    Font9,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    orientation,
    screenWidth,
    windowWidth,
  );

  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? getWidthTab(6)
              : isTablet()
                ? '2%'
                : '2%',
          // alignItems: 'flex-start',
          width: '100%',
          paddingHorizontal: isTablet() ? '2%' : '3%',
        }}>
        {/* <Text style={BULLET_POINT}>{'\u2B24'}</Text> */}

        <Text numberOfLines={2} style={styles.SUBTITLE}>
          {capitalizeFirstLetter(item.Text)}
        </Text>
      </View>
    );
  };

  return (
    <>
      {props.data.length !== 0 && (
        <View style={styles.CONTAINER}>
          <Text style={styles.TITLE}>Refund Policy</Text>
          {/* <Text style={SUBTITLE}>
        If a guest cancels a booking, how much will be deducted from the booking
        amount?
      </Text> */}

          <FlatList
            scrollEnabled={false}
            data={props.data}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <Divider
                color="lightgrey"
                style={{
                  marginTop: isTablet() ? '2%' : '2%',
                  marginHorizontal: isTablet() ? '2%' : '3%',
                }}
              />
            )}
          />
        </View>
      )}
    </>
  );
};

export default RefundPolicy;
