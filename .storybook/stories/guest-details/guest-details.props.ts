import {ViewStyle, TextStyle} from 'react-native';
export interface GuestDetailsProps {
  container?: ViewStyle;
  innerContainer?: ViewStyle;
  title?: TextStyle;
  name?: string;
  nameStyle?: TextStyle;
  email?: string;
  isButtonVisible?: boolean;
  phoneNumber?: string | number;
  onEditPress?: (index: number) => void | undefined;
  onCheckinPress?: (index: number) => void | undefined;
  onCheckoutPress?: (index: number) => void | undefined;
  onUploadPress?: (index: number) => void | undefined;
  onVerifyPress?: () => void;
  checkInStatus?: string;
  // onDeletePress?: (index: number) => void | undefined;
  index?: number;
  isLeadPerson?: boolean;
  data?: any;
  countOfRequstedDocumentsByProperty?: number;
}
