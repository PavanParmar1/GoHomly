import React, {useCallback, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  CONTAINER,
  INNER_CONTAINER,
  TEXT_CONTAINER,
  BADGE_CONTAINER,
  BADGE_INNER_CONTAINER,
  IMAGE,
  TITLE,
  INFO,
} from './recent-notification.presets';
import BadgeComponent from '../badge/badge';
import {RecentNotificationProps} from './recent-notification.props';
import {Fonts, getWidth, getWidthTab} from '../../../app/utils/common';
import {colors} from '../../../app/theme';
import {MoreOrLess} from '@rntext/more-or-less';

import {isTablet} from 'react-native-device-info';

export default function RecentNotification(props: RecentNotificationProps) {
  const icon = props?.data.icon;
  const title = props?.data.Subject;
  const description = props?.data.MessageBody;

  const img = require('../../../assets/images/home_icon.png');

  const stripHtmlTags = (html: any) => {
    return html
      .replace(/<br\s*\/?>/gi, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ');
  };

  const [lengthMore, setLengthMore] = useState(false);
  const [textShown, setTextShown] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e: any) => {
    setLengthMore(e.nativeEvent.lines.length > 1);
    // console.log(e.nativeEvent.lines.length, 'e.nativeEvent');
    // console.log(lengthMore, textShown);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress(props?.data.id, props?.data.FlgMessageRead);
      }}
      accessible={true}
      accessibilityLabel={`Notification ${description}`}
      activeOpacity={0.6}
      style={CONTAINER}>
      <View style={INNER_CONTAINER}>
        <View
          style={{
            justifyContent: 'flex-start',
            marginTop: isTablet() ? getWidthTab(8) : getWidth(5),
          }}>
          {!props?.data.FlgMessageRead ? (
            <View style={BADGE_CONTAINER}>
              <BadgeComponent
                containerStyle={BADGE_INNER_CONTAINER}
                imagePath={icon || img}
                // onPress={() => {
                //   // setNotification(false);
                // }}
              />
            </View>
          ) : (
            <Image
              source={icon || img}
              style={IMAGE}
              accessible={true}
              accessibilityLabel="Notification Icon"
            />
          )}
        </View>

        <View style={TEXT_CONTAINER}>
          <Text
            style={[
              TITLE,
              {
                color: !props?.data.FlgMessageRead
                  ? 'black'
                  : 'rgba(0, 0, 0, 0.6)',
                fontFamily: !props?.data.FlgMessageRead
                  ? Fonts.SFProRounded.SemiBold
                  : Fonts.SFProRounded.Regular,
              },
            ]}
            numberOfLines={1}>
            {title || 'Immediately check your dream house'}
          </Text>
          {/* <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 1}
            style={[
              INFO,
              {
                color: !props?.data.FlgMessageRead
                  ? 'black'
                  : 'rgba(0, 0, 0, 0.6)',
              },
            ]}>
            {stripHtmlTags(description)}
          </Text> */}

          <MoreOrLess
            numberOfLines={1}
            // textComponent={()=><Text/>}
            textButtonStyle={{color: colors.secondary}}
            textStyle={[
              INFO,
              {
                color: !props?.data.FlgMessageRead
                  ? 'black'
                  : 'rgba(0, 0, 0, 0.6)',
              },
            ]}>
            {stripHtmlTags(description)}
          </MoreOrLess>

          {lengthMore ? (
            <Text
              onPress={toggleNumberOfLines}
              style={[INFO, {color: colors.secondary}]}>
              {textShown ? 'Read less...' : 'Read more...'}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}
