import {Divider} from '@rneui/themed-edge';
import React, {useState} from 'react';
import {View, Text, FlatList, Platform} from 'react-native';
// import {Button} from '@rn-community/button';
import {
  WRAPPER,
  CONTAINER,
  HEADER_CONTAINER,
  FOOTER_CONTAINER,
  FOOTER_DATA_CONTAINER,
  TEXT,
  TITLE,
  CHARGE_CONTAINER,
  CHARGES,
  AMOUNT,
  BUTTON_CONTAINER,
  BUTTON_TITLE,
  DIVIDER,
  MODAL_STYLE,
  SUB_TITLE,
} from './book-property.presets';
import Modal from 'react-native-modal';
import {bookPropertyProps} from './book-property.props';
import RemoveCleaningFees from '../remove-cleaning-fees/remove-cleaning-fees';
import {Button} from '../button/button';
import {isTablet} from 'react-native-device-info';
import {
  Font11,
  Font14,
  Font15,
  getWidth,
  getWidthTab,
} from '../../../app/utils/common';
import ImageButton from '../image-button/imagebutton';
import {colors} from '../../../app/theme';
import RefundPolicy from '../refund-policy/refund-policy';

const PriceDetails = props => {
  const data = props.data;
  const PressHandler = () => {
    props.onPress(data.item.charge);
  };
  return (
    <View style={CONTAINER}>
      <View style={CHARGE_CONTAINER}>
        <Text style={CHARGES}>{data.item.charge}</Text>
        {/* {data.index !== 0 && data.item.charge !== 'Tax' && (
            <View>
              <Button
                title={'Remove'}
                type={'clear'}
                titleStyle={BUTTON}
                onPress={PressHandler}
              />
            </View>
          )} */}
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: isTablet() ? getWidthTab(35) : getWidth(22),
          // width: isTablet() ? '22%' : '26%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={AMOUNT}>{data.item.amount}</Text>
      </View>
    </View>
  );
};

const renderHeader = () => {
  return (
    <>
      <View style={HEADER_CONTAINER}>
        <Text style={TITLE}>Book Property</Text>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: isTablet() ? getWidthTab(35) : getWidth(22),
            width: isTablet() ? '23%' : '28%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: 0,
          }}></View>
      </View>
      <Text style={SUB_TITLE}>1 Room, 3 Guest</Text>
    </>
  );
};
const RenderFooter = props => {
  return (
    <View style={FOOTER_CONTAINER}>
      <Divider width={1} color="lightgrey" />
      <View style={FOOTER_DATA_CONTAINER}>
        <Text style={[CHARGES, {color: 'black', fontWeight: '700'}]}>
          Grand Total
        </Text>
        {/* <Text style={AMOUNT}> £125</Text> */}
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: isTablet() ? getWidthTab(35) : getWidth(22),
            // width: isTablet() ? '22%' : '26%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={AMOUNT}> £ 125</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#F4F4F4',
          flexDirection: 'column',
          padding: isTablet() ? '2%' : '4%',
          borderRadius: getWidth(10),
        }}>
        <Text
          style={[
            CHARGES,
            {
              color: 'black',
              fontWeight: '600',
              alignSelf: 'flex-start',
              marginTop: isTablet() ? '2%' : '2%',
            },
          ]}>
          Discount
        </Text>

        <View style={{marginTop: isTablet() ? '2%' : '5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={CHARGES}>21 Days</Text>
            <Text style={[AMOUNT, {fontSize: isTablet() ? Font11 : Font14}]}>
              10%{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: isTablet() ? '2%' : '3%',
            }}>
            <Text style={CHARGES}>28 Days</Text>
            <Text style={[AMOUNT, {fontSize: isTablet() ? Font11 : Font14}]}>
              10%{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: isTablet() ? '2%' : '3%',
            }}>
            <Text style={CHARGES}>400 Days</Text>
            <Text style={[AMOUNT, {fontSize: isTablet() ? Font11 : Font14}]}>
              50%{' '}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: isTablet() ? '5%' : '10%',
          marginHorizontal: isTablet() ? '5%' : '5%',
          marginBottom: isTablet() ? '5%' : '7%',
        }}>
        <RefundPolicy />
      </View>
      <Button
        title="Continue to pay"
        buttonStyle={BUTTON_CONTAINER}
        titleStyle={BUTTON_TITLE}
        onPress={props.onPress}
      />
    </View>
  );
};
const emptyList = () => {
  return <></>;
};

const BookPropertyV2 = (props: bookPropertyProps) => {
  const priceList = props.priceList;
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('Cleaning Fee');
  const toggleModal = (val: any) => {
    setTitle(val);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={WRAPPER}>
      {/* <Divider width={3} insetType="middle" style={DIVIDER} /> */}
      <FlatList
        ListEmptyComponent={emptyList}
        ListHeaderComponent={renderHeader}
        data={priceList}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={data => <PriceDetails data={data} onPress={toggleModal} />}
        ListFooterComponent={<RenderFooter onPress={props.payment()} />}
      />
      <Modal
        isVisible={isModalVisible}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={MODAL_STYLE}>
        <View>
          <RemoveCleaningFees
            heading={'Remove ' + title + ' ?'}
            onPress={toggleModal}
            onPress1={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default BookPropertyV2;
