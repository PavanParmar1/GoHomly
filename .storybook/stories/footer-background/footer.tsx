/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getWidth, getWidthTab, windowHeight} from '../../../app/utils/common';
import {FooterProps} from './footer.props';

export default function Footer(props: FooterProps) {
  const {isVisible = false} = props;
  const insets = useSafeAreaInsets();

  function isVisibleFooter() {
    if (isVisible) {
      return getHeight();
    } else {
      return 0;
    }
  }

  function isMarginVisible() {
    if (isVisible) {
      return getMarginBottom();
    } else {
      return 0;
    }
  }

  function getHeight() {
    return isTablet()
      ? Platform.OS === 'ios'
        ? Math.max(insets.bottom + 10, 16) + 85
        : Math.max(insets.bottom + 10, 16) + getWidthTab(50)
      : Math.max(insets.bottom + 10, 16) + 52;
  }

  function getMarginBottom() {
    return Platform.OS === 'ios' ? (windowHeight < 736 ? 20 : 0) : getWidth(20);
  }

  return (
    <View
      style={{
        height: isVisibleFooter(),
        backgroundColor: 'black',
        width: '100%',
        marginBottom: isMarginVisible(),
        ...props?.style
      }}
    />
  );
}
