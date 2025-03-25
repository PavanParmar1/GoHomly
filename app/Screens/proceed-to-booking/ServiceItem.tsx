import {View, Text, Switch, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  DIVIDER,
  DROPDOWN_BTN_CONTAINER,
  DROPDOWN_CONTAINER,
  RENDERCONTAINER,
  lableStyle,
  lableStyle1,
  modal2,
  scrollableModal2,
  serviceItemContainer,
} from './styles';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {isTablet} from 'react-native-device-info';
import {capitalizeFirstLetter, getWidth, getWidthTab} from '../../utils/common';
import Modal from 'react-native-modal';
import {Divider} from '@rneui/base';

interface ServiceItem {
  item: any;
  addServiceToggle: any;
  onSelectedItemChange: (selectedItem: any) => void;
  multiRateId: number;
  multiRateItem: any;
}

const ServiceItem = (props: ServiceItem) => {
  const [selectedItem, setSelectedItem] = useState<any>(
    props.multiRateItem || props?.item?.ObjFinPrFeeHeadMultiRate[0],
  );
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDropdownItemPress = (selected: any) => {
    setSelectedItem(selected);
    props.onSelectedItemChange(selected);
    setModalVisible(false);
  };
  return (
    <>
      <View style={serviceItemContainer}>
        <View style={RENDERCONTAINER}>
          <View style={{width: '80%'}}>
            <Text style={[lableStyle, {color: '#121212'}]}>
              {capitalizeFirstLetter(props.item?.Name)}
              {'  '}
              <Text style={[lableStyle]}>({props.item?.CalculationBase})</Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '20%',
            }}>
            <Switch
              trackColor={{true: colors.secondary}}
              thumbColor={props.item.isSelected ? 'white' : '#f4f3f4'}
              onValueChange={() => {
                props.addServiceToggle(props.item.Id);
              }}
              disabled={props.item.FlgAutoApplyOnBooking ? true : false}
              value={
                props.item.FlgAutoApplyOnBooking ? true : props.item.isSelected
              }
            />
          </View>
        </View>
        {props.item.ObjFinPrFeeHeadMultiRate.length >= 1 ? (
          <TouchableOpacity
            style={DROPDOWN_CONTAINER}
            activeOpacity={0.65}
            onPress={toggleModal}>
            <View style={DROPDOWN_BTN_CONTAINER}>
              <Text
                style={[
                  lableStyle1,
                  {
                    marginEnd: isTablet() ? getWidthTab(20) : getWidth(10),
                  },
                ]}>
                {selectedItem
                  ? `£(${parseFloat(selectedItem?.Amount).toFixed(2)})  ${
                      selectedItem.MultiRateName
                    }`
                  : 'Select'}
              </Text>
              <Icon
                name={'chevron-down'}
                size={isTablet() ? 30 : 22}
                style={{opacity: 0.5}}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <Text
              style={[
                lableStyle1,
                {marginEnd: isTablet() ? getWidthTab(20) : getWidth(10)},
              ]}>
              {props.item?.Amount}
            </Text>
          </>
        )}
      </View>
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        swipeDirection="down"
        propagateSwipe={true}
        style={modal2}>
        <View style={scrollableModal2}>
          <Divider width={4} inset={true} insetType="middle" style={DIVIDER} />
          <View style={{marginTop: '2%'}}>
            <FlatList
              data={props.item?.ObjFinPrFeeHeadMultiRate}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    // padding: 20,
                    paddingVertical: 15,
                    paddingHorizontal: '2%',
                  }}
                  activeOpacity={0.65}
                  onPress={() => handleDropdownItemPress(item)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={[lableStyle1, {color: '#121212'}]}>
                      {`£(${parseFloat(item.Amount).toFixed(2)})  ${
                        item.MultiRateName
                      }`}
                    </Text>
                    {selectedItem.Id === item.Id && (
                      <Icon
                        name="checkmark-sharp"
                        size={25}
                        color={colors.secondary}
                        // style={{width: '10%', marginLeft: '5%'}}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => (
                <Divider style={{marginLeft: '5%'}} />
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ServiceItem;
