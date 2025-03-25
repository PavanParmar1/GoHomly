import {ImageProps, ImageURISource} from 'react-native';

export interface PropertyOwnerProps {
  ownerAvatar?: ImageURISource;
  ownerName?: string;
  ownerType?: string;
  rightIconFirst?: ImageProps;
  rightIconSecond?: ImageProps;
  onPress?: () => {};
}
