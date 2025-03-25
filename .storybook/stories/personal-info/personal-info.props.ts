import {TextFieldProps} from '../input-field/input-field.props';

export interface PersonalInfoProps extends TextFieldProps {
  name?: string;
  surname?: string;
  phoneNumber?: string | number;
  emailId?: string;
  vaccination?: any;
  vaccinationDate?: Date | string;
}
