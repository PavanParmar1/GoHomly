import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TaxAndServicesStyle from './tax-services.preset';
import {TaxServiceProps} from './tax-services.props';
import {isTablet} from 'react-native-device-info';
import {capitalizeFirstLetter} from '../../../app/utils/common';

import {Divider} from '@rneui/base';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';

const TaxServices = (props: TaxServiceProps) => {
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
    Font8,
    Font9,
    Font4,
    Font5,
    Font6,
    Font7,
  } = useSize();
  const styles = TaxAndServicesStyle(
    getWidth,
    getWidthTab,
    Font10,
    Font12,
    Font14,
    Font18,
    Font8,
    Font9,
    Font4,
    Font5,
    Font6,
    Font7,
    orientation,
    screenWidth,
    windowWidth,
  );

  // const renderItem = ({item}: any) => (
  //   <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //     <Text
  //       style={[TEXT, {fontSize: 5, marginStart: isTablet() ? '2%' : '3%'}]}>
  //       {'\u2B24'}
  //     </Text>
  //     <Text style={TEXT}>{item.MultiRateName}</Text>
  //   </View>
  // );

  const renderItem = ({item}: any) => (
    <>
      <View style={[styles.serviceItemContainer]}>
        <View style={styles.RENDERCONTAINER}>
          <View style={{width: '80%', flexDirection: 'row'}}>
            <Text style={styles.lableStyle1}>
              {capitalizeFirstLetter(item?.Name)}
              {'  '}
              <Text style={styles.lableStyle}>({item?.CalculationBase})</Text>
            </Text>
          </View>
          {item?.Amount !== ' %' && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '20%',
              }}>
              <Text
                style={[
                  styles.lableStyle1,
                  {marginEnd: isTablet() ? getWidthTab(20) : getWidth(10)},
                ]}>
                {item?.Amount}
              </Text>
            </View>
          )}
        </View>
        {item?.ObjFinPrFeeHeadMultiRate?.length >= 1 && (
          <FlatList
            data={item?.ObjFinPrFeeHeadMultiRate}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '1%',
                }}>
                <Text style={[styles.TEXT, {fontSize: 5}]}>{'\u2B24'}</Text>
                <Text style={styles.subitemText}>{`£(${parseFloat(
                  item?.Amount,
                ).toFixed(2)})  ${item?.MultiRateName}`}</Text>
              </View>
            )}
          />
        )}
      </View>
    </>
  );

  return (
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
  );
};

export default TaxServices;
