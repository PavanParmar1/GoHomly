import {TextStyle, ViewStyle} from 'react-native';

export interface GuestBookProps {
  title?: string;
  titleStyle?: TextStyle;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  HeaderContainer?: ViewStyle;
  query?: {
    id: any;
    question: string;
    answer: string;
    isExpanded: boolean;
  }[];
  containerStyle: ViewStyle;
}
export interface GuestBookItemProps {
  data?: object | undefined;
  onPress?: (id: any) => void;
}
