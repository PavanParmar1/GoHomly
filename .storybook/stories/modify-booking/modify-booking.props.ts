import {TextStyle, ViewStyle} from 'react-native';
import {ButtonProps} from '../button/button.props';

export interface ModifyBookingProps {
  container?: ViewStyle;
  heading?: TextStyle;
  headingStyle?: ViewStyle;
  text?: TextStyle;
  textStyle?: ViewStyle;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  onPress?: () => void;
}
