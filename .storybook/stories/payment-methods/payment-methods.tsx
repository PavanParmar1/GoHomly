import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import {PaymentMethodProps} from './payment-methods.props';
import PaymentMethodStyle from './payment-methods.preset';
import useSize from '../../../app/hooks/useSize';
import useOrientation from '../../../app/hooks/useOrientation';

const PaymentMethods = (props: PaymentMethodProps) => {
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
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
  } = useSize();
  const styles = PaymentMethodStyle(
    getWidth,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    Font9,
    orientation,
    screenWidth,
    windowWidth,
  );

  const renderItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding:
          orientation === 'landscape' && windowWidth === screenWidth
            ? getWidthTab(6)
            : '2%',
      }}>
      <Text
        style={[
          styles.TEXT,
          {
            fontSize: 5,
            marginStart:
              orientation === 'landscape' && windowWidth === screenWidth
                ? '2%'
                : '0%',
          },
        ]}>
        {'\u2B24'}
      </Text>
      <Text style={styles.TEXT}>{item.Name}</Text>
    </View>
  );

  return (
    <>
      {props?.data.length !== 0 && (
        <View style={styles.CONTAINER}>
          <View style={styles.TITLE_CONTAINER}>
            <Text style={styles.TITLE}>{props.Title}</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item: any) => item.Id.toString()}
            data={props.data}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Divider color="lightgrey" />}
          />
        </View>
      )}
    </>
  );
};

export default PaymentMethods;
