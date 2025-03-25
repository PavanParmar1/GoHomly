import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {App} from '../../../assets/images/map';
import {isTablet} from 'react-native-device-info';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';
import getPropertyStyles from './styles';

const GetInProperty = ({navigation}: {navigation: any}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Get In Property'}</Text>,
      headerShadowVisible: true,
    });
  }, [navigation]);

  const {dimensions, orientation} = useOrientation();
  const screenWidth = dimensions.screen.width;
  const windowWidth = dimensions.window.width;
  const {
    Font5,
    Font7,
    Font9,
    Font10,
    Font12,
    Font14,
    Font16,
    getWidth,
    getWidthTab,
    navbarHeader,
    navbarImage,
    navbarTitle,
  } = useSize();
  const styles = getPropertyStyles(
    Font5,
    Font7,
    Font9,
    Font10,
    Font12,
    Font14,
    Font16,
    orientation,
    screenWidth,
    windowWidth,
  );

  const Data = [
    {
      title: 'Waiting For Docs',
      Data: [
        {
          text: 'When status is “Waiting For Docs”, it means You needs to Upload Documents.',
        },
        {
          text: 'Please follow Steps mention below to Upload Documents.',
        },
      ],
    },
    {
      title: 'Screening In Process',
      Data: [
        {
          text: 'When status is “Screening In Process”, it means Documents are Uploaded, and it’s under the verification by Property Host / Approval Authority.',
        },
      ],
    },

    {
      title: 'Screening Completed',
      Data: [
        {
          text: 'When status is “Screening Completed”, it means Documents are verified by Property Host / Approval Authority. You can press option “Get Property In”.',
        },
      ],
    },

    {
      title: 'Screening Failed',
      Data: [
        {
          text: 'When status is "Screening Failed", It mens for any of document was rejected by Property Host/ Approval Authority.',
        },

        {
          text: 'Rejection could be any of following, ex. Bad quality, not readable, Not a document, Invalid document type, Document expired, etc.',
        },
      ],
    },

    {
      title: 'Checked In',
      Data: [
        {
          text: 'When status is “Checked In”, It means you are inside the Property.',
        },
      ],
    },

    {
      title: 'Checked Out',
      Data: [
        {
          text: 'When status is “Checked Out”, It means you have left the Property.',
        },
      ],
    },
    {
      title: 'Verification Not Required',
      Data: [
        {
          text: 'When status is “Verification Not Required”, It means you can directly check in to the property without any verification.',
        },
      ],
    },
  ];

  const FooterData = [
    {
      text: 'Press on Edit option on Guest List, You can see two tabs, Guest Details and Upload Documents.',
    },
    {
      text: 'Press on Upload Documents Tab, You will see Upload Icon for Pending Upload Documents, while see View Icon for Uploaded Documents',
    },
  ];

  const innerRenderItem = ({item}: any) => (
    <View style={styles.innerContainer}>
      <Text style={styles.bulletPoint}>{'\u2B24'}</Text>
      <Text style={styles.subText}>{item.text}</Text>
    </View>
  );

  const _renderItem = ({item, index}: any) => (
    <View>
      <View style={styles.renderItem}>
        <Image
          style={{
            width:
              orientation === 'landscape' && screenWidth === windowWidth
                ? getWidthTab(15)
                : isTablet()
                  ? getWidthTab(25)
                  : getWidth(15),
            height:
              orientation === 'landscape' && screenWidth === windowWidth
                ? getWidthTab(15)
                : isTablet()
                  ? getWidthTab(25)
                  : getWidth(15),
          }}
          source={require('../../../assets/images/get_in_bullet.png')}
          resizeMode="contain"
        />
        <Text style={styles.subHeader}>{item.title}</Text>
      </View>

      <View
        style={[
          styles.divider,
          {
            borderLeftWidth: index === Data.length - 1 ? 0 : isTablet() ? 2 : 1,
          },
        ]}>
        <FlatList data={item.Data} renderItem={innerRenderItem} />
      </View>
    </View>
  );

  const footerRenderItem = ({item}: any) => (
    <View style={styles.innerContainer}>
      <Text style={[styles.bulletPoint, {textAlign: 'center', width: '5%'}]}>
        {'\u2B24'}
      </Text>
      <Text style={[styles.subText, {marginStart: '0%'}]}>{item.text}</Text>
    </View>
  );

  const footerItem = () => (
    <View style={{paddingBottom: '10%', marginTop: isTablet() ? '2%' : '6%'}}>
      <Text style={styles.headerText}>Steps to Upload Documents</Text>

      <FlatList data={FooterData} renderItem={footerRenderItem} />
    </View>
  );

  const headerItem = () => (
    <View
      style={{
        marginTop: isTablet() ? '3%' : '3%',
        marginBottom: isTablet() ? '1%' : '1%',
      }}>
      <Text style={styles.headerText}>Steps To Get In Property</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        style={{
          paddingHorizontal: isTablet() ? 30 : 15,
        }}
        renderItem={_renderItem}
        ListHeaderComponent={headerItem}
        ListFooterComponent={footerItem}
      />
    </View>
  );
};

export default GetInProperty;
