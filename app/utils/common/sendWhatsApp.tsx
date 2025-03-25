import {Linking, Platform} from 'react-native';
import {showErrorToast} from './Toast';

export const sendWhatsApp = (phone: string) => {
  let msg = 'type something';
  let phoneWithCountryCode = phone;

  let mobile =
    Platform.OS === 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
      Linking.openURL(url)
        .then(() => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          showErrorToast('Make sure WhatsApp installed on your device');
        });
    } else {
      showErrorToast('Please insert message to send');
    }
  } else {
    showErrorToast('Please insert mobile no');
  }
};
