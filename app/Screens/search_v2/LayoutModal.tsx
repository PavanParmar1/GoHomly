import {View, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import LayoutProperties from '../../../.storybook/stories/layout-properties/layout-properties';
import Modal from 'react-native-modal';
import {LayoutTypes} from './searchType';
import useOrientation from '../../hooks/useOrientation';
import SearchScreenStyle from './styles_v2';
import useSize from '../../hooks/useSize';
import {isTablet} from 'react-native-device-info';

interface LayoutModalProps {
  isLayoutModalVisible: boolean;
  setLayoutModalVisible: any;
  data: LayoutTypes;
}

const LayoutModal = (props: LayoutModalProps) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;
  const windowHeight = dimensions.window.height;
  const {
    Font10,
    Font12,
    Font16,
    Font8,
    Font14,
    Font7,
    Font9,
    Font4,
    Font5,
    Font6,
    getWidthTab,
    getWidth,
  } = useSize();
  const styles = SearchScreenStyle(
    getWidth,
    getWidthTab,
    windowHeight,
    windowWidth,
    Font12,
    Font16,
    Font10,
    Font8,
    Font14,
    Font7,
    Font9,
    Font4,
    Font5,
    Font6,
    orientation,
    screenWidth,
  );

  return (
    <Modal
      accessibilityLabel="layout Modal"
      accessible={true}
      testID={'modal'}
      isVisible={props.isLayoutModalVisible}
      onBackButtonPress={() => props.setLayoutModalVisible(false)}
      onBackdropPress={() => props.setLayoutModalVisible(false)}
      onSwipeComplete={() => props.setLayoutModalVisible(false)}
      swipeDirection="down"
      scrollOffsetMax={400 - 300} // content height - ScrollView height
      propagateSwipe={true}
      onBackButtonPress={() => props.setLayoutModalVisible(false)}
      style={styles.modalView1}>
      <View style={styles.filterModalContainer}>
        <Divider
          width={isTablet() ? 8 : 5}
          // inset={true}
          insetType="middle"
          style={styles.DIVIDER}
        />
        <ScrollView scrollEventThrottle={16}>
          <LayoutProperties data={props?.data} />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LayoutModal;
