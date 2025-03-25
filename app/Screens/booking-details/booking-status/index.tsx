import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import BadgeComponent from '../../../../.storybook/stories/badge/badge';
import styles from './styles';

interface BookingStatusItemProps {
  size?: number;
  position?: number;
  item?: any;
}
export const BookingStatusItem = (props: BookingStatusItemProps) => {
  const {size, position} = props;
  const [bgcolor, setBgColor] = useState<string>('white');
  const [badgeColor, setBadgeColor] = useState<string>('#777777');
  const [title, setTitle] = useState<string>('Initial Booking');

  useEffect(() => {
    if (size === 3 && position === 2) {
      setBgColor('rgba(255, 193, 197, 0.46)');
      setBadgeColor('#FB6B73');
    } else if (size === 2 && position === 1) {
      setBgColor('#DFF9EB');
      setBadgeColor('#5BB183');
    }
    if (position === 2) {
      setTitle('Cancel Booking');
    } else if (position === 1) {
      setTitle('Update Booking');
    }
  }, [position, size]);

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.dateView}>
        <Text
          style={styles.dateColor}
          numberOfLines={1}
          minimumFontScale={0.1}
          adjustsFontSizeToFit>
          {'14/03'}
        </Text>
      </View>

      <View style={styles.badgeTopView}>
        <View style={styles.badgesubTopView}>
          <BadgeComponent
            status="primary"
            badgeStyle={[styles.badgeStyle, {backgroundColor: badgeColor}]}
            containerStyle={[
              styles.badgeContainerStyle,
              {backgroundColor: bgcolor},
            ]}
          />
          {props.position !== props.size - 1 && <View style={styles.divider} />}
        </View>
        <View style={{width: '89%', marginLeft: -1}}>
          <View style={[styles.tittleViewStyle, {backgroundColor: bgcolor}]}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <View style={styles.reser_number}>
              <Text style={styles.title1}>{'Reserve Date'}</Text>
              <Text
                style={styles.title2}
                numberOfLines={1}
                minimumFontScale={0.1}
                adjustsFontSizeToFit>
                {'14/03/2022 to 17/03/2022'}
              </Text>
            </View>
            <View style={styles.reser_number}>
              <Text style={styles.title1}>{'Guest Count'}</Text>
              <Text style={styles.title2}>{'John + 2 Person'}</Text>
            </View>
            <View style={styles.reser_number}>
              <Text style={styles.title1}>{'Card Details'}</Text>
              <Text style={styles.title2}>{'*** 1234'}</Text>
            </View>
            <View style={styles.reser_number}>
              <Text style={styles.title1}>{'Amount'}</Text>
              <Text style={styles.title2}>{'£1000'}</Text>
            </View>
            <View style={styles.reser_number}>
              <Text style={styles.title1}>{'Room type'}</Text>
              <Text style={styles.title2}>{'Double Bed'}</Text>
            </View>
            <View style={styles.reser_number} />
          </View>
        </View>
      </View>
    </View>
  );
};
