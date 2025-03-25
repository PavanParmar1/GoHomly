import {ViewStyle} from 'react-native';
import {ButtonProps} from '../button/button.props';
import {TextFieldProps} from '../input-field/input-field.props';

export interface AddNewCardProps {
  container?: ViewStyle;
  innerContainer?: ViewStyle;
  inputField?: TextFieldProps;
  button?: ButtonProps;
}
