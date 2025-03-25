import {ImageStyle} from 'react-native';

export interface RecentNotificationProps {
  icon?: ImageStyle;
  title?: string;
  Description?: string;
  notification?: boolean;
  onPress: (notiId:any,status:any) => void;
  data:any
}
