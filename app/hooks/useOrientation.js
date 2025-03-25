import {useEffect, useState} from 'react';
import {Dimensions, Platform} from 'react-native';

const useOrientation = () => {
  const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');
  const _windowWidth = Dimensions.get('window').width;
  const _windowHeight = Dimensions.get('window').height;

  const [windowWidth, setWindowWidth] = useState(_windowWidth);
  const [windowHeight, setWindowHeight] = useState(_windowHeight);

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const [orientation, setOrientation] = useState(
    isPortrait() == true ? 'portrait' : 'landscape',
  );

  // const isLandscape = () => {
  //   const dim = Dimensions.get('screen');
  //   return dim.width >= dim.height;
  // };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setOrientation(isPortrait() == true ? 'portrait' : 'landscape');
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return {
    dimensions,
    windowWidth,
    windowHeight,
    orientation,
  };
};

export default useOrientation;
