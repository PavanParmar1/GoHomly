import * as React from 'react';
import {View, Text} from 'react-native';
import ImageButton from '../image-button/imagebutton';
import styles from './styles';
import {Divider} from '@rneui/base-edge';

interface ToolbarProps {
  title?: string | 'Hello,Jean';
  onBackPress?: () => void;
}

const SimpleToolBar = (props: ToolbarProps) => {
  const {title, onBackPress} = props;
  return (
    <View style={styles.mainViewStyle}>
      <Text style={styles.title}>{title}</Text>
      <ImageButton
        source={require('../../../assets/images/back.png')}
        touchOpecity={0.35}
        onPress={onBackPress}
        style={styles.styleContainer1}
        containerStyle={styles.containerStyle1}
      />
      {/* <View style={styles.divider} /> */}
      <Divider />
    </View>
  );
};

export default SimpleToolBar;
