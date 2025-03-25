import {ViewStyle} from 'react-native';
import {ButtonProps} from '../button/button.props';

export interface RemoveCleaningFeesProps {
  container?: ViewStyle;
  heading?: string;
  headingStyle?: ViewStyle;
  text?: string;
  textStyle?: ViewStyle;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  onPress?: (agr: string) => void;
  onPress1?: (agr: string) => void;
  divider?: boolean;
}
