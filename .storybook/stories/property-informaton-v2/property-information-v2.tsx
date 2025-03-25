import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Divider} from '@rneui/base';
import {Fonts} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';
import {colors} from '../../../app/theme';
import useOrientation from '../../../app/hooks/useOrientation';
import useSize from '../../../app/hooks/useSize';
import PropertyInfoV2Style from './property-information-v2.presets';
import {PropertyInformationProps} from './property-information-v2.props';

const PropertyInformations = (props: PropertyInformationProps) => {
  const {dimensions, orientation} = useOrientation();
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.window.width;
  const {
    getWidth,
    getHeight,
    getWidthTab,
    Font13,
    Font10,
    Font17,
    Font9,
    Font16,
    Font14,
    Font12,
    Font11,
    Font18,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
  } = useSize();
  const styles = PropertyInfoV2Style(
    windowWidth,
    getWidth,
    getHeight,
    getWidthTab,
    Font13,
    Font10,
    Font17,
    Font9,
    Font16,
    Font14,
    Font12,
    Font11,
    Font4,
    Font5,
    Font6,
    Font7,
    Font8,
    orientation,
    screenWidth,
  );

  const convertToAmPm = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const parsedHours = parseInt(hours, 10);
    const ampm = parsedHours >= 12 ? 'PM' : 'AM';
    const formattedHours = parsedHours % 12 === 0 ? 12 : parsedHours % 12;
    const formattedMinutes =
      parseInt(minutes, 10) < 10 ? `${minutes}` : minutes;

    const propss = 11.5;

    return formattedHours
      ? `${formattedHours}:${formattedMinutes} ` // ${ampm} add for AM | PM
      : 'No Dates Found';
  };
  return (
    <View style={styles.CONTAINER_STYLE}>
      <View style={styles.ITEM_INFORMATION_INNER_CONTAINER}>
        <Text style={styles.PROPERTY_TITLE_HEADER_STYLE} numberOfLines={2}>
          {props?.titleLabel}
        </Text>
        {props.rate && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '15%',
              // backgroundColor: 'pink',
            }}
            activeOpacity={0.75}
            accessible={true}
            accessibilityLabel={`Rating of ${props.titleLabel}`}
            onPress={props?.onPressReview}>
            <Image
              // resizeMode="contain"
              style={styles.ICON}
              source={require('../../../assets/images/rate_star.png')}
            />
            <Text style={styles.RATE_STYLE}>
              {props?.rate ? parseFloat(props?.rate).toFixed(1) : ''}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.PROPERTY_SUB_DESCRIPTION_STYLE}>
        {props?.subTitle}
      </Text>

      <Divider
        style={{
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '2%'
              : '3%',
          borderColor: 'lightgrey',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '0%'
              : isTablet()
                ? '2%'
                : '0%',
          justifyContent: 'space-between',
          width: '100%',
          // backgroundColor: 'yellow',
        }}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={`Layout Of ${props.titleLabel}`}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: isTablet() ? getWidthTab(48) : getWidth(48),
            // backgroundColor: 'pink',
            // width: '33%',
          }}
          onPress={() => {
            props?.onModalPress && props?.onModalPress();
          }}>
          <Image
            style={[styles.IMAGE_STYLE]}
            source={require('../../../assets/images/layout.png')}
            resizeMode="contain"
          />
          <Text style={styles.TEXT_STYLE}>Layout</Text>
          <View style={{height: 30}}>
            <Image
              style={{
                height:
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? getWidthTab(9)
                    : isTablet()
                      ? getHeight(7)
                      : getHeight(15),
                width:
                  orientation === 'landscape' && windowWidth === screenWidth
                    ? getWidthTab(10)
                    : getWidth(10),
                resizeMode: 'contain',
                alignContent: 'center',
              }}
              source={require('../../../assets/images/info.png')}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // width: '33%',
          }}>
          <Image
            style={[styles.IMAGE_STYLE]}
            source={
              props?.isChildAllowed
                ? require('../../../assets/images/child.png')
                : require('../../../assets/images/children_not_allowed.png')
            }
            resizeMode="contain"
          />

          <Text style={styles.TEXT_STYLE}>Children</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // width: '33%',
          }}>
          <Image
            style={[styles.IMAGE_STYLE]}
            source={
              props?.isPetAllowed
                ? require('../../../assets/images/dog_allowed.png')
                : require('../../../assets/images/no_dogs.png')
            }
            resizeMode="contain"
          />
          <Text style={styles.TEXT_STYLE}>Dogs</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // width: '33%',
          }}>
          <Image
            style={[styles.IMAGE_STYLE]}
            source={
              props?.isSomkingAllowed
                ? require('../../../assets/images/smoking_allowed.png')
                : require('../../../assets/images/no_smoking.png')
            }
            resizeMode="contain"
          />

          <Text style={styles.TEXT_STYLE}>Smoking</Text>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          marginTop: '1%',
          justifyContent: 'flex-start',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '33%',
          }}>
          <Image
            style={[IMAGE_STYLE]}
            source={
              props?.isPetAllowed
                ? require('../../../assets/images/pet.png')
                : require('../../../assets/images/no-pet.png')
            }
            resizeMode="contain"
          />
          <Text style={TEXT_STYLE}>Pets</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '33%',
          }}>
          <Image
            style={[IMAGE_STYLE]}
            source={
              props?.isPetAllowed
                ? require('../../../assets/images/disabled.png')
                : require('../../../assets/images/no_disabled.png')
            }
            resizeMode="contain"
          />

          <Text style={TEXT_STYLE}>Disabled</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '33%',
          }}>
          <Image
            style={[IMAGE_STYLE]}
            source={
              props?.isSomkingAllowed
                ? require('../../../assets/images/smoking_allowed.png')
                : require('../../../assets/images/no_smoking.png')
            }
            resizeMode="contain"
          />

          <Text style={TEXT_STYLE}>Smoking</Text>
        </View>
      </View> */}

      <Divider
        style={{
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '0%'
              : isTablet()
                ? '2%'
                : '0%',
          borderColor: 'lightgrey',
        }}
      />

      <View style={[styles.INNER_CONTAINER]}>
        <View style={styles.INNER_CONTAINER}>
          {props?.checkIn && (
            <View>
              <Text style={styles.SUBTITLE}>Check-In</Text>
              <Text style={styles.DATEANDTIME} numberOfLines={1}>
                {convertToAmPm(
                  props?.checkIn,
                  // || '01/03/2024 11:00:25'.split(' ')[1],
                )}
              </Text>
            </View>
          )}
        </View>
        <View
          style={[
            styles.INNER_CONTAINER,
            {marginStart: isTablet() ? '10%' : '15%'},
          ]}>
          {props?.checkOut && (
            <View>
              <Text style={styles.SUBTITLE}>Check-Out</Text>
              <Text style={styles.DATEANDTIME} numberOfLines={1}>
                {convertToAmPm(
                  props?.checkOut,
                  // || '01/03/2024 09:00:30'.split(' ')[0],
                )}
              </Text>
            </View>
          )}
        </View>
      </View>

      <Text
        style={{
          marginTop:
            orientation === 'landscape' && windowWidth === screenWidth
              ? '2%'
              : '4%',
          fontFamily: Fonts.SFProRounded.Bold,
          color: colors.secondary,
          marginStart: '1%',
          fontSize:
            orientation === 'landscape' && windowWidth === screenWidth
              ? Font10
              : isTablet()
                ? Font14
                : Font18,
        }}>
        {/* £{props?.price} */}£
        {props?.price % 1 === 0 ? `${props?.price}.00` : props?.price}
      </Text>
    </View>
  );
};

export default PropertyInformations;
