import {ImageSourcePropType} from 'react-native';

export interface EventProps {
  placeImage?: ImageSourcePropType;
  placeName?: string | Date;
  placeAddress?: string;
  isLiked?: boolean;
  onPressItem?: () => void;
  favOnPress?: () => void;
}
