import {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';

export let windowWidthActual: any;
export let windowHeightActual: any;

export function useResizeHook() {
  const [isTablet, setTablet] = useState(false);
  let width = useWindowDimensions().width;
  windowWidthActual = useWindowDimensions().width;
  windowHeightActual = useWindowDimensions().height;
  useEffect(() => {
    width >= 600 ? setTablet(true) : setTablet(false);
  }, [width]);
  //   console.log(width);

  return isTablet;
}
