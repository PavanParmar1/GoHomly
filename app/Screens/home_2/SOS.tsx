import React from 'react';
import {View} from 'react-native';
import {Divider} from '@rneui/themed';
import Modal from 'react-native-modal';
import Sos from '../../../.storybook/stories/sos/sos';
import styles, {modal, scrollableModal} from './styles';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {callNumber} from '../../utils/common/callNumber';

interface SOSModalProps {
  isModalVisible: boolean;
  setModalVisible: any;
}

/* const Numbers = [
  {
    title: '911 (Police)',
    number: '911',
  },
  {
    title: '112 (Ambulance)',
    number: '112',
  },
];

const UKNumbers = [
  {
    title: '991 (Police)',
    number: '991',
  },
  {
    title: '112 (Ambulance)',
    number: '112',
  },
]; */

function SOSModal(props: SOSModalProps) {
  const arrEmergencyNumber = useSelector(
    (state: any) => state?.Search?.arrCurrentCountryEmergencyNumber,
  );
  return (
    <Modal
      testID={'modal'}
      isVisible={props.isModalVisible}
      onBackdropPress={() => props.setModalVisible(false)}
      onSwipeComplete={() => props.setModalVisible(false)}
      onBackButtonPress={() => props.setModalVisible(false)}
      swipeDirection="down"
      propagateSwipe={true}
      style={modal}>
      <View style={scrollableModal}>
        <Divider
          width={4}
          inset={true}
          insetType="middle"
          style={styles.DIVIDER}
        />
        <Sos
          numPress={(item: string, index: number) => {
            if (index === 0) {
              callNumber(item);
            } else {
              callNumber(item);
            }
          }}
          // data={UKNumbers}
          data={arrEmergencyNumber}
        />
      </View>
      <Toast />
    </Modal>
  );
}
export default SOSModal;
