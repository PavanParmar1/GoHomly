import {BackHandler, Image, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';

import ProfileScreenStyle from './styles';
import {isTablet} from 'react-native-device-info';
import {Button} from '../../../.storybook/stories/button/button';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import useOrientation from '../../hooks/useOrientation';
import useSize from '../../hooks/useSize';

const ReportModal = (props: any) => {
  const {orientation, dimensions} = useOrientation();
  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  const screenWidth = dimensions.screen.width;
  const {
    getWidth,
    getWidthTab,
    getHeight,
    Font10,
    Font12,
    Font11,
    Font13,
    Font15,
    Font16,
    Font17,
    Font18,
    Font8,
    Font7,
    Font6,
  } = useSize();
  const styles = ProfileScreenStyle(
    getWidth,
    getHeight,
    getWidthTab,
    windowWidth,
    windowHeight,
    Font10,
    Font12,
    Font11,
    Font13,
    Font15,
    Font16,
    Font17,
    Font18,
    Font8,
    Font7,
    orientation,
    screenWidth,
    Font6,
  );

  const {dismiss} = useBottomSheetModal();

  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImageWidth = () => {
    let imageWidth = (100 * windowWidth) / 375;
    if (isTablet()) {
      imageWidth = (221 * windowWidth) / 834;
    }
    return imageWidth;
  };
  const getImageHeight = () => {
    let imageHeight = (100 * windowWidth) / 375;
    if (isTablet()) {
      imageHeight = (143 * windowWidth) / 834;
    }
    return imageHeight;
  };

  const snapPoints = useMemo(() => ['45%', '50%', '60%'], []);

  const snapPointLandscape = useMemo(() => ['45%', '70%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View>
      <BottomSheetModal
        ref={props.bottomSheetModalRef}
        index={1}
        snapPoints={
          orientation === 'landscape' && windowWidth === screenWidth
            ? snapPointLandscape
            : snapPoints
        }
        enableDynamicSizing={false}
        backdropComponent={BottomSheetBackdrop}
        enablePanDownToClose={true}
        handleIndicatorStyle={{marginTop: '3%', width: '10%'}}
        onChange={handleSheetChanges}>
        <BottomSheetView>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/mobile_shake.png')}
              resizeMode="contain"
              accessible={true}
              accessibilityLabel="Back Icon"
              style={[{height: getImageHeight(), width: getImageWidth()}]}
            />
          </View>

          <Text style={styles.logoText}>
            Go back to where you saw the problem and {'\n'} shake your phone
          </Text>

          <Text style={styles.logoSubText}>
            Did you encounter a problem? Please shake your phone{'\n'}where you
            see it to help us find and fix the issue faster.
          </Text>

          <Button
            loading={false}
            containerStyle={
              isTablet()
                ? styles.signUpButtonContainerTablet
                : styles.signUpButtonContainer
            }
            buttonStyle={
              isTablet() ? styles.loginButtonTablet : styles.loginButton
            }
            titleStyle={isTablet() ? styles.loginTextTablet : styles.loginText}
            title={'Go back and shake phone'}
            onPress={() => dismiss()}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default ReportModal;
