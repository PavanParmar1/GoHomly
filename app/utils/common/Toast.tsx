import Toast, {BaseToast} from 'react-native-toast-message';

export const showToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'top',
  });
};

export const showInfoToast = (message: string) => {
  Toast.show({
    type: 'info',
    text1: message,
    position: 'top',
  });
};

export const showErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'top',
  });
};

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#69C779'}}
      text1NumberOfLines={4}
    />
  ),

  info: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#87CEFA'}}
      text1NumberOfLines={4}
    />
  ),
  error: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#FE6301'}}
      text1NumberOfLines={4}
    />
  ),
};
