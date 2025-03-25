import {TextFieldProps} from '../input-field/input-field.props';

export interface ContactUsProps extends TextFieldProps {
  name?: string;
  email?: string;
  phoneNumber?: string | number;
  photoId?: any;
  concern?: string;
}
